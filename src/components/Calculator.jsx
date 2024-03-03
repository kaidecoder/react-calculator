import React, {useState} from 'react'
import { IoIosBackspace } from "react-icons/io";


const Calculator = () => {
    const [input, setInput] = useState("0")

    const handleClick = (num) => {
        setInput(input => input + num)
    }
    const handleChange = e => {
        setInput(e.target.value)
       
    }
    const handleClear = () => {
            setInput("")
        
    }

    const evaluate = () => {
        setInput(eval(input).toFixed(2))
    }

    const handleDelete = () => {
        if(input){
            setInput(input.slice(0, -1))
        }else{
            return
        }
    }
    
  return (
    <div className="container">
        <form>
            <input type="text" value={input} onChange={handleChange}/>
        </form>
        <div className="row1 row">
            <p className="all-clear" onClick={handleClear}>AC</p>
            <p className="open-parens" onClick={()=>handleClick("(")}>(</p>
            <p className="close-parens" onClick={()=>handleClick(")")}>)</p>
            <p className="divide" onClick={()=>handleClick("/")}>/</p>
        </div>
        <div className="row2 row">
            <p className="num7 num" onClick={() => handleClick(7)}>7</p>
            <p className="num8 num" onClick={() => handleClick(8)}>8</p>
            <p className="num9 num" onClick={()=>handleClick(9)}>9</p>
            <p className="times num" onClick={()=>handleClick("*")}>x</p>
        </div>
        <div className="row3 row">
            <p className="num4 num" onClick={()=>handleClick(4)}>4</p>
            <p className="num5 num" onClick={()=>handleClick(5)}>5</p>
            <p className="num6 num" onClick={()=>handleClick(6)}>6</p>
            <p className="subtract num" onClick={() =>handleClick("-")}>-</p>
        </div>
        <div className="row4 row">
            <p className="num1 num" onClick={()=>handleClick(1)}>1</p>
            <p className="num2 num" onClick={()=>handleClick(2)}>2</p>
            <p className="num3 num" onClick={()=>handleClick(3)}>3</p>
            <p className="add" onClick={()=>handleClick("+")}>+</p>
        </div>
        <div className="row5 row">
            <p className="num0 num" onClick={()=>handleClick(0)}>0</p>
            <p className="dot" onClick={()=>handleClick(".")}>.</p>
            <p className="back" onClick={()=>handleDelete("-")}><IoIosBackspace />
</p>
            <p className="equal" onClick={()=>evaluate("=")}>=</p>
        </div>
    </div>
  )
}

export default Calculator