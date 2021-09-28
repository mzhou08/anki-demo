import {React, Component} from "react";

// REQUIRES YOU TO npm install react-icons --save
import {BsStar, BsTrash} from "react-icons/bs";
import {VscThumbsup, VscThumbsdown} from "react-icons/vsc";

import "./toolbar.scss";


class Toolbar extends Component {
    render(){
        return (
            <span id = "Toolbar">
                <div><VscThumbsup id = "ThumbsUp"/></div>
                <div><VscThumbsdown id = "ThumbsDown"/></div>
                <div><BsStar id = "Star"/></div>
                <div><BsTrash id = "Delete"/></div>
            </span>
        )
    }
}

export default Toolbar