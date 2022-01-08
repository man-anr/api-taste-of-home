const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /recipes:
 *   get:
 *     tags:
 *       - Recipes
 *     summary: Get all recipes
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Return saved user
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/', (req, res, next) => {
    const { id } = req.params;
    res.status(200).json({
        messsage: 'GET all recpies'
    });
});

/**
 * @swagger
 * /recipes/:id:
 *   get:
 *     tags:
 *       - Recipes
 *     summary: Get single recipe
 *     responses:
 *       200:
 *         description: Succcess
 */
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    res.status(200).json({
        messsage: `GET ${id} recipes`
    });
});

/** 
 * @swagger 
 * /recipes:
 *   post:
 *     tags:
 *       - Recipes 
 *     summary: Create a new recipe
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */
router.post('/', (req, res, next) => {
    res.status(200).json({
        messsage: 'POST recipes'
    });
});

/** 
 * @swagger 
 * /recipes/asd:
 *   patch:
 *     tags:
 *       - Recipes
 *     summary: Update certain feilds within recipe
 *     responses:  
 *       201: 
 *         description: Success  
 *   
 */
router.patch('/', (req, res, next) => {
    res.status(201).json({
        messsage: 'PATCH recipes'
    });
});

/** 
 * @swagger 
 * /recipes:
 *   put: 
 *     tags:
 *       - Recipes
 *     summary: Update all field of a recipe
 *   
 */
router.put('/', (req, res, next) => {
    res.status(200).json({
        messsage: 'PUT recipes'
    });
});

/** 
 * @swagger 
 * /recipes:
 *   delete: 
 *     tags:
 *       - Recipes
 *     summary: Delete a recipe
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */
router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        messsage: 'DELETE recipes'
    });
});



module.exports = router;