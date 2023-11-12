import Lottie from "react-lottie";
import { PropTypes } from 'prop-types';

const Loader = ({name, wh}) => {

    const defaultOptions = (e) => ( {
        loop: true,
        autoplay: true, 
        animationData: e,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      })


    return (
        <Lottie options={defaultOptions(name)}
                height={wh}
                width={wh}/>
    );
};

Loader.propTypes = {
    name: PropTypes.node,
    wh: PropTypes.number
}

export default Loader;