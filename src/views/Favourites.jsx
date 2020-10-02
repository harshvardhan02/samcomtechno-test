import React, { Component } from 'react'
import { connect } from 'react-redux';

class Favourites extends Component {
    render() {
        return (
            <div className='container'>
                <ul>
                    {this.props.favourite.map(fav => (
                        <li key={fav.id}>{fav.email}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        favourite: state.fav.fav
    }
}

export default connect(mapStateToProps)(Favourites)
