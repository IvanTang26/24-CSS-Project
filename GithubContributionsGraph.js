function generateRandomContributionStats(){
    const contributions = [];
    const levels = [0, 0, 0, 3, 5, 10];
    
    // for each week of the year 
    for(let i = 0; i < 52; i++){
       const week = [];

       // make 7 squares and randomly assign a contribution level to each square in a week
       for(let i = 0; i < 7; i++){
            week.push(levels[Math.floor(Math.random() * levels.length)]); 
       }
       contributions.push(week);
    }
    return contributions;
}

function makeGraph(){
    const graph = document.querySelector(".graph");
    const contributions = generateRandomContributionStats();

    for(let i = 0; i < contributions.length; i++){
        // Create an li for each week and add to graph ul
        let graphWeek = document.createElement('ul');
        graphWeek.classList.add(`week-${i + 1}`);
        
        // Create a square for each contribution array, and assign a level
        contributions[i].forEach(level => {
            let square = document.createElement('li');
            square.classList.add('square');
            square.dataset.value = level;
            graphWeek.appendChild(square);
            graph.appendChild(graphWeek);
        });
    }
}

makeGraph();
