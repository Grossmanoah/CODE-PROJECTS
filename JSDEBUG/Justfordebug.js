const getSleepHours = day => {
  switch(day){
    case 'monday':
    return 8;
    break;
    case 'tuesday':
    return 7;
    break;
    case 'wednesday':
    return 8;
    break;
    case 'thursday':
    return 7;
    break;
    case 'friday':
    return 9;
    break;
    case 'saturday':
    return 10;
    break;
    case 'sunday':
    return 6;
    break;
  }
}

const getActualSleepHours = () =>  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +  getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 

const getIdealSleepHours = () => {
  idealHours = 8;
  return idealHours * 7;
};


const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    }// this should not be closed, the if statement should be inside the function above
    
    if (actualSleepHours === idealSleepHours) {
    console.log(‘You got enough sleep’);
    }
    else if (actualSleepHours > idealSleepHours) {
    console.log(‘You got more than the required sleep’);
    }
    else {
    console.log(‘You did not get enough sleep’);
    }
    };