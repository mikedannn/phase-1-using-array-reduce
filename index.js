const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const sumReducer = function(sum, value) {
    return sum + value;
}

const totalBatteries = batteryBatches.reduce(sumReducer, 0);


// const totalBatteries = batteryBatches.reduce(function(sum, value) {return sum + value}, 0);