import React, { memo,useEffect ,useState} from "react";
import Card from '@material-ui/core/Card';
import './App.css';
import Grid from "@material-ui/core/Grid";
import RoiNavBar from "./RoiNavBar";
import SpacCenterPage from "./SpacCenterPage";
function DashBoardSpac() {
    const [data, setData] = useState({datainitial:[],
        dataall:[]});
    useEffect(() => {   
        let fetchDatas = async () => {
            const responses = await fetch(
                `https://api.spaceXdata.com/v3/launches?limit=100`
            );
            const datas = await responses.json();
            setData({...data,datainitial: datas,dataall: datas});
        }
            fetchDatas();
    }, []);    
    let filteryear = (e)=>{
        let year = e.target.innerText ;
        let years;
        if(data) {
            years = data.dataall.filter(
                city=> city.launch_year === year);
        }
        setData({...data,datainitial: years});
    }
    return (
        <Card className="maincard">
            <h1>SpaceX Launch Program</h1>
            <Grid container>
                <Grid lg={2} md={6} sm={12} container className="col-sm-12 aligns">
                    <Card className="maincard2">
                        <RoiNavBar filteryear={filteryear} />
                    </Card>
                </Grid>
                <Grid lg={10} md={6} sm={12} container className="col-sm-12 col-container">
                    <Card className="maincard2">
                        <SpacCenterPage data={data.datainitial}/>
                    </Card>
                </Grid>
            </Grid>
        </Card>

    );
}

export default memo(DashBoardSpac);