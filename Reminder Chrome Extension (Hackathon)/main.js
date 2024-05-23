document.addEventListener('DOMContentLoaded', () => {
    
    const btn = document.querySelector("btn");
    const reminderDate = document.querySelector("reminderDate");
    const note = document.querySelector("noteBox");
    const tabTitle = document.querySelector("tabTitle");
    let url = ''; //saving the url so we can open later
    let favIcon = '';

    const query = { active: true, currentWindow: true };
    chrome.tabs.query(query, (tabs) => {
        tabTitle.innerHTML = tabs[0].title;
        url = tabs[0].url; //saving url from tabs, documentation -> https://stackoverflow.com/questions/41280221/save-current-tab-link-inside-of-chrome-extension-popup-window
        if(tabs[0].favIconUrl) {
            favIcon = tabs[0].favIconUrl; //favIconUrl is another property that tabs permission gives us
        } else {
            favIcon = "https://www.codesmith.io/hubfs/Codesmith_June2021/Images/codesmith-logo-icon.ico;" //defaulting to codesmith favicon lol
        }
    });

    btn.addEventListener('click', (e) => {
        //accessing the event list
        const reminderList = document.querySelector("eventList");
        const reminder = document.createElement("div");
        reminder.className = "reminders"; //creating a reminder, reminders class
        
        //adding title & favicon to reminder as a link
        //favicon is the little icon on the website tab
        const titleLink = document.createElement('a');
        titleLink.className = 'reminderTitle';
        titleLink.href = url; //linking the reminder to the url
        titleLink.target = '_blank'; //opening in new tab when clicked
        titleLink.innerHTML = `<img src="${favIcon}" alt="Saved website's icon" class="favicon"> ${tab.title}`; //adding tab title + icon to reminder
        reminder.appendChild(titleLink);

        //adding date
        const date = document.createElement('div');
        date.className = 'reminderDate';
        date.innerHTML = reminderTime(reminderDate.value);
        reminder.appendChild(date);

        //adding toggle down button
        const toggle = document.createElement('button');
        toggle.src = './icons/toggleIcon.png'; //https://www.shecodes.io/athena/4835-how-to-insert-an-image-from-folder-in-html#:~:text=In%20order%20to%20insert%20an,absolute%20or%20relative%20file%20path.
        toggle.className = 'toggleIcon';
        reminder.appendChild(toggle);

        //add reminder to reminderList
        reminderList.appendChild(reminder);
    });

});

function reminderTime(datetime) {
    const date = new Date(datetime);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    let hour = date.getHours();
    const moinute = date.getMinutes();

    let amPm = 'AM';
    if(hour >= 12) {
        hour -= 12;
        amPm = 'PM';
    } else if(hour === 0) {
        hour = 12;
    }

    return 'Reminder set for: ${month} ${day} ${hour}:${minute} ${amPm}';
}
//populate createEvent with tab title on icon click




