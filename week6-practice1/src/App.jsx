import { useContext, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { TodoContext } from './context/TodoContext';

function App() {
  const {
    todos, 
    text, 
    setText,
    editingId, 
    setEditingId,
    editText,
    setEditText,
    handleSubmit,
    addTodo,
    deleteTodo,
    updateTodo,
  } = useContext(TodoContext);

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
