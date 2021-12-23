class Github{
    constructor(){
        this.client_id = 'Iv1.1874b085cf93b3de' ;
        this.client_secert = '5760d2d7fd451e60203e28e70a68309b2567282c' ;

    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secert}`); 

        const profileData = await profileResponse.json();

        return {
            profile: profileData
        }
    }
}