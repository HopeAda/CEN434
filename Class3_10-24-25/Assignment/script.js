let plusBtns = Array.from(document.querySelectorAll('.add'))

let minusBtns = Array.from(document.querySelectorAll('.minus'))

let itemCountAreas = Array.from(document.querySelectorAll('.num'))

let badge = document.querySelector(".badge")

let cartCont = document.querySelector(".cartMain")

let listCont = Array.from(document.querySelector(".container").children)




plusBtns.forEach((itm)=>{
   itm.addEventListener("click", ()=>{
      let ind = Array.from(itm.parentElement.parentElement.parentElement.children).indexOf(itm.parentElement.parentElement)

      itemCountAreas[ind].textContent = Number(itemCountAreas[ind].textContent) + 1
      

      badge.textContent = countItems()
      updateCart()

   
   })
})


minusBtns.forEach((itm)=>{
   itm.addEventListener("click", ()=>{
      let ind = Array.from(itm.parentElement.parentElement.parentElement.children).indexOf(itm.parentElement.parentElement)

      itemCountAreas[ind].textContent = Number(itemCountAreas[ind].textContent) - 1 < 0 ? 0 : Number(itemCountAreas[ind].textContent) - 1

      badge.textContent = countItems()
      updateCart()

   })
})


function countItems(){
   let sum = 0;
   itemCountAreas.forEach((itm)=>{
      sum += Number(itm.textContent)
   })


   return sum
}

function updateCart(){
   cartCont.innerHTML = ""
   itemCountAreas.forEach((itm, index)=>{

      if(Number(itm.textContent) > 0){
         let item = document.createElement('div')

         item.classList.add('cartItem')

         cartCont.append(item)

         let itemInfo = document.createElement('span')
         let itemImg = document.createElement('img')
      

         let imgSrc = Array.from(listCont[index].children)[0].src
         itemImg.src = imgSrc

         item.append(itemInfo)

         itemInfo.append(itemImg)



         let itemName = document.createElement('p')
         itemName.textContent = Array.from(listCont[index].children)[1].textContent

         itemInfo.append(itemName)


         let itemQty = document.createElement('p')
         itemQty.textContent = "Qty: " + itm.textContent

         item.append(itemQty)
      }
   })
}


document.querySelector(".cart").addEventListener('click', ()=>{
   document.querySelector(".cartContainer").classList.toggle("show")
})