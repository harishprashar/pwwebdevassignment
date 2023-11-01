function areaOfCircle (r)
{
    let area = Math.PI*Math.pow(r,2);
    area = Math.round(area);
    console.log(`Area of Circle is ${area} sq.cm.`)
}

// give radius of circle as input in fucntion call
areaOfCircle(10); //here radius is 10