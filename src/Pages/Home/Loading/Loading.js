import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: '50px'}} className='w-100'>
          
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                Loading...
            
        </div>
    );
};

export default Loading;

// all img links 
// https://i.ibb.co/sHQBLqv/Audi-A9.jpg
// https://i.ibb.co/tQSLM7T/Audi-R8.jpg
// https://i.ibb.co/ky6T7nR/BMW-i8.jpg
// https://i.ibb.co/N9t4X5r/bugatti-divo.jpg
// https://i.ibb.co/0jsZ1w3/Bugatti-Veyron.jpg
// https://i.ibb.co/5cknH2P/Chevy-Camaro-Zl1.jpg
// https://i.ibb.co/vDQM1kP/ferrari-488.jpg
// https://i.ibb.co/0MLTMGG/Lamborghini-Huraca-n-black.jpg
// https://i.ibb.co/SvGYN9v/Lexus-LFA.jpg
// https://i.ibb.co/djWdXsJ/Mercedes-VISION-AVTR.jpg
// https://i.ibb.co/N3TsGWP/Peugeot-Ongx.jpg
// https://i.ibb.co/56gzYYw/rolls-royce-ghost.jpg
// https://i.ibb.co/B3tD87F/Tesla-Roadster.jpg