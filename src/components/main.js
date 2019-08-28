import React, { Component } from "react";
import Filter from './filterbar';
import axios from 'axios';
import GifImg from "./gifimg.js";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter :{
              title: '',
            },
            gifData : [],
            displayURL : '',
            message : "Welcome to the giphy app",
            apiKey : 'u4unitnVSVAaAA9PxMqILG38wXyt3uJX'
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
      }


    
      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        var filter_ = this.state.filter;
        filter_[name] = value;

        this.setState({
          filter: filter_
        });
        
      }
    handleInputSubmit(event){
      event.preventDefault();
      this.refreshList();
    }
     

      componentDidMount() {
        this.refreshList();
      }

      refreshList(){
        var config = {
          headers: {'Access-Control-Allow-Origin': '*'}
        };
        var url = 'http://api.giphy.com/v1/gifs/search?q=' + this.state.filter.title + '&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1'
        axios
          .get(url)
          .then(res => this.setState({ gifData: res.data, displayURL: res.data.data[0]['embed_url'] }))
          .catch(err => console.log(err));
        console.log(this.state);
        
      };


    render() {
      return (
        <div className="container">
          
          <div className="row">
          <div className ="col">
            {this.state.message}    
          </div>    
          </div>  
          <div className="row text-center">
            <div className="main-body">
              <Filter data = {this.state.filter}
                      handleInputChange= {this.handleInputChange}
                      handleInputSubmit = {this.handleInputSubmit}></Filter>
              <GifImg url = {this.state.displayURL}></GifImg>
            </div>
          </div>
        </div>
      );
    }
  }

