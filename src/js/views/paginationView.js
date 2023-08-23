import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // page 1 and there are others
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(curPage, 'next');
    }
    //last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton(curPage, 'prev');
    }
    // Other page
    if (curPage < numPages) {
      return `
      ${this._generateMarkupButton(curPage, 'prev')}
      ${this._generateMarkupButton(curPage, 'next')}
      `;
    }
    return '';
  }
  _generateMarkupButton(page, side) {
    if (side === 'prev') {
      return `
      <button data-goto='${page - 1}' class="btn--inline pagination__btn--prev">
         <svg class="search__icon">
           <use href="${icons}#icon-arrow-left"></use>
         </svg>
         <span>Page ${page - 1}</span>
       </button>`;
    }
    if (side === 'next') {
      return `
      <button data-goto='${page + 1}' class="btn--inline pagination__btn--next">
         <span>Page ${page + 1}</span>
         <svg class="search__icon">
           <use href="${icons}#icon-arrow-right"></use>
         </svg>
      </button>`;
    }
  }
}

export default new PaginationView();
