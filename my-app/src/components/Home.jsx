import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <h1>This is Home page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/todos">Todo</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home