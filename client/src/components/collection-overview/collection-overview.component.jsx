import React from 'react';
import { CollectionOverviewContainer } from './collection-overview.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForOverview } from '../../redux/shop/shop.selectors';


import CollectionPreview from '../collection-preview/collection-preview.component';


const CollectionOverview = ({ collections }) => {
    return (
        <CollectionOverviewContainer>
            {collections ? collections.map((collection) => {
                return <CollectionPreview key={collection.id} {...collection} />
            }) : []}
        </CollectionOverviewContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForOverview
})

export default connect(mapStateToProps)(CollectionOverview);