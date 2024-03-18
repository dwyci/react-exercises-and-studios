import React from "react";
export default function HobbyLinks(){

    let hobbyLinks = [
        "https://www.mountainproject.com/", 
        "https://www.crossfit.com/"
    ];

    return (
        <div>
            <a href = {hobbyLinks[0]}>https://www.mountainproject.com/</a>
            <br />
            <a href={hobbyLinks[1]}>https://www.crossfit.com/</a>
        </div>

    );
}