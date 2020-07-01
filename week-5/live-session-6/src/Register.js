import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Register = () => {
    const [ firstName , setFirstName ] = useState('')
    const [ password , setPassword ] = useState('')
    // const [ user , setUser ] = useState({})
    const [ allUsers , setAllUsers ] = useState([])
    // const [ isLoggedIn , setIsLoggedIn ] = useState(false)

    // LifeCycle Method - Runs on Component Mounting
    useEffect(() => {
        console.log('The Register component mounted')

        //  For Axios
        axios.get('https://swapi.dev/api/people')
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })

        // For Fetch
        fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err))
    })


    // Submit user data from the form
    const handleSubmit = (e) => {
        e.preventDefault()
        let newUser = { firstName : firstName, password: password }
        setAllUsers( [ ...allUsers, newUser] )
        formCleanUp()
    }

    // Clean up the form and state
    const formCleanUp = () => {
        setPassword('')
        setFirstName('')
    }

    //  Mapping users
    const mappedUsers =  allUsers.map(user => {
        console.log(user)
    })

    
    return (
        <div >
            Hello!  I'm Register!
            <form onSubmit={handleSubmit}>
                first name:
                <input 
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                Password: 
                <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button> Click ME! </button>
            </form>
            {mappedUsers}
        </div>
    );
}

export default Register;