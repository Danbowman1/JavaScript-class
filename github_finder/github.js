class Github {
    constructor() {
        this.client_id = 'c4f915bca0d7ffa22701'
        this.client_secret = '07680f4b917d284156659329bbcb6a43d5afde36'
        this.repos_count = 5
        this.repos_sort = 'created" asc'
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_sercret=${this.client_secret}`)
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_sercret=${this.client_secret}`)
        
        const profile = await profileResponse.json()
        const repos = await reposResponse.json()
        
        

        return {
            profile,
            repos
        }
    }
}