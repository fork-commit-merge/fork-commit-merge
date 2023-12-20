
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    //TODO: Implement function to set the number
    uint256 num ;
    function setNumber(uint256 number) public {
            num = number ;
    }
    
    //TODO: Implement function to get the number
    function getNumber() public view returns(uint256) {
        return num ;
    } 
}

