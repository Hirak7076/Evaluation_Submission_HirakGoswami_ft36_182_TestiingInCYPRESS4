///<reference types="cypress" />

const { expect } = require("chai");

describe('Automating', () => {
    it('BooksTOScrape', () => {
        cy.visit('https://books.toscrape.com/');
        cy.title().should('include','All products | Books to Scrape - Sandbox');
    });
    it('BooksTOScrape 2', () => {
        cy.visit('https://books.toscrape.com/');
        cy.xpath('//a[@href="catalogue/category/books/nonfiction_13/index.html"]').click();
        cy.xpath('//div[@class="page-header action"]').should('contain','Nonfiction');
    });
    it('BooksTOScrape 3', () => {
        cy.visit('https://books.toscrape.com/'); ////h3/a[@title="A Light in the Attic"]
        cy.get('.product_pod').each(($ele)=>{
            if ($ele.text().includes('A Light in the Attic')) {
                cy.wrap($ele).find('button').contains('Add to basket').click();
            }
        })
    });
});