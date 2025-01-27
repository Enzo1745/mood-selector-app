function Emoji(props) {

    const emojis = ["😄", "😡", "😥"];

    let emoji = "";
    
    const selectEmoji = () => {
        if(props.mood === "Happy") {
            emoji = "😄";
        }
        else if(props.mood === "Angry") {
            emoji = "😡";
        }
        else if(props.mood === "Sad") {
            emoji = "😥";
        }
        else {
            emoji = "";
        }
    }

    selectEmoji();
    
    return (
        <p>{emoji}</p>
    );
}

export default Emoji