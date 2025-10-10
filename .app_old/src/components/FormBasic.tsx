import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';

type FormValues = {
    name: string;
    email: string;
    gender: string;
    memo: string;
}

export default function FormBasic() {
    const defaultValues: FormValues = {
        name: '',
        email: '',
        gender: '',
        memo: ''
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }
    const onError: SubmitErrorHandler<FormValues> = (errors) => {
        console.log(errors);
    }

    return (
        <div className="m-4 p-4 border-2 border-gray-300 rounded-lg">
            <h2 className="text-xl font-bold mb-4">基本的なフォーム</h2>
            <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">名前</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: '名前は必須です', maxLength: { value: 6, message: '6文字以内で入力してください' } })}
                        className={`mt-1 block w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">性別</label>
                    <label>
                    <input type="radio" value="male" {...register('gender', { required: '性別は必須です' })} />
                    男性</label>
                    <label>
                    <input type="radio" value="female" {...register('gender', { required: '性別は必須です' })} />
                    女性</label>
                    {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: 'メールアドレスは必須です' })}
                        className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="memo" className="block text-sm font-medium text-gray-700">メモ</label>
                    <textarea
                        id="memo"
                        {...register('memo', { required: 'メモは必須です', minLength: { value: 5, message: '5文字以上で入力してください' } })}
                        className={`mt-1 block w-full p-2 border ${errors.memo ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.memo && <p className="text-red-500 text-sm">{errors.memo.message}</p>}
                </div>

                <div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        送信
                    </button>
                </div>
            </form>
        </div>
    );
};