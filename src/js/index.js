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

//========================================================================================================================================================

document.addEventListener("DOMContentLoaded", function () {
  const decrementButton = document.getElementById("increment");
  const incrementButton = document.getElementById("decrement");
  const counterElement = document.getElementById("counter");

  let counterValue = 1;

  function updateCounter() {
    counterElement.textContent = counterValue;

    if (counterValue === 0) {
      // Disable decrement button when counter is 0
      decrementButton.disabled = true;
    } else {
      decrementButton.disabled = false;
    }

    if (counterValue === 10) {
      // Show maximum order message when counter reaches 10
      alert("maximum order - 10");
    }
  }

  decrementButton.addEventListener("click", function () {
    if (counterValue > 0) {
      counterValue--;
      updateCounter();
    }
  });

  incrementButton.addEventListener("click", function () {
    if (counterValue < 10) {
      counterValue++;
      updateCounter();
    }
  });

  // Initial counter update
  updateCounter();
});
//========================================================================================================================================================
$(document).ready(function () {
  // Отримання елементів DOM за допомогою jQuery
  const userAvatar = $("#userAvatar");
  const loginModal = $("#loginModal");
  const loginForm = $("#loginForm");
  const loginClose = $("#login-modal__close");

  // Приховуємо вікно логіна при завантаженні сторінки
  loginModal.hide();

  // Обробник події для кліку на "User--avatar"
  userAvatar.click(function () {
    // Показуємо вікно логіна
    loginModal.show();

    loginClose.click(() => {
      loginModal.hide();
    });
  });

  // Обробка події для відправлення форми логіна
  loginForm.submit(function (event) {
    event.preventDefault();

    // Отримання даних з форми
    var email = $("#email").val();
    var password = $("#password").val();

    // Ваш код для взаємодії з сервером (наприклад, виклик AJAX-запиту)
    // Тут ви можете викликати сервер для перевірки облікових даних та інших операцій

    // При успішній автентифікації можна закрити вікно логіна
    loginModal.hide();
  });
});
