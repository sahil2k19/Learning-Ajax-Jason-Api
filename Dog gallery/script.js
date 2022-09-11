let dropdown = $("#dropdown");
let getImage = $("#get-image");
let display = $(".display-dog");
// let allowSubmit = true;

$.get('https://dog.ceo/api/breeds/list/all', (data) => {
    let breeds = data.message;
    for (let breed in breeds) {
        dropdown.append(`
        <option value="${breed}">${breed}</option>
        `)
    }
})

// dropdown.change(function () {
//     allowSubmit = true;
// })

// if someone click get - image button
let breed;
getImage.click(function (e) {
    e.preventDefault();
    // if (allowSubmit) {
    console.log(e);
    breed = dropdown.val();
    displayDog(breed);
    console.log(breed);
    // }
})


function displayDog(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images";
    $(".display-dog img").remove();
    $.get(url, function (data) {
        let imageUrl = data.message;
        // console.log(imageUrl);
        for (let i in imageUrl) {
            // console.log(imageUrl[i]);

            display.append(`<img src="${imageUrl[i]}" alt="" style ="height:5em; width:5em; ">`);
        }
    })
}




