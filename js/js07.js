// ==========================================================
// Bài 7: Form đăng ký thành viên - kiểm tra dữ liệu và hiển thị kết quả
// ==========================================================

document.getElementById("btnDangKy").onclick = function () {
    const oTen = document.getElementById("tenDangNhap");
    const oNgaySinh = document.getElementById("ngaySinh");

    const ten = oTen.value.trim();
    const matKhau = document.getElementById("matKhau").value;
    const ngaySinh = oNgaySinh.value;   // dạng "1990-06-06", rỗng nếu nhập sai
    const gioiTinh = document.querySelector("input[name='gioiTinh']:checked").value;
    const vanDe = document.getElementById("vanDe").value;

    // ---------- Kiểm tra: tên đăng nhập bắt buộc nhập ----------
    if (ten === "") {
        alert("Bạn phải nhập tên đăng nhập!");
        oTen.focus();
        return;
    }

    // ---------- Kiểm tra: ngày sinh phải đúng kiểu dữ liệu ----------
    if (ngaySinh === "") {
        alert("Bạn phải nhập ngày sinh đúng định dạng ngày/tháng/năm!");
        oNgaySinh.focus();
        return;
    }

    // ---------- Tính tuổi ----------
    const sinh = new Date(ngaySinh);
    const homNay = new Date();
    let tuoi = homNay.getFullYear() - sinh.getFullYear();

    // Nếu năm nay chưa tới sinh nhật thì trừ bớt 1 tuổi
    const chuaToiSinhNhat =
        homNay.getMonth() < sinh.getMonth() ||
        (homNay.getMonth() === sinh.getMonth() && homNay.getDate() < sinh.getDate());
    if (chuaToiSinhNhat) tuoi--;

    // ---------- Hiển thị kết quả ----------
    document.getElementById("kqDangKy").value =
        "Chào mừng " + ten + "\n" +
        "Bạn là " + gioiTinh + "\n" +
        "Mật khẩu của bạn có " + matKhau.length + " ký tự\n" +
        "Tuổi bạn là " + tuoi + "\n" +
        "Vấn đề bạn quan tâm là " + vanDe;
};
