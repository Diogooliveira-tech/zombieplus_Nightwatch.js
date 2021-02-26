module.exports = {

  'não cadastrado': (browser) => {
    let login = browser.page.login()
    login
      .with('404@yahoo.com', 'abc123')
      .expectAlertDanger('Usuário e/ou senha inválidos')
  }
};
