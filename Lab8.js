a = document.querySelector(".inp").cloneNode(true);
Add = () => {
    document.querySelector("#field").append(a.cloneNode(true));
};
Save = () => {
    n = document.getElementsByClassName("inp");
    string = "";
    for (let item of n) {
      elem = item.getElementsByTagName("input");
      string += `"${elem[0].value}":"${elem[1].value}",`;
    }
    document.querySelector("#out").innerHTML = `{${string.slice(0, -1)}}`;
};
Up=(here)=>{
    up = here.parentElement.previousElementSibling;
    if(up)
        here.parentElement.after(up);
};
Down=(here)=>{
    down = here.parentElement.nextElementSibling;
    if(down)
        here.parentElement.before(down);
};
X=(here)=>{
    here.parentElement.remove();
};