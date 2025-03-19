import menu from "./db.js";



// HTML elemanlarını alma querySelector ile
const menuContainer = document.querySelector("#menu-container");
 console.log(menuContainer)


 // sayfa yüklendiği anda elemanları gösteren fonksiyonu çalıştır
 document.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
 })

 function displayMenuItems(menuItems) {
    console.log(menuItems);
    let displayMenu = menuItems.map(
      (item) => `
          <div id='card' class="d-flex gap-3 flex-column flex-md-row align-items-center" >
            <img src="${item.img}" class="shadow rounded"  />
            <div>
              <div class="d-flex justify-content-between my-2">
                <h5>${item.title}</h5>
                <p>$ ${item.price}</p>
              </div>
              <p class="lead">
               ${item.desc}
              </p>
            </div>
          </div>
    `
    );

    displayMenu = displayMenu.join('');

    // oluşturduğumuz divleri html'e gönderdik
    menuContainer.innerHTML = displayMenu;
   }


   // Filtreleme Kısmı
   //Tüm butunları all ile alacağoz
   const filterBtns = document.querySelectorAll('.filter-btn');

   filterBtns.forEach((btn)=> {
    // tıklanma olayını izleme addEvent ile click vericez
    btn.addEventListener("click",searchCategory);
   });

   function searchCategory(e) {
    //tıklanılan butonun kategori değerini alma
    const category = e.target.dataset.id;

    // elemanları kategori değerine göre filtreleme
    const filtredItems = menu.filter((menuItem)=> {
      if(menuItem.category === category) return menuItem
    });

    // hepsi seçildiyse tamamını göster değilse filtrelenmiş diziyi
    if(category === "all"){
      displayMenuItems(menu)
    }else{
      displayMenuItems(filtredItems);
    }
   }