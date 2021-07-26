// Express names as variables
// call get cap photos ONCE and pass in all name values
// Output using json object

async function y1k3s() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let name3 = document.getElementById("name3").value;
    let name4 = document.getElementById("name4").value;
    let endpoint1 = await getCatPhoto(name1, name2, name3, name4);
    console.log(endpoint1);
    const base64Prefix = "data:image/png;base64,";
    if(name1 != ""){
        document.getElementById("image1").src = base64Prefix + endpoint1.cat1; // call to the api
        
    }

    
    
    if(name2 != ""){
        document.getElementById("image2").src = base64Prefix + endpoint1.cat2; // call to the api
        
    }

    
    
    if(name3 != ""){
        document.getElementById("image3").src = base64Prefix + endpoint1.cat3; // call to the api
        
    }

    
    
    if(name4 != ""){
        document.getElementById("image4").src = base64Prefix + endpoint1.cat4; // call to the api
        
    }
}

async function getCatPhoto(name1, name2, name3, name4) {
    try{
        let url = "https://emotionalmultiparse.azurewebsites.net/api/twocatz?name1=" + name1 +"&name2=" + name2 + "&name3=" + name3 + "&name4= " + name4;
      let response = await fetch(url, {
        method: "GET"
      })
      let data = await response.json();
      return data;
    }
      catch(err){
        alert(err);
      }
    } 
