import { createSlice  } from "@reduxjs/toolkit";
import { new_data } from "../../components/1A_Data/data";


const initialState = {
test33: new_data,
three: []

};
export const testData = createSlice({
    name: "testData",
    initialState,
    reducers: {
        proba: (state)=>{
            const arr = state.test33;
            const tr = state.three;
                const shaffle = (goInto)=>{
                  const a = [...goInto] ;
                  for (let i = a.length - 1; i > 0; i--) {
                   const j = Math.floor(Math.random() * (i + 1));
                   [a[i], a[j]] = [a[j], a[i]];
               }
               return a;
                }
                const divPrts3 = 
                [shaffle(arr.slice(0,Math.ceil(arr.length/3)))[0],
                 shaffle(arr.slice(Math.ceil(arr.length/3),(Math.ceil(arr.length/3)*2)))[0],
                 shaffle(arr.slice((Math.ceil(arr.length/3)*2),arr.length))[0]];
                 arr.forEach((elem,idx) => {
                  if(elem.id === divPrts3[0].id){
                    tr.push(...(arr.splice(idx,1)))
                }
                  if(elem.id === divPrts3[1].id){
                    tr.push(...(arr.splice(idx,1)))
                }
                  if(elem.id === divPrts3[2].id){
                    tr.push(...(arr.splice(idx,1)))
                }
                })
               
                
               
          },
     
    }, 
    
},
    

);
export const {proba} = testData.actions;
export default testData.reducer;