import { createSlice  } from "@reduxjs/toolkit";
import { new_data } from "../../components/1A_Data/data";
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
jump: 0,
IndexBefore: 0,
targetIndex: 1,
IndexAfter: 2,
firstIndexArray: [],
countStep: 1,
first: [one , one],
firstPromeJ: [one , one],
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
    process: (state , action)=>{
      if(state.countStep === 1){
        let ffff = []
        state.first.forEach((elem , idx)=>{
          ffff.push(idx)
        })
        state.firstIndexArray = ffff;

        let countIt = 0
      
        if(state.targetIndex === state.firstIndexArray.length - 1){
          state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length -1 ]
          state.targetIndex = state.firstIndexArray[0]
          state.IndexAfter = state.firstIndexArray[1]
         }else{
          if(state.jump < state.firstIndexArray.length -1){
            state.jump ++;
            state.IndexBefore = state.firstIndexArray[(state.jump - 1)]
            state.targetIndex = state.firstIndexArray[state.jump]
            state.IndexAfter = state.firstIndexArray[state.jump + 1]
      
            if(state.jump === state.firstIndexArray.length - 1){
              state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length - 2]
              state.targetIndex = state.firstIndexArray[state.firstIndexArray.length - 1]
              state.IndexAfter = state.firstIndexArray[0]
              state.jump = 0
             }
             if(state.jump === state.firstIndexArray.length ){
              state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length - 2]
              state.targetIndex = state.firstIndexArray[state.firstIndexArray.length - 1]
              state.IndexAfter = state.firstIndexArray[state.jump]
             }
             if(state.jump === state.firstIndexArray.length ){
              state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length - 2]
              state.targetIndex = state.firstIndexArray[state.firstIndexArray.length - 1]
              state.IndexAfter = state.firstIndexArray[state.jump]
             }
         }
  
  
       }
  
       state.first[state.IndexBefore].before = false;
        state.first[state.targetIndex].before = true;
        state.first[state.targetIndex].border = false;
        state.first[state.IndexAfter].border = true;
   
        state.first[state.targetIndex].myAnswer = action.payload
   
        if(state.first[state.targetIndex].answer === action.payload){
           state.first[state.targetIndex].color = "black"
           state.targetIndex = state.IndexBefore;
           state.IndexBefore = state.IndexBefore - 1
        }
        
        state.first.forEach((elem)=>{
          if(elem.color !== "black"){
            countIt ++
          }
        })
        if(countIt === 2){
           
          state.first[state.IndexAfter].border = false;
          state.countStep = 2
          state.jump = 0
          state.second[1].border = true;
          
        }
      }
      
     },
    process2: (state , action)=>{
      if(state.countStep === 2){
        
        state.IndexBefore = 0
         state.targetIndex = 1
         state.IndexAfter = 2
        
        let ffff = []
        state.second.forEach((elem , idx)=>{
          ffff.push(idx)
        })
        state.firstIndexArray = ffff;

        let countIt = 0
      
        if(state.targetIndex === state.firstIndexArray.length - 1){
          state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length -1 ]
          state.targetIndex = state.firstIndexArray[0]
          state.IndexAfter = state.firstIndexArray[1]
         }else{
          if(state.jump < state.firstIndexArray.length -1){
            state.jump ++;
            state.IndexBefore = state.firstIndexArray[(state.jump - 1)]
            state.targetIndex = state.firstIndexArray[state.jump]
            state.IndexAfter = state.firstIndexArray[state.jump + 1]
      
            if(state.jump === state.firstIndexArray.length - 1){
              state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length - 2]
              state.targetIndex = state.firstIndexArray[state.firstIndexArray.length - 1]
              state.IndexAfter = state.firstIndexArray[0]
              state.jump = 0
             }
             if(state.jump === state.firstIndexArray.length ){
              state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length - 2]
              state.targetIndex = state.firstIndexArray[state.firstIndexArray.length - 1]
              state.IndexAfter = state.firstIndexArray[state.jump]
             }
             if(state.jump === state.firstIndexArray.length ){
              state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length - 2]
              state.targetIndex = state.firstIndexArray[state.firstIndexArray.length - 1]
              state.IndexAfter = state.firstIndexArray[state.jump]
             }
         }
  
  
       }
  
       state.second[state.IndexBefore].before = false;
        state.second[state.targetIndex].before = true;
        state.second[state.targetIndex].border = false;
        state.second[state.IndexAfter].border = true;
   
        state.second[state.targetIndex].myAnswer = action.payload
   
        if(state.second[state.targetIndex].answer === action.payload){
           state.second[state.targetIndex].color = "black"
           state.targetIndex = state.IndexBefore;
           state.IndexBefore = state.IndexBefore - 1
        }
        
        state.second.forEach((elem)=>{
          if(elem.color !== "black"){
            countIt ++
          }
        })
        if(countIt === 2){
          state.second[state.IndexAfter].border = false;
          state.countStep = 3
          state.jump = 0
          state.second[0].border = false;
          state.third[1].border = true;
        }
      }
     },
    process3: (state , action)=>{
      if(state.countStep === 3){
        
        state.IndexBefore = 0
         state.targetIndex = 1
         state.IndexAfter = 2
        
        let ffff = []
        state.third.forEach((elem , idx)=>{
          ffff.push(idx)
        })
        state.firstIndexArray = ffff;

        let countIt = 0
      
        if(state.targetIndex === state.firstIndexArray.length - 1){
          state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length -1 ]
          state.targetIndex = state.firstIndexArray[0]
          state.IndexAfter = state.firstIndexArray[1]
         }else{
          if(state.jump < state.firstIndexArray.length -1){
            state.jump ++;
            state.IndexBefore = state.firstIndexArray[(state.jump - 1)]
            state.targetIndex = state.firstIndexArray[state.jump]
            state.IndexAfter = state.firstIndexArray[state.jump + 1]
      
            if(state.jump === state.firstIndexArray.length - 1){
              state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length - 2]
              state.targetIndex = state.firstIndexArray[state.firstIndexArray.length - 1]
              state.IndexAfter = state.firstIndexArray[0]
              state.jump = 0
             }
             if(state.jump === state.firstIndexArray.length ){
              state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length - 2]
              state.targetIndex = state.firstIndexArray[state.firstIndexArray.length - 1]
              state.IndexAfter = state.firstIndexArray[state.jump]
             }
             if(state.jump === state.firstIndexArray.length ){
              state.IndexBefore = state.firstIndexArray[state.firstIndexArray.length - 2]
              state.targetIndex = state.firstIndexArray[state.firstIndexArray.length - 1]
              state.IndexAfter = state.firstIndexArray[state.jump]
             }
         }
  
  
       }
  
       state.third[state.IndexBefore].before = false;
        state.third[state.targetIndex].before = true;
        state.third[state.targetIndex].border = false;
        state.third[state.IndexAfter].border = true;
   
        state.third[state.targetIndex].myAnswer = action.payload
   
        if(state.third[state.targetIndex].answer === action.payload){
           state.third[state.targetIndex].color = "black"
           state.targetIndex = state.IndexBefore;
           state.IndexBefore = state.IndexBefore - 1
        }
        
        state.third.forEach((elem)=>{
          if(elem.color !== "black"){
            countIt ++
          }
        })
        if(countIt === 2){
          state.third[state.IndexAfter].border = false;
          state.third[0].border = false;
          state.countStep = 1
        }
      }
     }

    
    },
    },

);
export const {workingTarget , process , process2 , process3 , workingArrays} = mainSlice.actions;
export default mainSlice.reducer;