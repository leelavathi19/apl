function submitbutton(){
    var email=document.getElementById("exampleInputEmail1").value;
    var password=document.getElementById("exampleInputPassword1").value;

    document.getElementById("user").innerHTML=`<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">email=${email}</li>
      <li class="list-group-item">password=${password}</li>
      
    </ul>
    <button type="reset" class="btn btn-primary" onclick="reset()">reset</button>
  </div>`;
}
function reset(){
    document.getElementById("user").innerHTML=`<form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    
    <button type="submit" class="btn btn-primary" onclick="submitbutton()">Submit</button>
  </form>`;
}