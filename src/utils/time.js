export function formatTime(time){

    const s = time + '';
    let month1 = s.substring(5, 6);
    if(month1==='0'){
        month1=''
    }
    const month2 = s.substring(6, 7);


    let day1 = s.substring(8, 9);
    if(day1==='0'){
        day1=''
    }
    const day2 = s.substring(9, 10);


    let hour1 = s.substring(11, 12);
    if(hour1==='0'){
        hour1=''
    }
    const hour2 = s.substring(12, 13);

    return month1 + month2 + "月" + day1 + day2 + "日" + hour1 + hour2 +"时"
}