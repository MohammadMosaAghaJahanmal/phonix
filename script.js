


const menu = document.querySelector("#menuOpen")
menu.onchange = function(e)
{
    let bool = false;
    if(this.checked)
    {
        document.body.style.overflow = "hidden";
        const blackPage = `
            <div class="black-page"></div>
        `;
        setTimeout(() =>
        {

            document.body.insertAdjacentHTML("beforeend", blackPage)
            bool = false
            black = document.querySelector(".black-page");
            black.onclick = (e) =>
            {
                this.checked = false;
                black.remove();
                document.body.style.overflowY = "visible";
            }
        }, 300)
    }
    else
    {
        document.body.style.overflow = "visible";
        black.remove();
        bool = true

    }
    
    
    
    
    
}


const cards = document.querySelectorAll(".home-page .slider-card");
let a = 0;
window.onresize = (e) =>
{
    if(window.innerWidth >=1092)
    {
        menu.checked = false;
        const black = document.querySelector(".black-page")
        if(black)
        {
            black.remove();
        }
    }
    a = 0
}

if (cards.length > 0) {   
    setInterval(() =>
    {
        if (window.innerWidth <= 560) {
            
            a += 440;
            if (a == 3520) {
                a = 0;
            }
        }else
        {
            a += 305;

            if (a == 1525) {
                a = 0;
            }
        }
        console.log
        for (const card of cards) {
            card.style.transform = `translate3d(-${a}px, 0, 0)`;
        }
    }, 3000)
}