
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form"); // تحديد النموذج الرئيسي
        const inputs = form.querySelectorAll("input[required], select[required]"); // جلب الحقول المطلوبة فقط

        form.addEventListener("submit", function (event) {
            let isValid = true; // متغير للتحقق من صحة البيانات

            inputs.forEach(input => {
                let errorSpan = input.parentNode.querySelector(".error-message"); // البحث عن رسالة الخطأ

                if (!input.value.trim()) { // إذا كان الحقل فارغًا
                    if (!errorSpan) {
                        errorSpan = document.createElement("span");
                        errorSpan.className = "error-message text-danger";
                        errorSpan.style.fontSize = "0.9rem";
                        errorSpan.textContent = "يجب ملء هذا الحقل.";
                        input.parentNode.appendChild(errorSpan);
                    }
                    isValid = false;
                } else {
                    if (errorSpan) {
                        errorSpan.remove(); // إزالة رسالة الخطأ عند التصحيح
                    }
                }
            });

            if (!isValid) {
                event.preventDefault(); // منع إرسال النموذج إذا لم يتم إدخال جميع القيم
            }
        });

        // إزالة رسالة الخطأ بمجرد أن يبدأ المستخدم في الكتابة داخل الحقل
        inputs.forEach(input => {
            input.addEventListener("input", function () {
                let errorSpan = input.parentNode.querySelector(".error-message");
                if (errorSpan) {
                    errorSpan.remove();
                }
            });
        });
    });