import FormBasic from './components/FormBasic'
import FormYup from './components/FormYup'
import StateForm from './components/StateForm'
import StateTodo from './components/StateTodo'

function App() {
    return (
        <div className="grid grid-cols-6 gap-4 m-4">
            <div className="col-span-2 col-start-3">
                <h1 className='m-3 p-2 text-3xl font-bold underline text-center'>React道場</h1>
            </div>
            <div className="col-span-3 col-start-1">
                <FormYup />
            </div>
            <div className="col-span-3 col-start-4">
                <FormBasic />
            </div>
            <div className="col-span-6">
                <StateTodo />
                <StateForm />
            </div>

        </div>
    )
}

export default App