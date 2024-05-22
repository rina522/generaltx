const list=[
    {id: '01', name:"Delivery Technology", img:"./src/assets/s_pic1.jpg" },
    {id: '02', name:"Manufacturing Technology", img:"./src/assets/s_pic2.png" },
    {id: '03', name:"Innovation", img:"./src/assets/s_pic3.jpg" },
    {id: '04', name:"Expertise", img:"./src/assets/s_pic4.png" },
    {id: '05', name:"Patent Estates", img:"./src/assets/s_pic5.png" },
    {id: '06', name:"Availability", img:"./src/assets/s_pic6.jpeg" },
]

const s_list = list.map(item => `<div class="list border-end" id=${item.id}>
                                    <div>${item.name}</div>
                                    <img class="s-pic" src=${item.img}>
                                </div>`).join('')

document.querySelector(".strenth").innerHTML = s_list
