import React, { Component } from 'react';
import './CommentManager.css';
import ConManager from './../../Container/ConManager/ConManager'
class CommentManager extends Component {

    render() {

        return (
            <div className="container color-container row-while">
                <div className="text-center">
                    <h1>Comment manager</h1>
                    <hr />
                </div>
                <ConManager/>
            </div>

        );
    }

}

export default CommentManager;
