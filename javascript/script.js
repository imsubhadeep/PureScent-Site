let bestSellers = [
    {
        id : 1,
        name : "Neroli Blossom",
        img : "assets/img/bs_1.png"
    },

    {
        id : 2,
        name : "Iris Blanc",
        img : "assets/img/bs_2.png"
    },

    {
        id : 3,
        name : "Azure Mist",
        img : "assets/img/bs_3.png"
    },

    {
        id : 4,
        name : "Silk Embrace",
        img : "assets/img/bs_4.png"
    },
]

let output = document.getElementById("output")

bestSellers.forEach(perfume => {
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
    </div>
    `
})