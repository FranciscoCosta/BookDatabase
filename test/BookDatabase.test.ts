import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("BookDatabase", function () {

  async function deployFixture() {

    const [owner, otherAccount] = await hre.ethers.getSigners();

    const BookDatabase = await hre.ethers.getContractFactory("BookDatabase");
    const bookDatabase = await BookDatabase.deploy();

    return { bookDatabase, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should  count = 0", async function () {
      const { bookDatabase, owner, otherAccount } = await loadFixture(deployFixture);

      const count = await bookDatabase.countBooks();
      expect(count).to.equal(0);
    });

    it("Should add book", async function () {
      const { bookDatabase, owner, otherAccount } = await loadFixture(deployFixture);

      await bookDatabase.addBook("title", "author", "genre", 2021, 300);
      const count = await bookDatabase.countBooks();
      expect(count).to.equal(1);
      expect(await bookDatabase.getBook(0)).to.deep.equal(["title", "author", "genre", 2021, 300]);
    });

    it("Should remove book", async function () {
      const { bookDatabase, owner, otherAccount } = await loadFixture(deployFixture);

      await bookDatabase.addBook("title", "author", "genre", 2021, 300);
      await bookDatabase.deleteBook(0);
      const count = await bookDatabase.countBooks();
      expect(count).to.equal(0);
    });

    it("Should get book", async function () {
      const { bookDatabase, owner, otherAccount } = await loadFixture(deployFixture);

      await bookDatabase.addBook("title", "author", "genre", 2021, 300);
      const book = await bookDatabase.getBook(0);
      expect(book).to.deep.equal(["title", "author", "genre", 2021, 300]);
    });

    it("Should update book", async function () {
      const { bookDatabase, owner, otherAccount } = await loadFixture(deployFixture);

      await bookDatabase.addBook("title", "author", "genre", 2021, 300);
      await bookDatabase.updateBook(0, "title2", "author2", "genre2", 2022, 400);
      const book = await bookDatabase.getBook(0);
      expect(book).to.deep.equal(["title2", "author2", "genre2", 2022, 400]);
    });


});
});
