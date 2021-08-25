import React from 'react';
import './style.css';
export class Launch extends React.Component {
    render() {
        return (
            <div className="launch">
                <img src={this.props.banner} />
                <div className="launch-info">
                    <h2>
                        <label className="mission_name">{this.props.missionName}</label>
                        <label className="launch_date">{this.props.launchDate}</label>
                    </h2>
                    <p className="description">
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}