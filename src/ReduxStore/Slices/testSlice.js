import { createSlice  } from "@reduxjs/toolkit";
import { new_data } from "../../components/1A_Data/data";
import { affirm_data } from "../../components/1A_Data/affirm";
import firstStep from "../../assets/localVideos/firstStep.mp4"
import secondStep from "../../assets/localVideos/secondStep.mp4"
import thirdStep from "../../assets/localVideos/thirdStep.mp4"

const v = [{
  id: 1000,
  videoFile: firstStep,
  rusQuestion: "start",
  engDescription: "No description for first Item from first step.",
  answer: "start",
  myAnswer: "start",
  color: "rgb(11, 111, 111)"
},
{
  id: 2000,
  videoFile: secondStep,
  rusQuestion: "start",
  engDescription: "No description for first Item from second step.",
  answer: "start",
  myAnswer: "start",
  color: "rgb(11, 111, 111)"
},{
  id: 3000,
    videoFile:  thirdStep,
    rusQuestion: "start",
    engDescription: "No description for first Item from third step.",
    answer: "start",
    myAnswer: "start",
    color: "rgb(11, 111, 111)",
    
}];
let theIdx = 0
const alfa = JSON.parse(localStorage.getItem("splitPoint"))
if(alfa){
  new_data.forEach((elem , idx)=>{if(alfa === elem.id){theIdx = idx}})
}else{theIdx = 200}


const initialState = {
test33: new_data,
three: [...new_data.slice(0,5),...affirm_data.slice(0,2)],
four: [...new_data.slice(0,15),...affirm_data.slice(0,5)],
seven: [...new_data.slice(0,45),...affirm_data],
done: new_data.slice(theIdx, new_data.length),
upToLearn: new_data.slice(0,theIdx) 



};
export const testData = createSlice({
    name: "testData",
    initialState,
    reducers: {
        proba444: (state)=>{
          const a = [
            state.test33,
            state.three,
            state.four,
            state.seven,
            state.test33.slice(46,state.test33.length),
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
                    el.color = "red"
                }
                  if(el.id === c[1].id){
                    a[1].push(...(a[0].splice(ix,1)))
                    el.color = "blue"
                }
                  if(el.id === c[2].id){
                    a[1].push(...(a[0].splice(ix,1)))
                    el.color = "black"
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
                      el.color = "green"
                      a[2].push(...(a[0].splice(ix,1)))
                  }
                  })
                  d[1].forEach((ee)=>{
                    if(el.id === ee.id){
                      el.color = "blueviolet"
                      a[2].push(...(a[0].splice(ix,1)))
                  }
                  })
                  d[2].forEach((ee)=>{
                    if(el.id === ee.id){
                      el.color = "gray"
                      a[2].push(...(a[0].splice(ix,1)))
                  }
                  })
                  if(el.id === d[3].id){
                    el.color = "pink"
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
                      el.color = "green"
                      a[3].push(...(a[0].splice(ix,1)))
                    }
                  })
                  e[1].forEach((eee)=>{
                    if(el.id === eee.id){
                      el.color = "bisque"
                      a[3].push(...(a[0].splice(ix,1)))
                    }
                  })
                  e[2].forEach((eee)=>{
                    if(el.id === eee.id){
                      el.color = "gray"
                      a[3].push(...(a[0].splice(ix,1)))
                    }
                  })
                  e[3].forEach((eee)=>{
                    if(el.id === eee.id){
                      el.color = "yellow"
                      a[3].push(...(a[0].splice(ix,1)))
                      
                  }
                  })
                  e[4].forEach((eee)=>{
                    if(el.id === eee.id){
                      el.color = "aqua"
                      a[3].push(...(a[0].splice(ix,1)))
                      
                  }
                  })
                  e[5].forEach((eee)=>{
                    if(el.id === eee.id){
                      el.color = "brown"
                      a[3].push(...(a[0].splice(ix,1)))
                      
                  }
                  })
                  e[6].forEach((eee)=>{
                    if(el.id === eee.id){
                      el.color = "aquamarine"
                      a[3].push(...(a[0].splice(ix,1)))
                      
                  }
                  })
                
                })
                
               state.three = [v[0],...a[5](a[1]),v[0]];
               state.four = [v[1],...a[5](a[2]),v[1]];
               state.seven = [v[2],...a[5](a[3]),v[2]];
                
               
          },
        proba2444: (state)=>{
            const arr = state.test33;
            const fou = state.four;
            const rr = state.test33.slice(16,state.test33.length)
                const shaffle = (goInto)=>{
                  const a = [...goInto] ;
                  for (let i = a.length - 1; i > 0; i--) {
                   const j = Math.floor(Math.random() * (i + 1));
                   [a[i], a[j]] = [a[j], a[i]];
               }
               return a;
                }
                const divPrts3 = 
                [shaffle(rr.slice(0,Math.ceil(rr.length/4))).slice(0,4),
                 shaffle(rr.slice(Math.ceil(rr.length/4),(Math.ceil(rr.length/4)*2))).slice(0,3),
                 shaffle(rr.slice((Math.ceil(rr.length/4)*2),(Math.ceil(rr.length/4)*3))).slice(0,2),
                 shaffle(rr.slice((Math.ceil(rr.length/4)*3),rr.length))[0]
                ];
                 arr.forEach((elem,idx) => {
                  divPrts3[0].forEach((eee)=>{
                    if(elem.id === eee.id){
                      elem.color = "green"
                      // fou.push(...(arr.splice(idx,1)))
                  }
                  })
                  divPrts3[1].forEach((eee)=>{
                    if(elem.id === eee.id){
                      elem.color = "blue"
                      // fou.push(...(arr.splice(idx,1)))
                  }
                  })
                  divPrts3[2].forEach((eee)=>{
                    if(elem.id === eee.id){
                      elem.color = "red"
                      // fou.push(...(arr.splice(idx,1)))
                  }
                  })
                  
                  
                  if(elem.id === divPrts3[3].id){
                    elem.color = "black"
                    // fou.push(...(arr.splice(idx,1)))
                }
                })
  
                
               
          },
        
          
     
    }, 
    
},
    

);
export const { proba444 , proba2444} = testData.actions;
export default testData.reducer;