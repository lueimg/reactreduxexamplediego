import React, { Component } from 'react'
import {connect} from 'react-redux';


class Favoritos extends Component {
    render() {
        return (
            <div>
                <h3>Mis amigos favoritos</h3>
                <ul>
                    {this.props.favoritos.map((amigo, index) => <li key={index} >{amigo}</li>)}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        favoritos: state.favoritos
    }
}


export default connect(mapStateToProps)(Favoritos)
