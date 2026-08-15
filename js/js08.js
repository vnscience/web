// ==========================================================
// Bài 8: Cập nhật chuỗi, màu chữ, màu nền cho vùng hiển thị
// ==========================================================

document.getElementById("btnThucHien").onclick = function () {
    const bangChu = document.getElementById("bangChu");

    // Đổi nội dung
    bangChu.textContent = document.getElementById("noiDung").value;

    // Đổi màu nền và màu chữ (dùng thuộc tính style của phần tử)
    bangChu.style.backgroundColor = document.getElementById("mauNen").value;
    bangChu.style.color = document.getElementById("mauChu").value;
};
