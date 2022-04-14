document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=y2k6EyTt06K7uz7VITO3AqAXmJeD0WTHnC3zcih2&date=${choice
}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        document.querySelector("section").innerHTML = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}