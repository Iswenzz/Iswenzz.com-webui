export const updateObject = (oldObject: Object, updatedProperties: Object): any => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export function shuffleArray(array: any[]): void
{
    for (let i = array.length - 1; i > 0; i--) 
    {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}