import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import ListTrip from "./components/PublicComponents/ListTrips";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Aplications from "./components/PublicComponents/Aplication/Aplication";
import AdminHome from "./components/PrivatComponents/AdminHome";
import Login from "./components/PrivatComponents/Login";
import TripDetails from "./components/PrivatComponents/Adminpages/TripDetails";
import CreateTrip from "./components/PrivatComponents/Adminpages/CreateTrip";

function App() {
  const [paginaAtual, setPaginaAtual] = useState("Home");

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/trip/list">
          <ListTrip />
        </Route>

        <Route exact path="/trips/application">
          <Aplications />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/admin/trips/list">
          <AdminHome />
        </Route>

        <Route exact path="/admin/trips/create">
          <CreateTrip />
        </Route>

        <Route exact path="/admin/trips/:id">
          <TripDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
