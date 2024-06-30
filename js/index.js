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

document.getElementById("btnTinhTien").onclick = function () {
  thanhTien.style.display = "block";
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

document.getElementById("btnInHoaDon").onclick = function () {
  let soKM = document.getElementById("txt-km").value * 1;
  let soTG = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXE = document.querySelector("input[type='radio']:checked");

  if (!loaiXE) {
    alert("vui lòng chọn loại xe");
    return;
  }

  if (soKM <= 0) {
    alert("vui lòng nhập số km lớn hơn 0");
    return;
  }

  let valueLoaiXE = loaiXE.value;
  console.log(valueLoaiXE);
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

  function kiemTraMucGiaTG(loaiXE) {
    switch (loaiXE) {
      case UBER_CAR:
        return 2000;
      case UBER_SUV:
        return 3000;
      case UBER_BLACK:
        return 3500;
    }
  }

  let tgChoDuoi3Phut = kiemTraTGChoDuoi3Phut(valueLoaiXE);
  // console.log(tgChoDuoi3Phut);
  let tgChoTren3Phut = kiemTraTGChoTren3Phut(valueLoaiXE);
  // console.log(tgChoTren3Phut);
  let tienKmDauTien = giaKmDauTien * 1;
  let tienKmTu1Den19 = (soKM - 1) * giaKmTu1Den19;
  let tienKMTu19 = 18 * giaKmTu1Den19;
  let tienKmtu19TroLen = (soKM - 19) * giaKmTu19TroLen;

  console.log(tienKmTu1Den19);
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

  let tableBody = "";
  tableBody += ` <tr>
                  <th scope="row">KM ĐẦU TIÊN</th>
                  <th scope="row">1km </th>
                  
                  <th scope="row">${kiemTraTienKmDauTien(valueLoaiXE)} VND </th>
                  <th scope="row">${tienKmDauTien} VND</th>
                </tr>`;

  if (soKM > 1 && soKM <= 19) {
    tableBody += `<tr>
                  <th scope="row">KM từ 1 đến ${soKM} </th>
                  <th scope="row">${soKM - 1} </th>
                  
                  <th scope="row">${kiemTraTu1Den19(valueLoaiXE)} VND </th>
                  <th scope="row">${tienKmTu1Den19} VND</th>
                </tr>`;
  } else {
    tableBody += `<tr>
                  <th scope="row">KM từ 1 đến 19 </th>
                  <th scope="row"> 18 </th>
                  
                  <th scope="row">${kiemTraTu1Den19(valueLoaiXE)} VND</th>
                  <th scope="row">${tienKMTu19} VND</th>
                </tr>

                <tr>
                  <th scope="row">KM từ 19 đến ${soKM} </th>
                  <th scope="row">${soKM - 19} </th>
                  
                  <th scope="row">${kiemTraTu19TroLen(valueLoaiXE)} VND</th>
                  <th scope="row">${tienKmtu19TroLen} VND</th>
                </tr>`;
  }

  if (soTG <= 3) {
    tableBody += `<tr>
                  <th scope="row">Thời gian chờ nhỏ hơn 3 hoặc bằng 3 phút(free) </th>
                  <th scope="row"> 0 phút </th>
                  
                  <th scope="row">2.000 VND </th>
                  <th scope="row">0 VND </th>
                </tr>`;
  } else {
    tableBody += `<tr>
                  <th scope="row">Thời gian chờ lớn hơn 3 phút( mỗi 3 phút ) </th>
                  <th scope="row"> ${soTG} phút </th>
                  
                  <th scope="row">${kiemTraMucGiaTG(valueLoaiXE)} </th>
                  <th scope="row"> ${tgChoTren3Phut} VND</th>
                </tr>`;
  }

  tableBody += ` <th scope="row">Tổng Tiền : ${tongTien} VND</th>`;

  $("#exampleModal").modal("show");
  // tạo giao dien table cho modal-body
  document.querySelector(".modal-body").innerHTML = `
  <table class="table">
              <thead>
                <tr>
                  <th scope="col">Chi Tiết Hóa Đơn</th>

                </tr>

                <tr>
                  <th scope="row">LOẠI XE</th>
                  <th colspan="3">${valueLoaiXE} 
                     </th>
                  
                  
                </tr>
                <tr>
                  <th scope="row">CHI TIẾT</th>
                  <th scope="row">SỬ DỤNG </th>
                  <th scope="row">ĐƠN GIÁ</th>
                  <th scope="row">THÀNH TIỀN</th>
                </tr>



              </thead>
              <tbody>
                ${tableBody}
                
                
                
                
                

               
              </tbody>
            </table>`;
};

//hoàn thành hóa đơn
