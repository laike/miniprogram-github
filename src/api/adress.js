/**这里是github api的请求地址封装**/
export default {
  authorizations:'authorizations',
  search:{
    users:{
      //搜索用户 get
      q:'search/users?q='
    },
    respositories:{
      //搜索仓库 get
      q:'search/respositories?q=',
      //搜索topic tag
      topic:'search/respositories?q=topic'
    }
  },
  users:{
    //用户的仓库 get
    userRepos:(user,sort='pushed')=>{
      return `users/${user}/repos?sort=${sort}`;
    }
  },
  repos:{
    //仓库详情
    reposDetail:(reposOwner,reposName)=>{
      return `repos/${reposOwner}/${reposName}`
    },
    //仓库fork get
    reposForks:(reposOwner,reposName)=>{
      return `repos/${reposOwner}/${reposName}/forks`
    },
    //仓库star get
    reposStar:(reposOwner,reposName)=>{
      return `repos/${reposOwner}/${reposName}/stargazers`
    },
    //仓库watch get
    reposWatcher:(reposOwner,reposName)=>{
      return `repos/${reposOwner}/${reposName}/subscribers`
    },
  },
  networks:{
    //仓库活动
    networksEvent:(reposOwner,reposName)=>{
      return `networks/${reposOwner}/${reposName}/events`
    }
  }


}
