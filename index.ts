function Hidebutton() {
    let x =document.getElementById("skills") as HTMLButtonElement;
    if(x.style.display === "none") {
      x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }