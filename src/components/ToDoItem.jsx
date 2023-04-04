import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

// import DeleteIcon from '@mui/icons-material/Delete';

function ToDoItem(props) {

    const [isClicked, setIsClicked] = React.useState(false)
    const [newItem, setNewItem] = React.useState("");


    function handleChange(event) {
        // console.log(event.target.value)
        setNewItem(event.target.value)
    }

    function deleteText() {
        // setIsClicked(!isClicked);
        props.todelete(props.id)
    }
    function editText() {
        setIsClicked(true);
        setNewItem(props.text)
    }
    function handleEdit() {
        props.changeEdited(newItem, props.id)
        setIsClicked(false);
    }

    return <div >
        {/* <li> */}

        {!isClicked && props.text}
        {!isClicked && <button className="but2" onClick={deleteText}>
            <DeleteIcon />
        </button>}
        {!isClicked && <button className="but2" onClick={editText} >
            <EditIcon />
        </button>}
        {/* </li> */}
        {isClicked && <input className="afterInput" value={newItem} onChange={handleChange} type="text" />}
        {isClicked && <button className="but2" onClick={handleEdit} text={newItem}>
            <SaveIcon />
        </button>}

        {/* {isClicked && <h1>djikjdik</h1>} */}
        {/* <button className="but2" onClick={deleteText}>delete</button>
        <button className="but2" >edit</button> */}

        {/* <li style={isClicked ? { textDecoration: "line-through" } : null}>{props.text}</li> */}
    </div>
}

export default ToDoItem