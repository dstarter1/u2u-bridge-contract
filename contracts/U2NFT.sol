//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract U2UNFT is ERC721, Ownable {

    uint256 private _nextTokenId;
    string public _baseNftURI;
    
    constructor() ERC721("U2U NFT Card", "U2U-NFT") {
      
    }

    function setBaseURI(string calldata uri) external onlyOwner{
        _baseNftURI = uri;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseNftURI;
    }

    function safeMint(address to) public  {
         uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }

   

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
   

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}