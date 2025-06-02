export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;   
}

export function getArea(radius){
    return PI * Math.pow(radius, 2);
}

export function getVolume(radius){
    return 4/3 * PI * Math.pow(radius, 3);
}