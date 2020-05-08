import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayState: "block",
    };
    this.showOverlay = this.showOverlay.bind(this);
  }
  showOverlay() {
    this.setState({
      displayState: "none",
    });
  }
  render() {
    return (
       
      
       <center>
       <div className="container">
       <div className="row">
       <div className="col-md"></div>
       <div className="col-md ">
      <div className="alert alert-primary">
      <h1>Welcome to CRUD app</h1><br /><hr />
      <h2>This app is built using MERN stack</h2><br /> <h/>
      <h2>It is built using the following technologies</h2>
      </div>
       </div>
       <div className="col-md"></div>
       </div>
       <div className="row">
       <div className="col"><h2 className="alert alert-success">MongoDB</h2></div>
       <div className="col"><h2 className="alert alert-secondary">Express</h2></div>
       <div className="col"><h2 className="alert alert-info">React</h2 ></div>
       <div className="col"><h2 className="alert alert-warning">NodeJs</h2></div>
       </div>
       </div></center>
        
      
    );
  }
}

export default Head;
