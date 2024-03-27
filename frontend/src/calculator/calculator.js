import React from "react";
import "./calculator.css";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number1: 0, number2: 0, score: 0, operation: "", isCounted: false};
    }

    setValues = (event) => {
        const etn = event.target.name;
        if(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(etn)) {
            if(this.state.operation === "" || this.state.isCounted === true) {
                if(this.state.number1 === 0 || this.state.isCounted === true) {
                    this.setState({number1: etn, score: etn, number2: 0, operation: "", isCounted: false});
                }
                else if(this.state.number1 !== 0 && this.state.isCounted === false) {
                    this.setState({number1: this.state.number1 + etn, score: this.state.number1 + etn});
                }
            }
            else {
                if(this.state.number2 === 0) {
                    this.setState({number2: etn, score: etn});
                }
                else if(this.state.number2 !== 0 && this.state.isCounted === false) {
                    this.setState({number2: this.state.number2 + etn, score: this.state.number2 + etn});
                }
            }
        }
        else if(["/", "X", "-", "+"].includes(etn)) {
            if(this.state.number2 === 0) {
                this.setState({operation: etn});
            }
            else if(this.state.number2 !== 0) {
                if(this.state.isCounted === true) {
                    this.setState({number1: this.state.score, operation:etn, number2: 0, isCounted: false});
                }
                else {
                    this.count(event);
                }
            }
        }
        else {
            this.actions(event);
        }
    };

    actions = (event) => {
        const etn = event.target.name;
        if (etn === "=") {
            this.count(event);
        }
        else if(etn === "C") {
            this.setState({number1: 0, number2: 0, operation: "", score: 0, isCounted: false})
        }
        else if(etn === "+-") {
            if(this.state.number2 === 0) {
                this.setState({number1: this.state.number1 * -1})
            }
            else {
                this.setState({number2: this.state.number2 * -1})
            }
        }
        else if(etn === "%") {
            if(this.state.number2 !== 0 && this.state.isCounted === false) {
                this.setState({isCounted: true, number2: this.state.number2 / 100 * this.state.number1})
            }
            else {
                this.setState({number1: 0, number2: 0, operation: "", score: 0, isCounted: false})
            }
        }
    };

    count = (event) => {
        let result;
        const num1 = parseFloat(this.state.number1);
        const num2 = parseFloat(this.state.number2);
        const etn = event.target.name;

        switch (this.state.operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "X":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                result = "0";
                this.setState({number1: 0, number2: 0, operation: "", score: 0, isCounted: false})
        }

        if(result !== "0") {
            this.setState({score: result, isCounted: true});
        }

        if(["/", "X", "-", "+"].includes(etn)) {
            this.setState({number1: result, operation: etn, number2: 0, isCounted: false});
        }
    }

    render() {
        const buttonsValues = [
            ["C", "+-", "%", "/"],
            [7, 8, 9, "X"],
            [4, 5, 6, "-"],
            [1, 2, 3, "+"],
            [0, ".", "="],
        ];

        return(
            <div className="calcBody">
                <div className="calculator">
                    <div className="calcDisplay">
                        <div className="calcNumbers">
                            {this.state.number1 !== 0 || this.state.operation !== "" ? this.state.number1 : ""} 
                            {this.state.operation} 
                            {this.state.isCounted === true ? this.state.number2 : ""}
                        </div>
                        <div className={this.state.number1 === 0 ? "" : "calcScore"}>
                            {this.state.score}
                        </div>
                    </div>
                    <div className="calcButtonsBox">
                        {buttonsValues.map((btnRow, index) =>
                            <div key={index} className="calcButtonRow">
                                {btnRow.map((btnVal, key) =>
                                    <button 
                                        onClick={this.setValues}
                                        key={key} 
                                        className={index === 0  || key === 3 ? "calcOperationButton" : "calcButton"}
                                        name={btnVal}>
                                            {btnVal}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
