import React, { Component } from 'react'
import FriendItem from './FriendItem'
import  {connect} from 'react-redux';

class Gente extends Component {
    render() {
        return (
            <div>
                <h1>Toda lagente </h1>
                <ul>
                    {this.props.amigos.map((name, index) => {
                        return (
                            <FriendItem key={index}
                                name={name}
                                apellido={''}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        amigos: store.amigos
    }
}

export default connect(mapStateToProps)(Gente);