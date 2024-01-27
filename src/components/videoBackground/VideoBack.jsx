import React ,{ useRef , useMemo}  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import "./videoBack.css";
import CheckText from '../checkText/CheckText';
import { newProcess , newProcess2 , newProcess3 , deleteBelow } from '../../ReduxStore/Slices/theMainSlice';

const VideoBack = () => {
  const videoRef = useRef(null);
 
  const dispatcher = useDispatch();
  const {redBar , upToLearn , first , second , third , countStep , targetIndex , IndexBefore , rightDependency,dataStatistic,startLearning  } = useSelector(state => state.mainData);
  const oak = [0,first , second , third , first];
  const a = [oak[countStep][IndexBefore].videoFile , oak[countStep][targetIndex].rusQuestion]


  const sendImputValues = (e)=>{
    e.preventDefault();
    const b = [ 0 , newProcess , newProcess2 , newProcess3 , newProcess];
    dispatcher(b[countStep](e.target.writeAnswer.value))
    e.target.reset()
    
  }
  const setTime = startLearning ? 1000 : 5000;
  useMemo(() =>{
    const delay = setTime;
    const playVideoWithDelay = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
    const timeoutId = setTimeout(playVideoWithDelay, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [rightDependency]);
  const deleteOUtdate = (theId , iks)=>{
    const stor = JSON.parse(localStorage.getItem('englishMemory'));
    if(stor[theId]>1){
      stor[theId] = stor[theId] - 1 
    }else{
      delete stor[theId];
    }
    localStorage.setItem('englishMemory', JSON.stringify(stor));
    dispatcher(deleteBelow(theId))
  }
 
  return (
    <div className='videoBack'>
        <video ref={videoRef} src={a[0]} controls className='player'/>
        <div className='underDiv'>
          <div className='switch_to_second'></div>
        
            <div className='checkAnswer'>
            <CheckText />
            </div>
           <form onSubmit={sendImputValues}>
            <input  type='text' name='writeAnswer'
            placeholder='write the answer here'  className='ourInput'/>
            </form>
            <div className='aboveRaw'>
              {
                upToLearn.map((elem, idx) => {
                  return <div className='aboveEvery' key={idx}>{elem.id}</div>
                })
              }
            </div>
            <div className='seeWhich'>
              {
                dataStatistic.map((el,ix) => {
                  return <div onClick={()=>deleteOUtdate(el.id , ix)} key={ix} className='statistic' style={{backgroundColor:el.color,
                  height: `${el.getHight}vh`}}>{el.id}</div>
                })
              }
            </div>
            <div className='theLine'style={{bottom:`${redBar+18}vh`}}></div>
            
            
        </div>
    </div>
  )
}

export default VideoBack