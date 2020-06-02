import React from 'react';
import Card from './Card'

const List = () => {

    let cardData = [
        {
            title: 'Wash dishes',
            description:'ajksdhf',
            isComplete:false
        },
        {
            title: 'Work',
            description:'ajkadfgsdfgsdhf',
            isComplete:false
        },
        {
            title: 'Exercise',
            description:'230945029348',
            isComplete:true
        },
        {
            title: 'Exercise Again',
            description:'230945029348',
            isComplete:true
        },
        {
            title: 'Eat Pizza',
            description:'pepperoni',
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
            <h1> This is list</h1>
            {mappedCards}
        </div>
    )
}

export default List