import InitialPage from "./pages/InitialPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={InitialPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;