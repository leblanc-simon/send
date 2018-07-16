const html = require('choo/html');
const progress = require('../../templates/progress');
const { fadeOut } = require('../../utils');

module.exports = function(state, emit) {
  return html`
    <div class="page effect--fadeIn">
      <div class="title">
        ${state.translate('downloadFinish')}
      </div>
      <div class="description"></div>
      ${progress(1)}
      <div class="progressSection">
        <div class="progressSection__text"></div>
      </div>
    </div>`;
};
