class Github{
    constructor(){
        this.client_id = 'usamahassan00015' ;
        this.client_secert = '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' ;

    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secert}`); 

        const profileData = await profileResponse.json();

        return {
            profile: profileData
        }
    }
}