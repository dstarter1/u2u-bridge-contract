// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract U2UBridgeLock is Ownable, ReentrancyGuard {
    using SafeERC20 for ERC20;
    event Lock(
        address indexed token,
        address indexed fromAccount,
        address indexed toAccount,
        uint256 amount
    );
    event UnLock(
        address indexed token,
        address indexed toAccount,
        uint256 indexed amount,
        bytes32 originHash
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
    mapping(address => uint256) public totalLockOfToken;
    bool public twoWayBridgeFlag = false;

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

    function lockToken(
        address token,
        address toAccount,
        uint256 amount
    ) external nonReentrant {
        require(isTokenAllowBridge[token], "U2U-BRidge: token not allow");
        ERC20 tokenBridge = ERC20(token);
        totalLockOfToken[token] += amount;
        tokenBridge.safeTransferFrom(_msgSender(), address(this), amount);
        
        emit Lock(token, _msgSender(), toAccount, amount);
    }

    function unLockToken(
        address token,
        address toAccount,
        uint256 amount,
        bytes32 originHash
    ) external nonReentrant {
        require(twoWayBridgeFlag, "U2U-Bridge: action not allow");
        require(isTokenAllowBridge[token], "U2U-Bridge: token not allow");
        require(
            isModOfToken[token][_msgSender()],
            "U2U-Bridge: user not allow call"
        );
        ERC20 tokenBridge = ERC20(token);
        totalLockOfToken[token] -= amount;
        tokenBridge.safeTransfer(toAccount, amount);
       
        emit UnLock(token, toAccount, amount, originHash);
    }
}
