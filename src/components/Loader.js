import { WEATHER_IMG } from "../utils/preferences";
const Loader = () => {
    return(
        <div className="cloud-loader d-flex justify-content-center align-items-center">
            <img src={WEATHER_IMG} className="cloud" />
        </div>
    );
}

export default Loader;