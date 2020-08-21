/**
 *
 * SpacCard
 *
 */

import React, { memo } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    fullHeightCard: {
        height: "100%",
        backgroundColor:'cadetblue'

    },
    fullHeightCardPadd: {
       padding:'5vh'

    },
});
function SpacCard({ item: { mission_name, flight_number, launch_year, launch_success, mission_id, rocket, links } }) {
    let land_success = rocket.first_stage.cores[0].land_success
    let url = links.mission_patch
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid sm={12} md={3} lg={3} className="col-sm-12 col" >
                <Card className={classes.fullHeightCard}  >
                    <CardActionArea className={classes.fullHeightCardPadd}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            square
                            src={url}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {mission_name} # {flight_number}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Mission Id:
                       <ul>
                                    {mission_id.map(function (name, index) {
                                        return <li key={index}>{name}</li>;
                                    })}
                                </ul>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Launch Year:  {launch_year}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Successful Launch:  {`${launch_success}`}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Successful Landing:  {`${land_success}`}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </React.Fragment>
    );
}


export default memo(SpacCard);
