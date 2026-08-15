// ==========================================================
// Bài 11: Vẽ biểu đồ Pie / Line / Column bằng Google Charts
//         Màu sắc được sinh ngẫu nhiên mỗi lần vẽ
// ==========================================================

// Nạp thư viện, khi nạp xong mới gán sự kiện cho nút
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(function () {
    document.getElementById("btnVe").onclick = veBieuDo;
});

// Hàm sinh một mã màu ngẫu nhiên dạng #RRGGBB
function mauNgauNhien() {
    const so = Math.floor(Math.random() * 16777216);   // 16777216 = 256*256*256
    return "#" + so.toString(16).padStart(6, "0");
}

function veBieuDo() {
    // ---------- 1. Đọc và tách dữ liệu nhập ----------
    const nhan = document.getElementById("tieuDe").value.split(",").map(s => s.trim());
    const giaTri = document.getElementById("giaTri").value.split(",").map(s => parseFloat(s));

    // ---------- 2. Kiểm tra dữ liệu ----------
    if (nhan.length !== giaTri.length) {
        alert("Số lượng tiêu đề và số lượng giá trị phải bằng nhau!");
        return;
    }
    if (giaTri.some(v => isNaN(v))) {
        alert("Giá trị nhập vào phải là số, cách nhau bởi dấu phẩy!");
        return;
    }

    const loai = document.querySelector("input[name='loaiBieuDo']:checked").value;

    // ---------- 3. Tạo bảng dữ liệu ----------
    const bang = new google.visualization.DataTable();
    bang.addColumn("string", "Tiêu đề");
    bang.addColumn("number", "Value");

    // Biểu đồ cột: thêm cột "style" để mỗi cột có một màu riêng
    if (loai === "Column") {
        bang.addColumn({ type: "string", role: "style" });
    }

    const mangMau = [];
    for (let i = 0; i < nhan.length; i++) {
        const mau = mauNgauNhien();
        mangMau.push(mau);

        if (loai === "Column") {
            bang.addRow([nhan[i], giaTri[i], "color: " + mau]);
        } else {
            bang.addRow([nhan[i], giaTri[i]]);
        }
    }

    // ---------- 4. Thiết lập tùy chọn và vẽ ----------
    const khung = document.getElementById("bieuDo");
    const options = { width: 700, height: 400 };
    let chart;

    if (loai === "Pie") {
        options.title = "Kết quả học tập";
        options.colors = mangMau;                 // mỗi phần một màu
        chart = new google.visualization.PieChart(khung);
    } else if (loai === "Line") {
        options.colors = [mauNgauNhien()];        // đường biểu diễn một màu
        chart = new google.visualization.LineChart(khung);
    } else {
        options.legend = { position: "none" };    // cột đã có màu riêng nên ẩn chú thích
        chart = new google.visualization.ColumnChart(khung);
    }

    chart.draw(bang, options);
}
