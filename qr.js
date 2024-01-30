const form = document.getElementById("generateform");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = function(submit)  {
  submit.preventDefault();

  clearUI();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;
console.log(url, size)

    showLoading();
  
    setTimeout(() => {
      hideLoading();
      generateQR(url, size);
          }, 1000);
}

const generateQR = function(url, size) {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
  
};

const clearUI = function() {
  qr.innerHTML = "";
};

const showLoading = function() {
  const loading = document.getElementById("loading");
  loading.style.display = "block";
};

const hideLoading = function() {
  const loading = document.getElementById("loading");
  loading.style.display = "none";
};

hideLoading();

form.addEventListener("submit", onGenerateSubmit);





























