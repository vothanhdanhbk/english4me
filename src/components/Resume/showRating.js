import React, { Component } from 'react';

class ShowRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0
        };
    }
    render() {
    
        
        return (


            <div className="row test">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                    <p> Name : <b>{this.props.rating.name}</b></p>
                    <p> Date : <b>{this.props.rating.date}</b></p>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 ">
                    {this.showRating(this.props.rating.rating)}
                </div>
            
            </div>

        );
    };
    //

    showRating = (rating) => {
        var result = [];
        for (var i = 1; i <= rating; i++) {      
            result.push(<i key={i} className="fa fa-star" ></i>);

        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<i key={rating + j} className="fa fa-star-o" ></i>);
        }
        return result;
    }
    
    
}

export default ShowRating;
