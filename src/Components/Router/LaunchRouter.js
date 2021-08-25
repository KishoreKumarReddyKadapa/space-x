import { Route } from "react-router-dom";
import { LaunchDetails } from "../LaunchDetails/LaunchDetails";
import { Launches } from "../Launches/Launches";
function LaunchRouter() {
    return (
        <div className="launch__router">
            <Route path="/" component={Launches} />
            <Route path="/getLaunchDtls/:flight_number" component={LaunchDetails} />
        </div>
    )
}

export default LaunchRouter;