import { Button } from 'react-bootstrap';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Question = () => {
    const formRef = useRef();
    const [selected, setSelected] = useState([]);
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [correct, setCorrect] = useState(false);
    const correctOption = ["change speed", "open the door"];
    const changeHandler = (e) => {
        const clicked = e.target.value;
        if (selected.includes(clicked)) {
            setSelected((prev) => prev.filter(item => item !== clicked));
        } else {
            setSelected((prev) => [...prev, clicked]);
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        let err = ""
        if (selected.length === 0) {
            err = "You must select at least one option";
        } else if (selected.length !== correctOption.length) {
            err = "Wrong answer. Try again!";
        } else {
            const picked = [...selected];
            picked.sort();
            console.log(picked, correctOption)
            for (let i = 0; i < picked.length; i++) {
                if (picked[i] !== correctOption[i]) {
                    console.log("first")
                    err = "Wrong answer. Try again!";
                    break;
                }
            }
        }
        if (err) {
            setError(err);
        }
        setDisabled(true);
        setCorrect(!err);
    }
    return (
        <>
            <h2>Object methods</h2>
            <p>The programmer models the car entity, which is an object of the Car class. Which of the following will be car methods?</p>
            <form onSubmit={submitHandler} className="d-flex flex-column gap-2" ref={formRef}>
                <label htmlFor="first"><input type="checkbox" name="question" value={"transmission"} id="first" disabled={disabled} className="me-2" onChange={changeHandler} />transmission</label>
                <label htmlFor="second"><input type="checkbox" name="question" value="change speed" id="second" disabled={disabled} className="me-2" onChange={changeHandler} />change speed</label>
                <label htmlFor="third"><input type="checkbox" name="question" id="third" value="engine" disabled={disabled} className="me-2" onChange={changeHandler} />engine</label>
                <label htmlFor="fourth"><input type="checkbox" name="question" id="fourth" value="open the door" disabled={disabled} className="me-2" onChange={changeHandler} />open the door</label>
                {!disabled && <Button type="submit" className='w-25'>Submit</Button>}
            </form>
            {disabled && !correct && <Button className='w-25' onClick={() => {
                formRef.current.reset();
                setDisabled(false);
                setError("");
            }}>Retry</Button>}
            {correct && <Link to="/track/java" className='text-success'>Correct: Go back to topics</Link>}
            <div className="text-danger mb-2">{error}</div>
        </>
    )
}

export default Question