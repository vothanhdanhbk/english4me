import React, { Component } from 'react';
import Form from './../../components/CommentManager/Form'
import ConShowComment from './ConShowComment'
import { actFetchCommentRequire, actGetCommentsRequire, actUpdateStatusRequest,actUpdateEditCommentRequest,actDeleteCommentRequest } from '../../actions';
import { connect } from 'react-redux';
import { findIndex } from 'lodash';
class ConManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closeForm: true,
            addCommentStatus: false,
            users: {},
            userStatus: false,
            comments: [],
            commentBack: {},
           
        };
    }
    //Show localStorage
    componentWillMount() {
        this.props.getComment();
        if (localStorage) {
            if (localStorage.getItem('privateUser')) {
                var user = JSON.parse(localStorage.getItem('privateUser'));
                var menu = user.menu[0];
                if (menu === 1) {
                    this.setState({
                        users: user,
                        userStatus: true
                    })
                } else {
                    this.setState({
                        userStatus: false
                    })
                }
            } else {
                this.setState({
                    userStatus: false
                })
            }
        };
    }
    //
    // detail=(comment)=>{
    //     console.log(comment)
    // }

    render() {
    
        ////
        var { closeForm, userStatus, comments, commentBack, addCommentStatus } = this.state;
        var name = this.state.users.name;
        var form = <Form
            closeForm={this.closeForm}
            name={name}
            content={this.content}
            commentBack={commentBack}
            addCommentStatus={addCommentStatus}
            editComment={this.editComment}
        />;
        var comment = <ConShowComment
            comments={comments}
            callBackComment={this.callBackComment}
            closeForm={closeForm}
            // detail={this.detail}
        />;
        var formshow = closeForm ? "" : form;
        ////
        var addComment = (<button type="button" className="btn btn-primary" onClick={this.addCommentStatus}>
            <span className="fa fa-plus mr-5"></span>Add Comment
                        </button>)
        var showAddcomment = addCommentStatus ? '' : addComment
        if (!userStatus) {
            var show = (
                <div className="alert alert-warning">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>You must Sign In your account !!!</strong> If you don't have an account,you can register , Or sign in with  ... <br /> username: admin123 <br /> password : admin123456
                </div>)
        } else {
            var show = (
                <div className="row">

                    {formshow}
                    <div className={closeForm ? "col-xs-12 col-sm-12 col-md-12 col-lg-12 " : "col-xs-8 col-sm-8 col-md-8 col-lg-8 "}>
                        {showAddcomment}
                        {comment}
                    </div>
                </div >)
        }
        //END  open + close form && check login


        return (
            <React.Fragment>
                {show}
            </React.Fragment>

        );
    }
    //
    callBackComment = (comment, v) => {
        comment.v = v;
        if (v == 2) {
            // edit
            this.setState({
                closeForm: false,
            })
        } else {
            this.editComment(comment);
        }
        this.setState({
            commentBack: comment,
            addCommentStatus: false
        })

    }
    //
    addCommentStatus = () => {
        this.setState({
            closeForm: false,
            addCommentStatus: true

        })
    }
    //
    closeForm = () => {
        this.setState({
            closeForm: !this.state.closeForm,
            addCommentStatus: false
        })
    }
    //
    content = (data) => {
        data.name = this.state.users.name;
        data.userid = this.state.users.userid;
        this.props.fletchComment(data);
        // this.props.addCommentToStore(data);
        this.setState({
            closeForm: !this.state.closeForm,
            addCommentStatus: false,
        })
        
    }
    //
    editComment = (comment) => {

        //
        if ((comment.v) == 1) {
            // edit status
            var select = comment.select == 1 ? 0 : 1
            this.props.updateStatus(comment, select)
            // set up show status
            var { comments } = this.state;
            var index = findIndex(comments, function (o) { return o.id === comment.id; })
            comments[index].select = select;
            this.setState({
                comments: comments
                
            })

        } else if ((comment.v) == 2) {
            this.props.updateEditComment(comment)
            // edit
            var { comments } = this.state;
            var index = findIndex(comments, function (o) { return o.id === comment.id; })
            comments[index] = comment;
            this.setState({
                comments: comments,
                closeForm:true
            })
        } else {
            this.props.DeleteComment(comment)
            // delelte
            var { comments } = this.state;
            var index = findIndex(comments, function (o) { return o.id === comment.id; })
            comments.splice(index,1);
            this.setState({
                comments: comments
            })
        }

    }
    //
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.resultComments) {

            this.setState({
                comments: nextProps.resultComments
            })
        }
    }


}
const mapStateToProps = (state) => {
    return {
        resultComments: state.comments
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        fletchComment: (data) => {
            dispatch(actFetchCommentRequire(data));
        },
        getComment: () => {
            dispatch(actGetCommentsRequire());
        },
        // addCommentToStore: (data) => {
        //     dispatch(actAddCommentStore(data));
        // },
        updateStatus: (comment, select) => {
            dispatch(actUpdateStatusRequest(comment, select));
        },
        updateEditComment: (comment) => {
            dispatch(actUpdateEditCommentRequest(comment));
        },
        DeleteComment: (comment) => {
            dispatch(actDeleteCommentRequest(comment));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ConManager);
