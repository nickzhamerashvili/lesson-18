

// Promise
// form
// fetch


// Code, Promise, events

const button = document.querySelector("button");
const form = document.querySelector("form")


// fetch()

const promise = Promise.reject().catch(() => {
    console.log('123')
}).finally() // 'pending' -> 'rejected' ; 'fulfilled'
// callback hell


try {
    const bla =123
    bla = 1234     
} catch (error) {
    console.log(error)   
} 


// const l = 1;
// const l1 = 2;

// l1 + l 

















button.addEventListener("click", function (event) {

    console.log(event)

})


form.addEventListener("submit", function (e) {
    e.preventDefault();
})

// 

const todos = fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
    return res.json()
}).then(res => {
    console.log(res[89])
}).catch((rej) =>{
    console.log(rej)
})


async function getTodos() {

    const fetchTodos = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await fetchTodos.json()

    console.log(todos)
}

getTodos()
