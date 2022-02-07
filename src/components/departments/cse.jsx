import React from "react"
import './cse.css'
import Hod from "./hod"

import Testimonial from "./testimonial"
import DeptHeader from "./dept_head"
import Faculty from "./faculty"
import Gallery from "./gallery"
export default function Cse(){

    return (
        <>
        <DeptHeader />
        <Hod />
        <Faculty />
        <div className="gallery_dept">
        <Gallery/>
        <Gallery/>
        <Gallery/>

        </div>
        <Testimonial />
        </>
    )
}