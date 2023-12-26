import React from 'react'
import "./checkText.css";
import { useDispatch , useSelector } from 'react-redux';
import { ispravitiSlovo } from '../../ReduxStore/Slices/theMainSlice';

const CheckText = () => {
  const dispatcher = useDispatch();
  const {  first , second , third , countStep , IndexBefore } = useSelector(state => state.mainData);
  const oak = [0,first , second , third , first];
  const a = [oak[countStep][IndexBefore].answer , oak[countStep][IndexBefore].myAnswer , oak[countStep][IndexBefore].id ]

  return (
    <div className='textChecker'>
        <div className='itIsRight' onClick={()=>dispatcher(ispravitiSlovo())}>
           <p className='theId'>{a[2]}</p>
        </div>
        <div className='redBox'>
          <a href={`https://translate.google.com/?sl=en&tl=ru&text=${IndexBefore}%0A&op=translate`} target="_blank" rel="noreferrer" className='rightAnswer'>
            {
              a[0]
            }
          </a>
          <a href={`https://dictionary.cambridge.org/dictionary/english/${a[0]}`} target="_blank" rel="noreferrer" className='wrongAnswer' style={{color: a[0] === a[1] ? "white" : "red"}}>
            {
             a[1]
            }
          </a>
        </div>
        
    </div>
  )
}

export default CheckText