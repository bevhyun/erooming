// function increaseViewCount(postId) {
//     fetch(`/increase_view/${postId}`, {
//         method: 'POST',
//     }).then(response => {
//         if (response.ok) {
//             console.log('조회수 증가');
//         }
//     }).catch(error => {
//         console.error('오류 발생:', error);
//     });
// }
console.log(post_list)
for(let i = post_list.length-1; i>=0  ; i--){
    document.getElementById('ttt').innerHTML += `<tr>
                        <td>${post_list[i].post_num+1}</td>
                        <td><a href="eromming_post.html?mode=read&id=${post_list[i].post_num}">${post_list[i].post_title} </a></td>
                        <td>${post_list[i].post_user}</td>
                        <td>${post_list[i].post_time }</td>
                        <td>${post_list[i].post_open }</td>
                    </tr>`
}