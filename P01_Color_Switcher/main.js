
const body = document.querySelector("body")
const btns = document.querySelectorAll(".button")

btns.forEach( function (btn) {
  console.log(btn)
  btn.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target)

    const choice = e.target.id
    switch (choice) {
      case "grey" :
        body.style.backgroundColor = e.target.id
      case "white" :
        body.style.backgroundColor = e.target.id
      case "blue" :
        body.style.backgroundColor = e.target.id
      case "yellow" :
        body.style.backgroundColor = e.target.id
      case "pink" :
        body.style.backgroundColor = e.target.id
      case "green" :
        body.style.backgroundColor = e.target.id
    }
  })
})