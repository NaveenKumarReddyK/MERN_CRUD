import React from "react";
import axios from "axios";
import "./Create.css";

class Create extends React.Component {
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
      fname: "",
      lname: "",
      age: "",
      gender: "",
    });
  }
  onSubmitForm(event) {
    event.preventDefault();

    console.log(`${this.state.fname}`);
    console.log(`${this.state.lname}`);
    console.log(`${this.state.age}`);
    console.log(`${this.state.gender}`);

    const submitData = {
      fname: this.state.fname,
      lname: this.state.lname,
      age: this.state.age,
      gender: this.state.gender,
    };
    axios
      .post("http://localhost:4000/crud/create", submitData)
      .then(function (respose) {
        console.log(respose);
      })
      .catch(function (err) {
        console.log(err);
      });

    this.setState({
      fname: "",
      lname: "",
      age: "",
      gender: "",
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
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="fname"
                value={this.state.fname}
                onChange={this.changeFname}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lname"
                value={this.state.lname}
                onChange={this.changeLname}
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                name="age"
                value={this.state.age}
                onChange={this.changeAge}
              />
            </div>
            <div class="input-group">
              <div class="input-group-prepend">
                <label class="input-group-text">Gender</label>
              </div>
              <select
                class="custom-select"
                name="gender"
                onChange={this.changeGender}
                value={this.state.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <br />

            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-md btn-block">
                Create
              </button>
            </div>
            <div class="form-froup">
              <button
                type="reset"
                class="btn btn-danger btn-md btn-block"
                onClick={this.resetForm}
              >
                Reset
              </button>
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
            <h3 clas="alert-heading">Successfuly Added</h3>
            <hr />
            <p>You succesfuly added the data</p>
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

export default Create;
