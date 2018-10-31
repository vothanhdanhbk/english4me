import React, { Component } from 'react';
class Bref extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bref: '',
            brefShowServe: '',
            index1: null,
            id: null,
            brefInputStatus: false,
            addNewWord: ''
        };
    }

    componentWillMount() {
        let { bref, index1, id } = this.props;
        this.setState({

            index1: index1,
            id: id,
            addNewWordStatus: false,
            bref: bref

        })
    }

    //
    onAddNewWord = () => {
        this.setState({
            addNewWordStatus: true
        })
    }
    onBack = () => {
        this.setState({
            addNewWordStatus: false
        })
    }
    // add new word
    onHandleChange = (event) => {

        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = () => {
        this.setState({
            addNewWordStatus: false,
            addNewWord: ''
        })
        let { id, index1, addNewWord } = this.state;
        this.props.onAddNewWord(id, index1, addNewWord)

    }
// press Ok add new /edit bref
    onAddBref=()=>{
         let {bref,index1,id}=this.state;
         this.setState({
            brefInputStatus: false
        })
        this.props.onAddNewBref(bref,index1,id)
    }
    onDeleteBref=()=>{
        let {index1,id}=this.state;
        let bref='';
         this.setState({
            brefInputStatus: false,
            bref:''
        })
        this.props.onAddNewBref(bref,index1,id)
    }
    //    
    render() {
        let { bref, addNewWordStatus, brefInputStatus } = this.state;
        // set up string to show Words
        let arrayStringBref = bref.split("\n");
        
        let showBref = null;
        if (arrayStringBref.length > 0) {
            showBref = arrayStringBref.map((line, index) => {
                return <p key={index}>{line}</p>;
            });
        }
        //

        let codeInputAddNew = <input type="text" className="form-control" placeholder="New word" name="addNewWord" value={this.state.addNewWord} onChange={this.onHandleChange} />
        let codeButtonAddNew = <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pt-25"><a className="label label-warning " onClick={this.onSubmit}>Ok</a><a className="label label-primary ml-20" onClick={this.onBack}>back</a></div>
        let showInputAddNew = addNewWordStatus ? codeInputAddNew : '';
        let showButtonAddNew = addNewWordStatus ? codeButtonAddNew : '';
        //Bref
        let codeBref = <form>
            <div className="form-group">
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <textarea className="form-control" rows="8" required="required" name="bref" value={this.state.bref} onChange={this.onHandleChange} value={this.state.bref} />
                </div>
            </div>
            <br />
            <a className="label label-success" onClick={this.onAddBref}>Ok</a> &nbsp;
                      <a className="label label-primary" onClick={this.onBackNewBref}>back</a>
        </form>;
        let showInputBref = brefInputStatus ? codeBref : '';

        return (
            <React.Fragment>
                {/* Add New word */}
                <form>
                    <div className="row pt-20">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <a className="label label-success" onClick={this.onAddNewWord}>Add New </a>
                            {showInputAddNew}
                        </div>
                        {showButtonAddNew}

                    </div>
                </form>
                {/* End add new word */}
                <h5 className="bl">Your feeling :</h5>
                <div className="row pl-40">

                    <div className="size-word">{showBref} </div>
                    <a className="ml-20" onClick={this.onAddNewBref}>edit</a>
                    <a className="ml-20" onClick={this.onDeleteBref}>Clear </a>


                </div>
                <a className="label label-success" onClick={this.onAddNewBref}>Add New </a>
                {showInputBref}
            </React.Fragment>
        );
    }
    onAddNewBref = () => {
        this.setState({
            brefInputStatus: true
        })
    }
    //
    onBackNewBref = () => {
        this.setState({
            brefInputStatus: false
        })
    }
    //
}

export default Bref;