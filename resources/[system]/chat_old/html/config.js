// DO NOT EDIT THIS FILE
// Copy it to `config.js` and edit it
window.CONFIG = {
  defaultTemplateId: 'default', //This is the default template for 2 args1
  defaultAltTemplateId: 'defaultAlt', //This one for 1 arg
  templates: { //You can add static templates here
    'default': '<b>{0}</b>: {1}',
    'defaultAlt': '{0}',
    'example:important': '<h1>^2{0}</h1>'
  },
  fadeTimeout: 2200,
  suggestionLimit: 5,
  style: {
    background: 'rgba(255, 255, 255, 0)',
    width: '27%',
    height: '305px',
  }
};
