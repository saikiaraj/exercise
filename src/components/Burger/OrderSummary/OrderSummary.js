import React from 'react';

const orderSummary = ( props ) => {
    const summary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span>{igKey}</span> : {props.ingredients[igKey]}
            </li>
        )
    });

    return(
        <ul>
            {summary}
        </ul>
    )
}

export default orderSummary;