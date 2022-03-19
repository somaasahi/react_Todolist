import React from 'react';
import { useState } from 'react';

export const InputForm = ({taskList, setTaskList}) => {

  // 状態管理したい変数を宣言
  const [inputText, setInputText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    // submitした変数inputTextを親コンポーネントのtaskList配列に追加する
    setTaskList([
      ...taskList,
      {
        id:taskList.length,
        text:inputText,
        check:false
      }
    ]);
    setInputText("");
    
  }


  const handleChange = (e) => {
    // inputの中身が変更されるごとにinputTextに反映
    setInputText(e.target.value);
  }


  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText}/>
          <button>
          <i className="fas fa-plus-square"></i>
          </button>
      </form>
    </div>
  )
}
