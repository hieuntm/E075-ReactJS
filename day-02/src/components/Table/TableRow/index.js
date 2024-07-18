import TableCell from "../TableCell";

const TableRow = ({rows}) => {

    // rows = 3;
    const arr = [];
    for(let i = 0; i < rows; i++){
        arr.push(<TableCell key={i+3}/>);
    }
    return (
        <tr>
            {arr.map(item => item)}
        </tr>
    )
}

export default TableRow;