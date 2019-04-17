import React from 'react';
import { Link } from "react-router-dom";

export class NavTest extends React.Component{
    constructor(props){
        super(props);
        this.state = { activeIndex: 0 };
    }
    handleClick(index){
        this.setState({ activeIndex: index });
    }
    componentDidMount(){
        console.log('componentWillMount ==>' ,this.props, this.state);
        // console.log('componentWillMount ==>' ,this.props.history.location.state);
    }
    render(){
        const links = this.props.links.map((link, index) => 
            <li key={index} onClick={this.handleClick.bind(this,index)} className={this.state.activeIndex === index ? 'active': ''}>
                <Link to={link.path}>{link.linkName}</Link>
            </li>)
        return (
            <nav id="main-nav" className="nav-main" role="navigation">
                <ul>
                    {links}
                </ul>
            </nav>
          )
    }
}