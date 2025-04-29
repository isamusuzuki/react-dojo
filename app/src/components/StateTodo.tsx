import { useState } from 'react';

let maxId = 0;

export default function StateTodo() {

    interface iTodo {
        id: number;
        title: string;
        createdAt: Date;
        isDone: boolean;
    }

    const [title, setTitle] = useState<string>('');
    const [todos, setTodos] = useState<iTodo[]>([]);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleClick = () => {
        setTodos([...todos, {
            id: ++maxId,
            title,
            createdAt: new Date(),
            isDone: false
        }])
        setTitle('');
    };

    const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTodos(todos.map(todo => {
            const numberId = Number(e.currentTarget.dataset.id);
            if (todo.id === numberId) {
                return { ...todo, isDone: !todo.isDone };
            }
            return todo;
        }));
    };

    return (
        <div className='bg-gray-100 p-5 rounded-md'>
            <div className='block mb-2'>
                <label>やるべきこと：
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChangeTitle}
                        placeholder="Add a new todo"
                        className='border bg-white rounded p-2 max-w-lg mr-2'
                    />
                </label>
                <button
                    onClick={handleClick}
                    className='bg-blue-500 text-white px-5 py-2 rounded-md'
                >追加</button>
            </div>
            <ul className='list-disc list-inside p-2'>
                {todos.map(todo => (
                    <li key={todo.id} className={`${todo.isDone ? 'line-through' : ''}`}>
                        {todo.title}
                        <button type="button"
                            data-id={todo.id}
                            onClick={handleDone}
                            className='ml-2 mb-2 bg-green-500 text-white px-2 py-1 rounded-md'>済</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};