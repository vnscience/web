// ==========================================================
// Bài 6: Thực hiện các phép tính số học trên form
// ==========================================================

document.getElementById("btnThucHien").onclick = function () {
    const ketQua = document.getElementById("ketQua");

    // parseFloat: đổi chuỗi nhập vào thành số thực
    const a = parseFloat(document.getElementById("so1").value);
    const b = parseFloat(document.getElementById("so2").value);

    // Kiểm tra dữ liệu nhập
    if (isNaN(a) || isNaN(b)) {
        alert("Vui lòng nhập đầy đủ 2 số hợp lệ!");
        ketQua.value = "";
        return;
    }

    // Lấy phép toán đang được chọn (radio nào có thuộc tính checked)
    const phepToan = document.querySelector("input[name='phepToan']:checked").value;

    let r;
    switch (phepToan) {
        case "+":
            r = a + b;
            break;
        case "-":
            r = a - b;
            break;
        case "*":
            r = a * b;
            break;
        case "/":
            if (b === 0) {
                alert("Không thể chia cho 0!");
                ketQua.value = "";
                return;
            }
            r = a / b;
            break;
    }

    ketQua.value = r;
};
