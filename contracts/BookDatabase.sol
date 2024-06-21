// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract BookDatabase {

    struct Book {
        string title;
        string author;
        string genre;
        uint32 year;
        uint16 pages;
    }

    uint32 private nextId = 0;
    uint256 public countBooks = 0;
    
    mapping(uint32 => Book) public books;

    address private immutable owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function addBook(string memory title, string memory author, string memory genre, uint32 year, uint16 pages) public onlyOwner {
        books[nextId] = Book(title, author, genre, year, pages);
        nextId++;
        countBooks++;
    }

    function getBook(uint32 id) public view returns (Book memory) {
        return books[id];
    }

    function updateBook(uint32 id, string memory title, string memory author, string memory genre, uint32 year, uint16 pages) public onlyOwner {
        books[id] = Book(title, author, genre, year, pages);
    }

    function deleteBook(uint32 id) public onlyOwner {
        if(books[id].year != 0){
        countBooks--;
        delete books[id];
        }
    }

}