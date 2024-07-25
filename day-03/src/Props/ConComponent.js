//Cách 1: Sử dụng props đón giá trị
    // Có thể dùng props để thao tác, ví dụ: props.content, props.age
    // Có thể dùng detructuring: const {content, age} = props

// const ConComponent = (props) => {
//     const {content, age} = props;
//     return <>
//         <div>{content} - {age}</div>
//     </>
// }

// export default ConComponent;


//Cách 2: Sử dụng rest đón giá trị của từng property

const ConComponent = ({content, age}) => {
    return <>
        <div>{content} - {age}</div>
    </>
}


export default ConComponent;