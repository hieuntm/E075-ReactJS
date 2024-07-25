import { Fragment } from "react";
import ChauComponent from "./ChauComponent";
import ConComponent from "./ConComponent";
import Input from "./Input";

const ChaComponent = () => {
    return(
    <>
        <div>Day la Cha</div>
        <div>Day la Cha</div>
        <ConComponent content="So 1" age="18"></ConComponent>
        <ConComponent content="So 2"></ConComponent>
        <ChauComponent className={"hihihi"}>Day la chau</ChauComponent>
        <Input label="hehe" value="12" type="text" hohoho="delete"></Input>
    </>
    )
}

export default ChaComponent;