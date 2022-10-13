
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Courtesy begins in the home.", "Dont just spend time. Invest it.", "Dont just think, act!","Now is a good time to sell stock.","Pennies from heaven find their way to your doorstep this year!",];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
      
        res.status(200).send(randomFortunes); 

    },

    getGoal: (req, res) => {
        const goal = ["Graduate school','smile all day", "lose 10 pounds","do 10 push ups right now"];

        let randomIndex = Math.floor(Math.random() * goal.length);
        let randomGoal = goal[randomIndex];

        res.status(200).send(randomGoal);
    },
    getDinner: (req, res) => {
        const dinner = ["chic-fil-a","Wendys", "Mcdonalds","Burger King","Carls jr.",];
        
        let randomIndex = Math.floor(Math.random() * dinner.length);
        let randomDinner = dinner[randomIndex];

        res.status(200).send(randomDinner);
    },
    getDate: (req, res) => {
        const dateIdeas = ["Dinner and a movie", "night in ","hit the clubs","Go on double date","hit up a Bar"];

        let randomIndex = Math.floor(Math.random() * dateIdeas.length);
        let randomDateIdea = dateIdeas[randomIndex];

        res.status(200).send(randomDateIdea);
    }

}