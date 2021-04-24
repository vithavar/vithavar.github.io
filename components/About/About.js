import React from 'react'
import Image from 'next/image'

function About () {
    return (
        <div className ='hero-container'>
            <Image src='/images/CutOut.png' height="400px" width="225px"></Image>
            <h1>WELCOME!</h1>
            <p>I'm Vithusan Thavarajah</p>
        </div>

    )
}

export default About