
const interval = setInterval(function(){
    const divHeader = document.querySelector("._1R3Un")
    if(divHeader){
        console.log(divHeader)
        clearInterval(interval)


        const button = document.createElement("button")
        const img = document.createElement("img")
               
        img.classList.add("imgStyle")
        button.classList.add("buttonStyle")
        
        img.setAttribute("src", "https://img.icons8.com/nolan/64/speed.png")

        button.innerHTML = ""      
        

        button.addEventListener("click", function(){
            const listAudios = document.querySelectorAll("audio")
            listAudios.forEach(function(item){
                item.playbackRate = 1.8
                console.log(item)
            })
        })
        
        button.appendChild(img)

        divHeader.appendChild(button)

    }
},1000)