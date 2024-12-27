import PropTypes from "prop-types";
import s from '../TransactionHistory/TransactionHistory.module.css'
import Transaction from "./Transaction"
export default function TransactionHistory({items}) {
    //console.log(items);

    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <Transaction
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                    />
                    
                ))}
            </tbody>
        </table>
    );
}