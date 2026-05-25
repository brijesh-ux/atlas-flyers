(function(){
'use strict';

// ==================== CONFIG ====================
var SHEET_ID = '1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY';
var GIDS = {
  readme: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=15538392',
  settings: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1171524966',
  brandStyles: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=962762883',
  flyerTabs: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=424819375',
  shopByBrand: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1445162861',
  bundles: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=474417584',
  coupons: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1414086002',
  trendingProducts: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1873477847',
  trendingDeals: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=944897374',
  newFeatured: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=277942993',
  topSearched: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1645931725',
  flashSales: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=837564454',
  priceDrop: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=262903610',
  bogo: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1459478364',
  hotDeals: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1235088137',
  under99: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=233862134',
  clearance: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1183687874',
  freeKit: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=802382066',
  freeBattery: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=508008394',
  atlasExclusive: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=98700911',
  countdown: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=43270678',
  dealOfDay: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=836075056',
  staffPicks: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=764019041',
  newArrivals: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=135808860',
  lastChance: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1769613080',
  videoSection: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1630459149',
  shopByTrade: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1407344995',
  promoBanners: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=2007099777',
  faqs: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=807514654',
  sectionOrder: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1373796339'
};
var STORE = window.location.origin;
var STORE_TOKEN = window.BC_STOREFRONT_TOKEN || '';

// ==================== STATE ====================
var SETTINGS = {};
var BRAND_STYLES = {};
var SECTION_DATA = {};
var PRODUCT_CACHE = {};
var BRANDS_DEALS = [];
var FAQS = [];
var FAQS_FALLBACK = [
  {q:'What deals does Atlas Tools & Machinery currently have?', a:'Check our active sections above — Flash Sales, Price Drop, BOGO Deals, Hot Deals, Under $99, Clearance, Free Tool Kit Deals, Free Battery promos, and Atlas Exclusive Deals. All are updated regularly.'},
  {q:'Where are Atlas Tools & Machinery store locations?', a:'Two GTA locations: 871 Islington Avenue, Toronto ON · 111 Creditview Road, Vaughan ON. Most deals are available at both stores and online at atlas-machinery.com.'},
  {q:'Does Atlas offer free shipping?', a:'Yes — free shipping on orders over $149 and under 50 lbs within Canada.'},
  {q:'Can I combine coupon codes?', a:'Only one coupon code can be applied per order. However, manufacturer promotions like free gift with purchase can still apply alongside a coupon code.'},
  {q:'How do I redeem the Veto Pro Pac bonus bag?', a:'1) Buy a qualifying Veto product from Atlas in-store or online. 2) Redeem at vetopropac.com. 3) Veto ships the bonus bag directly to your door.'}
];
var CART = {};
var WISHLIST = JSON.parse(localStorage.getItem('fp_wishlist') || '{}');
var RECENT = JSON.parse(localStorage.getItem('fp_recent') || '[]');
var OPEN_BRAND = null;
var BRAND_FILTER = 'all';
var TAG_CLS = {sale:'fp-t-drop',hot:'fp-t-hot',free:'fp-t-free',new:'fp-t-new',best:'fp-t-best',clearance:'fp-t-clr','99':'fp-t-99',excl:'fp-t-excl',flash:'fp-t-flash'};

// Section -> default deal tag
var SECTION_DEFAULTS = {
  flashSales: {tag:'FLASH SALE', cls:'fp-t-flash'},
  priceDrop: {tag:'PRICE DROP', cls:'fp-t-drop'},
  bogo: {tag:'BUY 1 GET 1', cls:'fp-t-best'},
  hotDeals: {tag:'HOT DEAL', cls:'fp-t-hot'},
  under99: {tag:'UNDER $99', cls:'fp-t-99'},
  clearance: {tag:'CLEARANCE', cls:'fp-t-clr'},
  freeKit: {tag:'🎁 FREE KIT', cls:'fp-t-free'},
  freeBattery: {tag:'🔋 FREE BATTERY', cls:'fp-t-free'},
  atlasExclusive: {tag:'ATLAS EXCLUSIVE', cls:'fp-t-excl'},
  trendingProducts: {tag:'TRENDING', cls:'fp-t-hot'},
  trendingDeals: {tag:'TRENDING', cls:'fp-t-hot'},
  newFeatured: {tag:'FEATURED', cls:'fp-t-new'},
  topSearched: {tag:'TOP PICK', cls:'fp-t-best'},
  newArrivals: {tag:'NEW', cls:'fp-t-new'},
  lastChance: {tag:'LOW STOCK', cls:'fp-t-clr'}
};

// ==================== UTILS ====================
function $(id){return document.getElementById(id);}
function show(id){var e=$(id);if(e)e.classList.remove('fp-hidden');}
function hide(id){var e=$(id);if(e)e.classList.add('fp-hidden');}
function esc(s){if(s==null)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function getSetting(k,def){var v=SETTINGS[k];if(v===undefined||v==='')return def;if(v==='yes')return true;if(v==='no')return false;var n=parseFloat(v);return isNaN(n)?v:n;}
function trueish(v){return v===true||v==='yes'||String(v).toLowerCase()==='true';}
function getBrand(key){if(!key)return null;var k=String(key).toLowerCase().trim();return BRAND_STYLES[k]||null;}

// ==================== CSV PARSER ====================
function parseCSV(text){
  var lines=text.replace(/\r\n/g,'\n').replace(/\r/g,'\n').trim().split('\n');
  // Find header row
  var hi=0;
  for(var i=0;i<Math.min(6,lines.length);i++){
    var lo=lines[i].toLowerCase();
    if(lo.indexOf('brand id')!==-1||lo.indexOf('product id')!==-1||lo.indexOf('setting')!==-1||lo.indexOf('key')!==-1||lo.indexOf('flyer name')!==-1||lo.indexOf('bundle id')!==-1||lo.indexOf('brand name')!==-1||lo.indexOf('trade name')!==-1||lo.indexOf('banner')!==-1||lo.indexOf('end date')!==-1||lo.indexOf('staff name')!==-1||lo.indexOf('arrival date')!==-1||lo.indexOf('units left')!==-1||lo.indexOf('title')!==-1||lo.indexOf('headline')!==-1||lo.indexOf('question')!==-1){hi=i;break;}
  }
  function split(line){
    var f=[],c='',q=false;
    for(var i=0;i<line.length;i++){
      var ch=line[i];
      if(ch==='"'){if(q&&line[i+1]==='"'){c+='"';i++;}else{q=!q;}}
      else if(ch===','&&!q){f.push(c);c='';}
      else c+=ch;
    }
    f.push(c);
    return f.map(function(x){return x.trim();});
  }
  var headers=split(lines[hi]).map(function(h){return h.replace(/^"|"$/g,'').trim();});
  var rows=[];
  for(var i=hi+1;i<lines.length;i++){
    var l=lines[i].trim();if(!l)continue;
    var vals=split(l);
    var allEmpty=true;
    var obj={};
    headers.forEach(function(h,idx){
      var v=(vals[idx]||'').replace(/^"|"$/g,'').trim();
      obj[h]=v;
      if(v)allEmpty=false;
    });
    if(!allEmpty)rows.push(obj);
  }
  return rows;
}
function parseIds(raw){
  if(!raw)return[];
  return String(raw).split(',').map(function(x){return parseInt(x.trim());}).filter(function(n){return!isNaN(n)&&n>0;});
}

// ==================== CACHED FETCH ====================
async function fetchCSV(key,url){
  if(!url)return [];
  // Short cache (5 min) for section order so reorders show up fast.
  // Long cache (1 hour, configurable) for everything else.
  var cacheH=(key==='sectionOrder')?(5/60):getSetting('cache_duration_hours',1);
  if(cacheH>0){
    try{
      var raw=localStorage.getItem('fp_csv_'+key);
      if(raw){
        var c=JSON.parse(raw);
        if(c.t&&Date.now()-c.t<cacheH*3600000)return parseCSV(c.d);
      }
    }catch(e){}
  }
  try{
    var r=await fetch(url);
    if(!r.ok){console.warn('[Atlas] CSV fetch failed',key,r.status);return[];}
    var text=await r.text();
    if(cacheH>0){
      try{localStorage.setItem('fp_csv_'+key,JSON.stringify({t:Date.now(),d:text}));}catch(e){}
    }
    return parseCSV(text);
  }catch(e){console.error('[Atlas] CSV error',key,e.message);return[];}
}

// ==================== BIGCOMMERCE FETCH (batched) ====================
async function fetchProducts(ids){
  if(!ids||!ids.length)return{};
  var unique=[];
  ids.forEach(function(id){if(unique.indexOf(id)===-1&&!PRODUCT_CACHE[id])unique.push(id);});
  if(!unique.length){
    var out={};ids.forEach(function(id){if(PRODUCT_CACHE[id])out[id]=PRODUCT_CACHE[id];});
    return out;
  }
  if(!STORE_TOKEN){
    console.warn('[Atlas] No BC_STOREFRONT_TOKEN set');
    var o={};ids.forEach(function(id){o[id]=null;});return o;
  }
  // Batch in chunks of 50
  var chunks=[];
  for(var i=0;i<unique.length;i+=50)chunks.push(unique.slice(i,i+50));
  for(var c=0;c<chunks.length;c++){
    var chunk=chunks[c];
    var fields=chunk.map(function(id,i){
      return 'p'+i+':product(entityId:'+id+'){name entityId sku prices{price{value}salePrice{value}}defaultImage{url(width:400)}path description}';
    }).join(' ');
    var query='{site{'+fields+'}}';
    try{
      var r=await fetch(STORE+'/graphql',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+STORE_TOKEN},body:JSON.stringify({query:query})});
      var d=await r.json();
      var site=d&&d.data&&d.data.site;
      if(site){
        chunk.forEach(function(id,i){
          var p=site['p'+i];
          if(p)PRODUCT_CACHE[id]=p;
        });
      }
    }catch(e){console.error('[Atlas] GraphQL batch error',e.message);}
  }
  var result={};
  ids.forEach(function(id){result[id]=PRODUCT_CACHE[id]||null;});
  return result;
}

// ==================== PRODUCT CARD ====================
function cleanName(name,sku){
  if(!name)return name;
  if(sku){
    var rx1=new RegExp('^\\w+\\s+'+sku.replace(/[-]/g,'[-]')+'\\s*','i');
    name=name.replace(rx1,'').trim();
    name=name.replace(new RegExp('^'+sku.replace(/[-]/g,'[-]')+'\\s*','i'),'').trim();
  }
  name=name.replace(/^[A-Z]{2,3}-[A-Z0-9-]+\s+/i,'').trim();
  return name;
}
function visitorCount(){
  var min=getSetting('live_visitor_min',5);
  var max=getSetting('live_visitor_max',47);
  return Math.floor(Math.random()*(max-min+1))+min;
}
function richCard(p,m){
  if(!p)return'<div class="fp-rich"><div style="padding:30px 10px;text-align:center;color:#bbb;font-size:11px">Product unavailable</div></div>';
  var pr=p.prices&&p.prices.price?p.prices.price.value:null;
  var sl=p.prices&&p.prices.salePrice?p.prices.salePrice.value:null;
  var os=sl&&sl<pr;
  var sp=os?Math.round((1-sl/pr)*100):0;
  var img=p.defaultImage?p.defaultImage.url:null;
  var bid='fpa-'+p.entityId+'-'+Math.random().toString(36).substr(2,4);
  var cn=cleanName(p.name,p.sku);
  var inWish=WISHLIST[p.entityId];
  var showVisitors=getSetting('show_live_visitor_count',false);
  var showHeart=getSetting('enable_wishlist_heart',true);
  var quickView=getSetting('enable_quick_view',true);
  var b=m.brand||null;
  var brandLabel=m.bl||(b&&b.name)||'';
  var brandBg=m.bbg||(b&&b.accentBg)||'#1a1a1a';
  var brandTc=m.btc||(b&&b.accentText)||'#ffffff';
  var tag=m.tag||'DEAL';
  var tcls=m.tcls||'fp-t-hot';
  return '<div class="fp-rich" data-bk="'+esc((b&&b.key)||'')+'">'+
    (showHeart?'<button class="fp-rich-heart'+(inWish?' active':'')+'" data-pid="'+p.entityId+'" onclick="fpToggleWish(event,'+p.entityId+',this)">♥</button>':'')+
    '<div class="fp-rich-top">'+
      (brandLabel?'<span class="fp-rich-brand" style="background:'+brandBg+';color:'+brandTc+'">'+esc(brandLabel)+'</span>':'<span></span>')+
      '<span class="fp-rich-tag '+tcls+'">'+esc(tag)+'</span>'+
    '</div>'+
    (img?'<div class="fp-rich-img-wrap"'+(quickView?' onclick="fpQuickView('+p.entityId+')"':'')+'><img src="'+img+'" alt="'+esc(p.name)+'" loading="lazy"></div>':'<div class="fp-rich-ph">🔧</div>')+
    '<a class="fp-rich-name" href="'+esc(p.path||'#')+'" onclick="fpTrackRecent('+p.entityId+')">'+esc(cn)+'</a>'+
    '<div class="fp-rich-sku">SKU# '+esc(p.sku||p.entityId)+'</div>'+
    (m.st==='order'?'<div class="fp-rich-stock fp-rich-stock-ord">✓ Available to Order</div>':'<div class="fp-rich-stock">✓ In Stock</div>')+
    (showVisitors?'<div class="fp-rich-visitors">👀 '+visitorCount()+' viewing now</div>':'')+
    '<div class="fp-rich-prices">'+(os?'<div class="fp-rich-sale">$'+sl.toFixed(2)+'</div><div class="fp-rich-off">↓ '+sp+'% Off</div><div class="fp-rich-was">Was $'+pr.toFixed(2)+'</div>':'<div class="fp-rich-reg">'+(pr?'$'+pr.toFixed(2):'See price')+'</div>')+'</div>'+
    (m.code?'<div class="fp-rich-code"><span class="fp-rich-code-lbl">Code:</span><span class="fp-rich-code-val">'+esc(m.code)+'</span></div>':'')+
    '<button class="fp-rich-add" id="'+bid+'" onclick="fpAdd('+p.entityId+','+(os?sl:pr)+',\''+esc((cn||'').replace(/\\/g,'').replace(/\'/g,"&#39;"))+'\',\''+bid+'\')">+ Add to Cart</button>'+
  '</div>';
}

// ==================== SECTION RENDERER ====================
async function renderProductSection(sectionKey,gridId){
  var grid=$(gridId);if(!grid)return;
  var rows=SECTION_DATA[sectionKey]||[];
  if(!rows.length){hide('fp-sec-'+sectionKey);return;}
  // Show skeleton
  if(getSetting('enable_skeleton_screens',true)){
    grid.innerHTML='<div class="fp-skel"></div><div class="fp-skel"></div><div class="fp-skel"></div><div class="fp-skel"></div>';
  }
  var def=SECTION_DEFAULTS[sectionKey]||{tag:'DEAL',cls:'fp-t-hot'};
  var items=rows.map(function(r){
    var ids=parseIds(r['Product ID']||r['productId']||'');
    if(!ids.length)return null;
    var b=getBrand(r['Brand ID']||r['brandKey']||r['brandId']);
    return {
      id:ids[0],
      brand:b,
      bl:r['Custom Brand Name']||'',
      bbg:r['Custom Background Color']||'',
      btc:r['Custom Text Color']||'',
      tag:r['Custom Deal Label']||def.tag,
      tcls:def.cls,
      code:r['Custom Coupon Code']||'',
      st:(r['Stock Status']||'in').toLowerCase(),
      _row:r
    };
  }).filter(Boolean);
  if(!items.length){hide('fp-sec-'+sectionKey);return;}
  var ids=items.map(function(x){return x.id;});
  await fetchProducts(ids);
  var html=items.map(function(m){return richCard(PRODUCT_CACHE[m.id],m);}).join('');
  grid.innerHTML=html;
  show('fp-sec-'+sectionKey);
  applyBrandFilter();
}

// ==================== LAZY LOAD ====================
var lazyObserver=null;
function setupLazyLoad(){
  if(!getSetting('enable_lazy_load_sections',true)||!('IntersectionObserver' in window)){
    // Load everything immediately
    document.querySelectorAll('[data-section]').forEach(function(g){
      renderProductSection(g.dataset.section,g.id);
    });
    return;
  }
  lazyObserver=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        var g=en.target;
        renderProductSection(g.dataset.section,g.id);
        lazyObserver.unobserve(g);
      }
    });
  },{rootMargin:'400px 0px'});
  document.querySelectorAll('[data-section]').forEach(function(g){lazyObserver.observe(g);});
}

