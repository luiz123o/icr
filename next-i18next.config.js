
const path = require('path');

module.exports = {
  localePath: path.resolve('./public/content/locales'),
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en-US'],
    localeDetection: false,
  },
};
