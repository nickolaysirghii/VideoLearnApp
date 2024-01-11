import React from 'react'
import "./algo.css"
import { useDispatch , useSelector } from 'react-redux'
import { proba , proba2 } from '../../ReduxStore/Slices/testSlice'

const AlgoTest = () => {
 const dispatcher = useDispatch();
 const {test33 , three , four}= useSelector(select=>select.tesss)
  return (
    <div className='algoMain'>
        <div className='agoCon'>
          {
            test33.map((elem , idx) => {
              
                return <div key={idx} className='every' style={{backgroundColor:elem.color}}>{elem.id}</div>
              
                
            })
          }
        </div>
        <div className='treout'>
            {
                four.map((elem , idx) => {
                    return <div key={idx} className='every' style={{backgroundColor:elem.color}}>{elem.id}</div> 
                })
            }
        </div>
        <div className='fourOut'>
        {
                three.map((elem , idx) => {
                    return <div key={idx} className='every' style={{backgroundColor:elem.color}}>{elem.id}</div> 
                })
            }
        </div>
        <div className='sevenOut'>
        {
                three.map((elem , idx) => {
                    return <div key={idx} className='every' style={{backgroundColor:elem.color}}>{elem.id}</div> 
                })
            }
        </div>
        <button onClick={()=>dispatcher(proba())}>Ok</button>
    </div>
  )
}

export default AlgoTest
