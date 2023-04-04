import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import Note from './Note';

// import notes from './../notes';
import InputArea from './InputArea';
import ToDoItem from './ToDoItem';



function App() {


    const [items, setItems] = useState([]);


    function addToList(newItem) {
        setItems(prevItems => {
            return [...prevItems, newItem]
        })
    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id
            })
        })
    }

    function changeEdited(newItem, id) {
        // console.log("adda", newItem, id)
        setItems(prevItems => {
            return prevItems.map((currItem, index) => {
                if (index === id) {
                    return newItem
                } else {
                    return currItem
                }
            })
        })
    }


    return (
        <div>

            <div className='container'>
                <header>
                    <h1>To-Do</h1>
                </header>
                <div className='lineTwo'>
                    <InputArea onAdd={addToList} />
                </div>
                <div className='unorderedList'>
                    <ul>
                        {items.map((toDoItem, index) =>
                            <ToDoItem key={index} id={index} text={toDoItem} changeEdited={changeEdited} todelete={deleteItem} />
                        )}
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default App

