import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "Logo";
  let [title, setTitle] = useState([" 탕후루", "마라탕", "리액트독학"]);
  let [tumb, setTumb] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{post}</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "감자튀김";
          setTitle(copy);
        }}>글수정</button>

      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >정렬버튼</button>

      {
        title.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); setModalTitle(i) }}>{title[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...tumb];
                  copy[i] = copy[i] + 1;
                  setTumb(copy);
                }}>👍</span>{tumb[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal modalTitle = {modalTitle} title={title} setTitle={setTitle}/> : null
      }
    </div>
  );
}

function Modal(props) {
  return(
    <div className="modal">
        <h4>{props.title[props.modalTitle]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          let copy = [...props.title];
          copy[0] = "제육";
          props.setTitle(copy);
        }}>글수정</button>
    </div>
  )
}

export default App;
