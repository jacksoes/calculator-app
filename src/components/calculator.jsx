
export function Calculator(){
    return(
        <div className="container-rectangle-vert">
            <div id="calculator-output"></div>

            <div id="calculator-buttons">
                <div className="calculator-row">
                    <div className="calculator-button-container"><button className="calculator-button">1</button></div>
                    <div className="calculator-button-container"><button className="calculator-button">2</button></div>
                    <div className="calculator-button-container"><button className="calculator-button">3</button></div>    
                </div>
                <div className="calculator-row">
                    <div className="calculator-button-container"><button className="calculator-button">4</button></div>
                    <div className="calculator-button-container"><button className="calculator-button">5</button></div>
                    <div className="calculator-button-container"><button className="calculator-button">6</button></div>    
                </div> 
                <div className="calculator-row">
                    <div className="calculator-button-container"><button className="calculator-button">7</button></div>
                    <div className="calculator-button-container"><button className="calculator-button">8</button></div>
                    <div className="calculator-button-container"><button className="calculator-button">9</button></div>    
                </div>
                <div className="calculator-row">
                    <div className="calculator-button-container"><button className="calculator-button">+</button></div>
                    <div className="calculator-button-container"><button className="calculator-button">-</button></div>
                    <div className="calculator-button-container"><button className="calculator-button">*</button></div>    
                </div>
                <div className="calculator-row">
                    <div className="calculator-button-container"><button className="calculator-button">=</button></div>
                    <div className="calculator-button-container"><button className="calculator-button"></button></div>
                    <div className="calculator-button-container"><button className="calculator-button"></button></div>    
                </div>
            </div>  
        </div>
    )

}