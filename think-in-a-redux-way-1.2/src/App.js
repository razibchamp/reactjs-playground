import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DynamicCounter from "./components/DynamicCounter";
import HooksCounter from "./components/HooksCounter";
import VariableCounter from "./components/VariableCounter";
import store from "./Redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">

                <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                    Simple Counter Application
                </h1>
                
                <div class="max-w-md mx-auto mt-10 space-y-5">
                    {/* <Counter /> */}
                    <HooksCounter />
                    <DynamicCounter />
                    <VariableCounter />
                    <VariableCounter dynamic />
                </div>
            </div>
        </Provider>
    );
}
