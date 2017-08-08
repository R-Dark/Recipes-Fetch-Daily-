  let recipeContainer = document.querySelector(".recipeContainer")

  let searchBar = document.querySelector("input").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      let url = "http://recipepuppyproxy.herokuapp.com/api/?i=" + event.target.value
      search(url)
    }
  })

  function search(term) {
    recipeContainer.innerHTML = ''

    fetch(term)
      .then(function(response) {
        response.json()

          .then(function(parsed) {
            console.log(parsed);

            for (var i = 0; i < parsed.results.length; i++) {

              let div = document.createElement("div")

              let img = document.createElement("img")
              img.src = parsed.results[i].thumbnail


              let div2 = document.createElement("label")
              let title = parsed.results[i].title
              div.innerHTML = title

              let div3 = document.createElement("label")
              let href = parsed.results[i].href
              div2.innerHTML = href

              div.appendChild(img)
              div.appendChild(div2)
              div.appendChild(div3)
              recipeContainer.append(div)


            }
          })
      })


  }
