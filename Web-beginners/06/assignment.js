let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]
  
let studentsWhoPass = [];

// 3 이상의 점수와 A를 받은 학생이 통과했다고 정의
for (let i = 0; i < allStudents.length; i++){
  if (allStudents[i] >= 3 || allStudents[i] === 'A'){
    studentsWhoPass.push(allStudents[i]);
  }
}

console.log(studentsWhoPass);