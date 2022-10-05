import rootReducer from "../Redux/rootReducer";

const myLogger = (store) => (next) => (action) => {
    console.log(`Action ${JSON.stringify(action)}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());

    console.log(`Upcoming state ${JSON.stringify(upcomingState)}`);

    return next(action);

}

export default myLogger;