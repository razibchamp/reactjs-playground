import { Provider } from "react-redux";
import BlogList from "./components/Blog/BlogList";
import Search from "./components/Search/Search";
import store  from "./redux/store";

function App() {
  return (
    <Provider store={store}>

        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <a href="index.html">
                    <img
                        className="h-10"
                        src="lws.svg"
                        alt="Learn with Sumit"
                    />
                </a>
            </div>
        </nav>

        <Search />

        <BlogList />

        <section className="pt-6">
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400"
            >
                <div>Copyright 2022 Learn with Sumit.</div>
                <div>
                    <a
                        href="https://youtube.com/learnwithsumit"
                        target="_blank"
                        rel="noreferrer"
                    >
                        YouTube Channel
                    </a>
                </div>
            </div>
        </section>
    </Provider>
    
  );
}

export default App;
