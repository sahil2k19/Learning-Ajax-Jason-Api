
## Fetching Id's
    var breedImages = $("#breed-images");
    var dropdown = $("#dog-breeds");
    var allowSubmit = true;
    var breed;
## Fetching List of all Dogs
    $.get("https://dog.ceo/api/breeds/list/all", function (data) {
        let dogBreeds = data.message;
        for (let breed in dogBreeds) {
            dropdown.append('<option value="' + breed + '">' + breed + '</option>');
        }
    });

#### Another way of doing 

    $.ajax({
        url: 'https://dog.ceo/api/breeds/list/all',
        method: 'GET',
        success: (data) => {
            let dogBreeds = data.message;
            for (let breed in dogBreeds) {
                //another way of adding tag
                dropdown.append(` <option value = "${breed}" > ${breed}</option> `);
            }
        }
    })
## Detect Change in DropDown
#### Detect change in dropdown  and allowSubmit =true
    dropdown.change(function () {
        allowSubmit = true;  // allowing the change in dropdown;
    });
## Adding function when someone click GET-IMAGE button
    $("form button").click(function (e) {
        e.preventDefault(); // prevent the default function of button

        if (allowSubmit) {  // if the option is valid then execute
            breed = dropdown.val();   //dropdown value is inserted inside Breed
            displayDog(breed);
            // allowSubmit = true;
        }

    });
## Adding function in next button
    $("#next a").click(function (e) {
        e.preventDefault();
        if (breed !== undefined) {
            displayDog(breed);
        }
    });
## Main Function

### After pressing next button below function will execute
    // remove current dog-img
    // display fetched dog-img
    function displayDog(breed) {
    //url for random dog of same breed
        let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

        $("#breed-image img").remove(); //removing img tag;

        $.get(url, function (data) { // 
            let imageUrl = data.message; // storing url of random dog

            //adding img tag  in BREED-IMAGE container
            breedImage.append('<img src="' + imageUrl + '" alt="' + breed + '">');
        });

    }
## Whole HTML CODE
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>
            Random Dog Image(breed)
        </title>
    </head>

    <body>
    <form action="">
        <select id="dog-breeds">

        </select>
        <button type="submit">Get Image</button>
    </form>

    <div id="flex">
        <div id="breed-image" class="flex-center">
        </div>
        <div id="next" class="flex-center">
            <a href="">Next&ensp;>></a>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="script.js"></script>
    </body>

    </html>
## CSS
    form {
    display: inline-flex;
    justify-content: space-around;
    width: 100%;
    padding: 50px 0;
    background-image: linear-gradient(-90deg, floralwhite, azure);
    }

    #dog-breeds {
        padding: 10px;
        font-size: 1.4rem;
        width: 30%;
        min-width: 200px;
    }

    #dog-breeds option {
        padding: 10px;
        font-size: 1rem;
    }

    form label {
        padding: 5px 0;
    }

    form input {
        padding: 5px;
    }

    button {
        width: 150px;
        height: 40px;
        font-family: monospace;
        font-size: 1.2rem;
        cursor: pointer;
    }

    button:hover {
        box-shadow: 0px 0px 30px 2px grey;
    }

    #flex {
        display: flex;
        margin-top: 50px;
        height: 400px;
    }

    #breed-image {
        width: 60%;
        min-width: 300px;
        overflow: hidden;
    }

    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #breed-image img {
        max-height: 400px;
        max-width: 100%;
        min-height: 300px;
    }

    #next {
        width: 40%;
    }

    #next a {
        font-size: 1.5rem;
        color: skyblue;
        text-decoration: none;
        border: 1px solid lightgrey;
        padding: 10px 20px;
    }

    #next a:hover {
        box-shadow: 0px 0px 10px lightblue;
        text-shadow: 0px 0px 5px lightblue;
    }