let url="https://catfact.ninja/fact";
let url1="https://dog.ceo/api/breeds/image/random";
let url2="https://icanhazdadjoke.com/";
let url3="http://universities.hipolabs.com/search?name=india";

let submit=document.querySelector('button');
let input=document.querySelector('input');
submit.addEventListener('click', async()=>{
    let res=await axios.get(url3);
    if(res.data.state-province==input.value){
        listOfColleges(res.data);
    }
    console.log(res.data);
})

function listOfColleges(arr){
    let ul=document.querySelector('#ul');
    ul.innerText="";
    for(li of arr){
        let list=document.createElement('li');
        list.innerText=li.name;
        ul.appendChild(list);
        // if(li.state-province==input.value){
        //     list.innerText=li.name;
        //     ul.appendChild(list);
        // }
    }
}

//axios.get(url, header) In this we have passed request header to api

/*let h3=document.querySelector('h3');
let btn=document.querySelector('button');
btn.addEventListener('click', async()=>{
    //const header = {headers : {Accept : "application/json"}};
    try{
        const header = {headers : {Accept : "application/json"}};
        let res=await axios.get(url2,header);
        h3.innerText=res.data.joke;
    }
    catch(err){
        console.log(err);
    }
})*/



// axios.get() with dog picture api request and to display on screen

/*let btn=document.querySelector('button');
btn.addEventListener('click', async()=>{
    let res=await axios.get(url1);
    let data=res.data.message;
    console.log(data);
    let img=document.querySelector('#img');
    img.setAttribute('src', data);
})*/



//axios library with async function and await keyword

/*async function getFact(){
    return axios.get(url);
}

async function getItOut(){
    try{
        let res=await getFact();
        console.log(res.data.fact);
        res=await getFact();
        console.log(res.data.fact);
    }
    catch(err){
        console.log(err);
    }
}
getItOut();*/


//axios library with then() and catch() Method

/*let res=axios.get(url)
.then((res)=>{
    console.log(res.data.fact);
    return axios.get(url);
})
.then((res)=>{
    console.log(res.data.fact);
})
.catch((err)=>{
    console.log(err);
})*/

