import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "25px",
    display: 'flex',
    justifyContent: "center",
    fontFamily: 'sans-serif',
    marginTop: 8,
    color:"#fff",
    textTransform:"uppercase"
  },
}));


function Header({title}) {
    const classes = useStyles();

    return (
        <>
       <nav className="main-header navbar navbar-expand navbar-dark navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
            <li className="nav-item">
            <a href="/#" className="nav-link" data-widget="pushmenu"><i className="fas fa-bars" /></a>
            </li>
        </ul>
    <h5 className={classes.root}>{title}</h5>
        </nav>
        </>
    )
}

export default Header
