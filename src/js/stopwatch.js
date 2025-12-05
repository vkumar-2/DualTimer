// create objects
const stopwatch = new Widget('stopwatch', 0, 0, 0, 0, ['hours', 'minutes', 'seconds', 'milliseconds']);
const observer = new MutationObserver(() => {barPalette();});

// global variables
const hours = document.getElementById(stopwatch.getElement(0));
const minutes = document.getElementById(stopwatch.getElement(1));
const seconds = document.getElementById(stopwatch.getElement(2));
const mlseconds = document.getElementById(stopwatch.getElement(3));

// buttons and event listeners
document.getElementById("start-stopwatch").addEventListener("click", () => {start();});
document.getElementById("stop-stopwatch").addEventListener("click", () => {stop();});

let ms = document.getElementById(stopwatch.getElement(3));
let observeCounter = 3;
let msInterval = null;
let barCounter;

// event listen #seconds text content
observer.observe(seconds, 
{
    characterData: true,
    childList: true,
    subtree: true
});

function barPalette()
{
    // cycle through bar colour palettes green-300 -> green-900 while stopwatch is running
    if (observeCounter < 10)
    {
        progressBar.setBgPalette(observeCounter);
        observeCounter++;
    }
    else
    {
        observeCounter = 3;
    }
}
function start()
{
    barCounter = 0;
    progressBar.setBgPalette(observeCounter);
    progressBar.setEnabled(true);

    // remove all duplicate intervals (if already active)
    clearInterval(msInterval);

    // stopwatch
    msInterval = setInterval(() => 
    {
        stopwatch.addMlseconds(10);
        let currentMs = stopwatch.getMlseconds();
        if (currentMs >= 1000)
        {
            barCounter = 100;
        }
        else
        {
            barCounter = Math.floor(currentMs / 10);
        }

        // rollover when 1000 ms is hit
        if (currentMs >= 1000)
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

                    // terminate stopwatch when full day passes
                    if (stopwatch.getHours() >= 24)
                    {
                        console.warn("Full day passed: Terminating timer...");

                        stopwatch.setHours(0);
                        stopwatch.setMinutes(0);
                        stopwatch.setSeconds(0);
                        stopwatch.setMlseconds(0);

                        clearInterval(msInterval);
                        return;
                    }

                    stopwatch.setHours(stopwatch.getHours());
                }

                stopwatch.setMinutes(stopwatch.getMinutes());
            }

            stopwatch.setSeconds(stopwatch.getSeconds());
        }
        if (currentMs >= 1000)
        {
            ms.textContent = "00";
        }
        else
        {
            ms.textContent = String(barCounter).padStart(2, "0");
        }

        progressBar.setWidth(barCounter);
    }, 10);
}
function stop()
{
    progressBar.setEnabled(false);
    clearInterval(msInterval);
}
function set(hours, minutes, seconds, mlseconds)
{
    if (!(isNaN(hours) || isNaN(minutes) || isNaN(seconds) || isNaN(mlseconds)))
    {
        stopwatch.setHours(hours);
        stopwatch.setMinutes(minutes);
        stopwatch.setSeconds(seconds);
        stopwatch.setMlseconds(mlseconds);
    }
}
function reset()
{
    stopwatch.setHours(0);
    stopwatch.setMinutes(0);
    stopwatch.setSeconds(0);
    stopwatch.setMlseconds(0);
}