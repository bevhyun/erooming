document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const file = document.getElementById('file').files[0];
    
    console.log("제목:", title);
    console.log("내용:", content);
    if (file) {
        console.log("파일 업로드:", file.name);
    } else {
        console.log("파일 없음");
    }
    
    alert("게시글이 작성되었습니다.");
    location.href="./eromming_post.html?mode=read"
});

document.getElementsByClassName('list_btn')[0].addEventListener('click', function(event) {
    history.go(-1)
});

if(mode == "read") {
    let title =document.getElementById('title')
    title.setAttribute('readonly', true)

    let content =document.getElementById('content')
    content.setAttribute('readonly', true)


    var listButtons = document.getElementsByClassName('list_btn');
    var submitButtons = document.getElementsByClassName('submit-btn');
    var fileupButtons = document.getElementsByClassName('file_up_btn');
    var filename = document.getElementsByClassName('file_name');
    

    // 모든 list-btn 요소의 display를 'block'으로 설정
    for (let btn of listButtons) {
        btn.style.display = 'block';
    }

    for (let btn of submitButtons) {
        btn.style.display = 'none';
    }

    for (let btn of fileupButtons) {
        btn.style.display = 'none';
    }

    title.value = post_list[bid].post_title
    content.value = post_list[bid].post_txt
}