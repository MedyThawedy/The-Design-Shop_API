let myString = '';

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(shopdata => {
        console.log(shopdata)

        shopdata.forEach((shopElement, index) => {
            console.log(index)
            console.log(shopElement)

            if (index == 0 || index == 7 || index == 14 || index == 21 || index == 28 || index == 35) {
                if (index == 0) {
                    myString += `<header>
                            <h1 class="clsLogo">THE DESIGN SHOP</h1>
                            <nav id="myNav">
                                <ul id="myLinks">
                                    <li><a href="">Weekly Recommandations</a></li>
                                    <li> <a href="">Contacts</a></li>
                                    <li><a href="">T D B</a></li>
                                </ul>
                            </nav>
                            <!-- ---------------- https://www.w3schools.com/howto/howto_js_mobile_navbar.asp ---------------- -->
                            <div id="divImgIcon">
                                <img src="./assets/img/menu.png" id="imgIcon" class="icon" alt="" onclick="displayMenu()">
                            </div>
                        </header>
                        <main>
                            <!-- ---------------- ---------------- ${index}---------------- ---------------- -->
                            <article class="art1">
                                <img src="${shopElement.image}" alt="${shopElement.title}"
                                    onclick="fn_open_link(${shopElement.id})">
                                <div class="pDescArt1">
                                    <div class="leftArt1Desc">
                                        <p>${shopElement.title}</p>
                                        <p>${shopElement.category}</p>
                                    </div>
                                    <div class="rightArt1Desc">
                                        <p>$${shopElement.price}</p>
                                    </div>
                                </div>
                            </article><article class="art2">`
                } else {
                    myString += `<!-- ---------------- ---------------- ${index}---------------- ---------------- -->
                                    <article class="art1">
                                        <img src="${shopElement.image}" alt="${shopElement.title}"
                                            onclick="fn_open_link(${shopElement.id})">
                                        <div class="pDescArt1">
                                            <div class="leftArt1Desc">
                                                <p>${shopElement.title}</p>
                                                <p>${shopElement.category}</p>
                                            </div>
                                            <div class="rightArt1Desc">
                                                <p>$${shopElement.price}</p>
                                            </div>
                                        </div>
                                    </article><article class="art2">`
                }
            } else {
                myString += `<!-- ${index} -->
                <div class="divArt2"><img src="${shopElement.image}" alt="${shopElement.title}"
                onclick="fn_open_link(${shopElement.id})">
                <div class="divProdDescArt2">
                <p>${shopElement.title}</p>
                <p>$${shopElement.price}</p>
                <p>${shopElement.category}</p>
                </div>
                </div>`
                if (index == (shopdata.length - 1)) {
                    myString += `</main> 
                    <footer>
                
                        <p>© 2019 The Design Shop </p>
                        <p><span class="clsBold">•</span> The Design Blog</p>
                
                    </footer>`;
                    document.body.innerHTML += myString;
                    console.log(myString);
                } else if (index == 6 || index == 13 || index == 20) {
                    //</article>
                    myString += `</article>`;
                }
            }

        });

    })

