import { useState } from "react"
import './CounterWidget.css'

const CounterWidget = () => {
    const [count, setCount] = useState(0);
    const stock = 10;
    const sumar = () => {
        if(count < stock){
            setCount(count+ 1);
        }
    }
    const restar = () => {
        if(count > 0){
            setCount(count-1);
        }
    }
    const onAdd = () => {

    }
  return (
    <div>
    <div className="div-count">
        <div className="controllers">
        <button className="item" onClick={restar}>-</button>
            <span className="item" >{count}</span>
        <button className="item" onClick={sumar}>+</button>
        </div>
    </div>
        <button className="add-button" onClick={onAdd}>Agregar</button>
    </div>
  )
}

export default CounterWidget