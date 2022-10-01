// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
// const initialState = {
//     value: 0,
// };

const initialState = [
    {
        id : 1,
        value: 0,
    },
];

const getId = (() => {
    let id = 1;

    return () => {
        return ++id;
    };
})();


// create reducer function
function counterReducer(state = initialState, action) {
    console.log("counterReducer", state);
    console.log("counterReducer", action);

    if (action.type === "increment") {
        return [...state.map( (item) => {
            return {
                id : item.id,
                value: item.id === action.payload.id ? item.value + 3 : item.value
            }
        })];
    } else if (action.type === "decrement") {
        return [...state.map( (item) => {
            return {
                id : item.id,
                value: item.id === action.payload.id ? item.value - 1 : item.value
            }
        })];
    } else if (action.type === 'addCounter') {
        return [
            ...state,
            {
                id : getId(),
                value : 0
            }
        ]
    } else if (action.type === 'reset') {
        return [
            ...state.map( (item) => {
                return {
                    ...item,
                    value : 0
                }
            })
        ]
    } 
    else {
        return state;
    }
}


// create store
const store = Redux.createStore(counterReducer);

function increment(singleCounter) {
    console.log('call increment', singleCounter);
    store.dispatch({
        type: "increment",
        payload: {
            id: singleCounter,
        }
    });
}

function decrement(singleCounter) {
    console.log('call decrement');
    store.dispatch({
        type: "decrement",
        payload: {
            id: singleCounter,
        }
    });
}
const render = () => {
    // console.log('action', store);
    const state = store.getState();
    console.log('state', state);

    // map state to generate counter
    // check element if exist otherwise create element
    // add event listener

    state.map( (singleCounter) => {
        console.log('map ', singleCounter)
        const counterEl = document.getElementById(`counter-${singleCounter.id}`);
        if( counterEl === null) {

            const counterBoxEl = document.getElementById('counterBox');
            const parse = new DOMParser();
            const newCountEl = parse.parseFromString(`
            <div class="text-2xl font-semibold" id="counter-${singleCounter.id}">0</div>
            <div class="flex space-x-3">
                <button
                    class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    id="inc-${singleCounter.id}"
                >
                    Increment
                </button>
                <button
                    class="bg-red-400 text-white px-3 py-2 rounded shadow"
                    id="dec-${singleCounter.id}"
                >
                    Decrement
                </button>
            </div>

            `, 'text/html');

            newCountEl.body.children[1].children[0].addEventListener('click', () => {
                increment(singleCounter.id)
            })

            newCountEl.body.children[1].children[1].addEventListener('click', () => {
                decrement(singleCounter.id)
            })

            counterBoxEl.append(...newCountEl.body.childNodes);

        } else {
            // counterEl.firstChild
            console.log(counterEl)
            counterEl.innerText = singleCounter.value
        }
    })
}; 

// update UI initially
render();

store.subscribe(render);

// button click listeners
// incrementEl.addEventListener("click", () => {
//     store.dispatch({
//         type: "increment",
//     });
// });

// decrementEl.addEventListener("click", () => {
//     store.dispatch({
//         type: "decrement",
//     });
// });

function addCounterElement () {
    console.log('addCounterElement');
    store.dispatch({
        type: "addCounter",
    })
}

function resetCounterElement () {

    store.dispatch({
        type: "reset",
    })
}