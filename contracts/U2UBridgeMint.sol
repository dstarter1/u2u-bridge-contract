// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface U2V {
    function mint(address to, uint256 amount) external;
}

contract U2UBridgeMint is Ownable, ReentrancyGuard {
    using SafeERC20 for ERC20;
    event MintToken(
        address indexed token,
        address indexed toAccount,
        uint256 indexed amount,
        bytes32 originHash
    );
    event BurnToken(
        address indexed token,
        address indexed fromAccount,
        address indexed toAccount,
        uint256 amount
    );

    event TwoWayBridgeFlagChange(bool indexed flag);
    event AllowTokenEvent(address indexed token, bool indexed flag);
    event SetModOfTokenEvent(
        address indexed token,
        address indexed account,
        bool indexed flag
    );

    mapping(address => bool) public isTokenAllowBridge;
    mapping(address => mapping(address => bool)) isModOfToken;

    address public dead = 0x000000000000000000000000000000000000dEaD;
    bool public twoWayBridgeFlag = false;
    mapping(address => uint256) public totalLockOfToken;

    function set2WayBridgeFlag(bool flag) public onlyOwner {
        twoWayBridgeFlag = flag;
        emit TwoWayBridgeFlagChange(flag);
    }

    function setTokenAllow(address token, bool flag) public onlyOwner {
        isTokenAllowBridge[token] = flag;
        emit AllowTokenEvent(token, flag);
    }

    function setTokenMod(
        address token,
        address account,
        bool flag
    ) public onlyOwner {
        isModOfToken[token][account] = flag;
        emit SetModOfTokenEvent(token, account, flag);
    }

    function mintToken(
        address token,
        address toAccount,
        uint256 amount,
        bytes32 originHash
    ) external nonReentrant {
        require(isTokenAllowBridge[token], "U2U-BRidge: token not allow");
        require(
            isModOfToken[token][_msgSender()],
            "U2U-Bridge: user not allow call"
        );
        totalLockOfToken[token]+= amount;
        U2V u2v = U2V(token);
        u2v.mint(toAccount, amount);
        emit MintToken(token, toAccount, amount, originHash);
    }

    function burnToken(
        address token,
        address toAccount,
        uint256 amount
    ) external nonReentrant {
        require(twoWayBridgeFlag, "U2U-Bridge: action not allow");
        require(isTokenAllowBridge[token], "U2U-Bridge: token not allow");
        ERC20 tokenBridge = ERC20(token);
        totalLockOfToken[token]-= amount;
        tokenBridge.safeTransferFrom(_msgSender(), dead, amount);
        emit BurnToken(token, _msgSender(), toAccount, amount);
    }
}
