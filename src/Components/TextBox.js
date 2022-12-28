import React from "react";

function TextBox({value}) {
    return (
        <div className="form-floating mb-3">
        <p>{value}</p>
        </div>
    )
}

export default TextBox;