context('Datetime Validation', () => {
	before(() => {
		cy.login();
		cy.visit('/app/communication');
		cy.window().its('frappe').then(frappe => {
			frappe.call("frappe.tests.ui_test_helpers.create_communication_records");
		});
	});

	it('datetime field form validation', () => {
		cy.visit('/app/communication');
		cy.get('a[title="Test Form Communication 1"]').invoke('attr', 'data-name')
		.then((name) => {
			cy.visit(`/app/communication/${name}`);
			cy.get('.indicator-pill').should('contain', 'Open').should('have.class', 'red');
		})
	});
});