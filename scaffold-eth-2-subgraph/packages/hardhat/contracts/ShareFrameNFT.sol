// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

//import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";


// contract address in base:        0xb31e157f357e59c4D08a3e43CCC7d10859da829F
// contract address in op sepolia:  0x134037eE0976004978d18Db21b545F3ed601aE57

contract MyNFT is ERC721URIStorage, Ownable {
    string constant TOKEN_URI =
        "https://bafybeidvnbpwfff2e5pbdcp5tfvtaubxqsjb6e3bmpcsbyh7fr3fcpethe.ipfs.w3s.link/share_fames.json";
    uint256 internal tokenId;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mint(address to) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, TOKEN_URI);
        unchecked {
            tokenId++;
        }
    }
}
