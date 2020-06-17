import React, {Component } from 'react'
import BadgeList from './BadgeList'

class FormBadge extends Component {
    constructor(){
        super()
        this.state={
          firstName: '',
          lastName: '',
          age: 0,
          nameBadges: []
        }
    }

    handleChange = (e) => {
        // console.dir(e.target)
        // let name = e.target.name
        // let value = e.target.value
        const { name, value } = e.target
        this.setState({ [name] : value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newUserData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
        }
        this.setState({ 
            nameBadges : [ newUserData, ...this.state.nameBadges ], 
            firstName: '', 
            lastName: '',
            age: 0, 
        })
    }


    handleDelete = (i) => {
        let updatedBadgeArray = this.state.nameBadges
        updatedBadgeArray.splice(i, 1)
        this.setState({ nameBadges: updatedBadgeArray })
    }


    render(){
        return(
            <div>
                Hi im a class component
                <label> 
                    First Name : 
                </label>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        required={true}
                    />
                    <input 
                        type='text'
                        name='lastName'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    Age: 
                    <input 
                        type='number'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <button> Submit Me </button>
                </form>

                <BadgeList 
                    nameBadges={this.state.nameBadges}
                    handleDelete={this.handleDelete}
                />
               
            </div>
        )
    }
}

export default FormBadge