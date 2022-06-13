import React, { useState } from "react";


export default function TextForm(props) {
    // function handleUpClick(){
    //     console.log("Uppercase was clicked")
    // }

    const [text, setText] = useState("")

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newTxt = text.toUpperCase();
        setText(newTxt);
        props.showAlert("Converted to uppercase", "success");
        
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const handleDownClick = () =>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success");
    }

    const wordCount = () =>{
        let count = 0;
        let a = text.split(' ');
        a.forEach(function(element){
            if(element !== ''){
                count++;
            }
        })
        return count;
    }

    const handleCopy =() =>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text has been copied", "success");
    }

    const handleExtraSpace =() => {
        console.log("hello")
        let newtxt = text.split(/[ ]+/);
        setText(newtxt.join(' '));
    }

    const clear = () =>{
        setText("")
        props.showAlert("Text has been cleared", "success");
    }

    return (
        <>
            <div className="container my-3">
                <h1 style={{color: props.mode === "light"?"black":"white"}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="my-box" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"white":"#525252", color: props.mode==="light"?"black":"white"}}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to lowercase</button>
                <button className="btn btn-primary " onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra space</button>
                <button className="btn btn-primary " onClick={clear}>Clear</button>
            </div>
            <div className="container my-3" style={{color: props.mode === "light"?"black":"white"}}>
                <h2>Your text summary</h2>
                <p>{wordCount()} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text===''?"Preview your text here.":text}</p>
            </div>
        </>
    )
}

