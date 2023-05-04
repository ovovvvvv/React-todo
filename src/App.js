import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setTodo] = useState(" ");
  const [toDos, setTodos] = useState([]);
    const onChange = (e) => {
    setTodo(e.target.value)
    console.log(toDo)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return
    }
    setTodos((currentArray) => [toDo, ...currentArray])
    setTodo("")
    //input값 공백 넣는걸 방지하기 위해 if문 추가해주기
    console.log(toDos)
  }
  //toDo 라는 state를 관리하는 setTodo함수.
  return (
    <div>
        <h1>TodoList를 만들어 보자!</h1>
        <form onSubmit={onSubmit}>
          <input type ="text" placeholder="입력하세요" onChange={onChange} value={toDo} />
          {/* //value 값이 toDo안으로 들어갑니다. */}
          <button>등록하기</button>
        </form>
        <ul>
          {toDos.map((item, index)=><li key={index}>{item}</li>)}
          {/* toDos array 각각의 item들을 li에 넣어주고, 전체 ul태그로 감싸기 */}
        </ul>
    </div>
  );
}

export default App;
