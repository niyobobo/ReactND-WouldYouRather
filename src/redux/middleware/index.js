import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk];

// Set condition to use logger middleware on in production
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export default applyMiddleware(...middleware);