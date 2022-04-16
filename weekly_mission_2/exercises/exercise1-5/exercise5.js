twitterHashtag={
    trendingTopic:'#FunnyCats',
    word:['#cats','#FunnyCats','#Pets'],
    date:'15-04-22',
    number:'10 millions',
    getTrending:function(){
        return `The trending topic of ${this.date} is ${this.trendingTopic} with ${this.number} of tweets`
    }
}
console.log(twitterHashtag.getTrending())