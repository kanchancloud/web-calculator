import './Calculator.css';
import {useState} from "react";
import './Calculator.css'

function Calculator() {
    const [currentSum,setCurrentSum]=useState("");


    const handler=(e)=>{
        setCurrentSum(currentSum.concat(e.target.id));
    }
    const clear=()=>{
        setCurrentSum(" ")
    }
    const backspace=()=>{
        setCurrentSum(currentSum.slice(0,currentSum.length-1));
    }
    const add = () => {
        try{
            setCurrentSum(eval(currentSum).toString());
        }catch (err){
            return("error");
        }

        if(add===eval){
            return
            clear();
        }
    }




    return (
        <div className="App">
            <div className="calculator">
                <h4>Calculator</h4>
                <div className="formContainer">
                <form className="screen">
                   <input type="text" value={currentSum}/>
                </form>
                </div>
                <div className="buttonWrapper">
                    <div className="buttons">
                            <button name="clear" id="clear" onClick={clear}>clear</button>
                            <button  name=">" id=">" onClick={handler}>></button>
                        <br/>

                            <button name="(" id="(" onClick={handler}>(</button>
                            <button name=")" id=")" onClick={handler}>)</button>
                            <button  name="%" id="%" onClick={handler}>%</button>
                            <button name="/" id="/" onClick={handler}>/</button>
                        <br/>

                            <button name="7" id="7"  onClick={handler}>7</button>
                            <button name="8" id="8" onClick={handler}>8</button>
                            <button name="9" id="9" onClick={handler}>9</button>
                            <button name="*" id="*" onClick={handler}>*</button>
                        <br/>

                            <button name="4" id="4" onClick={handler}>4</button>
                            <button name="5" id="5" onClick={handler}>5</button>
                            <button name="6" id="6" onClick={handler}>6</button>
                            <button name="-" id="-" onClick={handler}>-</button>
                        <br/>

                            <button name="1" id="1" onClick={handler}>1</button>
                            <button name="2" id="2" onClick={handler}>2</button>
                            <button name="3" id="3" onClick={handler}>3</button>
                            <button name="+" id="+" onClick={handler}>+</button>
                        <br/>

                            <button name="0" id="0" onClick={handler}>0</button>
                            <button name="." id="." onClick={handler}>.</button>
                            <button className="backSpaceImg" id="backSpace" onClick={backspace}>CE</button>
                            <button name="=" id="=" onClick={add}>=</button>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
