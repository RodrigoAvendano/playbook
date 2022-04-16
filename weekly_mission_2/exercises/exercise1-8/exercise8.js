facebookBio = {
    user : 'Izac Ortis',
    userInfo : 'my info',
    post : 'Post',
    date: '16-Apr-22,',
    getBio : function() {
        return `${this.user} biography, ${this.userInfo}, ${this.post}`
    }

}

console.log(facebookBio.getBio())