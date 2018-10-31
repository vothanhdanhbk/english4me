import React, { Component } from 'react';

class CommentControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1, //-1 all ; 1 active ; 0 deactive

        }
    }
    //
    onChange=(event)=>{
        var target=event.target;
        var name=target.name;
        var value=target.value;
        this.props.onFilter(
            name==='filterName'?value:this.state.filterName,
            name==='filterStatus'?value:this.state.filterStatus,
        )
        this.setState({
            [name]:value
        });
    }
    render() {
        var {filterName,filterStatus}=this.state;
        
        return (

                

            <tr>
                <td></td>
                <td>
                    <input
                        type="text"
                        className="form-control "
                        placeholder="Enter keywords..."
                        name="filterName"
                        value={filterName}
                        onChange={this.onChange}
                    ></input>
                </td>
                <td>
                    <select
                        className="form-control"
                        name="filterStatus"
                        value={filterStatus}
                        onChange={this.onChange}
                    >
                        <option value="-1">All</option>
                        <option value="0">Private</option>
                        <option value="1">Public</option>
                        <option value="2">Your Comment</option>
                    </select>
                </td>
                <td>
                   
                </td>
                <td></td>
            </tr>


        );
    }

}

export default CommentControl;
