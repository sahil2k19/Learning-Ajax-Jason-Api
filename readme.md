
# How to Create Dog Api

## Creating Ajax request

To create Dog Api we need a Api and we need to create html for that, 
where we create a button and we join the functionality to that button.






## API Reference
    https://dog.ceo/api/breeds/image/random



## Step 1
    In html create <button> 

## Step 2
    In js file fetch that button and add function 

## Step-3 Making request 
    var xhrRequest  = new XMLHttpRequest(); // to create new http request

### We have created object now we have to initialise that 
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random',true);
In above code the (true) here is Asynchronous request , Asynchronous is by default; 

### Once the request is receive (we need a handler)
#### This step come before we send the request to server
    xhrRequest.onload = fucntion(){
        console.log(xhrRequest.response)
    };



### Now we need to make request to the server
    xhrRequest.send();

#### After that doing all the above thing we will endup getting a string on console which is {xhrRequest.response}
    {"message":"https:\/\/images.dog.ceo\/breeds\/redbone\/n02090379_2066.jpg","status":"success"}
#### Now we need to convert the string to {json}
    xhrRequest.onload = fucntion(){
        console.log(xhrRequest.response);

        // below code
        var response = JSON.parse(xhrRequest.response);
        // above code has two thing status and message and we need message for now
        
        var imageUrl = responseJSON.message;
        $('#dog-image').attr('src', imageUrl); // here we fetch the image id of html code

    };

### Now the final JS code looks like 
    
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
    
### Also final html code 
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <title>Dog Api</title>
    </head>

    <body>
        <button id="fetch-dog" style="margin:10px; ">Fetch</button>

        <div id="dog-image-container" style="margin:20px">
            <img id="dog-image">
        </div>
        <script src="script.js"></script>
    </body>

    </html>

## To handle Error:-
### In plain vanilla js
    xhrRequest.onerror = function(){
        console.log("request failed");

    }
### 
    



