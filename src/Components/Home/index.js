import React from "react";
import { Button, Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./styles.css";
import Demo from "../Demo";
import MyTravels from "../MyTravels";
import Profile from "../Profile";

const { Header, Content, Footer } = Layout;

export default function Home(props) {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/myTravels">My Travels</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item>
              <Button ghost onClick={props.logoutHandler}>
                Logout
              </Button>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/myTravels">
                <MyTravels />
              </Route>
              <Route path="/">
                <Demo />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Dino Travels ©2021</Footer>
      </Layout>
    </Router>
  );
}
