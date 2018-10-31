import React, { Component } from 'react';
import DateTime from "../components/dateTime";
import { connect } from 'react-redux';
import { actDeleteLessionRequest } from './../../actions/index';
class Lession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDate: false
    };
  }
  onShowDate = () => {
    this.setState({
      showDate: !this.state.showDate
    })
  }
  // on delete
  onDelete = (id) => {
    this.props.deleteLession(id)
  }
  render() {

    let { lession } = this.props;
    let { date, deadline, timevideo, id } = lession;
    let result = null, showdeadline = null;
    let averatime = Math.floor(Number(timevideo) / Number(deadline));

    if (date.length > 0) {
      date.map((day, index) => {
        if (day.b != "" && day.b != null && day.b != undefined) result = index;
      });
    }
    if (result == null) {
      showdeadline = <div className="notperfect">0/{deadline}</div>
    } else if ((result + 1) == deadline) {
      showdeadline = <div className="perfect">Perfect</div>
    } else {
      showdeadline = <div className="notperfect">{result + 1}/{deadline}</div>
    }
    // show date
    let { showDate } = this.state;
    return (

      <table className="mt-20 whilecc vtd3">

        <tbody>

          <tr className="table-color pointer" onClick={this.onShowDate}>
            <td className="w1 size1 ">{lession.id}</td>
            <td className="w2"><a target="_blank" href={lession.link}>{lession.title}</a></td>
            <td className="w1 size1 ">{showdeadline} </td>
            
          </tr>
          <tr>
            <td colSpan="2"  className="t-r"></td>
            <td >
                <a onClick={() => this.onDelete(id)}>Delete</a>
            </td>
          </tr>

          {showDate ? this.showListDate(date, averatime, id,lession) : <tr><td></td></tr>}
        </tbody>
      </table>
    );
  }
  //

  //
  showListDate = (date, averatime, id,lession) => {
    let result = null;
    if (date.length > 0) {
      result = date.map((day, index) => {
        let time = (index + 1) * averatime
        return <DateTime
          key={index}
          stt={index}
          index1={index}
          day={day}
          date={date}
          time={time}
          id={id}
          lession={lession}
        />;
      });
    }
    return result;
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteLession: (id) => {
      dispatch(actDeleteLessionRequest(id));
    }
  }
}
export default connect(null, mapDispatchToProps)(Lession);