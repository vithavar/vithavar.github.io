import React from 'react'


function About () {
    var options = {
        string: ['<i>First</i> sentence.', '&mp; a second sentence.'],
        typeSpeed: 30
    };
    return (
        <div id='About' className ='hero-container'>
            <h1></h1>
            {/* <p>I'm Vithusan Thavarajah</p> */}
            <p>I'm currently a Software Developer at TD Bank in Toronto. I graduated from the University of Toronto with an Honours Bachelor of Science where I studied Computer Science and specialized in Machine Learning. When I’m not in front of my computer, I’m most likely carrying my camera around and fulfilling my love for photography!</p>
        </div>

    )
}

export default About