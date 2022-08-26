// https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript

let urlString = document.URL;
console.log(urlString);

// https://bobbyhadz.com/blog/javascript-get-last-character-of-string

const productid = urlString.charAt(urlString.length - 1);
console.log(productid);

let index = productid;

let myString = '';

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(shopdata => {
        console.log(shopdata)


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
                                <img src="${shopdata[productid].image}" alt="${shopdata[productid].title}"
                                    onclick="fnBack()">
                                <div class="pDescArt1">
                                    <div class="leftArt1Desc">
                                    <p>Title : ${shopdata[productid].title}</p>
                                    <p>Price : ${shopdata[productid].price} $</p>
                                    <p>Description : ${shopdata[productid].description}</p>
                                    <p>Category : ${shopdata[productid].category}</p>
                                    <p>Rating rate : ${shopdata[productid].rating.rate}</p>
                                    <p>Rating count : ${shopdata[productid].rating.count}</p>
                                    </div>
                                    <div class="rightArt1Desc">
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    </div>
                                </div>
                            </article><article class="art2">`
        myString += `</article>`;
        myString += `</main> 
                    <footer>
                        <p>© 2019 The Design Shop </p>
                        <p><span class="clsBold">•</span> The Design Blog</p>
                    </footer>`;

        document.body.innerHTML += myString;


        //</article>




    });


function fnBack() {
    window.open('index.html');
    window.close();
}