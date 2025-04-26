describe('Liar and Truth Teller Page', () => {

    beforeEach(() => {
      // Use the url obtained in the "Open with Live Server".
      cy.visit('http://127.0.0.1:5500/Rotating_cards_HTML_CSS.html');
    });
  
    it('should display the page title correctly', () => {
      cy.contains('h1', 'Liar and Truth Teller').should('be.visible');
    });
  
    it('should display the riddle description', () => {
      cy.contains('One of the cards always tells the truth').should('exist');
    });
  
    it('should show exactly two cards', () => {
      cy.get('.card').should('have.length', 2);
    });
  
    it('should show correct front text for both cards', () => {
      cy.get('.card').eq(0).contains('I always tell the truth!');
      cy.get('.card').eq(1).contains('I always lie!');
    });
  
    it('should allow typing an answer in the text box', () => {
      const answer = 'Ask one what the other would say';
      cy.get('input.text-box').type(answer).should('have.value', answer);
    });
  
  });
  