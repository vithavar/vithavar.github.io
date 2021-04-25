import React from 'react'
import Image from 'next/image'
import Typing from './Typing'

function Home () {

    return (
        <div id='Home' className ='hero-container'>
            <Image src='/images/CutOut.png' preload="true" height="400px" width="225px"></Image>
            <h1>Hi, I'm Vithusan!</h1>
            {/* <p>I'm Vithusan Thavarajah</p> */}
            <p>
                <Typing/>
            </p>
        </div>

    )
}

export default Home