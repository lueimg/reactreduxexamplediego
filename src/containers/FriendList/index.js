import React from 'react';
import FriendItem from './FriendItem.js'
import Gente from './Gente.js'
import Favoritos from '../Favoritos';

import {connect} from 'react-redux';


class FriendList extends React.Component {
   
    render() {
        return (
            <div>
                <Gente />
                <Favoritos />
            </div>
        )
    }
}


export default FriendList;