describe('Login Control', function() {
  it('login success', function() {
    cy.visit('http://localhost:8080/logincontrol')
  })

  it('login failure', function() {
    cy.visit('http://localhost:8080/logincontrol')
  })
})
