import { useRef } from 'react';

export default function StateForm() {
    const name = useRef<HTMLInputElement>(null);
    const age = useRef<HTMLInputElement>(null);

    const show = () => {
        if (name.current && age.current) {
            console.log(`Name: ${name.current.value}, Age: ${age.current.value}`);
        } else {
            console.error('Name or Age input is not available.');
        }
    };

    return (
        <form className="p-4">
            <div>
                <label className="block mb-2" htmlFor="name">
                    名前:
                    <input id="name" name="name" type="text" defaultValue="山田花子" ref={name} className="border rounded p-2 w-full" />
                </label>
            </div>
            <div>
                <label className="block mb-2" htmlFor="age">
                    年齢:
                    <input id="age" name="age" type="number" defaultValue="16" ref={age} className="border rounded p-2 w-full" />
                </label>
            </div>
            <div>
                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={show}>
                    送信
                </button>
            </div>
        </form>
    );
}
