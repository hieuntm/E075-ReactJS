// const Footer = (props) => {

//     console.log(props);
//     console.log(props.name, props.phoneNumber)
//     return (
//         <footer>
//             <h1>Hello {props.name}</h1>
//         </footer>
//     )
// }

const Footer = ({name, phoneNumber}) => {
    console.log(name, phoneNumber)
    const abc = 10;
    const abc2 = {
        name:10,
        age: 20
    };

    return (
        <>
            <h4>Hello {name}</h4>
            <h4>My phone: +{phoneNumber}</h4>
            <h4>Lifetime of website: +{abc2.age} years</h4>
        </>
    )
}

export default Footer;