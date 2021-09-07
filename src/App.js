import React, { Component } from "react";
import './App.css';
import Card from "./components/Card";
import Banner from "./components/Banner";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      dapps : "",
      sectionList : [],
      banner: [],
      loading: false
    };
  }

  render() {
  return (
    <>
     <Banner data={this.state.banner}/>
    {this.state.sectionList.map((item, i) => (
      <Card title={item} data={JSON.parse(JSON.stringify(this.state.dapps[i][item]))}/>
     ))}

    <div class="footer">  
      @<a href="https://wswap.site/" className="non-decor" >WalletSwap</a> 2021  All Rights Reserved.   
    </div>  
    </>
  );
}

  componentDidMount(){
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const theme = params.get('theme');
    
    if(theme == 'dark'){
       document.documentElement.className = '';
       document.documentElement.classList.add(`theme-dark`);
    }else{
      document.documentElement.className = '';
      document.documentElement.classList.add(`theme-light`);
    }

    this.setState({loading: true})

        Promise.all([
          fetch("https://raw.githubusercontent.com/mrrohit1/assets/main/dapps-browser/dapps/json/dapps-section.json")
          .then(res=>res.json()),
          fetch("https://raw.githubusercontent.com/mrrohit1/assets/main/dapps-browser/dapps/json/dapps.json")
          .then(res=>res.json()),
          fetch("https://raw.githubusercontent.com/mrrohit1/assets/main/dapps-browser/banner/json/banner.json")
          .then(res=>res.json()),
        ]).then(([sectionList, sectionDetails, banner]) => {
          console.log(sectionDetails)
          console.log(sectionList)
          this.setState({dapps: sectionDetails})
          this.setState({sectionList : sectionList})
          this.setState({banner : banner})
        }).catch((err) => {
            console.log(err);
        });
  }
}
