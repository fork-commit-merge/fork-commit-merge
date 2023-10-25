// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 number;

    function set(uint256 _numtoset) public {
        number=_numtoset;
    }

    function get() public view returns (uint256) {
        return number;
    }
}
