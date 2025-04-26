import Books from './input/books'
import ForFilter from './components/ForFilter'
import ForList from './components/ForList'
import ForSort from './components/ForSort'
import MyHello from './components/MyHello'
import StateBasic from './components/StateBasic'
import StateParent from './components/StateParent'
import './App.css'

// リストをスプレッド構文でコピーしてから使う
const books1 = [...Books]
const books2 = [...Books]
const books3 = [...Books]

function App() {
    return (
        <>
            <h1>React道場</h1>
            <StateParent />
            <ForList books={books1} />
            <ForSort books={books2} />
            <ForFilter books={books3} />
            <MyHello myName="太郎" />
            <StateBasic init={0} />
        </>
    )
}

export default App