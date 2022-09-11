
## Dog Gallery (with breed)
### Fetching all the ids of html
    var breedImage = $("#breed-image");
    var dropdown = $("#dog-breeds");
    var getImage = $("#get-image");


### Adding options of all dog breeds in dropdown menu
    $.get("https://dog.ceo/api/breeds/list/all", function (data) {
        let dogBreeds = data.message;
        for (let breed in dogBreeds) {
            // console.log(breed);
            dropdown.append(` <option value="${breed}">${breed}</option>`);
        }
    });
### Below code only find the sub-breed nothing else 
#### when it find sub-breed it add another select tag below the current select tag
    dropdown.change(function () { //this is onchange event in javascript
        console.log("here is the change");
        let breed = dropdown.val(); //insert dropdown value(current);
        console.log(breed);
        //remove existing sub-breed here
        $("#dog-sub-breeds").remove();
        let url = "https://dog.ceo/api/breed/" + breed + "/list"; // url of particular breed
        $.get(url, function (data) {
            if (data.message.length !== 0) {
                let subBreeds = data.message;
                dropdown.after('<select  id="dog-sub-breeds"></select>');
                let subDropdown = $("#dog-sub-breeds");
                for (let subBreed of subBreeds) {
                    subDropdown.append(`<option value="${subBreed}">${subBreed}</option>`);
                    // console.log(subBreed);
                }
            }
        })
    })
### In below code it fetch all the images (including sub-breed if present) 
    getImage.click(function (e) {

        // here we remove existing image
        $("#breed-image img").remove();


        e.preventDefault();
        let breed = dropdown.val();
        let subBreed = $("#dog-sub-breeds").val();

        let url = "https://dog.ceo/api/breed/" + breed;
        if (subBreed !== undefined) {
            url += "/" + subBreed;
        }
        url += "/images";



        $.get(url, function (data) {
            let imgUrls = data.message;
            for (let i of imgUrls) {
                // here diff between {for... of} and {for... in} is of key value pair 

                // {in} -> key; and {for}-> value

                // console.log(i);

                breedImage.append(` <img src="${i}" alt="">`); // before append we need to remove previous img
            }
        })
    })

#
# JS file
    var breedImage = $("#breed-image");
    var dropdown = $("#dog-breeds");
    var getImage = $("#get-image");


    //adding options of all dog breeds in dropdown menu
    $.get("https://dog.ceo/api/breeds/list/all", function (data) {
        let dogBreeds = data.message;
        for (let breed in dogBreeds) {
            // console.log(breed);
            dropdown.append(` <option value="${breed}">${breed}</option>`);
        }
    });

    // below code only find the sub-breed nothing else 
    // when it find sub-breed it add another select tag below the current select tag

    dropdown.change(function () { //this is onchange event in javascript
        console.log("here is the change");
        let breed = dropdown.val(); //insert dropdown value(current);
        console.log(breed);
        //remove existing sub-breed here
        $("#dog-sub-breeds").remove();
        let url = "https://dog.ceo/api/breed/" + breed + "/list"; // url of particular breed
        $.get(url, function (data) {
            if (data.message.length !== 0) {
                let subBreeds = data.message;
                dropdown.after('<select  id="dog-sub-breeds"></select>');
                let subDropdown = $("#dog-sub-breeds");
                for (let subBreed of subBreeds) {
                    subDropdown.append(`<option value="${subBreed}">${subBreed}</option>`);
                    // console.log(subBreed);
                }
            }
        })
    })

    // in below code it fetch all the images (including sub-breed if present) ;
    getImage.click(function (e) {

        // here we remove existing image
        $("#breed-image img").remove();


        e.preventDefault();
        let breed = dropdown.val();
        let subBreed = $("#dog-sub-breeds").val();

        let url = "https://dog.ceo/api/breed/" + breed;
        if (subBreed !== undefined) {
            url += "/" + subBreed;
        }
        url += "/images";



        $.get(url, function (data) {
            let imgUrls = data.message;
            for (let i of imgUrls) {
                // here diff between {for... of} and {for... in} is of key value pair 

                // {in} -> key; and {for}-> value

                // console.log(i);

                breedImage.append(` <img src="${i}" alt="">`); // before append we need to remove previous img
            }
        })
    })
# Html file
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Dog gallery</title>
    </head>

    <body>

        <div class="header">
            <select id="dog-breeds">

            </select>
            <!-- <select id="">sub breed</select> -->

            <button id="get-image" type="submit">Get Image</button>
        </div>

        <div id="breed-image">

        </div>
        <script src="script.js"></script>
    </body>

    </html>

# Css file
    .header {
    display: inline-flex;
    justify-content: space-around;
    width: 100%;
    padding: 50px 0;
    background-image: linear-gradient(-90deg, floralwhite, azure);
    }

    #dog-breeds {
        padding: 10px;
        font-size: 1.4rem;
        width: 20%;
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

    .flex-center {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    #breed-image img {
        max-height: 400px;
        max-width: 100%;
        min-height: 300px;
        margin: 20px;
    }

    #dog-sub-breeds {
        padding: 10px;
        font-size: 1.1rem;
        width: 15%;
        min-width: 150px;
    }

    #dog-sub-breeds option {
        padding: 5px;
        font-size: 1rem;
    }
