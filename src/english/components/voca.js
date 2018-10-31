import React, { Component } from 'react';
class Voca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: null,
      index1: null,
      index2: null,
      id: null,
      wordedit:''
    };
  }

  componentWillMount() {
    let { word, index1, index2, id } = this.props;
    this.setState({
      word: word,
      index1: index1,
      index2: index2,
      id: id,
      edit: false,
      statusefect:false
    })
  }
  //
  onEdit = () => {
    this.setState({
      edit: true
    })
  }
  onBack = () => {
    this.setState({
      edit: false,
      statusefect: false
    })
  }
onEffect=()=>{
  this.setState({
    statusefect: !this.state.statusefect
  })
}
// delete word
onDeleteWord=(id,index1,index2)=>{
  this.props.onDeleteWord(id,index1,index2)
  this.setState({
    edit: false,
    statusefect: false,
    word:''
  })
}
//edit word
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  
  onSubmit=()=>{
    let {id,index1,index2,wordedit} =this.state;
    this.setState({
      edit: false,
      statusefect: false,
      word:wordedit
    })
    
    this.props.onWordEdit(id,index1,index2,wordedit)
  }

  render() {
    let { word, edit,statusefect,id,index1,index2 } = this.state;
    let codeEdit = <React.Fragment><input type="input" className="ml-20" name="wordedit" value={this.state.wordedit} onChange={this.onHandleChange}/><a className="label label-warning ml-20 pointer"  onClick={this.onSubmit}>Ok-Edit</a><a className="label label-primary ml-20 pointer" onClick={this.onBack}>back</a></React.Fragment>
    let codeDelete = <a className="ml-20 pointer" onClick={()=>this.onDeleteWord(id,index1,index2)}>delete</a>
    let showEdit = edit ? codeEdit : '';
    let showDelete = edit ? '' : codeDelete;
    // effect
    let showeffect=statusefect?<div><a className="ml-20 pointer" onClick={this.onEdit}>edit</a>{showDelete}</div>:''
    return (

      <React.Fragment>


        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <a className="size-word pointer" onClick={this.onEffect}>{word} </a>
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
            {showeffect}
          </div>

        </div>



        {showEdit}
        <br />

      </React.Fragment>



    );
  }
}

export default Voca;