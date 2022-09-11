
### API Link
    https://codingninjas.in/api/v3/courses
### Creating variable for Courses div
    var courseList = $("#courses");
### When someone Click Button then API call happen
    $("button").click(function () {

        $.get("https://codingninjas.in/api/v3/courses", function (data) {
            let courses = data.data.courses;
            for (let course of courses) {
                courseList.append(`
                <div class="card shadow-sm mx-2 my-4" style="width:18rem;">
                <img src="${course.preview_image_url}" class="card-image-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${course.name}</p>
                    <p class="card-text-right">${course.level}</p>
                </div>
            </div>
                `);
            }
        });
        $("#get-course").remove();
    });


## Code Breakdown
#
### If someone click on button
`$("button").click(function () {
`
### we fetch courses from API 
#### Here first data is -> data what we pass and IInd data is the course data 
    let courses = data.data.courses;
####  Let this taken as data.(content) -> here content is (data.courses)

#
#
### Using for loop to get all the data in "courseList" variable 
    for (let course of courses) {
        courseList.append(`
            <div class="card shadow-sm mx-2 my-4" style="width:18rem;">
                <img src="${course.preview_image_url}" class="card-image-top" alt="...">
                <div class="card-body">
                <p class="card-text">${course.name}</p>
                <p class="card-text-right">${course.level}</p>
                </div>
            </div>
        `);
    }
#
#
### Finally we remove the id="get-course"
     $("#get-course").remove();


#
#
# Html file
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <link rel="stylesheet" href="style.css">
        <title>Courses</title>
    </head>

    <body>
        <div id="get-course" class="d-flex flex-wrap justify-content-around">
            <h1 class="text-capitalize">Get all the courses</h1>\
            <button type="button" id="button" class="px-5 py-3 mt-4">Fetch Courses</button>
        </div>
        <div id="courses" class="d-flex flex-wrap justify-content-around">

            <!-- here we get the api value -->

        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
        <script src="script.js"></script>
    </body>

    </html>
#
#
# Css file  
    #get-course {
    background-color: aliceblue;
    margin-top: 10%;
    padding: 20px;

    }

    #button {
        margin-top: 30px;
        padding: 10px 50px;
    }