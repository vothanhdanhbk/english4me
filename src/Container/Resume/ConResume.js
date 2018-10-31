import React, { Component } from 'react';
import Detail from './../../components/Resume/Detail'
//  import ShowRating from './../../components/Resume/ShowRating'
// import Rating from './../../components/Resume/Rating';
import { connect } from 'react-redux';
// import { findIndex } from 'lodash';
import { actFetchRatingRequire,actGetRatingsRequire,actUpdateRatingRequest} from '../../actions';

class ConResume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings:[],
            
        };
    }
    render() {
        var {ratings}=this.state;
        
        return (
            <React.Fragment>
             {/* <!-- detail --> */}
             <Detail />
             {/* <!-- point --> */}
             {/* < PointStar /> */}
             {/* <!-- rating --> */}
             <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 test">
                    {/* <Rating
                        rating={this.rating}
                    /> */}
                    
                    {/* <ShowRating/> */}
                     {/* {this.showListRating(ratings)}  */}
                </div>

            </div>
             </React.Fragment>

        );
    }
    //
    // showListRating = (ratings) => {

    //     var result = null;
    //     if (ratings.length > 0) {
    //         result = ratings.map((rating, index) => {
    //             return <ShowRating
    //                 key={index}
    //                 rating={rating}
                    
    //             />;
    //         });
    //     }
    //     return result;
    // }
    //
    // rating=(user,rating)=>{
    //     let date = new Date();
    //     var {ratings}=this.state;
    //     var index = findIndex(ratings, function (o) { return o.userid === user.userid; })
    //     if(index===-1){
    //         //update NEW rating to database
    //         this.props.fetchRating(user,rating,date)
    //     }else{
    //         // update
    //      var id=ratings[index].id;
    //      this.props.updateRatingsRequire(id,rating,date)    
            
    //     }
    // }
    //
    // componentWillMount() {
    //     this.props.getRatingsRequire();
    
        
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps && nextProps.getRatings) {
    //         this.setState({
    //             ratings: nextProps.getRatings
    //         })
    //     }
    // }

}
const mapStateToProps = (state) => {
    return {
        getRatings: state.ratings
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchRating: (user,rating,date) => {
            dispatch(actFetchRatingRequire(user,rating,date));
        },
        getRatingsRequire: () => {
            dispatch(actGetRatingsRequire());
        },
        updateRatingsRequire: (id,rating,date) => {
            dispatch(actUpdateRatingRequest(id,rating,date));
        }
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(ConResume);
