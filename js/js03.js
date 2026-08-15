// ==========================================================
// Bài 3: Thống kê số ký tự, số từ và số lần xuất hiện
//        của mỗi ký tự (chữ và số) trong chuỗi
// ==========================================================

document.getElementById("btnThongKe").onclick = function () {
    const s = document.getElementById("chuoi").value;

    // ---------- 1. Số ký tự của chuỗi ----------
    const soKyTu = s.length;

    // ---------- 2. Số từ ----------
    // trim(): bỏ khoảng trắng đầu/cuối
    // split(/\s+/): cắt chuỗi tại 1 hoặc nhiều khoảng trắng
    const mangTu = s.trim().split(/\s+/).filter(tu => tu !== "");
    const soTu = mangTu.length;

    // ---------- 3. Đếm số lần xuất hiện của từng ký tự chữ và số ----------
    const dem = {};                    // đối tượng lưu theo dạng: ký tự -> số lần
    const sHoa = s.toUpperCase();      // đổi hoa hết để không phân biệt hoa/thường

    for (let i = 0; i < sHoa.length; i++) {
        const c = sHoa[i];
        // chỉ đếm chữ cái A-Z và chữ số 0-9
        if ((c >= "A" && c <= "Z") || (c >= "0" && c <= "9")) {
            dem[c] = (dem[c] || 0) + 1;    // chưa có thì bắt đầu từ 0, có rồi thì +1
        }
    }

    // ---------- 4. Xuất kết quả ----------
    let kq = "Characters: " + soKyTu + "<br>";
    kq += "Words: " + soTu + "<br>";

    // sort(): sắp xếp ký tự tăng dần theo mã (số đứng trước, chữ đứng sau)
    const dsKyTu = Object.keys(dem).sort();
    for (let i = 0; i < dsKyTu.length; i++) {
        const c = dsKyTu[i];
        kq += "Character '" + c + "': " + dem[c] + "<br>";
    }

    document.getElementById("kqThongKe").innerHTML = kq;
};
