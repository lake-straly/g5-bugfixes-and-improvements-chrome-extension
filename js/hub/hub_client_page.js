let pattern = new RegExp('^https:\/\/hub\.g5marketingcloud\.com\/admin\/clients\/[^/]+$');
if (pattern.test(window.location.href)){
    
    // Add provisioner link to the Hub
    function insertProvisionerLink() {
        let url = window.location.href;
        let lastPart = url.split('/')[5];
        let provisionerURL = 'https://provisioner.g5marketingcloud.com/status/clients/' + lastPart;
        let provisionerUrlHtml = '<p><a target="_blank" href="' + provisionerURL + '">Provisioner</a></p>';
        let hubToolsDiv = document.querySelector("#main_content > div > div:nth-child(8) > div:nth-child(2)").innerHTML;
        document.querySelector("#main_content > div > div:nth-child(8) > div:nth-child(2)").innerHTML = hubToolsDiv + provisionerUrlHtml;
    }
    insertProvisionerLink();

    // Add Marketing Center Parser link to the Hub
    function insertMcParseLink() {
        let udmTable = document.querySelectorAll('.table tbody td');
        let udmTableRows = document.querySelectorAll('.table tbody tr');
        let oneSite = false;
        let onSite = false;
        for (let j = 0; j < udmTableRows.length; j++) {
            if (udmTableRows[j].firstElementChild.innerHTML == 'OS') {
                oneSite = true;
                console.log('TRUE');
            }
        }
        for (let i = 0; i < udmTable.length; i++) {
            if (udmTable[i].innerHTML == 'LS' && udmTable[i].nextSibling.nextSibling.nextSibling.nextSibling.innerHTML == 'Primary' && oneSite == true) {
                let lscId = udmTable[i].nextSibling.nextSibling.innerHTML;

                let mcParseUrl = 'https://www.stralyfamily.com/toolkit/marketing_center_parser/?integration_type=onesite&id=' + lscId;
                let mcParseUrlHtml = '<p><a target="_blank" href="' + mcParseUrl + '">Marketing Center Parser</a></p>';

                let hubToolsDiv = document.querySelector("#main_content > div > div:nth-child(8) > div:nth-child(2)").innerHTML;
                document.querySelector("#main_content > div > div:nth-child(8) > div:nth-child(2)").innerHTML = hubToolsDiv + mcParseUrlHtml;
            }
        }
    }
    insertMcParseLink();

    // Add CCS link to the Hub
    function insertCcsLink() {
        let udmTable = document.querySelectorAll('.table tbody td');
        for (let i = 0; i < udmTable.length; i++) {
            if (udmTable[i].innerHTML == 'LS' && udmTable[i].nextSibling.nextSibling.nextSibling.nextSibling.innerHTML == 'Primary') {
                let lscId = udmTable[i].nextSibling.nextSibling.innerHTML;

                let ccsUrl = 'https://ccs.myleasestar.com/action/viewCompanyAction?dispatch=view&companyId=' + lscId;
                let ccsUrlHtml = '<p><a target="_blank" href="' + ccsUrl + '">CCS</a></p>';

                let hubToolsDiv = document.querySelector("#main_content > div > div:nth-child(8) > div:nth-child(2)").innerHTML;
                document.querySelector("#main_content > div > div:nth-child(8) > div:nth-child(2)").innerHTML = hubToolsDiv + ccsUrlHtml;
            }
        }
    }
    insertCcsLink();
}