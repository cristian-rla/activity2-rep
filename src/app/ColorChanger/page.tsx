'use client'
import React from "react";
import { useState } from "react";

import "./ColorChanger.css"

const ColorChanger = () =>{
    const [color, changeColor] = useState("#808080");
    const acceptColor = (e: React.FormEvent, rectangle:number) => {
        e.preventDefault();
        switch (rectangle){
            case 1:
                changeColor("#f87171");
                break;
            case 2:
                changeColor("#facc15");
                break;
            case 3:
                changeColor("#60a5fa");
                break;
            case 4:
                changeColor("#34d399");
                break;
        }
    };


    return(
        <div className="colorContainer">
            <div className="varColorRectangle" style = {{background: color || "#808080"}}></div>
            <div className="colorOptions">
                <button onClick = {(e) => acceptColor(e, 1)} className= "redRectangle bg-red-300"/>
                <button onClick = {(e) => acceptColor(e, 3)} className= "blueRectangle bg-blue-300"/>
                <button onClick = {(e) => acceptColor(e, 4)} className= "greenRectangle bg-green-300"/>
                <button onClick = {(e) => acceptColor(e, 2)} className= "yellowRectangle bg-yellow-200"/>
            </div>
        </div>
    );
};

export default ColorChanger;