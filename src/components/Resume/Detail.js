import React, { Component } from 'react';
import './resume.css';
import src from './danh.png'
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: false,
            edu: false,
            email: false,
            phone: false,
            address: false

        };
    }
    showEfect = (v) => {
        if (v == 2) this.setState({
            date: !this.state.date
        })
        if (v == 3) this.setState({
            edu: !this.state.edu
        })
        if (v == 4) this.setState({
            email: !this.state.email
        })
        if (v == 5) this.setState({
            phone: !this.state.phone
        })
        if (v == 6) this.setState({
            address: !this.state.address
        })
    }
    render() {
        var { date, edu, email, phone, address } = this.state;

        return (

            <React.Fragment>
                {/* header CV */}
                <header className="pd-10">

                    <div className="row ">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <img src={src} className="img-thumbnail ml-70" alt="Image" /><br />
                            <i className="fa fa-star ml-120"></i>
                            <i className="fa fa-star "></i>
                            <i className="fa fa-star "></i>
                            <i className="fa fa-star "></i>
                            <i className="fa fa-star-o"></i>

                        </div>

                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 pt-30 line-hight">
                            <ul className="pl-20">

                                <li><span style={{ fontSize: 'large' }} >Full Name : <b><a>Võ Thành Danh</a></b></span></li>
                                <li className="pointer"><span style={{ fontSize: 'large' }} onClick={() => this.showEfect(2)}>Place, date of birth :{date ? (<a>16/4/1995</a>) : '...'}</span></li>
                                <li className="pointer"><span style={{ fontSize: 'large' }} onClick={() => this.showEfect(3)}>Formal Education  : {edu ? (<a>Bach Khoa University (BKU)</a>) : '...'}</span></li>
                                <li className="pointer"><span style={{ fontSize: 'large' }} onClick={() => this.showEfect(4)}>Email : {email ? (<a>vothanhdanh.bk@gmail.com</a>) : '...'}</span></li>
                                <li className="pointer"><span style={{ fontSize: 'large' }} onClick={() => this.showEfect(5)}>Phone : {phone ? (<a>0963226771</a>) : '...'}</span></li>
                                <li className="pointer"><span style={{ fontSize: 'large' }} onClick={() => this.showEfect(6)}>Address :{address ? (<a> District  10,HCM City</a>) : '...'}</span></li>

                            </ul>

                        </div>

                    </div>
                    <h4 className="pl-30"> <b>Font End Developer</b></h4>
                    <hr />
                </header>


                {/* Detail CV */}
                <div className="container mt-5 mb-5">

                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            {/* -Skill- */}
                            <h4>Skills :</h4>
                            <ul className="timeline">
                                <li>
                                    <a target="_blank" >Developer :</a>

                                    <p>Use proficiency tools Visual Studio, visual code, C, Java Script XML, HTML,CSS, Git.</p>
                                </li>
                                <li>
                                    <a>Use :</a>
                                    <p>Reactjs combined with the use of modules Redux,Webpack,Bootstrap,... to design web.</p>
                                </li>
                                <li>
                                    <a >Search skills ; and read english documents .</a>
                                </li>
                            </ul>
                            {/* My self */}
                            <h4>Latest News :</h4>
                            <ul className="timeline">
                                <li>
                                    <a target="_blank" >2013-2017 :Bach Khoa Universty.</a>
                                    <p>Major in Electronics and Telecommunication ...</p>
                                </li>
                                <li>
                                    <a >2015-2016 :Joint for some embedded projects.</a>
                                    <p>about Internet Of Things (IOT).<br/>Learn about HTML ,Css . Java Scrip Xml,C .</p>
                                    
                                </li>
                                <li>
                                    <a >2017-Present : Learn about FontEnd develop .</a>
                                    <p> Font-End :ReactJS ,Redux,webpack,redux-thunk,axios,..<br/>Use :Bootstrap ,SCSS.</p>
                                    <p className="red-color">I design this site using Reactjs.</p>
                                </li>
                            </ul>
                            <h4>Why did I chose to become a web developer ? :</h4>
                            <ul style={{ textAlign: 'justify' }} className="timeline">
                                <li>
                                    <p>In the past,I learned about web design,I think the web will become a trend in the future.Besides,I also have a good background to develop with it. So, that has motivate me to become a web developer.</p>
                                </li>
                            </ul>
                            {/* Lastes News */}
                            <h4>Future plan :</h4>
                            <ul className="timeline">
                                <li>
                                    <a target="_blank" >The first :</a>
                                    <p>A good web developer about Reactjs,React native , CSS ,HTML ,Javascript .</p>
                                </li>
                                <li>
                                    <a >the second :</a>
                                    <p>a good developer about MERN (mongoDB,expresJs,ReactJs,NodeJs).</p>
                                </li>
                            </ul>
                            
                        </div>
                        
                    </div>
                    
                </div>

            </React.Fragment>

        );
    }
}

export default Detail;
