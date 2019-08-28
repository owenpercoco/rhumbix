import React, { Component } from "react";
 

export default class Filter extends Component {
    constructor(props) {
        super(props);
      }
    
  //filter on: company, level, location, and category

    render() {
      return (
        <div  className="filter" >
          
            <form onSubmit = {this.props.handleInputSubmit}>
            <div className="row"> 
            <div className="col">
                    <input  name = "title"
                        value = {this.props.data.title}
                        onChange={this.props.handleInputChange}
                        type="text" className="form-control" placeholder="Title"/>
             </div>
            </div>
            <div className="row"> 
            <div className="col">
              <input type="submit" value="Submit" />
            </div>
            </div>
            </form>
        </div>
      );
    }
  }
  