// ==========================================================
// Bài 2: Nhập tháng, năm -> cho biết số ngày của tháng đó
//        Nút "Xem ngày giờ" -> hiện ngày hiện tại + đồng hồ điện tử
// ==========================================================

// ---------- 1. Nhập tháng và năm khi trang vừa load ----------
let thang = parseInt(prompt("Nhập tháng"));
let nam = parseInt(prompt("Nhập năm", "2000"));

// Kiểm tra dữ liệu nhập, nếu sai thì dùng giá trị mặc định
if (isNaN(thang) || thang < 1 || thang > 12) {
    alert("Tháng không hợp lệ! Mặc định lấy tháng 1.");
    thang = 1;
}
if (isNaN(nam) || nam < 1) {
    alert("Năm không hợp lệ! Mặc định lấy năm 2000.");
    nam = 2000;
}

// ---------- 2. Tính số ngày trong tháng ----------
// Mẹo: new Date(nam, thang, 0) chính là ngày CUỐI CÙNG của tháng "thang"
// (vì tháng trong JS đếm từ 0, nên "thang" ở đây là tháng kế tiếp, ngày 0 = lùi lại 1 ngày)
// Cách này tự động đúng cả năm nhuận (tháng 2 năm 2000 -> 29 ngày)
const soNgay = new Date(nam, thang, 0).getDate();

document.getElementById("so-ngay").innerHTML =
    "Tháng " + thang + " năm " + nam + " có " + soNgay + " ngày";

// ---------- 3. Nút "Xem ngày giờ" ----------
let idDongHo = null;   // lưu id của setInterval để không tạo trùng nhiều đồng hồ

document.getElementById("btn-xem").onclick = function () {
    const homNay = new Date();

    // getDay(): 0 = Chủ nhật, 1 = Thứ hai, ... 6 = Thứ bảy
    const thu = homNay.getDay() === 0 ? "chủ nhật" : "thứ " + (homNay.getDay() + 1);

    document.getElementById("hom-nay").innerHTML =
        "Hôm nay, " + thu + " ngày " + homNay.getDate() +
        "/" + (homNay.getMonth() + 1) + "/" + homNay.getFullYear();

    hienGio();                                  // hiện giờ ngay lập tức
    if (idDongHo) clearInterval(idDongHo);      // hủy đồng hồ cũ (nếu bấm nút nhiều lần)
    idDongHo = setInterval(hienGio, 1000);      // cập nhật mỗi 1 giây
};

// Hàm hiển thị giờ:phút:giây hiện tại
function hienGio() {
    const t = new Date();
    document.getElementById("dong-ho").innerHTML =
        haiSo(t.getHours()) + ":" + haiSo(t.getMinutes()) + ":" + haiSo(t.getSeconds());
}

// Hàm thêm số 0 phía trước cho đủ 2 chữ số: 7 -> "07"
function haiSo(n) {
    return n < 10 ? "0" + n : "" + n;
}
