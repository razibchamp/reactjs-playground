
import { connect } from "react-redux";
import { decrement, increment } from "../Redux/Counter/actions";
import { dcincrement, dcdecrement } from "../Redux/dynamicCounter/actions";


function VariableCounter({ count, increment, decrement }) {

    return (
        <div
            class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div class="text-2xl font-semibold">{count}</div>
            <div class="flex space-x-3">
                <button
                    class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={ () => increment(5)}
                >
                    Increment
                </button>
                <button
                    class="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => decrement(2)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: ownProps.dynamic 
        ? (value) => dispatch(dcincrement(value)) 
        : (value) => dispatch(increment()),
        decrement: ownProps.dynamic 
        ? (value) => dispatch(dcdecrement(value)) 
        : (value) => dispatch(decrement()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);