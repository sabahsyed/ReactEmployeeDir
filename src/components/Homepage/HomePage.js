import React, { Component } from "react";
//import API from "../../utils/API";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Table from "../Table/Table";
import axios from "axios";


class HomePage extends Component {
  state = {
    results: [],
    search :"",
    sortAscending: true
  };
// Its working when we call the API directly in componentDidMount
componentDidMount() {
  axios.get("https://randomuser.me/api/?results=200&nat=us")
  .then((res) => this.setState({results : res.data.results}))
      //.then((res)=> console.log(res))
  }

handleInputChange = event => {
  const name = event.target.name;
  const value = event.target.value;
    this.setState({
      [name] : value
    })
    const filtered = this.state.results.filter(employee => 
      employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()));
      this.setState({results:filtered});
}
// handleSort = event => {
//   const sortedResults = this.state.results.sort((a,b)=> {
//     return a.name.last > b.name.last ? 1 : -1;
//   });
//    this.setState({results:sortedResults})
// }
// // true/false
// // this.sortAscending = true


handleSort = () => {
 this.setState({
   sortAscending : !this.state.sortAscending
 })
}


// When the form is submitted, search the Giphy API for `this.state.search`
handleFormSubmit = event => {
  event.preventDefault();
  const response = this.searchFunc(this.state.results);
  return response;
};
  render() {
    return (
      <div>
        <Navbar />
        <Search 
        search = {this.state.results}
        handleInputChange  = {this.handleInputChange}
        handleSubmitBtn = {this.handleSubmitBtn}
        />
        <Table
          results = {this.state.results}
          sortAscending = {this.state.sortAscending}
          handleSort={this.handleSort}
        />
      </div>
    );
  }
}

export default HomePage;

