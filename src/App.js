import React from "react";
import SignIn from "./pages/sign-in/sign-in.component";
import ContractHome from "./pages/contract-home/contract-home.component";
import ContractOffer from "./pages/contract-offers/contract-offers.component";
import Title from "./pages/Contract/Title/Title.component";

import Dashboard from "./pages/Dashboard/Dashboard.component";
import MasterData from "./pages/Master-Data/Master-Data.component";
import Offers from "./pages/offers/offers.component";
import IcMeeting from "./pages/Ic-meeting/Ic-meeting.component";
import LandAdministration from "./pages/Land-Administration/Land-Administration.component";
import Accounting from "./pages/Accounting/Accounting.component";
import Reports from "./pages/Reports/Reports.component";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./pages/Nav-Bar/Nav-bar.component";

import "./App.css";

const App = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname !== "/signIn" && <NavBar />}
      <Switch>
        <Route exact path="/signIn" component={SignIn} />
        <Route path="/contract" component={ContractHome} />
        <Route path="/contractOffers" component={ContractOffer} />
        <Route path="/title" component={Title} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/masterdata" component={MasterData} />
        <Route exact path="/offers" component={Offers} />
        <Route exact path="/icmeeting" component={IcMeeting} />
        <Route exact path="/accounting" component={Accounting} />
        <Route exact path="/reports" component={Reports} />
        <Route
          exact
          path="/landadministration"
          component={LandAdministration}
        />
      </Switch>
    </div>
  );
});

export default App;
