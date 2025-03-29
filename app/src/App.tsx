import MyHello from './components/MyHello'
import StateBasic from './components/StateBasiic'
import './App.css'

function App() {
    return (
        <>
            <h1>React道場</h1>
            <MyHello myName="太郎" />
            <StateBasic init={0} />
        </>
    )
}

export default App