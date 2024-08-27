window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.scrollY > 200) { // กำหนดจำนวนพิกเซลที่ต้องเลื่อนลงมาก่อนที่ header จะโปร่ง
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
};
