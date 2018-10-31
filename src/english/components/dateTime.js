import React, { Component } from 'react';
import Voca from "./voca";
import Bref from "./bref";
import { connect } from 'react-redux';
import { actNewData } from './../../actions/index';
class DateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: null,
            date: null,
            id: null,
            index1: null,
            detailStatus:false,
            lession:null
        };
    }

    componentWillMount() {
        let { id, date, day, index1,lession } = this.props;
        this.setState({
            day: day,
            date: date,
            id: id,
            index1: index1,
            lession:lession
        })
    }
// show detail
    showDetail=()=>{
        this.setState({
            detailStatus:!this.state.detailStatus
        })
    }
    //
    render() {
      

        let stt = (this.props.stt + 1)
        let { day, index1, id ,detailStatus,lession} = this.state;
        let dayword = day.a;
        let daybref = day.b;
        //show detail
        let showdetail=detailStatus?'':'showdetail';
        // test
        
        return (

            <tr>
                <td colSpan={4}>
                    <br />
                    <div className="row pl-40">

                        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                            <p className="r vtd1" onClick={this.showDetail}>
                                <a> Date :</a><b className="vtd1">{stt}</b>-----><a> Complete time  :</a><b className="vtd1">{this.props.time}</b><a>minute</a>
                            </p>
                        </div>

                    </div>
                   
                    <div className={`row pl-40 ${showdetail}`} >
                        <h5 className="bl">Vocabulary :</h5>
                        <div className="row pl-40">

                            {this.showVoca(dayword, index1, id)}



                        </div>

                        <Bref 
                            bref={daybref}
                            index1={index1}
                            id={id}
                            onAddNewWord={this.onAddNewWord}
                            onAddNewBref={this.onAddNewBref}
                        />
                       
                    </div>


                </td>
            </tr>
        );
    }
    showVoca = (day, index1, id) => {
        let result = null;
        if (day.length > 0) {
            result = day.map((word, index) => {
               if(word != "") return <Voca
                    key={index}
                    word={word}
                    index2={index}
                    index1={index1}
                    id={id}
                    onDeleteWord={this.onDeleteWord}
                    onWordEdit={this.onWordEdit}
                />;
               
            });
        }
        return result;
    }

    // on add new bref
    onAddNewBref=(bref,index1,id)=>{
        let {day,date,lession}=this.state;
        day.b=bref;
        //date was be deleted element
        date[index1]=day;
        //change lession
        lession.date=date
        // addd id ; and PUT date to sever ok.
        this.setUpNewData(lession,id)
        
    }
    //on delete word
    onDeleteWord=(id,index1,index2)=>{
        let {day,date,lession}=this.state;
        
        day.a[index2]="";
        this.setState({
            dayword:day.a
        })
        //date was be deleted element
        date[index1]=day;
        //change lession
        lession.date=date
        // addd id ; and PUT date to sever ok.
        this.setUpNewData(lession,id)     
        

    }
    //on word edit
    onWordEdit=(id,index1,index2,wordedit)=>{
        let {day,date,lession}=this.state;
        day.a[index2]=wordedit;
         //date was be deleted element
         date[index1]=day;
         //change lession
        lession.date=date
         // addd id ; and PUT date to sever ok.
         this.setUpNewData(lession,id)
    }
    // on add new word
    onAddNewWord=(id, index1,addNewWord)=>{
        let {day,date,lession}=this.state;
        day.a.push(addNewWord)
        this.setState({
            dayword:day.a
        })
         //date was be deleted element
         date[index1]=day;
         //change lession
        lession.date=date
         // addd id ; and PUT date to sever ok.
         this.setUpNewData(lession,id)
    }

    setUpNewData=(lession,id)=>{
         this.props.newDateReducer(lession,id);

    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
      newDateReducer: (data,id) => {
        dispatch(actNewData(data,id));
      }
    }
  }
export default connect(null, mapDispatchToProps)(DateTime);
