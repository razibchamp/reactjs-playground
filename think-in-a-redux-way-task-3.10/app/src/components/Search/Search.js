import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByKeyword } from '../../redux/Search/actions';

function debounce (fn, delay) {
    let timeoutId;

    return function(...args) {
        const context = this;
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

function Search(props) {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const optHandleInput = useCallback(debounce( (e) => searchKeyword(e.target.value), 500), [])

    const handleInput = (e) => {
        setInputValue(e.target.value);
        optHandleInput(e);
    }

    const searchKeyword = (keyword) => {
        dispatch(searchByKeyword(keyword))
    }

    return (
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={inputValue}
                onChange={ handleInput }
            />
            <img
                className="inline h-6 cursor-pointer"
                src="search.svg"
                alt="Search"
            />
        </div>
    );
}

export default Search;