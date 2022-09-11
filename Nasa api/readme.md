
# Using Nasa API
### In this project we will fetch video of NASA APOD 
#
## First we fetch ID from html
    let image = $("#image-container");
## To get API data
### We pass here function (displayImage)
    
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        method: "GET",
        success: displayImage,
       
        data: {
            api_key: "DEMO_KEY",
            date: '2018-06-05',
        }
    });
#### Another way of doing (without data and date)
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
        method: "GET",
        success: displayImage,       
    });

## Now writing function(displayImage)
    function displayImage(data) {
        image.append(` <iframe width="420" height="315" src="${data.url}">
        </iframe>`)
    }
### Another way of writing 
    function displayImage(data) {
        $('<img>', {
            src: data.url,
            height: '100%',
            width: '100%',
        }).appentTo(image);
    }

#
#
# Html File
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <link rel="stylesheet" href="style.css">
        <title>Nasa</title>
    </head>

    <body>
        <div id="image-container" style="margin:20px">

        </div>

        <script src="script.js"></script>
    </body>

    </html>
