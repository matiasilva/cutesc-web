// adds a menu item to the Sheets UI that
// POSTs to an endpoint with the goal of forcing a site build

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Webmaster')
      .addItem('Trigger Site Build', 'buildSite')
      .addToUi();
}

function buildSite() {
    var options = {
      'method' : 'post',
      'payload' : ''
    };
    UrlFetchApp.fetch('ahem ahem', options);
}