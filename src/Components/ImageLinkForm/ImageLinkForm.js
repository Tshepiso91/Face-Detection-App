import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () =>{
    return(
        <div>
            <p className="f3">
                {"Super Awesome Face Detection App, Git it a try"}
            </p>
            <div className='center'>
            <div className='form pa4 br3 shadow center'>
            <input className='f4 pa2 w-70 center' type='tex'/>
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer'>Detect</button>
            </div>
        </div>
        </div>     
    );
        
}

export default ImageLinkForm;