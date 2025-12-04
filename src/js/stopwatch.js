// stopwatch variables
const stopwatchHrs = document.getElementById("stopwatch-hours");
const stopwatchMins = document.getElementById("stopwatch-minutes");
const stopwatchSecs = document.getElementById("stopwatch-seconds");
const stopwatchMlsecs = document.getElementById("stopwatch-milliseconds");

const stopwatch = 
{
    hours: 0,
    minutes: 0,
    seconds: 0,
    mlseconds: 0,
    getHours: function() {return this.hours;},
    getMinutes: function() {return this.minutes;},
    getSeconds: function() {return this.seconds;},
    getMlseconds: function() {return this.mlseconds;},

    // set methods
    setHours: function(value) 
    {
        stopwatchHrs.textContent = tidyInput(value);
        this.hours = value;
    },
    setMinutes: function(value)
    {
        stopwatchMins.textContent = tidyInput(value);
        this.minutes = value;
    },
    setSeconds: function(value)
    {
        stopwatchSecs.textContent = tidyInput(value);
        this.seconds = value;
    },
    setMlseconds: function(value)
    {
        stopwatchMlsecs.textContent = tidyInput(value);
        this.mlseconds = value;
    },

    // increment (add) methods
    addHours: function(value)
    {
        let counter = this.getHours();

        // +1 if method calls without parameter
        if (value === undefined) 
        {
            counter++; // increment by 1
            stopwatchHrs.textContent = tidyInput(counter);
            this.hours = counter;
        }
        else
        {
            counter += value; // increment by n
            stopwatchHrs.textContent = tidyInput(counter);
            this.hours = counter;
        }
    },
    addMinutes: function(value) 
    {
        let counter = this.getMinutes();

        if (value === undefined) 
        {
            counter++;
            stopwatchMins.textContent = tidyInput(counter);
            this.minutes = counter;
        }
        else
        {
            counter += value;
            stopwatchMins.textContent = tidyInput(counter);
            this.minutes = counter;
        }
    },
    addSeconds: function(value) 
    {
        let counter = this.getSeconds();

        if (value === undefined) 
        {
            counter++;
            stopwatchSecs.textContent = tidyInput(counter);
            this.seconds = counter;
        }
        else
        {
            counter += value;
            stopwatchSecs.textContent = tidyInput(counter);
            this.seconds = counter;
        }
    },
    addMlseconds: function(value) 
    {
        let counter = this.getMlseconds();

        if (value === undefined) 
        {
            counter++;
            stopwatchMlsecs.textContent = tidyInput(counter);
            this.mlseconds = counter;
        }
        else
        {
            counter += value;
            stopwatchMlsecs.textContent = tidyInput(counter);
            this.mlseconds = counter;
        }
    },

    // decrement (subtract) methods
    subHours: function(value) 
    {
        let counter = this.getHours();

        // -1 if method calls without parameter
        if (value === undefined) 
        {
            counter--; // decrement by 1
            stopwatchHrs.textContent = tidyInput(counter);
            this.hours = counter;
        }
        else
        {
            counter -= value; // decrement by n
            stopwatchHrs.textContent = tidyInput(counter);
            this.hours = counter;
        }
    },
    subMinutes: function(value) 
    {
        let counter = this.getMinutes();

        if (value === undefined) 
        {
            counter--;
            stopwatchMins.textContent = tidyInput(counter);
            this.minutes = counter;
        }
        else
        {
            counter -= value;
            stopwatchMins.textContent = tidyInput(counter);
            this.minutes = counter;
        }
    },
    subSeconds: function(value) 
    {
        let counter = this.getSeconds();

        if (value === undefined) 
        {
            counter--;
            stopwatchSecs.textContent = tidyInput(counter);
            this.seconds = counter;
        }
        else
        {
            counter -= value;
            stopwatchSecs.textContent = tidyInput(counter);
            this.seconds = counter;
        }
    },
    subMlseconds: function(value) 
    {
        let counter = this.getMlseconds();

        if (value === undefined) 
        {
            counter--;
            stopwatchMlsecs.textContent = tidyInput(counter);
            this.mlseconds = counter;
        }
        else
        {
            counter -= value;
            stopwatchMlsecs.textContent = tidyInput(counter);
            this.mlseconds = counter;
        }
    },
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
function startStopwatch()
{
    const msInterval = setInterval(() => 
    {
        stopwatch.addMlseconds(10);

        // increment second when milliseconds reach 1000
        if (stopwatch.getMlseconds() >= 1000)
        {
            stopwatch.setMlseconds(0);
            stopwatch.addSeconds(1);

            // increment minute when seconds reach 60
            if (stopwatch.getSeconds() >= 60)
            {
                stopwatch.setSeconds(0);
                stopwatch.addMinutes(1);

                // increment hour when minutes reach 60
                if (stopwatch.getMinutes() >= 60)
                {
                    stopwatch.setMinutes(0);
                    stopwatch.addHours(1);

                    if (stopwatch.getHours() >= 24)
                    {
                        console.warn("Full day passed: Terminating timer...");

                        // reset timer
                        stopwatch.setHours(0);
                        stopwatch.setMinutes(0);
                        stopwatch.setSeconds(0);
                        stopwatch.setMlseconds(0);

                        // terminate interval
                        clearInterval(msInterval);
                        return;
                    }

                    stopwatch.setHours(stopwatch.getHours());
                }

                stopwatch.setMinutes(stopwatch.getMinutes());
            }

            stopwatch.setSeconds(stopwatch.getSeconds());
        }

        // display ms (2 digits) without interfering with internal counter
        stopwatchMlsecs.textContent = String(Math.floor(stopwatch.getMlseconds() / 10)).padStart(2, "0");
    }, 10);
}