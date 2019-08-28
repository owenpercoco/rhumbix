import React, { Component } from "react";
 

export default class GifImg extends Component {
    constructor(props) {
        super(props);
      }
    
  //filter on: company, level, location, and category

    render() {
      return (
        <div  className="Gif" >
          <img src = {this.props.url}/>
        </div>
      );
    }
  }
  