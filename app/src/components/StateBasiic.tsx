import { useState } from 'react'

type Props = {
    init: number;
}

export default function StateBasic(props: Props) {
    const [count, setCount] = useState(props.init)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回、クリックされました</p>
        </>
    )
}