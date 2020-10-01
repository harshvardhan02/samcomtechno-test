import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import Pagination from './Pagination';

class UserList extends Component {
    constructor() {
        super();

        this.state = {
            usersList: [],
            pageSize: 2,
            currentPage: 1
        }
    }

    componentDidMount() {
        this.props.getUserList()
        console.log(this.props.userList, 'usersss')
    }

    nextPage = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    }

    prevPage = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        })
    }

    handlePageChange = page => {
        console.log(page)
        this.setState({ currentPage: page });
    }

    render() {
        const { currentPage, pageSize } = this.state;
        const indexOfLastPost = currentPage * pageSize;
        const indexOfFirstPost = indexOfLastPost - pageSize;
        const currentPosts = this.props.userList.slice(indexOfFirstPost, indexOfLastPost)
        return (
            <div className='container'>
                <h4 className="my-3">Contact List</h4>
                {currentPosts.map(user => (
                    <div key={user.id} className="alert alert-primary" role="alert">
                        <img style={{ width: '40px', height: '40px' }} className='img-fluid rounded-circle' src={user.avatar} alt={user.first_name} />
                        <Link to={`/userdetails/${user.id}`} className='ml-3'>{user.first_name} {user.last_name}</Link>
                    </div>
                ))}

                <Pagination
                    itemsCount={this.props.userList.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserList: () => { dispatch(getUsers()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
