import Books from './input/books'
import ForFilter from './components/ForFilter'
import ForList from './components/ForList'
import ForSort from './components/ForSort'
import MyHello from './components/MyHello'
import StateBasic from './components/StateBasic'
import StateForm from './components/StateForm'
import StateFormUC from './components/StateFormUC'
import StateParent from './components/StateParent'
import StateTodo from './components/StateTodo'

// リストをスプレッド構文でコピーしてから使う
const books1 = [...Books]
const books2 = [...Books]
const books3 = [...Books]

function App() {
    return (
        <div className="grid grid-cols-6 gap-4 m-4">
            <div className="col-span-2 col-start-3">
                <h1 className='m-3 p-2 text-3xl font-bold underline text-center'>React道場</h1>
            </div>
            <div className="col-span-3 col-start-1">
                <StateTodo />
                <StateForm />
            </div>
            <div className="col-span-3 col-start-4">
                <StateFormUC />
                <StateParent />
                <MyHello myName="万太郎" />
                <StateBasic init={0} />
            </div>
            <div className="col-span-6">
                <ForList books={books1} />
                <ForSort books={books2} />
                <ForFilter books={books3} />
            </div>
        </div>
    )
}

export default App