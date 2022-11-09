describe('login pinterest', () => {
  it('should be able to login with pinterest', () => {
    cy.visit('https://id.pinterest.com/login/');
    cy.get('input[name="id"]').type("git@gmail.com")
    cy.get('input[name="password"]').type("")
    cy.get('button[class="red SignupButton active"]').click()
  });

  it('should fail to login with pinterest', () => {
    cy.visit('https://id.pinterest.com/login/');
    cy.get('input[name="id"]').type("user@gmail.com")
    cy.get('input[name="password"]').type("12345678")
    cy.get('button[class="red SignupButton active"]').click()
    
  });
})