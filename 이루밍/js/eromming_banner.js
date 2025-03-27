var swiper = new Swiper(".mySwiper", {
    effect: 'slide',
    slidesPerView: 1, // 한번에 몇개 판 보여줄지 결정. 1 이상의 정수
    //slidesPerGroup: 1,// 한번에 몇개 판씩 넘길지 결정. 1 이상의 정수
    spaceBetween: 10, // 판 사이사이의 걸리
    loop: true, 

    autoplay: {
        delay: 2000 // 자동슬라이드 되서 가운데에 몇초동안 있을건지
    },
    speed: 1000 // 배너가 바깥에서 가운데로 출발해서 도착할때까지의 시간
});