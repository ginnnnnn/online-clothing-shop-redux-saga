import React from 'react';
import './collection-overview.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForOverview } from '../../redux/shop/shop.selectors';


import CollectionPreview from '../collection-preview/collection-preview.component';


const CollectionOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>
            {collections.map((collection) => {
                return <CollectionPreview key={collection.id} {...collection} />
            })}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForOverview
})

export default connect(mapStateToProps)(CollectionOverview);