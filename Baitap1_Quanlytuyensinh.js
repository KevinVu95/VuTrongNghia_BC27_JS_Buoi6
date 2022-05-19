function tinhDiemKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "a": // tương đương khuVuc === "A"
      return 2;
    case "b":
      return 1;
    case "c":
      return 0.5;
    default:
      return 0;
  }
}
function tinhDiemDoiTuong(doiTuong) {
  switch (doiTuong) {
    case "doiTuong1":
      return 2.5;
    case "doiTuong2":
      return 1.5;
    case "doiTuong3":
      return 1;
    default:
      return 0;
  }
}

// Function đc gọi khi click vào button tính điểm
function inputOption() {
  // B1: Xác định đầu vào: 3 môn thi + khu vực + đối tượng
  var diem1 = +document.getElementById("diem1").value;
  var diem2 = +document.getElementById("diem2").value;
  var diem3 = +document.getElementById("diem3").value;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value;

  // B2: Xử lý tính điểm
  var diemKhuVuc = tinhDiemKhuVuc(khuVuc); // Gọi hàm
  var diemDoiTuong = tinhDiemDoiTuong(doiTuong);
  var diemTongKet = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
  var diemChuan = 15;
  hienThi(diem1, diem2, diem3, diemTongKet, diemChuan);
  
  // function hienThi(diem1, diem2, diem3, diemTongKet) {
  }

  function hienThi(diem1, diem2, diem3, diemTongKet, diemChuan) {
  if (!diem1 || !diem2 || !diem3 && diemTongKet < diemChuan) {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Rớt rồi";
  } else {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `${diemTongKet} - Đậu rồi`;
  }
  // }
}

// Output: Gọi hàm tính đã được xử lý