import React, { useState, useEffect } from 'react';
import axios from 'axios'


function Register() {
    const [ firstName, setName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ currentUser, setCurrentUser ] = useState({})

    // Hooks (above) replace this syntax:
        // this.state={
        //     firstName: ''
        // }
        // this.setState({firstName: 'newName'})

    useEffect(() => {
        //  This is possible, but not good practice since it will case a loop.
            // axios.get('https://swapi.dev/api/people/1')
            // // axios.post('localhost:5000/user')
            // .then(res => {
            //     console.log(res.data)
            //     setCurrentUser(res.data)
            // })
            // .catch(err => {
            //     console.log(err)
            // })

        //  This is better and prevents our set state loop
        if(!currentUser) getLuke()
    })

    const getLuke = () => {
        axios.get('https://swapi.dev/api/people/1')
        .then(res => {
            console.log(res.data)
            setCurrentUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    //  Possible, but not good practice with Hooks... hard to make dynamic
        // const handleChange = (e) => {
        //     const {name, value} = e.target
        //     // console.log(value)
        //     setName(value)
        //     setPassword(value)
        // }

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()
    }

  return (
    <div>
    I'm Register!
        <form onSubmit={handleSubmit}>
            name:
            <input
                type='text'
                name='firstName'
                onChange={(e) => setName(e.target.value)}
            />
            Password: 
            <input 
                type='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* <button> Submit </button> */}
        </form>
    </div>
  );
}

export default Register;
