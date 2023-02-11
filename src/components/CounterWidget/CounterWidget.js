import './CounterWidget.css'

const CounterWidget = ({count, setCount, stock}) => {
    const addCounter = () => {
        if(count < stock){
            setCount(count+ 1);
        }
    }
    const subtractCounter = () => {
        if(count > 0){
            setCount(count-1);
        }
    }
  return (
    <div className="div-count">
        <div className="controllers">
        <button className="counter" onClick={subtractCounter}>-</button>
            <span className="number" >{count}</span>
        <button className="counter" onClick={addCounter}>+</button>
        </div>
    </div>
  )
}

export default CounterWidget