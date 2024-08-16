import {results, mbtis} from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti');
// location.search는 queryString을 출력
console.log(location.search);
console.log(mbti);

// 1. 가져온 mbti 유형의 번호를 출력
// ?mbti=isfp  ===>  2인 것을 출력
console.log(mbtis[mbti]);

// 2. data.js에서 results 중 1번 결과에 해당 
// 하는 자료를 출력
console.log(results[mbtis[mbti]]);
let result = results[mbtis[mbti]];

// 3. 그 중 결과의 제목을 출력
console.log(results[mbtis[mbti]].title);

// 4. querySelector로 변수 선언
// --- innerHEML로 넣어줌
const title = document.querySelector('.page-title');
const rseultCharacter = document.querySelector('.character');
const boxes = document.querySelectorAll('.box');
const jobs = document.querySelectorAll('.job');
const lectureUrl = document.querySelector('.lecture');
const lectureImg = document.querySelector('.lecture img')

title.innerHTML = result.title;
rseultCharacter.src = result.character;
boxes.forEach(function(boxEl, index){
    boxEl.innerHTML = result.results[index];
})
jobs.forEach((job, index)=>{
    job.innerHTML = result.jobs[index];
})

lectureImg.src = result.lectureImg;
lectureUrl.href = result.lectureUrl;