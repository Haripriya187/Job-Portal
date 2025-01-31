const express = require('express');
const { getJobs, createJob, deleteJob, updateJob } = require('../controllers/jobController');
const router = express.Router();


router.get('/', getJobs);

router.post('/', createJob);  

router.delete('/:id', deleteJob);  


router.put('/:id', updateJob);  


module.exports = router;
