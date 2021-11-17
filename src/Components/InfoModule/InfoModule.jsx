import { useState } from 'react'
import './InfoModule.css'

export default function InfoModule() {

    const [historySel, setHistorySel] = useState(true)
    const [expSel, setExpSel] = useState(false)
    const [edSel, setEdSel] = useState(false)

    return(
        <section id="info-module">
            <div className="info-nav">
                <h1 onClick={(evt) => setHistorySel(prevHistorySel => !prevHistorySel)}>History</h1>
                <h1 onClick={(evt) => setExpSel(prevExpSel => !prevExpSel)}>Experience</h1>
                <h1 onClick={(evt) => setEdSel(prevEdSel => !prevEdSel)}>Education</h1>
            </div>
            { historySel ? 
            <div className="info-details">
                <p>
                    Before joining HMA, Holly served as the director of 
                    addiction medicine with the Los Angeles County
                    Department of Health Services (DHS), Correctional 
                    Health. While there, she was responsible for 
                    directing and leading a team of correctional 
                    healthcare professionals in the delivery of care 
                    for those with SUD including screening, assessment,
                    intervention, and treatment services. She oversaw 
                    the withdrawal management unit and developed and 
                    implemented Medications for Addiction Treatment 
                    (MAT) within the Los Angeles County jail system.
                    </p>
            </div>
            : <div></div> }
            { expSel ? 
            <div className="info-details">
                <p>
                    A skilled collaborator and program manager,
                    she worked with government agencies, state 
                    departments, and other partners to build 
                    coalitions of care and advance programs and 
                    projects. She also acted behalf of the 
                    correctional health director and represented 
                    her agency at various meetings and bodies, 
                    including board of supervisors and staff, 
                    county committees, department leadership, and 
                    other with stakeholders. Prior to her leadership at DHS, Holly served 
                    in the Department of Public Health- Substance
                    Abuse and Prevention Control (SAPC) where she 
                    led a team of public health professionals in 
                    the Adult SAPC. She was responsible for directing, 
                    planning, implementing, and administering public
                    health programs for SUD treatment services. She 
                    also directed efforts to implement evidenced-based
                    and culturally and linguistically appropriate 
                    programs to meet the SUD needs of adult men and 
                    women and address issues related to specific 
                    populations including those in the criminal 
                    justice system, those in homelessness, women, 
                    including pregnant and parenting women, co-occurring 
                    (COD), lesbian, gay, bi-sexual and transgender 
                    (LGBT+) and tri-morbid patients.
                </p>
            </div>
            : <div></div> }
            { edSel ? 
            <div className="info-details">
                <p>
                She earned a Baccalaureate of Arts in psychology 
                from the California State University, Chico, and 
                a Master of Arts from Loyola Marymount University. 
                She is a graduate of the Los Angeles County 
                Executive Leadership Development Program/University 
                of Southern California School of Public Policy, the 
                Los Angeles County Executive Leadership Development 
                Program, Change Leader Academy, and the Addiction 
                Technology Transfer Center Leadership Institute.
                </p>
            </div>
            : <div></div> }
        </section>
    )
}