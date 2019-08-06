import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

const WithSpinner = (WrapperedComponent) => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : <WrapperedComponent {...otherProps} />

}

export default WithSpinner;