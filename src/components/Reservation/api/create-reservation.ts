export const createReservation = (data: unknown) =>   new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 3 * 1000);
    });
