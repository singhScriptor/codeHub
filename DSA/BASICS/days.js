function displayDays(day){
    switch(true){
        case (day === 1):
            return "Monday";
        case (day === 2):
            return "Tuesday";
        case (day === 3):
            return "Wednesday";        
        case (day === 4):
            return "Thursday";
        case (day === 5):
            return "Friday";
        case (day === 6):
            return "saturday";
        case (day === 7):
            return "Sunday";
        default:
            return "Invalid";         

    }
}
console.log(displayDays(3)); // Output: Wednesday


function displayDay(d){
    let day;
    switch(d){
        case 1:
            day = "Monday"

            break
        case 2:
            day = "Tuesday"
            break
        case 3:
            day = "wednesday"
            break
        case 4:
            day ="Thursday"      
            break
        case 5 :
            day = "Friday"
            break
        case 6 :
            day = "Saturday"
            break
        case 7 :
            day = "Sunday"
            break
        default :
            day = "Invalid"
    }
    return day
}
console.log(displayDay(1))