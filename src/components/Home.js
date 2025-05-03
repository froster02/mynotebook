import React from 'react'

const Home = () => {
    return (
        <div className='container my-3'>
            <h1>Add a Note</h1>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <h1>Your Notes</h1>
        </div>
    )
}

export default Home
// This is the Home component that serves as the main page for adding and displaying notes.