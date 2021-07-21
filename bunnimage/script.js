function getImage (event) {
    event.preventDefault();
    let bunniForm = document.getElementById("myform");
    // get image upload by user via the form, saved in payload
    
    let nameInput = document.getElementById('name');
    let fileInput = document.getElementById('image');

    let payload = new FormData(bunniForm);
    console.log(payload)
    const file = fileInput.files[0]; // fileInput is the file upload input element
    payload.append("file", file);
    $('#output').text("Thanks!")

    let url = "https://emotionalmultiparse.azurewebsites.net/api/bunnimage-upload"
    if (document.getElementById("name").value != "") {

        try{
            let url = "https://emotionalmultiparse.azurewebsites.net/api/bunnimage-upload"

           
            console.log("Image was uploaded, making POST request to Azure function");
            // Create request to our azure functions
            const response = fetch(url, {
                method: "POST",
                headers: {
                    "codename": nameInput.value
                },
                body: payload
        })
        $('output').text("Your image has been stored successfully!");
        } catch(err){
            $("#output").text(err);
        }

        
    } else {
        alert("No name error.");
    }

    
    
}