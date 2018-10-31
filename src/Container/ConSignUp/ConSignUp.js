import React, { Component } from 'react';
import ComSignUp from './../../components/SignUp/ComSignUp'
import { actGetAccountsRequire, actCreateAccountRequire } from '../../actions';
import { connect } from 'react-redux';
import { findIndex } from 'lodash';
import * as Msg from './../../constants/message';
import { Redirect } from 'react-router-dom';
class ConSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            msg: false,
            direc: false,
            loading: false,
            redireCancel:false
        };
    }

    render() {
        var { msg, direc,loading ,redireCancel} = this.state;
        var Message = msg === true ? Msg.SMG_FAIL_CREATE : '';
        if(loading) return <Redirect to="/sign-in" />
        if(redireCancel) return <Redirect to="/" />
        if (direc === true) {

                setTimeout(() => {
                    this.setState({
                        loading: true
                    });
                }, 3000)
 

        }

        return (
            <div className="row">
                <ComSignUp
                    HandleSubmit={this.onHandleSubmit}
                    Message={Message}
                    direc={direc}
                    onClickCancel={this.onClickCancel}
                />
            </div>
        );
    }
    //
    onClickCancel=()=>{
        this.setState({
            redireCancel:true
        })
    }
    //
    checkUsers = (users, user) => {
        var index = findIndex(users, function (o) { return o.username === user.UserName; })
        if (index === -1) {
            this.setState({
                msg: false
            })
            user.userid = this.generateID();
            this.props.createAccount(user);
            this.setState({
                direc: true
            })

        } else {
            this.setState({
                msg: true
            })
        }
    }
    ////
    onHandleSubmit = (user) => {
        let { users } = this.state;
        this.checkUsers(users, user);
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


    ////
    // create id random
    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID = () => {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4();
    }
}
////////////////

const mapStateToProps = (state) => {
    return {
        checkUser: state.accounts
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAccounts: () => {
            dispatch(actGetAccountsRequire());
        },
        createAccount: (user) => {
            dispatch(actCreateAccountRequire(user));
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConSignUp);
