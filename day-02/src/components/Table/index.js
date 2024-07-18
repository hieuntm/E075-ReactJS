import TableRow from "./TableRow"
// state/ useState
const Table = ({type}) => {

    const arr = [];
    for(let i = 0; i < type; i++){
        arr.push(<TableRow key={i-3} rows={type}/>);
    }

    const clickMe = () => {
        alert("ABC just clicked");
    }

    return (
        <>
            <table border={1}>
                {arr.map(item => item)}
            </table>
            <button onClick={clickMe}>Click</button>
        </>
    )
}
export default Table;