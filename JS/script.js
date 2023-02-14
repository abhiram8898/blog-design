function validate() {
    let x = document.getElementById("fname").value;
    if (x == "" || x == null) {
        alert("Name is mandatory");
        return false;
    }
    var regName = /^[a-z A-Z]{2,20}$/;
    if (!regName.test(x)) {
        alert("Name must be in characters");
       
    }

    let y = document.getElementById("email").value;
    if (y == "" || y == "null") {
        alert("Email is mandatory");
       
    }

    var mailFormat =
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!mailFormat.test(y)) {
        alert("Email not in format!");
        return false;
    }

    var a = document.getElementById("adate").value;

    if (a == "" || a == "null") {
        alert("Arriving time is mandatory");
    }
    var a1 = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (!a1.test(a)) {
        alert("Arriving time is mandatory");
    }

    b = document.getElementById("package").value;
    if (b == "select") {
        alert("please select the package");
        return false;
    }

    c = document.getElementById("persons").value;
    if (c == "" || c == "null") {
        alert("Please enter number of persons");
    }
    if (isNaN(c)) {
        alert("Please enter Numeric value");
        return false;
    }
    if (
        document.getElementById("agree").checked == false &&
        document.getElementById("disagree").checked == false
    ) {
        alert("Please agree terms");
        return false;
    }

    if (
        document.getElementById("boarding").checked == false &&
        document.getElementById("fooding").checked == false &&
        document.getElementById("sightseeing").checked == false
    ) {
        alert("Tell us what you want to do ? ");
        return false;
    } else return true;
}
