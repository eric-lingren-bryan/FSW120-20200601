import React from 'react';
import './card-styles.css'


const Card = ( props ) => {

    let completedClass = ''

    if(props.isComplete){
        completedClass= 'card-complete'
    }else{
        completedClass = 'card-incomplete'
    }

    return (
        <div className={completedClass}>
            <h1 style={{ color: 'blue' }}> {props.title} </h1>
            <p> {props.description} </p>
        </div>
    )
}

export default Card