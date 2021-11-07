import {useState} from "react";
import './App.css';

function App() {

    let [posts, changePosts] = useState([
        {
            title: '남자 코트 추천',
            content: '롱코트좋아연~',
            like: 0,
            created_dt: '2021-11-05'
        }, {
            title: '강남 우동 맛집',
            content: '강남역 지하에 있지요~',
            like: 0,
            created_dt: '2021-11-06'
        }, {
            title: '리액트 독학',
            content: '리액트 독학 하는중인데\n음... 뷰 하고나서 그런가 좀 쉬운건가..!',
            like: 0,
            created_dt: '2021-11-07'
        }
    ]);
    let [modalInfo, changeModalInfo] = useState({
        modalIsOpened: false,
        nowIdx: 0
    });

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
    function changeModal(i) {
        let temp = {...modalInfo};
        if(modalInfo.nowIdx == i) {
            temp.modalIsOpened = !temp.modalIsOpened;
        } else {
            temp.modalIsOpened = true;
        }
        temp.nowIdx = i;
        changeModalInfo(temp);
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
                        <div className="list" key={i}>
                            <h3><span onClick={() => {changeModal(i)}}>{post.title}</span> <span onClick={() => {changeLikeCnt(i)}}>👍</span> {post.like}</h3>
                            <p>{post.created_dt}</p>
                            <hr/>
                        </div>
                    )
                })
            }
            {
                modalInfo.modalIsOpened
                ? <Modal post={posts[modalInfo.nowIdx]} />
                : null
            }
        </div>
    );
}

function Modal(props) {
    return (
        <div className={"modal"}>
            <h2>{props.post.title}</h2>
            <p style={{whiteSpace: 'pre-wrap'}}>{props.post.content}</p>
            <p>{props.post.created_dt}</p>
        </div>
    );
}

export default App;
