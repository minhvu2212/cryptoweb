window.onload = function() {
    // Code for any onload events
};

// Other JavaScript functions
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các liên kết có lớp "scroll-link"
    const scrollLinks = document.querySelectorAll(".scroll-link");

    // Gắn sự kiện click cho mỗi liên kết
    scrollLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

            // Lấy ID của phần cần lướt đến từ thuộc tính href
            const targetId = this.getAttribute("href").substring(1);

            // Lấy phần cần lướt đến dựa trên ID
            const targetSection = document.getElementById(targetId);

            // Kiểm tra nếu phần tồn tại
            if (targetSection) {
                // Sử dụng scrollTo để lướt đến phần tử đó
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth" // Làm cho lướt xuống mượt hơn
                });
            }
        });
    });
});
