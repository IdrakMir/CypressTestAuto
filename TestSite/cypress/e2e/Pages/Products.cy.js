import Lang from '../PagesObjects/Language.cy'
import Scroll from '../PagesObjects/ScrollTo.cy'

describe("Products", function () {

    const lang = new Lang

    const scroll = new Scroll

    it("Page", function () {
      cy.viewport(1920, 1080);
      cy.visit("https://bestcomp.net/az");
      cy.location("protocol").should("eq", "https:");
      cy.get('ul[class="sub-menu"]').invoke('show').click({force:true, multiple: true});
      cy.get('a[href="https://bestcomp.net/az/menu/products/2/mehsullar"]').click({force:true, multiple: true});
      lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/products/detail/6/azemismehkeme-idareetme-sistemi"]').click({force:true, multiple: true});
            lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/products/detail/26/mehkeme-iclasi-proseslerinin-protokollasdirilmasi-sistemi"]').click({force:true, multiple: true});
            lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/products/detail/27/senedlerin-idareetme-sistemi"]').click({force:true, multiple: true});
            lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/products/detail/28/e-sehiyye-kart-sistemi"]').click({force:true, multiple: true});
            lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/products/detail/29/inteqrasiya-olunmus-miqrasiya-melumat-sistemi"]').click({force:true, multiple: true});
            lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/products/detail/30/sahibkarliq-sahesinde-aparilan-yoxlamalarin-dovlet-reystri"]').click({force:true, multiple: true});
            lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/products/detail/31/tecili-pul-kocurmeleri"]').click({force:true, multiple: true});
            lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/products/detail/32/sigorta-nezaret-sistemi"]').click({force:true, multiple: true});
            lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/products/detail/33/kitabxanalarda-informasiya-proseslerinin-avtomatlasdirilmasi"]').click({force:true, multiple: true});
            lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/products/detail/34/quvveden-dusmus-senedlerin-dovlet-reyestri"]').click({force:true, multiple: true});
            lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
      cy.get('a[href="https://bestcomp.net/az/menu/products/detail/35/ozune-xidmet-aletler-paneli"]').click({force:true, multiple: true});
            lang.inEn();
      scroll.Center().wait(3000)
      lang.inRu();
      scroll.Center().wait(3000)
      lang.inAZ();
      scroll.Center().wait(3000)
    });
  });