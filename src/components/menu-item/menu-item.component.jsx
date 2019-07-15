import React from 'react';
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    TitleContainer,
    SubTitleContainer
} from './menu-item.styles'

import { withRouter } from 'react-router-dom';


const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <MenuItemContainer
            onClick={() => { history.push(`${match.url}${linkUrl}`) }}
            size={size}>
            <BackgroundImageContainer
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="background-image" />
            <ContentContainer className="content">
                <TitleContainer >{title.toUpperCase()}</TitleContainer>
                <SubTitleContainer >SHOP NOW</SubTitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    );
}

export default withRouter(MenuItem);

//background-image ,set a self close div with className background-image instead 
//of wrapping other elements can do a scale effect just with the background
//but not the others elements

//withRouter is hoc takes a component as an argument and returen a powered component
//more props injected