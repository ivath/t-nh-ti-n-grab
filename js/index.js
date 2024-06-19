const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

function kiemTraTienKmDauTien(loaiXE) {
  switch (loaiXE) {
    case UBER_CAR:
      return 8000;

    case UBER_SUV:
      return 9000;

    case UBER_BLACK:
      return 10000;
  }
}

function kiemTraTu1Den19(loaiXE) {
  switch (loaiXE) {
    case UBER_CAR:
      return 7500;

    case UBER_SUV:
      return 8500;

    case UBER_BLACK:
      return 9500;
  }
}

function kiemTraTu19TroLen(loaiXE) {
  switch (loaiXE) {
    case UBER_CAR:
      return 7000;

    case UBER_SUV:
      return 8000;

    case UBER_BLACK:
      return 9000;
  }
}

function kiemTraTGChoDuoi3Phut(loaiXE) {
  switch (loaiXE) {
    case UBER_CAR:
      return 0;
    case UBER_SUV:
      return 0;
    case UBER_BLACK:
      return 0;
  }
}

// yêu cầu thực hiện viết 1 sự kiện onclick cho button tính tiền và truy xuất tính tiền của 3 input

let thanhTien = document.getElementById("divThanhTien");

thanhTien.style.display = "block";

document.getElementById("btnTinhTien").onclick = function () {
  let soKM = document.getElementById("txt-km").value * 1;
  let soTG = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(soKM);
  console.log(soTG);
  let loaiXE = document.querySelector("input[type='radio']:checked");
  if (!loaiXE) {
    alert("vui lòng chọn loại xe");
    return;
  }

  if (soKM <= 0) {
    alert("vui lòng nhập số km lớn hơn 0");
    return;
  }

  // console.log(loaiXE);
  let valueLoaiXE = loaiXE.value;

  let giaKmDauTien = kiemTraTienKmDauTien(valueLoaiXE);
  console.log(giaKmDauTien);
  let giaKmTu1Den19 = kiemTraTu1Den19(valueLoaiXE);
  console.log(giaKmTu1Den19);
  let giaKmTu19TroLen = kiemTraTu19TroLen(valueLoaiXE);
  console.log(giaKmTu19TroLen);

  function kiemTraTGChoTren3Phut(loaiXE) {
    switch (loaiXE) {
      case UBER_CAR:
        return Math.ceil((soTG - 3) / 3) * 2000;
      case UBER_SUV:
        return Math.ceil((soTG - 3) / 3) * 3000;
      case UBER_BLACK:
        return Math.ceil((soTG - 3) / 3) * 3500;
    }
  }

  let tgChoDuoi3Phut = kiemTraTGChoDuoi3Phut(valueLoaiXE);
  // console.log(tgChoDuoi3Phut);
  let tgChoTren3Phut = kiemTraTGChoTren3Phut(valueLoaiXE);
  console.log(tgChoTren3Phut);

  let tongTien = 0;
  if (soKM <= 19) {
    tongTien = giaKmDauTien * 1 + (soKM - 1) * giaKmTu1Den19;
  } else {
    tongTien =
      giaKmDauTien * 1 + 18 * giaKmTu1Den19 + (soKM - 19) * giaKmTu19TroLen;
  }

  if (soTG <= 3) {
    tongTien += tgChoDuoi3Phut;
  } else {
    tongTien += tgChoTren3Phut;
  }

  console.log(tongTien);

  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  );

  // tính tiền thời gian chờ và hoàn thành phần thành tiền t3 dl
};
