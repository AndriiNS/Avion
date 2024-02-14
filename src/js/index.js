import mobileNav from "./modules/mobile-nav.js";
mobileNav();
$(document).ready(function () {
  // Початково приховуємо картки поза першими 4
  $(".ceramic__items .ceramic__item:gt(3)").hide();

  // Додаємо обробник кліку для кнопки "View Collection"
  $("#viewAllBtn").click(function () {
    // Плавно відображаємо/приховуємо картки поза першими 4
    $(".ceramic__items .ceramic__item:gt(3)").slideToggle();

    // Змінюємо текст кнопки в залежності від видимості
    var buttonText = $(this).text().trim();
    $(this).text(buttonText === "View More" ? "Hide Collection" : "View More");
  });
});
