const html = require('choo/html');
const assets = require('../../../common/assets');

module.exports = function(state) {
  const footer = html`<footer class="footer">
    <div class="legalSection">
      <a
        href="https://www.portailpro.net"
        class="legalSection__link"
        role="presentation">
        <img
          class="legalSection__mozLogo"
          src="${assets.get('portailpro-logo.png')}"
          alt="Portailpro"/>
      </a>
      <a
        href="/legal"
        class="legalSection__link">${state.translate('footerLinkPrivacy')}</a>
      <a
        href="/legal"
        class="legalSection__link">${state.translate('footerLinkTerms')}</a>
    </div>
  </footer>`;
  // HACK
  // We only want to render this once because we
  // toggle the targets of the links with utils/openLinksInNewTab
  footer.isSameNode = function(target) {
    return target && target.nodeName && target.nodeName === 'FOOTER';
  };
  return footer;
};
