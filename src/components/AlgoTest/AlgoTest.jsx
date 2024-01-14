import React from 'react'
import "./algo.css"
import { useDispatch , useSelector } from 'react-redux'


const AlgoTest = () => {
 const dispatcher = useDispatch();
 const {test33 , three , four , seven}= useSelector(select=>select.tesss)
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
                seven.map((elem , idx) => {
                    return <div key={idx} className='every' style={{backgroundColor:elem.color}}>{elem.id}</div> 
                })
            }
        </div>
        <button>Ok</button>
    </div>
  )
}

export default AlgoTest
