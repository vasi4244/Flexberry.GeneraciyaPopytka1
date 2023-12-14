import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.generaciya-popytka-1.caption'),
          title: i18n.t('forms.application.sitemap.generaciya-popytka-1.title'),
          children: [{
            link: 'i-i-s-generaciya-popytka-1-настройка-теста-l',
            caption: i18n.t('forms.application.sitemap.generaciya-popytka-1.i-i-s-generaciya-popytka-1-настройка-теста-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-popytka-1.i-i-s-generaciya-popytka-1-настройка-теста-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.кадры.caption'),
          title: i18n.t('forms.application.sitemap.кадры.title'),
          children: [{
            link: 'i-i-s-generaciya-popytka-1-организация-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-generaciya-popytka-1-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-generaciya-popytka-1-организация-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-generaciya-popytka-1-отделы-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-generaciya-popytka-1-отделы-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-generaciya-popytka-1-отделы-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-generaciya-popytka-1-должность-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-generaciya-popytka-1-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-generaciya-popytka-1-должность-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-generaciya-popytka-1-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-generaciya-popytka-1-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-generaciya-popytka-1-сотрудники-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})