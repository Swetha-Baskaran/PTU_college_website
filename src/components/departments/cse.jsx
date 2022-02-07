import React from "react"
import './cse.css'
import NewsPTU from "../home/news/newsPTU"
import AboutDept from "./about"

import Testimonial from "./testimonial"
import DeptHeader from "./dept_head"
import Faculty from "./faculty"
import HodCard from "./hod_card"
// import Gallery from "./gallery"
export default function Cse(){

    return (
        <>
        <DeptHeader />
        <HodCard />
        <AboutDept />
        <NewsPTU />
        <Faculty />
        <div className="gallery_dept">
        {/* <Gallery/> */}
        {/* <Gallery/>
        <Gallery/> */}
         
        </div>
        <Testimonial />
        </>
    )
}