import { onlyUpdateForKeys } from 'recompose';

export const safeId = s => s.replace(/^[^a-z]+|[^\w:.-]+/gi, '');

export const unchange = onlyUpdateForKeys([]);

export const distributeArray = (items, k) => {
    const subs = Array.apply(null, { length: k }).map(() => []);
    items.forEach((item, i) => subs[i % k].push(items[i]));
    return subs;
};

export const blankArr = (n = 9) => {
    const arr = [];
    arr.length = n;
    arr.fill(null);
    return arr;
};

export const startAnimation = callback => {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            callback();
        });
    });
};
