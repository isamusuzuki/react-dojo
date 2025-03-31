import Books from './input/books'
import ForList from './components/ForList'
import MyHello from './components/MyHello'
import StateBasic from './components/StateBasiic'
import './App.css'

function App() {
    return (
        <>
            <h1>React道場</h1>
            <ForList books={Books} />
            <StateBasic init={0} />
            <MyHello myName="太郎" />
        </>
    )
}

export default App