// ==================== FLYER TABS ====================
function renderFlyerTabs(){
  var el=$('fp-flyer-tabs');
  var rows=SECTION_DATA.flyerTabs||[];
  if(!rows.length){el.style.display='none';return;}
  el.innerHTML=rows.slice(0,4).map(function(r){
    var t=r['Flyer Name']||r['title']||'';
    var im=r['Flyer Image URL']||r['imageUrl']||'';
    var lk=r['Link When Clicked']||r['linkUrl']||'#';
    return '<a class="fp-flyer-tab" href="'+esc(lk)+'">'+(im?'<img src="'+esc(im)+'" alt="'+esc(t)+'" loading="eager">':'')+'<div class="fp-flyer-tab-title">'+esc(t)+'</div></a>';
  }).join('');
}

// ==================== DEAL OF THE DAY ====================
async function renderDealOfDay(){
  if(!getSetting('show_deal_of_the_day',true)){hide('fp-sec-dod');return;}
  var rows=SECTION_DATA.dealOfDay||[];
  if(!rows.length){hide('fp-sec-dod');return;}
  // Pick one based on day of year for stable daily selection
  var today=new Date();
  var dayOfYear=Math.floor((today-new Date(today.getFullYear(),0,0))/86400000);
  var pick=rows[dayOfYear%rows.length];
  var pid=parseIds(pick['Product ID']||pick['productId']||'')[0];
  if(!pid){hide('fp-sec-dod');return;}
  var b=getBrand(pick['Brand ID']);
  var bg=pick['Background Color']||(b&&b.accentBg)||'#1a1a1a';
  var headline=pick['Headline']||"Today's Steal";
  var sub=pick['Subline']||'';
  var ps=await fetchProducts([pid]);
  var p=ps[pid];if(!p){hide('fp-sec-dod');return;}
  var pr=p.prices&&p.prices.price?p.prices.price.value:null;
  var sl=p.prices&&p.prices.salePrice?p.prices.salePrice.value:null;
  var os=sl&&sl<pr;
  var img=p.defaultImage?p.defaultImage.url:'';
  var el=$('fp-dod');
  el.innerHTML='<a class="fp-dod" href="'+esc(p.path||'#')+'" style="background:'+bg+'" onclick="fpTrackRecent('+pid+')">'+
    '<div class="fp-dod-img">'+(img?'<img src="'+img+'" alt="" loading="eager">':'🔧')+'</div>'+
    '<div class="fp-dod-body">'+
      '<span class="fp-dod-tag">'+esc(headline)+'</span>'+
      '<div class="fp-dod-name">'+esc(cleanName(p.name,p.sku))+'</div>'+
      (sub?'<div class="fp-dod-sub">'+esc(sub)+'</div>':'')+
      '<div class="fp-dod-price">$'+(os?sl.toFixed(2):pr?pr.toFixed(2):'?')+(os?'<span class="fp-dod-was">$'+pr.toFixed(2)+'</span>':'')+'</div>'+
    '</div>'+
  '</a>';
  show('fp-sec-dod');
}

