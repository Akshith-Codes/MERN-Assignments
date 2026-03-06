/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
*/
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. filter credit transactions
const creditTransactions = transactions.filter(t => t.type === "credit");
console.log("Credit Transactions:", creditTransactions);

// 2. map extract amounts
const amounts = transactions.map(t => t.amount);
console.log("Transaction Amounts:", amounts);

// 3. reduce final account balance
const balance = transactions.reduce((total, t) => {
  return t.type === "credit" ? total + t.amount : total - t.amount;
}, 0);
console.log("Final Account Balance:", balance);

// 4. find first debit transaction
const firstDebit = transactions.find(t => t.type === "debit");
console.log("First Debit Transaction:", firstDebit);

// 5. findIndex of amount 10000
const index10000 = transactions.findIndex(t => t.amount === 10000);
console.log("Index of Transaction 10000:", index10000);