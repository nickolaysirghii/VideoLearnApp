import { createSlice  } from "@reduxjs/toolkit";
import firstStep from "../../assets/localVideos/firstStep.mp4"
import secondStep from "../../assets/localVideos/secondStep.mp4"
import thirdStep from "../../assets/localVideos/thirdStep.mp4"



const one = {
    id: 1000,
    videoFile: firstStep,
    rusQuestion: "start",
    engDescription: "No description for first Item from first step.",
    answer: "start",
    myAnswer: "start",
    color: "rgb(11, 111, 111)"
}
const two = {
  id: 2000,
  videoFile: secondStep,
  rusQuestion: "start",
  engDescription: "No description for first Item from second step.",
  answer: "start",
  myAnswer: "start",
  color: "rgb(11, 111, 111)"
}
const three = {
  id: 3000,
    videoFile:  thirdStep,
    rusQuestion: "start",
    engDescription: "No description for first Item from third step.",
    answer: "start",
    myAnswer: "start",
    color: "rgb(11, 111, 111)",
    
}

const initialState = {
IndexBefore: 0,
targetIndex: 1,
countStep: 1,
first: [one , one],
second: [two , two],
third: [three , three]

};
export const mainSlice = createSlice({
    name: "mainSlice",
    initialState,
    reducers: {
    workingArrays: (state , action)=>{
      state.first = [one , ...action.payload.fir , one];
      state.firstPromeJ = [one , ...action.payload.fir , one];
      state.second = [two , ...action.payload.sec , two];
      state.third = [three , ...action.payload.thi , three];
    },
    workingTarget: (state , action)=>{
      state.first[0].before = true;
      state.first[1].border = true;
    },
    ispravitiSlovo: (state , action)=>{
      if(state.countStep === 1){
        state.first.forEach((elem)=>{
          if(elem.id === action.payload){
            elem.myAnswer = elem.answer
            elem.color = "black"
          }
        })
      }
      if(state.countStep === 2){
        state.second.forEach((elem)=>{
          if(elem.id === action.payload){
            elem.myAnswer = elem.answer
            elem.color = "black"
          }
        })
      }
      if(state.countStep === 3){
        state.third.forEach((elem)=>{
          if(elem.id === action.payload){
            elem.myAnswer = elem.answer
            elem.color = "black"
          }
        })
      }
      
     },
     pointBorder: (state , action)=>{
      const {data} = action.payload;
      const { id } = action.payload;
      const figured = [0 , state.first , state.second , state.third];
      figured[data].forEach((elem)=>{
        elem.before = false;
        elem.border = false;
      })
      figured[data][id].border = true;
      figured[data][id-1].before = true;
      state.IndexBefore = id - 1;
      state.targetIndex = id;



     },
     newProcess: (state , action) =>{
      
        const baza = state.first;
        if(state.targetIndex < baza.length - 1){
          state.IndexBefore ++
         state.targetIndex ++
         baza[state.IndexBefore - 1].before = false;
         baza[state.IndexBefore].before = true;
         baza[state.IndexBefore].border = false;
         baza[state.targetIndex].border = true;
        }
        if(baza[baza.length - 2].before &&
          baza[state.targetIndex].border === false){
            baza[state.IndexBefore].before = false
            baza[0].before = true;
            baza[0].border = false;
            baza[1].border = true;
          state.IndexBefore = 0;
          state.targetIndex = 1;
        }
        if(state.targetIndex === baza.length - 1){
          baza[state.IndexBefore].before = false;
          baza[state.IndexBefore].before = true;
          baza[state.targetIndex].border = false;
          baza[0].border = true;
          
      }
     let count = 0
     baza.forEach((elem , idx)=>{
        if(elem.before){
          elem.myAnswer = action.payload
          if(elem.answer === action.payload){
            elem.color = "black"
          }
        }
        if(elem.color === "black")
        count ++
      })
      if(count === baza.length - 2){
        baza.forEach((elem)=>{
          elem.before = false;
          elem.border = false;
          
        })
        state.IndexBefore = 0;
        state.targetIndex = 1;
        state.countStep = 2;


      }
      
     },
    newProcess2: (state , action) =>{
        const baza = state.second;
        if(state.targetIndex < baza.length - 1){
          state.IndexBefore ++
         state.targetIndex ++
         baza[state.IndexBefore - 1].before = false;
         baza[state.IndexBefore].before = true;
         baza[state.IndexBefore].border = false;
         baza[state.targetIndex].border = true;
        }
        if(baza[baza.length - 2].before &&
          baza[state.targetIndex].border === false){
            baza[state.IndexBefore].before = false
            baza[0].before = true;
            baza[0].border = false;
            baza[1].border = true;
          state.IndexBefore = 0;
          state.targetIndex = 1;
        }
        if(state.targetIndex === baza.length - 1){
          baza[state.IndexBefore].before = false;
          baza[state.IndexBefore].before = true;
          baza[state.targetIndex].border = false;
          baza[0].border = true;
          
      }
     let count = 0
     baza.forEach((elem , idx)=>{
        if(elem.before){
          elem.myAnswer = action.payload
          if(elem.answer === action.payload){
            elem.color = "black"
          }
        }
        if(elem.color === "black")
        count ++
      })
      if(count === baza.length - 2){
        baza.forEach((elem)=>{
          elem.before = false;
          elem.border = false;
          
        })
        state.IndexBefore = 0;
        state.targetIndex = 1;
        state.countStep = 3;
      }
      
     
    },
    newProcess3: (state , action) =>{
      console.log("proccess3")
        const baza = state.third;
        if(state.targetIndex < baza.length - 1){
          state.IndexBefore ++
         state.targetIndex ++
         baza[state.IndexBefore - 1].before = false;
         baza[state.IndexBefore].before = true;
         baza[state.IndexBefore].border = false;
         baza[state.targetIndex].border = true;
        }
        if(baza[baza.length - 2].before &&
          baza[state.targetIndex].border === false){
            baza[state.IndexBefore].before = false
            baza[0].before = true;
            baza[0].border = false;
            baza[1].border = true;
          state.IndexBefore = 0;
          state.targetIndex = 1;
        }
        if(state.targetIndex === baza.length - 1){
          baza[state.IndexBefore].before = false;
          baza[state.IndexBefore].before = true;
          baza[state.targetIndex].border = false;
          baza[0].border = true;
          
      }
     let count = 0
     baza.forEach((elem , idx)=>{
        if(elem.before){
          elem.myAnswer = action.payload
          if(elem.answer === action.payload){
            elem.color = "black"
          }
        }
        if(elem.color === "black")
        count ++
      })
      if(count === baza.length - 2){
        baza.forEach((elem)=>{
          elem.before = false;
          elem.border = false;
        })
        state.IndexBefore = 0;
        state.targetIndex = 1;
        state.countStep = 4;
      }
      }
     
    }, 
    
     
     

    
    },
    

);
export const {newProcess , newProcess2 , newProcess3 , pointBorder , ispravitiSlovo , workingTarget , process , process2 , process3 , workingArrays} = mainSlice.actions;
export default mainSlice.reducer;