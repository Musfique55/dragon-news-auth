import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Header/Navbar";
import LeftBar from "../Shared/LeftBar/LeftBar";
import RIghtBar from '../Shared/RightBar/RIghtBar';
import Breaking from "./Breaking";
import News from "../News/News";
const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Breaking></Breaking>
            <Navbar></Navbar>
            <div  className="grid grid-cols-4 gap-6 mx-20">
            <LeftBar></LeftBar>
            <div className="col-span-2 border">
                {   
                    data.map((anews) => {
                        return <News key={anews._id} anews={anews}></News>
                    })
                }
            </div>
            <RIghtBar></RIghtBar>
            </div>
        </div>
    );
};

export default Home;