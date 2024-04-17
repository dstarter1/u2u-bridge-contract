// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

interface Bridge{
    function lockToken(
        address token,
        address toAccount,
        uint256 amount
    ) external;
}

contract MultiSend is Ownable  {
    using SafeERC20 for ERC20;

    function approve(address token ,address contractBridge, uint256 amount) external onlyOwner() {
        ERC20(token).approve(contractBridge, amount);
    }

    function multiSend(address token, address bridgeAdd, address[] memory toAdd, uint256 amount)  external  {
        Bridge bridge1 = Bridge(bridgeAdd);
        for(uint256 i=0;i<toAdd.length;i++){
           bridge1.lockToken(token, toAdd[i], amount);
        }

    }
    function multiSend2(address payable[] memory toAdds, uint256 amount) external payable {
          for(uint256 i=0;i<toAdds.length;i++){
            toAdds[i].transfer(amount);
        }
    }
    function multiSend3(address token, address [] memory toAdds, uint256 amount) external  {
        ERC20 erc20Token = ERC20(token);
        for(uint256 i=0;i<toAdds.length;i++){
           erc20Token.safeTransferFrom(msg.sender,toAdds[i],amount);
        }
    }
     function multiSend4(address token, address[] memory toAdds, uint256[] memory amounts) external  {
        ERC20 erc20Token = ERC20(token);
        for(uint256 i=0;i<toAdds.length;i++){
           erc20Token.safeTransferFrom(msg.sender,toAdds[i],amounts[i]);
        }
    }
    

}