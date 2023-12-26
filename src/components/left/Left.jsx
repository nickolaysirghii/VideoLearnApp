import React from 'react'
import "./left.css";
import { useSelector , useDispatch } from 'react-redux';
import { pointBorder } from '../../ReduxStore/Slices/theMainSlice';



const Left = () => {
  const dispatcher = useDispatch();
  const { first , second , third , countStep } = useSelector(state => state.mainData);
  let work = first;
  if(countStep === 1){
    work = first
  }
  if(countStep === 2){
    work = second
  }
  if(countStep === 3){
    work = third
  }
  return (
    <div className='left'>
      <div className='winLeftSpace'>
          <div className='firstStep'>
      {
        first.map((elem , idx)=>{

          return <div onClick={()=>dispatcher(pointBorder({id:idx,data:1}))} className='eachOneFirst' key={idx}
           style={{
            border: elem.border ? "1px solid red"  : "1px solid black",
            backgroundColor:elem.color ,
          }}></div>
        })
      }
      </div>
      <div className='secondStStep'>
      {
        second.map((elem , idx)=>{
          return <div onClick={()=>dispatcher(pointBorder({id:idx,data:2}))} className='eachOneSecond' key={idx}
           style={{
            border: elem.border ? "1px solid red"  : "1px solid black",
            backgroundColor:elem.color ,
          }}></div>
        })
      }
      </div>
      <div className='thirdStep'>
      {
        third.map((elem , idx)=>{
          return <div onClick={()=>dispatcher(pointBorder({id:idx,data:3}))} className='eachOneThird' key={idx}
           style={{
            border: elem.border ? "1px solid red"  : "1px solid black",
            backgroundColor:elem.color ,
          }}></div>
        })
      }
      </div>

      </div>
      
    </div>
  )
}

export default Left