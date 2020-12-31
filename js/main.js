const myForn = document.forms.csv
const myOut = document.querySelector('#out')

myForn.addEventListener('submit', (e) => {
  e.preventDefault()

  let strings = myForn.csv.value.split(/\n/)
  let out = ''
  if(strings.length > 1) {
    strings.forEach((element, index) => {
      // console.table('Line',index + 1,'has',element.split(';').filter((a) => a.trim()).length,'elements.');
      if (index === 0) {
        out += ('||' + element.split(';').join('||') + '||<br>').replaceAll(/\|{4}/g, '||')
      } else {
        out += ('|' + element.split(';').join('|') + '|<br>').replaceAll(/\|{2}/g, '|')
      }
    });
    myOut.value = out
  }

  console.log(myForn.divider.options[myForn.divider.selectedIndex].text);
  
})

function copyText() {
  myOut.select()
  document.execCommand("copy")
}