import { createSelector } from 'reselect';



const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);
export const selectShopIsFetching = createSelector([selectShop], shop => shop.isFetching);

export const selectShopCollectionsCollection = collectionIdParams =>
    createSelector([selectShopCollections], (collections) => collections ?
        collections[collectionIdParams] : null
    );

export const selectShopCollectionsForOverview = createSelector([selectShopCollections], collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : [])


export const selectIsCollectionsLoaded = createSelector([selectShop], shop => !!shop.collections);
//!!{} =true !!null=false !!0=false