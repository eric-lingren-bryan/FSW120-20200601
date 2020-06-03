import React from 'react';
import Card from './Card'

const List = () => {

    let myItems = [
        {
            title: 'walk dog',
            isComplete: true,
            description: 'not too loing'
        },
        {
            title: 'walk dog again',
            isComplete: true,
            description: 'shoet'
        },
        {
            title: 'Sleep',
            isComplete: false,
            description: 'not more than 6 hours'
        },
        {
            title: 'Learn its',
            isComplete: false,
            description: 'They are awesome'
        }
    ]

    const mappedItems = myItems.map( (item) => {
        return(
            <Card 
                title={item.title}
                isComplete={item.isComplete}
                description={item.description}
            />
        )
    })

    return(
        <div>
            <h1> This Is List  </h1>
            {mappedItems}
        </div>
    )
}

export default List