export const select = {
  templateOf: {
    home: '#template-home-page',
    depression: '#depression-tests',
    burnout: '#burnout-tests',
  },
  containerOf: {
    home: '#home-page',
    tests: '#tests-page',
    pages: '#pages'
  },
  nav: {
    links: '.main-nav a',
  },
  hspTest: {
    quiz: '#hspquiz',
    submit:'#hspsubmit',
    results: '#hspresults',
  }
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
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
