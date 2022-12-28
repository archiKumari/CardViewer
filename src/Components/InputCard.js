import React, { useState } from "react";

import TextBox from "./TextBox";

function InputCard({ labels }) {
  const [disabledList, setDisabled] = useState([false, false, false, false]);
  const [calculateStatus, setCalculateStatus] = useState(false);
  const [valueList, setValueList] = useState([0, 0, 0, 0]);

  function changeHandler(e) {
    let id = e.target.id - 1;
    const updatedState = disabledList.map((item, index) =>
      index === id ? false : true
    );
    setDisabled(updatedState);
  }

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function calculateHandler(e) {
    setCalculateStatus(true);
    let value = e.target.value, id= (e.target.id)-1;
    let max = value + 100,
      min = value - 100;
    const updatedValueList = valueList.map((item, index) =>
      index === id ? value : getRandomNumber(min, max)
    );
    setValueList(updatedValueList);
  }

  function resetHandler() {
    setDisabled([false, false, false, false]);
    setValueList([0, 0, 0, 0]);
    setCalculateStatus(false);
  }

  // if (visibility) {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
          }}
        >
          <button
            type="button"
            className="btn btn-warning my-3"
            onClick={resetHandler}
          >
            Reset
          </button>
        </div>
        <div className="form-floating mb-3">
          {!calculateStatus ? (
            <>
              <input
                type="number"
                className="form-control"
                id="1"
                disabled={disabledList[0]}
                defaultValue={0}
                placeholder={labels[0]}
                onChange={changeHandler}
              />
              <label>{labels[0]}</label>
            </>
          ) : (
            <TextBox value={valueList[0]} />
          )}
        </div>
        <div className="form-floating mb-3">
          {!calculateStatus ? (
            <>
              <input
                type="number"
                className="form-control"
                id="2"
                defaultValue={0}
                disabled={disabledList[1]}
                placeholder={labels[1]}
                onChange={changeHandler}
              />
              <label>{labels[1]}</label>
            </>
          ) : (
            <TextBox value={valueList[1]} />
          )}
        </div>
        <div className="form-floating mb-3">
          {!calculateStatus ? (
            <>
              <input
                type="number"
                className="form-control"
                id="3"
                defaultValue={0}
                disabled={disabledList[2]}
                placeholder={labels[2]}
                onChange={changeHandler}
              />
              <label>{labels[2]}</label>
            </>
          ) : (
            <TextBox value={valueList[2]} />
          )}
        </div>
        <div className="form-floating mb-3">
          {!calculateStatus ? (
            <>
              <input
                type="number"
                className="form-control"
                id="4"
                defaultValue={0}
                disabled={disabledList[3]}
                placeholder={labels[3]}
                onChange={changeHandler}
              />
              <label>{labels[3]}</label>
            </>
          ) : (
            <TextBox value={valueList[3]} />
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
          }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={calculateHandler}
          >
            Calculate
          </button>
        </div>
      </>
    );
}

export default InputCard;
