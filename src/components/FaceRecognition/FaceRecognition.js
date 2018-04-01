import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({box, imgUrl}) => {
    return (
        <div className='center ma'>
           <div className='absolute mt2'>
               <img id='inputImage' alt='' src={imgUrl} width='500px' height='auto' />
               <div className='bounding-box' style={{left: box.leftCol, top: box.topRow, bottom: box.bottomRow, right: box.rightCol}}></div>
           </div>
        </div>
    );
}

export default FaceRecognition;
