import express from 'express';
import { Router } from 'express';

const router = Router();

router.get('/availability', async (req, res) => {
  const MOTION_API_KEY = process.env.MOTION_API_KEY;

  if (!MOTION_API_KEY) {
    return res.status(500).json({ error: 'Motion API key is not configured' });
  }

  try {
    const response = await fetch('https://api.usemotion.com/v1/availability', {
      headers: {
        'X-API-Key': MOTION_API_KEY!,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      } as HeadersInit,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Motion API Error Response:', errorText);
      throw new Error(`Failed to fetch availability: ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Invalid response format from Motion API');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Motion API Error:', error);
    res.status(500).json({ error: 'Failed to fetch calendar availability' });
  }
});

export default router;