// ==================== COUNTDOWN TIMER ====================
var COUNTDOWN_TIMERS=[];
async function renderCountdown(){
  if(!getSetting('show_countdown_timers',true)){hide('fp-sec-countdown');return;}
  var rows=SECTION_DATA.countdown||[];
  if(!rows.length){hide('fp-sec-countdown');return;}
  var items=rows.map(function(r){
    var pid=parseIds(r['Product ID']||r['productId']||'')[0];
    if(!pid)return null;
    var end=new Date(r['End Date & Time']||r['endDate']||'');
    if(isNaN(end.getTime()))return null;
    return {id:pid,end:end,color:r['Urgency Color']||'#DB2026',brand:getBrand(r['Brand ID']),st:(r['Stock Status']||'in').toLowerCase()};
  }).filter(Boolean);
  if(!items.length){hide('fp-sec-countdown');return;}
  var grid=$('fp-countdown');
  grid.innerHTML=items.map(function(){return'<div class="fp-skel" style="width:220px;height:280px"></div>';}).join('');
  await fetchProducts(items.map(function(x){return x.id;}));
  COUNTDOWN_TIMERS=[];
  grid.innerHTML=items.map(function(it,i){
    var p=PRODUCT_CACHE[it.id];
    if(!p)return'';
    var pr=p.prices&&p.prices.price?p.prices.price.value:null;
    var sl=p.prices&&p.prices.salePrice?p.prices.salePrice.value:null;
    var os=sl&&sl<pr;
    var img=p.defaultImage?p.defaultImage.url:'';
    var bid='cdadd-'+i+'-'+Math.random().toString(36).substr(2,3);
    COUNTDOWN_TIMERS.push({end:it.end,el:'cd-t-'+i,color:it.color});
    return '<div class="fp-cd-card" id="cd-card-'+i+'">'+
      '<div class="fp-cd-timer" id="cd-t-'+i+'" style="background:'+it.color+'">'+
        '<div class="fp-cd-unit"><div class="fp-cd-num" data-u="d">0</div><div class="fp-cd-lbl">Days</div></div>'+
        '<div class="fp-cd-unit"><div class="fp-cd-num" data-u="h">0</div><div class="fp-cd-lbl">Hrs</div></div>'+
        '<div class="fp-cd-unit"><div class="fp-cd-num" data-u="m">0</div><div class="fp-cd-lbl">Min</div></div>'+
        '<div class="fp-cd-unit"><div class="fp-cd-num" data-u="s">0</div><div class="fp-cd-lbl">Sec</div></div>'+
      '</div>'+
      '<div class="fp-cd-img-wrap" onclick="fpQuickView('+it.id+')">'+(img?'<img src="'+img+'" loading="lazy">':'🔧')+'</div>'+
      '<div class="fp-cd-name">'+esc(cleanName(p.name,p.sku))+'</div>'+
      '<div class="fp-cd-prices"><span class="fp-cd-sale">$'+(os?sl.toFixed(2):pr?pr.toFixed(2):'?')+'</span>'+(os?'<span class="fp-cd-was">$'+pr.toFixed(2)+'</span>':'')+'</div>'+
      '<button class="fp-cd-add" id="'+bid+'" onclick="fpAdd('+it.id+','+(os?sl:pr)+',\''+esc((cleanName(p.name,p.sku)||'').replace(/\\/g,'').replace(/\'/g,"&#39;"))+'\',\''+bid+'\')">+ Add to Cart</button>'+
    '</div>';
  }).filter(Boolean).join('');
  show('fp-sec-countdown');
  tickCountdowns();
  setInterval(tickCountdowns,1000);
}
function tickCountdowns(){
  var now=Date.now();
  COUNTDOWN_TIMERS.forEach(function(t){
    var el=$(t.el);if(!el)return;
    var diff=t.end.getTime()-now;
    if(diff<=0){
      el.parentElement.classList.add('fp-cd-expired');
      el.innerHTML='<div style="text-align:center;width:100%;padding:6px;font-size:11px;font-weight:700">DEAL ENDED</div>';
      return;
    }
    var d=Math.floor(diff/86400000),h=Math.floor((diff%86400000)/3600000),m=Math.floor((diff%3600000)/60000),s=Math.floor((diff%60000)/1000);
    var units=el.querySelectorAll('.fp-cd-num');
    if(units.length===4){
      units[0].textContent=d;units[1].textContent=h;units[2].textContent=m;units[3].textContent=s;
    }
  });
}

// ==================== SHOP BY BRAND ====================
function parseShopByBrand(rows){
  var byBrand={};var order=[];
  rows.forEach(function(r){
    var k=(r['Brand ID']||r['brandKey']||r['key']||'').toLowerCase().trim();
    if(!k)return;
    if(!byBrand[k]){byBrand[k]={key:k,deals:[]};order.push(k);}
    byBrand[k].deals.push({
      offer:r['Deal Headline']||r['dealOffer']||'',
      exp:r['Deal Expiry']||r['dealExpiry']||'Ongoing',
      urgent:trueish(r['Urgent']||r['urgent']),
      where:r['Where Available']||r['where']||'Online & in-store',
      type:(r['Deal Type']||r['dealType']||'sale').toLowerCase(),
      ids:parseIds(r['Product IDs']||r['productIds']||'')
    });
  });
  return order.map(function(k){
    var b=byBrand[k];var style=getBrand(k);
    return {key:k,name:style?style.name:k,style:style,deals:b.deals};
  });
}
function renderBrandCards(){
  var grid=$('fp-brands');
  grid.innerHTML=BRANDS_DEALS.map(function(b){
    var dc=b.deals.length;
    var fd=b.deals[0];
    var bg=b.style?b.style.accentBg:'#1a1a1a';
    var tc=b.style?b.style.accentText:'#fff';
    var img=b.style?b.style.brandIconUrl:'';
    var logo=b.style&&b.style.logoUrl?'<img src="'+esc(b.style.logoUrl)+'" alt="'+esc(b.name)+'" style="max-width:100%;max-height:36px;object-fit:contain">':'<span style="font-size:14px;font-weight:800;color:'+tc+'">'+esc(b.name)+'</span>';
    return '<div class="fp-brand-card" data-bk="'+esc(b.key)+'" style="background:'+bg+'" onclick="fpOpenBrandPanel(\''+b.key+'\')">'+
      '<div style="padding:10px;display:flex;align-items:center;justify-content:center;min-height:50px">'+logo+'</div>'+
      '<div style="flex:1;display:flex;align-items:center;justify-content:center;padding:6px">'+(img?'<img src="'+esc(img)+'" alt="" style="width:100%;height:110px;object-fit:contain">':'<div style="font-size:50px">🔧</div>')+'</div>'+
      '<div style="padding:8px;text-align:center;border-top:1px solid rgba(255,255,255,0.15);color:'+tc+'"><div style="font-size:12px;font-weight:700">'+dc+' deal'+(dc>1?'s':'')+'</div>'+(fd&&fd.urgent?'<div style="font-size:10px;opacity:0.85;margin-top:2px">⚠ Ends '+esc(fd.exp)+'</div>':fd?'<div style="font-size:10px;opacity:0.85;margin-top:2px">'+esc(fd.exp)+'</div>':'')+'</div>'+
    '</div>';
  }).join('');
  // Panels
  $('fp-brand-panels').innerHTML=BRANDS_DEALS.map(function(b){
    var bg=b.style?b.style.accentBg:'#1a1a1a';
    var tc=b.style?b.style.accentText:'#fff';
    var logo=b.style&&b.style.logoUrl?'<img src="'+esc(b.style.logoUrl)+'" alt="'+esc(b.name)+'" style="max-width:80px;max-height:28px;object-fit:contain">':'<span style="font-size:13px;font-weight:800;color:'+tc+'">'+esc(b.name)+'</span>';
    return '<div class="fp-brand-panel" id="fpp-'+esc(b.key)+'"><div class="fp-panel-head" onclick="fpCloseBrandPanel(\''+b.key+'\')"><div class="fp-panel-head-left"><div class="fp-panel-logo" style="background:'+bg+'">'+logo+'</div><span class="fp-panel-title">'+esc(b.name)+' Deals</span></div><span class="fp-panel-close">×</span></div><div class="fp-panel-body" id="fppb-'+esc(b.key)+'"></div></div>';
  }).join('');
}
window.fpOpenBrandPanel=async function(key){
  if(OPEN_BRAND&&OPEN_BRAND!==key)fpCloseBrandPanel(OPEN_BRAND);
  if(OPEN_BRAND===key){fpCloseBrandPanel(key);return;}
  OPEN_BRAND=key;
  var panel=$('fpp-'+key);if(!panel)return;
  panel.classList.add('open');
  setTimeout(function(){panel.scrollIntoView({behavior:'smooth',block:'start'});},60);
  var b=BRANDS_DEALS.find(function(x){return x.key===key;});if(!b)return;
  var body=$('fppb-'+key);
  body.innerHTML=b.deals.map(function(d,i){
    var bg=b.style?b.style.accentBg:'#1a1a1a';
    var tc=b.style?b.style.accentText:'#fff';
    return (i>0?'<hr class="fp-deal-divider">':'')+
      '<div class="fp-deal-strip" style="background:'+bg+';color:'+tc+'"><div class="fp-deal-offer">'+esc(d.offer)+'</div><div class="fp-deal-sub">'+esc(d.where)+' · '+(d.urgent?'⚠ Ends '+esc(d.exp):esc(d.exp))+'</div></div>'+
      (d.ids.length?'<div class="fp-rich-grid" id="fpbg-'+key+'-'+i+'"><div class="fp-skel"></div><div class="fp-skel"></div></div>':'<div style="font-size:12px;color:#999;padding:4px 0 10px">Visit the store to shop this deal.</div>');
  }).join('');
  for(var i=0;i<b.deals.length;i++){
    var d=b.deals[i];
    if(!d.ids.length)continue;
    var def=TAG_CLS[d.type]||'fp-t-hot';
    var lbl=({sale:'PRICE DROP',hot:'HOT DEAL',free:'🎁 FREE GIFT',new:'NEW',best:'BEST SELLER'})[d.type]||'DEAL';
    await fetchProducts(d.ids);
    var g=$('fpbg-'+key+'-'+i);if(!g)continue;
    g.innerHTML=d.ids.map(function(id){
      return richCard(PRODUCT_CACHE[id],{brand:b.style,tag:lbl,tcls:def,st:'in'});
    }).join('');
  }
};
window.fpCloseBrandPanel=function(key){
  var panel=$('fpp-'+key);if(panel)panel.classList.remove('open');
  if(OPEN_BRAND===key)OPEN_BRAND=null;
};
window.fpToggleBrandsGrid=function(){
  var grid=$('fp-brands');var btn=$('fp-brands-btn');
  var ex=grid.getAttribute('data-ex')==='1';
  if(!ex){
    grid.setAttribute('data-ex','1');grid.style.flexWrap='wrap';grid.style.overflowX='visible';
    var w=window.innerWidth<600?'calc(50% - 6px)':'180px';
    Array.from(grid.children).forEach(function(c){c.style.width=w;});
    btn.textContent='COLLAPSE';btn.classList.add('expanded');
  }else{
    grid.setAttribute('data-ex','0');grid.style.flexWrap='';grid.style.overflowX='auto';
    Array.from(grid.children).forEach(function(c){c.style.width='200px';});
    btn.textContent='VIEW ALL';btn.classList.remove('expanded');
  }
};

// ==================== HERO (featured urgent brand deal) ====================
function renderHero(){
  var urgent=null;
  for(var i=0;i<BRANDS_DEALS.length&&!urgent;i++){
    var b=BRANDS_DEALS[i];
    for(var j=0;j<b.deals.length;j++){
      if(b.deals[j].urgent){urgent={brand:b,deal:b.deals[j]};break;}
    }
  }
  if(!urgent&&BRANDS_DEALS.length)urgent={brand:BRANDS_DEALS[0],deal:BRANDS_DEALS[0].deals[0]};
  var wrap=$('fp-hero-wrap');if(!urgent||!wrap)return;
  var b=urgent.brand,d=urgent.deal;
  var bg=b.style?b.style.accentBg:'#1a1a1a';
  var tc=b.style?b.style.accentText:'#fff';
  var logo=b.style&&b.style.logoUrl?'<img src="'+esc(b.style.logoUrl)+'" alt="'+esc(b.name)+'" style="height:36px;max-width:140px;object-fit:contain;margin-right:16px">':'';
  wrap.innerHTML='<a class="fp-featured" style="background:'+bg+';border-color:'+bg+'" onclick="fpOpenBrandPanel(\''+b.key+'\');return false;" href="#">'+
    '<div style="display:flex;align-items:center;flex:1;min-width:0">'+logo+
      '<div style="min-width:0">'+
        '<span class="fp-feat-badge" style="background:rgba(0,0,0,0.25);color:'+tc+'">'+(d.urgent?'⚠ Ends '+esc(d.exp)+' — Hurry':'Active Deal')+'</span>'+
        '<div class="fp-feat-title" style="color:'+tc+'">'+esc(d.offer)+'</div>'+
        '<div class="fp-feat-sub" style="color:'+tc+';opacity:0.8">'+esc(d.where)+'</div>'+
      '</div>'+
    '</div>'+
    '<span class="fp-feat-arr" style="color:'+tc+'">→</span>'+
  '</a>';
}

// ==================== BRAND CHIPS ====================
function renderChips(){
  var chips=$('fp-chips');
  // Keep "All" chip
  while(chips.children.length>1)chips.removeChild(chips.lastChild);
  BRANDS_DEALS.forEach(function(b){
    var div=document.createElement('div');
    div.className='fp-chip';
    div.setAttribute('data-bk',b.key);
    div.textContent=b.name||b.key;
    div.onclick=function(){fpFilter(b.key,div);};
    if(b.style){
      div.style.setProperty('--cbg',b.style.accentBg);
      div.style.setProperty('--ctc',b.style.accentText);
    }
    chips.appendChild(div);
  });
}
window.fpFilter=function(bk,el){
  document.querySelectorAll('.fp-chip').forEach(function(c){c.classList.remove('active');c.style.background='';c.style.color='';c.style.borderColor='';});
  el.classList.add('active');
  if(bk!=='all'&&el.style.getPropertyValue('--cbg')){
    el.style.background=el.style.getPropertyValue('--cbg');
    el.style.color=el.style.getPropertyValue('--ctc');
    el.style.borderColor=el.style.getPropertyValue('--cbg');
  }
  BRAND_FILTER=bk;
  if(getSetting('enable_brand_chip_filter',true))applyBrandFilter();
  // Also open brand panel if it's a brand
  if(bk!=='all'){setTimeout(function(){fpOpenBrandPanel(bk);},80);}
};
function applyBrandFilter(){
  if(!getSetting('enable_brand_chip_filter',true))return;
  document.querySelectorAll('.fp-rich').forEach(function(c){
    if(BRAND_FILTER==='all'||c.dataset.bk===BRAND_FILTER){c.style.display='';}
    else c.style.display='none';
  });
}

// ==================== BUNDLES ====================
async function renderBundles(){
  var rows=SECTION_DATA.bundles||[];
  if(!rows.length){hide('fp-sec-bundles');return;}
  var bundles=rows.map(function(r){
    return {
      id:(r['Bundle ID']||r['bundleId']||'').trim()||'b'+Math.random().toString(36).substr(2,5),
      title:r['Bundle Title']||r['title']||'Bundle',
      tag:r['Tag']||r['tag']||'BUNDLE',
      tbg:r['Tag Background']||r['tagBg']||'#0f0f0f',
      ttc:r['Tag Text Color']||r['tagText']||'#fff',
      sub:r['Subtitle']||r['subtitle']||'',
      price:parseFloat(r['Bundle Price']||r['bundlePrice']||r['price']||0),
      ids:parseIds(r['Product IDs in Bundle']||r['productIds']||'')
    };
  }).filter(function(b){return b.ids.length;});
  if(!bundles.length){hide('fp-sec-bundles');return;}
  var allIds=[];bundles.forEach(function(b){b.ids.forEach(function(id){allIds.push(id);});});
  await fetchProducts(allIds);
  var html=bundles.map(function(bundle){
    var prods=bundle.ids.map(function(id){return PRODUCT_CACHE[id];}).filter(Boolean);
    if(!prods.length)return'';
    var was=prods.reduce(function(a,p){return a+(p.prices&&p.prices.price?p.prices.price.value:0);},0);
    var save=was>bundle.price?(was-bundle.price).toFixed(0):'?';
    var ph=prods.map(function(p,pi){
      var pr=p.prices&&p.prices.price?p.prices.price.value:null;
      var img=p.defaultImage?p.defaultImage.url:'';
      return (pi>0?'<span style="font-size:18px;color:#ccc;align-self:center">+</span>':'')+
        '<div class="fp-bundle-prod">'+(img?'<div class="fp-bundle-prod-img"><img src="'+img+'" loading="lazy"></div>':'<div class="fp-bundle-prod-img">🔧</div>')+
        '<div class="fp-bundle-prod-name">'+esc((p.name||'').substring(0,28))+'</div>'+
        (pr?'<div class="fp-bundle-prod-price">$'+pr.toFixed(2)+'</div>':'')+'</div>';
    }).join('');
    return '<div class="fp-bundle"><div class="fp-bundle-head" onclick="fpToggleBundle(\''+bundle.id+'\')"><div><span class="fp-bundle-tag" style="background:'+bundle.tbg+';color:'+bundle.ttc+'">'+esc(bundle.tag)+'</span><div class="fp-bundle-title">'+esc(bundle.title)+'</div><div class="fp-bundle-sub">'+esc(bundle.sub)+'</div></div><div style="text-align:right"><div class="fp-bundle-save">Save $'+save+'</div><div class="fp-bundle-save-lbl">vs buying separate</div></div></div><div class="fp-bundle-body" id="fpbd-'+bundle.id+'"><div class="fp-bundle-prods">'+ph+'</div><div class="fp-bundle-foot"><div>'+(was>0?'<div class="fp-bundle-was">Was $'+was.toFixed(2)+'</div>':'')+'<div class="fp-bundle-price">$'+bundle.price.toFixed(2)+'</div></div><button class="fp-bundle-add" id="fpba-'+bundle.id+'" onclick="fpAddBundle(\''+bundle.id+'\',['+bundle.ids.join(',')+'])">Add Bundle</button></div></div></div>';
  }).join('');
  if(!html.trim()){hide('fp-sec-bundles');return;}
  $('fp-bundles').innerHTML=html;
  show('fp-sec-bundles');
}
window.fpToggleBundle=function(id){var e=$('fpbd-'+id);if(e)e.classList.toggle('open');};
window.fpAddBundle=async function(bid,ids){
  var btn=$('fpba-'+bid);if(btn){btn.disabled=true;btn.textContent='Adding...';}
  for(var i=0;i<ids.length;i++)await addToCartSilent(ids[i]);
  ids.forEach(function(id){
    var p=PRODUCT_CACHE[id];if(!p)return;
    if(!CART[id])CART[id]={name:p.name,price:p.prices&&p.prices.price?p.prices.price.value:0,qty:0};
    CART[id].qty++;
  });
  if(btn){btn.textContent='Added!';btn.classList.add('added');btn.disabled=false;}
  updateCartBar();toast('Bundle added!');
};

// ==================== COUPONS ====================
function renderCoupons(){
  var rows=SECTION_DATA.coupons||[];
  if(!rows.length){hide('fp-sec-coupons');return;}
  $('fp-coupons').innerHTML=rows.map(function(c,i){
    var brand=c['Brand Name']||c['brand']||'';
    var bg=c['Brand Background']||c['brandBg']||'#0f0f0f';
    var tc=c['Brand Text Color']||c['brandText']||'#fff';
    var save=c['Savings Text']||c['save']||c['saveText']||'';
    var desc=c['Description']||c['desc']||'';
    var code=c['Coupon Code']||c['code']||'';
    var exp=c['Expiry Date']||c['expiry']||c['expires']||'';
    if(!brand||!code)return'';
    return '<div class="fp-coupon"><div class="fp-coupon-top"><span class="fp-coupon-brand" style="background:'+bg+';color:'+tc+'">'+esc(brand)+'</span><span class="fp-coupon-save">'+esc(save)+'</span></div><div class="fp-coupon-desc">'+esc(desc)+'</div><div class="fp-coupon-code-row"><span class="fp-coupon-code">'+esc(code)+'</span><button class="fp-coupon-copy-btn" id="fpc-'+i+'" onclick="fpCopyCoupon(\''+esc(code)+'\','+i+')">Copy</button></div><div class="fp-coupon-expiry">'+esc(exp)+'</div></div>';
  }).filter(Boolean).join('');
  show('fp-sec-coupons');
}
window.fpCopyCoupon=function(code,i){
  if(navigator.clipboard)navigator.clipboard.writeText(code);
  var b=$('fpc-'+i);if(b){b.textContent='Copied!';b.classList.add('copied');setTimeout(function(){b.textContent='Copy';b.classList.remove('copied');},2000);}
  toast('"'+code+'" copied!');
};

// ==================== STAFF PICKS ====================
async function renderStaff(){
  if(!getSetting('show_staff_picks',true)){hide('fp-sec-staff');return;}
  var rows=SECTION_DATA.staffPicks||[];
  if(!rows.length){hide('fp-sec-staff');return;}
  var staff=rows.map(function(r){
    return {
      name:r['Staff Name']||'',
      title:r['Staff Title']||'',
      photo:r['Photo URL']||'',
      quote:r['Quote']||'',
      ids:parseIds(r['Product IDs']||'')
    };
  }).filter(function(s){return s.name;});
  if(!staff.length){hide('fp-sec-staff');return;}
  var allIds=[];staff.forEach(function(s){s.ids.forEach(function(id){allIds.push(id);});});
  await fetchProducts(allIds);
  $('fp-staff').innerHTML=staff.map(function(s){
    var prods=s.ids.map(function(id){return{id:id,p:PRODUCT_CACHE[id]};}).filter(function(x){return x.p;});
    return '<div class="fp-staff-card">'+
      '<div class="fp-staff-head">'+
        '<div class="fp-staff-photo">'+(s.photo?'<img src="'+esc(s.photo)+'" alt="'+esc(s.name)+'" loading="lazy">':'👷')+'</div>'+
        '<div><div class="fp-staff-name">'+esc(s.name)+'</div><div class="fp-staff-title">'+esc(s.title)+'</div></div>'+
      '</div>'+
      '<div class="fp-staff-quote">'+esc(s.quote)+'</div>'+
      '<div class="fp-staff-prods">'+prods.map(function(x){
        var img=x.p.defaultImage?x.p.defaultImage.url:'';
        return '<div class="fp-staff-prod" onclick="fpQuickView('+x.id+')">'+(img?'<div class="fp-staff-prod-img"><img src="'+img+'" loading="lazy"></div>':'<div class="fp-staff-prod-img">🔧</div>')+'<div class="fp-staff-prod-name">'+esc((x.p.name||'').substring(0,30))+'</div></div>';
      }).join('')+'</div>'+
    '</div>';
  }).join('');
  show('fp-sec-staff');
}

// ==================== VIDEOS ====================
function ytId(url){var m=url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\s]+)/);return m?m[1]:null;}
function vimeoId(url){var m=url.match(/vimeo\.com\/(\d+)/);return m?m[1]:null;}
function renderVideos(){
  if(!getSetting('show_video_section',true)){hide('fp-sec-videos');return;}
  var rows=SECTION_DATA.videoSection||[];
  if(!rows.length){hide('fp-sec-videos');return;}
  $('fp-videos').innerHTML=rows.map(function(r){
    var title=r['Title']||'';
    var url=r['Video URL']||'';
    var thumb=r['Thumbnail URL']||'';
    var type=(r['Video Type']||'').toLowerCase();
    if(!url||!title)return'';
    if(!thumb){
      if(type==='youtube'||url.indexOf('youtube')!==-1||url.indexOf('youtu.be')!==-1){
        var id=ytId(url);if(id)thumb='https://img.youtube.com/vi/'+id+'/hqdefault.jpg';
      }
    }
    return '<a class="fp-video-card" href="'+esc(url)+'" target="_blank" rel="noopener"><div class="fp-video-thumb">'+(thumb?'<img src="'+esc(thumb)+'" alt="'+esc(title)+'" loading="lazy">':'')+'<div class="fp-video-play">▶</div></div><div class="fp-video-title">'+esc(title)+'</div></a>';
  }).filter(Boolean).join('');
  if($('fp-videos').innerHTML.trim())show('fp-sec-videos');else hide('fp-sec-videos');
}

