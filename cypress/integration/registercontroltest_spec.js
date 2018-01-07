describe('Register Control', function() {
  it('register new user verification failure', function() {
    cy.visit('http://localhost:8080/registercontrol')
    cy
      .get('#username')
      .type('new@user.com')
      .get('#password')
      .type('Tester1@')
      .get('#user-form-button > div > div > span')
      .click()

    cy
      .get('#0')
      .type('1')
      .get('#1')
      .type('2')
      .get('#2')
      .type('3')
      .get('#3')
      .type('4')
      .get('#4')
      .type('5')
      .get('#5')
      .type('6')

    cy.get('#verification-code-form-button').click()
    cy.get('#register-control-message').should('contain', 'invalid code')
  })

  it('register new user verification success', function() {
    cy.visit('http://localhost:8080/registercontrol')
    cy
      .get('#username')
      .type('new@user.com')
      .get('#password')
      .type('Tester1@')
      .get('#user-form-button > div > div > span')
      .click()

    cy
      .get('#0')
      .type('3')
      .get('#1')
      .type('3')
      .get('#2')
      .type('3')
      .get('#3')
      .type('3')
      .get('#4')
      .type('3')
      .get('#5')
      .type('3')

    cy.get('#verification-code-form-button').click()
    cy.get('#register-control-message').should('not.exist')
  })

  it('register existing user with correct verification code', function() {
    cy.visit('http://localhost:8080/registercontrol')
    cy
      .get('#username')
      .type('already@registered.com')
      .get('#password')
      .type('Tester1@')
      .get('#user-form-button > div > div > span')
      .click()

    cy
      .get('#register-control-message')
      .should('contain', 'a user with this email address is already registered')
  })
})
