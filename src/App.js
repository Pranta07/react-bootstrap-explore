import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import News from "./components/News/News";

function App() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aafd38ac724446ac8538d32c92c1b109"
        )
            .then((res) => res.json())
            .then((data) => setNews(data.articles));
    }, []);

    return (
        <div className="App">
            <Row xs={1} md={3} className="g-4">
                {news.map((nw) => (
                    <News news={nw}></News>
                ))}
            </Row>
        </div>
    );
}

export default App;
