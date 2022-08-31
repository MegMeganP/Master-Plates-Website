$(document).ready(function(){  /*just like jquery.  document.ready function */
    var template = $("#template").html();  /*variable template (referenced in mustache) pertains to script template*/
    Mustache.parse(template);  /*mustache parses for template */

    var rendered = Mustache.render(template, {  /*var render function mustache takes data and renders according
    to what we have in script tag and renders it in target
    abstract our data, benefit object, abstracting using mustache framework to 
    place within actual page
     */
        benefit: {  /*data */
            b1Heading: "Happy Customers",
            b2Heading: "Ease of Execution",
            b3Heading: "Increase Profits",
        },

        b1data: [  /*could use js an d jquery but would have to use a loop-had to do line items in UL list, can do similar
        with mustache.js  different way to populate the content of the webpage
        framework to grab data and place within the script tag that then gets added to the target id*/
            {
                b1LI: "Take advantage of our extensive knowledge of industry trends that we gained from years of research and experience.",
            },
            {
                b1LI: "Reap the rewards of our local knowledge of ingredient availability, culture and customer taste preferences.",
            },
        ],

        b2data: [  
            {
                b2LI: "We create menu items that make sense for your restaurant, your accessible resources, and your customer.",
            },
            {
                b2LI: "We ensure excellent training for your staff, and can provide qualified contract staff upon request, to facilitate a smooth process and top quality plates coming from your restaurant's kitchen.",
            },
    
            
        ],

    })
    $("#target").html(rendered);  /* renders in target div*/ 
});


$(document).ready(function(){ 
    var template = $("#template2").html();  
    Mustache.parse(template);  

    var rendered = Mustache.render(template, {

        benefit2: { 
            b2Heading: "Ease of Execution",
        },

        b2data: [  
            {
                b2LI: "We create menu items that make sense for your restaurant, your accessible resources, and your customer.",
            },
            {
                b2LI: "We ensure excellent training for your staff, and can provide qualified contract staff upon request, to facilitate a smooth process and top quality plates coming from your restaurant's kitchen.",
            },
    
            
        ],

    })
    $("#target2").html(rendered); 
});

$(document).ready(function(){ 
    var template = $("#template3").html();  
    Mustache.parse(template);  

    var rendered = Mustache.render(template, {

        benefit3: { 
            b3Heading: "Increase Profits",
        },

        b3data: [  
            {
                b3LI: "We create unique, high-quality menu items that are more likely to sell, at higher quantities and price points.",
            },
            {
                b3LI: "Skilled menu engineers know to avoid items and processes that can be a waste of time, money and other resources.",
            },
    
            
        ],

    })
    $("#target3").html(rendered); 
});