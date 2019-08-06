import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from './collection-overview.component';
import { selectShopIsFetching } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: selectShopIsFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);
//  connect(mapStateToProps)(WithSpinner(CollectionOverview))


export default CollectionOverviewContainer;