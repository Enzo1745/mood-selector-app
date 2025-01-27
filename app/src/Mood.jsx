import { useState } from "react";
import Emoji from "./Emoji.jsx";

function Mood() {

    const [mood, setMood] = useState("none");

    return(
        <div className="container">
            <h3>How do you feel today?</h3>
            <label className="mood-message">Select your mood: </label>
            <select className="select-button"
            value={mood}
            onChange={(e) => setMood(e.target.value)}>
                <option value=""></option>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Angry" >Angry</option>
            </select>
            <Emoji mood={mood}/>
        </div>
    );
}

export default Mood