import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserDetails } from '../redux/actions/users';
import { addToFav } from '../redux/actions/users';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


class UserDetails extends Component {
    constructor() {
        super();

        this.state = {
            id: '',
            isFav: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id, 'idddddddddddddddddddd');
        console.log(this.props.userDetail.id, 'userdeital dddddddddddddddd')
        this.props.userDetails(id)
        console.log(id, '-------------------asdfjsdfkajkfjalllllllllll')
    }

    onMakeFav = () => {
        const id = this.props.match.params.id
        this.props.addToFav(id)
        this.setState({
            isFav: true
        })
    }

    render() {
        const id = this.props.match.params.id;
        return (
            <div className='container'>
                <h4 className="my-3 text-center">Contact Details</h4>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <Card>
                            <CardHeader
                                avatar={
                                    <Avatar src={this.props.userDetail.avatar}>
                                        R
                                    </Avatar>
                                }
                                title={this.props.userDetail.first_name}
                                subheader={this.props.userDetail.last_name}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Email:  {this.props.userDetail.email}
                                    <p>{this.props.userDetail.id}</p>
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton onClick={this.onMakeFav} aria-label="add to favorites">
                                    {id === this.props.userDetail.id ? <FavoriteIcon /> : <FavoriteBorderIcon/> }
                                </IconButton>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userDetail: state.users.getUsersById,
        fav: state.fav.fav
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userDetails: (id) => { dispatch(getUserDetails(id)) },
        addToFav: (item) => { dispatch(addToFav(item)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)
