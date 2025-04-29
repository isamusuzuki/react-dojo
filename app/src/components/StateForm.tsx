import { useState } from 'react';

export default function StateForm() {

    interface iForm {
        name: string;
        age: number;
        sex: string;
        comment: string;
        agreement: boolean;
    }

    const [form, setForm] = useState<iForm>({
        name: '山田太郎',
        age: 18,
        sex: '男性',
        comment: '明訓高校の野球部で正捕手をつとめています。',
        agreement: false,
    });

    const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleAgreement = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.checked,
        });
    };

    const show = () => {
        console.log(`Name: ${form.name}, Age: ${form.age}, Sex: ${form.sex}`);
        console.log(`Comment: ${form.comment}`);
        console.log(`Agreement: ${form.agreement}`);
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
                <fieldset className="block mb-2">
                    <legend>性別:</legend>
                    <label className='pr-2' htmlFor='male'>男性&nbsp;
                        <input
                            id='male'
                            type='radio'
                            name="sex"
                            value="男性"
                            onChange={handleForm}
                            checked={form.sex === '男性'} /></label>
                    <label className='pr-2' htmlFor='female'>女性&nbsp;
                        <input
                            id='female'
                            type='radio'
                            name='sex'
                            value='女性'
                            onChange={handleForm}
                            checked={form.sex === '女性'} /></label>
                    <label htmlFor='other'>その他&nbsp;
                        <input
                            id='other'
                            type='radio'
                            name='sex'
                            value='その他'
                            onChange={handleForm}
                            checked={form.sex === 'その他'} />
                    </label>
                </fieldset>
            </div>
            <div>
                <label className="block mb-2" htmlFor="comment">コメント:
                    <textarea
                        id="comment"
                        name="comment"
                        cols={30}
                        rows={3}
                        value={form.comment}
                        onChange={handleComment}
                        className="border rounded p-2 w-full"
                    ></textarea>
                </label>
            </div>
            <div>
                <fieldset className="block mb-2">
                    <label htmlFor='agreement'>公開に同意します&nbsp;
                        <input
                            id='agreement'
                            type='checkbox'
                            name="agreement"
                            checked={form.agreement}
                            onChange={handleAgreement} />
                    </label>
                </fieldset>
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
                {form.agreement && (
                    <p>{form.name} ({form.age} 歳、{form.sex})さんのコメント「{form.comment}」</p>
                )}
            </div>
        </form>
    );
}