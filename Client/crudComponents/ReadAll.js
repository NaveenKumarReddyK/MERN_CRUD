import React from "react";
import axios from "axios";
import ReadTable from "./readAllTable/ReadTable";
import 'bootstrap/dist/css/bootstrap.css'

class ReadAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }
  
  componentDidMount() {
    console.log("Axios called");
    axios
      .get("http://localhost:4000/crud/readAll/")
      .then((res) => {
        this.setState({
          userData: res.data,
        });
        console.log("post method called");
        console.log(this.userData);
        // this.state.userData.map(function(res,i){
        //         console.log("Name"+this.state.userData.res.name);
        // })
      })
      .catch((err) => {
        console.log("Unable to fetch data from database" + err);
      });
  }

  userDetailsTable() {
    return this.state.userData.map((res, i) => {
      return <ReadTable obj={res} key={i} />;
    });
  }

 


  render() {
    return (
      <div className="table-wrapper" >
        <center>
          <table className="table table-striped  " style={{ textAlign: "center", fontSize: "18px" }}>
            <thead>
              <tr>
                <th class="bg-primary">Object Id</th>
                <th class="bg-danger">First Name</th>
                <th class="bg-success">Last Name</th>
                <th class="bg-warning">Age</th>
                <th class="bg-info">Gender</th>
                <th colSpan="2" class="bg-secondary">Controls</th>
              </tr>
            </thead>
            <tbody>{this.userDetailsTable()}</tbody>
          </table>
        </center>
      </div>
    );
  }
}

export default ReadAll;
