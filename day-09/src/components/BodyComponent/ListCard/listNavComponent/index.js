import NavComponent from "./NavComponent/NavComponent";

const ListNavComponent = () => {
    return (
        <>
            <NavComponent titleNav="Laptop" href="#laptop"></NavComponent>
            <NavComponent titleNav="Phone" href="#phone"></NavComponent>
            <NavComponent titleNav="Watch" href="#watch"></NavComponent>
            <NavComponent titleNav="Headphone" href="#headphone"></NavComponent>
            <NavComponent titleNav="Xem tất cả" href="#" style={{color: "blue"}}></NavComponent>
        </>
    )
}
export default ListNavComponent;