const html = require('choo/html');
const assets = require('../../../common/assets');

module.exports = function(state) {
  const header = html`<header class="header">
      <div class="logo">
        <a class="logo__link" href="/">
          <img
            src="${assets.get('send_logo.svg')}"
            alt="Send"/>
          <h1 class="logo__title">Send</h1>
        </a>
        <div class="logo__subtitle">
          Envoi sécurisé de fichier par <a class="logo__subtitle-link" href="https://www.portailpro.net"
            target="_blank" rel="noreferrer noopener">Portailpro</a>
        </div>
      </div>
    </header>`;

    // HACK
    // We only want to render this once because we
    // toggle the targets of the links with utils/openLinksInNewTab
    header.isSameNode = function(target) {
        return target && target.nodeName && target.nodeName === 'HEADER';
    };
    return header;
};

