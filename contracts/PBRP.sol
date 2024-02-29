// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./contracts/token/ERC20/ERC20.sol";
import "./contracts/access/Ownable.sol";

contract PBRP is ERC20, Ownable {
    constructor() ERC20("pBRP", "pBRP") {}
    
    function decimals() public view virtual override returns (uint8) {
        return 6;
    }

    function mint(address user, uint amount) external onlyOwner {
        _mint(user, amount);
    }

    function batchMint(address[] calldata users, uint[] calldata amounts) external onlyOwner {
        require(users.length == amounts.length, "length not equal");
        for (uint i = 0; i < users.length; i++) {
            _mint(users[i], amounts[i]);
        }
    }
}
