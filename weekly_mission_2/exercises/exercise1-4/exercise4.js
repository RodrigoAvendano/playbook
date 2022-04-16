twitterUser={
    photo:'seahorse.png',
    user:'Isaac Ortíz',
    username:'@izac_ortis',
    biography:'Hi i am Isaac from Mexico',
    birthday:'25-Mar',
    website:'ioweb.com.mx',
    getUserData:function(){
        return `User:${this.user}\nUserName:${this.username}\nBiography:${this.biography}`
    },
    getBirthday:function(){
        return `Birthday: ${this.birthday}`
    }
}

console.log(twitterUser.getUserData())
console.log(twitterUser.getBirthday())