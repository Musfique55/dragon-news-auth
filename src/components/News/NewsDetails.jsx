import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Header/Navbar";
import RIghtBAr from "../Shared/RightBar/RIghtBar";

const NewsDetails = () => {
    const {id} = useParams();
    const strId = String(id);
    const news = useLoaderData();
    const details = news.find(anews =>  strId == anews._id);
    console.log(details);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-3 px-20">
            <div className="col-span-2">
            <h3>{details._id}</h3>
            </div>
            <RIghtBAr></RIghtBAr>
            </div>
            
        </div>
    );
};

export default NewsDetails;