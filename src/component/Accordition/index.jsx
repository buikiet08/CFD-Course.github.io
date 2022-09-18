import React from 'react'

function Accordition({date,title,children}) {
    return (
        <div className="accordion">
            <div className="accordion__title">
                <div className="date">Ngày {date}</div>
                <h3>{title}</h3>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default Accordition