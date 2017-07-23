import dotenv from 'dotenv';
import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import Query from './query/Query.js'
import Grid from './grid/Grid.js'

dotenv.config()

class App extends Component {
    constructor() {
        super();

        this.state = {req: {"job_id": null,
                            "grid": null,
                            "query": null,
                            "time": null}};

        alert("You will have 5 seconds to complete the task")
        this.Job();
        this.click = this.click.bind(this);
    }

    Job() {
        axios.get(process.env.REACT_APP_JOB_DISPATCH_URL)
            .then((res) => {
                var data = JSON.parse(res.data);
                if (data.error === "queue_empty") {
                    return;
                }
                this.setState((prevState, props) => {
                    console.log("NEW TASK");
                    return {req: data};
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    click(loc, clickable) {
        //RETURN THE SELECTION TO SERVER 
        if (clickable) { 
            axios.post(process.env.REACT_APP_JOB_RESPONSE_URL, {
                job_id: this.state.req.job_id,
                selected: loc
            }).then((res) => {
                if(res.data.status === 'OK') {
                    this.Job();
                } else {
                    console.log("Failed to Submit, please reload");
                }
            }).catch((err) => {
                console.log("Failed to Submit, please reload. ERROR:" + err);
            });
        }
    }

    render() {
        if (this.state.req.job_id === null) {
            return (<div>Loading</div>);
        } 
        return ( 
            <div className="Bender">
                <Query query={this.state.req.query}/> 
                <Grid grid={this.state.req.grid} handler={this.click}/>
            </div>
        );
    }
}

export default App;