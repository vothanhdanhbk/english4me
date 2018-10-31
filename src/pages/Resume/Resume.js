import React, { Component } from 'react';
import './Resume.css'
import ConResume from './../../Container/Resume/ConResume'

class Resume extends Component {
    
    render() {
        return (
            <div className="row ">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 test1">
                    <div className="my-container">

                        {/* <!-- avatar -infor --> */}
                       
                        <ConResume />

                    </div>
                </div>


            </div>

        );
    }
}

export default Resume;
