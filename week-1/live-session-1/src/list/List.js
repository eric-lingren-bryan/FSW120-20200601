import React from 'react';
import Card from './Card'

const List = () => {

    let cardData = [
        {
            title: 'Wash dishes',
            description:'They are So Dirty....',
            isComplete:false
        },
        {
            title: 'Work',
            description:'Make That MONEY!',
            isComplete:false
        },
        {
            title: 'Exercise',
            description:'Get Ripped',
            isComplete:true
        },
        {
            title: 'Exercise Again',
            description:'Extra Ripped',
            isComplete:true
        },
        {
            title: 'Eat Pizza',
            description:'Pepperoni',
            isComplete: false
        },
    ]

    const mappedCards = cardData.map( card => {
        return(
            <Card 
                title={card.title}
                description={card.description}
                isComplete={card.isComplete}
            />
        )
    })


    return (
        <div >
            <h1> This is my list component </h1>
            {mappedCards}
        </div>
    )
}

export default List