class Widget
{
    constructor(name, hours, minutes, seconds, mlseconds, elements)
    {
        this.name = name;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.mlseconds = mlseconds;
        this.elements = elements;
    }
    // get methods
    getHours() {return this.hours;}
    getMinutes() {return this.minutes;}
    getSeconds() {return this.seconds;}
    getMlseconds() {return this.mlseconds;}
    
    // array specific methods (for elements)
    getElement(index) {return this.elements[index]}
    getElements() {return this.elements;}
    getElementsLength() {return this.elements.length;}
    addElement(value) {this.elements.push(value);}
    removeElement(value)
    {
        let index = this.elements.indexOf(value);
        if (index !== -1)
        {
            this.elements.splice(index, 1);
        }
    }
    // set methods
    setHours(value)
    {
        document.getElementById(this.getElement(0)).textContent = tidyInput(value);
        this.hours = value;
    }
    setMinutes(value)
    {
        document.getElementById(this.getElement(1)).textContent = tidyInput(value);
        this.minutes = value;
    }
    setSeconds(value)
    {
        document.getElementById(this.getElement(2)).textContent = tidyInput(value);
        this.seconds = value;
    }
    setMlseconds(value)
    {
        document.getElementById(this.getElement(3)).textContent = tidyInput(value);
        this.mlseconds = value;
    }
    // increment (add) methods
    addHours(value)
    {
        let counter = this.getHours();

        // +1 if method calls without parameter
        if (value === undefined)
        {
            counter++; // increment by 1
            document.getElementById(this.getElement(0)).textContent = tidyInput(counter);
            this.hours = counter;
        }
        else
        {
            counter += value; // increment by n
            document.getElementById(this.getElement(0)).textContent = tidyInput(counter);
            this.hours = counter;
        }
    }
    addMinutes(value)
    {
        let counter = this.getMinutes();
        if (value === undefined) 
        {
            counter++;
            document.getElementById(this.getElement(1)).textContent = tidyInput(counter);
            this.minutes = counter;
        }
        else
        {
            counter += value;
            document.getElementById(this.getElement(1)).textContent = tidyInput(counter);
            this.minutes = counter;
        }
    }
    addSeconds(value)
    {
        let counter = this.getSeconds();
        if (value === undefined) 
        {
            counter++;
            document.getElementById(this.getElement(2)).textContent = tidyInput(counter);
            this.seconds = counter;
        }
        else
        {
            counter += value;
            document.getElementById(this.getElement(2)).textContent = tidyInput(counter);
            this.seconds = counter;
        }
    }
    addMlseconds(value)
    {
        let counter = this.getMlseconds();
        if (value === undefined) 
        {
            counter++;
            document.getElementById(this.getElement(3)).textContent = tidyInput(counter);
            this.mlseconds = counter;
        }
        else
        {
            counter += value;
            document.getElementById(this.getElement(3)).textContent = tidyInput(counter);
            this.mlseconds = counter;
        }
    }
    // decrement (subtract) methods
    subHours(value)
    {
        let counter = this.getHours();

        // -1 if method calls without parameter
        if (value === undefined) 
        {
            counter--; // decrement by 1
            document.getElementById(this.getElement(0)).textContent = tidyInput(counter);
            this.hours = counter;
        }
        else
        {
            counter -= value; // decrement by n
            document.getElementById(this.getElement(0)).textContent = tidyInput(counter);
            this.hours = counter;
        }
    }
    subMinutes(value)
    {
        let counter = this.getMinutes();
        if (value === undefined) 
        {
            counter--;
            document.getElementById(this.getElement(1)).textContent = tidyInput(counter);
            this.minutes = counter;
        }
        else
        {
            counter -= value;
            document.getElementById(this.getElement(1)).textContent = tidyInput(counter);
            this.minutes = counter;
        }
    }
    subSeconds(value)
    {
        let counter = this.getSeconds();
        if (value === undefined) 
        {
            counter--;
            document.getElementById(this.getElement(2)).textContent = tidyInput(counter);
            this.seconds = counter;
        }
        else
        {
            counter -= value;
            document.getElementById(this.getElement(2)).textContent = tidyInput(counter);
            this.seconds = counter;
        }
    }
    subMlseconds(value)
    {
        let counter = this.getMlseconds();
        if (value === undefined) 
        {
            counter--;
            document.getElementById(this.getElement(3)).textContent = tidyInput(counter);
            this.mlseconds = counter;
        }
        else
        {
            counter -= value;
            document.getElementById(this.getElement(3)).textContent = tidyInput(counter);
            this.mlseconds = counter;
        }
    }
}

