function volume_sphere() {

let button = document.getElementById('#submit');
button.addEventListener("submit",()=>{

    //Write your code here
  let radius = parseFloat(document.getElementById("radius").value);
  let volumeField = document.getElementById("volume");
  
  if (isNaN(radius)) {
    volumeField.innerHTML = "Invalid input";
    return;
  }
  
  let volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volumeField.innerHTML = volume.toFixed(2);
}
})


// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
