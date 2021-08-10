import { useSelector } from "react-redux";
import UserComponent from "../components/UserComponent";

const user = () => {
    const userObj = useSelector((state) => state.search.userObj)
    return <UserComponent userObj={userObj}/>;
};

export default user;