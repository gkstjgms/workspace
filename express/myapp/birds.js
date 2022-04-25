// express.Router

import express from 'express'
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', (req, res) => { // 실제 주소는 localhost:3000/birds
    res.send('Birds home page')
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About birds')
})

export default router;