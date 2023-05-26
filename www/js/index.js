var storage = window.localStorage;
//var server_url = "https://demo.ega-id.com/api.php";
var server_url = "";

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  //get server addr
  if(storage.getItem("server_addr")) {
    server_url = storage.getItem("server_addr");
  } else {
    storage.setItem("server_addr","http://127.0.0.1/rfid/api.php")
  }
  /*checkSession();*/
  getDeviceId();
}

function logOut() {
  storage.removeItem("userid");
  storage.removeItem("username");
  window.location.href = "login.html";
}

function checkSession() {
  var fileName = location.pathname.split("/").slice(-1);
  if (storage.getItem("userid")) {
    
  } else {
    if(fileName[0] == "login.html" || fileName[0] == "setting.html") {
      
    } else {
      window.location.href = "login.html";
    }
  }
}

function getDeviceId() {
  var device_id = device.uuid.toUpperCase();
  if($("#device_id").length > 0) {
    $("#device_id").val(device_id);
  }  
  storage.setItem("device_id", device_id); 
}

function backAction() {
  var r = confirm("Do You Want to Exit Application?");
  if(r == true) {
    navigator.app.exitApp();
  }
}
