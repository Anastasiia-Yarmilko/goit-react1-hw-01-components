import React from "react";
// import PropTypes from "prop-types";
import statistacalData from "json/statistacal-data.json";

export const Statistics = ({ title, stats, children}) => {
    return (
        <Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;
    )
    // return (
    //     <section className="statistics">
    //         <h2 className="title">Upload stats</h2>

    //         <ul className="stat-list">
    //             <li className="item" key={id} >
    //                 <span className="label">{label}</span>
    //                 <span className="percentage">{percentage}</span>
    //             </li>
    //         </ul>
    //     </section>
    // );
};
