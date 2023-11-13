import { Helmet } from "react-helmet";
import { PropTypes } from "prop-types";

const Helmattitle = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};
Helmattitle.propTypes = {
  title: PropTypes.node,
};
export default Helmattitle;
