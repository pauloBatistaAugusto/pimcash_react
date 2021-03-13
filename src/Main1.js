import React, { Component } from "react";
 
class Main1 extends Component {
  render() {
    return (
        <div>
          <h1>Simple SPA Main1</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main1;