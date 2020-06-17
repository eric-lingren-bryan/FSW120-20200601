import React, {Component } from 'react'
import BadgeCard from './BagdgeCard'

class BadgeList extends Component {

    render(){

    const mappedCards = this.props.nameBadges.map( (card, i) => {
        return(
            <BadgeCard 
                key={i}
                index={i}
                firstName={card.firstName}
                lastName={card.lastName}
                age={card.age}
                handleDelete={this.props.handleDelete}
            />
        )
    })

        return(
            <div>
                Im list
               {mappedCards}
            </div>
        )
    }
}

export default BadgeList