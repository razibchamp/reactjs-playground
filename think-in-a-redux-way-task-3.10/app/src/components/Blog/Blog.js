import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByAuthor, filterByCategory } from '../../redux/Filters/actions';

function Blog({blog}) {

    const dispatch = useDispatch();

    const authorFilterHandler = (authorId) => {
        dispatch(filterByAuthor(authorId))
    }

    const categoryFilterHandler = (category) => {
        dispatch(filterByCategory(category))
    }

    return (
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={blog.thumbnail}
                    alt=""
                />
            </div>

            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            onClick={ () => categoryFilterHandler(blog.category)}
                        >
                            {blog.category}
                        </span>
                    </p>
                    <a href="/#" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {blog.title}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0"
                        onClick={ () => authorFilterHandler(blog.author.id)}
                    >
                        <img
                            className="h-10 w-10 rounded-full"
                            src={blog.author.icon}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            className="text-sm font-medium text-gray-900 hover:underline"
                            onClick={ () => authorFilterHandler(blog.author.id)}
                        >
                            {blog.author.name}
                        </p>
                        <div
                            className="flex space-x-1 text-sm text-gray-500"
                        >
                            <time dateTime={blog.date}>
                                {blog.date}
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> {blog.duration} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;