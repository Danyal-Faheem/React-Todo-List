import { useState } from "react";

const AddTask = ({addTask}:any) => {
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")

    return(
        <div>
            <br></br>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Details" onChange={(e) => setDetails(e.target.value)}></input>
            <br></br>
            <button onClick={() => addTask(title, details)}>Add Task!</button>
        </div>
    );
}

export default AddTask;