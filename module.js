// Created by: Justin Iohara

export function Initialize(){
    scrapbox.PageMenu.addMenu({
         title: 'Add',
         image: 'https://gyazo.com/9aee42065c83dfb31074fffa34faaacd/raw'
     })
}

export function GenerateButton(buttonName, userDirectory, targetDirectory, newPageTitle, newPageBody){
    scrapbox.PageMenu('Add').addItem({
          title: () => buttonName,
          onClick: () => (function(){
              let dt = new Date()
              let result = dt.getFullYear()  + '/' + ("00" + (dt.getMonth()+1)).slice(-2) + '/' + ("00" + (dt.getDate())).slice(-2)
              let url1 = userDirectory + '/' + encodeURIComponent(newPageTitle + result) + '?body=' + encodeURIComponent(newPageBody)
              let url2 = targetDirectory + '?body=' + encodeURIComponent('[' + newPageTitle + result + ']')

              window.open(url1, '_blank')
              location.href = url2
          })()
    })
}

export function PasteTemplate(name, body){
    scrapbox.PageMenu('Add').addItem({
        title: () => name,
        onClick: () => (function(){
            if (scrapbox.Page.lines && scrapbox.Page.lines.length == 1) {
                const line = document.getElementById('L' + scrapbox.Page.lines[0].id)
                const lastChar = line.querySelector('span.char-index:last-of-type')
                const textarea = document.getElementById('text-input')
                textarea.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, cancelable: true, keyCode: 35}))
                lastChar.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}))

                textarea.value = body
                textarea.dispatchEvent(new InputEvent('input', {bubbles: true, cancelable: true}))
            }
        })()
    })
}