// ==================== TRADES ====================
async function renderTrades(){
  if(!getSetting('show_shop_by_trade',true)){hide('fp-sec-trades');return;}
  var rows=SECTION_DATA.shopByTrade||[];
  if(!rows.length){hide('fp-sec-trades');return;}
  $('fp-trades').innerHTML=rows.map(function(r,i){
    var name=r['Trade Name']||'';
    var icon=r['Icon Image URL']||'';
    var bg=r['Background Color']||'#1a1a1a';
    var tc=r['Text Color']||'#fff';
    var ids=parseIds(r['Product IDs']||'');
    if(!name)return'';
    return '<button class="fp-trade" style="background:'+bg+';color:'+tc+'" onclick="fpTradeFilter('+i+')">'+(icon?'<img src="'+esc(icon)+'" alt="">':'')+esc(name)+(ids.length?' ('+ids.length+')':'')+'</button>';
  }).filter(Boolean).join('');
  show('fp-sec-trades');
}
window.fpTradeFilter=function(i){
  var rows=SECTION_DATA.shopByTrade||[];
  var r=rows[i];if(!r)return;
  var ids=parseIds(r['Product IDs']||'');
  if(!ids.length){toast('No products listed for this trade yet');return;}
  // Open a quick modal listing matching products
  fpMultiQuickView(ids,r['Trade Name']+' — Recommended');
};

