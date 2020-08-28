/**
 *
 * DashBoardLaunchSuccess
 *
 */

import React, { memo, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import SpacCenterPage from "./SpacCenterPage";
import RoiNavBar from "./RoiNavBar";
import Card from "@material-ui/core/Card";

export function DashBoardLaunchSuccess(props) {
    const [data, setData] = useState({
        dataall: [],
        datayr: [],
        datainitial: [], dataNotification: null, LandfromNotifications: null
    });

 

    useEffect(() => {
        let fetchDatas = async () => {
            let ApiUrl;
            if (props.location.state) {
                if (props.location.state.fromNotifications === true) {
                    ApiUrl = true
                } else if (props.location.state.fromNotifications === false) {
                    ApiUrl = false
                } else
                    ApiUrl = ''
            }
            const responses = await fetch(
                `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${ApiUrl}`
            );
            const datas = await responses.json();
            setData({ ...data, datainitial: datas, dataall: datas });
        };
        fetchDatas();
    }, []);
    let filteryears = (e) => {
        let year = e.target.innerText;
        let years;
        if (data) {
            years = data.dataall.filter(
                city => `${city.launch_success}` === year);
        }
    }
    return (
        <Card className="maincard">
            <h1>SpaceX Launch Program</h1>
            <Grid container>
                <Grid lg={2} md={6} sm={12} container className="aligns">
                    <Card className="maincard2">
                        <RoiNavBar filteryear={filteryears}/>
                    </Card>
                </Grid>
                <Grid lg={10} md={6} sm={12} container className="col-container">
                    <Card className="maincard2">
                        <SpacCenterPage data={data.datainitial}/>
                    </Card>
                </Grid>
            </Grid>
        </Card>
    );
}



export default memo(DashBoardLaunchSuccess);
