
const complimentBtn = document.getElementById("complimentButton")
const fortunesBtn = document.getElementById("fortunesButton")
const goalBtn = document.getElementById("goalButton")
const DinnerBtn = document.getElementById("dinnerButton")
const dateBtn = document.getElementById("dateButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
    });

};
const getGoal = () => {
    axios.get("http://localhost:4000/api/goal/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getDinner = () => {
    axios.get("http://localhost:4000/api/dinner/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};
const getDate = () => {
    axios.get("http://localhost:4000/api/date/")
        .then(res => {
            const data =res.data;
            alert(data);
        });
}


complimentBtn.addEventListener('click', getCompliment)
fortunesBtn.addEventListener('click', getFortune)
goalBtn.addEventListener('click', getGoal)
DinnerBtn.addEventListener('click',getDinner)
dateBtn.addEventListener('click',getDate)