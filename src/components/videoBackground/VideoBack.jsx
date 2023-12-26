import React ,{useEffect , useRef , useState}  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import "./videoBack.css";
import CheckText from '../checkText/CheckText';
import { newProcess , newProcess2 , newProcess3 } from '../../ReduxStore/Slices/theMainSlice';

const VideoBack = () => {
  const videoRef = useRef(null);
 
  const dispatcher = useDispatch();
  const { first , second , third , countStep , targetIndex , IndexBefore  } = useSelector(state => state.mainData);
  const oak = [0,first , second , third , first];
  const a = [oak[countStep][IndexBefore].videoFile , oak[countStep][targetIndex].rusQuestion]


  const sendImputValues = (e)=>{
    e.preventDefault();
    const b = [ 0 , newProcess , newProcess2 , newProcess3 , newProcess];
    dispatcher(b[countStep](e.target.writeAnswer.value))
    e.target.reset()
    
  }
  useEffect(() => {
    const delay = 1000;
    const playVideoWithDelay = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
    const timeoutId = setTimeout(playVideoWithDelay, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [targetIndex]);
 
  return (
    <div className='videoBack'>
        <video ref={videoRef} src={a[0]} controls className='player'/>
        <div className='underDiv'>
            <div className='question'>
              <p>
                {
                  a[1]
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