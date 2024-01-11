import { createSlice  } from "@reduxjs/toolkit";
import { new_data } from "../../components/1A_Data/data";


const initialState = {
test33: new_data,
three: [],
four: []

};
export const testData = createSlice({
    name: "testData",
    initialState,
    reducers: {
        proba: (state)=>{
            const arr = state.test33;
            const tr = state.three;
            const fou = state.four;
            const rr = state.test33.slice(6,state.test33.length)
            const rr4 = state.test33.slice(16,state.test33.length)
                const shaffle = (goInto)=>{
                  const a = [...goInto] ;
                  for (let i = a.length - 1; i > 0; i--) {
                   const j = Math.floor(Math.random() * (i + 1));
                   [a[i], a[j]] = [a[j], a[i]];
               }
               return a;
                }
                const divPrts3 = 
                [shaffle(rr.slice(0,Math.ceil(rr.length/3)))[0],
                 shaffle(rr.slice(Math.ceil(rr.length/3),(Math.ceil(rr.length/3)*2)))[0],
                 shaffle(rr.slice((Math.ceil(rr.length/3)*2),rr.length))[0]];
                 arr.forEach((elem,idx) => {
                  if(elem.id === divPrts3[0].id){
                    tr.push(...(arr.splice(idx,1)))
                    elem.color = "red"
                }
                  if(elem.id === divPrts3[1].id){
                    tr.push(...(arr.splice(idx,1)))
                    elem.color = "blue"
                }
                  if(elem.id === divPrts3[2].id){
                    tr.push(...(arr.splice(idx,1)))
                    elem.color = "black"
                }
                })
                const divPrts4 = 
                [shaffle(rr4.slice(0,Math.ceil(rr4.length/4))).slice(0,4),
                 shaffle(rr4.slice(Math.ceil(rr4.length/4),(Math.ceil(rr4.length/4)*2))).slice(0,3),
                 shaffle(rr4.slice((Math.ceil(rr4.length/4)*2),(Math.ceil(rr4.length/4)*3))).slice(0,2),
                 shaffle(rr4.slice((Math.ceil(rr4.length/4)*3),rr4.length))[0]
                ];
                 arr.forEach((elem,idx) => {
                  divPrts4[0].forEach((eee)=>{
                    if(elem.id === eee.id){
                      elem.color = "green"
                      fou.push(...(arr.splice(idx,1)))
                  }
                  })
                  divPrts4[1].forEach((eee)=>{
                    if(elem.id === eee.id){
                      elem.color = "blueviolet"
                      fou.push(...(arr.splice(idx,1)))
                  }
                  })
                  divPrts4[2].forEach((eee)=>{
                    if(elem.id === eee.id){
                      elem.color = "gray"
                      fou.push(...(arr.splice(idx,1)))
                  }
                  })
                  
                  
                  if(elem.id === divPrts4[3].id){
                    elem.color = "pink"
                    fou.push(...(arr.splice(idx,1)))
                }
                })
               
                
               
          },
        proba2: (state)=>{
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
export const {proba , proba2} = testData.actions;
export default testData.reducer;