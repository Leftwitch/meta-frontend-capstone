export const getTimesAroundDate = async (baseDate: Date | null, count: number): Promise<Date[] | null> => {
    if (!baseDate)
        return null;

    const randomDates: Date[] = [];

    while (randomDates.length < count) {
        // Get the base time in minutes
        const baseTimeInMinutes = baseDate.getHours() * 60 + baseDate.getMinutes();

        // Generate a random offset within a 2-hour range (120 minutes)
        const randomOffset = Math.floor(Math.random() * 120);

        // Add the random offset to the base time
        const newTimeInMinutes = baseTimeInMinutes + randomOffset;

        // Round the time to the nearest 15 minutes
        const roundedTimeInMinutes = Math.round(newTimeInMinutes / 15) * 15;

        // Calculate the new date with the rounded time
        const newDate = new Date(baseDate);
        newDate.setHours(Math.floor(roundedTimeInMinutes / 60));
        newDate.setMinutes(roundedTimeInMinutes % 60);

        // Check if the generated date already exists in the array
        if (!randomDates.some(date => date.getTime() === newDate.getTime())) {
            randomDates.push(newDate);
        }
    }

    const delay = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, delay * 1000);
    });

    const result = [...new Set(randomDates)];
    result.sort()
    return result;
}