function y1k3s() {
    let name1 = document.getElementById("name1").value;
    let endpoint1 = "https://emotionalmultiparse.azurewebsites.net/api/twocatz" + name1;
    if(name1 != ""){
        document.getElementById("image1").src = endpoint1; // call to the api
    }

    let name2 = document.getElementById("name2").value;
    let endpoint2 = "https://emotionalmultiparse.azurewebsites.net/api/twocatz" + name2;
    if(name2 != ""){
        document.getElementById("image2").src = endpoint2; // call to the api
    }

    let name3 = document.getElementById("name3").value;
    let endpoint3 = "https://emotionalmultiparse.azurewebsites.net/api/twocatz" + name3;
    if(name3 != ""){
        document.getElementById("image3").src = endpoint3; // call to the api
    }

    let name4 = document.getElementById("name4").value;
    let endpoint4 = "https://emotionalmultiparse.azurewebsites.net/api/twocatz" + name4;
    if(name4 != ""){
        document.getElementById("image4").src = endpoint4; // call to the api
    }
}