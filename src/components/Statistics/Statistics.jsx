import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css"

export const Statistics = ({ title, stats, children }) => {
    return (
        <section>
            { title && <h2 className={css.title}>{title}</h2>}
            {children}
            <ul className={css.stat_list}>
                {stats.map(({ id, label, percentage }) => {
                    <li className={css.item} key={id} >
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage} %</span>
                   </li>
                })}
            </ul>
        </section>
    )
}
    
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}