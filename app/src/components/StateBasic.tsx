import { useState } from 'react'

type Props = {
    init: number;
}

export default function StateBasic(props: Props) {
    const [count, setCount] = useState<number>(props.init)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className='m-2 p-5 rounded bg-gray-100'>
            <button
                className='m-1 bg-blue-500 text-white px-5 py-2 rounded-md' 
                onClick={handleClick}>カウント</button>
            <p>{count}回、クリックされました</p>
        </div>
    )
}