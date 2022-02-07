import React from "react";

import cse from "../../images/cse.jpg"
import { BiSearchAlt } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

export default function DeptHeader() 
{
    return(
        <div className="deptHead">
            <div className="header">
                <div className="title">
                    <h3>Computer Science Department</h3>
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="Search here"/>
                    <BiSearchAlt className="search_icon"/>
                </div>
            </div>
            <div className="imgsec">
                <img src={cse} alt="cse" />
            </div>
            <div className="navbar_for_dept">
            <p>FACULTY  <AiFillCaretDown/></p>
            <p>SYLLABUS <AiFillCaretDown/></p>
            <p>RESEARCH </p>
            <p>NOTICES </p>
            <p>ABOUT </p>
            </div>
        </div>
    )
}