import React from 'react';
import { CollectionPageContainer, TitleContainer, ItemsContainer } from './collection.styles';

import { connect } from 'react-redux';
import { selectShopCollectionsCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {

    const { items, title } = collection
    return (
        <CollectionPageContainer>
            <TitleContainer>{title}</TitleContainer>
            <ItemsContainer>
                {items.map(item => <CollectionItem className="collection-item" key={item.id} item={item} />)}
            </ItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollectionsCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage);