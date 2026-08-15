// ==========================================================
// Bài 10: Dùng JavaScript vẽ trên phần tử <canvas>
//         Nền xanh cyan -> hình tròn đỏ -> hình thoi vàng -> chữ HTML5
// ==========================================================

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");   // "bút vẽ" 2 chiều

// ---------- 1. Vẽ nền màu cyan ----------
ctx.fillStyle = "cyan";
ctx.fillRect(0, 0, 300, 300);          // (x, y, rộng, cao)

// ---------- 2. Vẽ hình tròn tô màu chuyển sắc trắng -> đỏ ----------
const grad = ctx.createRadialGradient(150, 150, 20, 150, 150, 145);
grad.addColorStop(0, "#ffffff");       // tâm: trắng
grad.addColorStop(1, "#e00000");       // viền: đỏ

ctx.beginPath();
ctx.arc(150, 150, 145, 0, 2 * Math.PI);  // (tâmX, tâmY, bán kính, góc đầu, góc cuối)
ctx.fillStyle = grad;
ctx.fill();

// ---------- 3. Vẽ hình thoi màu vàng, viền xanh ----------
ctx.beginPath();
ctx.moveTo(150, 20);    // đỉnh trên
ctx.lineTo(280, 150);   // đỉnh phải
ctx.lineTo(150, 280);   // đỉnh dưới
ctx.lineTo(20, 150);    // đỉnh trái
ctx.closePath();        // nối về đỉnh đầu tiên

ctx.fillStyle = "yellow";
ctx.fill();
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.stroke();

// ---------- 4. Viết chữ HTML5 ----------
ctx.font = "bold 50px Arial";
ctx.fillStyle = "blue";
ctx.textAlign = "center";       // canh giữa theo tọa độ x
ctx.textBaseline = "middle";    // canh giữa theo tọa độ y
ctx.fillText("HTML5", 150, 150);
