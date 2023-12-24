import React  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import "./videoBack.css";
import CheckText from '../checkText/CheckText';
import {process , process2 , process3} from '../../ReduxStore/Slices/theMainSlice';

const VideoBack = () => {
  const dispatcher = useDispatch();
  const { first , second , third , countStep  } = useSelector(state => state.mainData);
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
  let theVideoBackground = work[0].videoFile
  let theRussQuestion = ""
  work.forEach((elem) => {
    if(elem.border){
      theRussQuestion = elem.rusQuestion
    }
    if(elem.before){
      theVideoBackground = elem.videoFile
    }
  })
  const sendImputValues = (e)=>{
    e.preventDefault();
  
    const res = e.target.writeAnswer.value;
   
    work === first &&  dispatcher(process(res))
    work === second && dispatcher(process2(res))
    work === third && dispatcher(process3(res))
    e.target.reset()
    
  }
 
  return (
    <div className='videoBack'>
        <video src={theVideoBackground} controls className='player'/>
        <div className='underDiv'>
            <div className='question'>
              <p>
                {
                  theRussQuestion
                }
              </p>
            </div>
            <div className='checkAnswer'>
            <CheckText />
            </div>
           <form onSubmit={sendImputValues}>
            <input  type='text' name='writeAnswer'
            placeholder='write the answer here'  className='ourInput'/>
            </form>
            
        </div>
    </div>
  )
}

export default VideoBack