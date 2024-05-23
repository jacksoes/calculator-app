import { useState } from "react"


export function Calculator(){
    const [calculatorOutput, setCalculatorOutput] = useState()
    const [calculatorStoredNum, setCalculatorStoredNum] = useState([{}])
    
    const inputs = calculatorStoredNum.map((num, index) => (
            <>{num.number} {num.operation} </>
        )
    )

    const pushButton = (event) => {
        //console.log(event.target.textContent)
    let buttonClicked = event.target.textContent
    const operators = ["+", "-", "*"]
    operators.forEach(operator => {
     

        if (operator == buttonClicked)
            buttonClicked = " " + buttonClicked + " "
        
    });



    if (calculatorOutput != undefined)
    {
        setCalculatorOutput(prev => prev + buttonClicked)
    }
    else
        setCalculatorOutput(buttonClicked)
        
     

        //TODO: make this a switch statement
        /*
        if (buttonClicked == "+")
        {
            const firstNum = {"operation": buttonClicked, "number": calculatorOutput} 
            setCalculatorStoredNum(prevNum => [...prevNum, firstNum])
            setCalculatorOutput()

        }

        if (buttonClicked == "-")
            {
                const firstNum = {"operation": buttonClicked, "number": calculatorOutput} 
                setCalculatorStoredNum(prevNum => [...prevNum, firstNum])
                setCalculatorOutput()
    
            }
        */
        // TODO: other operations


        if (buttonClicked == "=")
        {
            let equation = ""
            for (let i = 1; i < calculatorStoredNum.length; i++)
            {
                equation += `${calculatorStoredNum[i].number} ${calculatorStoredNum[i].operation} `
            }
            equation += calculatorOutput
            console.log(equation)
        }
    }

    //operations
    /*
    function addition(a, b){
        a = parseInt(a)
        b = parseInt(b)
        return a + b;
    }

    function subtraction (a, b){
        a = parseFloat(a);
        b = parseFloat(b)
        return a - b;
    }

    function multiplication (a, b){
        a = parseFloat(a);
        b = parseFloat(b)
        return a * b;
    }

    function subtraction (a, b){
        a = parseFloat(a);
        b = parseFloat(b)
        return a - b;
    }
    */



    return(

        <div className="container-rectangle-vert">
            <div id="calculator-output">
                <div>{inputs}</div>
                <div>{calculatorOutput}</div>
            </div>

            <div id="calculator-buttons">
                <div className="calculator-row">
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">1</button></div>
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">2</button></div>
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">3</button></div>    
                </div>
                <div className="calculator-row">
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">4</button></div>
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">5</button></div>
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">6</button></div>    
                </div> 
                <div className="calculator-row">
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">7</button></div>
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">8</button></div>
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">9</button></div>    
                </div>
                <div className="calculator-row">
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">0</button></div>
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">+</button></div>
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">-</button></div>    
                </div>
                <div className="calculator-row">
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">*</button></div>
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button">=</button></div>
                    <div className="calculator-button-container"><button onClick={(e) => {pushButton(e)}} className="calculator-button"></button></div>    
                </div>
            </div>  
        </div>

   
    )
    

    

}