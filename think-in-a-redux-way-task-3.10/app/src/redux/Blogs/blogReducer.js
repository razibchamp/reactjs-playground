
const author_sumon = {
    id : 1,
    icon : "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=100",
    name: "Learn with sumit",
}

const author_razib = {
    id : 2,
    icon : "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=100",
    name: "Razib Hossain Shuvo",
}

const author_faseeha = {
    id : 3,
    icon : "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    name: "Faseeha Islam",
}


const initialState = [
    {
        id:1,
        title: "Boost your conversion rate",
        category: "Article",
        author: author_sumon,
        thumbnail: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        date: "11 Jul, 2022",
        duration: "6 min read"
    },
    {
        id:2,
        title: "How to use search engine optimization to drive sales",
        category: "Javascript",
        author: author_razib,
        thumbnail: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        date: "12 Jul, 2022",
        duration: "11 min read"
    },
    {
        id:3,
        title: "Improve your customer experience",
        category: "Golang",
        author: author_faseeha,
        thumbnail: "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        date: "20 Jul, 2022",
        duration: "15 min read"
    },
    {
        id:4,
        title: "Boost your conversion rate",
        category: "Golang",
        author: author_sumon,
        thumbnail: "https://images.unsplash.com/photo-1664790008528-e8cde9588180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "11 Jul, 2022",
        duration: "6 min read"
    },
    {
        id:5,
        title: "How to use search conversion engine optimization to drive sales",
        category: "Javascript",
        author: author_razib,
        thumbnail: "https://images.unsplash.com/photo-1664969417440-c73804d60277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        date: "12 Jul, 2022",
        duration: "11 min read"
    },
    {
        id:6,
        title: "Improve search your customer experience",
        category: "Article",
        author: author_faseeha,
        thumbnail: "https://images.unsplash.com/photo-1612336069903-a0bb3f29b32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "20 Jul, 2022",
        duration: "15 min read"
    }
]

const blogReducer = (state=initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

export default blogReducer;