

function setHeaderTemplates(){
    var headerTemplate='<img src="./assests/images/logo.png" alt="logo" class="logo" />'
    +'<span class="loginStyle">'
    +'<button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-target="#login" id="login-button1"style="padding: -0.625rem.75rem;"  data-dismis="modal" onclick="modalHeader()">LOGIN</button>'
 +'</span>'
  +'<br />';

    document.getElementById('header1').innerHTML +=headerTemplate;
}

function modalHeader(){
  let ifLogin = document.getElementById("login-button1").innerText == "LOGOUT";
    if(ifLogin){
      document.getElementById("login-button1").innerText = "LOGIN";
      if($("#payment")[0]){
        $("#payment")[0].disabled = true;
      }
    return;
    } else {
      document.getElementById("login-button1").setAttribute("data-target", "#login");

    }
      var modalHeader=  '<div class="modal" tabindex="-1" role="dialog" id="login" class="modal fade" data-backdrop="false">'
        +'<div class="modal-dialog" role="document">'
         +'<div class="modal-content">'
            +'<div class="modal-header">'
              +'<h5 class="modal-title" id="modal-header">Please Login</h5>'
              +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
                +'<span aria-hidden="true">&times;</span>'
              +'</button>'
            // <!--login-->
            +'<div class="modal" tabindex="-1" role="dialog" id="login">'
            +'<div class="modal-dialog" role="document">'
            +'<div class="modal-content">'
            +'<div class="modal-header">'
            +'<h5 class="modal-title" id="modal-header">Please'
            +'Login</h5>'
            +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
            +'<span aria-hidden="true">&times;</span>'
            +'</button>'
            +'</div>'
            +'<div class="modal-body" style="margin-left: 7%;margin-right: 7%;">'
                            +'<p style="display: flex; float: left;">'
                            +'<label style="margin-right: 25%;" for="name">Username:</label><br />'
                            +'<input type="text"  onchange="updateUserName()" id="name" placeholder="Enter Username" required />'
                            +'</p>'
                            +'<p style="display: flex; float: left;">'
                            +'<label style="margin-right: 25%;" for="example-input-password">Password:</label><br />'
                            +'<input type="password" id="example-input-password" placeholder="Enter Password" required'
                            +'autocomplete="off" />'
                            +'</p>'

                            +' </div>'
                            +'<div class="modal-footer">'
                            +'<button type="button" class="btn btn-primary'
                            +' btn-sm" style="display: flex; margin: auto; " data-dismiss="modal">Login2</button>'
                            +' </div>'
                            +'</div>'
                            +'</div>'
                            +'</div></div>'
                            +'<div class="modal-body" style="margin-left: 7%;'
                            +'margin-right: 7%;">'
                            +'<p style="display: flex; float: left;">'
                            +'<label style="margin-right: 25%;" for="name">Username:</label><br />'
                            +'<input type="text" id="name2" placeholder="Enter'
                            +' Username" required />'
                                    +'</p>'
                                    +'<p style="display: flex; float: left;">'
                                    +'<label style="margin-right: 25%;" for="example-input-password">Password:</label><br />'
                                    +'<input type="password" id="example-input-password2" placeholder="Enter Password" required'
                                    +'autocomplete="off" />'
                                    +'</p>'
  
                                    +'</div>'
                                    +'<div class="modal-footer">'
                                    +'<button type="button" data-dismiss="modal" class="btn btn-primary'
                                    +' btn-sm" style="display: flex; margin: auto;" onclick="myFunction()">Login</button>'
                                    +'</div>'
                                    +'</div>'
                                    +'</div>'
                                    +' </div>';
       
           document.getElementById('header1').innerHTML+=modalHeader;                        
  }

  


  localStorage.setItem("login-id", "admin");
  localStorage.setItem("login-pswd", "admin");

  function updateUserName(){
    console.log("updated");
  }

function myFunction() {
  let ifLogin = document.getElementById("login-button1").innerText == "LOGOUT";
  if(ifLogin){
    
    document.getElementById("login-button1").innerText = "LOGIN";
    return;
  }

  let userid = document.getElementById("name2").value;
  let userpswd = document.getElementById("example-input-password2").value;
  
  let storedId = localStorage.getItem("login-id");
  let storedPswd = localStorage.getItem("login-pswd");
  //console.log(userpswd,userid,storedId,storedPswd);
  if(userid == storedId && userpswd == storedPswd){
      alert("Successfully loggedin"); 
   document.getElementById("login-button1").innerText="LOGOUT";
   document.getElementById("login-button1").setAttribute("data-target", "")
  if($("#payment")[0]){
    $("#payment")[0].disabled = false;
  }

   
  } else {
    alert("failed"); 
  }

  }

function viewFunction() {
    var toggle=document.getElementById("vm");
    if (toggle.textContent === "View More") {
      document.getElementById("more").style.display="flex";
     
      toggle.innerText="View Less";
    
   
  } else {
    document.getElementById("more").style.display="none";
    toggle.innerText="View More";
  }
  }


setHeaderTemplates();
modalHeader1();