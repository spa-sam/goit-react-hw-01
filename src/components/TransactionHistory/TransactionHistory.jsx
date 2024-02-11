import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHeader}>Type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.row}>
            <td className={css.data}>
              <div>{item.type}</div>
            </td>
            <td className={css.data}>{item.amount}</td>
            <td className={css.data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
