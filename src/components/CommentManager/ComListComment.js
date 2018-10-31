import React, { Component } from 'react';
import './Com.css'
class ComListComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDetail: false
        };
    }
    setStatus = (v) => {
        var { comment, userid, closeForm } = this.props;
        if (((v == 1) && (closeForm == false))||((v == 3) && (closeForm == false))) {alert('You can not do it ! (please close form) ') } else {
            if (userid === (comment.userid)) {
                //status
                this.props.editComment(comment, v)
            } else {
                alert('You can not edit it ! (because you did not create it) ')
            }
        }
    }
    //detail
    detail = (x) => {

        this.setState({
            showDetail: x
        })
    }


    render() {
        var { showDetail } = this.state;
        var { comment, index, userid } = this.props;
        var status = comment.select == 1 ? (<a className="label label-success" onClick={() => this.setStatus(1)}>Public</a>) : (<a className="label label-default " onClick={() => this.setStatus(1)}>Private</a>)
        var userEdit = (<td className="text-center">
            <a className="label label-primary" onClick={() => this.setStatus(2)} >Edit</a> &nbsp;
                            <a className="label label-danger" onClick={() => this.setStatus(3)}>Delete</a>
        </td>);
        var detailPublic = <td className="text-center"><a className="label label-warning" onClick={() => this.detail(true)}>Show Detail</a></td>;
        var showResultDetail = <tr><td colSpan="4">
            <p><b>Name :</b><b className="color-blue"> {comment.name}</b></p>
            <p><b>Id create:</b> {comment.userid}</p>
            <p><b>Comment :</b> {comment.comment}</p>
            <p><b>Status :</b> Public</p>
            <p><b>Comment :</b> {comment.id}</p>
            <br /><a className="label label-success text-center" onClick={() => this.detail(false)}><u> {`<<`} Hidden</u></a>
        </td></tr>;

        var userNone = <td className="text-center"></td>
        // show text detail/edit/delete
        if (userid === (comment.userid)) {
            //edit/delete
            var action = userEdit;
        } else if (comment.select == 1) {
            // detail 
            var action = detailPublic;
        } else {
            var action = userNone;
        }
        // show if detail do not be click
        var showtable = <tr>
            <td>{index}</td>
            <td>{comment.comment} </td>
            <td className="text-center">
                {status}
            </td>
            {action}

        </tr>
        //sheck show
        var result = showDetail ? showResultDetail : showtable
        return (

            <React.Fragment>
                {result}
            </React.Fragment>

        );
    }

}

export default ComListComment;
