import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

class ReadTable extends React.Component {
  constructor(props) {
    super(props);
    this.deleteUserData = this.deleteUserData.bind(this);
  }

  deleteUserData() {
    console.log("delete method called");
    axios
      .delete("http://localhost:4000/crud/delete/" + this.props.obj._id)
      .then((res) => {
        console.log(" Sucessfuly deleted data ");
        alert("Deleted Succesfuly")
        window.location.reload();
        // this.props.history.push('/readAll');
      })
      .catch((err) => {
        console.log("Unable to delete the data");
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj._id}</td>
        <td>{this.props.obj.fname}</td>
        <td>{this.props.obj.lname}</td>
        <td>{this.props.obj.age}</td>
        <td>{this.props.obj.gender}</td>
        <td>
          <Link to={`/crud/editById/${this.props.obj._id}`}>
            <Button size="md" variant="outline-info" style={{padding:"6px 30px"}}>
              Edit
            </Button>
          </Link>
        </td>
        <td>
          <Button
            size="md"
            variant="outline-danger"
            onClick={this.deleteUserData}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
export default ReadTable;
