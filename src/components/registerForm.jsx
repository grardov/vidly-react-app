import React, { Component } from 'react';
import Form from "./common/form";
import * as userService from "../services/userService";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  }

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  }

  onSubmit = async () => {
    try {
      await userService.register(this.state.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
    }
  }

  render() { 
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          { this.renderInput("username", "Username") }
          { this.renderInput("password", "Password", "password") }
          { this.renderInput("name", "Name") }
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}
 
export default RegisterForm;