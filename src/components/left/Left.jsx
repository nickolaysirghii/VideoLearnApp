import React from 'react'
import "./left.css";
import { useSelector , useDispatch } from 'react-redux';
import { pointBorder } from '../../ReduxStore/Slices/theMainSlice';



const Left = () => {
  const dispatcher = useDispatch();
 
  const { first , second , third  } = useSelector(state => state.mainData);

  return (
    <div className='left'>
     
      
        {
          first.map((elem ,idx) => {
            return <div onClick={()=>dispatcher(pointBorder({data: 1 , id: idx}))} className='elements' key={idx}
            style={{backgroundColor: elem.color , 
                    border: elem.border ? "2px solid red" : "1px solid black"}}
            >{elem.id}</div>
          })
        }
        {
          second.map((elem ,idx) => {
            return <div onClick={()=>dispatcher(pointBorder({data: 2 , id: idx}))} className='elements' key={idx}
            style={{backgroundColor: elem.color , 
                    border: elem.border ? "2px solid red" : "1px solid black"}}
            >{elem.id}</div>
          })
        }
        {
          third.map((elem ,idx) => {
            return <div onClick={()=>dispatcher(pointBorder({data: 3 , id: idx}))} className='elements' key={idx}
            style={{backgroundColor: elem.color , 
                    border: elem.border ? "2px solid red" : "1px solid black"}}
            >{elem.id}</div>
          })
        }
      
      
    </div>
  )
}

export default Left