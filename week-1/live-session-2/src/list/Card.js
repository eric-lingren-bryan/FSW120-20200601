import React from 'react';
import './card-styles.css'

const Card = (props) => {

    console.log(props.isComplete)

    let cardCompleted = ''

    if(props.isComplete){
        cardCompleted = 'card-completed'
    }else{
        cardCompleted = 'card-incompleted'
    }

    return(

        <div className={cardCompleted}>
            <h1 style={{color: 'red'}}> {props.title}  </h1>
            <p> {props.description} </p>
            <button> Click me</button>
        </div>
    )
}

export default Card