// OBJECTS
const index =
{
    title:
    {
        id: "index-title",
        class: ["vast-shadow-regular", "p-5", "text-center", "text-shadow-lg", "text-shadow-violet-300", "text-fuchsia-800", "text-4xl", "sm:text-5xl"],
        getId: function() {return this.id;},
        getClass: function(index) {return this.class[index];},
        getClassList: function() {return this.class;},
        getClassLength: function() {return this.class.length;},
    },
    subtitle:
    {
        id: "index-subtitle",
        class: ["uppercase", "text-center", "text-3xl", "font-bold"],
        getId: function() {return this.id;},
        getClass: function(index) {return this.class[index];},
        getClassList: function() {return this.class;},
        getClassLength: function() {return this.class.length;},
    },
}
const progressBar = 
{
    id: "progress-bar",
    enabled: false,
    width: 0,
    bgColor: "green",
    bgPalette: 5,
    getId: function() {return this.id;},
    isEnabled: function() {return this.enabled;},
    getWidth: function() {return this.width;},
    getBgColor: function() {return this.bgColor;},
    getBgPalette: function() {return this.bgPalette;},
    setId: function(value)
    {
        this.id = value;
    },
    setEnabled: function(boolean)
    {
        switch (boolean)
        {
            case true:
            {
                this.enabled = true;
                break;
            }
            case false:
            {
                this.enabled = false;
                break;
            }
            default:
            {
                return null;
                break;
            }
        }
    },
    setWidth: function(value) 
    {
        document.getElementById(this.getId()).style.width = `${value}%`;
        this.width = value;
    },
    setBgColor: function(value)
    {
        document.getElementById(this.getId()).classList.remove(`bg-${this.getBgColor()}-${this.getBgPalette()}00`);
        document.getElementById(this.getId()).classList.add(`bg-${value}-${this.getBgPalette()}00`);
        this.bgColor = value;
    },
    setBgPalette: function(value)
    {
        document.getElementById(this.getId()).classList.replace(`bg-${this.getBgColor()}-${this.getBgPalette()}00`, `bg-${this.getBgColor()}-${value}00`);
        this.bgPalette = value;
    },
    addWidth: function(value) 
    {
        let counter = this.getWidth();
        if (value === undefined)
        {
            counter++;
            document.getElementById(this.getId()).style.width = `${counter}%`;
            this.width = counter;
        }
        else
        {
            counter += value;
            document.getElementById(this.getId()).style.width = `${counter}%`;
            this.width = counter;
        }
    },
    subWidth: function(value) 
    {
        let counter = this.getWidth();
        if (value === undefined)
        {
            counter--;
            document.getElementById(this.getId()).style.width = `${counter}%`;
            this.width = counter;
        }
        else
        {
            counter -= value;
            document.getElementById(this.getId()).style.width = `${counter}%`;
            this.width = counter;
        }
    },
};

// FUNCTIONS
function loadClass()
{
    if (document.getElementById("index-page")) // index page
    {
        // title
        const title = () =>
        {
            let properties = [index.title.getId(), index.title.getClassLength()];
            let classes = function(n) {return index.title.getClass(n);}

            for (let i = 0; i < properties[1]; i++)
            {
                document.getElementById(properties[0]).classList.add(classes(i));
            }
        }  
        // subtitle
        const subtitle = () => 
        {
            let properties = [index.subtitle.getId(), index.subtitle.getClassLength()];
            let classes = function(n) {return index.subtitle.getClass(n);}

            for (let i = 0; i < properties[1]; i++)
            {
                document.getElementById(properties[0]).classList.add(classes(i));
            }
        }

        title();
        subtitle();
    }
    else if (document.getElementById("stopwatch-page")) // stopwatch page
    {
        // progress bar
        const bar = () => 
        {
            let progress = document.getElementById("progress-bar");
            progress.classList.add(`bg-${progressBar.getBgColor()}-${progressBar.getBgPalette()}00`);
            progress.style.width = `${progressBar.getWidth()}%`
        }

        bar();
    }
    else if (document.getElementById("timer-page")) // timer page
    {
    }
    else
    {
        console.error("Document not found.");
    }
}
function tidyInput(integer)
{
    if (isNaN(integer))
    {
        return NaN;
    }
    else if (integer < 10) 
    {
        // auto add 0 next to single digit integers
        switch (integer)
        {
            case 0: return "00"; break;
            case 1: return "01"; break;
            case 2: return "02"; break;
            case 3: return "03"; break;
            case 4: return "04"; break;
            case 5: return "05"; break;
            case 6: return "06"; break;
            case 7: return "07"; break;
            case 8: return "08"; break;
            case 9: return "09"; break;
            default:
                return null;
                break;
        }
    }
    else if (integer >= 60)
    {
        return null;
    }
    else
    {
        return integer;
    }
}

loadClass();