import React from 'react';
import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    return (
        <div className={`menu-item ${size}`}>
            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="background-image" />
            <div className="content">
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}

export default MenuItem;

//set a self close div with className background-image instead 
//of wrapping other elements can do a scale effect just with the background
//but not the others elements