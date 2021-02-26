module.exports = {

  'senha incorreta': (browser) => {
    let login = browser.page.login()
    login
      .with('zumbi@dospalmares.com.br', 'abc123')
      .expectAlertDanger('Usuário e/ou senha inválidos') 
  }
};
