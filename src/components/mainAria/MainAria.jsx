import React , {useEffect , useState , useMemo} from 'react';
import "./mainAria.css";
import Left from '../left/Left';
import VideoBack from '../videoBackground/VideoBack';
import { useSelector , useDispatch } from 'react-redux';
import { new_data } from '../1A_Data/data';
import {workingTarget , workingArrays} from '../../ReduxStore/Slices/theMainSlice';
import { affirm_data } from '../1A_Data/affirm';



const MainAria = () => {
  const [open , setOpen] = useState(false);
  const { first , second , third , countStep , targetIndex , rightDependency } = useSelector(state => state.mainData);
  const oak = [0,first , second , third , first];
  const a = [oak[countStep][targetIndex].engDescription , oak[countStep][targetIndex].rusQuestion ]
  
 
  const dispacher = useDispatch();
  const shafle_and_send = ()=>{

    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
      
        return shuffledArray;
      }

    const uno = [new_data.slice(0,5) , new_data.slice(0,15) , new_data.slice(0,45) ]

    const shaffled1 = shuffleArray(new_data.slice(5,new_data.length -1));
    const shaffled2 = shuffleArray(new_data.slice(15,new_data.length -1));
    const shaffled3 = shuffleArray(new_data.slice(45,new_data.length -1));
    
    const duo = [[...shaffled1.slice(0,3) , ...affirm_data.slice(0,2)] , [...shaffled2.slice(3,13) , ... affirm_data.slice(0,5) ], [...shaffled3.slice(13,48) , ...affirm_data]]
    const trio = [[...uno[0] , ...duo[0]] , [...uno[1] , ...duo[1]] , [...uno[2] , ...duo[2]]]
    const quatro = [ shuffleArray(trio[0]) ,shuffleArray(trio[1]) , shuffleArray(trio[2])]
    const sended = {
        fir: quatro[0],
        sec: quatro[1],
        thi: quatro[2]
    }
    dispacher(workingArrays(sended))
}
 useEffect(()=>{shafle_and_send()},[]);
 useEffect(()=>{dispacher(workingTarget())},[]);
 
 function setVariableTrueThenFalse() {
  setOpen(true);
  setTimeout(function() {
    setOpen(false);
  }, 5000); 
}
useMemo(()=>{setVariableTrueThenFalse();},[rightDependency])

 
  return (
    <div className='main'>
      <Left />
      <VideoBack />
      <div  className={open ? 'videoCover' : 'videoCoverBlock'}>
        <div className='mainDescription'>
          <a className={open ? 'deDesClosed' : 'deDes' } href={`https://translate.google.com/?sl=en&tl=ru&text=${a[0]}%0A&op=translate`} target='_blank'>{a[0]}</a>
          <div className='russss'>{a[1]}</div>
        </div>
      </div>
    </div>
  )
}

export default MainAria