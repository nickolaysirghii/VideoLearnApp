import { createSlice  } from "@reduxjs/toolkit";
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

const initialState = {
rightDependency: true,
IndexBefore: 0,
targetIndex: 1,
countStep: 1,
first: [v[0], v[0]],
second: [v[1] , v[1]],
third: [v[2] , v[2]]

};
export const mainSlice = createSlice({
    name: "mainSlice",
    initialState,
    reducers: {
    workingArrays: (state , action)=>{
      state.first = [v[0] , ...action.payload.fir , v[0]];
      state.second = [v[1] , ...action.payload.sec , v[1]];
      state.third = [v[2] , ...action.payload.thi , v[2]];
    },
    workingTarget: (state )=>{
      state.first[0].before = true;
      state.first[1].border = true;
    },
    ispravitiSlovo: (state )=>{
      const a = [{state: state.first},{state: state.second},{state: state.third}];
      const b = state.countStep;
      a[b-1].state[state.IndexBefore].myAnswer = a[b-1].state[state.IndexBefore].answer
      a[b-1].state[state.IndexBefore].color = "black"
      state.rightDependency = !state.rightDependency
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
            state.rightDependency = !state.rightDependency
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
            state.rightDependency = !state.rightDependency
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
            state.rightDependency = !state.rightDependency
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