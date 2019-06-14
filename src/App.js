import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import ProtectedRoute from "./components/common/protectedRoute";
import AuthContextConsumer, { AuthContextProvaider } from "./components/context/authContext";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AuthContextProvaider>
          <ToastContainer />
          <AuthContextConsumer>
            {({user}) => {
              return (
                <div>
                  <Navbar />
                  <main className="container mt-5">
                    <Switch>
                      <Route path="/login" component={LoginForm} />
                      <Route path="/logout" component={Logout} />
                      <Route path="/register" component={RegisterForm} />
                      <ProtectedRoute
                        path="/movies/:id"
                        component={MovieForm}
                      />
                      <Route path="/movies" component={Movies} />
                      <Route path="/movies/new" component={MovieForm} />
                      <Route path="/customers" component={Customers} />
                      <Route path="/rentals" component={Rentals} />
                      <Route path="/not-found" component={NotFound} />
                      <Redirect from="/" exact to="/movies" />
                      <Redirect to="/not-found" />
                    </Switch>
                  </main>
                </div>
              );
            }}
          </AuthContextConsumer>
        </AuthContextProvaider>
      </React.Fragment>
    );
  }
}

export default App;
