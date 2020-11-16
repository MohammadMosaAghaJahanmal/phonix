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
    for (const card of cards) {
        card.style.transform = `translate3d(-${a}px, 0, 0)`;
    }
}




if (cards.length > 0) {   
    const rounded_one = document.querySelector(".rounded:first-child");
    const rounded_two = document.querySelector(".rounded:last-child");

    
    rounded_one.onclick = () =>
    {
        rounded_two.setAttribute("class", "rounded");
        rounded_one.setAttribute("class", "rounded active-round");
        a = 0;
        for (const card of cards) {
            card.style.transform = `translate3d(-${a}px, 0, 0)`;
        }
    }
    rounded_two.onclick = () =>
    {
        rounded_one.setAttribute("class", "rounded");
        rounded_two.setAttribute("class", "rounded active-round");
        if (window.innerWidth <= 560) {
            
            a = 1760;
        }else
        {
            a = 915;
        }
        for (const card of cards) {
            card.style.transform = `translate3d(-${a}px, 0, 0)`;
        }
    }
    
    setInterval(() =>
    {
        if (window.innerWidth <= 560) {
            
            a += 440;
            if (a == 3520) {
                a = 0;
            }
            if (a <= 1760) {
                rounded_one.setAttribute("class", "rounded");
                rounded_two.setAttribute("class", "rounded active-round");
            }
            if (a < 1760) {
                rounded_two.setAttribute("class", "rounded");
                rounded_one.setAttribute("class", "rounded active-round");
            }
        }else
        {
            a += 305;
            
            if (a == 1525) {
                a = 0;
            }
            if (a == 915) {
                rounded_one.setAttribute("class", "rounded");
                rounded_two.setAttribute("class", "rounded active-round");
            }
            if (a < 610) {
                rounded_two.setAttribute("class", "rounded");
                rounded_one.setAttribute("class", "rounded active-round");
            }
        }
        for (const card of cards) {
            card.style.transform = `translate3d(-${a}px, 0, 0)`;
        }
    }, 3000)
}



const guran = document.querySelectorAll(".free-card");
b = 0;
setInterval(() =>
{
    b += 380
    if (b >= 1520) {
        b = 0;
    }
    for (const guarantee of guran) {
        guarantee.style.transform = `translate3d(-${b}px, 0, 0)`;
    }
}, 3000)