
describe('Cypress Tests for Local Page', () => {

  beforeEach(() => {
      // put the url of the local browser page that you opened using "open with live server"
      cy.visit('http://127.0.0.1:5500/practice_page_2.html');
  });

  // Test if the buttons lead to the desired links

  describe('Button Link Tests', () => {
      it('YouTube button links to YouTube', () => {
          cy.contains('YouTube').parent('a').should('have.attr', 'href', 'https://www.youtube.com/');
      });

      it('Overleaf button links to Overleaf', () => {
          cy.contains('Overleaf').parent('a').should('have.attr', 'href', 'https://www.overleaf.com/');
      });

      it('Google button links to Google', () => {
          cy.contains('Google').parent('a').should('have.attr', 'href', 'https://www.google.com/');
      });

      it('Stackexchange button links to Stackexchange', () => {
          cy.contains('Stackexchange').parent('a').should('have.attr', 'href', 'https://www.stackexchange.com/');
      });
  });

  // Test the form submisions


  describe('Form Submission Tests', () => {
      it('Should fill out the form and submit', () => {
          cy.get('#name').type('John Doe');
          cy.get('#email').type('johndoe@example.com');
          cy.get('#sample-form').submit();
          // Assuming the form redirects or shows a success message
          // You can check for a specific success message or redirection here
          // For now, we can simply check if the form is submitted (for instance by verifying the inputs are empty after submission)
          cy.get('#name').should('have.value', '');
          cy.get('#email').should('have.value', '');
      });
  });

  // Test the toggle visibility


  describe('Toggle Section Visibility', () => {
      it('Should toggle the visibility of the content', () => {
          // Initially check if the content is visible
          cy.get('#toggled-content').should('be.visible');
          // Click to hide the content
          cy.get('#toggle-btn').click();
          cy.get('#toggled-content').should('not.be.visible');
          // Click to show the content again
          cy.get('#toggle-btn').click();
          cy.get('#toggled-content').should('be.visible');
      });
  });

  // Test if the background color changes

  describe('Background Color Change', () => {
      it('Should change background color when the button is clicked', () => {
          // Click the button to change the background color
          cy.get('#change-bg-btn').click();
          // Verify that the background color has changed to lightblue
          cy.get('body').should('have.css', 'background-color', 'rgb(173, 216, 230)'); // lightblue in rgb format
      });
  });

});

