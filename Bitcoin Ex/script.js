window.addEventListener(`load`,()=>{
  getBitcoinPrice()
  
});

function getBitcoinPrice() {
  // 1-  obyekt hosil qilish //
  let xhd=new XMLHttpRequest();

  // 2-  url manzilni kiritish //
  let url="https://blockchain.info/q/24hrprice";

  // 3-  data kelganda bajariladigan funksiya yasash //
  xhd.onload=function(){
    try{
      let data= this.responseText;
      document.querySelector(`#narx`).innerHTML=`${data} (USD)`;
    }catch(e){
      console.log(`ERROR: `, e);
    }
  }

  // 4-  method va manzil //
  xhd.open(`GET`, url);

  // 5-  jo`natish //
  xhd.send();
}