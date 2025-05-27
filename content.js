function removeShorts() {

  const shortsSidebarLinks = [  //seletor link barra lateral
    'a[title="Shorts"]',
    'a[href^="/shorts"]',
    'ytd-guide-entry-renderer:has(a[href^="/shorts"])',
    'yt-mini-guide-entry-renderer:has(a[href^="/shorts"])'
  ];
  
  const shortsSections = [
    'ytd-reel-shelf-renderer', 
    'ytd-rich-section-renderer:has(ytd-reel-shelf-renderer)',
    'ytd-item-section-renderer:has(ytd-reel-shelf-renderer)',
    '[is-shorts]', 
    '[page-subtype="shorts"]'
  ];
  
  const shortsChannelSection = [
    'yt-tab-shape[tab-title="Shorts"]',
    'yt-tab-shape:has(div[aria-label="Shorts"])'
  ];
  
  const allSelectors = [
    shortsChannelSection,
    shortsSidebarLinks,
    shortsSections
  ]


  allSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => element.remove());
  });

}

removeShorts();
setInterval(removeShorts, 1000);

