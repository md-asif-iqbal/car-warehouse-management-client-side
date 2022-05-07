import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import'./NotFound.css'
const NotFound = () => {
    return (
        <div className='error'>
            <FontAwesomeIcon className='icon' icon={faSadTear}></FontAwesomeIcon>
            <h1>404</h1>
            <h5>Page not found</h5>
            <p>the Page you are looking for doesn't exist or an other error occurred.</p>
            <p>Go back, or choose a new direction.</p>
        </div>
    );
};

export default NotFound;