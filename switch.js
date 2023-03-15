let day = 'wednesday';

switch(day){
    case 'monday': 
        console.log('study');
        break;
    
    case 'tuesday':
        console.log('thinking');
        break;
    case 'wednesday':
        console.log('java');
        break;
    case 'thursday':
    case 'friday':
    case 'saturday':
    case 'sunday':
        console.log("rest");
        break;
       
    default :
        console.log('bye');
 }