import ShopActionTypes from './shop.types';

export const updateShopCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_SHOP_COLLECTIONS,
    payload: collectionsMap
})