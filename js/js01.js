// ==========================================================
// Bài 1: In bảng cửu chương từ 2 đến 9
// Trình bày: 2 hàng, mỗi hàng 4 bảng  ->  2,3,4,5 / 6,7,8,9
// ==========================================================

let html = "<table>";

for (let hang = 0; hang < 2; hang++) {          // 2 hàng
    html += "<tr>";

    for (let cot = 0; cot < 4; cot++) {         // mỗi hàng 4 ô
        let i = hang * 4 + cot + 2;             // số cần lập bảng: 2, 3, ... 9
        html += "<td>";

        for (let j = 2; j <= 9; j++) {          // in i x 2 -> i x 9
            html += i + " x " + j + " = " + i * j + "<br>";
        }

        html += "</td>";
    }

    html += "</tr>";
}

html += "</table>";

// Đổ chuỗi HTML vừa tạo vào thẻ div
document.getElementById("ket-qua").innerHTML = html;
