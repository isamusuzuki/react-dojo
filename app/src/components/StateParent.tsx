import { useState } from 'react'
import StateCounter from './StateCounter'

export default function StateParent() {
    const [count, setCount] = useState<number>(0)

    const update = (step: number) => {
        setCount(c => c + step)
    }

    return (
        <div className='m-2 p-5 rounded bg-gray-100'>
            <p>総カウント： {count}</p>
            <StateCounter step={1} onUpdate={update} />
            <StateCounter step={5} onUpdate={update} />
            <StateCounter step={-2} onUpdate={update} />
        </div>
    )
}