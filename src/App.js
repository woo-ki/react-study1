import {useState} from "react";
import './App.css';

function App() {

    let [titleArr, changeTitleArr] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학']);

    return (
        <div className="App">
            <div className={"black-nav"}>
                <div>개발 Blog</div>
            </div>
            {
                titleArr.map(title => {
                    return(
                        <div className="list">
                            <h3>{title}</h3>
                            <p>2월 17일 발행</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;
