// Change the tab name to client name
function changeTabTitle(newTitle) {
    document.title = `${newTitle} | Edit`;
}
let locationName = document.querySelector("body > div.container > table > tbody > tr > td:nth-child(3) > a");
changeTabTitle(`${locationName.textContent} | Provisioner`);


// Function to change the favicon with a specified color
function changeFavicon(color) {
    // Find the favicon link element in the document
    var link = document.querySelector("link[rel~='icon']");

    // If the favicon link doesn't exist, create a new one and add it to the head
    if (!link) {
        console.log('No favicon found, creating one.');
        link = document.createElement('link');
        link.rel = 'icon';

        // Set a valid href pointing to a default favicon (e.g., a blank image)
        link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAApElEQVR42mL4z8AABmAAT6/nG14AAAAASUVORK5CYII=';

        document.head.appendChild(link);
    }

    // Define the SVG content as a data URL with the specified color
    var svgContent = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M407.906,319.913l-230.8-2.928a4.58,4.58,0,0,1-3.632-1.926,4.648,4.648,0,0,1-.494-4.147,6.143,6.143,0,0,1,5.361-4.076L411.281,303.9c27.631-1.26,57.546-23.574,68.022-50.784l13.286-34.542a7.944,7.944,0,0,0,.524-2.936,7.735,7.735,0,0,0-.164-1.631A151.91,151.91,0,0,0,201.257,198.4,68.12,68.12,0,0,0,94.2,269.59C41.924,271.106,0,313.728,0,366.12a96.054,96.054,0,0,0,1.029,13.958,4.508,4.508,0,0,0,4.445,3.871l426.1.051c.043,0,.08-.019.122-.02a5.606,5.606,0,0,0,5.271-4l3.273-11.265c3.9-13.4,2.448-25.8-4.1-34.9C430.124,325.423,420.09,320.487,407.906,319.913ZM513.856,221.1c-2.141,0-4.271.062-6.391.164a3.771,3.771,0,0,0-3.324,2.653l-9.077,31.193c-3.9,13.4-2.449,25.786,4.1,34.89,6.02,8.4,16.054,13.323,28.238,13.9l49.2,2.939a4.491,4.491,0,0,1,3.51,1.894,4.64,4.64,0,0,1,.514,4.169,6.153,6.153,0,0,1-5.351,4.075l-51.125,2.939c-27.754,1.27-57.669,23.574-68.145,50.784l-3.695,9.606a2.716,2.716,0,0,0,2.427,3.68c.046,0,.088.017.136.017h175.91a4.69,4.69,0,0,0,4.539-3.37,124.807,124.807,0,0,0,4.682-34C640,277.3,583.524,221.1,513.856,221.1Z" fill="' + color + '"/></svg>');

    // Create a new image element with the SVG content as the source
    var faviconImage = new Image();
    faviconImage.src = svgContent;

    // Handle the image's onload event
    faviconImage.onload = function () {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        canvas.width = faviconImage.width;
        canvas.height = faviconImage.height;

        // Draw the loaded SVG favicon onto the canvas
        context.drawImage(faviconImage, 0, 0);

        // Create a new image with the modified SVG XML
        var updatedFavicon = new Image();
        updatedFavicon.src = canvas.toDataURL();

        // Update the favicon link with the new image
        link.href = updatedFavicon.src;
    };
}


function determineSSLStatus(div) {
    let sslStatusColor = div.querySelector('div.panel-body > span.glyphicon');
    if (sslStatusColor.style.color === 'green') {
        return 'green';
    } else if (sslStatusColor.style.color === 'darkorange') {
        return 'yellow';
    } else if (sslStatusColor.style.color === 'darkgray') {
        return 'red';
    }
}

function cloudfrontHosted(div) {
    let cloudfrontDiv = div.querySelector('div.panel > div.panel-body.cf > button');
    if (cloudfrontDiv) {
        if (cloudfrontDiv.textContent.includes('Domain')) {
            return true;
        } else {
            return false;
        }
    }
}

function getHostedStatus(div) {
    let hostedButton = div.querySelector('button');
    if (hostedButton) {
        if (hostedButton.textContent.includes('Cloudfront') || hostedButton.textContent.includes('AWS')) {
            return true;
        } else {
            return false;
        }
    }
}

let sslStatus;
let cloudfrontStatus;
let hostedStatus;
function getStatuses() {
    // Get panels
    let panels = document.querySelectorAll('div.panel');
    panels.forEach((panel) => {
        let panelTitle = panel.querySelector('h3.panel-title');
        if (panelTitle) {
            if (panelTitle.innerText === 'SSL Cert') {
                let determineSSLStatusColor = determineSSLStatus(panel);
                sslStatus = determineSSLStatusColor;
                if (determineSSLStatusColor === 'green') {
                    console.log(`SSL Status is ${determineSSLStatusColor}`);
                } else if (determineSSLStatusColor === 'yellow') {
                    console.log(`SSL Status is ${determineSSLStatusColor}`);
                } else if (determineSSLStatusColor === 'red') {
                    console.log(`SSL Status is ${determineSSLStatusColor}`);
                }
                sslColor = determineSSLStatusColor;
            } else if (panelTitle.innerText === 'Cloudfront') {
                cloudfrontStatus = cloudfrontHosted(panel);
                console.log(`Cloudfront Status: ${cloudfrontStatus}`);
            }
        } else {
            hostedStatus = getHostedStatus(panel);
            console.log(`Hosted status is ${hostedStatus}`);
        }
    });
}
getStatuses();

// Run the code with a specified color when the page is fully loaded
window.onload = function () {
    let successClr = '#5ce681';
    let partialClr = '#ebc764';
    let failClr = '#eb6464';
    if (sslStatus === 'green' && cloudfrontStatus && hostedStatus) {
        changeFavicon(successClr);
    } else {
        changeFavicon(failClr);
    }
};