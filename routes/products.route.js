const express = require('express')

const router = express.Router()

router.get("/", function(req, res, next) {
    console.log("hello products");
    res.send("get products data")
})

router.get("/:id", function(req, res, next) {
    res.send("get products data")
})

router.post("/", function(req, res, next) {
    res.send("get products data")
})

router.put("/:id", function(req, res, next) {
    res.send("get products data")
})


router.delete("/:id", function(req, res, next) {
    res.send("get products data")
})

module.exports = router