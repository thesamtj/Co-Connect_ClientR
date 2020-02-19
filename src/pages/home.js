import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
    state = {
        screams: null
    }

    componentDidMount(){
        axios.get('/screams')
            .then(res => {
                console.log(res.data)
                this.setState({
                    screams: res.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
    let recentScreamsMarkup = this.state.screams ? (this.state.screams.map(scream => <p>{scream.body}</p>)) : <Scream scream={scream}/>
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item sm={8} xs={12}>
                        {recentScreamsMarkup}
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <p>Profile...</p>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home
