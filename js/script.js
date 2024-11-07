document.addEventListener("DOMContentLoaded", () => {
    const followersCount = document.getElementById('followers-count');
    const likesCount = document.getElementById('likes-count');
    const refreshBtn = document.getElementById('refreshBtn');
    
    
    followersCount.innerText = '5,000';
    likesCount.innerText = '1,200';
    
    
    refreshBtn.addEventListener('click', () => {
        followersCount.innerText = Math.floor(Math.random() * 10000) + 1000;
        likesCount.innerText = Math.floor(Math.random() * 5000) + 500;
    });
});


setInterval(() => {
    
    followersCount.innerText = Math.floor(Math.random() * 10000) + 1000;
    likesCount.innerText = Math.floor(Math.random() * 5000) + 500;
}, 5000); 



const ctx = document.getElementById('followersChart').getContext('2d');
const followersChart = new Chart(ctx, {
    type: 'line', 
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Followers Increase',
            data: [120, 150, 180, 220, 260, 300, 330],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
document.addEventListener("DOMContentLoaded", () => {
    
    const performanceData = [320, 340, 380, 420, 500, 480, 530];
    
    
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    
    const performancePieChart = new Chart(ctx, {
        type: 'pie', 
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Monthly Performance',
                data: performanceData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(201, 203, 207, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(201, 203, 207, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});





