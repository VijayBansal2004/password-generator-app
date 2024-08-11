import "./App.css";
import Heading from "./Components/Heading";
import PasswordRange from "./Components/PasswordRange";
import AddtionalOptions from "./Components/AddtionalOptions";
import GeneratePassword from "./Components/GeneratePassword";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [range, setRange] = useState(0);

  const passwordGenerator = (range) => {
    let strPassword = "";
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "~!@#$%^&*()-_=+[{]}|;:,<.>/?";

    if (number) alphabets += numbers;
    if (symbol) alphabets += symbols;

    for (let i = 0; i < range; i++) {
      strPassword += alphabets.charAt(
        Math.floor(Math.random() * alphabets.length)
      );
    }

    setPassword(strPassword);
  };
  return (
    <>
      <div className="body">
        <div className="main-container border">
          <Heading />
          <PasswordRange
            range={range}
            setRange={setRange}
            password={password}
          />
          <hr />
          <AddtionalOptions
            number={number}
            setNumber={setNumber}
            symbol={symbol}
            setSymbol={setSymbol}
          />
          <GeneratePassword
            passwordGenerator={passwordGenerator}
            range={range}
          />
        </div>
      </div>
    </>
  );
}

export default App;
