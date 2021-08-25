import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Launch } from '../Launch/Launch';
import './style.css';
export class Launches extends React.Component {
    static api = 'https://api.spacexdata.com/v3/launches';
    state = {
        launches: []
    }
    componentDidMount() {
        console.log("Did Mount will called when ever componet mount..means loads");
        // At the time of component loads we need to load data so, we here to call didmount 
        this.getLaunchList();

    }
    getLaunchList = () => {
        console.log("Get Launch List ...")
        axios.get('https://api.spacexdata.com/v3/launches')
            .then((response) => {
                this.setState({
                    launches: response.data
                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });

    }

    addLaunch = (obj) => {
        return (
            <Link to="/getLaunchDtls/{obj.flight_number}">
                <Launch
                    banner={obj.links.flickr_images.length != 0 ? obj.links.flickr_images : 'https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg'}
                    missionName={obj.mission_name}
                    launchDate={obj.launch_date_local}
                    description={obj.details}
                />
            </Link>

        )
    }
    render() {
        const launches = this.state.launches;
        console.log("launches::", launches)
        return (
            <div className="launches">
                {
                    launches.map((obj, index) => {
                        return this.addLaunch(obj);
                    })
                }
                {/* <Launch
                    banner="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
                    missionName="FalconSat"
                    launchDate="2006-03-25T10:30:00+12:00"
                    description="Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
                />
                <Launch
                    banner="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
                    missionName="FalconSat"
                    launchDate="2006-03-25T10:30:00+12:00"
                    description="Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
                /> */}
            </div>
        )
    }
}