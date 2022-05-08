let onMobile = false;
let darkmode = false;

let content = document.getElementById("maininfo"); // Page content
let readarea = document.getElementById("readarea"); // Page background

let sidenav = document.getElementById("sidenav"); // Desktop sidenav
let mobilesidenav = document.getElementById("mobilesidenav"); // Mobile sidenav

let bottombackground = document.getElementById("bottombackground"); // Mobile buttons background

let sidenavbutton = document.getElementById("collapsible");
let darkmodebutton = document.getElementById("darkmodebutton");

let all_info = document.getElementsByClassName("info");
let all_maininfoheaders = document.getElementsByClassName("maininfoheader");

let all_pagelinks = document.getElementsByClassName("pagelink");
let all_pagelinkimgs = document.getElementsByClassName("pagelinkimg");

/* Load entire page when done */
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        sidenav.style.visibility = "visible";
    } else {
        document.querySelector("body").style.visibility = "visible";
    }
};

/* Perform resizeCheck() whenever the window is resized for live window responsiveness */
window.onresize = function () {
    resizeCheck();
}

/* Sidenav collapse functionality */
collapse = function () {
    content.style.transition = "0.4s";

    // Desktop
    if (onMobile == false) {
        // Extended
        if (sidenav.style.width === "18%") {
            sidenav.style.width = "0%";
            sidenavbutton.innerHTML = "&gt";
            sidenavbutton.style.paddingLeft = "1%";

            // Collapsed
        } else {
            sidenav.style.width = "18%";
            sidenavbutton.innerHTML = "&lt";
            sidenavbutton.style.paddingLeft = "19%";
        }
    }

    // Mobile
    else {
        // Extended
        if (mobilesidenav.style.width === "100%") {
            mobilesidenav.style.width = "0%";
            sidenavbutton.innerHTML = "&gt";

            // Collapsed
        } else {
            mobilesidenav.style.width = "100%";
            sidenavbutton.innerHTML = "&lt";
        }
    }
}

/* Window aspect ratio responsiveness */
resizeCheck = function () {

    // Desktop
    if (window.innerWidth / window.innerHeight > 1.6) {
        mobilesidenav.style.display = "none";
        sidenav.style.display = "block";

        onMobile = false;
        content.style.paddingRight = "100px";

        if (sidenav.style.width === "18%") {
            content.style.paddingLeft = "100px";
            sidenavbutton.style.paddingLeft = "19%";
            sidenavbutton.innerHTML = "&lt";
        }
    }

    // Mobile
    else {
        sidenav.style.display = "none";
        mobilesidenav.style.display = "block";

        onMobile = true;

        sidenavbutton.style.paddingLeft = "21px";
        sidenavbutton.innerHTML = "&gt"

        content.style.paddingLeft = "40px";
        content.style.paddingRight = "40px";



        if (mobilesidenav.style.width === "100%") {
            collapse();
            sidenavbutton.innerHTML = "&gt"
        }
    }

    buttonCheck();
}

/* Checks what state the sidenav collapsible button should be in */
buttonCheck = function () {
    // Desktop
    if (onMobile == false) {
        // Opened
        if (sidenavbutton.innerHTML == "&lt;" && sidenav.style.width === "18%") {
            sidenavbutton.style.paddingLeft = "19%";
        }

        // Collapsed
        else {
            sidenavbutton.style.paddingLeft = "1%";
        }
    }

    // Mobile
    else {
        // Extended
        if (mobilesidenav.style.width === "100%") {
            sidenavbutton.innerHTML == "&lt"
            sidenavbutton.style.color = "#f1f1f1";
        }

        // Collapsed
        else {
            sidenavbutton.innerHTML == "&gt"

            if (darkmode) {
                sidenavbutton.style.color = "#f1f1f1";
            }

            else {
                sidenavbutton.style.color = "#1F1F21";
            }
        }
    }
}

/* Switch between light mode and dark mode */
changeLight = function () {
    console.log(1)
    // Light mode --> Dark mode
    if (!darkmode) {
        darkmode = true;

        body.style.backgroundColor = "#303133";
        readarea.style.backgroundColor = "#2c2d2f";

        sidenavbutton.style.color = "#f1f1f1";
        darkmodebutton.style.color = "#f1f1f1";

        bottombackground.style.backgroundColor = "#303133"

        for (var i = 0; i < all_info.length; i++) {
            all_info[i].style.color = "#e2e2e2";
        }

        for (var i = 0; i < all_maininfoheaders.length; i++) {
            all_maininfoheaders[i].style.color = "#e2e2e2";
        }

        for (var i = 0; i < all_pagelinks.length; i++) {
            all_pagelinks[i].style.color = "#e2e2e2";
        }

        for (var i = 0; i < all_pagelinkimgs.length; i++) {
            all_pagelinkimgs[i].src = "images/pageicondarkmode.png";
        }
    }

    // Dark mode --> Light mode
    else {
        darkmode = false;

        body.style.backgroundColor = "#e2e2e2";
        readarea.style.backgroundColor = "#f1f1f1";

        sidenavbutton.style.color = "#1F1F21";
        darkmodebutton.style.color = "#1F1F21";

        bottombackground.style.backgroundColor = "#e2e2e2"

        for (var i = 0; i < all_info.length; i++) {
            all_info[i].style.color = "#353535";
        }

        for (var i = 0; i < all_maininfoheaders.length; i++) {
            all_maininfoheaders[i].style.color = "#464646";
        }

        for (var i = 0; i < all_pagelinks.length; i++) {
            all_pagelinks[i].style.color = "#353535";
        }

        for (var i = 0; i < all_pagelinkimgs.length; i++) {
            all_pagelinkimgs[i].src = "images/pageiconlightmode.png";
        }
    }
}