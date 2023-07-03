import { useState, useEffect } from "react"
import TasksList from "./TasksList";
import AddTask from "./AddTask";

interface Task {
    id: number,
    title: string,
    details: string,
    completed: boolean;
}

const Home = () => {

    // let addTaskFlag = false;
    const [addTaskFlag, setAddTaskFlag] = useState(false)

    const [tasks, setTasks] = useState<Task[]>([])/*[
        {
            "id": 1,
            "title": "Buy groceries",
            "details": "Milk, bread, eggs, cheese",
            "completed": false
        },
        {
            "id": 2,
            "title": "Do laundry",
            "details": "Wash and fold clothes",
            "completed": true
        },
        {
            "id": 3,
            "title": "Clean the house",
            "details": "Vacuum, dust, mop floors",
            "completed": false
        },
        {
            "id": 4,
            "title": "Pay bills",
            "details": "Electricity, water, internet",
            "completed": false
        },
        {
            "id": 5,
            "title": "Exercise",
            "details": "Go for a run or do yoga",
            "completed": false
        }
    ]);*/

    useEffect(() => {
        fetch('http://localhost:4000/tasks')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setTasks(data);
          })
      }, [])

    const deleteTask = (id:number) => {
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
    }

    const toggleTask = (id:number) => {
        const updatedTasks = tasks.slice();
        updatedTasks[id - 1].completed = !tasks[id - 1].completed
        setTasks(updatedTasks)
    }

    const addTask = (title: string, details: string) => {
        const updatedTasks = tasks.slice();
        const updatedId = tasks.slice(-1)[0]["id"] + 1;
        updatedTasks.push(
            {
                "id": updatedId,
                "title": title,
                "details": details,
                "completed": false
            }
        )
        setTasks(updatedTasks)
        setAddTaskFlag(!addTaskFlag)
    }

    return(
        <div>
            <div>
            <TasksList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
            </div>
            <br></br>
            <div>
                <button onClick={() => setAddTaskFlag(!addTaskFlag)}>Add Task</button>
            </div>
            {addTaskFlag && <AddTask  addTask={addTask} />}
        </div>
    );
}

export default Home;
