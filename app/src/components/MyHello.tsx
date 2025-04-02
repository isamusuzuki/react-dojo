type Props = {
    myName: string;
};

export default function MyHello(props: Props) {
    return (
        <div className="rect">
            <p>こんにちは、{props.myName}さん！</p>
        </div>
    )
}