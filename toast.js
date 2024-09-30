let toastBox = document.getElementById('toastbox');
let warningMsg = '<i class="fa-solid fa-circle-exclamation"></i>Coming soon, check after sometime';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    toast.classList.add('invalid');

    setTimeout(()=>{
        toast.remove();
    }, 4000);
}