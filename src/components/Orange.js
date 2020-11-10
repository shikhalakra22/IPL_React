import React from 'react'
import Header from '../components/Header'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import ABD from '../img/abd.jpg'
import SM from '../img/sm.jpg'
import ST from '../img/dt.jpg'
import KW from '../img/kw.jpg'
import RU from '../img/ru.jpg'
import MH from '../img/mh.jpg'


const useStyles = makeStyles(theme => ({
    position:{
          height:'120px',
          width:'120px',
          elevation:2
        },
    [theme.breakpoints.down("md")]:{
            position:{
                marginTop:30,
                height:'50px',
                width:'50px',
            }
        }
        
}));

function Orange() {
    const classes = useStyles();
    return (
        <>
       
          <Header title="orange cap player"/>  
          {/* Content Wrapper. Contains page content */}
         <div className="content-wrapper ">
            {/* Main content */}
            <section className="content p-3">
            <div className="container-fluid">
            <div className="row p-2 ">
            <div className="col-md-4">
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user  elevation-3">
                    {/* Add the bg color to the header using any of the bg-* classes */}
                    <div className="widget-user-header bg-danger">
                        <h3 className="widget-user-username text-left">AB De Villiers</h3>
                        <h4 className="widget-user-title text-left">RCB</h4>
                        <h3 className="widget-user-desc text-left">Total Runs: 733 </h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70}} >
                        <Avatar className={classes.position} src={ABD} alt="User Avatar" />
                    </div>
                    <div className="card-footer bg-dark p-5">
                        
                    </div>
                    </div>
                    {/* /.widget-user */}
                </div>
            {/* /.col */}
            <div className="col-md-4">
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user elevation-3">
                    {/* Add the bg color to the header using any of the bg-* classes */}
                    <div className="widget-user-header " style={{backgroundColor:"#2979ff", color:"#fff"}}>
                        <h3 className="widget-user-username text-left">Sachin Tendulkar</h3>
                        <h4 className="widget-user-title text-left">MI</h4>
                        <h3 className="widget-user-desc text-left">Total Runs: 618 </h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70,}} >
                        <Avatar className={classes.position} src={ST} alt="User Avatar" />
                    </div>
                    <div className="card-footer p-5 " >
                        
                    </div>
                    </div>
                    {/* /.widget-user */}
                </div>
            {/* /.col */}
            <div className="col-md-4">
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user elevation-3">
                    {/* Add the bg color to the header using any of the bg-* classes */}
                    <div className="widget-user-header" style={{color:"#fff", backgroundColor:"#f1c40f"}}>
                        <h3 className="widget-user-username text-left">Michael Hussey</h3>
                        <h4 className="widget-user-title text-left">CSK</h4>
                        <h3 className="widget-user-desc text-left">Total Runs: 733 </h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70}} >
                        <Avatar className={classes.position} src={MH} alt="User Avatar" />
                    </div>
                    <div className="card-footer p-5" style={{backgroundColor:"#1a237e"}}>
                        
                    </div>
                    </div>
                    {/* /.widget-user */}
                </div>
                {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row p-2">
            <div className="col-md-4 col-12 col-sm-12" >
              <div class="info-box mb-3 bg-info">
              <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                <div class="info-box-content">
                <span class="info-box-text">No of Runs</span>
                <span class="info-box-number">8143</span>
              </div>
            </div>
            </div>
            <div className="col-md-4 col-12 col-sm-12" >
            <div class="info-box mb-3 bg-success">
              <span class="info-box-icon"><i class="fas fa-tag"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">No of Matches Played </span>
                <span class="info-box-number">154</span>
              </div>
            </div>
            </div>
            <div className="col-md-4 col-12 col-sm-12" >
            <div class="info-box mb-3 bg-warning">
              <span class="info-box-icon"><i class="fas fa-tag"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">Record from</span>
                <span class="info-box-number">2008-2019</span>
              </div>
            </div>
            </div>
            </div>
            {/* /.row */}
            <div className="row p-2 ">
                <div className="col-md-4 p-2">
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user elevation-3"  style={{backgroundColor:"#ff7f50", color:"#fff"}}>
                    {/* Add the bg color to the header using any of the bg-* classes */}
                    <div className="widget-user-header">
                        <h3 className="widget-user-username text-left">Kane Williamsons</h3>
                        <h4 className="widget-user-title text-left">SRH</h4>
                        <h3 className="widget-user-desc text-left">Total Runs:735 </h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70}} >
                        <Avatar className={classes.position} src={KW} alt="User Avatar" />
                    </div>
                    <div className="card-footer p-5" style={{backgroundColor:"#000"}}>
                        
                    </div>
                    </div>
                    {/* /.widget-user */}
                </div>
                {/* /.col */}
                <div className="col-md-4 p-2">
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user elevation-3">
                    {/* Add the bg color to the header using any of the bg-* classes */}
                    <div className="widget-user-header " style={{backgroundColor:"#341f97" , color:"#fff"}}>
                        <h3 className="widget-user-username text-left">Robin Uthappa</h3>
                        <h4 className="widget-user-title text-left">KKR</h4>
                        <h3 className="widget-user-desc text-left">Total Runs: 660 </h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70}} >
                        <Avatar className={classes.position} src={RU} alt="User Avatar" />
                    </div>
                    <div className="card-footer p-5" style={{backgroundColor:"#EAB543"}}>
                        
                    </div>
                    </div>
                    {/* /.widget-user */}
                </div>
                {/* /.col */}
                <div className="col-md-4 p-2">
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user elevation-3">
                    {/* Add the bg color to the header using any of the bg-* classes */}
                    <div className="widget-user-header bg-danger">
                        <h3 className="widget-user-username text-left">Shaun Marsh</h3>
                        <h4 className="widget-user-title text-left">KXIP</h4>
                        <h3 className="widget-user-desc text-left">Total Runs: 616 </h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70}} >
                        <Avatar className={classes.position} src={SM} alt="User Avatar" />
                    </div>
                    <div className="card-footer p-5" style={{backgroundColor:"#bdc3c7"}}>
                        
                    </div>
                    </div>
                    {/* /.widget-user */}
                </div>
            {/* /.col */}
            </div>
            {/* /.row */}
            </div>
            </section>
        </div>
        </>
    )
}

export default Orange
