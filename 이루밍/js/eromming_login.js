document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    
    console.log("아이디:", id);
    console.log("비밀번호호:", password);

    if (id === "asd" && password === "asdf") {
        alert("로그인에 성공하셨습니다.")

        location.href="./eromming_main.html?mode=user"
    }

});

