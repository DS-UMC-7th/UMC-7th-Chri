import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '희연 혜원 혜윤 건 찬민' },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  return (
    <div className="container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <Button onClick={addTodo} label="할 일 등록" type="submit" />
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editingId !== todo.id ? (
              // todo.id와 todo.task를 함께 표시
              <p>
                {todo.id}. {todo.task}
              </p>
            ) : (
              <div className="edit-container">
                <p className="edit-id">{todo.id}. </p>
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <div className="buttons">
              <Button onClick={() => deleteTodo(todo.id)} label="삭제하기" />
              {editingId === todo.id ? (
                <Button
                  onClick={() => updateTodo(editingId, editText)}
                  label="수정 완료"
                />
              ) : (
                <Button
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditText(todo.task);
                  }}
                  label="수정 진행"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
