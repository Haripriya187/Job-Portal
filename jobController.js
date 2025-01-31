const Job = require('../models/Job');  

// Fetch the jobs 
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();  
    res.json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch jobs.' });
  }
};

// Create a new job 
const createJob = async (req, res) => {
  try {
    console.log('Received data:', req.body);  

    const { title, company, description } = req.body;

   
    const newJob = new Job({
      title,
      company,
      description
    });

   
    await newJob.save();
    res.status(201).json({ success: true, job: newJob });
  } catch (error) {
    console.error('Error:', error); 
    res.status(500).json({ success: false, message: 'Failed to create job.' });
  }
};

// Delete 
const deleteJob = async (req, res) => {
  const { id } = req.params;  
  try {
    const job = await Job.findByIdAndDelete(id);  

    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    res.json({ success: true, message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete job' });
  }
};

// Update 
const updateJob = async (req, res) => {
  const { id } = req.params;  
  const { title, company, description } = req.body;  

  try {
    const job = await Job.findById(id);  

    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    
    job.title = title || job.title;
    job.company = company || job.company;
    job.description = description || job.description;

    
    await job.save();
    
    res.json({ success: true, message: 'Job updated successfully', job });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update job' });
  }
};


module.exports = { getJobs, createJob,deleteJob,updateJob };
