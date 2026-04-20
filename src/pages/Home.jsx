import React, { useState } from 'react'
import './Home.css'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <main className='Container'>
            <h2 className='wel_message'>Welcome to DevHub Portal</h2>
            <p className='ms_note'>DevHub Portal is a lightweight directory for exploring users and their details.</p>

            <section id='logistics' className='Log_s'>
                <p className='log_click'>,You've clicked {count} times</p>
                <button onClick={() => setCount(c => c + 1)}>Click Me</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </section>
        </main>
    )
}

export default Home