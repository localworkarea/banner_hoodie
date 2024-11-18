// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", () => {
  const animElements = document.querySelectorAll(".animEl");

  const observerOptions = {
      root: null, // Используем окно браузера как область просмотра
      rootMargin: "0px", // Без отступов
      threshold: 0.1 // 10% видимости
  };

  const animObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("_play-anim");
              observer.unobserve(entry.target); // Отменяем наблюдение после срабатывания
          }
      });
  }, observerOptions);

  animElements.forEach(el => animObserver.observe(el));
});
