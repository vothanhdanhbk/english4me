import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            select: 0,
            userid:'',
            name:'',
            v:null,
            id:null
        };
    }
    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })

    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        
        var {addCommentStatus}= this.props;
        if(addCommentStatus){
            this.props.content(this.state)
        }else{
            this.props.editComment(this.state)
        
        }

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.commentBack) {

            this.setState({
                name:nextProps.commentBack.name,
                comment: nextProps.commentBack.comment,
                select: nextProps.commentBack.select,
                userid:nextProps.commentBack.userid,
                v:nextProps.commentBack.v,
                id:nextProps.commentBack.id

            })

        }
        if (nextProps && nextProps.addCommentStatus) {
            this.setState({
                comment: "",
                select: 0,
            })
        }
    }
    componentDidMount() {
        if(!(this.props.addCommentStatus)){
        this.setState({
            name:this.props.commentBack.name,
            comment: this.props.commentBack.comment,
            select: this.props.commentBack.select,
            userid:this.props.commentBack.userid,
            v:this.props.commentBack.v,
            id:this.props.commentBack.id     

        })
    }
        
    }
    render() {
        var { addCommentStatus } = this.props;
        var showMessage = addCommentStatus ? 'Add new comment' : 'Edit comment'
        var { name } = this.props;

        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {name} : ({showMessage})
                            <button type="button" className="close" aria-label="Close" onClick={this.closeForm}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </h3>

                    </div>

                    <div className="panel-body">

                        <form onSubmit={this.onHandleSubmit}>
                            <div className="form-group">
                                <label>Comment :</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    required
                                    name="comment"
                                    value={this.state.comment}
                                    onChange={this.onHandleChange}
                                ></textarea>
                            </div>
                            <label>Status :</label>
                            <select
                                className="form-control"
                                required="required"
                                name="select"
                                value={this.state.select}
                                onChange={this.onHandleChange}
                            >
                                <option value="1">Public</option>
                                <option value="0">Private</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Ok</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.closeForm} >Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
    //
    closeForm = () => {
        this.props.closeForm();
    }


}

export default Form;
