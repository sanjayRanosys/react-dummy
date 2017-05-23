import React from 'react';

export const requireHandler = (value) => {
    return (!value || value.trim() === "" || value === null) ? false : true;
};

export const minHandler = (value, minLimit) => {
    return (!value || !minLimit || value === null || value.trim().length < minLimit) ? false : true;
};

export const maxHandler = (value, maxLimit) => {
    return (!value || !maxLimit || value === null || value.trim().length > maxLimit) ? false : true;
};

export const patternHandler = (value, pattern) => {
    return (!value || !pattern || pattern.test(value) === false) ? false : true;
};