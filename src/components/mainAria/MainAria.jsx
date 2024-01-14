import React , {useEffect , useState , useMemo} from 'react';
import "./mainAria.css";
import Left from '../left/Left';
import VideoBack from '../videoBackground/VideoBack';
import { useSelector , useDispatch } from 'react-redux';
import { new_data } from '../1A_Data/data';
import {workingTarget , workingArrays , getIdxArray } from '../../ReduxStore/Slices/theMainSlice';
import { affirm_data } from '../1A_Data/affirm';



const MainAria = () => {
  const [open , setOpen] = useState(false);
  
  const { first , second , third , countStep , targetIndex , rightDependency,dataStatistic } = useSelector(state => state.mainData);
  const oak = [0,first , second , third , first];
  const a = [oak[countStep][targetIndex].engDescription , oak[countStep][targetIndex].rusQuestion ]
  
 
  const dispacher = useDispatch();

 
  const sorok = ()=>{
    const exercise = [...new_data]
    const send = new_data.map((item,idx) => {
      const newItem = {...item};
      newItem.getIdx = idx;
      return newItem;
    });
   dispacher(getIdxArray(send))
 
    const a = [
      exercise,
      [...exercise.slice(0,5),...affirm_data.slice(0,2)],
      [...exercise.slice(0,15),...affirm_data.slice(0,5)],
      [...exercise.slice(0,45),...affirm_data],
      exercise.slice(46,new_data.length),
      (goInto)=>{
       const a = [...goInto] ;
        for (let i = a.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [a[i], a[j]] = [a[j], a[i]];
     }
     return a;
      }
    ];
    const b = [
      Math.ceil(a[4].length/3),
      Math.ceil(a[4].length/4),
      Math.ceil(a[4].length/7)
    ];
     const c = [
      a[5](a[4].slice(0,b[0]))[0],
      a[5](a[4].slice(b[0],(b[0]*2)))[0],
      a[5](a[4].slice((b[0]*2),a[4].length))[0]]
         
           a[0].forEach((el,ix) => {
            if(el.id === c[0].id){
              a[1].push(...(a[0].splice(ix,1)))
              
          }
            if(el.id === c[1].id){
              a[1].push(...(a[0].splice(ix,1)))
              
          }
            if(el.id === c[2].id){
              a[1].push(...(a[0].splice(ix,1)))
              
          }
          })
    const d = [
      a[5](a[4].slice(0,b[1])).slice(0,4),
      a[5](a[4].slice(b[1],(b[1]*2))).slice(0,3),
      a[5](a[4].slice((b[1]*2),(b[1]*3))).slice(0,2),
      a[5](a[4].slice((b[1]*3),a[4].length))[0]
      ];
        
          a[0].forEach((el,ix) => {
            d[0].forEach((ee)=>{
              if(el.id === ee.id){
                
                a[2].push(...(a[0].splice(ix,1)))
            }
            })
            d[1].forEach((ee)=>{
              if(el.id === ee.id){
                
                a[2].push(...(a[0].splice(ix,1)))
            }
            })
            d[2].forEach((ee)=>{
              if(el.id === ee.id){
                
                a[2].push(...(a[0].splice(ix,1)))
            }
            })
            if(el.id === d[3].id){
              
              a[2].push(...(a[0].splice(ix,1)))
          }
          })
          const e = [
            a[5](a[4].slice(0,b[2])).slice(0,9),
            a[5](a[4].slice(b[2],(b[2]*2))).slice(0,8),
            a[5](a[4].slice((b[2]*2),(b[2]*3))).slice(0,7),
            a[5](a[4].slice((b[2]*3),(b[2]*4))).slice(0,6),
            a[5](a[4].slice((b[2]*4),(b[2]*5))).slice(0,5),
            a[5](a[4].slice((b[2]*5),(b[2]*6))).slice(0,4),
            a[5](a[4].slice((b[2]*6),(b[2]*7))).slice(0,3)
          ];
          a[0].forEach((el,ix) => {
            e[0].forEach((eee)=>{
              if(el.id === eee.id){
                a[3].push(...(a[0].splice(ix,1)))
              }
            })
            e[1].forEach((eee)=>{
              if(el.id === eee.id){
                a[3].push(...(a[0].splice(ix,1)))
              }
            })
            e[2].forEach((eee)=>{
              if(el.id === eee.id){
                a[3].push(...(a[0].splice(ix,1)))
              }
            })
            e[3].forEach((eee)=>{
              if(el.id === eee.id){
                a[3].push(...(a[0].splice(ix,1)))
                
            }
            })
            e[4].forEach((eee)=>{
              if(el.id === eee.id){
                a[3].push(...(a[0].splice(ix,1)))
                
            }
            })
            e[5].forEach((eee)=>{
              if(el.id === eee.id){
                a[3].push(...(a[0].splice(ix,1)))
                
            }
            })
            e[6].forEach((eee)=>{
              if(el.id === eee.id){
                a[3].push(...(a[0].splice(ix,1)))
                
            }
            })
          
          })
          const sended = {
                fir: [...a[5](a[1])],
                sec: [...a[5](a[2])],
                thi: [...a[5](a[3])]
            }
          dispacher(workingArrays(sended))
        }

 useEffect(()=>{sorok()},[]);
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