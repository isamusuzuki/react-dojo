
type Props = {
    step: number;
    onUpdate: (step: number) => void;
}

export default function StateCounter(props: Props) {

    const handleClick = () => props.onUpdate(props.step);

    return (
        <button onClick={handleClick}>
            <span>{props.step}</span>
        </button>
    );
}