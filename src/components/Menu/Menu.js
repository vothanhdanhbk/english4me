import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Menu.css';

const menus = [
    {
        name: 'Résumé',
        to: '/',
        exact: true
    },
    {
        name: 'Comment Manager',
        to: '/comment-manager',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            <b>{label}</b>
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            direc: 0
        };
    }


    render() {
        var menu = 0;
        var { direc } = this.state
        if (direc === 1){
            menu = 0;    
        }

        if (localStorage && localStorage.getItem('privateUser')) {
            var user = JSON.parse(localStorage.getItem('privateUser'));
            menu = user.menu[0];
            var name = user.name;
        }
           
        if (menu === 0) {
            var tag = (
                <ul className="nav navbar-nav navbar-right ">
                    <li><Link to="/sign-in"><b>Sign In</b></Link></li>
                    <li className="mr-50"><Link to="/sign-up"><b>Sign Up</b></Link></li>
                    <li>.</li>
                </ul>
            )
        } else {
            var tag = (
                <ul className="nav navbar-nav navbar-right ">
                
                <div className="row">
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <li><b >{name}</b></li>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <li className="mr-50" onClick={this.logOut}><Link to="/"><b >Logout</b></Link></li>
                        <li>.</li>
                    </div>
                </div>

                </ul>
            )
        }

        return (
            <div className="navbar navbar-default">
                <ul className="nav navbar-nav ">
                    {this.showMenus(menus)}
                </ul>
                {tag}
            </div>

        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
    //
    logOut = () => {
        localStorage.setItem('privateUser', JSON.stringify({
            name: '',
            userid: '',
            menu: [0]
        }))
        this.setState({
            direc: 1
        })
    }

}

export default Menu;
