import { Link } from "react-router-dom";
import stars from '../../assets/Group 48095421.svg';
import { MdRemoveRedEye } from "react-icons/md";
import PropTypes from 'prop-types';
const News = ({anews}) => {
    // console.log(anews);
    // const {rating,title,image_url,details} = anews;
    return (
        <div className="mb-6 space-y-5">
            <h3>{anews.title}</h3>
            <img src={anews.image_url} alt="" />
            {
                anews.details.length > 200 ? <p>{anews.details.slice(0,200)}</p>  :
            <p>{anews.details}</p>
            }
            <Link to={`/news/${anews._id}`} className="text-blue-500 font-semibold">Read More</Link>
            <hr />
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src={stars} alt="" />
                    <p>{anews.rating.number}</p>
                </div>
                <div className="flex items-center gap-2">
                    <MdRemoveRedEye></MdRemoveRedEye>
                    <p>{anews.total_view}</p>
                </div>
            </div>
            <hr />
        </div>
    );
};

News.propTypes = {
    anews: PropTypes.object
}
export default News;