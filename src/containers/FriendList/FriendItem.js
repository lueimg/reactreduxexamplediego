import React from 'react';
import { connect } from 'react-redux';
import { addFavorito } from '../actions'

class FriendItem extends React.Component {

    constructor(props) {
        super(props);
    }

    addAmigo = () => {
        this.props.add(this.props.name);
    }

    render() {
        return (
            <li>
                <span>
                    {this.props.name}  - {this.props.apellido}
                </span>
                <button onClick={this.addAmigo}>Mi amigo </button>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {
        add: (amigo) => {
            dispatch(addFavorito(amigo))
        },
        remove: () => { }
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendItem);
