describe('Login form validation tests', () => {

  it('Entering a valid email and password', () => {
    cy.visit('https://login.qa.studio/')
    
    cy.get('#mail').type('german@dolnikov.ru')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click()
    cy.contains('Авторизация прошла успешно')
    cy.get('#exitMessageButton > .exitIcon').click()

  })
   
  it('Checking the password recovery logic', () => {
    cy.visit('https://login.qa.studio/')

    cy.get('#forgotEmailButton').click()
    cy.get('#mailForgot').type('tima@mail.ru')
    cy.get('#restoreEmailButton').click()
    cy.contains('Успешно отправили пароль на e-mail')
    cy.get('#exitMessageButton > .exitIcon').click()

  })

  it('Negative authorization case invalid password', () => {
    cy.visit('https://login.qa.studio/')

    cy.get('#mail').type('german@dolnikov.ru')
    cy.get('#pass').type('newcastle2')
    cy.get('#loginButton').click()
    cy.contains('Такого логина или пароля нет')
    cy.get('#exitMessageButton > .exitIcon').click()

  })

  it('Negative authorization case invalid mail ', () => {
    cy.visit('https://login.qa.studio/')

    cy.get('#mail').type('newcastle@dolnikov.ru')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click()
    cy.contains('Такого логина или пароля нет')
    cy.get('#exitMessageButton > .exitIcon').click()
  })

  it('Negative validation case of entering mail without @', () => {
    cy.visit('https://login.qa.studio/')

    cy.get('#mail').type('newcastleunited.ru')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click()
    cy.contains('Нужно исправить проблему валидации')
    cy.get('#exitMessageButton > .exitIcon').click()
  })
   
  it('Checking for conversion to lowercase letters in the login', () => {
    cy.visit('https://login.qa.studio/')
    
    cy.get('#mail').type('GerMan@Dolnikov.ru')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click()
    cy.contains('Авторизация прошла успешно')
    cy.get('#exitMessageButton > .exitIcon').click()

  })
})