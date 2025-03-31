const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode');
if(mode == "user") {
    document.querySelector('.postlist').style.display = 'block';
    document.querySelector('.join').style.display = 'none';
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.mypage').style.display = 'block';

    document.addEventListener('DOMContentLoaded', function () {
        const serviceDiv = document.querySelector('.service');
        if (serviceDiv) {
            serviceDiv.addEventListener('click', function (event) {
                event.preventDefault(); // <a> 기본 동작 막기
                window.location.href = './eromming_service.html?mode=user';
            });
        }

        const jsname = document.querySelector('.name');
        if (jsname) {
            jsname.addEventListener('click', function (event) {
                event.preventDefault();
                window.location.href = './eromming_main.html?mode=user';
            });
        }

        const jsinfo = document.querySelector('.info');
        if (jsinfo) {
            jsinfo.addEventListener('click', function (event) {
                event.preventDefault(); // <a> 기본 동작 막기
                window.location.href = './eromming_main.html?mode=user';
            });
        }

        const jspostlist = document.querySelector('.postlist');
        if (jspostlist) {
            jspostlist.addEventListener('click', function (event) {
                event.preventDefault(); // <a> 기본 동작 막기
                window.location.href = './eromming_list.html?mode=user';
            });
        }

    });
}
