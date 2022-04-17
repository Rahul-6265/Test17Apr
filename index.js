const userList = [{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
    { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
    { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
    { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
    { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
    { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }
]

const onePromise = new Promise((resolve, reject) => {
    resolve();
    for (let i = 0; i < userList.length; i++) {
        const newone = document.createElement('h4')
        newone.innerText = `${userList[i].first_name}  , ${userList[i].last_name}   , ${userList[i].email}   , ${userList[i].avatar}`
        document.querySelector('#container').appendChild(newone)
    }
})

onePromise.then(result => console.log('resolved - '))
    .catch(error => console.log('occure error'))