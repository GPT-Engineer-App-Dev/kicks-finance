import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const placeholderTransactions = [
  { id: 1, date: "2023-10-01", amount: 200, type: "Expense", brand: "Nike" },
  { id: 2, date: "2023-10-05", amount: 150, type: "Income", brand: "Adidas" },
  { id: 3, date: "2023-10-10", amount: 300, type: "Expense", brand: "Puma" },
];

function Index() {
  const [transactions, setTransactions] = useState(placeholderTransactions);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl text-center mb-4">Sneaker Accounting Dashboard</h1>
      <div className="flex justify-end mb-4">
        <Link to="/add">
          <Button>Add Transaction</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.brand}</TableCell>
              <TableCell>
                <Link to={`/edit/${transaction.id}`}>
                  <Button variant="outline" className="mr-2">Edit</Button>
                </Link>
                <Button variant="destructive" onClick={() => handleDelete(transaction.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Index;