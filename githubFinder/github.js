class Github{
    constructor(){
        this.client_id = '15ffd7d0083c3cbf8f29';
        this.client_secret = '37731c5f8e89cdf6c4c597ec2820ca37df1122ae';
        this.repos_count=5;
        this.repos_sort='creted: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrets=${this.client_secret}`)
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_pages=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secrets=${this.client_secret}`)

        const profile= await profileResponse.json();
        const repos= await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}