import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Logout from "../screens/Logout";

import "react-toastify/dist/ReactToastify.css";

import Modal from "react-bootstrap/Modal";

function AdminHeader() {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // Update the document title using the browser API
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      "https://payroll-fastify.herokuapp.com/api/companyEmployee/" +
        localStorage.getItem("company_id"),
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.employee);
        console.log("searchemployee", data.employee);
      });
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  function Search(emp_name) {
    console.log("namw", emp_name);
  }

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = data.filter(function (item) {
        //console.log("loggg", item.employeeName);
        const itemData = item.employeeName
          ? item.employeeName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setEmployee(newData);
      //setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setEmployee("");
      setSearch(text);
    }
  };

  const renderSearchResults = () => {
    if (employee.length) {
      return (
        <div>
          {employee.map((result) => {
            return (
              <div style={{ flexDirection: "column" }}>
                <h6>
                  <b>Employee Name</b>:&nbsp;{result.employeeName} &nbsp;{" "}
                  <b>Work Mail</b>:&nbsp;
                  {result.employeeEmail}&nbsp; <b>Role</b>:&nbsp;
                  {result.role}&nbsp; <b>Salary</b>:&nbsp;
                  {result.salary}
                </h6>
              </div>
            );
          })}
        </div>
      );
    }
  };
  return (
    <div id="main">
      <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <AdminNavbar className="navbar-brand" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse right navbar-collapse d-flex justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Employee"
                  //aria-label="Search"
                  // className="btn-close"
                  // data-bs-dismiss="modal"
                  onClick={() => handleShow()}
                  // onChange={() => handleShow()}
                />
              </li>
              <li>
                {/* &nbsp;
                <button
                  className="btn btn-outline-success"
                  onClick={() => Search(name)}
                >
                  Search
                </button> */}
              </li>
              <li className="company_name me-2 ">
              
              <img
                                src={process.env.PUBLIC_URL + "/images/codingmart.png"}
                                width="160"
                                height="40"
                            />&nbsp;{" "}
                
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Settings
                  </button>
                  <ul className="dropdown-menu">
                    <li className="settings">
                      <Link className="dropdown-item settings" to="/">
                        Organization Profile
                      </Link>
                    </li>
                    
                    <li className="settings">
                      <hr />
                    </li>
                    <li>
                      <Link className="dropdown-item settings" to="/updatepassword">
                        Update Password
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link className="dropdown-item settings" to="/">
                        Work Location
                      </Link>
                    </li>
                    <li>
                      <hr />
                    </li>
                    <li className="settings">
                      <Link className="dropdown-item settings" to="/">
                        Pay Schedule
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Logout />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Employee"
              aria-label="Search"
              // className="btn-close"
              // data-bs-dismiss="modal"
              onChange={(event) => searchFilterFunction(event.target.value)}
              //onClear={(event) => searchFilterFunction("")}
              onClear={(text) => searchFilterFunction("")}
              value={search}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderSearchResults()}</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AdminHeader;
