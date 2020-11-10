import React from 'react'
import Header from '../components/Header'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import IT from '../img/it.jpg'
import ST from '../img/st.jpg'
import BB from '../img/bb.jpg'
import AT from '../img/at.jpg'
import LM from '../img/lm.jpg'
import MM from '../img/mm.jpg'


const useStyles = makeStyles(theme => ({
    position:{
          height:'120px',
          width:'120px',
          elevation:2
        },
        [theme.breakpoints.down("md")]:{
            position:{
                marginTop:35,
                height:'50px',
                width:'50px',
            }
        }

}));

function Purple() {
    const classes = useStyles();
    return (
        <>
       
          <Header title="purple cap player"/>  
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
                    <div className="widget-user-header" style={{color:"#fff", backgroundColor:"#f1c40f"}}>
                        <h3 className="widget-user-username text-left">Imran Tahir</h3>
                        <h4 className="widget-user-title text-left">CSK</h4>
                        <h3 className="widget-user-desc text-left">Total Wickets: 17 </h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70}} >
                        <Avatar className={classes.position} src={IT} alt="User Avatar" />
                    </div>
                    <div className="card-footer  p-5" style={{backgroundColor:"#1a237e"}}>
                        
                    </div>
                    </div>
                    {/* /.widget-user */}
                </div>
            {/* /.col */}
            <div className="col-md-4">
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user elevation-3">
                    {/* Add the bg color to the header using any of the bg-* classes */}
                    <div className="widget-user-header bg-danger">
                        <h3 className="widget-user-username text-left">Moren Morkel</h3>
                        <h4 className="widget-user-title text-left">DD</h4>
                        <h3 className="widget-user-desc text-left">Total Wickets: 25 </h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70}} >
                        <Avatar className={classes.position} src={MM} alt="User Avatar" />
                    </div>
                    <div className="card-footer p-5" style={{backgroundColor:"#273c75"}}>
                        
                    </div>
                    </div>
                    {/* /.widget-user */}
                </div>
                {/* /.col */}
            <div className="col-md-4">
                    {/* Widget: user widget style 1 */}
                    <div className="card card-widget widget-user elevation-3">
                    {/* Add the bg color to the header using any of the bg-* classes */}
                    <div className="widget-user-header " style={{backgroundColor:"#3867d6", color:"#fff"}}>
                        <h3 className="widget-user-username text-left">Sohail Tanvir</h3>
                        <h4 className="widget-user-title text-left">RR</h4>
                        <h3 className="widget-user-desc text-left">Total Wickets: 11</h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70,}} >
                        <Avatar className={classes.position} src={ST} alt="User Avatar" />
                    </div>
                    <div className="card-footer p-5" style={{backgroundColor:"#fbc531"}}>
                        
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
                <span class="info-box-text">No of Wickets </span>
                <span class="info-box-number">299</span>
              </div>
            </div>
            </div>
            <div className="col-md-4 col-12 col-sm-12" >
            <div class="info-box mb-3 bg-success">
              <span class="info-box-icon"><i class="fas fa-tag"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">No of Matches</span>
                <span class="info-box-number">187</span>
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
                        <h3 className="widget-user-username text-left">Bhuvenashwar Kumar</h3>
                        <h4 className="widget-user-title text-left">SRH</h4>
                        <h3 className="widget-user-desc text-left">Total Wickets: 26 </h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70}} >
                        <Avatar className={classes.position} src={BB} alt="User Avatar" />
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
                    <div className="widget-user-header " style={{backgroundColor:"#2979ff" , color:"#fff"}}>
                        <h3 className="widget-user-username text-left">Latish Malinga </h3>
                        <h4 className="widget-user-title text-left">MI</h4>
                        <h3 className="widget-user-desc text-left">Total wickets: 16 </h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70}} >
                        <Avatar className={classes.position} src={LM} alt="User Avatar" />
                    </div>
                    <div className="card-footer p-5" style={{backgroundColor:"#fff"}}>
                        
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
                        <h3 className="widget-user-username text-left">Andrew Tye</h3>
                        <h4 className="widget-user-title text-left">KXIP</h4>
                        <h3 className="widget-user-desc text-left">Total wickets: 24 </h3>
                    </div>
                    <div className="widget-user-image" style={{marginLeft:70}} >
                        <Avatar className={classes.position} src={AT} alt="User Avatar" />
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

export default Purple
