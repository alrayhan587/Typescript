{





    //Hello. Type assertion, 
    const kgtogm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value is ${convertedValue}`;
        }

        if (typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = kgtogm(1000) as number;













}