import React, { Component } from 'react';
import './english4me.css'
import ConForm from "./container/ConForm";
import Lession from "./container/lession"
import { connect } from 'react-redux';
import { actGetEnglishRequire } from './../actions/index';
class English4me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      english: [],
      showform:false
    };
  }
  onShowForm=()=>{
    this.setState({
      showform:!this.state.showform
    })
  }
  render() {
    let { english,showform } = this.state;
    let onshowform=showform? <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form"><ConForm /></div>:'';
    return (

      <div >
        <table className="table-header">
          <thead>
            <tr className="show-test-border ">
              <th className="test-bg backgroud-never-give-up" colSpan={4}>
                <h1 className="text-center newstyle">
                  <a>&gt;&gt;&gt; NEVER GIVE UP !!! </a>
                </h1>
              </th>
            </tr>
          </thead>
          <tbody style={{ width: '100%' }}>
            <tr className="hero-image">
              <td className="show-test-border width-pic a1"><b className="hero-text"></b></td>
              <td className="show-test-border width-pic a2"><b className="hero-text"></b></td>
              <td className="show-test-border width-pic a3"><b className="hero-text"></b></td>
              <td className="show-test-border width-pic a4"><b className="hero-text"></b></td>
            </tr>
          </tbody> 
        </table>
        <div className="container">
          <h1 className="newstyle vtd pointer" onClick={this.onShowForm}>vothanhdanh</h1>
          <div className="row ">
            
             {onshowform}
            
          </div>
          {this.showListLession(english)}

          <div className="row footer">

            <h1 className="text-center newstyle"><a>Next ...</a></h1>
          </div>
        </div>
      </div>
    );
  }
  //
  showListLession = (english) => {
    var result = null;
    if (english.length > 0) {
      result = english.map((lession, index) => {
        return <Lession
          key={index}
          lession={lession}
        />;
      });
    }
    return result;
  }
  //
  componentWillMount() {
    this.props.getEnlish();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.englishData) {
       
      this.setState({
        english: nextProps.englishData
      })

    }

  }
}
const mapStateToProps = (state) => {
  return {
    englishData: state.english
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getEnlish: () => {
      dispatch(actGetEnglishRequire());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(English4me);