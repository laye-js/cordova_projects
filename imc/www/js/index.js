function calculateIMC() {
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const bmi = weight.value / Math.pow(height.value, 2);
    let message = 'You are in ';

    if (bmi < 16.5) {
        message += 'a state of undernourishment';
    }
    else if (bmi >= 16.5 && bmi < 18.5) {
        message += 'a state of thinness';
    }
    else if (bmi >= 18.5 && bmi < 25) {
        message = 'You have a normal weight';
    }
    else if (bmi >= 25 && bmi < 30) {
        message += 'a state of overweight';
    }
    else if (bmi >= 30 && bmi < 35) {
        message += "a state of moderate obesity";
    }
    else if (bmi >= 35 && bmi < 40) {
        message += "a state of severe obesity";
    }
    else {
        message += "a state of morbid or massive obesity";
    }

    const interpretation = document.getElementById('interpretation');
    interpretation.innerHTML = `Your BMI is: ${bmi.toFixed(2)}<hr>${message}`;
    interpretation.parentNode.hidden = false;
}
