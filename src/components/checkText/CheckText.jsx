import React from 'react'
import "./checkText.css";
import { useDispatch , useSelector } from 'react-redux';
import { ispravitiSlovo } from '../../ReduxStore/Slices/theMainSlice';

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
  const ispraviti = ()=>{
    dispatcher(ispravitiSlovo(theAidi))
  }
  return (
    <div className='textChecker'>
        <div className='itIsRight' onClick={ ()=>ispraviti()}>
           <p className='theId'>{theAidi}</p>
        </div>
        <div className='redBox'>
          <a href={`https://translate.google.com/?sl=en&tl=ru&text=${theCheckAnswer}%0A&op=translate`} target="_blank" rel="noreferrer" className='rightAnswer'>
            {
              theCheckAnswer
            }
          </a>
          <a href={`https://dictionary.cambridge.org/dictionary/english/${theCheckAnswer}`} target="_blank" rel="noreferrer" className='wrongAnswer' style={{color: theCheckAnswer === myCheckAnswer ? "white" : "red"}}>
            {
              myCheckAnswer
            }
          </a>
        </div>
        
    </div>
  )
}

export default CheckText