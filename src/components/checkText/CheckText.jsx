import React from 'react'
import "./checkText.css";
import { useDispatch , useSelector } from 'react-redux';


const CheckText = () => {
  const dispatcher = useDispatch();
  const {  first , second , third , countStep , IndexBefore } = useSelector(state => state.mainData);
  const oak = [0,first , second , third , first];
  const a = [oak[countStep][IndexBefore].answer , oak[countStep][IndexBefore].myAnswer , oak[countStep][IndexBefore].id ]

  return (
    <div className='textChecker'>
        <div className='centerId'>
         <div className='redBox'>
          <a href={`https://translate.google.com/?sl=en&tl=ru&text=${a[0]}%0A&op=translate`} target="_blank" rel="noreferrer" className='rightAnswer'>
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
        
        
    </div>
  )
}

export default CheckText