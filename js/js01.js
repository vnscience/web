let html = "<table>";

// 2 hàng, mỗi hàng 4 ô
for (let hang = 0; hang < 2; hang++) {
    html += "<tr>";

    for (let cot = 0; cot < 4; cot++) {
        let i = hang * 4 + cot + 2; // hàng thứ nhất thì tương ứng i = 2, 3, 4, 5; hàng thứ 2 thì là 6, 7, 8, 9
        html += "<td>";

        for (let j = 2; j <= 9; j++) {
            html += i + " x " + j + " = " + (i * j) + "<br>";
        }

        html += "</td>";
    }

    html += "</tr>";
}


html += "</table>";

// Đổ chuỗi HTML vào trong thẻ div đã tạo
document.getElementById("ket-qua").innerHTML = html;