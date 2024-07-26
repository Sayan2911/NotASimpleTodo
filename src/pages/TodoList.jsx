import {React,  useState } from 'react'

const TodoList = ({tick,payload}) => {

  const [ch, setCh] = useState(0)
  const [isCheck, setIsCheck] = useState("none")
  const [isWhite, setIsWhite] = useState("white")

  const check=()=>{
    if( ch===0){

      setIsCheck("line-through")
      setIsWhite('#afacaca3')
      setCh(1)
      console.log(ch,isCheck,isWhite);
    }
  
    if(ch===1){
      setIsCheck("none")
      setIsWhite('white')
      setCh(0)
      console.log(ch,isCheck,isWhite);
    }
  }
  return (
    <div className='text-white'>
        
        <div className='d-flex mx-5 gap-3 my-2 align-items-center' style={{height:"100%"}}>
            <div>
            <input type='checkbox' checked={tick} onClick={()=>(check())} />
            </div>
            <div className='d-flex align-items-end' style={{height:"100%",width:"100%" ,overflow:'hidden', paddingBottom:"5px",textDecoration:isCheck, color:isWhite}}>
                
                {payload}
            </div>
        </div>
       
        
        </div>
  )
}

export default TodoList