import React, { useState } from "react";
import InputCard from "./InputCard";

function Card() {

    const [inputCardVisibilty, setInputCardVisibility] = useState(false);
    const [months, setMonths] = useState([]);

    function handler1() {
        setInputCardVisibility(true);
        setMonths(["Jan","Feb","Mar","Apr"]);
    }
    function handler2() {
        setInputCardVisibility(true);
        setMonths(["May","Jun","Jul","Aug"]);
    }
    function handler3() {
        setInputCardVisibility(true);
        setMonths(["Sep","Oct","Nov","Dec"]);
    }

    return (
    <div className="card mx-4 py-4" style={{ width: 300 }}>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Months
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" onClick={handler1}>
              Jan-Apr
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={handler2}>
              May-August
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={handler3}>
              Sep-Dec
            </button>
          </li>
        </ul>
        {
          inputCardVisibilty? <InputCard labels={months}/> : <></>
        }
      </div>
    </div>
  );
}

export default Card;
