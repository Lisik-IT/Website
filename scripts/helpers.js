hexo.extend.helper.register('lang_prefix', function () {
  return this.page.lang === this.config.language ? '' : `/${this.page.lang}`
});
