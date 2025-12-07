const btnThemMoi = document.getElementById("btnThemMoi");
btnThemMoi.onclick = function () {
  alert(
    "Chức năng thêm mới liên hệ sẽ được triển khai trong các phiên bản sau."
  );
  btnThemMoi.style.backgroundColor = "red";
  btnThemMoi.innerText = "Đã thêm mới";
};
