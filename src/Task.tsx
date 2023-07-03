interface taskProps {
    title: string,
    details: string
}

const Task = ({ title, details }: taskProps) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{details}</p>
        </div>
    )
}

export default Task