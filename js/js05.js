// ==========================================================
// Bài 5: Chương trình xử lý chuỗi
// ==========================================================

const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const viTri = document.getElementById("viTri");

const chuoiGoc = s1.value;   // lưu chuỗi gốc để nút "Khôi phục" dùng lại

// Hàm tạo mẫu tìm kiếm S2, "g" = tìm tất cả, "i" = không phân biệt hoa/thường
function mauTimS2(chuoi) {
    // \\$& : giữ nguyên các ký tự đặc biệt của biểu thức chính quy (. * + ? ...)
    const antoan = chuoi.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(antoan, "gi");
}

// ---------- 1. Chuẩn hóa chuỗi ----------
// Xóa khoảng trắng thừa đầu/cuối/giữa + viết hoa ký tự đầu mỗi từ
document.getElementById("btnChuanHoa").onclick = function () {
    let s = s1.value.trim()          // bỏ khoảng trắng đầu và cuối
                    .replace(/\s+/g, " ")   // nhiều khoảng trắng giữa -> còn 1
                    .toLowerCase();         // đưa về chữ thường hết

    // Tách thành từng từ, viết hoa chữ cái đầu rồi nối lại
    s = s.split(" ")
         .map(tu => tu.charAt(0).toUpperCase() + tu.slice(1))
         .join(" ");

    s1.value = s;
};

// ---------- 2. Đảo chuỗi (đảo thứ tự các từ) ----------
document.getElementById("btnDao").onclick = function () {
    s1.value = s1.value.trim().split(/\s+/).reverse().join(" ");
};

// ---------- 3. Khôi phục chuỗi gốc ----------
document.getElementById("btnKhoiPhuc").onclick = function () {
    s1.value = chuoiGoc;
};

// ---------- 4. Thay thế S2 bằng S3 (không phân biệt hoa/thường) ----------
document.getElementById("btnThayThe").onclick = function () {
    if (s2.value === "") {
        alert("Chuỗi S2 không được rỗng!");
        return;
    }
    s1.value = s1.value.replace(mauTimS2(s2.value), s3.value);
};

// ---------- 5. Chèn S2 vào S1 tại vị trí chèn ----------
document.getElementById("btnChen").onclick = function () {
    const vt = parseInt(viTri.value);

    // Kiểm tra giá trị nhập
    if (isNaN(vt) || vt < 0 || vt > s1.value.length) {
        alert("Vị trí chèn phải là số nguyên từ 0 đến " + s1.value.length);
        viTri.focus();
        return;
    }

    // Cắt S1 thành 2 phần rồi ghép S2 vào giữa
    s1.value = s1.value.slice(0, vt) + s2.value + s1.value.slice(vt);
};

// ---------- 6. Xóa tất cả S2 trong S1 (không phân biệt hoa/thường) ----------
document.getElementById("btnXoa").onclick = function () {
    if (s2.value === "") {
        alert("Chuỗi S2 không được rỗng!");
        return;
    }
    s1.value = s1.value.replace(mauTimS2(s2.value), "");
};
