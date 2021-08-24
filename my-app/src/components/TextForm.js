import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    function setToUpper() {

        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase.","success");
    }

    function setToLower() {

        setText(text.toLowerCase());
        props.showAlert("Coverted to Lowercase.","success");
    }
    function handleExtraSpaces() {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed.","success");
    }
    
    function handleCopy() {

        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard.","success");
    }
    function setToClear() {

        setText("");
        props.showAlert("Text cleared.","success");
    }

    function handleOnChange(event) {

        setText(event.target.value);
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="myBox" className={`form-label my-3 text-${props.mode==='light'?'dark':'white'}`}><h2><i>Enter text to analyze : </i></h2></label>
                <textarea className={`bg-${props.mode==='dark'?'secondary':'white'} form-control rounded border-4 px-4 py-3 text-${props.mode==='light'?'dark':'white'}`} id="myBox" rows={8} value={text} onChange={handleOnChange} />
            </div>
            <button className="btn btn-primary mx-2 rounded-pill border-4" onClick={setToUpper}><b>Convert to Uppercase</b></button>
            <button className="btn btn-primary mx-2 rounded-pill border-4" onClick={setToLower}><b>Convert to Lowercase</b></button>
            <button className="btn btn-primary mx-2 rounded-pill border-4" onClick={handleExtraSpaces}><b>Remove Extra Spaces</b></button>
            <button className="btn btn-primary mx-2 rounded-pill border-4" onClick={handleCopy}><b>Copy Text</b></button>
            <button className="btn btn-primary mx-2 rounded-pill border-4" onClick={setToClear}><b>Clear text</b></button>
            <div className={`mb-3 my-2 text-${props.mode==='light'?'dark':'white'}`}>
                <h3>
                    Your text summary
                </h3>
                <p>
                    <b>{text.split(" ").length} </b> words  |  <b> {text.length}</b> characters
                    <br />
                    <b>
                        {((text.split(" ").length) / 125).toFixed(1)}
                    </b> minutes read
                </p>

                <h2>Preview</h2>
                <p>
                    <i>
                        {text}
                    </i>
                </p>

            </div>
        </div>
    )
}
