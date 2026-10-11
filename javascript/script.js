let output = document.getElementById("output");
let output2 = document.getElementById("output2");

let bestSellers = [
  {
    id: 1,
    name: "Neroli Blossom",
    img: "assets/img/bs_1.png",
  },

  {
    id: 2,
    name: "Iris Blanc",
    img: "assets/img/bs_2.png",
  },

  {
    id: 3,
    name: "Azure Mist",
    img: "assets/img/bs_3.png",
  },

  {
    id: 4,
    name: "Silk Embrace",
    img: "assets/img/bs_4.png",
  },
]

// NEW ARRIIVALS 

let newArriavls = [
  {
    id: 1,
    name: "Neroli Blossom",
    img: "assets/img/na_1.png",
  },

  {
    id: 2,
    name: "Iris Blanc",
    img: "assets/img/na_2.png",
  },

  {
    id: 3,
    name: "Azure Mist",
    img: "assets/img/na_3.png",
  },

  {
    id: 4,
    name: "Silk Embrace",
    img: "assets/img/na_4.png",
  },

  {
    id: 5,
    name: "Neroli Blossom",
    img: "assets/img/na_5.png",
  },

  {
    id: 6,
    name: "Iris Blanc",
    img: "assets/img/na_6.png",
  },

  {
    id: 7,
    name: "Azure Mist",
    img: "assets/img/na_7.png",
  },

  {
    id: 8,
    name: "Silk Embrace",
    img: "assets/img/na_8.png",
  },
]

// BEST SELLER SHOW

bestSellers.forEach((perfume) => {
  output.innerHTML += `
    <div class="h-[420px] w-[280px] shadow-md rounded-lg overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="h-[300px] w-full flex items-center justify-center">
            <img src="${perfume.img}" alt="${perfume.name}" class="h-full w-full rounded-bl-xl rounded-br-xl">
        </div>

        <div class="text-center my-5">
            <p class="text-xl font-[Montserrat] font-semibold text-gray-800">${perfume.name}</p>
            <button class="bg-black/80 w-[80%] h-10 mt-4 text-white rounded-full transition duration-300 hover:bg-neutral-500">
                Buy Now
            </button>
        </div>
    </div>`
})

// NEW ARRIVALS SHOW

newArriavls.forEach((perfume) => {
  output2.innerHTML += `
    <div class="group w-[280px] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div class="relative h-[300px] w-full overflow-hidden hover:cursor-pointer">
            <img src="${perfume.img}" alt="${perfume.name}" class="h-full w-full p-4">
        </div>
        <div class="px-5 pt-4 pb-5 border-t border-gray-200">
            <p class="text-xs uppercase tracking-[2px] text-gray-400 mb-2">PURESCENT COLLECTION</p>
            <h3 class="text-lg font-[Montserrat] font-semibold text-gray-900">${perfume.name}</h3>
            <div class="flex items-center justify-between mt-4">
                <a href="https://google.com"><span class="text-sm text-gray-500 hover:text-black hover:cursor-pointer">Discover the scent</span></a>
            </div>
        </div>
    </div>`
})