'use client'

import React from "react";
import {useState} from 'react';
import "./Counter.css";

const Counter = () =>{
    const [counter, setCounter] = useState(0);  /* Entre paréntesis, el valor inicial de mi variable */
    const [negValError, setNegValError] = useState('');

    /* Se declara una función que va a actualizar el estado de la primera variable.  */
    const addOne = (e: React.FormEvent) => {
        if (negValError != ''){ /* No se supone que tenga valores negativos */
            setNegValError('');
        }
        e.preventDefault();
        setCounter(counter + 1);
    };
    const subtOne = (e: React.FormEvent) => {
        e.preventDefault();
        if(counter == 0){
            setNegValError("No valores negativos !!");
        } else{
            setCounter(counter - 1);
        }
    };


    return (
            <div className="Counter">
                <div className="Display">
                    <h1>{counter}</h1>
                </div>
                <div className="Buttons">
                    <button onClick = {addOne} type= "submit" className="UpButton">
                        Incrementar
                    </button>

                    <button onClick={subtOne} type= "submit" className="DownButton">
                        Decrementar
                    </button>
                </div>
                <p className= "error">{negValError}</p>
            </div>

    );
};

export default Counter;
