import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const brands = ["Nike", "Adidas", "Puma", "Reebok", "New Balance"];

function AddTransaction() {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    // Save the transaction (this is just a placeholder, you would normally save to a database)
    console.log({ date, amount, type, brand });
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-3xl text-center mb-4">Add Transaction</h1>
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
          <Select onValueChange={setType}>
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
          <Select onValueChange={setBrand}>
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
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default AddTransaction;