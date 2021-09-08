// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
// import {Link} from 'react-router-dom'
// function AdminNavbar()
// {
//     function openNav() 
//     {
//         document.getElementById("main").style.marginLeft = "250px";
//         document.getElementById("mySidenav").style.width = "250px";
//         document.getElementById("mySidenav").style.display = "block";
//     }
//     function closeNav() 
//     {
//         document.getElementById("main").style.marginLeft = "0%";
//         document.getElementById("mySidenav").style.display = "none";
//     }
//     return (
//         <div style={{marginTop:"1%",marginLeft:"1%"}} id="main">
//             <div id="mySidenav" className="sidenav" style={{backgroundColor:"#03045e",color:"white"}}>
//                 <a className="closebtn" onClick={() => closeNav()} ><i className="far fa-times-circle"></i></a>
//                 <Link to="/home" >Home</Link>
//                 <Link to="/employee" >Employee</Link>
//                 <Link to="/payrun" >Pay run</Link>
//                 <Link to="/reimbursements">Reimbursements</Link>
                
//                 <Link to="/reports" >Reports</Link>
//                 <Link to="/support" >Contact Support</Link>
//             </div>
//             <button className="btn btn-primary" onClick={() => openNav()}><i className="fa fa-bars"></i></button>
//         </div>
//     )
// }
// export default AdminNavbar;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import DomainIcon from "@material-ui/icons/Domain";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import HttpsIcon from "@material-ui/icons/Https";
import LanguageIcon from "@material-ui/icons/Language";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import PaymentIcon from "@material-ui/icons/Payment";
import InsertChartOutlinedOutlinedIcon from "@material-ui/icons/InsertChartOutlinedOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ClearIcon from "@material-ui/icons/Clear";
function AdminNavbar() {
  function openNav() {
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.display = "block";
  }
  function closeNav() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidenav").style.display = "none";
  }
  return (
    <div style={{ marginTop: "1%", marginLeft: "1%" }} id="main">
      <div
        id="mySidenav"
        className="sidenav"
        style={{ backgroundColor: "#001933", color: "white" }}
      >
        <h1 style={{ fontSize: 28, fontWeight: 600, marginTop: "-50px" }}>
          {"  "}
          <img
            src={process.env.PUBLIC_URL + "/images/codingmart.png"}
            width="180"
            height="50"
          />
          &nbsp;&nbsp;
          <button
            onClick={() => closeNav()}
            style={{
              backgroundColor: "#001933",
              height: "45px",
              width: "50px",
              color: "white",
            }}
          >
            <ClearIcon />
          </button>
        </h1>

        <h3>
          <Link to="/home" style={{ fontSize: "20px", marginTop: "30px" }}>
            <HomeOutlinedIcon />
            &nbsp;&nbsp;Home
          </Link>
        </h3>

        <h3>
          <Link to="/employee" style={{ fontSize: "20px", marginTop: "30px" }}>
            <PermIdentityIcon />
            &nbsp;&nbsp; Employee
          </Link>
        </h3>
        <h3>
          <Link to="/payrun" style={{ fontSize: "20px", marginTop: "30px" }}>
            <PaymentIcon />
            &nbsp;&nbsp; Pay Runs
          </Link>
        </h3>

        <a
          data-bs-toggle="collapse"
          href="#collapse"
          role="button"
          aria-expanded="false"
          aria-controls="collapse"
          style={{ fontSize: "20px", marginTop: "30px" }}
        >
          <CheckBoxOutlinedIcon />
          &nbsp;&nbsp; Approvals
        </a>
        <div className="collapse" id="collapse">
          <div
            className="card card-body"
            style={{ backgroundColor: "#001933" }}
          >
            <ul>
              <li className="small">
                <Link to="/reimbursements" className="small">
                  Reimbursements
                </Link>
              </li>
              <li className="small">
                <Link to="/salary-revision" className="small">
                  Salary Revision
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <h3>
          <Link to="/reports" style={{ fontSize: "20px", marginTop: "30px" }}>
            <InsertChartOutlinedOutlinedIcon />
            &nbsp;&nbsp; Reports
          </Link>
        </h3>
        <hr></hr>
        <h3>
          <Link
            to="/support"
            style={{
              fontSize: "20px",
              marginTop: "30px",
            }}
          >
            <PermIdentityIcon />
            &nbsp;&nbsp; Contact Support
          </Link>
        </h3>
      </div>
      <button className="btn btn-primary" onClick={() => openNav()}>
        <i className="fa fa-bars"></i>
      </button>
    </div>
  );
}
export default AdminNavbar;
