function tinhDiemKhuVuc(khuVuc) {
    switch (khuVuc) {
      case "A": // tương đương khuVuc === "A"
        return 2;
        break;
      case "B":
        return 1;
        break;
      case "C":
        return 0.5;
        break;
      default:
        return 0;
    }
  }
  
  // Function đc gọi khi click vào button tính điểm
  function baitap1() {
    // B1: Xác định đầu vào: 3 môn thi + khu vực + đối tượng
    var diem1 = +document.getElementById("diem1").value;
    var diem2 = +document.getElementById("diem2").value;
    var diem3 = +document.getElementById("diem3").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
  
    // B2: Xử lý tính điểm
    var diemKhuVuc = tinhDiemKhuVuc(khuVuc); // Gọi hàm
    var diemDoiTuong = tinhDiemDoiTuong(doiTuong);
    var tongDiem = tinhTongDiem(diem1, diem2, diem3);
  
    var diemTongKet = tongDiem + diemKhuVuc + diemDoiTuong;
    hienThi(diem1, diem2, diem3, diemTongKet);
  }
  
  function hienThi(diem1, diem2, diem3, diemTongKet) {
    if (!diem1 || !diem2 || !diem3) {
      document.getElementById("ketQua").style.display = "block";
      document.getElementById("spanketQua").innerHTML = "Rớt mất tiêu rồi";
    } else {
      document.getElementById("ketQua").style.display = "block";
      document.getElementById("spanketQua").innerHTML = diemTongKet;
    }
}