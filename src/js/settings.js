export const select = {
  templateOf: {
    home: '#template-home-page',
    depression: '#depression-tests',
    burnout: '#burnout-tests',
  }
};

export const templates = {
  home: Handlebars.compile(
    document.querySelector(select.templateOf.home).innerHTML
  ),
  depression: Handlebars.compile(
    document.querySelector(select.templateOf.depression).innerHTML
  ),
  burnout: Handlebars.compile(
    document.querySelector(select.templateOf.burnout).innerHTML
  ),
};
