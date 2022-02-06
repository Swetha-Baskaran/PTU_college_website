import React, { useEffect, useState } from "react";

import { HiOutlineAcademicCap, HiAcademicCap } from '../../../../node_modules/react-icons/hi'
import { MdCastForEducation } from '../../../../node_modules/react-icons/md'

import './style.css'

export default function StudentCount()
{
    let [count, Setcount] = useState(0)

    useEffect(()=>{
            for(let i=0; i<=200; i++){
                if(i===200){
                    Setcount(i)
                }
                else{
                    setTimeout(() => {
                        Setcount(i)
                     }, 2000);
                }
            }
    }, 200)


    return (
        <div class="count-container">

        <h1>
            PTU by the Numbers
        </h1>
        <div class="box">
            {
                ["undetgraduate students", "postgraduate students", "Phd students", "Research scholars", "teaching and non-teaching staffs ", "administrative faculties ", "Award won Projects", "inovations by students"].map((e)=>{
                    return(
                        <>
                        <div class="items" id="">
                            <div class="para">
                              <span className="flex justify-center"><i><HiAcademicCap/></i>&nbsp;{count}+</span>
                              <div className="para-para"><p>{e}</p></div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>

    </div>
    )
}