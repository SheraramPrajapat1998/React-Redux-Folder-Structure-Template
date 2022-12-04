import { applyMiddleware } from "redux";

// Logger with default options
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = applyMiddleware(logger, thunk);
export default middleware;
