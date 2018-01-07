describe('Login Control', function() {
  it('login success', function() {
    cy.visit('http://localhost:8080/logincontrol')
    cy
      .get('#username')
      .type('existing@user.com')
      .get('#password')
      .type('Tester1@')
      .get('#user-form-button > div > div > span')
      .click()

    cy.get('#login-control-message').should('not.exist')
  })

  it('login failure', function() {
    cy.visit('http://localhost:8080/logincontrol')
    cy
      .get('#username')
      .type('userdoesnot@exist.com')
      .get('#password')
      .type('Tester1@')
      .get('#user-form-button > div > div > span')
      .click()

    cy
      .get('#login-control-message')
      .should('contain', 'incorrect username or password')
  })
})
