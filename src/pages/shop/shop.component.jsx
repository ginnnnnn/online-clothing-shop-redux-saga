import React from 'react';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { updateShopCollections } from '../../redux/shop/shop.actions';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromShop = null;

    componentDidMount() {
        const collectionRef = firestore.collection('itemCollections')
        this.unsubscribeFromShop = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
            this.props.updateShopCollections(collectionsMap);
            this.setState({ loading: false })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromShop()
    }
    render() {

        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${this.props.match.path}`}
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${this.props.match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    updateShopCollections: (collections) => dispatch(updateShopCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);

//render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
//props in route is for passing route props like history ,match  and location