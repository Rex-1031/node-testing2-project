const request = require('supertest')
const db = require('../../data/db-config.js')
const Resource = require('./resource-model')
const server = require('../server');

const ned = {fullName: "Eddard Stark", title: "Lord of Winterfell", house: "Stark"};
const dany = {fullName: "Danerys Targaryan", title:"Mother of Dragons", house: "Targaryan"};

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
  beforeEach(async () => {
    await db('resources').truncate();
  })
  afterAll(async () => {
    await db.destroy()
  })


describe('Initial Tests', ()=>{
    test("sanity check", () =>{
    expect(true).toBe(true)
})
test("Process env works", () =>{
    expect(process.env.DB_ENV).toBe('testing')
})
})

describe('resource-model', ()=>{
    describe('testing add function', ()=>{
        test('create new resource', async()=>{
        let resource
        await Resource.add(ned)
        resource = await db('resources')
        expect(resource).toHaveLength(1)
    })
    test('creates a full piece of data', async()=>{
        let resource
        await Resource.add(dany)
        resource = await db('resources')
        expect(resource[0]).toMatchObject({fullName: "Danerys Targaryan", title:"Mother of Dragons", house: "Targaryan"})
    })
    })
    describe('testing remove function',()=>{
        test('resource deleted', async()=>{
            const [id] = await db('resources').insert(ned)
            let resource = await db('resources').where({id}).first()
            expect(resource).toBeTruthy()
            await request(server).delete('/resources/' + id)
            resource = await db('resources').where({id}).first()
            expect(resource).toBeFalsy()
        })
    })

})