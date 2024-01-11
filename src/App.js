
import './App.css';
import MainAria from './components/mainAria/MainAria';
import AlgoTest from './components/AlgoTest/AlgoTest';
import { new_data } from './components/1A_Data/data';


function App() {
  
 const twist1 = (arr)=>{
  const shaffle = (goInto)=>{
    const a = [...goInto] ;
    for (let i = a.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [a[i], a[j]] = [a[j], a[i]];
 }
 return a;
  }
  const divPrts3 = 
  [shaffle(arr.slice(0,Math.floor(arr.length/3)))[0],
   shaffle(arr.slice(Math.floor(arr.length/3),(Math.floor(arr.length/3)*2)))[0],
   shaffle(arr.slice((Math.floor(arr.length/3)*2),arr.length))[0]];
   let takenFirst = []
   arr.forEach((elem,idx) => {
    if(elem.id === divPrts3[0].id){takenFirst = [...takenFirst,...(arr.splice(idx,1))]}
    if(elem.id === divPrts3[1].id){takenFirst = [...takenFirst,...(arr.splice(idx,1))]}
    if(elem.id === divPrts3[2].id){takenFirst = [...takenFirst,...(arr.splice(idx,1))]}
  })
 return takenFirst
  
 }



 
  return (
    <div  className="App">
      {/* <AlgoTest /> */}
      <MainAria />
     </div>
  );
}

export default App;
