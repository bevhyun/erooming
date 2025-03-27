// 1. 스크롤바 움직임 감지(스크롤이벤트 걸기)
// 2. 슬라이드배너의 offsettop 값 알기
// 3. 스크롤 y랑 offsettop값이랑 비교하기
// 4. 슥슥스껄스껄

let best_box = document.querySelectorAll('.best_box');

let bb_arr = []
for(let i=0; i<best_box.length; i++) {
    bb_arr[i] = best_box[i].offsetTop;
}    
console.log(bb_arr)
function ttt() {
    for(let i=0; i<best_box.length; i++) {
        if(best_box[i].getBoundingClientRect().top-500 <= 0) {
            best_box[i].style.transform = 'translateX(-50%)';
        }
    }
}
ttt()

window.addEventListener('scroll', function() {
    ttt()
    

    // for(let i=0; i<best_box.length; i++) {
    //     if (s_top >= bb_arr[i]) {
    //         // best_box[i].style.left = '50%';
    //         best_box[i].style.transform = 'translateX(-50%)';
    //     }
    //     //  else {
    //     //     best_box[i].style.left = '0';
    //     //     best_box[i].style.transform = 'translateX(0)';
    //     // }   
    
    // }    
    

    



    // 1
    // let bestBox1 = document.querySelector('.best_box1');
    
    // if (bestBox1) {
    //     let boxHeightHalf = bestBox1.offsetHeight / 2;
        
    //     let scrollPosition = window.scrollY;

    //     if (scrollPosition >= boxHeightHalf) {
    //         bestBox1.style.left = '50%';
    //         bestBox1.style.transform = 'translateX(-50%)';
    //     } else {
    //         bestBox1.style.left = '0';
    //         bestBox1.style.transform = 'translateX(0)';
    //     }
    // }

    // 2
    // let bestBox2 = document.querySelector('.best_box2');
    
    // if (bestBox2) {
    //     let boxHeightHalf = bestBox2.offsetHeight ;
        
    //     let scrollPosition = window.scrollY;

    //     if (scrollPosition >= boxHeightHalf) {
    //         bestBox2.style.left = '50%';
    //         bestBox2.style.transform = 'translateX(-50%)';
    //     } else {
    //         bestBox2.style.left = '0';
    //         bestBox2.style.transform = 'translateX(0)';
    //     }
    // }

    // // 3
    // let bestBox3 = document.querySelector('.best_box3');
    
    // if (bestBox3) {
    //     let boxHeightHalf = bestBox3.offsetHeight;
        
    //     let scrollPosition = window.scrollY;

    //     if (scrollPosition >= boxHeightHalf) {
    //         bestBox3.style.left = '50%';
    //         bestBox3.style.transform = 'translateX(-50%)';
    //     } else {
    //         bestBox3.style.left = '0';
    //         bestBox3.style.transform = 'translateX(0)';
    //     }
    // }

    // // 4
    // let bestBox4 = document.querySelector('.best_box4');
    
    // if (bestBox4) {
    //     let boxHeightHalf = bestBox4.offsetHeight;
        
    //     let scrollPosition = window.scrollY;

    //     if (scrollPosition >= boxHeightHalf) {
    //         bestBox4.style.left = '50%';
    //         bestBox4.style.transform = 'translateX(-50%)';
    //     } else {
    //         bestBox4.style.left = '0';
    //         bestBox4.style.transform = 'translateX(0)';
    //     }
    // }
});