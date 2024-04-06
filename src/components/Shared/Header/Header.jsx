
import logo from '../..//../assets/logo.png'
import moment from "moment";
const Header = () => {
    return (
        <div className="px-20">
            <div className="text-center">
            <img src={logo} alt="" className="mx-auto"/>
            <h3 className="text-[rgb(112,111,111)] text-lg mt-5 mb-3">Journalism Without Fear or Favour</h3>
            <h3 className="text-[rgb(64,63,63)] text-xl">{moment().format('dddd,MMM D,YYYY')}</h3>
            </div>
        </div>
    );
};

export default Header;