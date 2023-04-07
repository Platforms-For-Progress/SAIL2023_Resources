import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <img src='https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373__340.png' width={"400vw"} height={"400vh"}></img>
            <div>
                <h1>Hi, I'm {'\{name\}'}</h1>
                <h2>Welcome to my website!</h2>
            </div>
        </div>
    )
}

export default Home;