import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components'

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputTask = styled.input`
  width: 300px;
  height: 25px;
  padding: 7px;
  border: 1px solid #000;
  border-radius: 10px;
`

const ButtonAddTask = styled.button`
  margin-top: 10px;
  width: 300px;
  display: flex;
  height: 25px;
  padding: 7px;
  border: 1px solid blue;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`

function App() {

  const [task, setTask] = useState('');

  const [list, setList] = useState([{title:'Passear com o cachorro', done: false}]);

  // useEffect(()=>{
  //   let item = {title:'Passear com o cachorro', done: false}
  //   let newList = [...list];
  //   newList.push(item);
  //   setList(newList);
  // },[]);

  const addTaskAction = () => {    
    if (task.length > 0){
      let item = {title: task, done: false}
      let newList = [...list];
      newList.push(item);
      setList(newList);
      setTask('');
    }
  }

  const markTaskAction = (index) => {
      let item = list[index]
      item.done = !item.done;
      let newList = [...list];
      newList[index] = item ;
      setList(newList);
  }


  return (
    <Container>
      <h1>Task List</h1>
      <InputTask placeholder="Type the task..." value={task} onChange={(e)=>setTask(e.target.value)} />
      <ButtonAddTask onClick={addTaskAction} >Add Task</ButtonAddTask>
      <br/>
      <br/>
      { list.empty ?
          <h2>Lista Vazia</h2> :
          <table >
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {list.map((value, index)=>(
                <tr key={index}>
                  { value.done ?
                    <td style={{color:'green'}}>{value.title}</td> :
                    <td style={{color:'red'}}>{value.title}</td>
                  }
                  <td><button onClick={()=> markTaskAction(index)} >Feito</button></td>
                </tr>
                )
              )}
            </tbody>
          </table>
      }
    </Container>
  );
}

export default App;
