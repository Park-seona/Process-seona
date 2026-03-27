// 클릭 시, dot 나타남

document.addEventListener('DOMContentLoaded', function () {

  var nav = document.querySelector('.nav');
  if (!nav) return;

  nav.addEventListener('click', function (e) {

    var link = e.target.closest('.nav-link');
    if (!link) return;

    var links = nav.querySelectorAll('.nav-link');

    // 더미 링크일 경우만 기본 동작 막기
    var href = link.getAttribute('href');
    if (!href || href === '#') {
      e.preventDefault();
    }

    // 이미 활성화 상태면 전체 초기화 (원상복구)
    if (link.classList.contains('is-active')) {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
      return;
    }

    // 기존 active 제거
    links.forEach(function (item) {
      item.classList.remove('is-active');
      item.removeAttribute('aria-current');
    });

    // 새 active 추가
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'page');

  });

});



// 햄버거 메뉴 아이콘 눌렀을 경우, 나오는 창 (오->왼)

document.querySelector('.mobile_menu_toggle').addEventListener('click', function() {
  document.body.classList.add('menu_active');
});

document.querySelector('#mobile-nav #close').addEventListener('click', function() {
  document.body.classList.remove('menu_active');
});

document.querySelector('.menu-overlay').addEventListener('click', function() {
  document.body.classList.remove('menu_active');
});