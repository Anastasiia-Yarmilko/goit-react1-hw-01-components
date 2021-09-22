import React from "react";
import PropTypes from "prop-types";
import css from './index.module.css';

export const TransactionHistory = ({ items }) => (
    <table className={css.transaction_history}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
        {items.map(({id, type, amount, currency}) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
        ))}
        </tbody>
    </table>
);

TransactionHistory.defaultProps = {
    type: "unknown",
    amount: "0",
    currency: "y.o"
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}
