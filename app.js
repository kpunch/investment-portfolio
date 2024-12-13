
// Example portfolio data
const portfolio = [
    { name: 'Tesla', shares: 330, purchasePrice: 210 },
    { name: 'Nvidia', shares: 224, purchasePrice: 300 },
    { name: 'Broadcom', shares: 100, purchasePrice: 1200 },
    { name: 'Apple', shares: 40, purchasePrice: 150 },
    { name: 'AIQ', shares: 0, purchasePrice: 0 }, // Placeholder for future AIQ investment
];

// Function to fetch real-time prices (mocked for this example)
const fetchCurrentPrices = () => {
    return {
        Tesla: 431.55,
        Nvidia: 515.21,
        Broadcom: 1401.23,
        Apple: 185.61,
        AIQ: 30.00, // Mocked price for AIQ ETF
    };
};

// Function to populate the portfolio table
const populateTable = () => {
    const prices = fetchCurrentPrices();
    const tbody = document.getElementById('portfolio-body');
    tbody.innerHTML = ''; // Clear existing rows

    portfolio.forEach(stock => {
        const currentPrice = prices[stock.name] || 0;
        const currentValue = currentPrice * stock.shares;
        const unrealizedGain = currentValue - (stock.purchasePrice * stock.shares);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stock.name}</td>
            <td>${stock.shares}</td>
            <td>${currentPrice.toFixed(2)}</td>
            <td>${currentValue.toFixed(2)}</td>
            <td>${unrealizedGain.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
};

// Initialize table
populateTable();
