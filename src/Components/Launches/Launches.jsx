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

        const launchlist = this.state.launches.map((obj, index) => {
            const image = obj.links.flickr_images.length != 0 ? obj.links.flickr_images
                : 'https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg';

            return (
                <Link
                    to={"/getLaunchDtls/" + obj.flight_number}
                    key={"launchLink_" + index}>
                    <Launch
                        key={"launch_" + index}
                        banner={image}
                        missionName={obj.mission_name}
                        launchDate={obj.launch_date_local}
                        description={obj.details}
                    />
                </Link>)
        })

        return launchlist;


    }
    render() {
        return (
            <div className="launches">
                {
                    this.addLaunch()
                }

            </div>
        )
    }
}