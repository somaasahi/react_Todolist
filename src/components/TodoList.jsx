import React from 'react';


export const TodoList = ({taskList, setTaskList}) => {

  const handleCheck = (id) => {

    setTaskList(taskList.map((value) => {
      if(value.id === id){
        return {
          ...value,
          check: !value.check
        };
      }

      return value;
    }))
  }


  const handleDelete = (id) => {

    setTaskList(taskList.filter((value) => value.id !== id));
  }


  return (
    <div className="todoList">
      <div className="todos">
          

      { taskList.map((value, index) => {

          return (
              <div className={`todo ${value.check ? "completed" : ""}`} key={index}>
                  <div className='todoText'>
                    <span>{ value.text }</span>
                  </div>
                  <div className='icons'>
                    <button onClick={ () => {handleCheck(value.id)}}><i className="fas fa-check"></i></button>
                    <button onClick={ () => {handleDelete(value.id)}}><i className="fas fa-trash"></i></button>
                  </div>
              </div>
          )
        })
      }

      </div>
    </div>
  )
}
