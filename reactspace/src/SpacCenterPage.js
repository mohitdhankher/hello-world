/**
 *
 * SpacCenterPage
 *
 */

import React, { memo } from "react";
import SpacCard from "./SpacCard";
import Grid from "@material-ui/core/Grid";

function SpacCenterPage(props) {
    const data = props.data;
    if(data) {
        return (
            <Grid container>
                {data.map(item => (
                    <SpacCard item={item} key={item}/>
                ))}
            </Grid>
        );
    }
}

export default memo(SpacCenterPage);
