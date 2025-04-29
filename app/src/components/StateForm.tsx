import { useState } from 'react';

export default function StateForm() {

    interface iForm {
        name: string;
        age: number;
    }

    const [form, setForm] = useState<iForm>({
        name: '山田太郎',
        age: 18,
    });

    const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const show = () => {
        console.log(`Name: ${form.name}, Age: ${form.age}`);
    }

    return (
        <form className="p-4">
            <div>
                <label className="block mb-2" htmlFor="name">
                    名前:
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleForm}
                        className="border rounded p-2 w-full"
                    />
                </label>
            </div>
            <div>
                <label className="block mb-2" htmlFor="age">
                    年齢:
                    <input
                        id="age"
                        name="age"
                        type="number"
                        value={form.age}
                        onChange={handleForm}
                        className="border rounded p-2 w-full"
                    />
                </label>
            </div>
            <div>
                <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={show}>
                    送信
                </button>
            </div>
            <div>
                <p>こんにちは、{form.name} ({form.age} 歳)さん！</p>
            </div>
        </form>
    );
}