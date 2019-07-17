import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollentionsAsync } from '../../redux/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';



class ShopPage extends React.Component {


    componentDidMount() {
        this.props.fetchCollentionsAsync()
        // const collectionRef = firestore.collection('itemCollections')
        // this.unsubscribeFromShop = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
        //     this.props.updateShopCollections(collectionsMap);
        //     this.setState({ loading: false })
        // })
    }

    // componentWillUnmount() {
    //     this.unsubscribeFromShop()
    // }
    render() {

        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollentionsAsync: () => dispatch(fetchCollentionsAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);

//render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
//props in route is for passing route props like history ,match  and location