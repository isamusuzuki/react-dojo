type Props = {
    myName: string;
};

export default function MyHello(props: Props) {
    return (
        <div className="m-2 p-5 rounded bg-gray-100">
            <p>こんにちは、{props.myName}さん！</p>
        </div>
    )
}