import './App.css';
import useLocalStorage from './useLocalStorage';

function App() {
    const [age, setAge] = useLocalStorage('age', 24);

    return (
        <>
            <h1>カスタムフック</h1>
            <div>{age}</div>
            <button
                onClick={() => {
                    setAge(80);
                }}
            >
                年齢をセット
            </button>
        </>
    );
}

export default App;
