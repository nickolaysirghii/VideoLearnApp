import React from 'react'
import "./checkText.css";
import { useDispatch , useSelector } from 'react-redux';

const CheckText = () => {
  const dispatcher = useDispatch();
  const {  first , second , third , countStep } = useSelector(state => state.mainData);
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
  let theCheckAnswer = "";
  let myCheckAnswer = "";
  let theAidi = work[0].id;
  work.forEach((elem) => {
    if(elem.before){
     theCheckAnswer = elem.answer;
     myCheckAnswer = elem.myAnswer;
     theAidi = elem.id;
    }
  })
  return (
    <div className='textChecker'>
        <div className='itIsRight'>
           <p className='theId'>{theAidi}</p>
        </div>
        <div className='redBox'>
          <p className='rightAnswer'>
            {
              theCheckAnswer
            }
          </p>
          <p className='wrongAnswer'>
            {
              myCheckAnswer
            }
          </p>
        </div>
        
    </div>
  )
}

export default CheckText