

function displayMenu() {
  console.log("It works!");

  document.getElementById("divImgIcon").style.display = "none";
  document.getElementById("myNav").style.display = "block";

}

function fn_open_link(productid) {
  let pid = productid - 1;
  window.open(`product.html?${pid}`);

}



//document.getElementById('productHiddenId').innerHTML = id;
