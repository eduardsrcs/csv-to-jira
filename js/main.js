const myForn = document.forms.csv
const myOut = document.querySelector('#out')

myForn.addEventListener('submit', (e) => {
  e.preventDefault()

  let strings = myForn.csv.value.split(/\n/)
  let out = ''
  if(strings.length > 1) {
    strings.forEach((element, index) => {
      console.log(element.split(';').filter((a) => a.trim()));
      if (index === 0) {
        out += ('||' + element.split(';').join('||') + '||<br>').replaceAll(/\|{4}/g, '||')
      } else {
        out += ('|' + element.split(';').join('|') + '|<br>').replaceAll(/\|{2}/g, '|')
      }
    });
    myOut.innerHTML = out
  }

  
})