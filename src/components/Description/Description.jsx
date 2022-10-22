import React from 'react'
import { DescriptionData } from '../../Data/Data'
import './Description.css'

function Description() {
  return (
    <div className="Description">
        <h3>Description</h3>
        {DescriptionData.map((desc) =>{
            return(
                <div className="desc">
                    <div className="courses">
                        <div style={{marginBottom: '0.5rem'}}>
                            <span>{desc.courseName}</span>
                            <span> {desc.desc}</span>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Description