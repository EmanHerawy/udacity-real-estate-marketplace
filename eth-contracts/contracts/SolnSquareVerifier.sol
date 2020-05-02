pragma solidity >=0.4.21 <0.6.0;
import {CustomERC721Token} from "./ERC721Mintable.sol";
// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
 

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is CustomERC721Token{
SquareVerifier _verifier;
 
constructor (address verifier,string memory name, string memory symbol, string memory baseTokenURI) public CustomERC721Token(  name,   symbol,   baseTokenURI) {
    _verifier = SquareVerifier(verifier);
}



// TODO define a solutions struct that can hold an index & an address
struct Solutions{
   address to; uint256 tokenId;
}

// TODO define an array of the above struct
Solutions [] public solutions;

// TODO define a mapping to store unique solutions submitted

mapping (bytes32=>Solutions) public submittedSolutions;

// TODO Create an event to emit when a solution is added

event SubmitSolution( bytes32 key,address to, uint256 tokenId);

// TODO Create a function to add the solutions to the array and emit the event
function _submitSolution(bytes32 key,address to, uint256 tokenId) private returns (bool) {
    submittedSolutions[key]=Solutions( to,   tokenId);
    solutions.push(submittedSolutions[key]);
    emit SubmitSolution(key,   to,   tokenId);
    return true;
}


// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly

  function mintNFT(  uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input, address to,uint256 tokenId) public whenNotPaused returns (bool) {
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        require( submittedSolutions[key].to==address(0),"solution is not unique");
        require( _verifier.verifyTx(a, b, c,input),"solution is not valid ");
        require(  _submitSolution(key ,to, tokenId),"solution is not submitted ");

        super._mint(to, tokenId);
        super._setTokenURI(tokenId);
        return true;
  }









}
















interface SquareVerifier {
    function verifyTx(
        uint[2] calldata a,
        uint[2][2] calldata b,
        uint[2] calldata c,
        uint[2] calldata input
    )
        external
        returns(bool r);
}
