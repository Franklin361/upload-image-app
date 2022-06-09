import React from 'react';

export const Title = () => {
    return (
        <>
        <div className='container_blob'>
            <SVG/>
        </div>
        <h1 className="title">
            
            <span>Upload image</span><br />
            <span> with</span> <br />
            <span>React & Cloudinary</span>
        </h1>
        </>
    )
}

export const SVG = () => {
    return (
        <svg className='svg_blob' viewBox="50 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.9,-47.6C39.2,-34.4,47.5,-26.3,49.9,-16.8C52.2,-7.2,48.5,3.7,44.7,14.3C40.9,24.9,37,35.2,29.5,44.4C22,53.6,11,61.8,-1.3,63.5C-13.6,65.3,-27.1,60.6,-39.3,52.9C-51.5,45.2,-62.2,34.5,-66.6,21.5C-71,8.5,-69,-6.6,-62.9,-18.9C-56.8,-31.1,-46.5,-40.5,-35.3,-53C-24.1,-65.6,-12.1,-81.3,-0.9,-80C10.3,-78.8,20.6,-60.7,29.9,-47.6Z" transform="translate(100 100)" />
        </svg>
    )
}