import React, { useState, useEffect } from "react";
import styles from '../../styles/todoItem.module.css'
import { FaTrash } from "react-icons/fa"

const TodoItem = props => {

    const [editing, setEditing] = useState(false);

    useEffect(() => {
        return () => {
            console.log('clean up')
        }
    }, []);


    const handleEditing = () => {
        setEditing(true);
    };


    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(false)
          }
        
    };


    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    };

    const {id, completed, title} = props.todo;

    let viewMode = {}
    let editMode = {}
    if (editing) {
        viewMode.display = "none"
      } else {
        editMode.display = "none"
    }

    
    return (
         <li className={styles.item}>
                <div onDoubleClick={handleEditing} style={viewMode}>
                    <input 
                    type="checkbox" 
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}>
                    </input>
                    <button onClick={() => props.deleteTodoProps(id)}>
                        <FaTrash style={{ color: "orangered", fontSize: "16px" }}/>
                        </button>
                    <span style={completed ? completedStyle : null}>
                        {title}
                    </span>
                </div>
                <input 
                    type="text" 
                    className={styles.textInput} 
                    style={editMode}
                    value={title}
                    onChange={e => {props.setUpdate(e.target.value, id)}}
                    onKeyUp={handleUpdatedDone}>
                </input>
                
            </li>
    )
}
export default TodoItem;
