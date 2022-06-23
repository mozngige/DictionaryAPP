const input = document.getElementById('input')
const search_btn = document.getElementById('search_btn')
const not_found=document.getElementById('not_found')
const apiKey = '48d3b1d2-f6ec-41e4-81c8-ce914ebe2e72'
const audio= document.querySelector('audio')
const theHearts = document.getElementById("liker")

const FULL_HEART = '♥'
const quote= document.querySelector('.quote')



search_btn.addEventListener('click',e=>{ 
    e.preventDefault()

    const word = input.value ;
    if(word===''){
        alert('Please type a word')
        return;
        
    }
    getTheData(word)
})


function getTheData(word){
    fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`)
        .then(res=>res.json())
        .then(res=>{ 
   
            if(!res.length){
                not_found.innerText='no results'
            return;
         }
            
            let definition =res[0].shortdef[0]         
            not_found.innerText=definition

            
 })}


theHearts.addEventListener('click',function likerFunc(e){
    e.preventDefault
    const newLike = document.createElement('li')
    newLike.innerText=FULL_HEART
    theHearts.appendChild(newLike)
    e.reset()

}
    
);
document.addEventListener('DOMContentLoaded',function (){
    fetch("https://type.fit/api/quotes")
    .then( res=> res.json() )
    .then(res=>{
        quote.innerText=res[1].text
        
       

}
        
)}     )
;


    





