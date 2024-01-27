import { createSlice  } from "@reduxjs/toolkit";
import firstStep from "../../assets/localVideos/firstStep.mp4"
import secondStep from "../../assets/localVideos/secondStep.mp4"
import thirdStep from "../../assets/localVideos/thirdStep.mp4"
import { WorkingArra1 } from "../../1AData/1Data";



const v = [{
  id: 1000,
  videoFile: firstStep,
  rusQuestion: "start",
  engDescription: "No description for first Item from first step.",
  answer: "start",
  myAnswer: "start",
  color: "rgb(11, 111, 111)",
  timeGo: 48000,
},
{
  id: 2000,
  videoFile: secondStep,
  rusQuestion: "start",
  engDescription: "No description for first Item from second step.",
  answer: "start",
  myAnswer: "start",
  color: "rgb(11, 111, 111)",
  timeGo: 50000,
},{
  id: 3000,
    videoFile:  thirdStep,
    rusQuestion: "start",
    engDescription: "No description for first Item from third step.",
    answer: "start",
    myAnswer: "start",
    color: "rgb(11, 111, 111)",
    timeGo: 65000,
    
}];
let theIdx = 0
const alfa = JSON.parse(localStorage.getItem("splitPoint"))
if(alfa){
  WorkingArra1.forEach((elem , idx)=>{if(alfa === elem.id){theIdx = idx}})
}else{theIdx = 200}


const initialState = {
xxx: theIdx,
redBar: 2 ,
numBar: 0,
upToLearn: WorkingArra1.slice(0,theIdx), 
prevI: 0,
startLearning: false,
dataStatistic: [],
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
            if(elem.getIdx || elem.getIdx === 0){
              state.dataStatistic[state.prevI].color = "green"
              state.prevI = elem.getIdx
              state.dataStatistic[elem.getIdx].color = "red"
              state.dataStatistic[elem.getIdx].getHight ++ 
              
              
            }
            
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
            if(elem.getIdx || elem.getIdx === 0){
              state.dataStatistic[state.prevI].color = "green"
              state.prevI = elem.getIdx
              state.dataStatistic[elem.getIdx].color = "red"
              state.sendDelay = elem.getIdx
              state.dataStatistic[elem.getIdx].getHight ++ 
              
            }
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
            if(elem.getIdx || elem.getIdx === 0){
              state.dataStatistic[state.prevI].color = "green"
              state.prevI = elem.getIdx
              state.dataStatistic[elem.getIdx].color = "red"
              state.sendDelay = elem.getIdx
              state.dataStatistic[elem.getIdx].getHight ++ 
              
            }
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
    },
    getIdxArray: (state , action) =>{
    state.dataStatistic = action.payload
    },
    startProcess: (state)=>{
      state.startLearning = true;
    },
    deleteBelow: (state , action)=>{
      state.dataStatistic.forEach(elem =>{
        if(elem.id === action.payload){
          elem.getHight = elem.getHight -1
        }
      })
    },
    parts: (state , action)=>{
      let theIdx = 0
      WorkingArra1.forEach((elem , idx)=>{
        if(action.payload === elem.id){
          theIdx = idx
        }
      })
      state.upToLearn = WorkingArra1.slice(0,theIdx) 
      },
      setREd: (state , action)=>{
        state.redBar = action.payload
      },
      setNumBar: (state, action)=>{
        state.numBar = action.payload
      }
   
     
    }, 
    
     
     

    
    },
    

);
export const {setNumBar , setREd , parts , deleteBelow , startProcess , getIdxArray , newProcess , newProcess2 , newProcess3 , pointBorder , ispravitiSlovo , workingTarget , process , process2 , process3 , workingArrays} = mainSlice.actions;
export default mainSlice.reducer;