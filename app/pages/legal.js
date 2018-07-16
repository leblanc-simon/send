const html = require('choo/html');
const raw = require('choo/html/raw');

module.exports = function(state) {
  return html`
    <div>
      <div class="title">${state.translate('legalHeader')}</div>
        ${raw(
          replaceLinks(state.translate('legalNoticeTestPilot'), [
            'https://github.com/mozilla/send'
          ])
        )}
        ${raw(
          replaceLinks(state.translate('legalNoticeMozilla'), [
          ])
        )}
    </div>
  `;
};

function replaceLinks(str, urls) {
  let i = 0;
  const s = str.replace(
    /<a>([^<]+)<\/a>/g,
    (m, v) => `<a href="${urls[i++]}">${v}</a>`
  );
  return `<div class="description">${s}</div>`;
}
