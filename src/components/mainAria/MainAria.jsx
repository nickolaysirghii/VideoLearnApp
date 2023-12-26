import React , {useEffect} from 'react';
import "./mainAria.css";
import Left from '../left/Left';
import VideoBack from '../videoBackground/VideoBack';
import { useSelector , useDispatch } from 'react-redux';
import { new_data } from '../1A_Data/data';
import {workingTarget , workingArrays} from '../../ReduxStore/Slices/theMainSlice';



const MainAria = () => {
  const { first , second , third , countStep , targetIndex } = useSelector(state => state.mainData);
  const oak = [0,first , second , third , first];
  const a = [oak[countStep][targetIndex].engDescription , oak[countStep][targetIndex].id ]
  
 
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
    
    const duo = [shaffled1.slice(0,5) , shaffled2.slice(5,20) , shaffled3.slice(20,65)]
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
 
  return (
    <div className='main'>
      <Left />
      <VideoBack />
      <div className='right'>
       <div className='winSpace'>
        <p className='ttttId'>
          {
            a[1]
          }
        </p>
        <a href={`https://translate.google.com/?sl=en&tl=ru&text=${a[0]}&op=translate`} target='_blank' rel="noreferrer" className='hearDescription'>
        {
         a[0]
         }
        </a>
         
       </div>
      </div>
    </div>
  )
}

export default MainAria