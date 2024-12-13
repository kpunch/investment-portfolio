const portfolio = [
    { group: 'Stocks', assets: [
        { name: 'Tesla', ticker: 'TSLA', shares: 330, value_327: 108240, cv: 142412 },
        { name: 'Nvidia', ticker: 'NVDA', shares: 224, value_327: 96667, cv: 115407 },
        { name: 'Broadcom', ticker: 'AVGO', shares: 100, value_327: 131873, cv: 140123 },
        { name: 'Apple', ticker: 'AAPL', shares: 40, value_327: 6932, cv: 7424 },
    ]},
    { group: 'ETFs', assets: [
        { name: 'AIQ', ticker: 'AIQ', shares: 1000, value_327: 0, cv: 30000 }
    ]},
];
const populateTable = () => {
    const tbody = document.getElementById('portfolio-body');
    tbody.innerHTML = '';
    portfolio.forEach(group => {
        const groupRow = document.createElement('tr');
        groupRow.classList.add('collapsible');
        groupRow.innerHTML = `<td colspan="5">${group.group}</td>`;
        tbody.appendChild(groupRow);
        group.assets.forEach(asset => {
            const row = document.createElement('tr');
            row.classList.add('collapsible-content');
            row.innerHTML = `
                <td><a href="https://finance.yahoo.com/quote/${asset.ticker}" target="_blank">${asset.name}</a></td>
                <td>${asset.shares}</td>
                <td>$${asset.value_327.toLocaleString()}</td>
                <td>$${asset.cv.toLocaleString()}</td>
                <td>$${(asset.cv - asset.value_327).toLocaleString()}</td>
            `;
            tbody.appendChild(row);
        });
        const totalRow = document.createElement('tr');
        const total327 = group.assets.reduce((sum, asset) => sum + asset.value_327, 0);
        const totalCV = group.assets.reduce((sum, asset) => sum + asset.cv, 0);
        totalRow.innerHTML = `
            <td>Total</td>
            <td></td>
            <td>$${total327.toLocaleString()}</td>
            <td>$${totalCV.toLocaleString()}</td>
            <td>$${(totalCV - total327).toLocaleString()}</td>
        `;
        tbody.appendChild(totalRow);
    });
};
const updateChart = () => {};
populateTable();
