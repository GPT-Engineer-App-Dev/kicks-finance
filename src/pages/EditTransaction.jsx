import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const brands = ["Nike", "Adidas", "Puma", "Reebok", "New Balance"];
const placeholderTransactions = [
  { id: 1, date: "2023-10-01", amount: 200, type: "Expense", brand: "Nike" },
  { id: 2, date: "2023-10-05", amount: 150, type: "Income", brand: "Adidas" },
  { id: 3, date: "2023-10-10", amount: 300, type: "Expense", brand: "Puma" },
];

function EditTransaction() {
  const { id } = useParams();
  const transaction = placeholderTransactions.find((t) => t.id === parseInt(id));
  const [date, setDate] = useState(transaction.date);
  const [amount, setAmount] = useState(transaction.amount);
  const [type, setType] = useState(transaction.type);
  const [brand, setBrand] = useState(transaction.brand);
  const navigate = useNavigate();

  const handleUpdate = () => {
    // Update the transaction (this is just a placeholder, you would normally update in a database)
    console.log({ date, amount, type, brand });
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-3xl text-center mb-4">Edit Transaction</h1>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Date</label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Amount</label>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Type</label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Income">Income</SelectItem>
              <SelectItem value="Expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Brand</label>
          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger>
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>{brand}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" className="mr-2" onClick={() => navigate("/")}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </div>
  );
}

export default EditTransaction;