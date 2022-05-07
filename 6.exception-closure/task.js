function parseCount (p) {
    let result = Number.parseInt(p);
    if (isNaN(result)) {
        throw new Error ("Невалидное значение");
    } return result;
}

function validateCount (p) {
    try {
        return parseCount (p);
    }   catch(err) {
        return err;
    }
}

class Triangle {
    constructor(a,b,c) {
        if (a + b <= c || a + c <= b || c + b <= a) {
            throw new Error ("Треугольник с такими сторонами не существует")
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea () {
        let p = this.getPerimeter()/2;
        return +Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)).toFixed(3);
    }
}

function getTriangle (a,b,c) {
    try {
        return new Triangle(a,b,c);
    }   
    catch (err) {
        return errorTriangle = {
            getArea: 'Ошибка! Треугольник не существует',
            getPerimeter: 'Ошибка! Треугольник не существует',
        } 
    }
}