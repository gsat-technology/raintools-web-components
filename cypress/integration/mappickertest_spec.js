describe('Map Picker', function() {
  it('should select 2 items', function() {
    cy.visit('http://localhost:8080/map')

    const pos = { x: 490, y: 360 }

    cy
      .get('#map-element')
      .click('topLeft')
      .trigger('mousedown', 'topLeft')
      .trigger('mousemove', pos.x, pos.y)
      .wait(500)
      .click(pos.x, pos.y)

    cy.get('#selected-items').should('contain', '[1,2]')
  })

  it('should select 3 items', function() {
    cy.visit('http://localhost:8080/map')

    const pos = { x: 500, y: 360 }

    cy
      .get('#map-element')
      .click('topLeft')
      .trigger('mousedown', 'topLeft')
      .trigger('mousemove', pos.x, pos.y)
      .wait(500)
      .click(pos.x, pos.y)

    cy.get('#selected-items').should('contain', '[0,1,2]')
  })
})
