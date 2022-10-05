
import { connect } from "react-redux";
import { decrement, increment } from "../Redux/Counter/actions";


function Counter({ count, increment, decrement }) {

    return (
        <div
            class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div class="text-2xl font-semibold">{count}</div>
            <div class="flex space-x-3">
                <button
                    class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    class="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => { dispatch(increment(value))},
        decrement: (value) => { dispatch(decrement(value))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);