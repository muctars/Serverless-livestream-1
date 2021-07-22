function getImage (event) {
    event.preventDefault();
    let bunniForm = document.getElementById("myform");
    // get image upload by user via the form, saved in payload
    
    let nameInput = document.getElementById('username');
    let fileInput = document.getElementById('image');
    const file = fileInput.files[0];

    let payload = new FormData(bunniForm);
    console.log(payload)
     // fileInput is the file upload input element
    payload.append("file", file);
    $('#output').text("Thanks!")

    
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
        console.log("POST request was make successfully.")
        $('#output').text("Your image has been stored successfully!");
        } catch(err){
            $("#output").text(err);
        }
    } else {
        alert("No name error.");
    }
}

async function downloadImage() {
  let username = document.getElementById("downloadusername").value
  
  if(document.getElementById("downloadusername").value != ""){
    try{
      let url = "https://emotionalmultiparse.azurewebsites.net/api/bunnimage-download";
    fetch(url, {
      headers: {
        "username": username
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
      console.log(data.downloadUri);
      window.open(data.downloadUri, "_self")
      });
  }
    catch(err){
      alert(err);
    }
  } else {
    alert("No name error.");
  }
}