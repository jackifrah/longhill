import express from 'express';
import { Router } from 'express';

const router = Router();

router.get('/availability', async (req, res) => {
  const MOTION_API_KEY = process.env.MOTION_API_KEY;
  
  try {
    const response = await fetch('https://api.usemotion.com/v1/availability', {
      headers: {
        'X-API-Key': MOTION_API_KEY,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch availability');
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Motion API Error:', error);
    res.status(500).json({ error: 'Failed to fetch calendar availability' });
  }
});

export default router;
