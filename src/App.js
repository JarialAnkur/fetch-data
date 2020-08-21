import React, { Component } from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {get} from "axios";
import Home from "./components/home"
import User from "./components/user";
import NavBar from "./components/navbar";
import "./App.css";



class App extends Component {

  state={
    posts : [],
  }

  handleClick=async ()=>{
    const{data : posts} = await get("https://jsonplaceholder.typicode.com/posts");
    this.setState({posts});
  }

  

  render() {
    return (
      <React.Fragment>
      <div>
        <NavBar />
       <div>
       <ToastContainer/>
        <Route path="/" exact component={Home} />
        <Route path="/User" exact component={User} />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                   
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={this.handleClick} >Fetch Data</button>
       
      </div>
    </React.Fragment>
      );
  }
}

export default App;