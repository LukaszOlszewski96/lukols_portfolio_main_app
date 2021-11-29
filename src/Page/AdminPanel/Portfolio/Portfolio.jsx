import React, { Fragment } from 'react'
import './Portfolio.css'
import HeaderPortfolio from '../../../Components/Admin/Header/HeaderPortfolio'
import StatBoxPortfolio from '../../../Components/Admin/TopBar/StatBoxPortfolio'

function Portfolio() {
    return (
        <div className="portfolio-frame">
            <HeaderPortfolio/>
            <StatBoxPortfolio/>
        </div>
    )
}

export default Portfolio
