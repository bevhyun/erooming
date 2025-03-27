// for (let i = 1; i <= 31; i++) {
//     let option = document.createElement("option"); // <option> 요소를 동적으로 생성
//     option.textContent = i; // 옵션의 텍스트를 i로 설정
//     document.querySelector("select").appendChild(option); // select 요소에 추가
// }

let dt = new Date();
dt = new Date(dt.getFullYear(), dt.getMonth()+1, 0)
console.log(dt.getFullYear(), dt.getMonth()+1, dt.getDate())


let date_option=dt.getDate();

for (let i = 1; i <= date_option; i++) {
    // let option = document.createElement("option"); // <option> 요소를 동적으로 생성
    // option.textContent = i; // 옵션의 텍스트를 i로 설정
    document.querySelector("#date").innerHTML +=(`<option>${i}</option>`); // select 요소에 추가
}


const currentYear = new Date().getFullYear();
for (let j = 1960; j <= currentYear; j++) {
    // let option = document.createElement("option"); // <option> 요소를 동적으로 생성
    // option.textContent = i; // 옵션의 텍스트를 i로 설정
    document.querySelector("#year").innerHTML +=(`<option>${j}</option>`); // select 요소에 추가
}