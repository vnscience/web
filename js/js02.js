// Nhập tháng và năm khi trang vừa load
let thang = parseInt(prompt("Nhập tháng"));
let nam = parseInt(prompt("Nhập năm", "2000"));
// Kiểm tra dữ liệu nhập

if (isNaN(thang) || thang < 1 || thang > 12) {
    alert("Tháng không hợp lệ! Mặc định lấy tháng 1.");
    thang = 1;
}

if (isNaN(nam) || nam < 1) {
    alert("Năm không hợp lệ! Mặc định lấy năm 2000.");
    nam = 2000;
}

// Tính số ngày trong tháng
const soNgay = new Date(nam, thang, 0).getDate();
document.getElementById("so-ngay").innerText = "Tháng " + thang + " năm " + nam + " có " + soNgay + " ngày";

// Xử lý nút xem ngày giờ
let idDongHo = null; // Lưu id của setInterval để không tạo trùng đồng hồ

document.getElementById("btn-xem").onclick = function () {
    const homNay = new Date();

    // getDay()
    const thu = homNay.getDay() === 0 ? "chủ nhật" : "thứ " + (homNay.getDay() + 1);

    document.getElementById("hom-nay").innerHTML =
    "Hôm nay, " + thu + " ngày " + homNay.getDate() + "/" + (homNay.getMonth() + 1) + "/" + homNay.getFullYear();

    hienGio();

    if (idDongHo) clearInterval(idDongHo);
    idDongHo = setInterval(hienGio, 1000);

}

function hienGio() {
    const t = new Date();

    document.getElementById("dong-ho").innerHTML
    = haiSo(t.getHours()) + ":" + haiSo(t.getMinutes()) + ":" + haiSo(t.getSeconds());
}

function haiSo(n) {
    return n < 10 ? "0" + n : "" + n;
}
