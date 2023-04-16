const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = ((batteryBatches) => batteryBatches.reduce((accumulator, totalBatteries) => accumulator + totalBatteries, 0))(batteryBatches)