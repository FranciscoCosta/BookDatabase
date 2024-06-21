import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const BookDatabseModule = buildModule("BookDatabseModule", (m) => {

  const bookDatabase = m.contract("BookDatabase");

  return { bookDatabase };
});

export default BookDatabseModule;
