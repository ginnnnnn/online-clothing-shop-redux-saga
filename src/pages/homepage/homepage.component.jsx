import React from 'react';
import { HomePageConatiner } from './homepage.styles';

import Directory from '../../components/directory/directory.component';


const HomePage = () => {
    return (
        <HomePageConatiner>
            <Directory />
        </HomePageConatiner>
    );
}

export default HomePage;