/* eslint-disable no-constant-condition */
import { useState, useRef, useEffect, useCallback } from "react";
import { numbersOperatorsValue } from "./numbers&Operators";

import "./App.css";
import NumberBtn from "./NumberBtn";

const App = () => {
    const ecranValueRef = useRef(null);
    const [num, setNum] = useState("");
    useEffect(() => {
        ecranValueRef.current.innerText = num;
    }, [num]);
    const calculate = useCallback(
        (e) => {
            const string = e.target.innerText;

            if (string !== "=" && string !== "C") {
                setNum((prev) => prev + string);
            }
            if (string === "=") {
                try {
                    const res = eval(num);
                    if (res) {
                        setNum(res);
                    } else if (res === 0) {
                        return setNum(0);
                    } else {
                        throw "некоректно введені дані";
                    }
                } catch (error) {
                    ecranValueRef.current.style = "font-size: 12px";
                    setNum(error);

                    setTimeout(() => {
                        setNum("");
                        ecranValueRef.current.style = "font-size: 20px";
                    }, 2000);
                }
            }
            if (string === "C") {
                setNum("");
            }
        },
        [num]
    );
    return (
        <div className='wrapper'>
            <div className='block shadow'>
                <div className='head'>
                    <span onClick={calculate} className='letter'>
                        C
                    </span>
                    <span ref={ecranValueRef} className='ecran'></span>
                </div>
                <div className='main'>
                    {numbersOperatorsValue.map((el, index) => (
                        <NumberBtn key={index} el={el} classItem={"number"} calculate={calculate} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
