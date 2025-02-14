document.getElementById("data-input").addEventListener("click",function(event){
    event.preventDefault();
    const HORAS = new Date();
    let newPost = document.createElement("div");
    let campText = document.getElementById("tx1").value
    let horas = HORAS.getHours();
    let minutos = HORAS.getMinutes();
    if(minutos < 10){
        minutos = `0${minutos}`
    }
    if(horas < 10){
        horas = `0${horas}`
    }
    newPost.innerHTML = `<div class="comentary-card">
                <div class="user-comentary">
                    <img src="/content/icon-user.png" alt="user">
                    <div class="user-informations-comentary">
                        <h1>Mario Oliveira</h1>
                        <p>${horas}h ${minutos}m</p>
                    </div>
                </div>
                <div class="text-response">
                    <p>${campText}</p>
                </div>
                <div class="buttons-comentary">
                    <div class="like"><i class="fa-solid fa-heart"></i>Curtir</div>
                    <div class="comentary"><i class="fa-solid fa-comment"></i>Comentar</div>
                    <div class="share"><i class="fa-solid fa-share-nodes"></i>Compartilhar</div>
                </div>
            </div>`
    document.getElementById("initial-session").append(newPost);
})

