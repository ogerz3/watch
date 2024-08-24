function displayTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let dayOfWeek = now.getDay(); 

    let weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    
    weekdays.push(weekdays.shift());

    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let time = hours + ':' + minutes + ':' + seconds;
    let day = weekdays[dayOfWeek];

    document.querySelector('.time').textContent = time;
    document.querySelector('.dayOfWeek').textContent = day;
}

setInterval(displayTime, 1000);