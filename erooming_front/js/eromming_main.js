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
    

});
