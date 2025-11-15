import React, { useState } from "react";
import Number from "./Number.jsx";
import Reset from "./Reset.jsx";
import Delete from "./Delete.jsx";
import Symbol from "./Symbol.jsx";
import Equal from "./Equal.jsx";

function Calculator() {
  const [content, setContent] = useState("");

  function handleClick(num) {
    if (content == 0) {
      setContent((c) => String(num));
    } else {
      setContent((c) => {
        return c + String(num);
      });
    }
  }

  function handleReset() {
    setContent("");
  }

  function handleDelete() {
    if (content === 0) {
      setContent(0);
    } else {
      setContent((c) => {
        let temp = c.slice(0, -1);
        if (temp == "") {
          return 0;
        }
        return temp;
      });
    }
  }

  function handleSymbol(sym) {
    setContent((c) => {
      return c + sym;
    });
  }

  function handleAns() {
    if (content.length === 0 || isNaN(content.slice(-1))) {
      setContent("0");
    }
    try {
      const result = eval(content);
      setContent(String(result));
    } catch {
      setContent("Error");
    }
  }

  return (
    <div className="container">
      <div>
        <p className="display">{content}</p>
      </div>
      <div style={{ display: "flex", padding: "1px" }}>
        <Number num={1} handleClick={() => handleClick(1)} />
        <Number num={2} handleClick={() => handleClick(2)} />
        <Number num={3} handleClick={() => handleClick(3)} />
      </div>
      <div style={{ display: "flex", padding: "1px" }}>
        <Number num={4} handleClick={() => handleClick(4)} />
        <Number num={5} handleClick={() => handleClick(5)} />
        <Number num={6} handleClick={() => handleClick(6)} />
      </div>
      <div style={{ display: "flex", padding: "1px" }}>
        <Number num={7} handleClick={() => handleClick(7)} />
        <Number num={8} handleClick={() => handleClick(8)} />
        <Number num={9} handleClick={() => handleClick(9)} />
      </div>
      <div style={{ display: "flex" }}>
        <span className="plus">
          <Reset handleClick={handleReset} />
          <br />
          <Symbol sym="+" handleClick={() => handleSymbol("+")} />
        </span>
        <Number num={0} handleClick={() => handleClick(0)} />
        <span className="minus">
          <Delete handleClick={handleDelete} />
          <br />
          <Symbol sym="-" handleClick={() => handleSymbol("-")} />
        </span>
      </div>
      <div className="symbols">
        <Symbol sym="*" handleClick={() => handleSymbol("*")} />
        <Symbol sym="." handleClick={() => handleSymbol(".")} />
        <Symbol sym="/" handleClick={() => handleSymbol("/")} />
      </div>
      <div>
        <Equal handleClick={handleAns} />
      </div>
    </div>
  );
}
export default Calculator;