// ==================== PROMO BANNERS ====================
// ==================== SECTION ORDER ====================
// Maps Section IDs (from the Section Order sheet) to actual DOM element IDs.
// FAQs and sticky cart bar are LOCKED at the bottom — not reorderable.
var SECTION_ID_TO_DOM = {
  flyerTabs:'fp-flyer-tabs-wrap',
  dealOfDay:'fp-sec-dod',
  recentlyViewed:'fp-sec-recent',
  countdown:'fp-sec-countdown',
  flashSales:'fp-sec-flashSales',
  priceDrop:'fp-sec-priceDrop',
  bogo:'fp-sec-bogo',
  hotDeals:'fp-sec-hotDeals',
  under99:'fp-sec-under99',
  clearance:'fp-sec-clearance',
  freeKit:'fp-sec-freeKit',
  freeBattery:'fp-sec-freeBattery',
  atlasExclusive:'fp-sec-atlasExclusive',
  lastChance:'fp-sec-lastChance',
  newArrivals:'fp-sec-newArrivals',
  shopByBrand:'fp-sec-shopByBrand-wrap',
  trendingProducts:'fp-sec-trendingProducts',
  trendingDeals:'fp-sec-trendingDeals',
  newFeatured:'fp-sec-newFeatured',
  topSearched:'fp-sec-topSearched',
  bundles:'fp-sec-bundles',
  shopByTrade:'fp-sec-trades',
  staffPicks:'fp-sec-staff',
  videoSection:'fp-sec-videos',
  coupons:'fp-sec-coupons',
  endingSoon:'fp-sec-ending'
};

