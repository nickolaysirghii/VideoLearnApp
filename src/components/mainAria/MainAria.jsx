import React , {useEffect , useState , useMemo} from 'react';
import "./mainAria.css";
import Left from '../left/Left';
import VideoBack from '../videoBackground/VideoBack';
import { useSelector , useDispatch } from 'react-redux';
import { WorkingArra1 } from '../../1AData/1Data';
import {workingTarget , workingArrays , getIdxArray, startProcess } from '../../ReduxStore/Slices/theMainSlice';
import { affirm_data } from '../1A_Data/affirm';
import { parts , setREd , setNumBar } from '../../ReduxStore/Slices/theMainSlice';



const MainAria = () => {
  const [open , setOpen] = useState(false);
  
  const {numBar , redBar , xxx, first , second , third , countStep , targetIndex , IndexBefore , rightDependency , startLearning , dataStatistic } = useSelector(state => state.mainData);
  const oak = [0,first , second , third , first];
  const a = [oak[countStep][targetIndex].engDescription , oak[countStep][targetIndex].rusQuestion , oak[countStep][IndexBefore].timeGo ]
  
 
  const dispacher = useDispatch();


  const sorok = ()=>{
    let average = 0;
    let theBar = 2;
    const worked = WorkingArra1.slice(xxx, WorkingArra1.length)
    const stor = JSON.parse(localStorage.getItem('englishMemory'));
    if(localStorage.getItem('englishMemory')){
      const send = worked.map((item,idx) => {
       const newItem = {...item};
       newItem.getIdx = idx;
       return newItem;
     });
     if(localStorage.getItem('englishMemory')){
       send.forEach((elem)=>{
         if(stor[elem.id]){
           elem.getHight = stor[elem.id]
         }else{
           stor[elem.id] = 1
           localStorage.setItem('englishMemory', JSON.stringify(stor));
         }
         })
     }
     send.forEach((elem)=>{
       average = average + elem.getHight
     })
     theBar = Math.ceil((average/send.length))
       const rarara = (average/send.length).toFixed(3)
       dispacher(setNumBar(rarara))
     }
    dispacher(setREd(theBar))
    let send = worked.map((item,idx) => {
        const newItem = {...item};
        newItem.getIdx = idx;
        return newItem;
      
    });
    if(localStorage.getItem('englishMemory')){
      send.forEach((elem)=>{
        if(stor[elem.id]){
          elem.getHight = stor[elem.id]
        }else{
          stor[elem.id] = 1
          localStorage.setItem('englishMemory', JSON.stringify(stor));
        }
        if(elem.getHight > 21){
          elem.color = "pink"
        }
        })
    }
    let promejutok = [];
    let gap = 2;
    if(JSON.parse(localStorage.getItem("gap"))){
      gap = JSON.parse(localStorage.getItem("gap"))
    }else{
      localStorage.setItem("gap",JSON.stringify(2))
    }
    send.forEach((elem , idx)=>{
      if(idx < 45){
        promejutok.push(elem)
      }else{
        if(elem.getHight < redBar+gap){
           promejutok.push(elem)

        }else{
          elem.color = "rgb(50, 118, 213)"
        }
      }
    })
    

   dispacher(getIdxArray(send))
 
    const a = [
      [...promejutok],
      [...promejutok.slice(0,5),...affirm_data.slice(0,2)],
      [...promejutok.slice(0,15),...affirm_data.slice(0,5)],
      [...promejutok.slice(0,45),...affirm_data],
      promejutok.slice(46,promejutok.length),
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
  }, a[2]); 
}
  useMemo(()=>{setVariableTrueThenFalse();},[rightDependency])
  useMemo(()=>{
    if(countStep === 2){
      if(localStorage.getItem("splitPoint")){
        const thePoint = JSON.parse(localStorage.getItem("splitPoint"))
        localStorage.setItem("splitPoint" , JSON.stringify(thePoint+5))
        dispacher(parts(thePoint+5))
    }else{
        localStorage.setItem("splitPoint",JSON.stringify(200));
        const thePoint = JSON.parse(localStorage.getItem("splitPoint"))
        localStorage.setItem("splitPoint" , JSON.stringify(thePoint+5))
        dispacher(parts(thePoint+5))
    }
    }
    if(countStep > 1){
      let inoBox = {};
    
        if(localStorage.getItem('englishMemory')){
          dataStatistic.forEach((elem)=>{
          inoBox[elem.id] = elem.getHight;
          })
          localStorage.setItem('englishMemory', JSON.stringify(inoBox));
        }else{
        dataStatistic.forEach((elem)=>{
        inoBox[elem.id] = elem.getHight;
        })
        localStorage.setItem('englishMemory', JSON.stringify(inoBox));
        }
     }
  },[countStep])
  
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
      <div onClick={()=>{dispacher(startProcess())}} className={startLearning ? "buttonHiden" : 'startButton'}>Ok</div>
      <div className='theBar' style={{bottom: `${redBar + 18}vh`}}>{numBar}</div>
    </div>
  )
}

export default MainAria