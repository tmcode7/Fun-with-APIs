document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){
    const satName = document.querySelector('input').value
    const url = `http://tle.ivanstanojevic.me/api/tle?search=${satName}`
   
  
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       
       
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  }