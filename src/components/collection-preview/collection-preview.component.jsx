import React from 'react';
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './collection-preview.styles';

import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, routeName, items, history, match }) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {items.filter((item, index) => index < 4)
                    .map((item) => {
                        return <CollectionItem key={item.id} item={item} />
                    })}
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
}

export default withRouter(CollectionPreview);

//any annynoumus components like map function will be called everytime,when the 
//component re-render, it might cause performence problem