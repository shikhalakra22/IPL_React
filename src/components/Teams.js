import React, {useState} from 'react'
import Header from '../components/Header'
import { makeStyles } from '@material-ui/core/styles'
import MI from '../img/mi.png'
import CSK from '../img/chennai.png'
import KXIP from '../img/kxip.png'
import KKR from '../img/kkr.png'
import DD from '../img/dd.png'
import RR from '../img/rr.png'
import RSPG from '../img/rspg.png'
import SSR from '../img/ssr.png'
import Avatar from '@material-ui/core/Avatar'
import ReactCardFlip from 'react-card-flip'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    position:{
          height:'80px',
          width:'80px',
        },
    position1:{
            marginTop:10,
            height:'60px',
            width:'60px',
        },
      

}));



function Content() {
    const classes = useStyles();
    const [isFlipped, setFlipped] = useState(false)
    const [isFlipped1, setFlipped1] = useState(false)
    const [isFlipped2, setFlipped2] = useState(false)
    const [isFlipped3, setFlipped3] = useState(false)
    const [isFlipped4, setFlipped4] = useState(false)
    const [isFlipped5, setFlipped5] = useState(false)
    const [isFlipped6, setFlipped6] = useState(false)
    const [isFlipped7, setFlipped7] = useState(false)

    const handleClick = (props) => {
        if(props === "0"){
            setFlipped(!isFlipped)
        }
        if(props === "1"){
            setFlipped1(!isFlipped1)
        }
        if(props === "2"){
            setFlipped2(!isFlipped2)
        }
        if(props === "3"){
            setFlipped3(!isFlipped3)
        }
        if(props === "4"){
            setFlipped4(!isFlipped4)
        }
        if(props === "5"){
            setFlipped5(!isFlipped5)
        }
        if(props === "6"){
            setFlipped6(!isFlipped6)
        }
        if(props === "7"){
            setFlipped7(!isFlipped7)
        }
       
    } 

    return (
        <>
        <Header title="teams"/>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
            {/* Main content */}
            <section className="content">
            <div className="container-fluid">
                {/* Small boxes (Stat box) */}
                <div className="row pt-2">
                <div className="col-lg-3 col-6">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div>
                 {/* small box */}
                 <div className="small-box p-2" onMouseEnter={() => handleClick("0")}   style={{backgroundColor:"#2979ff", color:"#fff"}}>
                    <div className="inner">
                        <h3>MI</h3>
                        <p>Mumbai Indians</p>
                    </div>
                    <div class="icon">
                        <i><Avatar alt="MI_Logo" className={classes.position} src={MI} /></i>
                    </div>
                </div>
               
                </div>
        
                <div>
                 {/* small box */}
                 <div className="small-box "  onMouseLeave={() => handleClick("0")} style={{backgroundColor:"#2979ff", color:"#fff"}}>
                    <div className="inner">
                    <Typography variant="h5" align="center" component="h2" gutterBottom>
                        Wining Rate : 57.75 %
                    </Typography>
                    <Typography variant="subtitle2" align="center" component="h2" gutterBottom>
                        No of Trophies Owned 
                    </Typography>
                    <Typography variant="h4" align="center" component="h2" gutterBottom>
                        4
                    </Typography>
                    </div>
                </div>
                </div>
                </ReactCardFlip>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
                <div>
                 {/* small box */}
                 <div className="small-box p-2 bg-warning" onMouseEnter={() => handleClick("1")}>
                    <div className="inner">
                        <h3>CSK</h3>
                        <p>Chennai Super King</p>
                    </div>
                    <div class="icon">
                        <i><Avatar alt="MI_Logo" className={classes.position} src={CSK} /></i>
                    </div>
                </div>
               
                </div>
        
                <div>
                 {/* small box */}
                 <div className="small-box bg-warning "  onMouseLeave={() => handleClick("1")}>
                    <div className="inner">
                    <Typography variant="h5" align="center" component="h2" gutterBottom>
                        Wining Rate : 61.21 %
                    </Typography>
                    <Typography variant="subtitle2" align="center" component="h2" gutterBottom>
                        No of Trophies Owned 
                    </Typography>
                    <Typography variant="h4" align="center" component="h2" gutterBottom>
                        3
                    </Typography>
                    </div>
                </div>
                </div>
                </ReactCardFlip>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
                <div>
                 {/* small box */}
                 <div className="small-box p-2 bg-danger" onMouseEnter={() => handleClick("2")}>
                    <div className="inner">
                        <h3>KXIP</h3>
                        <p>Kings XI Punjab</p>
                    </div>
                    <div class="icon">
                        <i><Avatar alt="MI_Logo" variant="rounded" className={classes.position} src={KXIP} /></i>
                    </div>
                </div>
               
                </div>
        
                <div>
                 {/* small box */}
                 <div className="small-box bg-danger "  onMouseLeave={() => handleClick("2")}>
                    <div className="inner">
                    <Typography variant="h5" align="center" component="h2" gutterBottom>
                        Wining Rate : 46.02 %
                    </Typography>
                    <Typography variant="subtitle2" align="center" component="h2" gutterBottom>
                        No of Trophies Owned 
                    </Typography>
                    <Typography variant="h4" align="center" component="h2" gutterBottom>
                        1
                    </Typography>
                    </div>
                </div>
                </div>
                </ReactCardFlip>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
                <div>
                 {/* small box */}
                 <div className="small-box p-2 " onMouseEnter={() => handleClick("3")} style={{backgroundColor:"#be2edd", color:"#fff"}}>
                    <div className="inner">
                        <h3>RSPG</h3>
                        <p>Rising Pune Super Giant</p>
                    </div>
                    <div class="icon">
                        <i><Avatar alt="MI_Logo" variant="rounded" className={classes.position} src={RSPG} /></i>
                    </div>
                </div>
               
                </div>
        
                <div>
                 {/* small box */}
                 <div className="small-box  " onMouseLeave={() => handleClick("3")} style={{backgroundColor:"#be2edd", color:"#fff"}}>
                    <div className="inner">
                    <Typography variant="h5" align="center" component="h2" gutterBottom>
                        Wining Rate : 50.00 %
                    </Typography>
                    <Typography variant="subtitle2" align="center" component="h2" gutterBottom>
                        No of Trophies Owned 
                    </Typography>
                    <Typography variant="h4" align="center" component="h2" gutterBottom>
                        0
                    </Typography>
                    </div>
                </div>
                </div>
                </ReactCardFlip>
                </div>
                {/* ./col */}
                </div>
                
                <div className="row p-1">
                <div className="col-md-12">
                    {/* AREA CHART */}
                    <div className="card bg-light">
                    <div className="card-header">
                        <h5 className="card-title" style={{fontFamily:"sans-serif", letterSpacing:1, fontWeight:"bold"}}>Franchise Of IPL - Year by Year</h5>
                        <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                        </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart">
                        <canvas id="areaChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
                        </div>
                    </div>
                    {/* /.card-body */}
                    </div>
                </div>
                {/* /.col (RIGHT) */}
                </div>
                {/* /.row */}
                <div className="row p-1">
                <div className="col-lg-3 col-6">
                <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
                <div>
                 {/* small box */}
                 <div className="small-box p-2 " onMouseEnter={() => handleClick("4")} style={{backgroundColor:"#000", color:"#fff"}}>
                    <div className="inner">
                        <h3>SHR</h3>
                        <p>Sunrisers Hyderabad</p>
                    </div>
                    <div class="icon">
                        <i><Avatar alt="MI_Logo" className={classes.position} src={SSR} /></i>
                    </div>
                </div>
               
                </div>
        
                <div>
                 {/* small box */}
                 <div className="small-box  " onMouseLeave={() => handleClick("4")} style={{backgroundColor:"#000", color:"#fff"}}>
                    <div className="inner">
                    <Typography variant="h5" align="center" component="h2" gutterBottom>
                        Wining Rate : 53.70 %
                    </Typography>
                    <Typography variant="subtitle2" align="center" component="h2" gutterBottom>
                        No of Trophies Owned 
                    </Typography>
                    <Typography variant="h4" align="center" component="h2" gutterBottom>
                        1
                    </Typography>
                    </div>
                </div>
                </div>
                </ReactCardFlip>
                </div>
                {/* ./col */}
               <div className="col-lg-3 col-6">
                <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal">
                <div>
                 {/* small box */}
                 <div className="small-box p-2 " onMouseEnter={() => handleClick("5")}  style={{backgroundColor:"#341f97", color:"#fff"}}>
                    <div className="inner">
                        <h3>KKR</h3>
                        <p>Kolkata Knight Rider</p>
                    </div>
                    <div class="icon">
                        <i><Avatar alt="MI_Logo" variant="rounded" className={classes.position} src={KKR} /></i>
                    </div>
                </div>
               
                </div>
        
                <div>
                 {/* small box */}
                 <div className="small-box  " onMouseLeave={() => handleClick("5")}  style={{backgroundColor:"#341f97", color:"#fff"}}>
                    <div className="inner">
                    <Typography variant="h5" align="center" component="h2" gutterBottom>
                        Wining Rate : 52.52 %
                    </Typography>
                    <Typography variant="subtitle2" align="center" component="h2" gutterBottom>
                        No of Trophies Owned 
                    </Typography>
                    <Typography variant="h4" align="center" component="h2" gutterBottom>
                        2
                    </Typography>
                    </div>
                </div>
                </div>
                </ReactCardFlip>
                </div>
                {/* ./col */}
               <div className="col-lg-3 col-6">
                <ReactCardFlip isFlipped={isFlipped6} flipDirection="horizontal">
                <div>
                 {/* small box */}
                 <div className="small-box p-2 " onMouseEnter={() => handleClick("6")}  style={{backgroundColor:"#3867d6",color:"#fff"}} >
                    <div className="inner">
                        <h3>DDR</h3>
                        <p>Delhi Daredavils</p>
                    </div>
                    <div class="icon">
                        <i><Avatar alt="MI_Logo" className={classes.position} src={DD} /></i>
                    </div>
                </div>
               
                </div>
        
                <div>
                 {/* small box */}
                 <div className="small-box  " onMouseLeave={() => handleClick("6")} style={{backgroundColor:"#3867d6",color:"#fff"}}>
                    <div className="inner">
                    <Typography variant="h5" align="center" component="h2" gutterBottom>
                        Wining Rate : 44.00 %
                    </Typography>
                    <Typography variant="subtitle2" align="center" component="h2" gutterBottom>
                        No of Trophies Owned 
                    </Typography>
                    <Typography variant="h4" align="center" component="h2" gutterBottom>
                        0
                    </Typography>
                    </div>
                </div>
                </div>
                </ReactCardFlip>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                <ReactCardFlip isFlipped={isFlipped7} flipDirection="horizontal">
                <div>
                 {/* small box */}
                 <div className="small-box p-2 " onMouseEnter={() => handleClick("7")}  style={{backgroundColor:"#f7b731"}}   >
                    <div className="inner">
                        <h3>RR</h3>
                        <p>Rajasthan Royals</p>
                    </div>
                    <div class="icon">
                        <i><Avatar alt="MI_Logo" className={classes.position} src={RR} /></i>
                    </div>
                </div>
               
                </div>
        
                <div>
                 {/* small box */}
                 <div className="small-box  " onMouseLeave={() => handleClick("7")} style={{backgroundColor:"#f7b731"}} >
                    <div className="inner">
                    <Typography variant="h5" align="center" component="h2" gutterBottom>
                        Wining Rate : 51.37 %
                    </Typography>
                    <Typography variant="subtitle2" align="center" component="h2" gutterBottom>
                        No of Trophies Owned 
                    </Typography>
                    <Typography variant="h4" align="center" component="h2" gutterBottom>
                        1
                    </Typography>
                    </div>
                </div>
                </div>
                </ReactCardFlip>
                </div>
                {/* ./col */}
                </div>
                {/* /.row */}

            </div>
            {/* /.container-fluid */}
            </section>
            {/* /.content */}
            </div>
           </>
    
    )
}

export default Content
