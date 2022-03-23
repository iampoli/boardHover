const BLOCK = 464;
let wrapper = document.querySelector(".wrapper");

const renderBlock =()=>{
    for(let i=0;i<BLOCK;i++){
        let block = document.createElement('div');
        block.classList.add('square');
        block.addEventListener("mouseover",squareHover);
        block.addEventListener("mouseout",squareUnHover);
        wrapper.appendChild(block);
    }
}


function squareHover(e){
   let color = randomColor();
   e.target.style.backgroundColor=color;
   e.target.style.boxShadow =`0 0 10px ${color}, 0px 0px 120px ${color}`;

}

function squareUnHover(e){
    e.target.style.backgroundColor= "#161614";
    e.target.style.boxShadow=`0px 0px 10px 0px `;
}

const randomColor =()=>{
    let color='#';
    let letters = '0123456789abcdef';
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*letters.length)];
    }
    return color
}
randomColor()

renderBlock();
