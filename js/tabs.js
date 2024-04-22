const tabsBtn = document.querySelectorAll(".btns");
const tabsItems = document.querySelectorAll(".pic__tc");

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        
        if( ! currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
            item.classList.remove('active');
            })

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            })

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});

document.querySelector('.btns').click();