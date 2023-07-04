import { BrowserRouter, Switch, Route } from "react-router-dom";
import PatientList from "./routes/patientlist/patientList";
import PatientDetail from "./routes/patientdetial/patientDetail";
import Result from "./routes/result/result";
import ResultMobile from "./routes/resultmobile/resultMobile";
import ResultDetail from "./routes/resultdetail/ResultDetail";
import Home from "./routes/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/patientlist">
          <PatientList />
        </Route>
        <Route path="/patientdetail">
          <PatientDetail />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/resultmobile">
          <ResultMobile />
        </Route>
        <Route path="/resultdetail">
          <ResultDetail />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
