let chai = require('chai');
let sinon = require('sinon');
let should = chai.should();

const Attribute = require('../models/attribute');
import { list } from '../controllers/attributes';


describe('Attributes', () => {
  describe('Attributes controller', () => {
      it('it should GET all the attributes', (done) => {
        var req,res,spy;
        this.Attribute = sinon.stub(Attribute, 'all');
        this.Attribute.yields([]);

        req = res = {};
        spy = res.send = sinon.spy();

        const result = list(req, res);
        expect(spy.calledOnce).to.equal(true);
        result.length.should.be.eql(0);
      });
  });

});
