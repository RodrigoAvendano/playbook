facebookPost = {
    user : 'Isaac Ortíz',
    text : 'My cat',
    image : 'cat.png',
    date: '16-04-22',
    style: 'none',
    tags : 'no one',
    postprivacy : 'public',
    getPost : function() {
        return `${this.user} public ${this.text} ${this.image} with ${this.style} style on ${this.date}\n-${this.postprivacy}`
    }
}

console.log(facebookPost.getPost())
