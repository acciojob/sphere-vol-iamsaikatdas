function volume_sphere() {
    //Write your code here
  const radius = parseFloat(document.getElementById("radius").value);
  const volumeField = document.getElementById("volume");
  
  if (isNaN(radius)) {
    volumeField.innerHTML = "Invalid input";
    return;
  }
  
  const volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volumeField.innerHTML = volume.toFixed(2);
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
