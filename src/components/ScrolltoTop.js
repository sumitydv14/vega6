import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrolltoTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrolltoTop);

