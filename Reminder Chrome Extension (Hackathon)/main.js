document.addEventListener('DOMContentLoaded', () => {
    
    const btn = document.querySelector("btn");
    const reminderDate = document.querySelector("reminderDate");
    const note = document.querySelector("noteBox");
    const tabTitle = document.querySelector("tabTitle");

    const query = { active: true, currentWindow: true };
    chrome.tabs.query(query, (tabs) => {
        tabTitle.innerHTML = tabs[0].title;
    });

    btn.addEventListener('click', (e) => {
        //className, reminders
        //create a div for each tab title
        //should include:
        //title
        //input field for notes
        //date/time??????
        //append to div eventList
    });

});

//populate createEvent with tab title on icon click




