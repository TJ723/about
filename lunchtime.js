function myFunction() {
  const dotElement = document.querySelector(".dot1");
  const dotNumber = parseInt(dotElement.dataset.dotNumber) || 1;
 
   if (dotNumber <= 6) {
       dotElement.dataset.dotNumber = dotNumber + 1;
      dotElement.className = `dot${dotNumber + 1}`;
  }
 }
 

let list = [];
function setup() {
  createCanvas(1519,1000);
  colorMode(HSB, 360, 100, 100); //color mode
}

function draw() {
  background(220);
  let last_list_item_no = list.length - 1 //the last elements number is one less than the size of our list because numbering starts from 0 not 1
  for (let i = last_list_item_no ; i >= 0; i--) { //this loops will go through our loop one at a time from last element to the zeroth one at a time
    
    list[i].display();

    if (list[i].timerFinished()) { // check if the item is older than 640 milli and should be removed
      list.splice(i, 1);
    }

  }
}


function mouseMoved() {
  list.push(new BlackBox(mouseX, mouseY)); // adds a new box to our list
}

class BlackBox {
  constructor(x, y) { // runs when new BlackBox is run in mousemoved. it adds a new box with these values
    this.x = x;
    this.y = y;
    this.size = 8;
    this.max_age = 640; //milliseconds
    this.birth_time = millis(); // its saying the birthtime is equal to the time that box was born on
  }

  display() {
    //the next two lines calculate the age of the dot.
    let todays_date = millis()
    let curr_age = todays_date - this.birth_time; //works the same way you calclulate your age


    //the next 4 lines work on how to color the dot and shape it into a sphere
    let hue = map(curr_age, 0, this.max_age, 0, 360); // Calculate hue for rainbow effect
    noStroke();
    fill(hue, 100, 100); // Use HSB color based on hue
    ellipse(this.x, this.y, this.size, this.size); // Draw a circle with rainbow effect
  }

  timerFinished() {
    let todays_date = millis()
    let curr_age = todays_date - this.birth_time; //works the same way you calclulate your age 
    //returns true if the age of the dot is more than 640 millisecond
    return curr_age >= this.max_age;
  }
}

