'use strict';

const faker = require('faker');

const loadTestUser = module.exports = {};

loadTestUser.create = (userContext, events, done) => {
  userContext.vars.title = faker.lorem.words(10);
  userContext.vars.content = faker.lorem.words(10);

  return done();
};
