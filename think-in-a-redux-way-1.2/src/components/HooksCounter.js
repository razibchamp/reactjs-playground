
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Counter/actions";

function HooksCounter() {
    const count = useSelector( (state) => state.counter.value );
    const dispatch = useDispatch();

    const incrementHandler = (value) => {
        dispatch(increment(value));
    }

    const decrementHandler = (value) => {
        dispatch(decrement(value));
    }

    return (
        <div
            class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div class="text-2xl font-semibold">{count}</div>
            <div class="flex space-x-3">
                <button
                    class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={ () => incrementHandler(5)}
                >
                    Increment
                </button>
                <button
                    class="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => decrementHandler(2) }
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default HooksCounter;

