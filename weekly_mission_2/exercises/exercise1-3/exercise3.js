pullRequest={
    title:'Presentación',
    branchName:'main',
    dateCreated:'15-04-22',
    status:'open',
    repositoryNameAssociated:'Mission Node Js',
    author:'Rodrigo',
    getStatus:function(){
        return `The status is ${this.status}`
    },
    getTitleAndAuthor:function(){
        return `${this.title} was pull requested by ${this.author}`
    }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())