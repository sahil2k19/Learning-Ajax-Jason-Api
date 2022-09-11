let image = $("#image-container");

function displayImage(data) {
    image.append(` <iframe width="420" height="315" src="${data.url}">
    </iframe>`)


    // $('<img>', {
    //     src: data.url,
    //     height: '100%',
    //     width: '100%',
    // }).appentTo(image);

}



$.ajax({
    // url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
    // url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-06-05",//passing date

    method: "GET",
    success: displayImage,
    //instead of writing on url we case pass api key and date on {data}
    //then url will be :- https://api.nasa.gov/planetary/apod
    data: {
        url: "https://api.nasa.gov/planetary/apod",

        api_key: "DEMO_KEY",
        date: '2018-06-05',
    }
});