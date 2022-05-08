<!DOCTYPE html>
<html>

<?php
include("header.php");
?>

<head>
    <link rel="stylesheet" href="styles/styles.css">
    <link rel="stylesheet" href="styles/repositoriesStyles.css">
    <link id="icon" rel="icon" href="images/facecropped.png" types="image/icon type">

    <title>
        Repositories • Matthew Kenely
    </title>
</head>

<body>
    <main>
        <div id="repogrid" class="grid-container">

        </div>
    </main>
</body>

<?php
include("footer.php");
?>

<script>
    function httpGet(theUrl) {
        let xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.open("GET", theUrl, false);
        xmlHttpReq.send(null);
        return xmlHttpReq.responseText;
    }

    var parser = new DOMParser();
    var repos = httpGet("https://api.github.com/users/matthewkenely/repos");

    repos = JSON.parse(repos);

    var star = '\
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dedede" stroke-width="1.5"> \
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> \
    </svg> \
    ';

    var fork = ' \
    <svg aria-hidden="true" width="16" viewBox="0 0 16 16" fill="#dedede"> \
        <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path> \
    </svg> \
    ';

    appendRepos = function() {
        for (var i = repos.length - 1; i >= 0; i--) {
            var repo = repos[i];
            console.log(repo);

            var description = repo.description;

            if (description !== null) {
                document.getElementById("repogrid").innerHTML += '\
            <a href="' + repo.html_url + '" target="_blank"> \
                    <div class="grid-item"> \
                        <div class="grid-item-header"> \
                            <img class="repoimage" src="images/face.jpg"> \
                            <strong>' + repo.name + '</strong> \
                            <br> \
                            by ' + repo.owner.login + ' \
                        </div> \
                        <br> \
                        <div class="grid-item-description"> ' + repo.description + ' </div> \
                        <br> \
                        <div class="star-count">' + star + '&nbsp&nbsp' + repo.stargazers_count + '&nbsp&nbsp&nbsp&nbsp' + fork + '&nbsp&nbsp' + repo.forks_count + '</div> \
                    </div> \
                </a>';
            } else {
                document.getElementById("repogrid").innerHTML += '\
            <a href="' + repo.html_url + '" target="_blank"> \
                    <div class="grid-item"> \
                        <div class="grid-item-header"> \
                            <img class="repoimage" src="images/face.jpg"> \
                            <strong>' + repo.name + '</strong> \
                            <br> \
                            by ' + repo.owner.login + ' \
                        </div> \
                        <br> \
                        <div class="star-count">' + star + '&nbsp&nbsp' + repo.stargazers_count + '&nbsp&nbsp&nbsp&nbsp' + fork + '&nbsp&nbsp' + repo.forks_count + '</div> \
                    </div> \
                </a>';
            }


        }
    }

    appendRepos();
</script>



</html>