
var createActions = {
    createForm: function () {
        return this
            .click('@addButton')
            .waitForElementVisible('@movieForm', 3000)

    },
    selectStatus: function (status) {
        return this
            .click('@statusSelect')
            .useXpath()     //comando para usar Xpath
            .waitForElementVisible(`//li//span[contains(text(),"${status}")]`, 2000)  //aguarde até que a opção seja visivel. Função com interpolação visto que já temos a massa de teste ``
            .click(`//li//span[contains(text(),"${status}")]`)  //clique na opção
            .useCss() // volta a usar o css
    },
    insertCast: function (cast) {
        const browser = this

        cast.forEach(function (actor) {
            browser
                .setValue('@castInput', actor)
                .api.keys(browser.api.Keys.TAB)
        })

        return this.pause(1000)

    },
    uploadCover: function (fileName) {
        let fullPath = require('path').resolve(__dirname, '../images/' + fileName)
        return this
            .setValue('@uploadInput', fullPath)
            .pause(1000)
            .assert.attributeContains('.picture-src', 'src', 'blob')
    }
}

module.exports = {
    commands: [createActions],
    elements: {
        addButton: '.movie-add',
        searchInput: 'input[placeholder^=Pesquisar]',
        searchIcon: '#search-movie',
        alertDanger: '.alert-danger',
        movieForm: '#movie-form',
        titleInpult: 'input[name=title]',
        statusSelect: 'input[placeholder=Status]',
        yearInput: 'input[name=year]',
        dateInput: 'input[name=release_date]',
        castInput: '.cast',
        plotInput: 'textarea[name=overview]',
        uploadInput: '#upcover',
        createButton: '#create-movie',
        list: 'table tbody',
        tr: 'table tbody tr'
    }
}