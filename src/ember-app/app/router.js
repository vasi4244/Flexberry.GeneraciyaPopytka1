import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-generaciya-popytka-1-должность-l');
  this.route('i-i-s-generaciya-popytka-1-должность-e',
  { path: 'i-i-s-generaciya-popytka-1-должность-e/:id' });
  this.route('i-i-s-generaciya-popytka-1-должность-e.new',
  { path: 'i-i-s-generaciya-popytka-1-должность-e/new' });
  this.route('i-i-s-generaciya-popytka-1-настройка-теста-l');
  this.route('i-i-s-generaciya-popytka-1-настройка-теста-e',
  { path: 'i-i-s-generaciya-popytka-1-настройка-теста-e/:id' });
  this.route('i-i-s-generaciya-popytka-1-настройка-теста-e.new',
  { path: 'i-i-s-generaciya-popytka-1-настройка-теста-e/new' });
  this.route('i-i-s-generaciya-popytka-1-организация-l');
  this.route('i-i-s-generaciya-popytka-1-организация-e',
  { path: 'i-i-s-generaciya-popytka-1-организация-e/:id' });
  this.route('i-i-s-generaciya-popytka-1-организация-e.new',
  { path: 'i-i-s-generaciya-popytka-1-организация-e/new' });
  this.route('i-i-s-generaciya-popytka-1-отделы-l');
  this.route('i-i-s-generaciya-popytka-1-отделы-e',
  { path: 'i-i-s-generaciya-popytka-1-отделы-e/:id' });
  this.route('i-i-s-generaciya-popytka-1-отделы-e.new',
  { path: 'i-i-s-generaciya-popytka-1-отделы-e/new' });
  this.route('i-i-s-generaciya-popytka-1-сотрудники-l');
  this.route('i-i-s-generaciya-popytka-1-сотрудники-e',
  { path: 'i-i-s-generaciya-popytka-1-сотрудники-e/:id' });
  this.route('i-i-s-generaciya-popytka-1-сотрудники-e.new',
  { path: 'i-i-s-generaciya-popytka-1-сотрудники-e/new' });
});

export default Router;
