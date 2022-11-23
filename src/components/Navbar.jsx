import React from 'react'; 
import Heading from './Heading.jsx'
import {CBreadcrumb, CBreadcrumbItem} from '@coreui/react';
import {CNavbar, CNavbarBrand, CNavbarNav, CNavbarText, CNavbarToggler} from '@coreui/react'; 
import {Link} from 'react-router-dom';
import "../App.css"; /*Forgot to import App.css before. Try bread crumb again with this?*/
import "./breadcrumb.scss"; 

export default function Navbar(){
/*Remember to add actual links for navlink tags*/

const core = {

  '--breadcrumb-active-color': "white",
}

  return(

     <CBreadcrumb>

        <CBreadcrumbItem style={core} href = "/">Money</CBreadcrumbItem>
        <CBreadcrumbItem active>Patients</CBreadcrumbItem>
        <CBreadcrumbItem active>The Future</CBreadcrumbItem>
    </CBreadcrumb>
    

  );
  
}

