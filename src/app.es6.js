let xmasArea = document.getElementById('resultArea')
let searchArea = document.getElementById('searchArea')
let nameArray = [];
const xmasButton = (name) => {
    name = document.getElementById("xmasArea").value
    if (name !== "") {

        nameArray.push(name)
        document.getElementById("resultArea").innerHTML = `Bonjour ${name} !`
        console.log(nameArray);
        
    } else {
        console.log("Bonjour Père Noël !")
        document.getElementById("resultArea").innerHTML = "Bonjour Père Noël !"
    }
}

const searchButton = () => {
    result=document.getElementById('searchArea').value
    nameArray.map((x)=>{ if(x==x){console.log('test')} }
    )
}