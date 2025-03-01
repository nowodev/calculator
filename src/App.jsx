import { useState } from "react";

function App() {
  const [calcInput, setCalcInput] = useState("");
  const [total, setTotal] = useState("");

  function handleButton(value) {
    if (value === "AC") return handleReset();

    if (value === "=") {
      let calcValue = eval(calcInput);
      Number.isInteger(calcValue)
        ? calcValue
        : (calcValue = Number(calcValue).toFixed(2));
      return setTotal(calcValue);
    }

    if (total) handleReset();

    setCalcInput((input) => input + value);
  }

  function handleReset() {
    setCalcInput("");
    setTotal("");
  }

  return (
    <div className="h-screen max-w-[300px] flex justify-center items-center mx-auto">
      <div className="w-full p-3 border rounded-2xl">
        <div className="h-1/3 flex flex-col justify-end items-end p-4">
          <p className="text-2xl/9">{calcInput || "\u00a0"}</p>
          <p className="text-5xl font-bold">{total}</p>
        </div>
        <div className="h-2/3 p-4">
          <KeyPad onClick={handleButton} />
        </div>
      </div>
    </div>
  );
}

function KeyPad({ onClick }) {
  const keys = [
    { name: "AC", value: `AC` },
    { name: "", value: `` },
    { name: "%", value: `%` },
    { name: "÷", value: `/` },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "×", value: `*` },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "−", value: `-` },
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "+", value: `+` },
    { name: "0", value: 0 },
    { name: ".", value: `.` },
    { name: "=", value: `=` },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {keys.map((key) => (
        <Button
          onClick={onClick}
          value={key.value}
          text={key.name}
          key={key.name}
        />
      ))}
    </div>
  );
}

function Button({ value, text, onClick }) {
  return (
    <button
      className={`bg-black p-3 rounded-xl text-white font-medium cursor-pointer ${
        text === "0" ? "col-span-2" : ""
      } `}
      onClick={() => onClick(value)}
    >
      {text}
    </button>
  );
}

export default App;