function applySectionOrder(){
  var rows=SECTION_DATA.sectionOrder||[];
  if(!rows.length){console.log('[Atlas Flyers] No Section Order data — using default DOM order');return;}

  // Parse rows into entries with order
  var entries=rows.map(function(r){
    var id=(r['Section ID']||r['sectionId']||r['section_id']||'').trim();
    var name=(r['Display Name']||r['displayName']||r['name']||'').trim();
    var order=parseFloat(r['Order']||r['order']||0);
    var active=(r['Active']||r['active']||'yes').toString().toLowerCase();
    return {id:id,name:name,order:isNaN(order)?9999:order,active:active!=='no'&&active!=='false'};
  }).filter(function(e){return e.id;});
  entries.sort(function(a,b){return a.order-b.order;});

  // Find the page container and the locked footer sections (FAQs + cart bar)
  var page=document.querySelector('.flyers-page');
  if(!page)return;
  var faqsSection=document.getElementById('fp-sec-faqs');
  var cartBar=document.querySelector('.fp-cart-bar');
  var pad=page.querySelector('.fp-pad');

  // Detach all reorderable sections (everything except FAQs + cart bar + pad)
  var fragment=document.createDocumentFragment();

  // Lookup promo banners by Banner ID
  var bannerRows=SECTION_DATA.promoBanners||[];
  var bannerById={};
  bannerRows.forEach(function(b){
    var bid=(b['Banner ID']||b['bannerId']||b['id']||'').trim();
    if(bid)bannerById[bid.toLowerCase()]=b;
  });

  // First, hide ALL sections (we'll show only those listed in Section Order)
  Object.values(SECTION_ID_TO_DOM).forEach(function(domId){
    var el=document.getElementById(domId);
    if(el)el.classList.add('fp-hidden');
  });
  // Remove any existing promo banner DOM nodes (will recreate from order)
  document.querySelectorAll('.fp-promo-banner').forEach(function(b){b.remove();});

  // Build the new order
  entries.forEach(function(e){
    if(!e.active)return;

    // Banner row: "banner:banner-id"
    if(e.id.toLowerCase().indexOf('banner:')===0){
      var bid=e.id.substring(7).toLowerCase().trim();
      var b=bannerById[bid];
      if(!b)return;
      if(!trueish(b['Active']))return;
      var img=b['Image URL']||b['imageUrl']||'';
      if(!img)return;
      var link=b['Link URL']||b['linkUrl']||'#';
      var alt=b['Alt Text']||b['altText']||b['Banner Name']||e.name||'';
      var a=document.createElement('a');
      a.className='fp-promo-banner';
      a.href=link;
      a.innerHTML='<img src="'+esc(img)+'" alt="'+esc(alt)+'" loading="lazy">';
      fragment.appendChild(a);
      return;
    }

    // Regular section row
    var domId=SECTION_ID_TO_DOM[e.id];
    if(!domId)return;
    var el=document.getElementById(domId);
    if(!el)return;
    el.classList.remove('fp-hidden');
    fragment.appendChild(el);
  });

  // Now place fragment BEFORE the FAQs section (which stays locked at bottom)
  if(faqsSection){
    page.insertBefore(fragment,faqsSection);
  }else if(pad){
    page.insertBefore(fragment,pad);
  }else{
    page.appendChild(fragment);
  }

  console.log('[Atlas Flyers] Section order applied: '+entries.filter(function(e){return e.active;}).length+' active sections');
}

