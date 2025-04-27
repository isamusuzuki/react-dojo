
type Props = {
    step: number;
    onUpdate: (step: number) => void;
}

export default function StateCounter(props: Props) {

    const handleClick = () => props.onUpdate(props.step);

    return (
        <button
            className='m-1 bg-blue-500 text-white px-5 py-2 rounded-md'  
            onClick={handleClick}
        >
            <span>{props.step}</span>
        </button>
    );
}