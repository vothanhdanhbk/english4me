import React, { Component } from 'react';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating:0,
            onClickRating:false,
            users: {},
            userStatus: false,
        };
    }
    //
    componentWillMount() {
        
        if (localStorage) {
            if (localStorage.getItem('privateUser')) {
                var user = JSON.parse(localStorage.getItem('privateUser'));
                var menu = user.menu[0];
                if (menu === 1) {
                    this.setState({
                        users: user,
                        userStatus: true
                    })
                } else {
                    this.setState({
                        userStatus: false
                    })
                }
            } else {
                this.setState({
                    userStatus: false
                })
            }
        };
    }
    render() {
        var {rating,onClickRating,userStatus}=this.state;
        var showStar=onClickRating?(this.showRating(rating)):'';
        //check login
        if(!userStatus) showStar=<div className="alert alert-warning">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <strong>You must Sign In your account !!!</strong> If you don't have an account,you can register , Or sign in with  ... <br /> username: admin123 <br /> password : admin123456
                                </div> 
            
        return (      
            <React.Fragment>    
            <p><a className="label label-success" onClick={this.onClickRating}>Raitng >>> : </a></p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{showStar}
            </React.Fragment>  

        );
    };
    //
    onClickRating=()=>{
        this.setState({
            onClickRating:!this.state.onClickRating
        })
    }
    //
    rating=(rating)=>{
        if (localStorage) {
            if (localStorage.getItem('privateUser')) {
                var user = JSON.parse(localStorage.getItem('privateUser'));
                var menu = user.menu[0];
                if (menu === 1) {
                    this.setState({
                        users: user,
                        userStatus: true
                    });
                    this.props.rating(user,rating)

                } else {
                    this.setState({
                        userStatus: false
                    })
                }
            } else {
                this.setState({
                    userStatus: false
                })
            }
        };
        
    }
    // show rating effect
    showRating=(rating)=>{
       return <p> <a>
             <i onMouseEnter={()=>this.setShowRating(1)} onClick={()=>this.rating(1)}>{(1<=rating)?(<span  className="fa fa-star" ></span>):(<span  className="fa fa-star-o" ></span>)}</i>
             <i onMouseEnter={()=>this.setShowRating(2)} onClick={()=>this.rating(2)}>{(2<=rating)?(<span  className="fa fa-star" ></span>):(<span  className="fa fa-star-o" ></span>)}</i>
             <i onMouseEnter={()=>this.setShowRating(3)} onClick={()=>this.rating(3)}>{(3<=rating)?(<span  className="fa fa-star" ></span>):(<span  className="fa fa-star-o" ></span>)}</i>
             <i onMouseEnter={()=>this.setShowRating(4)} onClick={()=>this.rating(4)}>{(4<=rating)?(<span  className="fa fa-star" ></span>):(<span  className="fa fa-star-o" ></span>)}</i>
             <i onMouseEnter={()=>this.setShowRating(5)} onClick={()=>this.rating(5)}>{(5<=rating)?(<span  className="fa fa-star" ></span>):(<span  className="fa fa-star-o" ></span>)}</i>
             </a>
             :{rating}
             </p>
        
   }
    //
    setShowRating(i){
        this.setState({
            rating:i
        })

    }
}

export default Rating;
