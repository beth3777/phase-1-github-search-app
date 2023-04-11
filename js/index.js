const form =document.getElementById('github-form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const searchValue=form.querySelector('input[name="search"]').value
    fetch ('https://developer.github.com/v3/search/#search-users')
    .then(response=>response.json())
    .then(data=>{console.log(data)})
})
let username=document.querySelector('#username').value
let avatar=document.querySelector('#avatar').value
let profileLink=document.querySelector('#profile-link').value
let userInfo =`
<div>
Username:${username}
</div>
<div>
Avatar:<img src="${avatar}"
alt="Avatar"/>
</div>
<div>
Profile Link:<a href="${profileLink}">${profileLink}</a>
</div>`
result .innerHtml=userInfo
const userReposEndpoint='https://developer.github.com/v3/repos/#list-user-repositories)'
function onUserClick(event){
    const username=event.target.dataset.username
    fetch(userReposEndpoint.replace('[username]',username))
    .then (res=>res.json())
    .then(data=>{
        if(data&&data.length){
            data.forEach(repo=>{
                const repoName=repo.repoName
                console.log(repoName)
            })
        }
    })
    
}