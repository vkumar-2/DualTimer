/* 
PRE-DEFINED CLASS FILE: Only use for reducing clutter within the HTML.

How to use:
Cut and paste classes from the document into the 'class' array list. 
*/

// OBJECTS (for setting up attributes)
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

// FUNCTIONS
function loadClass()
{
    // index page
    if (document.getElementById("index-page"))
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
    else if (document.getElementById("stopwatch-page"))
    {

    }
    else if (document.getElementById("timer-page"))
    {

    }
    else
    {
        console.error("Document not found.");
    }
}

// CODE EXECUTIONS
loadClass();