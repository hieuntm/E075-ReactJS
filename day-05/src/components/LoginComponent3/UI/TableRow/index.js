const TableRow = ({ title, valueInput, handler }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>
        <input value={valueInput} onChange={handler} />
      </td>
    </tr>
  );
};

export default TableRow;
