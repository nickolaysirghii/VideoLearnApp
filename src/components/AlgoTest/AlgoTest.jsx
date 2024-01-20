import React from 'react'
import "./algo.css"
import { useDispatch , useSelector } from 'react-redux'
import { parts } from '../../ReduxStore/Slices/theMainSlice'


const AlgoTest = () => {
 const dispatcher = useDispatch();
 const {test33 , done}= useSelector(select=>select.tesss)
 const {upToLearn , first } = useSelector(select=>select.mainData)
 const splitThem = ()=>{
    if(localStorage.getItem("splitPoint")){
        const thePoint = JSON.parse(localStorage.getItem("splitPoint"))
        localStorage.setItem("splitPoint" , JSON.stringify(thePoint+5))
        dispatcher(parts(thePoint+5))
    }else{
        localStorage.setItem("splitPoint",JSON.stringify(200));
        const thePoint = JSON.parse(localStorage.getItem("splitPoint"))
        localStorage.setItem("splitPoint" , JSON.stringify(thePoint+5))
        dispatcher(parts(thePoint+5))
    }
    
 }

  return (
    <div className='algoMain'>
        <div className='agoCon'>
          {
            upToLearn.map((elem , idx) => {
              
                return <div key={idx} className='every' style={{backgroundColor:elem.color}}>{elem.id}</div>
              
                
              
                
            })
          }
        </div>
        <div className='treout'>
        {
            done.map((elem , idx) => {
              
                return <div key={idx} className='every' style={{backgroundColor:elem.color}}>{elem.id}</div>
              
                
              
                
            })
          }
        </div>
       
        <button onClick={splitThem}>Ok</button>
    </div>
  )
}

export default AlgoTest
