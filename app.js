function calculateVAT() {
  let price = parseFloat(document.getElementById('price').value);

  if (isNaN(price) || price < 0) {
    document.getElementById('result').innerText = "กรุณากรอกราคาที่ถูกต้อง";
    return;
  }

  let vatRate = 0.07;
  let vat = price * vatRate;
  let total = price + vat;

  document.getElementById('result').innerHTML = `
    ภาษีมูลค่าเพิ่ม (7%) = ${vat.toFixed(2)} บาท<br>
    ราคารวมภาษี = ${total.toFixed(2)} บาท
  `;
}
