// when page loads function is called
$(document).ready(function () {
    var artist = localStorage.getItem("artist",artist);

    // function to get lyrics and bio of artist from local storage
    function pull() {
        var lyrics = localStorage.getItem("lyrics");
        var bio = localStorage.getItem("bio");
        console.log(artist)

        // adds data to divs
        $("#lyric").text(lyrics);
        $("#artist").append(bio);
    }

    // calls pull function
    $(document).ready(pull);

    //giphy api key
    apiKey = "VXFKfUEDGiDnEtN79DdqISGnxkkAsyID";
    querylURL = 'https://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&q=' + artist + '&limit=1&offset=0&lang=en'

    // ajax call to get data for gift bio
    $.ajax({
        url: querylURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $('#gifTag').attr('src',response.data[0].images.original.mp4)
        $('video').trigger('play');
    });

    // button to go back to home page and clear local storage
    $("#backBtn").on("click", function () {
        window.location.href = "index.html";
        localStorage.clear();
    })

});