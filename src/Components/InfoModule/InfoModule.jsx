import { useState } from 'react'
import { Link } from 'react-router-dom'
import './InfoModule.css'

export default function InfoModule() {


    return(
        <section id="info-module">
            <div className="info-nav">
                <Link className="links" to="/about/history"><h1>History</h1></Link>
                <Link className="links" to="/about/experience"><h1>Experience</h1></Link>
                <Link className="links" to="/about/education"><h1>Education</h1></Link>
            </div>
        </section>
    )
}