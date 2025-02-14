const HORAS = new Date();
document.getElementById("data-input").addEventListener("click",function(event){
    event.preventDefault();
    let newPost = document.createElement("div");
    let campText = document.getElementById("tx1").value
    newPost.innerHTML = `<div class="comentary-card">
                <div class="user-comentary">
                    <img src="/content/icon-user.png" alt="user">
                    <div class="user-informations-comentary">
                        <h1>Mario Oliveira</h1>
                        <p>15h 33m</p>
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

