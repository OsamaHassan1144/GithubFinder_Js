//Init Github
const github = new Github

//Init UI
const ui = new UI;

// Search User
const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup',(e)=>{
    // Get Input text
    const userText = e.target.value;
    if (userText !== '') {
        // Make Http call
        github.getUser(userText).then(data => {
            if (data.profile.message === 'Not Found') {
                //Show Alert

            }
            else{
                //Show Profile
            }
        })
    }
    else{
        //Clear profile
    }
});