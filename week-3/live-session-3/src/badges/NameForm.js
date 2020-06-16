import React from 'react';
import BadgeList from './BadgeList'

class NameForm extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            nameBadges: []
        }
    }

    componentDidMount(){
        // Axios would go here -  This will run any time this component mounts.
        // You could console log data here too
        // Learn more lifecycle methods here: https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
    }


    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name] : value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newNameBadge = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }
        this.setState({ nameBadges: [...this.state.nameBadges, newNameBadge ] })
    }

    handleDelete = (i) => {
        let newNameBadges = this.state.nameBadges
        newNameBadges.splice(i, 1)
        this.setState({ nameBadges: newNameBadges })
    }


    render(){
        console.log(this.state)
        return (
            <div>
                <h2> Im a class Component </h2>

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
                        required={true}
                    />
                    <input 
                        type='number'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <button> Create Name Badge </button>
                </form>

                <BadgeList 
                    nameBadges={this.state.nameBadges}
                    handleDelete={this.handleDelete}
                />

            </div>
        )
    } 
}

export default NameForm