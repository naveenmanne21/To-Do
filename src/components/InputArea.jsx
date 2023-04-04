import React, { useState } from "react";

function InputArea(props) {

    const [input, setInput] = useState("");
    function handleChange(event) {
        setInput(event.target.value);
    }

    function addToList() {
        props.onAdd(input);
        setInput("");
    }

    return <div>
        <input onChange={handleChange} type='text' value={input} />
        <button onClick={addToList} >ADD</button>
    </div>
}

export default InputArea