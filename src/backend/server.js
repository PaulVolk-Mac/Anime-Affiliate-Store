const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = 5000;

app.get('/api/product-info', async (req, res) => {
    const { url } = req.query;

    try {
        // Fetch HTML content from the given URL
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Extract metadata (adjust selectors for your needs)
        const title = $('meta[property="og:title"]').attr('content');
        const image = $('meta[property="og:image"]').attr('content');
        const price = $('meta[property="product:price:amount"]').attr('content');

        res.json({
            title: title || 'No title found',
            image: image || 'No image found',
            price: price || 'Price unavailable',
            url,
        });
    } catch (error) {
        console.error('Error fetching product info:', error);
        res.status(500).json({ error: 'Failed to fetch product info' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});
