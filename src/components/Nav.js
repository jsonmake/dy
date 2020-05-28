import React,{Component} from "react";
import {Layout, Row, Col, Menu, Icon, Divider, Button, Dropdown} from "antd";
import {NavLink, Link} from "react-router-dom";

export default class Nav extends Component {
    render(){
        return(
            <ul>
                <li>
                    <NavLink to="/"><Icon type="home" />日漫</NavLink>
                </li>
                <li>
                    <NavLink to="/book"><Icon type="home" />国漫</NavLink>
                </li>
            </ul>
        )
    }
}
