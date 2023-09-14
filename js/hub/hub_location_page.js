// Regex pattern to match the hub location URL
const locationPageRegexPattern = /^https:\/\/hub\.g5marketingcloud\.com\/admin\/clients\/([^/]+)\/locations\/([^/]+)\/edit(#.*)?$/;

// Check if the current URL matches the regex pattern
if (locationPageRegexPattern.test(window.location.href)) {

    // Function to change the title of the current tab
    function changeTabTitle(newTitle) {
        document.title = `${newTitle} | Edit`;
    }

    // Get location name from field & replace it in the title of the page. This makes it easier when editing multiple locations
    let locationName = document.getElementById('location_name');
    let locationInternalName = document.getElementById('location_internal_branded_name');
    if (locationInternalName.value.length > 0) {
        changeTabTitle(locationInternalName.value);
    } else {
        changeTabTitle(locationName.value);
    }
}