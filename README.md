# BookDatabase Smart Contract

This is a Solidity smart contract named `BookDatabase` that allows the owner to manage a database of books. The contract is deployed on the Sepolia testnet and was developed and deployed using Hardhat, a development environment for Ethereum software.

## Contract Overview

The `BookDatabase` contract provides functionality to add, update, view, and delete books. Each book has a title, author, genre, year of publication, and number of pages. Only the owner of the contract can modify the book database.

### Key Features

- **Owner-Only Modifications**: Only the contract owner can add, update, or delete books.
- **Book Structure**: Each book is represented by a struct containing its title, author, genre, year, and number of pages.
- **Book ID Management**: Books are identified by unique IDs which are managed internally.

## Contract Details

### State Variables

- `nextId`: A counter to assign unique IDs to books.
- `countBooks`: A counter to keep track of the total number of books in the database.
- `books`: A mapping from book IDs to `Book` structs.
- `owner`: The address of the contract owner.

### Modifiers

- `onlyOwner`: Restricts function access to the contract owner.

### Functions

- **constructor**: Initializes the contract and sets the owner.
- **addBook**: Adds a new book to the database.
- **getBook**: Retrieves a book by its ID.
- **updateBook**: Updates the details of an existing book.
- **deleteBook**: Deletes a book from the database.

## Usage

### Adding a Book

To add a book, use the `addBook` function. This function requires the title, author, genre, year, and number of pages of the book.

### Getting a Book

To get the details of a book, use the `getBook` function with the book's ID.

### Updating a Book

To update a book, use the `updateBook` function with the book's ID and the new details.

### Deleting a Book

To delete a book, use the `deleteBook` function with the book's ID.

## Deployment on Sepolia Testnet

This contract was deployed on the Sepolia testnet. The deployment process was managed using Hardhat.

### Prerequisites

- Node.js
- Hardhat
- Sepolia Testnet Faucet (for test ETH)

### Deployment Steps

1. **Install Hardhat**: 
   ```bash
   npm install --save-dev hardhat
Create a Hardhat Project:

bash
Copiar código
npx hardhat
Create the Contract: Save the BookDatabase contract in the contracts directory.

Configure Hardhat: Update the hardhat.config.js to include the Sepolia testnet configuration.

javascript
Copiar código
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://sepolia
all in md
ChatGPT
markdown
Copiar código
# BookDatabase Smart Contract

This is a Solidity smart contract named `BookDatabase` that allows the owner to manage a database of books. The contract is deployed on the Sepolia testnet and was developed and deployed using Hardhat, a development environment for Ethereum software.

## Contract Overview

The `BookDatabase` contract provides functionality to add, update, view, and delete books. Each book has a title, author, genre, year of publication, and number of pages. Only the owner of the contract can modify the book database.

### Key Features

- **Owner-Only Modifications**: Only the contract owner can add, update, or delete books.
- **Book Structure**: Each book is represented by a struct containing its title, author, genre, year, and number of pages.
- **Book ID Management**: Books are identified by unique IDs which are managed internally.

## Contract Details

### State Variables

- `nextId`: A counter to assign unique IDs to books.
- `countBooks`: A counter to keep track of the total number of books in the database.
- `books`: A mapping from book IDs to `Book` structs.
- `owner`: The address of the contract owner.

### Modifiers

- `onlyOwner`: Restricts function access to the contract owner.

### Functions

- **constructor**: Initializes the contract and sets the owner.
- **addBook**: Adds a new book to the database.
- **getBook**: Retrieves a book by its ID.
- **updateBook**: Updates the details of an existing book.
- **deleteBook**: Deletes a book from the database.

## Usage

### Adding a Book

To add a book, use the `addBook` function. This function requires the title, author, genre, year, and number of pages of the book.

### Getting a Book

To get the details of a book, use the `getBook` function with the book's ID.

### Updating a Book

To update a book, use the `updateBook` function with the book's ID and the new details.

### Deleting a Book

To delete a book, use the `deleteBook` function with the book's ID.

## Deployment on Sepolia Testnet

This contract was deployed on the Sepolia testnet. The deployment process was managed using Hardhat.

### Prerequisites

- Node.js
- Hardhat
- Sepolia Testnet Faucet (for test ETH)
