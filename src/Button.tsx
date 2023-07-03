const Button = () => {
    const handleClick = (name:string) => {
        console.log(`Button clicked by ${name}`)
    }
    return (
        <button onClick={() => handleClick('megatron')}>Click Me!</button>
    );
}

export default Button;

