import { Route, Switch } from "react-router-dom";
import { LaunchDetails } from "../LaunchDetails/LaunchDetails";
import { Launches } from "../Launches/Launches";
function LaunchRouter() {
    return (
        <div className="launch__router">
            <Switch>
                <Route path="/getLaunchDtls/:flight_number" component={LaunchDetails} />
                <Route path="/" component={Launches} />
            </Switch>
        </div>
    )
}

export default LaunchRouter;