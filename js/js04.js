// ==========================================================
// Bài 4: Tạo mảng ngẫu nhiên các số nguyên < 50
//        Sắp xếp mảng tăng dần / giảm dần
// ==========================================================

let mang = [];   // biến toàn cục lưu mảng ban đầu

// ---------- Nút "Tạo mảng" ----------
document.getElementById("btnTao").onclick = function () {
    const n = parseInt(document.getElementById("soPhanTu").value);

    if (isNaN(n) || n <= 0) {
        alert("Vui lòng nhập số phần tử là một số nguyên dương!");
        return;
    }

    mang = [];
    for (let i = 0; i < n; i++) {
        // Math.random() -> [0, 1)  =>  * 50 -> [0, 50)  =>  floor -> 0..49
        mang.push(Math.floor(Math.random() * 50));
    }

    hienThi("mangGoc", "Mảng ban đầu", mang);
    document.getElementById("mangTang").innerHTML = "";   // xóa kết quả cũ
    document.getElementById("mangGiam").innerHTML = "";
};

// ---------- Nút "Sắp xếp mảng tăng" ----------
document.getElementById("btnTang").onclick = function () {
    if (!kiemTraMang()) return;

    // [...mang] tạo bản sao để không làm thay đổi mảng ban đầu
    const tang = [...mang].sort(function (a, b) { return a - b; });
    hienThi("mangTang", "Mảng tăng dần", tang);
};

// ---------- Nút "Sắp xếp mảng giảm" ----------
document.getElementById("btnGiam").onclick = function () {
    if (!kiemTraMang()) return;

    const giam = [...mang].sort(function (a, b) { return b - a; });
    hienThi("mangGiam", "Mảng giảm dần", giam);
};

// ---------- Các hàm phụ ----------
function kiemTraMang() {
    if (mang.length === 0) {
        alert("Bạn hãy bấm 'Tạo mảng' trước!");
        return false;
    }
    return true;
}

function hienThi(idThe, nhan, m) {
    document.getElementById(idThe).innerHTML =
        "<b>" + nhan + ":</b> " + m.map(x => '<span class="so">' + x + "</span>").join(" ");
}
