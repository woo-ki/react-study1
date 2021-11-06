import './App.css';

function App() {

    let posts = '강남 고기 맛집';
    let titleStyle = {color: 'blue', fontSize: '30px'};

    return (
        <div className="App">
            <div className={"black-nav"}>
                <div style={titleStyle}>개발 Blog</div>
            </div>
            <h4>{posts}</h4>
        </div>
    );
}

export default App;
