// ==========================================================
// Bài 9: Trang hồ sơ cá nhân
//        - Thêm kỹ năng mới bằng hộp thoại prompt
//        - Thêm kinh nghiệm làm việc từ form
// ==========================================================

// ---------- 1. Nút "Thêm kỹ năng" ----------
document.getElementById("btnThemKyNang").onclick = function () {
    const kyNang = prompt("Nhập kỹ năng mới:");

    // Bấm Cancel -> null ; bỏ trống -> "" : cả 2 đều không thêm
    if (kyNang === null || kyNang.trim() === "") return;

    // Tạo thẻ <span class="the">Kỹ năng</span> rồi thêm vào danh sách
    const span = document.createElement("span");
    span.className = "the";
    span.textContent = kyNang.trim();

    document.getElementById("dsKyNang").appendChild(span);
};

// ---------- 2. Nút "Thêm kinh nghiệm" ----------
document.getElementById("btnThemKN").onclick = function () {
    const oTen = document.getElementById("tenKN");
    const oMoTa = document.getElementById("moTaKN");

    if (oTen.value.trim() === "") {
        alert("Bạn chưa nhập kinh nghiệm!");
        oTen.focus();
        return;
    }

    // Tạo khối: <div class="kn"><b>Tên</b><p>Mô tả</p></div>
    const khoi = document.createElement("div");
    khoi.className = "kn";

    const b = document.createElement("b");
    b.textContent = oTen.value.trim();

    const p = document.createElement("p");
    p.textContent = oMoTa.value.trim();

    khoi.appendChild(b);
    khoi.appendChild(p);
    document.getElementById("dsKinhNghiem").appendChild(khoi);

    // Xóa trắng ô nhập để nhập tiếp
    oTen.value = "";
    oMoTa.value = "";
    oTen.focus();
};
