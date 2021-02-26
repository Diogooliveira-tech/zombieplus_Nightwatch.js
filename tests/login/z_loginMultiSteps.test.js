// module.exports = {
 
//   "dado que eu acesso a minha página de login": function (browser) {
//     browser
//       .resizeWindow(1366, 768)
//       .url("http://zombie-web:5000/login")
//       .waitForElementVisible(".card-login", 3000);
//   },
//   "quando eu faço login com sucesso": function (browser) {
//     browser
//       .setValue("input[name=email]", "zumbi@dospalmares.com.br")
//       .setValue("input[name=password]", "pwd123")
//       .click(".login-button");
//   },
//   "então deve ver o meu nome na área logada": function (browser) {
//     var userInfo = ".user .info span";
//     browser
//       .waitForElementVisible(userInfo, 3000)
//       .assert.containsText(userInfo, "Quilombo")
//       .end();
//   },
// };

// Hooks
// module.exports = {
//     '@desabled': true,

//     before: (browser) => {
//         console.log('antes de todos os steps.')
//     },

//     after: (browser) => {
//         console.log('depois de todos os steps.')
//     },

//     beforeEach: (browser) => {
//         console.log('antes de cada step.')
//     },

//     afterEach: (browser) => {
//         console.log('apos cada step')
//     },



//     'step one': (browser) => {
//         browser
//             .resizeWindow(1366, 768)
//             .url('http://zombie-web:5000/login')
//             .waitForElementVisible('.card-login', 3000)

//     },

//     'step two': (browser) => {
//         browser
//             .resizeWindow(1366, 768)
//             .url('http://zombie-web:5000/login')
//             .waitForElementVisible('.card-login', 3000)
//     }



// }