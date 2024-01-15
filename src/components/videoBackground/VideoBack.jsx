import React ,{useEffect , useRef , useMemo}  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import "./videoBack.css";
import CheckText from '../checkText/CheckText';
import { newProcess , newProcess2 , newProcess3 , deleteBelow } from '../../ReduxStore/Slices/theMainSlice';

const VideoBack = () => {
  const videoRef = useRef(null);
 
  const dispatcher = useDispatch();
  const { first , second , third , countStep , targetIndex , IndexBefore , rightDependency,dataStatistic,startLearning  } = useSelector(state => state.mainData);
  const oak = [0,first , second , third , first];
  const a = [oak[countStep][IndexBefore].videoFile , oak[countStep][targetIndex].rusQuestion]


  const sendImputValues = (e)=>{
    e.preventDefault();
    const b = [ 0 , newProcess , newProcess2 , newProcess3 , newProcess];
    dispatcher(b[countStep](e.target.writeAnswer.value))
    e.target.reset()
    
  }
  const setTime = startLearning ? 1000 : 20000;
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
    delete stor[theId];
    localStorage.setItem('englishMemory', JSON.stringify(stor));
    dispatcher(deleteBelow(theId))
    console.log(iks)
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
            <div className='aboveRaw'></div>
            <div className='seeWhich'>
              {
                dataStatistic.map((el,ix) => {
                  return <div onClick={()=>deleteOUtdate(el.id , ix)} key={ix} className='statistic' style={{backgroundColor:el.color,
                  height: `${el.getHight}vw`}}>{el.id}</div>
                })
              }
            </div>
            
            
        </div>
    </div>
  )
}

export default VideoBack