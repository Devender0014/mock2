
const main = document.getElementById("main")
let currentPage = 1
let totalItems = 10
const totalData = []

const getData = () => {
    fetch('https://www.balldontlie.io/api/v1/players')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let newData = data.data
            totalData.push(newData)
            newData.map((ele) => {
                const playerCard = document.createElement("div")
                const image = document.createElement("img")
                image.src = "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
                const name = document.createElement("p")
                name.innerText = `Name : ${ele.first_name}`
                const position = document.createElement("p")
                position.innerText = `Position ${ele.position}`
                const button = document.createElement("button")
                button.innerText = "Team Details"
                let id = ele.id
                button.addEventListener("click", () => {
                    showData(id)
                })
                main.append(playerCard)
                playerCard.append(image, name, position, button)
            })
        });

}
// getData()
// console.log(totalData)

const showData = (id) => {
    fetch('https://www.balldontlie.io/api/v1/players')
        .then((response) => response.json())
        .then((data) => {
            const newData = data.data
            const item = newData.find(item => item.id === id)
            console.log(item)
            createModal(item)

        })
}


const modal = document.getElementById("modal")
function createModal(ele) {
    const main = document.createElement("div")
    const closeBtn = document.createElement("button")
    closeBtn.innerText = "X"
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none"
        
    })

    const image = document.createElement("img")
    image.src = "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
    const name = document.createElement("p")
    name.innerText = `Name : ${ele.first_name}`
    const position = document.createElement("p")
    position.innerText = `Position ${ele.position}`
    const button = document.createElement("button")
    button.innerText = "Team Details"
    const heading =  document.createElement("h1")
    heading.innerText = "Team Details"
    const team = document.createElement("p")
    team.innerText = ele.team.name
    const abbreviation = document.createElement("p")
    abbreviation.innerText = ele.team.abbreviation

    const conference = document.createElement("p")
    conference.innerText = ele.team.conference

    const division = document.createElement("p")
    division.innerText = ele.team.division

    const city = document.createElement("p")
    city.innerText = ele.team.city
    modal.style.display = "block"
    modal.append(main)
    main.append(closeBtn,image,name,position,button,heading,team,abbreviation,conference,division,city)

}
getData()

// function pagination(){
//     const totalPages = 3
//     const data = getData()
//     for(let i = 1; i <= totalPages;i++){
//         const button = document.createElement("button")
//         button.innerText = i
//         button.addEventListener("click",()=>{
//             currentPage = i
//             getItems()
//         })
//         main.append(button)
//     }
// }


// function getItems (){
//     const data = getData()
//     const start = (currentPage - 1) * totalItems
//     const end = start + totalItems
//     const currentItems = data.slice(start,end)
//     for(let item of currentItems){
//         const playerCard = document.createElement("div")
//             const image = document.createElement("img")
//             image.src = "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
//             const name = document.createElement("p")
//             name.innerText = `Name : ${ele.first_name}`
//             const position = document.createElement("p")
//             position.innerText = `Position ${ele.position}`
//             const button = document.createElement("button")
//             button.innerText = "Team Details"
//             main.append(playerCard)
//             playerCard.append(image,name,position,button)
//     }
// }

// console.log(currentPage)
// pagination()

// getItems()