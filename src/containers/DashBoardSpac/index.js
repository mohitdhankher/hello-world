/**
 *
 * DashBoardSpac
 *
 */

import React, { memo,useEffect ,useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectDashBoardSpac, {makeSelectSpaceXdata} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

import {spaceXdata,SavespaceXdata} from "./actions";

import SpacCard from "../../components/SpacCard";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import RoiNavBar from "../../components/RoiNavBar";
import FilterSpac from "../../components/FilterSpac";
import SpacCenterPage from "../../components/SpacCenterPage";
import './style.css';
import Card from '@material-ui/core/Card';
export function DashBoardSpac({SpaceXData,SaveSpaceXData,spaceselector}) {
debugger;
let storedataaay = spaceselector;
  useInjectReducer({ key: "dashBoardSpac", reducer });
  useInjectSaga({ key: "dashBoardSpac", saga });
    // const [datas, setDatas] = useState({});
    const [data, setData] = useState({datainitial:[],
        dataall:[]});
   // if(storedataaay){
   //     statedata()
   // }


    useEffect(() => {   
        // SpaceXData();
        let fetchDatas = async () => {
            debugger;

            const responses = await fetch(

                `https://api.spaceXdata.com/v3/launches?limit=100`
            );
            debugger;
            const datas = await responses.json();
            debugger
            setData({...data,datainitial: datas,dataall: datas});
            // setData({...data,dataall: data});

        };;

            fetchDatas();
        //     debugger
        //     setData({...data, datainitial: storedataaay, dataall: storedataaay})
        // }
        // setData({...data, datainitial: storedataaay, dataall: storedataaay});
        // const fetchData = async () => {
        //
        //     const response = await fetch(
        //         `https://api.spaceXdata.com/v3/launches?limit=100`
        //     );
        //     const data = await response.json();
        //     setData({...data,datainitial: data,dataall: data});
        //     // setData({...data,dataall: data});
        //
        // };

        // fetchData();

    }, []);




    console.log(data)
    // useEffect(() => {
    //
    //
    //     const fetchData = async () => {
    //
    //         const response = await fetch(
    //             `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true`
    //         );
    //         const data = await response.json();
    //         setData({...data,datainitial: data,dataall: data});
    //         // setData({...data,dataall: data});
    //
    //     };
    //
    //     fetchData();
    //
    // }, []);
    let filteryear = (e)=>{
        debugger;
        let year = e.target.innerText ;
        let years;
        if(data) {
            years = data.dataall.filter(
                city=> city.launch_year === year);
        }
        setData({...data,datainitial: years});
    }
    // let arrayyear = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019']

  return (
    <Card className="maincard">

      <h1>SpaceX Launch Program</h1>
      <Grid container>
          <Grid lg={2} md={6} sm={12} container className="aligns">
             <Card className="maincard2">
              <RoiNavBar filteryear = {filteryear}/>
              </Card>
          </Grid>

        <Grid lg={10} md={6} sm={12} container className="col-container">
            <Card className="maincard2">
            <SpacCenterPage data = {data.datainitial}/>
            </Card>
        </Grid>

      </Grid>

    </Card>
  );
}

DashBoardSpac.propTypes = {
  dispatch: PropTypes.func.isRequired,
    SpaceXData: PropTypes.func,
    SaveSpaceXData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  dashBoardSpac: makeSelectDashBoardSpac(),
    spaceselector:makeSelectSpaceXdata()
});

function mapDispatchToProps(dispatch) {
  return {
      SpaceXData : ()=> {
          dispatch(spaceXdata())},
      SaveSpaceXData : (spaceXdatastor)=> {
          dispatch(SavespaceXdata(spaceXdatastor))},

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(DashBoardSpac);
