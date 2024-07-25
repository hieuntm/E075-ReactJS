const TableRow = ({ item }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.brand}</td>
    </tr>
  );
};

export default TableRow;
