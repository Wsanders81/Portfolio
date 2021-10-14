import HomeThree from "../views/all-home-version/HomeThree";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeThree} />
          
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
