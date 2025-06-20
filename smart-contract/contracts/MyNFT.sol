pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721Enumerable, Ownable {
    uint256 public nextTokenId = 1;

    constructor() ERC721("MyNFT", "MNFT") {}

    function safeMint(address to) public onlyOwner {
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://your-api.com/metadata/"; // optional metadata base URI
    }
}
