function ajax_post() {
    var hr = new XMLHttpRequest();
    var url = "my_parse_file.php";
    var fn = document.getElementById("first_name").value;
    var ln = document.getElementById("last_name").value;
    var vars = "firstname="+fn+"&lastname"+ln;
    hr.open("POST", url, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.onreadystatechange = function () {
        if (hr.readyState == 4 && hr.status ==200){
            var return_data = hr.responseText;
            document.getElementById("status").innerHT;ML = return_data;
        }
    }
    hr.send(vars);
    document.getElementById("status").innerHTML = "processing.."
}