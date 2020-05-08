import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./AppHeader.css";
import Create from "../crudComponents/Create";
import Edit from "../crudComponents/Edit";
import ReadAll from "../crudComponents/ReadAll";
import Home from "../bodyComponents/Home";
class AppHeader extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar" style={{boxShadow: "0px 1px 10px #999"}}>
            <ul>
              <li>CRUD Main Page</li>
              <li>
                <Link to="/crud">Home</Link>
              </li>
              <li>
                <Link to="/crud/create">Create</Link>
              </li>
              <li>
                <Link to="/crud/readAll">ReadAll</Link>
              </li>
            </ul>
          </div>
          <hr />

          <div>
            <Switch>
              <Route exact path="/crud" component={Home} />

              <Route path="/crud/create" component={Create} />

              <Route path="/crud/readAll" component={ReadAll} />

              <Route path="/crud/editById/:id" component={Edit} />
              
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default AppHeader;
