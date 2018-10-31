import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import * as MSG from './../../constants/message'
class ComSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            PassWord: ''
        };
    }
    //////
    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })


    }
    ////// 
    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.HandleSubmit(this.state);
    }
    //////
    onClickCancel=()=>{
        this.props.onClickCancel();
    }

    render() {
        var check = (this.state.UserName !== "" || this.state.PassWord !== "") ? true : false;
        var {msg}=this.props;
        var Message = msg?MSG.ERROR_SIGN_IN:''
        return (

            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">

                <div className="panel panel-primary ml-350">

                    <div className="panel-heading">
                        <h3 className="panel-title">Sign In :</h3>
                    </div>
                    <form onSubmit={this.onHandleSubmit} >
                        <div className="panel-body">
                            <div className="form-group">
                                <label> Username :</label>
                                <input
                                    name="UserName"
                                    type="text"
                                    className="form-control"
                                    required
                                    pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                                    title="don't use special characters"
                                    value={this.state.UserName}
                                    onChange={this.onHandleChange}
                                />
                                <p className="colorRed">{Message}</p>
                            </div>

                            <div className="form-group">
                                <label>PassWord :</label>
                                <input
                                    name="PassWord"
                                    type="password"
                                    className="form-control"
                                    required
                                    pattern=".{6,}"
                                    title="Six or more characters"
                                    value={this.state.PassWord}
                                    onChange={this.onHandleChange}
                                />
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-warning mr-10">Submit</button>&nbsp;
                                <button type="button" className="btn btn-danger" onClick={this.onClickCancel}>Cancel</button>
                            </div>

                        </div>
                    </form>
                </div>
                <Prompt
                    when={check}
                    message={location => (`Are you sure you want to go there:  ${location.pathname}`)}
                />

            </div>

        );
    }
}

export default ComSignIn;
