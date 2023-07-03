

interface taskProps {
    title: string,
    details: string
}

const TasksList = ({tasks, deleteTask, toggleTask} : any) => {



    return (
        <div>
        {
            tasks.map((task:any) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.details}</p>
                    <button onClick={() => toggleTask(task.id)}>Mark {task.completed ? <span>Undone</span> : <span>Done</span>}</button>
                    <br></br>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))
        }
        </div>
    );
}

export default TasksList;