document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){
    const url = `https://programming-quotes-api.herokuapp.com/Quotes/random`
  
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       
       
        document.querySelector('h1').innerText = data.en
        document.querySelector('h3').innerText = data.author
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  }