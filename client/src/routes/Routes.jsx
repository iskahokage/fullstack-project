import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import PostList from "../components/Posts/PostList";
import Profiles from "../components/Profiles/Profiles";
import Registration from "../components/Register/Registration";
import AuthContextProvider from "../context/AuthContext";
import PostContextProvider from "../context/PostContext";
import ProfileContextProvider from "../context/ProfileContext";

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProfileContextProvider>
          <PostContextProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Registration} />
              <Route exact path="/lawyers" component={Profiles} />
              <Route exact path='/posts' component={PostList} />
            </Switch>
          </PostContextProvider>
        </ProfileContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
