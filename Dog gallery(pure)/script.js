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

