
function fetchRandomDogImage() {
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random');

    xhrRequest.onload = function () {
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);

        var imageUrl = responseJSON.message;
        $('#dog-image').attr('src', imageUrl);
    }
    xhrRequest.send();
}

$('#fetch-dog').click(fetchRandomDogImage);