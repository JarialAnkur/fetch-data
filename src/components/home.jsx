
import React, { Component } from 'react';
import { ToastContainer } from "react-toastify";
import {get} from "axios";

class Home extends Component{
    state={
        posts:[],
    }
    handleClick=async ()=>{
        const{data : posts} = await get("https://jsonplaceholder.typicode.com/posts");
        this.setState({posts});
      }
      render(){
      return(
        <div>
        <h1>This is the home page</h1>
        
        <ToastContainer/>
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
        <button onClick={this.handleClick}  className="btn btn-info btn-sm" >Fetch Data</button>
        </div>
    );
      }
}
export default Home;