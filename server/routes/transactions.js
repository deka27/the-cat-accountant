import express from "express";
import {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} from "../controllers/transactionController.js";

//router object
const router = express.Router();

//routes
//add transaction POST Method
router.post("/add-transaction", addTransaction);
//Edit transaction POST Method
router.post("/edit-transaction", editTransaction);
//Delete transaction POST Method
router.post("/delete-transaction", deleteTransaction);

//get transactions
router.post("/get-transaction", getAllTransaction);

export default router;
