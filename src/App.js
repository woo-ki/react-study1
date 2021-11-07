import {useState} from "react";
import './App.css';

function App() {

    let [posts, changePosts] = useState([
        {
            title: '남자 코트 추천',
            like: 0
        }, {
            title: '강남 우동 맛집',
            like: 0
        }, {
            title: '리액트 독학',
            like: 0
        }
    ]);

    function sortPost() {
        let temp = [...posts];
        temp.sort((a, b) => {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if(x < y) {
                return -1;
            }
            if(x > y) {
                return 1;
            }
            return 0;
        });
        changePosts(temp);
    }
    function changeLikeCnt(i) {
        let temp = [...posts];
        temp[i].like++;
        changePosts(temp);
    }

    return (
        <div className="App">
            <div className={"black-nav"}>
                <div>개발 Blog</div>
            </div>
            <button onClick={sortPost}>버튼</button>
            {
                posts.map((post, i) => {
                    return(
                        <div className="list">
                            <h3>{post.title} <span onClick={() => {changeLikeCnt(i)}}>👍</span> {post.like}</h3>
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
