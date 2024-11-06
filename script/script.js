const insert = document.querySelector('.insert');
        const historyList = document.querySelector('.history-list');
        const maxHistory = 5;
        let keyHistory = [];

        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            
            // Update key history
            keyHistory.unshift({
                key: e.key === ' ' ? 'SPACE' : e.key,
                code: e.code,
                keyCode: e.keyCode
            });
            
            // Keep only last 5 entries
            keyHistory = keyHistory.slice(0, maxHistory);

            // Update main display
            insert.innerHTML = `
                <div class="key-info">
                    <div class="key-card">
                        <div class="key-label">Key Pressed</div>
                        <div class="key-value">${e.key === ' ' ? 'SPACE' : e.key}</div>
                    </div>
                    <div class="key-card">
                        <div class="key-label">Key Code</div>
                        <div class="key-value">${e.keyCode}</div>
                    </div>
                    <div class="key-card">
                        <div class="key-label">Code</div>
                        <div class="key-value">${e.code}</div>
                    </div>
                </div>
            `;

            // Update history display
            historyList.innerHTML = keyHistory
                .map((item, index) => `
                    <div style="opacity: ${1 - index * 0.2}">
                        ${item.key} (${item.code})
                    </div>
                `)
                .join('');
        });