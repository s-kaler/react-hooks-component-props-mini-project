import React from "react";

const coffeeEmoji = '☕️';
const bentoEmoji = '🍱';

function Article ({title, date = "January 1, 1970", preview, minutes}) {
    let read = handleEmoji(minutes) + ` ${minutes} min read`
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{read}</p>
        </article>
    )
}

function handleEmoji(minutes){
    let output = '';
    let emojiNum = 0;
    if(minutes < 30) {
        emojiNum = minutes/5;
        for(let i = 0; i<emojiNum; i++){
            output+= coffeeEmoji;
        }
        return output;
    }
    else if(minutes >= 30){
        emojiNum = minutes/10;
        for(let i = 0; i<emojiNum; i++){
            output+= bentoEmoji;
        }
        return output;
    }
}


export default Article;