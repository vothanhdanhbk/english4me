import React, { Component } from 'react';
import CommentControl from './../../components/CommentManager/CommentControl';
import ComListComment from './../../components/CommentManager/ComListComment';
class ConShowComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:[],
            userid:'',
            filter:{
                name:'',
                status:-1
            }
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.comments) {

            if (localStorage.getItem('privateUser')) {
                var user = JSON.parse(localStorage.getItem('privateUser'));
                var userid = user.userid;
            }
            this.setState({
                comments: nextProps.comments,
                userid:userid
            })
            
        }
    }

    render() {
        var {comments,userid,filter}=this.state;
        
        
        if(filter){
            if(filter.name){
                comments=comments.filter((comment)=>{
                    return comment.comment.toLowerCase().indexOf(filter.name) !==-1;// filter name
                })
            }

            comments=comments.filter((comment)=>{
                if(filter.status==-1){
                    return comments;
                }else if(filter.status==2){
                    return comment.userid == userid;
                }else{
                    return comment.select == filter.status;
                }
            })
         }
        return (
            <React.Fragment>
                <div className="row mt-10">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">Id</th>
                                    <th className="text-center">Comment</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CommentControl 
                                    onFilter={this.onFilter}
                                />
                                {this.showListComment(comments,userid)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>

        );
    }
    //
    onFilter=(filterName,filterStatus)=>{
        this.setState({
            filter:{
                name:filterName.toLowerCase(),
                status:filterStatus
            }
        })
        

    }
    //
    showListComment = (comments,userid) => {
        var {closeForm}=this.props;
        var result = null;
        if (comments.length > 0) {
            result = comments.map((comment, index) => {
                var add =[comment,userid]
                return <ComListComment
                    key={index}
                    comment={comment}
                    userid={userid}
                    add={add}
                    index={index+1}
                    editComment={this.editComment}
                    closeForm={closeForm}
                    // detail={this.detail}
                />;
            });
        }
        return result;
    }
    //
    editComment=(comment,v)=>{
        this.props.callBackComment(comment,v)
    }
    

}

export default ConShowComment;
