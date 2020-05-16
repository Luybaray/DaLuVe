function displayTimes(evt) {
    console.log(evt.target.textContent);
    var times = document.getElementById('times');
    times.classList.toggle("hidden");
};
// var days = document.querySelectorAll('div.days div');
// days.forEach(function(node) {
   
//     node.addEventListener('click', displayTimes);
    
// });

const days = document.getElementById("days");
const current_day_shedule = document.getElementById("curretn-day-shedule");
const close_button = document.getElementById("close-current-btn")




// добавляем реакцию на клик по дню текущего месяца
days.addEventListener("click", (event) => {
    const times = document.getElementById('times');
    // console.log();
    if (event.target.classList.contains("current-month")){
        days.querySelectorAll('.current-month')
            .forEach(el => el.classList.remove("active"));
        
        event.target.classList.add("active");
        console.log("do it!");

        // здесь будет код наполнения появляющегося окошка
        // т.е. надо создать контент до его отображения

        current_day_shedule.classList.add('visible');
    }



})

// кнопка закрытия окна с расписанием
close_button.addEventListener("click", (event) => {
    
    current_day_shedule.classList.remove('visible');
    console.log("I'm try")
    
});



