const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const _ = require('lodash');
const app = require('./mock-app');
const cases = require('./test-cases');

chai.use(chaiHttp);
chai.expect();



describe("Express Http Sanitizer", () => {
    describe("POST /post -> Testing Started", () => {
        it("Should remove <Script> tag", (done) => {
            chai.request(app)
                .post('/post')
                .send(cases.case_01).end((err, res) => {
                    if(err) done(err);
                    let compare = _.isEqual(res.body, cases.expected_01)
                    try{
                        expect(compare).to.equal(true);
                        done();
                    }catch(err){
                        done(err);
                    }
                })
        }),
        it("Should remove Inner <Script> tag", (done) => {
            chai.request(app)
                .post('/post')
                .send(cases.case_02).end((err, res) => {
                    if(err) done(err);
                    let compare = _.isEqual(res.body, cases.expected_02)
                    try{
                        expect(compare).to.equal(true);
                        done();
                    }catch(err){
                        done(err);
                    }
                })
        }),
        it("Should remove Inner <h1> tag and inner <Script>", (done) => {
            chai.request(app)
                .post('/post')
                .send(cases.case_03).end((err, res) => {
                    if(err) done(err);
                    let compare = _.isEqual(res.body, cases.expected_03)
                    try{
                        expect(compare).to.equal(true);
                        done();
                    }catch(err){
                        done(err);
                    }
                })
        }),
        it("Should remove partial tags", (done) => {
            chai.request(app)
                .post('/post')
                .send(cases.case_04).end((err, res) => {
                    if(err) done(err);
                    let compare = _.isEqual(res.body, cases.expected_04)
                    try{
                        expect(compare).to.equal(true);
                        done();
                    }catch(err){
                        done(err);
                    }
                })
        }),
        it("Should remove all from <html> tag", (done) => {
            chai.request(app)
                .post('/post')
                .send(cases.case_05).end((err, res) => {
                    if(err) done(err);
                    let compare = _.isEqual(res.body, cases.expected_05)
                    try{
                        expect(compare).to.equal(true);
                        done();
                    }catch(err){
                        done(err);
                    }
                })
        }),
        it("Should remove <div> tag", (done) => {
            chai.request(app)
                .post('/post')
                .send(cases.case_06).end((err, res) => {
                    if(err) done(err);
                    let compare = _.isEqual(res.body, cases.expected_06)
                    try{
                        expect(compare).to.equal(true);
                        done();
                    }catch(err){
                        done(err);
                    }
                })
        })
    })
})