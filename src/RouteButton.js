import React from "react";

import { Route } from 'react-router-dom';



const RouteButton = (props) => {
    return (
        <Route render={({ history }) => (
            <button id='back' onClick={() => {
                history.push({
                    pathname: props.pathname,
                    data: props.data,
                    data2:props.personDB
                    
                });
            }}>
                {props.value}
            </button>
        )}
        />
    )
}

export default RouteButton;