describe("Projects", function () {
    it("Page", function () {
      cy.viewport(1920, 1080);
      cy.visit("https://bestcomp.net/az");
      cy.location("protocol").should("eq", "https:");
      cy.get('ul[class="sub-menu"]').invoke('show').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/az/menu/projects/detail/1/layiheler"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/az/menu/projects/detail/37/dovlet-sektoru"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/az/menu/projects/detail/38/telekommunikasiya"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/az/menu/projects/detail/39/bank-ve-maliye"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/az/menu/projects/detail/40/neft-ve-qaz"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/az/menu/projects/detail/41/diger"]').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/en/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/ru/lang"]').click({force:true, multiple: true});
        cy.get('a[href="https://bestcomp.net/az/lang"]').click({force:true, multiple: true});
    });
  });