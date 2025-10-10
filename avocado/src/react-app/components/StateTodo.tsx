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
    const [desc, setDesc] = useState<boolean>(false);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleClick = () => {
        setTodos([
            ...todos,
            {
                id: ++maxId,
                title,
                createdAt: new Date(),
                isDone: false,
            },
        ]);
        setTitle('');
    };

    const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
        const thisId = Number(e.currentTarget.dataset.id);
        setTodos(
            todos.map((todo) => {
                if (todo.id === thisId) {
                    return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            })
        );
    };

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const thisId = Number(e.currentTarget.dataset.id);
        setTodos(todos.filter((todo) => todo.id !== thisId));
    };

    const handleSort = () => {
        setTodos(
            todos.sort((a, b) => {
                if (desc) {
                    // createdAtの降順でソートする
                    return b.createdAt.getTime() - a.createdAt.getTime();
                } else {
                    // createdAtの昇順でソートする
                    return a.createdAt.getTime() - b.createdAt.getTime();
                }
            })
        );
        setDesc(!desc);
    };

    return (
        <div className="bg-gray-100 p-5 rounded-md">
            <div className="block mb-2">
                <label>
                    やるべきこと：
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChangeTitle}
                        placeholder="Add a new todo"
                        className="border bg-white rounded p-2 w-70 mr-2"
                        autoComplete="off"
                    />
                </label>
                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-md mr-2">
                    追加
                </button>
                <button onClick={handleSort} className="bg-gray-500 hover:bg-gray-700 text-white px-5 py-2 rounded-md">
                    ソート ({desc ? '↑' : '↓'})
                </button>
            </div>
            <ul className="list-disc list-inside p-2">
                {todos.map((todo) => (
                    <li key={todo.id} className={`${todo.isDone ? 'line-through' : ''}`}>
                        {todo.title}
                        <button
                            type="button"
                            data-id={todo.id}
                            onClick={handleDone}
                            className="ml-2 mb-2 bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded-md"
                        >
                            済
                        </button>
                        <button
                            type="button"
                            data-id={todo.id}
                            onClick={handleRemove}
                            className="ml-2 mb-2 bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded-md"
                        >
                            削除
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
