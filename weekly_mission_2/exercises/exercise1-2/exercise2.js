issue = {
  title: "Live 3 semana 2",
  repositoryNameAssociated: "Mission Node Js",
  status:'Open',
  numberOfComments:10,
  labels:'LIVE 1',
  author:'Carlo Gilmar',
  dateCreated:'14/04/22',
  lastUpdated:'15/04/22',
  getTitleAndAuthor:function(){
      return `${this.title} was created by ${this.author}`
  },
  getGeneralInfo:function(){return `${this.title} was created by ${this.author} on ${this.dateCreated} and is ${this.status}`} 
};

console.log('Repositorio asociado: '+issue.repositoryNameAssociated)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())