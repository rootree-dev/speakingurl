/* global describe,it */

var getSlug = require('../lib');

describe('getSlug keep korean letters', function () {
    'use strict';

    it('"헬로 월드 speaking url" should be return 헬로-월드-speaking-url', function (done) {

        getSlug('헬로 월드 speaking url')
            .should.eql('헬로-월드-speaking-url');

        done();
    });

});
