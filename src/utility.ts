export const updateObject = (oldObject: Object, updatedProperties: Object): any => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};