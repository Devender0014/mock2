
const main = document.getElementById("main")

const form = document.getElementById("form")



console.log(start, end)

const getData = () => {
    fetch('https://www.balldontlie.io/api/v1/games')
        .then((response) => response.json())
        .then((data) => {
            let newData = data.data
            form.addEventListener("submit", (e) => {
                e.preventDefault()
                const start = document.getElementById("start").value
                const end = document.getElementById("end").value
                // var startTime = start.toISOString();
                // var endTime = end.toISOString();

                let filterdDAta = newData.filter((item) => {
                    let itemDAte = new Date(item.date.split("T")[0])
                    return itemDAte >= start && itemDAte <= end
                    // console.log(itemDAte)
                })
                console.log(filterdDAta)
            })

            // totalData.push(newData)
            // newData.map((ele) => {
            //     const dates = ele.date.split("T")[0]
            //     const playerCard = document.createElement("div")
            //     const image = document.createElement("img")
            //     image.src = "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
            //     const name = document.createElement("p")
            //     name.innerText = `Name : ${ele.first_name}`
            //     const position = document.createElement("p")
            //     position.innerText = `Position ${ele.position}`
            //     const button = document.createElement("button")
            //     button.innerText = "Team Details"
            //     let id = ele.id
            //     button.addEventListener("click", () => {
            //         showData(id)
            //     })
            //     main.append(playerCard)
            //     playerCard.append(image, name, position, button)
            // })
        });

}





getData()