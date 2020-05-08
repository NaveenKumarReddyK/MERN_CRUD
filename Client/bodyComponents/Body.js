import React from "react";
import {BrowserRouter as Route, Switch } from "react-router-dom";
import Create from "../crudComponents/Create";
import Edit from "../crudComponents/Edit";
import ReadAll from "../crudComponents/ReadAll";

class Body extends React.Component {
  render() {
    return (
      <div>
      <Switch>
          <Route exact path="/crud/">
            <Create />
          </Route>
          <Route path="/crud/create">
            <Create />
          </Route>
          <Route path="/crud/readAll">
            <ReadAll />
          </Route>
          <Route path="/crud/edit">
            <Edit />
          </Route>

      </Switch></div>
    );
  }
}

export default Body;
