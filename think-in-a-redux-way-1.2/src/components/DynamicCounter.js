
import { useDispatch, useSelector } from "react-redux";
import { dcdecrement } from "../Redux/dynamicCounter/actions";
import { dcincrement } from "../Redux/dynamicCounter/actions";


function DynamicCounter() {
    const count = useSelector( (state) => state.dynamicCounter.value );
    const dispatch = useDispatch();

    const incrementHandler = (value) => {
        dispatch(dcincrement(value));
    }

    const decrementHandler = (value) => {
        dispatch(dcdecrement(value));
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

export default DynamicCounter;

