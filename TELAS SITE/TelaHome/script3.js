let preveiwContainer = document.querySelector('.products-preview-2');
let previewBox = preveiwContainer.querySelectorAll('.preview2');

document.querySelectorAll('.products-container-2 .product2').forEach(product2 =>{
  product2.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview2.getAttribute('data-target');
      if(name == target){
        preview2.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times-2').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});