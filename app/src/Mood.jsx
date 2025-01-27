import { useState } from "react";
import Emoji from "./Emoji.jsx";

function Mood() {

    const [mood, setMood] = useState("none");

    const resetMoodStatus = () => {
        setMood("none");
    }

    const makeStatusHappy = () => {
        setMood("Happy");
    }
    const makeStatusSad = () => {
        setMood("Sad");
    }
    const makeStatusAngry = () => {
        setMood("Angry");
    }

    return(
        <div className="container">
            <h3>How do you feel today?</h3>
            <label className="mood-message">Select your mood: </label>
            <select className="select-button" label="default">
                <option value="" onClick={resetMoodStatus}></option>
                <option value="Happy" onClick={makeStatusHappy}>Happy</option>
                <option value="Sad" onClick={makeStatusSad}>Sad</option>
                <option value="Angry" onClick={makeStatusAngry}>Angry</option>
            </select>
            <Emoji mood={mood}/>
        </div>
    );
}

export default Mood