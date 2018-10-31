import React, { Component } from 'react';
import ComSignIn from './../../components/SignIn/SignIn'
import { actGetAccountsRequire } from '../../actions';
import { connect } from 'react-redux';
import { findIndex } from 'lodash';
import { Redirect } from 'react-router-dom';
class ConSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            msg: false,
            direc: false
        };
    }
    render() {
        
        var { msg,direc } = this.state;
        if(direc) return <Redirect to="/" />
        return (
            <div className="row">
                <ComSignIn
                    HandleSubmit={this.onHandleSubmit}
                    msg={msg}
                    onClickCancel={this.onClickCancel}
                />
            </div>
        );
    }
    //
    onClickCancel=()=>{
        this.setState({
            direc:true
        })
    }
    //
    onHandleSubmit = (user) => {
        let { users } = this.state;
        this.checkUsers(users,user);
    }
    //
    checkUsers = (users, user) => {
        var index = findIndex(users, function (o) { return o.username === user.UserName; })
        if (index !== -1) {
            if ((users[index].password) === (user.PassWord)) {
                this.setState({
                    msg: false,
                    direc:true
                })
                localStorage.setItem('privateUser',JSON.stringify({
                    name:users[index].name,
                    userid:users[index].userid,
                    menu:[1]
                }))
                
            }else {
                this.setState({
                    msg: true
                })
            }
        } else {
            this.setState({
                msg: true
            })
        }
    }
    //
    componentWillMount() {
        this.props.getAccounts();
        
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.checkUser) {

            this.setState({
                users: nextProps.checkUser
            })
        }
    }
    //
}
//
const mapStateToProps = (state) => {
    return {
        checkUser: state.accounts
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAccounts: () => {
            dispatch(actGetAccountsRequire());
        }


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ConSignIn);
