const serverText = document.getElementById('serverText')

const userInput = document.getElementById('userText')
const encryptBtn = document.getElementById('encrypt')
const decryptBtn = document.getElementById('decrypt')

function LetterReplacement(text, letters){

    let replacement = []

    for(var i = 0; i < letters.length; i++){
        switch(letters[i].source){
    
            case '[Aa]':
                replacement.push('1X')
                break

            case '[Ee]':
                replacement.push('2F')   
                break

            case '[Ii]':
                replacement.push('3R')
                break      

            case '[Oo]':
                replacement.push('HJ')
                break

            case '[Uu]':
                replacement.push('W1A')  
                break

            case '[Yy]':
                replacement.push('QQQ')
                break
        }
    }

    console.log(text)

        for (var letter = 0; letter < letters.length; letter++){
            text = text.replace(letters[letter], replacement[letter])
            console.log(text)
        }

    text = text.toString()
    text = text.replaceAll(",", " ")
    serverText.innerText = text

}

function Encrypt(){

    let text = userInput.value
    let toReplace = []

    // Search for Vowels

    let regexA = new RegExp('[Aa]', 'g')
    let regexE = new RegExp('[Ee]', 'g')
    let regexI = new RegExp('[Ii]', 'g')
    let regexO = new RegExp('[Oo]', 'g')
    let regexU = new RegExp('[Uu]', 'g')
    let regexY = new RegExp('[Yy]', 'g')

    let regexArray = [regexA, regexE, regexI, regexO, regexU, regexY]

    for (var i = 0; i < regexArray.length; i++){
        if(text.search(regexArray[i]) != -1){
            toReplace.push(regexArray[i])
        }
    }

    // 

    LetterReplacement(text, toReplace)
}

function Decrypt(){

    let display = serverText

    display.innerText = display.innerText.replaceAll('1X', 'a')
    display.innerText = display.innerText.replaceAll('2F', 'e')
    display.innerText = display.innerText.replaceAll('3R', 'i')
    display.innerText = display.innerText.replaceAll('HJ', 'o')
    display.innerText = display.innerText.replaceAll('W1A', 'u')
    display.innerText = display.innerText.replaceAll('QQQ', 'y')

}


encryptBtn.onclick = Encrypt
decryptBtn.onclick = Decrypt