import React, { Component } from 'react';
import { Alert, Chip, Grid, IconButton } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import Countdown from 'react-countdown';

class Launch extends React.Component {
    renderer({ hours, minutes, seconds, days }) {
        return <span style={{ fontSize: "2em" }}>{days} days : {hours} hrs : {minutes} mins : {seconds} Seconds left</span>;

    }
    render() {
        return (
            <Grid container sx={{ alignItems: "center", justifyContent: "center", height: "100%" }} direction="column">
                <Grid item>
                    <IconButton >
                        <ConstructionIcon sx={{ height: "200px", width: "200px" }} />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Alert severity="info">Under Construction</Alert>
                </Grid>
                <Grid item>
                    <p>Will be launched on Jan-01-2022</p>
                </Grid>
                <Grid item sx={{ textAlign: "center" }}>
                    <Countdown date={"2022-01-01T00:00:00.000+05:30"}
                        renderer={this.renderer} />
                </Grid>
            </Grid>
        );
    }
}

export default Launch;