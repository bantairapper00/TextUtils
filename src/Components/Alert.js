import React from "react";

export default function Alert(props){
    const captalize = (word) =>{
        let newWord = word.toLowerCase();
        return newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }
    return (
        props.alert && <div>
            <div className="alert alert-success" role="alert">
                <strong>{captalize(props.alert.type)}</strong>: {props.alert.message}
            </div>
        </div>
    )
}