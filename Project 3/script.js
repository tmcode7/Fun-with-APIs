document.querySelector('button').addEventListener('click', getFetch)



  function getFetch(){
    const url = `https://zoo-animal-api.herokuapp.com/animals/rand`
  
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.latin_name)
       
       
        document.querySelector('h1').innerText = data.name
        document.querySelector('h3').innerText = data.latin_name
        document.querySelector('section').innerText = data.image_link

        const link = document.createElement('a')
        //add text to the li
        a.textContent = data.image_link
        //append li to the ul
        document.querySelector("a").appendChild(link)
     
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  } 