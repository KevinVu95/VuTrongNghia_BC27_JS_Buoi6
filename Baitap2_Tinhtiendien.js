function tinhTien() {
  var totalPrice;
  var fullName = document.getElementById('fullName').value;
  var inputKW = +document.getElementById('inputKW').value;

  if(inputKW <= 50) {
    totalPrice = 500 * inputKW;
  } else if(inputKW <= 100) {
    totalPrice = (500 * 50) + (inputKW - 50) * 650;
  } else if(inputKW <= 200) {
    totalPrice = (500 * 50) + (650 * 50) + (inputKW - 100) * 850;
  } else if(inputKW <= 350) {
    totalPrice = (500 * 50) + (650 * 50) + (850 * 100) + (inputKW - 200) * 1100;
  } else {
    totalPrice = (500 * 50) + (650 * 50) + (850 * 100) + (1100 * 150) + (inputKW - 350) * 1300;
  };
  document.getElementById('getTotalPrice').style.display='block'
  document.getElementById('getTotalPrice').innerHTML=`Số tiền cần thanh toán là: ${totalPrice}.`
}










