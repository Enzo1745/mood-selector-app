

function Mood() {

    return(
        <div className="container">
            <h3>How do you feel today?</h3>
            <label>Select your mood: </label>
            <select>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Angry">Angry</option>
            </select>
            <p>emoji</p>
        </div>
    );
}

export default Mood