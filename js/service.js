document.addEventListener("DOMContentLoaded", function () {
    // فتح النافذة المنبثقة
    const buttons = document.querySelectorAll(".btn-donate");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const popupId = this.getAttribute("data-popup");
        const popup = document.getElementById(popupId);
        if (popup) {
          popup.style.display = "flex";
        }
      });
    });

    // إغلاق النافذة المنبثقة
    const closeButtons = document.querySelectorAll(".close-btn");
    closeButtons.forEach((closeBtn) => {
      closeBtn.addEventListener("click", function () {
        const popup = this.closest(".popup");
        if (popup) {
          popup.style.display = "none";
        }
      });
    });

    // إغلاق النافذة عند النقر خارجها
    window.addEventListener("click", function (event) {
      if (event.target.classList.contains("popup")) {
        event.target.style.display = "none";
      }
    });
  });
