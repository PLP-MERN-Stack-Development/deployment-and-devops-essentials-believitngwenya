const axios = require('axios');

const endpoints = [
  'https://yourapp.com/health',
  'https://api.yourapp.com/health'
];

async function checkHealth() {
  for (const endpoint of endpoints) {
    try {
      const response = await axios.get(endpoint, { timeout: 10000 });
      console.log(`✅ ${endpoint}: ${response.data.status}`);
    } catch (error) {
      console.error(`❌ ${endpoint}: ${error.message}`);
      // Send alert (email, Slack, etc.)
    }
  }
}

// Run every 5 minutes
setInterval(checkHealth, 5 * 60 * 1000);