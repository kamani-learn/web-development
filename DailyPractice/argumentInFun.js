

// function getAverage(scores) {
//     // Step 1: Calculate the sum of all scores
//     let sum = 0;
//     for (const score of scores) {
//       sum += score;
//     }
//     // Step 2: Calculate the average by dividing the sum by the number of scores
//     return sum / scores.length;
//   }
  
//   function getGrade(score) {
//     // Step 3: Determine the grade based on the score
//     if (score === 100) {
//       return "A++";
//     } else if (score >= 90) {
//       return "A";
//     } else if (score >= 80) {
//       return "B";
//     } else if (score >= 70) {
//       return "C";
//     } else if (score >= 60) {
//       return "D";
//     } else {
//       return "F";
//     }
//   }
  
//   function hasPassingGrade(score) {
//     // Step 4: Check if the grade is not an "F" (meaning the student passed)
//     return getGrade(score) !== "F";
//   }
  
//   function studentMsg(totalScores, studentScore) {
//     // Step 5: Calculate the class average using getAverage
//     const classAverage = getAverage(totalScores).toFixed(1);
  
//     // Step 6: Get the student's grade using getGrade
//     const studentGrade = getGrade(studentScore);
  
//     // Step 7: Check if the student passed using hasPassingGrade
//     const passed = hasPassingGrade(studentScore);
  
//     // Step 8: Create the message
//     let message = `Class average: ${classAverage}. Your grade: ${studentGrade}. `;
    
//     if (passed) {
//       message += "You passed the course.";
//     } else {
//       message += "You failed the course.";
//     }
  
//     return message;
//   }
  
//   // Test cases
//   console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); 
//   // Output: "Class average: 71.7. Your grade: F. You failed the course."
  
//   console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100)); 
//   // Output: "Class average: 50.8. Your grade: A++. You passed the course."


// function with argument keyword by default

// function add(){
//     let sum = 0
//     for(let i = 0;i< arguments.length;i++){
 
//         sum +=arguments[i]
//     }

//     return sum
// }
// console.log(add(1,2,3,4,5))
// your task is convert argument in array and than use reduce method and add all given number


// default parameter in function

function roleDie(numberOfSides = 6){
    return Math.floor(Math.random() * numberOfSides) + 1
}
console.log(roleDie(23))


// spread oprator 

const array = [1,2,3,4,5]
const array1 = [6,7,8,9,10]
const joind = [...array, ...array1]
console.log(joind)

const obj1 = {
    name:'krishna',
    age:34,
    present:true
}

const userupdate = {...obj1, name:'ram'}
console.log(userupdate)

