import request from 'supertest';
import express, { Router } from 'express';
import { getExamples } from '@/controllers/example.js'
import { exampleModelValidator } from '@/models/example.js'
import { z } from 'zod'
import { assert } from 'chai'

const app = express();
app.use('/', Router().get('/', getExamples));

describe("Example Controller", () => {
    it("returns whatever example service provides", async () => {
        const res = await request(app).get('/');
        assert.equal(res.statusCode, 200)
        assert.doesNotThrow(() => { z.array(exampleModelValidator).parse(res.body?.messages) })
    })
})