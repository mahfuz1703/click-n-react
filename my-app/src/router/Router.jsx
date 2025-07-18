import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../components/About'; // Assuming you have an About component
import Home from '../components/Home'; // Importing Home component
import Todo from '../components/Todo';
import Counter from '../components/Counter'; // Importing Counter component
import { Link } from 'react-router-dom'; // Importing Link for navigation
import TodoDetails from '../components/TodoDeatails'; // Importing TodoDetails component

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/todos" element={<Todo />} />
                <Route path="/todo/:id" element={<TodoDetails />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="*" element={<div>404 Not Found <Link to="/">Go back to Home</Link></div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
