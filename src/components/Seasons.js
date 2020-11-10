import React from 'react'
import Header from '../components/Header'
import MI from '../img/mi.png'
import CSK from '../img/chennai.png'
import KKR from '../img/kkr.png'
import DD from '../img/dd.png'
import RR from '../img/rr.png'
import SSR from '../img/ssr.png'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(theme => ({
    position:{
          height:'50px',
          width:'50px',
        },
    size:{
        height: 170, 
        width: '100%'
    },
}));


function Content1() {



    const classes = useStyles();
    return (
        <>
        <Header title="seasons"/>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
        {/* Main content */}
        <section className="content p-2">
            <div className="container-fluid">
            {/* Info boxes */}
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                <div className="info-box">
                    <span className="info-box-icon bg-warning elevation-1" ><Avatar alt="MI_Logo" className={classes.position} src={CSK} /></span>
                    <div className="info-box-content">
                    <span className="info-box-text">Matches</span>
                    <span className="info-box-number">165</span>
                    </div>
                    {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                </div>
                {/* /.col */}
                <div className="col-12 col-sm-6  col-md-3 col-lg-2">
                <div className="info-box mb-3">
                    <span className="info-box-icon elevation-1" style={{backgroundColor:"#2979ff"}}><Avatar alt="MI_Logo" className={classes.position} src={MI} /></span>
                    <div className="info-box-content">
                    <span className="info-box-text">Matches</span>
                    <span className="info-box-number">187</span>
                    </div>
                    {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                </div>
                {/* /.col */}
                {/* fix for small devices only */}
                <div className="clearfix hidden-md-up" />
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                <div className="info-box mb-3">
                    <span className="info-box-icon elevation-1" style={{backgroundColor:"#3867d6"}}><Avatar alt="MI_Logo" className={classes.position} src={DD} /></span>
                    <div className="info-box-content">
                    <span className="info-box-text">Matches</span>
                    <span className="info-box-number">177</span>
                    </div>
                    {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                </div>
                {/* /.col */}
                
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                <div className="info-box mb-3">
                    <span className="info-box-icon elevation-1"  style={{backgroundColor:"#f7b731"}}><Avatar alt="MI_Logo" className={classes.position} src={RR} /></span>
                    <div className="info-box-content">
                    <span className="info-box-text">Matches</span>
                    <span className="info-box-number">147</span>
                    </div>
                    {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                </div>
                {/* /.col */}
                <div className="col-12 col-sm-6  col-md-3 col-lg-2">
                <div className="info-box mb-3">
                    <span className="info-box-icon elevation-1" style={{backgroundColor:"#000"}}><Avatar alt="MI_Logo" className={classes.position1} src={SSR} /></span>
                    <div className="info-box-content">
                    <span className="info-box-text">Matches</span>
                    <span className="info-box-number">108</span>
                    </div>
                    {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                </div>
                {/* /.col */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                <div className="info-box">
                    <span className="info-box-icon elevation-1"  style={{backgroundColor:"#341f97"}}><Avatar alt="MI_Logo" className={classes.position1} src={KKR} /></span>
                    <div className="info-box-content">
                    <span className="info-box-text">Matches</span>
                    <span className="info-box-number">178</span>
                    </div>
                    {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                </div>
            </div>
            </div>
            {/*/. container-fluid */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 p-1">
                    <div className="card bg-dark">
                    <div className="card-header border-0">
                        <h3 className="card-title">Visitors in IPL</h3>
                        <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                        </button>
                        </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                        <div className="row">
                        <div className="col-md-8">
                            <div className="chart-responsive">
                            <canvas id="donutChart" height={180} />
                            </div>
                            {/* ./chart-responsive */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-4">
                            <ul className="chart-legend clearfix">
                            <li><i className="far fa-circle text-danger" /> India</li>
                            <li><i className="far fa-circle text-success" /> Out of India</li>
                            <li><i className="far fa-circle text-warning" /> Promotion Partners</li>
                            <li><i className="far fa-circle text-info" /> Celebreties</li>
                            <li><i className="far fa-circle text-primary" /> Businessman</li>
                            </ul>
                        </div>
                        {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.card-body */}
                    </div>
                    {/* /.card */}
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 p-1">
                    {/* Map card */}
                    <div className="card bg-gradient-primary m-1 center">
                    <div className="card-header border-0">
                        <h3 className="card-title">
                        <i className="fas fa-map-marker-alt mr-2" />
                        Visitors
                        </h3>
                        {/* card tools */}
                        <div className="card-tools">
                        <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                            <i className="fas fa-minus" />
                        </button>
                        </div>
                        {/* /.card-tools */}
                    </div>
                    <div className="card-body">
                        <div id="world-map" className={classes.size} />
                    </div>
                    {/* /.card-body*/}
                    </div>
                    {/* /.card */}
                    </div>
                </div>
            </div>
            {/* BAR CHART */}
            <div className="card">
            <h3 className="card-title  p-3 ml-3" style={{fontFamily:"sans-serif", letterSpacing:1, fontWeight:"bold"}}>Trends of Season - IPL</h3>
           <div className="card-body">
                <div className="chart">
                <canvas id="barChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
                </div>
            </div>
            {/* /.card-body */}
            </div>
            {/* /.card */}

        </section>
        {/* /.content */}
        </div>
        {/* /.content-wrapper */}
        </>
    )
}

export default Content1
