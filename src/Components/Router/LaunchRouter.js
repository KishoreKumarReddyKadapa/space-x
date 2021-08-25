import { Route } from "react-router-dom";
import { LaunchDetails } from "../LaunchDetails/LaunchDetails";
function LaunchRouter() {
    return (
        <div className="launch__router">
            <Route path="/getLaunchDtls/:flight_number" component={LaunchDetails} />
        </div>
    )
}

export default LaunchRouter;