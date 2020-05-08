import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import {  Link } from "react-router-dom";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      age: "",
      gender: "male",
      displayState: "none",
    };
    this.changeFname = this.changeFname.bind(this);
    this.changeLname = this.changeLname.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }
  changeFname(event) {
    this.setState({
      fname: event.target.value,
    });
  }
  changeLname(event) {
    this.setState({
      lname: event.target.value,
    });
  }
  changeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }
  changeGender(event) {
    this.setState({
      gender: event.target.value,
    });
  }
  resetForm(event) {
    this.setState({
      fname: " ",
      lname: "",
      age: "",
      gender: "male",
    });
  }

  componentDidMount() {
    console.log("Edit called");
    console.log(this.props.children);
    const { id } = this.props.match.params;
    axios
      .get("http://localhost:4000/crud/editById/" + id)
      .then((res) => {
        
        this.setState({
          fname: res.data.fname,
          lname: res.data.lname,
          age: res.data.age,
          gender: res.data.gender,
        });
        console.log("Update Called");
      })
      .catch((err) => {
        console.log("Error while editing the details " + err);
      });
  }
  onSubmitForm(event) {
    event.preventDefault();
    const updatedUserData = {
      fname: this.state.fname,
      lname: this.state.lname,
      age: this.state.age,
      gender: this.state.gender,
    };
    axios
      .put(
        "http://localhost:4000/crud/update/" + this.props.match.params.id,
        updatedUserData
      )
      .then(function (res) {
        console.log("Sucessfuly updated");
      })
      .catch(function (err) {
        console.log("Unable to update the data" + err);
      });

    this.setState({
      fname: "",
      lname: "",
      age: "",
      gender: "male",
      displayState: "block",
    });
  }
  closeOverlay() {
    this.setState({
      displayState: "none",
    });
  }
  render() {
    return (
      <center>
        <div style={{ width: "300px", backgroundColor: "rgb(210, 255, 193)" }}>
          <form
            style={{
              border: "1px solid blue",
              padding: "5px",
              borderRadius: "3px",
            }}
            onSubmit={this.onSubmitForm}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="fname"
                value={this.state.fname}
                onChange={this.changeFname}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lname"
                value={this.state.lname}
                onChange={this.changeLname}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                name="age"
                value={this.state.age}
                onChange={this.changeAge}
              />
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text">Gender</label>
              </div>
              <select
                className="custom-select"
                name="gender"
                onChange={this.changeGender}
                value={this.state.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <br />

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-md btn-block"
              >
                Update
              </button>
            </div>
            <div className="form-froup">
              <button
                type="reset"
                className="btn btn-danger btn-md"
                onClick={this.resetForm}
                style={{ padding: "6px 40px", marginRight: "20px" }}
              >
                Reset
              </button>
              <Link to="/crud/readAll">
                <button
                  className="btn btn-success btn-md"
                  style={{ padding: "6px 45px" }}
                >
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>

           {/* ###################################  */}
                {/*Overlay Conatianer*/}
        {/* ###################################  */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.521)",
            position: "fixed",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
            zIndex: "1",
            display: this.state.displayState,
          }}
        >
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
            id="overlay"
            style={{
              display: this.state.displayState,
              width: "300px",
              position: "fixed",
              left: "550px",
              top: "150px",
            }}
          >
            <h3 clas="alert-heading">Updated Succesfuly</h3>
            <hr />
            <p>You succesfuly Updated the data</p>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={this.closeOverlay}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

      </center>
    );
  }
}

export default Edit;