// ==================== RECENTLY VIEWED ====================
window.fpTrackRecent=function(pid){
  if(!getSetting('show_recently_viewed',true))return;
  RECENT=RECENT.filter(function(x){return x!==pid;});
  RECENT.unshift(pid);
  RECENT=RECENT.slice(0,10);
  try{localStorage.setItem('fp_recent',JSON.stringify(RECENT));}catch(e){}
};
async function renderRecent(){
  if(!getSetting('show_recently_viewed',true)||!RECENT.length){hide('fp-sec-recent');return;}
  await fetchProducts(RECENT);
  var html=RECENT.map(function(id){
    var p=PRODUCT_CACHE[id];if(!p)return'';
    var img=p.defaultImage?p.defaultImage.url:'';
    return '<a class="fp-recent" href="'+esc(p.path||'#')+'"><div class="fp-recent-img">'+(img?'<img src="'+img+'" loading="lazy">':'🔧')+'</div><div class="fp-recent-name">'+esc(cleanName(p.name,p.sku))+'</div></a>';
  }).filter(Boolean).join('');
  if(html.trim()){$('fp-recent').innerHTML=html;show('fp-sec-recent');}
}

// ==================== WISHLIST ====================
window.fpToggleWish=function(ev,pid,el){
  ev.preventDefault();ev.stopPropagation();
  if(WISHLIST[pid]){delete WISHLIST[pid];el.classList.remove('active');toast('Removed from wishlist');}
  else{WISHLIST[pid]=Date.now();el.classList.add('active');toast('Added to wishlist');}
  try{localStorage.setItem('fp_wishlist',JSON.stringify(WISHLIST));}catch(e){}
};

// ==================== QUICK VIEW MODAL ====================
window.fpQuickView=async function(pid){
  if(!getSetting('enable_quick_view',true)){return;}
  fpTrackRecent(pid);
  var modal=$('fp-modal');var c=$('fp-modal-content');
  c.innerHTML='<div style="padding:40px;text-align:center;color:#999">Loading...</div>';
  modal.classList.add('open');
  document.body.style.overflow='hidden';
  await fetchProducts([pid]);
  var p=PRODUCT_CACHE[pid];if(!p){c.innerHTML='<p style="padding:20px">Product not available.</p>';return;}
  var pr=p.prices&&p.prices.price?p.prices.price.value:null;
  var sl=p.prices&&p.prices.salePrice?p.prices.salePrice.value:null;
  var os=sl&&sl<pr;
  var img=p.defaultImage?p.defaultImage.url:'';
  var desc=p.description?p.description.replace(/<[^>]+>/g,'').substring(0,300):'';
  c.innerHTML='<div class="fp-modal-img">'+(img?'<img src="'+img+'" alt="'+esc(p.name)+'">':'🔧')+'</div>'+
    '<div class="fp-modal-brand">SKU '+esc(p.sku||p.entityId)+'</div>'+
    '<div class="fp-modal-name">'+esc(cleanName(p.name,p.sku))+'</div>'+
    '<div class="fp-modal-prices"><div class="fp-modal-sale">$'+(os?sl.toFixed(2):pr?pr.toFixed(2):'?')+'</div>'+(os?'<div class="fp-modal-was">$'+pr.toFixed(2)+'</div><div class="fp-modal-off">'+Math.round((1-sl/pr)*100)+'% Off</div>':'')+'</div>'+
    (desc?'<p style="font-size:13px;color:#555;line-height:1.5;margin-bottom:10px">'+esc(desc)+'...</p>':'')+
    '<div class="fp-modal-qty"><button class="fp-modal-qty-btn" onclick="fpQtyChg(-1)">−</button><div class="fp-modal-qty-val" id="fp-qty">1</div><button class="fp-modal-qty-btn" onclick="fpQtyChg(1)">+</button></div>'+
    '<button class="fp-modal-add" id="fp-modal-add" onclick="fpModalAdd('+pid+','+(os?sl:pr)+',\''+esc((cleanName(p.name,p.sku)||'').replace(/\\/g,'').replace(/\'/g,"&#39;"))+'\')">Add to Cart</button>'+
    '<a class="fp-modal-view" href="'+esc(p.path||'#')+'">View full product details →</a>';
};
window.fpCloseModal=function(){$('fp-modal').classList.remove('open');document.body.style.overflow='';};
window.fpQtyChg=function(d){var el=$('fp-qty');var v=parseInt(el.textContent)||1;v=Math.max(1,v+d);el.textContent=v;};
window.fpModalAdd=async function(pid,price,name){
  var btn=$('fp-modal-add');var qty=parseInt($('fp-qty').textContent)||1;
  btn.disabled=true;btn.textContent='Adding...';
  for(var i=0;i<qty;i++)await addToCartSilent(pid);
  if(!CART[pid])CART[pid]={name:name,price:price,qty:0};
  CART[pid].qty+=qty;
  btn.textContent='Added!';btn.classList.add('added');btn.disabled=false;
  updateCartBar();toast(qty+' added to cart');
  setTimeout(fpCloseModal,800);
};
async function fpMultiQuickView(ids,title){
  var modal=$('fp-modal');var c=$('fp-modal-content');
  c.innerHTML='<div style="padding:40px;text-align:center;color:#999">Loading...</div>';
  modal.classList.add('open');document.body.style.overflow='hidden';
  await fetchProducts(ids);
  var items=ids.map(function(id){return PRODUCT_CACHE[id];}).filter(Boolean);
  c.innerHTML='<h3 style="margin-bottom:14px;font-size:18px">'+esc(title)+'</h3>'+items.map(function(p){
    var pr=p.prices&&p.prices.price?p.prices.price.value:null;
    var sl=p.prices&&p.prices.salePrice?p.prices.salePrice.value:null;
    var os=sl&&sl<pr;
    var img=p.defaultImage?p.defaultImage.url:'';
    return '<a href="'+esc(p.path||'#')+'" style="display:flex;gap:10px;padding:8px;border-bottom:1px solid #eee;text-decoration:none;color:inherit">'+
      '<div style="width:60px;height:60px;background:#f7f7f5;border-radius:6px;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0">'+(img?'<img src="'+img+'" style="width:100%;height:100%;object-fit:contain;padding:4px">':'🔧')+'</div>'+
      '<div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:600">'+esc(cleanName(p.name,p.sku).substring(0,60))+'</div><div style="font-size:14px;font-weight:700;margin-top:2px">$'+(os?sl.toFixed(2):pr?pr.toFixed(2):'?')+'</div></div>'+
    '</a>';
  }).join('');
}

// ==================== CART ====================
async function addToCartSilent(id){
  try{
    var r=await fetch('/api/storefront/carts',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({lineItems:[{quantity:1,productId:id}]})});
    if(!r.ok){
      var ex=await fetch('/api/storefront/carts').then(function(x){return x.json();});
      if(ex&&ex.length)await fetch('/api/storefront/carts/'+ex[0].id+'/items',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({lineItems:[{quantity:1,productId:id}]})});
    }
  }catch(e){}
}
window.fpAdd=async function(id,price,name,bid){
  var b=$(bid);if(b){b.disabled=true;b.textContent='Adding...';}
  await addToCartSilent(id);
  if(!CART[id])CART[id]={name:name,price:price,qty:0};
  CART[id].qty++;
  if(b){b.textContent='Added!';b.classList.add('added');b.disabled=false;}
  updateCartBar();toast('Added to cart');
};
function updateCartBar(){
  var c=0,t=0;
  Object.values(CART).forEach(function(i){c+=i.qty;t+=i.price*i.qty;});
  $('fp-cart-count').textContent=c+(c===1?' item':' items');
  $('fp-cart-total').textContent='$'+t.toFixed(2);
  $('fp-checkout').classList.toggle('visible',c>0);
}
function toast(msg){var t=$('fp-toast');t.textContent=msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},2200);}

