import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchLessionRequire } from './../../actions/index';
class ComForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      link: '',
      timevideo: '',
      deadline: '',
      date: [],
      delay: false
    };
  }
  //
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  //
  onHandleSubmit = (event) => {
    event.preventDefault();
    // Bi bat dong bo
    this.createDate(Number(this.state.deadline))
    //  this.props.postNewLession(this.state)
  }

  componentDidUpdate() {
    
    let delay = this.state.delay;
    if (delay) {
      this.props.postNewLession(this.state)
      this.setState({
      title: '',
      link: '',
      timevideo: '',
      deadline: '',
      date: [],
        delay: false
      })
    }
  }

  //create date
  createDate = (deadline) => {
    let date = [];
    let day = {
      a: [],
      b: ''
    };
    for (let i = 0; i <= deadline - 1; i++) {
      date.push(day)
    };
    this.setState({
      date: date,
      delay: true
    })
  }

  render() {
    
    return (

      <form onSubmit={this.onHandleSubmit}>
        <legend><b>Add New Game</b></legend>
        <div className="form-group">
          <label >Title</label>
          <input
            type="text"
            className="form-control"
            required placeholder="title..."
            name="title"
            value={this.state.title}
            onChange={this.onHandleChange}
          />
          <label >Link</label>
          <input
            type="text"
            className="form-control"
            required placeholder="link...."
            name="link"
            value={this.state.link}
            onChange={this.onHandleChange}
          />
          <label >Time Video</label>
          <input
            type="text"
            pattern="^(0|[1-9][0-9]*)$"
            title="number"
            className="form-control"
            required placeholder="Time video (minute)"
            name="timevideo"
            value={this.state.timevideo}
            onChange={this.onHandleChange}
          />
          <label >Deadline</label>
          <input
            type="text"
            pattern="^(0|[1-9][0-9]*)$"
            title="number"
            className="form-control"
            required placeholder="quantity date"
            name="deadline"
            value={this.state.deadline}
            onChange={this.onHandleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Ok</button>
      </form>

    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    postNewLession: (data) => {
      dispatch(actFetchLessionRequire(data));
    }
  }
}
export default connect(null, mapDispatchToProps)(ComForm);