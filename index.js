function submitData(name, email) {
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    } )
    .then(resp => {return resp.json()})
    .then(json => {
        console.log(json)
        postID(json.id)})
    
}

function postID (msg) {
    let idMsg = document.getElementById('heading')
    
    idMsg.innerHTML = msg;


}

//submitData("Tim", "Tims email")