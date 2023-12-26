
import { new_data } from "./data";
import { try_data } from "./data";

export const shafle_and_send = ()=>{

    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
      
        return shuffledArray;
      }

    const first = try_data.slice(0,5);
    const second = try_data.slice(0,15);
    const third = try_data.slice(0,45);

    const shaffled = shuffleArray(try_data);

    const first1 = shaffled.slice(0,5);
    const second1 = shaffled.slice(5,20);
    const third1 = shaffled.slice(20,65);

    const first2 = [...first , ...first1];
    const second2 = [...second , ...second1];
    const third2 = [...third , ...third1];

    const firstFinal = shuffleArray(first2);
    const secondFinal = shuffleArray(second2);
    const thirdFinal = shuffleArray(third2);

    const sended = {
        fir: firstFinal,
        sec: secondFinal,
        thi: thirdFinal
    }
    console.log(sended)
}