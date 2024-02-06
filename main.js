const submitted = document.querySelector('#submit-button')
const translatorInput = document.querySelector('#translator-input')
const results = document.querySelector('#results')
const radioButtons = document.querySelector('[name="translation-section"]')
const enCode = document.querySelector('#encode')
const translatation = document.querySelector('#translate')
const madLib = document.querySelector('#madlib')
const getSearch = document.querySelector('#search')
const rando = document.querySelector('#random')



submitted.addEventListener('click', ()=>{
 for(let choice of radioButtons){
    if(enCode.checked){
        results.innerText = `${encode(translatorInput.value)}`
    } else if(translatation.checked){
        results.innerText = `${translate(translatorInput.value)}`
    } else if(madLib.checked){
        results.innerText = `${madlib(translatorInput.value)}`
    } else if(getSearch.checked){
        results.innerText = " "
        let array = search(translatorInput.value)
        for(let obj of array){
            let newStr = document.createElement('p')
            newStr.innerText = obj.symbol
            results.appendChild('newStr')
        } if(array.length === 0){
            results.innerText = 'no emojis found'
        }
    } else if(rando.checked){
        let randoNum = Math.floor(Math.random()*4)
        if(randoNum === 0){
            results.innerText = encode(translatorInput.value)
        } else if(randoNum === 1){
            results.innerText = translate(translatorInput.value)
        } else if(randoNum === 2){
            results.innerText = `${madlib(translatorInput.value)}`
        } else if(randoNum === 3){
            results.innerText = ''
            let array = search(translatorInput.value)
            for(let obj of array){
                let newStr = document.createElement('p')
                newStr.innerText = obj.symbolresults.appendChild(newStr)
            } if( array.length === 0){
                results.innerText = 'no emojis found'
            }
        }
    }
 }
})