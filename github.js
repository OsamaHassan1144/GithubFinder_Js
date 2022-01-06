class Github{
    constructor(){
        this.client_id = 'usamahassan00015' ;
        this.client_secert = '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' ;
        this.repo_count = 5;
        this.repo_sort = 'created: asc';

    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secert}`); 
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secert}`); 

        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            profile: profileData,
            repo: repos 
        }
    }
}