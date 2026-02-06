// Solidity - Easy

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private number;
    // TODO: Implement function to set the number
     function setNumber(uint256 _number) public {
        number = _number;
     }
    // TODO: Implement function to get the number
    function getNumber() public view returns (uint256) {
        return number;
    }
}
