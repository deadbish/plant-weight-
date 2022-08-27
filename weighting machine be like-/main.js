var x = document.getElementsByClassName("cur-weight").value;

document.getElementsByClassName("cur-weight").addEventListener("click", displayinput);

function displayinput() {
  document.getElementById("para-mercury").innerHTML = x.join();
}

