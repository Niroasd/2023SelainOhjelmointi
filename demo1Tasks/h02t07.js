measurements = [{ batchid: 434, unit: 'ounce', weight: 12.21 }, 
    {batchid: 414, unit: 'gram', weight: 199.54 },
    { batchid: 522, unit: 'ounce', weight: 18.88 }];

const convertOuncesToGrams = (measurements) => {
    const ounceGramRatio = 28.3495;

    const converted = measurements.map((measurement) => {
        if (measurement.unit === 'ounce') {
            //tofixed sets decimals amount
            const newValue = (measurement.weight * ounceGramRatio).toFixed(2);
            return {...measurement, unit: 'gram', weight: newValue};
        }
        //if already in grams return default.
        return measurement;
    });

    return JSON.stringify(converted);
}
