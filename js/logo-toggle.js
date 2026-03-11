$(document).ready(function () {
    // الحصول على عنصر الشعار
    var $logo = $("#img-logo");

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            // عندما يتم التمرير لأسفل، تغيير الشعار
            $logo.attr('src', '/images/logo.png'); // تأكد من أن المسار صحيح
        } else {
            // عندما يتم التمرير للأعلى، إعادة الشعار الأصلي
            $logo.attr('src', '/images/logo1.png'); // تأكد من أن المسار صحيح
        }
    });
});
