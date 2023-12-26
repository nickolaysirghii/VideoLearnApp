import React , {useEffect} from 'react';
import "./mainAria.css";
import Left from '../left/Left';
import VideoBack from '../videoBackground/VideoBack';
import { useSelector , useDispatch } from 'react-redux';
import { new_data } from '../1A_Data/data';
import {workingTarget , workingArrays} from '../../ReduxStore/Slices/theMainSlice';



const MainAria = () => {
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
  let theEnglishDescription = work[1].engDescription;
  let the_id = 0;
  work.forEach((elem) => {
    if(elem.border){
      theEnglishDescription = elem.engDescription
      the_id = elem.id
    }
  })
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

    const first = new_data.slice(0,5);
    const second = new_data.slice(0,15);
    const third = new_data.slice(0,45);

    const shaffled = shuffleArray(new_data);

    const first1 = shaffled.slice(0,5);
    const second1 = shaffled.slice(5,20);
    const third1 = shaffled.slice(20,65);

    const first2 = [...first , ...first1];
    const second2 = [...second , ...second1];
    const third2 = [...third , ...third1];

    const firstFinal = shuffleArray(first2);
    const secondFinal = shuffleArray(second2);
    const thirdFinal = shuffleArray(third2);

    const sended = {
        fir: firstFinal,
        sec: secondFinal,
        thi: thirdFinal
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
            the_id
          }
        </p>
        <a href={`https://translate.google.com/?sl=en&tl=ru&text=${theEnglishDescription}&op=translate`} target='_blank' rel="noreferrer" className='hearDescription'>
        {
         theEnglishDescription
         }
        </a>
         
       </div>
      </div>
    </div>
  )
}

export default MainAria