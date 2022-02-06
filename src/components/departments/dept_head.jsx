import React from "react";

import cse from "../../images/cse.jpg"

export default function DeptHeader() 
{
    return(
        <div className="deptHead">
            <div className="imgsec">
                <img src={cse} alt="cse" />
            </div>
        </div>
    )
}