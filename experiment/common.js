(function(){
  'use strict';
  var experimentId='SC-20260930-furniture-04-001';
  var variant=document.body.getAttribute('data-variant');
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
  window.gtag('js',new Date());
  window.gtag('config','G-GM7XGZ6SSD',{content_id:'furniture_04',experiment_id:experimentId,variant:variant});
  window.gtag('event','experiment_view',{content_id:'furniture_04',experiment_id:experimentId,variant:variant});
  var cta=document.querySelector('.cta-button');
  if(cta)cta.addEventListener('click',function(){
    window.gtag('event','cta_click',{content_id:'furniture_04',experiment_id:experimentId,variant:variant,category:'furniture',round:'4',cta_name:'check_furniture_condition'});
  });
}());
