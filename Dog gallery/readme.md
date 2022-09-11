
# Creating Raw Dog Gallery By Own

## Fetching html class and id in JS variable
    let dropdown = $("#dropdown");
    let getImage = $("#get-image");
    let display = $(".display-dog");



### Api link used
`'https://dog.ceo/api/breeds/list/all'`



## Adding all Breeds in Dropdwon menu
    $.get('https://dog.ceo/api/breeds/list/all', (data) => {
        let breeds = data.message;
        for (let breed in breeds) {
            dropdown.append(`
            <option value="${breed}">${breed}</option>
            `)
        }
    });

## If someone click (get-image) button of html file
    let breed;
    getImage.click(function (e) {   
        e.preventDefault();        
        console.log(e);
        breed = dropdown.val(); // selected option of dropdown;
        displayDog(breed);
    });

## Showing Selected option of dogs
### API link used 
`let url = "https://dog.ceo/api/breed/" + breed + "/images";`
### Removing current images of dogs to display New one
    $(".display-dog img").remove();
### Now whole function look like:
    function displayDog(breed) {
        let url = "https://dog.ceo/api/breed/" + breed + "/images";

        $(".display-dog img").remove();

        $.get(url, function (data) {
            let imageUrl = data.message; // this contain array of URLs
            for (let i in imageUrl) {    // to fetch (ith) url we use (i) 
                 display.append(`<img src="${imageUrl[i]}" alt="" style ="height:5em; width:5em; ">`);
            }
        })
    }

#### Here if u see clearly the api link return all the images of dog(same breeds)
#### So we use for **loop** for that, on above code
#### to know the format of url we can go through the url and observe the pattern 

# Html file
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, 
        initial-scale=1.0">
        <script src=" https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">
        </script>
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>

    <body>
        <div class="container">
            <div class="header">
                <select name="" id="dropdown">


                </select>
                <button id="get-image">Get Image</button>
            </div>
        </div>

        <div class="display-dog">

        </div>
        <script src="script.js"></script>
    </body>

    </html>

# Css file
    .display-dog {
    height: 100vh;
    width: 100%;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */

    flex-wrap: wrap;
    }