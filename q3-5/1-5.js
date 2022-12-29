function openCity(cityName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
    var texts = document.getElementsByClassName('text');
    for (var i = 0; i < texts.length; i++) {
        if (texts[i].classList.contains(cityName)) {
          texts[i].classList.add('show');
      } else {
          texts[i].classList.remove('show');
      }
    }

}
document.getElementById("defaultOpen").onclick();