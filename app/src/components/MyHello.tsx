type Props = {
    myName: string;
};

export default function MyHello(props: Props) {
    return (
        <>
            <p>こんにちは、{props.myName}さん！</p>
        </>
    )
}