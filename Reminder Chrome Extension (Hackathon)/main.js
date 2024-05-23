document.addEventListener('DOMContentLoaded', () => {
    
    const btn = document.getElementById("btn");
    const reminderDate = document.getElementById("reminderDate");
    const note = document.getElementById("noteBox");
    const tabTitle = document.getElementById("tabTitle");
    let url = ''; //saving the url so we can open later
    let favIcon = '';

    const query = { active: true, currentWindow: true };
    chrome.tabs.query(query, (tabs) => {
        tabTitle.textContent = tabs[0].title;
        //change above to .textContent?
        url = tabs[0].url; //saving url from tabs, documentation -> https://stackoverflow.com/questions/41280221/save-current-tab-link-inside-of-chrome-extension-popup-window
        if (tabs[0].favIconUrl) {
            favIcon = tabs[0].favIconUrl; //favIconUrl is another property that tabs permission gives us
        } else {
            favIcon = "https://www.codesmith.io/hubfs/Codesmith_June2021/Images/codesmith-logo-icon.ico;" //defaulting to codesmith favicon lol
        }
    });

    btn.addEventListener('click', () => {
        //begin new code added
        console.log('test button');
        const tabTitleText = tabTitle.textContent;
        const reminderDateValue = reminderDate.value;
        const noteText = note.value;

        const page = {
            tabTitle: tabTitleText,
            url,
            favIcon,
            reminderDate: reminderDateValue,
            note: noteText
        };

        //this pushes the data from saved pages into an array in storage
        chrome.storage.sync.get({ savedPages: [] }, (data) => {
            const savedPages = data.savedPages;
            savedPages.push(page);
            chrome.storage.sync.set({ savedPages }, displaySavedPages);
        });
    //end new code added    
            
    //     //accessing the event list
    //     const reminderList = document.querySelector("eventList");
    //     const reminder = document.createElement("div");
    //     reminder.className = "reminders"; //creating a reminder, reminders class
        
    //     //adding title & favicon to reminder as a link
    //     //favicon is the little icon on the website tab
    //     const titleLink = document.createElement('a');
    //     titleLink.className = 'reminderTitle';
    //     titleLink.href = url; //linking the reminder to the url
    //     titleLink.target = '_blank'; //opening in new tab when clicked
    //     titleLink.innerHTML = `<img src="${favIcon}" alt="Saved website's icon" class="favicon"> ${tab.title}`; //adding tab title + icon to reminder
    //     reminder.appendChild(titleLink);

    // //adding toggle down button
    // const toggle = document.createElement('button');
    // toggle.src = './icons/toggleIcon.png';
    // //https://www.shecodes.io/athena/4835-how-to-insert-an-image-from-folder-in-html#:~:text=In%20order%20to%20insert%20an,absolute%20or%20relative%20file%20path.
    // toggle.className = 'toggleIcon';
    // reminder.appendChild(toggle);

    //     //adding date
    //     const date = document.createElement('div');
    //     date.className = 'reminderDate';
    //     date.innerHTML = reminderTime(reminderDate.value);
    //     reminder.appendChild(date);

    //     //add reminder to reminderList
    //     reminderList.appendChild(reminder);
    // });

    });

    //begin new code added
    //this pulls stored data of saved page and displays it on the popup
    function displaySavedPages() {
        chrome.storage.sync.get({ savedPages: [] }, (data) => {
            const savedPages = data.savedPages;
            const eventList = document.getElementById('eventList');
            eventList.innerHTML = '';

            savedPages.forEach((page, index) => {
                const event = document.createElement('div');
                event.className = 'event';

                const titleLink = document.createElement('a');
                titleLink.href = page.url;
                titleLink.target = '_blank';
                titleLink.innerHTML = `<img src="${page.favIcon}" alt="Icon" class="favicon"> ${page.title}`;

                const dateDiv = document.createElement('div');
                dateDiv.className = 'reminderDate';
                dateDiv.textContent = `Reminder set for: ${formatDate(page.reminder)}`;

                const noteDiv = document.createElement('div');
                noteDiv.className = 'note';
                noteDiv.textContent = `Note: ${page.note}`;

                //adds a remove button
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    savedPages.splice(index, 1);
                    chrome.storage.sync.set({ savedPages }, displaySavedPages);
            });

            event.appendChild(titleLink);
            event.appendChild(dateDiv);
            event.appendChild(noteDiv);
            event.appendChild(removeButton);
            eventList.appendChild(event);
            });
        });
    }

    function formatDate(datetime) {
        const date = new Date(datetime);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const month = months[date.getMonth()];
        const day = date.getDate();
        let hour = date.getHours();
        const minute = date.getMinutes().toString().padStart(2, '0');

        let amPm = 'AM';
        if (hour >= 12) {
            //hour -= 12;
            amPm = 'PM';
            if (hour > 12) hour -= 12;
        } else if (hour === 0) {
            hour = 12;
        }

        return `${month} ${day}, ${hour}:${minute} ${amPm}`;
    }

    displaySavedPages();
});

