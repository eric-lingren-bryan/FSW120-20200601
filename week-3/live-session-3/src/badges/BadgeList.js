import React from 'react';
import NameBadge from './NameBadge'


class BadgeList extends React.Component  {
  
    render(){
        console.log(this.props)

        const mappedCards = this.props.nameBadges.map((card, i) => {
            return (
                <NameBadge
                    key={i} 
                    index={i}
                    firstName={card.firstName}
                    lastName={card.lastName}
                    age={card.age}
                    handleDelete={this.props.handleDelete}
                />
            )
        })

        return (
            <div>
                I'm Badge List
                {mappedCards}
            </div>
        )
    }
}

export default BadgeList