// ==================== FAQS ====================
function renderFAQs(){
  var list=FAQS.length?FAQS:FAQS_FALLBACK;
  if(!list.length){var w=$('fp-faqs');if(w)w.parentNode.style.display='none';return;}
  $('fp-faqs').innerHTML=list.map(function(f,i){
    return '<div class="fp-faq"><div class="fp-faq-q" onclick="fpFAQ('+i+')">'+esc(f.q)+'<span class="fp-faq-icon" id="fpfi-'+i+'">+</span></div><div class="fp-faq-a" id="fpfa-'+i+'"><div class="fp-faq-inner">'+f.a+'</div></div></div>';
  }).join('');
}
window.fpFAQ=function(i){$('fpfa-'+i).classList.toggle('open');$('fpfi-'+i).classList.toggle('open');};

// ==================== SECTION VIEW ALL TOGGLE ====================
window.fpToggleSection=function(gid,btn){
  var g=$(gid);if(!g)return;
  var ex=g.getAttribute('data-ex')==='1';
  if(!ex){
    g.setAttribute('data-ex','1');g.style.flexWrap='wrap';g.style.overflowX='visible';
    var w=window.innerWidth<600?'calc(50% - 6px)':'200px';
    Array.from(g.children).forEach(function(c){if(c.classList.contains('fp-rich'))c.style.width=w;});
    btn.textContent='COLLAPSE';btn.classList.add('expanded');
  }else{
    g.setAttribute('data-ex','0');g.style.flexWrap='';g.style.overflowX='auto';
    Array.from(g.children).forEach(function(c){if(c.classList.contains('fp-rich'))c.style.width='220px';});
    btn.textContent='VIEW ALL';btn.classList.remove('expanded');
  }
};

// ==================== ENDING SOON ====================
function renderEndingSoon(){
  var urgent=[];
  BRANDS_DEALS.forEach(function(b){b.deals.forEach(function(d){if(d.urgent)urgent.push(b.name+' — '+d.offer+' ends '+d.exp);});});
  var el=$('fp-ending-sub');if(el)el.textContent=urgent.length?urgent.slice(0,3).join(' · '):'Check current deals for expiry dates';
}

// ==================== SAVE SCROLL POSITION ====================
function setupScrollSave(){
  if(!getSetting('enable_save_scroll_position',true))return;
  // Restore
  try{
    var pos=sessionStorage.getItem('fp_scroll');
    if(pos){var n=parseInt(pos);if(!isNaN(n))setTimeout(function(){window.scrollTo(0,n);},800);}
  }catch(e){}
  // Save throttled
  var st=null;
  window.addEventListener('scroll',function(){
    if(st)clearTimeout(st);
    st=setTimeout(function(){try{sessionStorage.setItem('fp_scroll',window.scrollY);}catch(e){}},300);
  });
}

// ==================== CONTAINER FIX ====================
function fixContainer(){
  var el=document.querySelector('.flyers-page');if(!el)return;
  var node=el;
  for(var i=0;i<10;i++){
    node=node.parentElement;if(!node||node.tagName==='BODY')break;
    if(node.classList&&node.classList.contains('container')){
      node.style.setProperty('max-width','100%','important');
      node.style.setProperty('margin-left','0','important');
      node.style.setProperty('margin-right','0','important');
      var pad=window.innerWidth>=768?'30px':'0px';
      node.style.setProperty('padding-left',pad,'important');
      node.style.setProperty('padding-right',pad,'important');
      break;
    }
  }
}

// ==================== INIT ====================
async function init(){
  console.log('[Atlas Flyers] Starting...');
  fixContainer();
  // 1) Fetch settings + brand styles first (needed everywhere)
  var [settingsRows,brandStylesRows]=await Promise.all([
    fetchCSV('settings',GIDS.settings),
    fetchCSV('brandStyles',GIDS.brandStyles)
  ]);
  // Parse settings
  settingsRows.forEach(function(r){
    var k=(r['Setting Name']||r['setting']||r['key']||'').trim();
    var v=(r['Value']||r['value']||'').trim();
    if(k)SETTINGS[k]=v;
  });
  // Parse brand styles
  brandStylesRows.forEach(function(r){
    var k=(r['Brand ID']||r['brandKey']||r['key']||'').toLowerCase().trim();
    if(!k)return;
    BRAND_STYLES[k]={
      key:k,
      name:r['Brand Name']||r['name']||k,
      logoUrl:r['Logo Image URL']||r['logoUrl']||'',
      brandIconUrl:r['Brand Icon URL']||r['imageUrl']||'',
      accentBg:r['Background Color']||r['accentBg']||'#1a1a1a',
      accentText:r['Text Color']||r['accentText']||'#ffffff'
    };
  });
  console.log('[Atlas Flyers] Settings:',Object.keys(SETTINGS).length,'Brand styles:',Object.keys(BRAND_STYLES).length);

  // Apply global colors
  if(SETTINGS.global_accent_color)document.documentElement.style.setProperty('--accent',SETTINGS.global_accent_color);
  if(SETTINGS.global_dark_color)document.documentElement.style.setProperty('--dark',SETTINGS.global_dark_color);

  renderFAQs();
  setupScrollSave();

  // 2) Fetch all other CSVs in parallel
  var keys=['flyerTabs','shopByBrand','bundles','coupons','trendingProducts','trendingDeals','newFeatured','topSearched','flashSales','priceDrop','bogo','hotDeals','under99','clearance','freeKit','freeBattery','atlasExclusive','countdown','dealOfDay','staffPicks','newArrivals','lastChance','videoSection','shopByTrade','promoBanners','faqs','sectionOrder'];
  var promises=keys.map(function(k){return fetchCSV(k,GIDS[k]);});
  var results=await Promise.all(promises);
  keys.forEach(function(k,i){SECTION_DATA[k]=results[i]||[];});
  console.log('[Atlas Flyers] All CSVs loaded');

  // 2.5) Parse FAQs from sheet (overrides hardcoded fallback)
  var faqRows=SECTION_DATA.faqs||[];
  var parsedFaqs=faqRows.map(function(r){
    return {
      q:r['Question']||r['question']||'',
      a:r['Answer']||r['answer']||'',
      order:parseFloat(r['Order']||r['order']||0)||9999,
      active:(r['Active']||r['active']||'yes').toString().toLowerCase()
    };
  }).filter(function(f){return f.q&&f.a&&f.active!=='no'&&f.active!=='false';});
  parsedFaqs.sort(function(a,b){return a.order-b.order;});
  if(parsedFaqs.length){FAQS=parsedFaqs;renderFAQs();}

  // 3) Process Shop by Brand
  BRANDS_DEALS=parseShopByBrand(SECTION_DATA.shopByBrand||[]);

  // 4) Render synchronous bits (no product fetching needed yet)
  renderFlyerTabs();
  renderHero();
  renderChips();
  renderBrandCards();
  renderEndingSoon();
  renderCoupons();
  renderVideos();
  renderTrades();
  applySectionOrder();

  // 5) Render product-heavy sections (above-fold first, lazy rest)
  await Promise.all([
    renderDealOfDay(),
    renderCountdown(),
    renderRecent()
  ]);

  // 6) Lazy-load remaining product grids
  setupLazyLoad();

  // 7) Async: bundles, staff picks (don't block)
  renderBundles();
  renderStaff();

  console.log('[Atlas Flyers] Init complete');
}

// Run
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();

})();
