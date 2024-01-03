// Temas

let trilho = document.getElementById('trilho')
let body = document.querySelector('main')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})

//Menu Hambúrguer

const btnMobile = document.getElementById('btnMobile')

function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('ativado')
}

btnMobile.addEventListener('click', toggleMenu)

// Aviso de projeto em andamento

let btnAndamento = document.getElementById('btnAndamento')

btnAndamento.addEventListener('click', ()=> {
    Swal.fire({
        title: "<h2><strong>Atenção</u></strong></h2>",
        icon: "info",
        html: `
          Esse projeto ainda está sendo produzido, mas caso queira você pode acessar o repositório do Github.
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: `
        <a href="https://github.com/taymilagres/Bom-Sabor" style="color:#fff;"><i class="fa fa-thumbs-up"></i> Acessar Github</a>
        `,
      });
    
})
