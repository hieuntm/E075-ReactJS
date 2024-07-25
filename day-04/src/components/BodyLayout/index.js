import TableRow from "./TableRow";

const BodyLayout = ({ items }) => {
  return (
    <table>
      {items.map((item) => {
        return <TableRow item={item} />;
      })}
    </table>
  );
};

export default BodyLayout;
