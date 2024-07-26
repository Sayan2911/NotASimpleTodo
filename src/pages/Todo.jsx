import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import "../pages/todo.css";
import TodoList from './TodoList';
import { FaMoon,FaRegSun } from "react-icons/fa";
import { initialState, store } from '../useStore';
import { todoResetTodo, todoAddTodo } from '../useAction';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [quote, setQuote] = useState('');
  const [color, setColor] = useState('#000000');
  const [ch, setCh] = useState(0);
  const hasFetchedRef = useRef(false);

  async function getUser() {
    try {
      const response = await axios.get(
        'https://api.api-ninjas.com/v1/quotes?category=inspirational',
        {
          headers: {
            'X-Api-Key': 'Dq4/1DOrpW+augg+LMs/sg==vzWLGPCrF9owllzb'
          }
        }
      );
      setQuote(response.data[0].quote);
   




    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!hasFetchedRef.current) {
      getUser();

  
      hasFetchedRef.current = true;
    }
  }, []);


  
const print=()=>{
  if( ch===0){

    setColor("#A5A5A5")
    setCh(1)
  }

  if(ch===1){

    setColor("#000000")
    setCh(0)
  }
  console.log("hello");
}
const notifyError = () => toast.error("please enter task");
const notifySuccsess = () => toast.success("task submitted succesfully");


const enterTodo=()=>{
  console.log(inputValue);

  // eslint-disable-next-line no-unused-expressions
  (inputValue.length !==0)?(
  

    store.dispatch(todoAddTodo(inputValue)),
    setInputValue(''),
    document.getElementById('resetValue').value = '',
    notifySuccsess()
  )
  :(
    notifyError()
    )
  
}
const user = useSelector(state => state.user);
  return (
    <div className='d-flex align-items-center justify-content-center flex-column' style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
       <ToastContainer />


      <div className='rounded  progressBarContainer progressBar' style={{ width: "30vw", height: "80vh", backgroundColor:"#292929" ,overflow:"auto" }}>
        <div className='m-3 d-flex justify-content-between'style={{ height: "20%" }}>
          <div style={{ width: "65%" }}>
            <h1 className='text-white ' style={{ textAlign:"left"}}>Today</h1>
            <p className='text-white' style={{ fontSize:"11px" , fontStyle:"italic" , height: "45%",overflow:"auto", scrollbarWidth: "none", msOverflowStyle: "none", textAlign:"left"}}>"{quote}"</p>
          </div>
          <div>
  <input type="checkbox" className="checkbox " id="checkbox"/>
  <label htmlFor="checkbox" className="checkbox-label" onClick={()=>(print())}>
    <FaMoon  className='react-icons'/>
    <FaRegSun className='react-icons' />
  

    <span className="ball"></span>
  </label>
</div>
        </div>

        <div className='d-flex align-items-center justify-content-center flex-column'>
          <div className='d-flex align-items-center' style={{ width: "100%" }}>
            <input
              type="text"
              maxLength={35}
              className='mx-5 custom-input'
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='your thoughts...'
              id='resetValue'
            />
            <div className='text-white' style={{ marginLeft: "-4%" }}>{inputValue.length}/35</div>
          </div>
          <hr className='text-white' style={{ marginTop: "5px", marginBottom: "5px", width: "72%" }} />
          <button className="button-50" onClick={()=>(enterTodo())}>+</button>
        </div>

        <div>
        
        </div>

<div>
  
</div>
    <div>
      {user.map((value, index) => (
        <TodoList key={index} payload={value} />
      ))}
    </div>
{
  (user.length!==0)?(
    <button className='button-50' onClick={()=>( store.dispatch(todoResetTodo()))}>
    delete all
  </button>
  ):(
    <></>
  )
}


      </div>

     
    </div>
  );
}

export default Todo;
