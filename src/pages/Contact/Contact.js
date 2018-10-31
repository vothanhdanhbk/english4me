import React, { Component } from 'react';
import './contact.css';
import { actFetchMessageRequire } from '../../actions/index';
import { connect } from 'react-redux';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: '',
      txtEmail: '',
      txtPhone: '',
      txtMsg: '',
      messageThank:false
    };
  }
      onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
          [name]: value
        })
      };
      onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchMessage(this.state)
        this.setState({
            txtName: '',
            txtEmail: '',
            txtPhone: '',
            txtMsg: '',
            messageThank:true
        })
    }
  render() {
        var {messageThank}=this.state;
        var message=messageThank?(<h5 className="txtcolor">Thank you for your message !!!</h5>):''
    return (
      <div className="container contact-form">
        <div className="contact-image">
          <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
        </div>
        <form onSubmit={this.onHandleSubmit} >
          <h3>Drop me a Message</h3>
            {message}

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  required
                  placeholder="Your Name *"
                  value={this.state.txtName}
                  onChange={this.onHandleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  placeholder="Your Email *"
                  value={this.state.txtEmail}
                  onChange={this.onHandleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  value={this.state.txtPhone}
                  onChange={this.onHandleChange}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                >Send</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: '100%', height: 150 }}
                  value={this.state.txtMsg}
                  onChange={this.onHandleChange}
                />
              </div>
            </div>
          </div>
        </form>
        <h5>Contact me :</h5>
        <h6>+Name:<b>Võ Thành Danh</b></h6>
        <h6> + Email address : vothanhdanh.bk@gmail.com</h6>
        <h6> + Phone number : 0963226771</h6>
      </div>


    );
  }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchMessage: (infor) => {
            dispatch(actFetchMessageRequire(infor));
        }


    }
}
export default connect(null, mapDispatchToProps)(Contact);
