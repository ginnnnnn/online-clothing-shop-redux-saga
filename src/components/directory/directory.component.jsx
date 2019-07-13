import React from 'react';
import './directory.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors';


import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionPorps }) => {
                return <MenuItem
                    key={id}
                    {...otherSectionPorps} />
            })}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
//ES6 allow us to pass props like {id,...otherSectionProps} ,when we pass the props
// it's name=name .like title=title,imageUrl=imageUrl ... ={...otherSectionPorps}