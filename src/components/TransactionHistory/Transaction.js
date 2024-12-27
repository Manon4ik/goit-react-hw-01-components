import s from '../TransactionHistory/Transaction.module.css'
export default function Transaction({type, amount, currency}) {

    return (
        <tr className={s.item}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
}