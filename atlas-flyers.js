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
  sectionOrder: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1373796339',
  allCoupons: 'https://docs.google.com/spreadsheets/d/1T4QrN-C-eQOq6vfTjRIQFx3Duces5zB-a_jTgMSPIpY/export?format=csv&gid=1364979606'
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
var CART_QTY = {}; // productId -> quantity currently in the live BigCommerce cart (read on load)
var PRODUCT_COUPONS = {}; // productId -> coupon code (from the "All Coupon Codes" tab)
var COUPON_PRODUCT_IDS = []; // ordered, de-duped product IDs that have a coupon
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
  lastChance: {tag:'LOW STOCK', cls:'fp-t-clr'},
  monthlyFlyer: {tag:'COUPON DEAL', cls:'fp-t-hot'},
  dealOfDay: {tag:"TODAY'S STEAL", cls:'fp-t-hot'}
};

// ==================== UTILS ====================
function $(id){return document.getElementById(id);}
function show(id){var e=$(id);if(e)e.classList.remove('fp-hidden');}
function hide(id){var e=$(id);if(e)e.classList.add('fp-hidden');}
function esc(s){if(s==null)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function getSetting(k,def){var v=SETTINGS[k];if(v===undefined||v==='')return def;if(v==='yes')return true;if(v==='no')return false;var n=parseFloat(v);return isNaN(n)?v:n;}
function trueish(v){return v===true||v==='yes'||String(v).toLowerCase()==='true';}
function getBrand(key){if(!key)return null;var k=String(key).toLowerCase().trim();return BRAND_STYLES[k]||null;}

// Holds the sanitized full-HTML description for the currently open quick-view product.
var MODAL_DESC='';
// Sanitize a BigCommerce product description: keep structural/formatting tags
// (headings, paragraphs, lists, bold/italic, breaks), strip everything risky
// (scripts, styles, images, tables, iframes) and all attributes (style/class/on*).
function sanitizeDesc(html){
  if(!html)return '';
  var allowed={P:1,BR:1,H1:1,H2:1,H3:1,H4:1,H5:1,H6:1,UL:1,OL:1,LI:1,STRONG:1,B:1,EM:1,I:1,U:1,SPAN:1,DIV:1};
  var doc;
  try{doc=new DOMParser().parseFromString('<div>'+html+'</div>','text/html');}catch(e){return '';}
  var root=doc.body.firstChild;
  if(!root)return '';
  // Remove dangerous elements entirely
  root.querySelectorAll('script,style,img,table,thead,tbody,tr,td,th,iframe,form,input,button,svg,video,audio,link,meta,font').forEach(function(n){n.remove();});
  // Walk and unwrap disallowed tags; strip all attributes from allowed ones
  (function walk(node){
    var kids=Array.prototype.slice.call(node.children);
    kids.forEach(function(el){
      walk(el);
      if(!allowed[el.tagName]){
        // unwrap: replace element with its children
        var parent=el.parentNode;
        while(el.firstChild)parent.insertBefore(el.firstChild,el);
        parent.removeChild(el);
      }else{
        // strip all attributes
        for(var i=el.attributes.length-1;i>=0;i--)el.removeAttribute(el.attributes[i].name);
      }
    });
  })(root);
  return root.innerHTML.trim();
}

// Extract brand from BC product object. Returns brand style if matched in BRAND_STYLES, else a generic fallback.
function getBrandFromProduct(p){
  if(!p||!p.brand||!p.brand.name)return null;
  // Try matching by path slug (e.g., "/metabo-hpt/" -> "metabohpt" or "metabo-hpt")
  var path=(p.brand.path||'').replace(/^\/|\/$/g,'').toLowerCase();
  var keyNoHyphens=path.replace(/-/g,'');
  if(BRAND_STYLES[keyNoHyphens])return BRAND_STYLES[keyNoHyphens];
  if(BRAND_STYLES[path])return BRAND_STYLES[path];
  // Try matching by brand name (lowercase, no spaces/hyphens)
  var nameKey=p.brand.name.toLowerCase().replace(/[\s\-]+/g,'');
  if(BRAND_STYLES[nameKey])return BRAND_STYLES[nameKey];
  // Fallback: unknown brand, return generic style with the real name
  return {key:'',name:p.brand.name,accentBg:'#ffffff',accentText:'#0f0f0f',logoUrl:'',brandIconUrl:''};
}

// ==================== STOCK / AVAILABILITY ====================
// Single source of truth for whether a product should render on the page.
// Driven entirely by BigCommerce (CSV "Stock Status" column is ignored).
// Show if: in stock OR available to order (Preorder). Hide if: Unavailable,
// out of stock, or product missing/deleted (null).
function isShowable(p){
  // "Should this product appear at all?" — hide only truly dead products:
  // missing object (failed fetch / deleted) or BC status Unavailable. Genuine
  // out-of-stock products now SHOW (greyed, Add to Cart disabled — see isPurchasable).
  if(!p)return false;
  var av=p.availabilityV2&&p.availabilityV2.status;
  if(av==='Unavailable')return false;
  return true;
}
function isPurchasable(p){
  // "Can this be added to cart?" — false when out of stock (and not a preorder).
  if(!p)return false;
  var av=p.availabilityV2&&p.availabilityV2.status;
  if(av==='Preorder')return true;            // orderable
  return (p.inventory?p.inventory.isInStock:true)!==false;
}

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
  // Batch in chunks of 20 (BC GraphQL rejects very large aliased queries with a
  // 400 — large brand lists like BOSCH were silently dropping products).
  var chunks=[];
  for(var i=0;i<unique.length;i+=20)chunks.push(unique.slice(i,i+20));
  for(var c=0;c<chunks.length;c++){
    var chunk=chunks[c];
    var fields=chunk.map(function(id,i){
      return 'p'+i+':product(entityId:'+id+'){name entityId sku brand{name path} prices{price{value}salePrice{value}retailPrice{value}}defaultImage{url(width:400)} images{edges{node{urlOriginal url(width:800) isDefault altText}}} path description inventory{isInStock} availabilityV2{status}}';
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
// Deterministic pseudo-random in [0,1) from a numeric seed. Same seed → same
// value (stable for all visitors), but we fold in a 30-minute time bucket so
// the numbers rotate every half hour. No Math.random() → no per-reload flicker.
function fpSeeded(seed){
  var x=Math.sin(seed)*10000;
  return x-Math.floor(x);
}
function fpBucket(){
  var mins=parseInt(getSetting('live_visitor_window_min',30),10)||30;
  return Math.floor(Date.now()/(mins*60*1000));
}
// Tiered "viewing now" count, correlated with the discount:
//   >30% off  → 200–450 (hot deals look busy)
//   1–30% off → 40–199
//   full price→ 1–90 (and only shown on a subset; see fpVisitorShow)
function visitorCount(p,savePct){
  var id=parseInt(p&&p.entityId,10)||0;
  var seed=id*31+fpBucket();
  var min,max;
  if(savePct>30){ min=200; max=450; }
  else if(savePct>0){ min=40; max=199; }
  else { min=1; max=90; }
  return Math.floor(fpSeeded(seed+13)*(max-min+1))+min;
}
// For full-price products, only show the counter on ~1/3 (rotates each window).
// Discounted products always show it.
function fpVisitorShow(p,savePct){
  if(savePct>0)return true;
  var id=parseInt(p&&p.entityId,10)||0;
  var ratio=parseInt(getSetting('live_visitor_show_ratio',3),10)||3;
  return Math.floor(fpSeeded(id*31+fpBucket()+7)*ratio)===0;
}
function richCard(p,m){
  if(!p)return'<div class="fp-rich"><div style="padding:30px 10px;text-align:center;color:#bbb;font-size:11px">Product unavailable</div></div>';
  var pr=p.prices&&p.prices.price?p.prices.price.value:null;
  var sl=p.prices&&p.prices.salePrice?p.prices.salePrice.value:null;
  var rp=p.prices&&p.prices.retailPrice?p.prices.retailPrice.value:null;
  // Pricing modes:
  //   "sale"   = Sale Price set and lower than Default Price (current=sl, was=pr)
  //   "msrp"   = MSRP/retail set higher than Default Price (current=pr, was=rp)
  //   "normal" = no discount, just show price
  var priceMode='normal',currentPrice=pr,wasPrice=null,savePct=0,saveAmt=0;
  if(sl&&pr&&sl<pr){
    priceMode='sale';currentPrice=sl;wasPrice=pr;
    savePct=Math.round((1-sl/pr)*100);saveAmt=pr-sl;
  }else if(rp&&pr&&rp>pr){
    priceMode='msrp';currentPrice=pr;wasPrice=rp;
    savePct=Math.round((1-pr/rp)*100);saveAmt=rp-pr;
  }
  var hasDiscount=(priceMode!=='normal');
  // Savings ribbon: percent when >=10%, dollar amount (2 decimals) when <10%.
  // Pinned to the bottom-right of the product image (see .fp-rich-ribbon CSS).
  var ribbonHtml='';
  if(hasDiscount&&savePct>0){
    var ribbonLabel=(savePct<10)?('$'+saveAmt.toFixed(2)+' off'):(savePct+'% Off');
    ribbonHtml='<div class="fp-rich-ribbon">'+ribbonLabel+'<span class="fp-rich-ribbon-tail"></span></div>';
  }
  var img=p.defaultImage?p.defaultImage.url:null;
  // Per-product coupon code (from the "All Coupon Codes" tab). Shown as a
  // click-to-copy ticket on the top-right of the image. Blank/unmapped = none.
  var couponCode=PRODUCT_COUPONS[String(p.entityId)]||'';
  var couponHtml=couponCode?'<span class="fp-rich-coupon" data-code="'+esc(couponCode)+'" onclick="fpCopyProductCoupon(event,this)" title="Click to copy"><span class="cc-code">'+esc(couponCode)+'</span><span class="cc-hint">✂</span></span>':'';
  var bid='fpa-'+p.entityId+'-'+Math.random().toString(36).substr(2,4);
  var cn=cleanName(p.name,p.sku);
  var inWish=WISHLIST[p.entityId];
  // Master switch in Settings tab; if off, hide everywhere regardless of section column.
  var globalVisitors=getSetting('show_live_visitor_count',false);
  // Per-section column in Section Order tab.
  var sectionVisitors=m._sectionKey?(SECTION_VISITOR_COUNT[m._sectionKey]!==false):false;
  // Counter shows on all discounted products; on full-price products only a
  // rotating ~1/3 subset (see fpVisitorShow). Counts are tiered by discount and
  // rotate every 30 min (see visitorCount).
  var showVisitors=globalVisitors&&sectionVisitors&&fpVisitorShow(p,savePct);
  var showHeart=getSetting('enable_wishlist_heart',true);
  var quickView=getSetting('enable_quick_view',true);
  // Brand resolution priority:
  //   1) Sheet Brand ID column matched in Brand Styles (m.brand)
  //   2) BC product's own brand matched in Brand Styles
  //   3) BC product's brand with white-bg fallback
  var b=m.brand||getBrandFromProduct(p)||null;
  // For unknown-brand fallback (white bg), add a subtle border so the badge is visible
  var isUnknownBrand=b&&!b.key;
  var brandLabel=m.bl||(b&&b.name)||'';
  var brandBg=m.bbg||(b&&b.accentBg)||'#1a1a1a';
  var brandTc=m.btc||(b&&b.accentText)||'#ffffff';
  var brandBorder=isUnknownBrand?';border:1px solid #ddd':'';
  var tag=m.tag||'DEAL';
  var tcls=m.tcls||'fp-t-hot';
  var heartSvg='<svg viewBox="0 0 24 24" width="22" height="22" style="display:block;fill:currentColor"><path d="M12 21s-7.5-4.7-9.5-9.5C1.1 7.8 3.6 4 7.5 4c2.1 0 3.5 1.2 4.5 2.5C13 5.2 14.4 4 16.5 4 20.4 4 22.9 7.8 21.5 11.5 19.5 16.3 12 21 12 21z"/></svg>';
  var heartHtml='';  // wishlist heart removed from flyer deal tiles (deals page = action, not save-for-later)
  // New tile layout (3 rows under the product name):
  //   Row 1: SKU (left) + stock badge (right)         -> .fp-rich-meta
  //   Row 2: viewing count (left) + savings ribbon (right, overhangs edge) -> .fp-rich-stats
  //   Row 3: coupon ticket, centered                   -> .fp-rich-couponrow
  var viewingHtml=showVisitors?'<span class="fp-rich-viewing">👀 '+visitorCount(p,savePct)+' viewing</span>':'<span></span>';
  var couponRowHtml=couponHtml?'<div class="fp-rich-couponrow">'+couponHtml+'</div>':'';
  // Tag: hidden by default unless m.showTag is true. Custom color via m.customTagColor.
  var tagStyle=m.customTagColor?' style="background:'+m.customTagColor+';color:#fff"':'';
  var tagHtml=m.showTag?'<span class="fp-rich-tag '+tcls+'"'+tagStyle+'>'+esc(tag)+'</span>':'<span></span>';
  // Stock badge driven by BigCommerce availability (CSV "Stock Status" ignored).
  var bcStatus=p.availabilityV2&&p.availabilityV2.status;
  var canBuy=isPurchasable(p);
  var stockHtml=!canBuy
    ? '<div class="fp-rich-stock fp-rich-stock-oos">Out of Stock</div>'
    : ((bcStatus==='Preorder')?'<div class="fp-rich-stock fp-rich-stock-ord">✓ Available to Order</div>':'<div class="fp-rich-stock">✓ In Stock</div>');
  return '<div class="fp-rich" data-bk="'+esc((b&&b.key)||'')+'">'+
    '<div class="fp-rich-top">'+
      (brandLabel?'<span class="fp-rich-brand" style="background:'+brandBg+';color:'+brandTc+brandBorder+'">'+esc(brandLabel)+'</span>':'<span></span>')+
      tagHtml+
    '</div>'+
    (img?'<div class="fp-rich-img-wrap"'+(quickView?' onclick="fpQuickView('+p.entityId+')"':'')+'><img src="'+img+'" alt="'+esc(p.name)+'" loading="lazy"></div>':'<div class="fp-rich-ph">🔧</div>')+
    '<a class="fp-rich-name" href="'+esc(p.path||'#')+'" onclick="fpTrackRecent('+p.entityId+')">'+esc(cn)+'</a>'+
    '<div class="fp-rich-meta"><div class="fp-rich-sku">SKU# '+esc(p.sku||p.entityId)+'</div>'+stockHtml+'</div>'+
    '<div class="fp-rich-stats">'+viewingHtml+ribbonHtml+'</div>'+
    couponRowHtml+
    '<div class="fp-rich-prices">'+(hasDiscount?'<div class="fp-rich-sale">$'+currentPrice.toFixed(2)+'</div><div class="fp-rich-was">$'+wasPrice.toFixed(2)+'</div>':'<div class="fp-rich-reg">'+(pr?'$'+pr.toFixed(2):'See price')+'</div>')+'</div>'+
    (m.code?'<div class="fp-rich-code"><span class="fp-rich-code-lbl">Code:</span><span class="fp-rich-code-val">'+esc(m.code)+'</span></div>':'')+
    (canBuy
      ? '<button class="fp-rich-add'+(inCartLabel(p.entityId)?' added':'')+'" id="'+bid+'" data-pid="'+p.entityId+'" onclick="fpAdd('+p.entityId+','+(hasDiscount?currentPrice:pr)+',\''+esc((cn||'').replace(/\\/g,'').replace(/\'/g,"&#39;"))+'\',\''+bid+'\')">'+(inCartLabel(p.entityId)||'Add to Cart')+'</button>'
      : '<button class="fp-rich-add fp-rich-add-oos" disabled aria-disabled="true">Out of Stock</button>')+
  '</div>';
}

// ==================== SECTION RENDERER ====================
async function renderProductSection(sectionKey,gridId){
  var grid=$(gridId);if(!grid)return;
  // Legacy global toggle for Deal of the Day still works.
  if(sectionKey==='dealOfDay'&&!getSetting('show_deal_of_the_day',true)){hide('fp-sec-dod');return;}
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
    var showTagRaw=(r['Show Tag']||r['showTag']||'').toString().toLowerCase().trim();
    var showTag=(showTagRaw==='yes'||showTagRaw==='true');
    var customTagText=(r['Custom Tag Text']||r['customTagText']||r['Custom Deal Label']||'').trim();
    var customTagColor=(r['Custom Tag Color']||r['customTagColor']||'').trim();
    return {
      id:ids[0],
      brand:b,
      bl:r['Custom Brand Name']||'',
      bbg:r['Custom Background Color']||'',
      btc:r['Custom Text Color']||'',
      tag:customTagText||def.tag,
      tcls:def.cls,
      showTag:showTag,
      customTagColor:customTagColor,
      code:r['Custom Coupon Code']||'',
      st:(r['Stock Status']||'in').toLowerCase(),
      _row:r,
      _sectionKey:sectionKey
    };
  }).filter(Boolean);
  if(!items.length){hide('fp-sec-'+sectionKey);return;}

  var pagingOn=getSetting('enable_section_paging',true);

  // Small sections (or paging off): fetch all, filter, render at once — identical
  // to the original behaviour.
  if(!pagingOn || items.length<=PAGE_SIZE){
    await fetchProducts(items.map(function(x){return x.id;}));
    var visible=items.filter(function(m){return isShowable(PRODUCT_CACHE[m.id]);});
    if(!visible.length){hide('fp-sec-'+sectionKey);return;}
    grid.innerHTML=visible.map(function(m){return richCard(PRODUCT_CACHE[m.id],m);}).join('');
    show('fp-sec-'+sectionKey);
    applyBrandFilter();
    if(typeof setupScrollArrows==='function')setupScrollArrows();
    return;
  }

  // Large sections: fetch only the first page up front (keeps the page fast and
  // avoids the big-batch GraphQL 400s); the shared pager fetches later pages on
  // scroll. Out-of-stock items within a page are skipped, preserving sheet order.
  var firstIds=items.slice(0,PAGE_SIZE).map(function(x){return x.id;});
  await fetchProducts(firstIds);
  var firstHtml=items.slice(0,PAGE_SIZE).map(function(m){
    var p=PRODUCT_CACHE[m.id];return isShowable(p)?richCard(p,m):'';
  }).join('');
  // Nothing in the first page in stock? fall back to hiding only if the whole
  // section has no items at all (later pages may still have stock, so render the
  // sentinel and let the pager pull them in).
  grid.innerHTML=firstHtml+'<span class="fp-pager-sentinel" data-gid="'+gridId+'"></span>';
  registerPager(gridId, items, function(m){
    var p=PRODUCT_CACHE[m.id];
    return isShowable(p)?richCard(p,m):'';
  }, function(m){return m.id;});
  PAGERS[gridId].shown=PAGE_SIZE; // first page already attempted
  show('fp-sec-'+sectionKey);
  applyBrandFilter();
  wirePagerLazyLoad();
  if(typeof setupScrollArrows==='function')setupScrollArrows();
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
  if(!rows.length){var w=$('fp-flyer-tabs-wrap');if(w)w.style.display='none';return;}
  el.innerHTML=rows.map(function(r){
    var t=r['Flyer Name']||r['title']||'';
    var im=r['Flyer Image URL']||r['imageUrl']||'';
    var lk=r['Link When Clicked']||r['linkUrl']||'#';
    // Optional: scroll to a brand strip in Brand Deals instead of following the
    // link. Put the brand's Brand ID (same value as the Shop by Brand Deals
    // sheet) in the "Scroll to Section" column. At click time we look for that
    // brand's strip on the page (.fp-brow[data-bk="..."]). If it's present we
    // scroll to it; if the brand isn't featured that day, we fall back to the
    // normal Link When Clicked URL. Nothing is brand-specific in the code.
    var sc=(r['Scroll to Section']||r['Scroll To Section']||r['scrollTo']||'').trim();
    var dataAttr=sc?' data-scroll-bk="'+esc(sc)+'"':'';
    return '<a class="fp-flyer-tab" href="'+esc(lk)+'"'+dataAttr+'>'+(im?'<img src="'+esc(im)+'" alt="'+esc(t)+'" loading="eager">':'')+'<div class="fp-flyer-tab-title">'+esc(t)+'</div></a>';
  }).join('');
  // Delegated click: if a tab targets a brand and that brand's strip exists on
  // the page, smooth-scroll to it; otherwise let the normal link proceed.
  el.addEventListener('click',function(ev){
    var a=ev.target.closest('.fp-flyer-tab[data-scroll-bk]');
    if(!a)return;
    var bk=a.getAttribute('data-scroll-bk');
    // Resolve the scroll target from the cell value (column E). Try, in order:
    //   1) a brand strip in Brand Deals (.fp-brow[data-bk]) — e.g. "Bosch","Wiha"
    //   2) a section by its Display Name — e.g. "June Flyer Deals"
    //   3) a section by its Section ID — e.g. "monthlyFlyer"
    // If none is on the page, let the tab's normal link run. Case/space-forgiving.
    var key=bk.toLowerCase().replace(/\s+/g,' ').trim();
    var target=document.querySelector('.fp-brow[data-bk="'+key+'"]');
    if(!target && SECTION_NAME_TO_DOM[key]){
      target=document.getElementById(SECTION_NAME_TO_DOM[key]);
    }
    if(!target && SECTION_ID_TO_DOM[bk]){
      target=document.getElementById(SECTION_ID_TO_DOM[bk]);
    }
    if(!target)return; // nothing on page to scroll to -> normal link runs
    ev.preventDefault();
    var strip=target;
    // Offset for the sticky site header so the strip lands just below it.
    // The theme's header is .sticky-header (~110px). Fall back to scanning for
    // the bottom-most top-pinned sticky/fixed bar if that class isn't found.
    var offset=0;
    var hdr=document.querySelector('.sticky-header');
    if(hdr){
      offset=hdr.getBoundingClientRect().bottom;
    }
    if(offset<=0){
      var els=document.querySelectorAll('body *');
      for(var i=0;i<els.length;i++){
        var s=getComputedStyle(els[i]);
        if(s.position==='fixed'||s.position==='sticky'){
          var rect=els[i].getBoundingClientRect();
          if(rect.top<=2 && rect.height>0 && rect.height<200 && rect.width>window.innerWidth*0.5 && rect.bottom>offset){
            offset=rect.bottom;
          }
        }
      }
    }
    var y=window.pageYOffset+strip.getBoundingClientRect().top-offset-8;
    window.scrollTo({top:y<0?0:y,behavior:'smooth'});
  });
  setupFlyerArrows();
}
// Horizontal scroll row + arrow controls. Arrows scroll ~80% of a view and
// auto-hide at each end so users see the row is scrollable.
function setupFlyerArrows(){
  var row=$('fp-flyer-tabs');
  var L=$('fp-flyer-arrow-l'), R=$('fp-flyer-arrow-r');
  if(!row||!L||!R)return;
  function update(){
    var max=row.scrollWidth-row.clientWidth-2;
    var scrollable=row.scrollWidth>row.clientWidth+4;
    L.hidden = !scrollable || row.scrollLeft<=2;
    R.hidden = !scrollable || row.scrollLeft>=max;
  }
  function page(dir){ row.scrollBy({left:dir*Math.round(row.clientWidth*0.8),behavior:'smooth'}); }
  L.onclick=function(){page(-1);};
  R.onclick=function(){page(1);};
  row.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);
  setTimeout(update,60);
  // Re-check once images have loaded (scrollWidth changes as they size in).
  row.querySelectorAll('img').forEach(function(img){
    if(!img.complete)img.addEventListener('load',update,{once:true});
  });
}

// ==================== DEAL OF THE DAY ====================
// Deal of the Day is now a standard product section: it renders through
// renderProductSection (via data-section="dealOfDay") showing ALL products from
// the Deal of the Day tab as tiles, and is positioned via the Section Order tab.
// The old single-product daily-rotation banner has been retired. The legacy
// show_deal_of_the_day setting is still honoured (see renderProductSection).
function renderDealOfDay(){ /* retired — see renderProductSection */ }

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
  // Drop any out-of-stock / unavailable items; hide section if none remain.
  items=items.filter(function(it){return isShowable(PRODUCT_CACHE[it.id]);});
  if(!items.length){hide('fp-sec-countdown');return;}
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
      '<button class="fp-cd-add'+(inCartLabel(it.id)?' added':'')+'" id="'+bid+'" data-pid="'+it.id+'" onclick="fpAdd('+it.id+','+(os?sl:pr)+',\''+esc((cleanName(p.name,p.sku)||'').replace(/\\/g,'').replace(/\'/g,"&#39;"))+'\',\''+bid+'\')">'+(inCartLabel(it.id)||'Add to Cart')+'</button>'+
    '</div>';
  }).filter(Boolean).join('');
  show('fp-sec-countdown');
  tickCountdowns();
  setInterval(tickCountdowns,1000);
  if(typeof setupScrollArrows==='function')setupScrollArrows();
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
    if(!byBrand[k]){
      byBrand[k]={key:k,deals:[],
        // Read per-brand display toggle from the brand's FIRST row. Blank = hide.
        showCount:trueish(r['Show Deal Count']||r['showDealCount']||'')
      };
      order.push(k);
    }
    byBrand[k].deals.push({
      offer:r['Deal Headline']||r['dealOffer']||'',
      exp:(r['Deal Expiry']||r['dealExpiry']||'').trim(), // blank stays blank -> hidden
      urgent:trueish(r['Urgent']||r['urgent']),
      where:r['Where Available']||r['where']||'Online & in-store',
      type:(r['Deal Type']||r['dealType']||'sale').toLowerCase(),
      ids:parseIds(r['Product IDs']||r['productIds']||'')
    });
  });
  return order.map(function(k){
    var b=byBrand[k];var style=getBrand(k);
    return {key:k,name:style?style.name:k,style:style,deals:b.deals,showCount:b.showCount};
  });
}
// Shop by Brand — per brand, render each DEAL as: a headline box on top, then a
// product strip. The brand's FIRST deal leads its strip with a product-sized
// brand tile (logo, brand image, deal count, expiry); later deals start straight
// from products. Each strip reuses the standard .fp-rich cards + VIEW ALL, and
// lazy-loads 30 at a time on scroll. Fully sheet-driven; empty deals/brands hidden.
var BRAND_STRIP_STATE={}; // gid -> {ids:[...], shown:N, brand, loading}
var BRAND_PAGE=30;

// Inject coupon products into their brand's "Shop All" group in Brand Deals.
// Rules: only if the brand has a "Shop All" group AND the product isn't already
// anywhere in Brand Deals (no duplication). Brand is detected from the product's
// BigCommerce data. Products with no matching brand group are left out (they
// still appear in the Monthly Flyer section).
async function injectCouponProductsIntoBrandDeals(){
  if(!COUPON_PRODUCT_IDS.length||!BRANDS_DEALS.length)return;

  // Set of IDs already present anywhere in Brand Deals (for de-dupe).
  var existing={};
  BRANDS_DEALS.forEach(function(b){
    b.deals.forEach(function(d){ (d.ids||[]).forEach(function(id){ existing[String(id)]=1; }); });
  });

  // Candidates = coupon products not already in Brand Deals.
  var candidates=COUPON_PRODUCT_IDS.filter(function(id){return !existing[String(id)];});
  if(!candidates.length)return;

  // Need product details (for brand) — fetch them.
  await fetchProducts(candidates);

  candidates.forEach(function(id){
    var p=PRODUCT_CACHE[id];
    if(!isShowable(p))return;                 // skip OOS / failed
    var brandStyle=getBrandFromProduct(p);
    if(!brandStyle||!brandStyle.key)return;   // unknown / unmatched brand -> Monthly Flyer only
    // Find this brand in Brand Deals.
    var brand=null;
    for(var i=0;i<BRANDS_DEALS.length;i++){ if(BRANDS_DEALS[i].key===brandStyle.key){brand=BRANDS_DEALS[i];break;} }
    if(!brand)return;                         // brand has no Brand Deals group -> Monthly Flyer only
    // Find its "Shop All" group (offer/type containing "shop all").
    var shopAll=null;
    for(var j=0;j<brand.deals.length;j++){
      var label=((brand.deals[j].offer||'')+' '+(brand.deals[j].type||'')).toLowerCase();
      if(label.indexOf('shop all')!==-1){shopAll=brand.deals[j];break;}
    }
    if(!shopAll)return;                       // no "Shop All" group -> Monthly Flyer only
    shopAll.ids.push(id);                     // append (de-dup already guaranteed)
    existing[String(id)]=1;
  });
}

async function renderBrandRows(){
  var host=$('fp-brand-rows');
  if(!host)return;
  if(!BRANDS_DEALS.length){hide('fp-sec-shopByBrand-wrap');return;}

  // Fetch only what we need for the first page of each deal up front (in CSV
  // order), so a brand with hundreds of IDs doesn't fetch everything at once.
  var firstPageIds=[];
  BRANDS_DEALS.forEach(function(b){
    b.deals.forEach(function(d){ firstPageIds=firstPageIds.concat(d.ids.slice(0,BRAND_PAGE)); });
  });
  if(firstPageIds.length)await fetchProducts(firstPageIds);

  var rowsHtml='';
  BRANDS_DEALS.forEach(function(b){
    var bg=b.style?b.style.accentBg:'#1a1a1a';
    var tc=b.style?b.style.accentText:'#fff';

    // Keep deals that have at least one in-stock product in their first page.
    var liveDeals=b.deals.filter(function(d){
      return d.ids.slice(0,BRAND_PAGE).some(function(id){return isShowable(PRODUCT_CACHE[id]);});
    });
    if(!liveDeals.length)return;

    var dc=liveDeals.length;
    var fd=liveDeals[0];
    // Expiry: only when the sheet cell is non-blank. Count: only when Show Deal
    // Count is yes for this brand. Both fully sheet-driven (blank = hide).
    var expRaw=fd&&fd.exp?fd.exp:'';
    var expTxt=expRaw?(fd.urgent?'⚠ Ends '+esc(expRaw):esc(expRaw)):'';
    var countHtml=b.showCount?('<div class="fp-btile-count">'+dc+' deal'+(dc>1?'s':'')+'</div>'):'';
    var expHtml=expTxt?('<div class="fp-btile-exp">'+expTxt+'</div>'):'';
    var metaHtml=(countHtml||expHtml)?('<div class="fp-btile-meta">'+countHtml+expHtml+'</div>'):'';

    var logo=b.style&&b.style.logoUrl
      ? '<img class="fp-brow-logo" src="'+esc(b.style.logoUrl)+'" alt="'+esc(b.name)+'">'
      : '<span class="fp-brow-logotext" style="color:'+tc+'">'+esc(b.name)+'</span>';
    var img=b.style&&b.style.brandIconUrl
      ? '<div class="fp-btile-imgwrap"><img class="fp-btile-img" src="'+esc(b.style.brandIconUrl)+'" alt=""></div>'
      : '';

    // The brand tile (same footprint as a product card) — first cell of deal 1.
    var brandTile='<div class="fp-btile" style="background:'+bg+';color:'+tc+'">'+
        '<div class="fp-btile-logo">'+logo+'</div>'+
        img+
        metaHtml+
      '</div>';

    var groups=liveDeals.map(function(d,i){
      var gid='fpbrow-'+b.key+'-'+i;
      var visIds=d.ids.filter(function(id){
        var p=PRODUCT_CACHE[id];
        return p===undefined || isShowable(p); // keep un-fetched (later pages) + showable
      });
      // Record state for lazy-loading.
      BRAND_STRIP_STATE[gid]={ids:d.ids,shown:0,brand:b.style,loading:false};

      var label=d.offer||d.type||'Deals';
      var lead=(i===0)?brandTile:''; // only first deal gets the brand tile

      return '<div class="fp-brow-deal">'+
          '<div class="fp-brow-dealhead">'+
            '<span class="fp-brow-deallabel" style="background:'+bg+';color:'+tc+'">'+esc(label)+'</span>'+
            '<button class="fp-section-btn" onclick="fpToggleSection(\''+gid+'\',this)">VIEW ALL</button>'+
          '</div>'+
          '<div class="fp-rich-grid" id="'+gid+'" data-lead="'+(lead?'1':'0')+'">'+lead+
            '<span class="fp-brow-sentinel" data-gid="'+gid+'"></span>'+
          '</div>'+
        '</div>';
    }).join('');

    rowsHtml+='<div class="fp-brow" data-bk="'+esc(b.key)+'">'+groups+'</div>';
  });

  if(!rowsHtml.trim()){hide('fp-sec-shopByBrand-wrap');return;}
  host.innerHTML=rowsHtml;
  show('fp-sec-shopByBrand-wrap');

  // Fill each strip's first page, then wire lazy-loading.
  Object.keys(BRAND_STRIP_STATE).forEach(function(gid){ loadBrandPage(gid); });
  wireBrandLazyLoad();
  if(typeof setupScrollArrows==='function')setupScrollArrows();
}

// Append the next page of products (in CSV order) to a strip.
async function loadBrandPage(gid){
  var st=BRAND_STRIP_STATE[gid];
  if(!st||st.loading)return;
  var grid=$(gid);if(!grid)return;
  if(st.shown>=st.ids.length)return;
  st.loading=true;

  var next=st.ids.slice(st.shown, st.shown+pageSize());
  await fetchProducts(next);
  var sentinel=grid.querySelector('.fp-brow-sentinel');
  var html='';
  var rendered=0;
  next.forEach(function(id){
    var p=PRODUCT_CACHE[id];
    if(!isShowable(p))return; // skip OOS / failed, preserve order of the rest
    html+=richCard(p,{brand:st.brand,st:'in',_sectionKey:'shopByBrand',showTag:false});
    rendered++;
  });
  if(sentinel)sentinel.insertAdjacentHTML('beforebegin',html);
  else grid.insertAdjacentHTML('beforeend',html);
  st.shown+=next.length;            // cursor through the ID list (for paging)
  st.rendered=(st.rendered||0)+rendered; // tiles actually displayed (for label)
  st.loading=false;
  if(typeof refreshScrollArrows==='function')refreshScrollArrows(grid);
  updateBrandLoadMore(gid);
}

// Load More button for brand strips (expanded only); collapsed keeps infinite scroll.
function updateBrandLoadMore(gid){
  var grid=$(gid);if(!grid)return;
  var st=BRAND_STRIP_STATE[gid];if(!st)return;
  var host=grid.closest('.fp-brow-deal')||grid.parentNode;
  var btn=host.querySelector('.fp-loadmore[data-gid="'+gid+'"]');
  var expanded=grid.getAttribute('data-ex')==='1';
  var more=st.shown<st.ids.length;
  if(expanded){
    if(!btn){
      btn=document.createElement('button');
      btn.className='fp-loadmore';
      btn.setAttribute('data-gid',gid);
      var anchor=(grid.parentNode&&grid.parentNode.classList.contains('fp-scroll-wrap'))?grid.parentNode:grid;
      anchor.parentNode.insertBefore(btn,anchor.nextSibling);
    }
    if(more){
      btn.textContent='Load More';
      btn.classList.remove('fp-loadmore-less');
      btn.onclick=function(){ loadBrandPage(gid); };
    }else{
      btn.textContent='Show Less';
      btn.classList.add('fp-loadmore-less');
      btn.onclick=function(){ fpCollapseSection(gid); };
    }
    btn.style.display='';
  }else if(btn){
    btn.style.display='none';
  }
}

// IntersectionObserver: when a strip's end sentinel scrolls into view, load more.
function wireBrandLazyLoad(){
  var sentinels=document.querySelectorAll('.fp-brow-sentinel');
  if(!sentinels.length)return;
  if(!('IntersectionObserver' in window)){
    // Fallback: just load everything.
    Object.keys(BRAND_STRIP_STATE).forEach(function(gid){
      var st=BRAND_STRIP_STATE[gid];
      (function pump(){ if(st.shown<st.ids.length){ loadBrandPage(gid).then(pump); } })();
    });
    return;
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting)return;
      var gid=e.target.getAttribute('data-gid');
      var grid=$(gid);
      // Infinite scroll only while collapsed; expanded uses Load More button.
      if(grid&&grid.getAttribute('data-ex')==='1')return;
      loadBrandPage(gid);
    });
  },{root:null,rootMargin:'300px',threshold:0});
  sentinels.forEach(function(s){io.observe(s);});
}

// ==================== SHARED PAGER (lazy "load 30 more on scroll") ====================
// Generic engine used by the standard product sections. Each registered pager
// knows its full item list and a renderItem(item) -> html callback. Renders one
// page (PAGE_SIZE) at a time, appending before an end sentinel; a single shared
// IntersectionObserver loads the next page when the sentinel scrolls into view.
// Page size for lazy-load / Load More. Smaller on mobile (2 tiles/row) so a
// "page" is roughly the same number of rows as desktop (4 tiles/row).
function pageSize(){ return (window.innerWidth<600)?12:24; }
var PAGE_SIZE=pageSize();
var PAGERS={};        // gridId -> {items, shown, renderItem, fetchIds, loading}
var pagerObserver=null;

function registerPager(gridId, items, renderItem, fetchIds){
  PAGERS[gridId]={items:items, shown:0, renderItem:renderItem, fetchIds:fetchIds||null, loading:false};
}

async function loadPagerPage(gridId){
  var st=PAGERS[gridId];
  if(!st||st.loading)return;
  var grid=$(gridId);if(!grid)return;
  if(st.shown>=st.items.length)return;
  st.loading=true;

  var sz=pageSize();
  var next=st.items.slice(st.shown, st.shown+sz);
  if(st.fetchIds){
    var ids=next.map(st.fetchIds).filter(function(x){return x!=null;});
    if(ids.length)await fetchProducts(ids);
  }
  var sentinel=grid.querySelector('.fp-pager-sentinel');
  var html='';
  var rendered=0;
  next.forEach(function(item){
    var card=st.renderItem(item);
    if(card){html+=card;rendered++;}
  });
  if(sentinel)sentinel.insertAdjacentHTML('beforebegin',html);
  else grid.insertAdjacentHTML('beforeend',html);
  st.shown+=next.length;
  st.rendered=(st.rendered||0)+rendered;
  st.loading=false;
  if(typeof refreshScrollArrows==='function')refreshScrollArrows(grid);
  updateLoadMore(gridId);
}

// Load More button: shown only while a section is EXPANDED (VIEW ALL). While
// collapsed, the IntersectionObserver handles infinite horizontal scroll instead.
function updateLoadMore(gridId){
  var grid=$(gridId);if(!grid)return;
  var st=PAGERS[gridId];if(!st)return;
  var sec=grid.closest('.fp-section');
  var host=sec||grid.parentNode;
  var btn=host.querySelector('.fp-loadmore[data-gid="'+gridId+'"]');
  var expanded=grid.getAttribute('data-ex')==='1';
  var more=st.shown<st.items.length;
  // While expanded: "Load More" if there's more to load, otherwise "Show Less"
  // (fully collapse the section back to the strip). While collapsed: hide button.
  if(expanded){
    if(!btn){
      btn=document.createElement('button');
      btn.className='fp-loadmore';
      btn.setAttribute('data-gid',gridId);
      var anchor=(grid.parentNode&&grid.parentNode.classList.contains('fp-scroll-wrap'))?grid.parentNode:grid;
      anchor.parentNode.insertBefore(btn,anchor.nextSibling);
    }
    if(more){
      btn.textContent='Load More';
      btn.classList.remove('fp-loadmore-less');
      btn.onclick=function(){ loadPagerPage(gridId); };
    }else{
      btn.textContent='Show Less';
      btn.classList.add('fp-loadmore-less');
      btn.onclick=function(){ fpCollapseSection(gridId); };
    }
    btn.style.display='';
  }else if(btn){
    btn.style.display='none';
  }
}

// Shared "Show Less" action: fully collapse a section back to its horizontal
// strip (same end state as the header VIEW ALL/COLLAPSE toggle) and scroll it to
// the top so the user isn't stranded at the bottom of a long expanded grid.
// We set state directly and locate the section's OWN header button by matching
// the gid in its onclick (querySelector('.fp-section-btn') can match the wrong
// section's button when several share a container), then sync its label.
function fpCollapseSection(gridId){
  var grid=$(gridId);if(!grid)return;
  // Collapse the grid itself.
  grid.setAttribute('data-ex','0');
  // Find THIS section's header toggle button (its onclick references this gid)
  // and reset it to the collapsed label, instead of trusting DOM proximity.
  var headBtn=null;
  var btns=document.querySelectorAll('.fp-section-btn');
  for(var i=0;i<btns.length;i++){
    var oc=btns[i].getAttribute('onclick')||'';
    if(oc.indexOf("'"+gridId+"'")!==-1){ headBtn=btns[i]; break; }
  }
  if(headBtn){ headBtn.textContent='VIEW ALL'; headBtn.classList.remove('expanded'); }
  // Refresh the horizontal scroll arrows now that it's a strip again.
  if(typeof refreshScrollArrows==='function')refreshScrollArrows(grid);
  // Hide/relabel the Load More / Show Less button for this section.
  if(typeof PAGERS!=='undefined'&&PAGERS[gridId]){ updateLoadMore(gridId); }
  else if(typeof BRAND_STRIP_STATE!=='undefined'&&BRAND_STRIP_STATE[gridId]){ updateBrandLoadMore(gridId); }
  // Scroll the section back into view at its top. Check the narrow brand-strip
  // container (.fp-brow-deal) BEFORE the broad .fp-section — brand strips live
  // inside the single Shop-by-Brand .fp-section wrapper, so closest('.fp-section')
  // would scroll all the way up to the wrapper instead of this specific strip.
  var sec=grid.closest('.fp-brow-deal')||grid.closest('.fp-section');
  if(sec)sec.scrollIntoView({behavior:'smooth',block:'start'});
}

function wirePagerLazyLoad(){
  var sentinels=document.querySelectorAll('.fp-pager-sentinel');
  if(!sentinels.length)return;
  if(!('IntersectionObserver' in window)){
    Object.keys(PAGERS).forEach(function(gid){
      var st=PAGERS[gid];
      (function pump(){ if(st.shown<st.items.length){ loadPagerPage(gid).then(pump); } })();
    });
    return;
  }
  if(!pagerObserver){
    pagerObserver=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting)return;
        var gid=e.target.getAttribute('data-gid');
        var grid=$(gid);
        // Infinite scroll only while collapsed. When expanded (VIEW ALL), the
        // Load More button drives paging instead, so the observer stays quiet.
        if(grid&&grid.getAttribute('data-ex')==='1')return;
        loadPagerPage(gid);
      });
    },{root:null,rootMargin:'400px',threshold:0});
  }
  sentinels.forEach(function(s){pagerObserver.observe(s);});
}
// Kept as a no-op shim: renderHero() still calls fpOpenBrandPanel for the
// featured banner click. With the accordion layout gone, just scroll to the
// Shop by Brand section instead.
window.fpOpenBrandPanel=function(key){
  var sec=$('fp-sec-shopByBrand-wrap');
  if(sec)sec.scrollIntoView({behavior:'smooth',block:'start'});
};

// ==================== HERO (featured urgent brand deal) ====================
function renderHero(){
  var wrap=$('fp-hero-wrap');
  var urgent=null;
  for(var i=0;i<BRANDS_DEALS.length&&!urgent;i++){
    var b=BRANDS_DEALS[i];
    for(var j=0;j<b.deals.length;j++){
      if(b.deals[j].urgent){urgent={brand:b,deal:b.deals[j]};break;}
    }
  }
  // No fallback: if no deal is marked Urgent, hide the banner entirely.
  if(!urgent){ if(wrap)wrap.innerHTML=''; return; }
  if(!wrap)return;
  var b=urgent.brand,d=urgent.deal;
  var bg=b.style?b.style.accentBg:'#1a1a1a';
  var tc=b.style?b.style.accentText:'#fff';
  var logo=b.style&&b.style.logoUrl?'<img src="'+esc(b.style.logoUrl)+'" alt="'+esc(b.name)+'" style="height:36px;max-width:140px;object-fit:contain;margin-right:16px">':'';
  wrap.innerHTML='<a class="fp-featured" style="background:'+bg+';border-color:'+bg+'" onclick="fpOpenBrandPanel(\''+b.key+'\');return false;" href="#">'+
    '<div style="display:flex;align-items:center;flex:1;min-width:0">'+logo+
      '<div style="min-width:0">'+
        '<span class="fp-feat-badge" style="background:rgba(0,0,0,0.25);color:'+tc+'">'+((d.urgent&&d.exp)?'⚠ Ends '+esc(d.exp)+' — Hurry':'Active Deal')+'</span>'+
        '<div class="fp-feat-title" style="color:'+tc+'">'+esc(d.offer)+'</div>'+
        '<div class="fp-feat-sub" style="color:'+tc+';opacity:0.8">'+esc(d.where)+'</div>'+
      '</div>'+
    '</div>'+
    '<span class="fp-feat-arr" style="color:'+tc+'">→</span>'+
  '</a>';
}

// ==================== BRAND CHIPS (REMOVED) ====================
// The top brand-filter chip row has been removed — brand browsing now lives
// only in the "Shop by Brand" section. renderChips() is still called from init
// but now just strips the chip bar from the page if the markup is still present
// in the HTML widget. fpFilter() and applyBrandFilter() are kept as no-ops so
// any leftover references (e.g. renderProductSection, a stray "All" chip) stay
// harmless and never hide product cards.
function renderChips(){
  var wrap=document.querySelector('.fp-chips-wrap');
  if(wrap&&wrap.parentNode)wrap.parentNode.removeChild(wrap);
}
window.fpFilter=function(){ /* brand chip filtering removed */ };
function applyBrandFilter(){ /* brand chip filtering removed */ }

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
    // Hide the whole bundle if ANY component is out of stock / unavailable.
    var allShowable=bundle.ids.every(function(id){return isShowable(PRODUCT_CACHE[id]);});
    if(!allShowable)return'';
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
  var anyFailed=false;
  for(var i=0;i<ids.length;i++){var ok=await addToCartSilent(ids[i]);if(!ok)anyFailed=true;}
  if(anyFailed){
    if(btn){btn.textContent='Add Bundle';btn.disabled=false;}
    toast('Couldn’t add the full bundle — please try again');
    return;
  }
  ids.forEach(function(id){
    var p=PRODUCT_CACHE[id];if(!p)return;
    if(!CART[id])CART[id]={name:p.name,price:p.prices&&p.prices.price?p.prices.price.value:0,qty:0};
    CART[id].qty++;
    CART_QTY[id]=(CART_QTY[id]||0)+1;
    refreshCartButtons(id);
  });
  if(btn){btn.textContent='Added!';btn.classList.add('added');btn.disabled=false;}
  await loadServerCart();
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
  // Build only staff cards that still have at least one in-stock product.
  var cardsHtml=staff.map(function(s){
    var prods=s.ids.map(function(id){return{id:id,p:PRODUCT_CACHE[id]};}).filter(function(x){return isShowable(x.p);});
    if(!prods.length)return'';
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
  if(!cardsHtml.trim()){hide('fp-sec-staff');return;}
  $('fp-staff').innerHTML=cardsHtml;
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
// Populated by applySectionOrder() from "Show Visitor Count" column. Section key -> bool.
var SECTION_VISITOR_COUNT = {};
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
  monthlyFlyer:'fp-sec-monthlyFlyer',
  endingSoon:'fp-sec-ending'
};
// Display Name (lowercased) -> DOM id, populated as sections are placed. Lets
// flyer-tab banners scroll to a section by its Display Name (column E).
var SECTION_NAME_TO_DOM = {};

function applySectionOrder(){
  var rows=SECTION_DATA.sectionOrder||[];
  if(!rows.length){console.log('[Atlas Flyers] No Section Order data — using default DOM order');return;}

  // Parse rows into entries with order
  var entries=rows.map(function(r){
    var id=(r['Section ID']||r['sectionId']||r['section_id']||'').trim();
    var name=(r['Display Name']||r['displayName']||r['name']||'').trim();
    var order=parseFloat(r['Order']||r['order']||0);
    var active=(r['Active']||r['active']||'yes').toString().toLowerCase();
    var svc=(r['Show Visitor Count']||r['showVisitorCount']||r['show_visitor_count']||'').toString().toLowerCase().trim();
    // Default: if blank, treat as no (opt-in)
    SECTION_VISITOR_COUNT[id]=(svc==='yes'||svc==='true');
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
    // Sheet-driven heading: use the Display Name from Section Order when provided.
    // The hardcoded title in the HTML acts as a fallback when the cell is blank.
    if(e.name){
      var titleEl=el.querySelector('.fp-section-title');
      if(titleEl)titleEl.textContent=e.name;
      // Map Display Name -> DOM id so flyer-tab banners can scroll by section name.
      SECTION_NAME_TO_DOM[e.name.toLowerCase().replace(/\s+/g,' ').trim()]=domId;
    }
    // For product-grid sections, don't reveal a section that has no data rows.
    // This stops an empty header (e.g. "Under $99") from showing before lazy
    // render runs. The section is still placed in order; if it has rows,
    // renderProductSection later hides it only if everything is out of stock.
    var pgrid=el.querySelector('[data-section]');
    if(pgrid){
      var sk=pgrid.getAttribute('data-section');
      if(!(SECTION_DATA[sk]&&SECTION_DATA[sk].length)){
        fragment.appendChild(el); // keep position in order, but leave hidden
        return;
      }
    }
    // Same emptiness guard for custom (non-grid) sections that are driven by their
    // own sheet tab — trades, coupons, videos. If the tab has no rows, keep the
    // section hidden so we don't show a lonely header with no content.
    var customDataKey={ 'fp-sec-trades':'shopByTrade', 'fp-sec-coupons':'coupons', 'fp-sec-videos':'videoSection' }[domId];
    if(customDataKey){
      if(!(SECTION_DATA[customDataKey]&&SECTION_DATA[customDataKey].length)){
        fragment.appendChild(el); // keep position, leave hidden
        return;
      }
    }
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
  // Use the same full product card as other sections (price/stock/Add to Cart),
  // no deal tag since these are simply items the visitor has viewed.
  var html=RECENT.map(function(id){
    var p=PRODUCT_CACHE[id];
    if(!isShowable(p))return'';
    return richCard(p,{showTag:false,_sectionKey:'recentlyViewed'});
  }).filter(Boolean).join('');
  if(html.trim()){
    $('fp-recent').innerHTML=html;
    show('fp-sec-recent');
    if(typeof setupScrollArrows==='function')setupScrollArrows();
  }else{hide('fp-sec-recent');}
}

// ==================== WISHLIST ====================
window.fpToggleWish=function(ev,pid,el){
  ev.preventDefault();ev.stopPropagation();
  if(WISHLIST[pid]){delete WISHLIST[pid];el.classList.remove('active');el.dataset.tooltip='Add to Wishlist';toast('Removed from wishlist');}
  else{WISHLIST[pid]=Date.now();el.classList.add('active');el.dataset.tooltip='Remove from Wishlist';toast('Added to wishlist');}
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
  // If the product went out of stock / unavailable, don't show the buy UI.
  if(!isShowable(p)){c.innerHTML='<div style="padding:30px 20px;text-align:center"><div style="font-size:16px;font-weight:700;margin-bottom:6px">'+esc(cleanName(p.name,p.sku))+'</div><p style="font-size:13px;color:#777">This item is no longer available.</p><a class="fp-modal-view" href="'+esc(p.path||'#')+'">View product page →</a></div>';return;}
  var pr=p.prices&&p.prices.price?p.prices.price.value:null;
  var sl=p.prices&&p.prices.salePrice?p.prices.salePrice.value:null;
  var rp=p.prices&&p.prices.retailPrice?p.prices.retailPrice.value:null;
  var qvCurrent=pr,qvWas=null,qvPct=0,qvHasDiscount=false;
  if(sl&&pr&&sl<pr){qvCurrent=sl;qvWas=pr;qvPct=Math.round((1-sl/pr)*100);qvHasDiscount=true;}
  else if(rp&&pr&&rp>pr){qvCurrent=pr;qvWas=rp;qvPct=Math.round((1-pr/rp)*100);qvHasDiscount=true;}
  var img=p.defaultImage?p.defaultImage.url:'';
  // Build images array: default image first, then others
  var allImgs=[];
  if(p.images&&p.images.edges){
    p.images.edges.forEach(function(e){
      if(e.node&&e.node.url)allImgs.push({url:e.node.url,alt:e.node.altText||p.name});
    });
  }
  // Sort: default first
  allImgs.sort(function(a,b){return (b.url===img?1:0)-(a.url===img?1:0);});
  // Fallback: if no images array, use defaultImage
  if(!allImgs.length&&img)allImgs.push({url:img,alt:p.name});
  var descPlain=p.description?p.description.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim():'';
  var descIsLong=descPlain.length>150;
  var descTeaser=descIsLong?descPlain.substring(0,150):descPlain;
  MODAL_DESC=descIsLong?sanitizeDesc(p.description):'';
  // Build carousel HTML
  var galleryHtml='';
  if(allImgs.length>1){
    var slidesHtml=allImgs.map(function(im,idx){return '<div class="fp-modal-slide'+(idx===0?' active':'')+'" data-idx="'+idx+'"><img src="'+esc(im.url)+'" alt="'+esc(im.alt)+'"></div>';}).join('');
    var dotsHtml=allImgs.map(function(im,idx){return '<span class="fp-modal-dot'+(idx===0?' active':'')+'" data-idx="'+idx+'" onclick="fpModalGoto('+idx+')"></span>';}).join('');
    var thumbsHtml=allImgs.map(function(im,idx){return '<div class="fp-modal-thumb'+(idx===0?' active':'')+'" data-idx="'+idx+'" onclick="fpModalGoto('+idx+')"><img src="'+esc(im.url)+'" alt=""></div>';}).join('');
    galleryHtml='<div class="fp-modal-img fp-modal-gallery" id="fp-modal-gallery">'+
      '<div class="fp-modal-slides" id="fp-modal-slides">'+slidesHtml+'</div>'+
      '<button class="fp-modal-arrow fp-modal-arrow-prev" onclick="fpModalPrev()" aria-label="Previous">‹</button>'+
      '<button class="fp-modal-arrow fp-modal-arrow-next" onclick="fpModalNext()" aria-label="Next">›</button>'+
      '<div class="fp-modal-dots">'+dotsHtml+'</div>'+
    '</div>'+
    '<div class="fp-modal-thumbs">'+thumbsHtml+'</div>';
  } else {
    galleryHtml='<div class="fp-modal-img">'+(img?'<img src="'+img+'" alt="'+esc(p.name)+'">':'🔧')+'</div>';
  }
  window._fpModalImgCount=allImgs.length;
  window._fpModalImgIdx=0;
  // Brand resolution for modal — same priority as cards
  var modalBrand=getBrandFromProduct(p)||null;
  var modalBrandLabel=modalBrand?modalBrand.name:'';
  var modalBrandBg=modalBrand?modalBrand.accentBg:'#1a1a1a';
  var modalBrandTc=modalBrand?modalBrand.accentText:'#ffffff';
  var modalBrandBorder=modalBrand&&!modalBrand.key?';border:1px solid #ddd':'';
  c.innerHTML=galleryHtml+
    '<div class="fp-modal-brand-row">'+
      (modalBrandLabel?'<span class="fp-modal-brand-badge" style="background:'+modalBrandBg+';color:'+modalBrandTc+modalBrandBorder+'">'+esc(modalBrandLabel)+'</span>':'')+
      '<span class="fp-modal-sku">SKU# '+esc(p.sku||p.entityId)+'</span>'+
    '</div>'+
    '<div class="fp-modal-name">'+esc(cleanName(p.name,p.sku))+'</div>'+
    '<div class="fp-modal-prices"><div class="fp-modal-sale">$'+(qvCurrent?qvCurrent.toFixed(2):'?')+'</div>'+(qvHasDiscount?'<div class="fp-modal-was">$'+qvWas.toFixed(2)+'</div><div class="fp-modal-off">'+qvPct+'% Off</div>':'')+'</div>'+
    (descPlain?'<div class="fp-modal-desc" id="fp-modal-desc" data-teaser="'+esc(descTeaser)+'" style="font-size:13px;color:#555;line-height:1.5;margin-bottom:10px">'+esc(descTeaser)+(descIsLong?'… <a href="#" class="fp-modal-readmore" onclick="fpToggleDesc(event)">Read more</a>':'')+'</div>':'')+
    '<div class="fp-modal-actions">'+
      (isPurchasable(p)
        ? '<div class="fp-modal-qty"><button class="fp-modal-qty-btn" onclick="fpQtyChg(-1)">−</button><div class="fp-modal-qty-val" id="fp-qty">1</div><button class="fp-modal-qty-btn" onclick="fpQtyChg(1)">+</button></div>'+
          '<button class="fp-modal-add'+(inCartLabel(pid)?' added':'')+'" id="fp-modal-add" onclick="fpModalAdd('+pid+','+qvCurrent+',\''+esc((cleanName(p.name,p.sku)||'').replace(/\\/g,'').replace(/\'/g,"&#39;"))+'\')">'+(inCartLabel(pid)||'Add to Cart')+'</button>'
        : '<button class="fp-modal-add fp-rich-add-oos" disabled aria-disabled="true">Out of Stock</button>')+
    '</div>'+
    '<a class="fp-modal-view" href="'+esc(p.path||'#')+'">View full product details →</a>';
  // Enable finger-swipe on the image gallery (touch devices)
  var gal=document.getElementById('fp-modal-slides');
  if(gal){
    var sx=0,sy=0,swiping=false;
    gal.addEventListener('touchstart',function(e){
      var t=e.changedTouches[0];sx=t.clientX;sy=t.clientY;swiping=true;
    },{passive:true});
    gal.addEventListener('touchend',function(e){
      if(!swiping)return;swiping=false;
      var t=e.changedTouches[0];
      var dx=t.clientX-sx,dy=t.clientY-sy;
      // horizontal swipe only (ignore mostly-vertical scrolls), min 40px
      if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){
        if(dx<0)fpModalNext();else fpModalPrev();
      }
    },{passive:true});
  }
};
window.fpModalGoto=function(idx){
  var slides=document.querySelectorAll('#fp-modal-slides .fp-modal-slide');
  var dots=document.querySelectorAll('#fp-modal-gallery .fp-modal-dot');
  var thumbs=document.querySelectorAll('.fp-modal-thumb');
  if(!slides.length)return;
  idx=((idx%slides.length)+slides.length)%slides.length;
  slides.forEach(function(s,i){s.classList.toggle('active',i===idx);});
  dots.forEach(function(d,i){d.classList.toggle('active',i===idx);});
  thumbs.forEach(function(t,i){t.classList.toggle('active',i===idx);});
  window._fpModalImgIdx=idx;
  var ts=document.querySelector('#fp-modal-slides');if(ts)ts.style.transform='translateX(-'+(idx*100)+'%)';
};
window.fpModalNext=function(){fpModalGoto((window._fpModalImgIdx||0)+1);};
window.fpModalPrev=function(){fpModalGoto((window._fpModalImgIdx||0)-1);};
window.fpToggleDesc=function(ev){
  if(ev){ev.preventDefault();ev.stopPropagation();}
  var el=document.getElementById('fp-modal-desc');if(!el)return;
  var expanded=el.getAttribute('data-expanded')==='1';
  var teaser=el.getAttribute('data-teaser')||'';
  function dec(s){var t=document.createElement('textarea');t.innerHTML=s;return t.value;}
  function escTxt(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  if(expanded){
    el.classList.remove('fp-modal-desc-expanded');
    el.innerHTML=escTxt(dec(teaser))+'… <a href="#" class="fp-modal-readmore" onclick="fpToggleDesc(event)">Read more</a>';
    el.setAttribute('data-expanded','0');
  }else{
    el.classList.add('fp-modal-desc-expanded');
    el.innerHTML=(MODAL_DESC||escTxt(dec(teaser)))+'<a href="#" class="fp-modal-readmore" onclick="fpToggleDesc(event)" style="display:inline-block;margin-top:8px">Show less</a>';
    el.setAttribute('data-expanded','1');
  }
};

window.fpCloseModal=function(){$('fp-modal').classList.remove('open');document.body.style.overflow='';};
window.fpQtyChg=function(d){var el=$('fp-qty');var v=parseInt(el.textContent)||1;v=Math.max(1,v+d);el.textContent=v;};
window.fpModalAdd=async function(pid,price,name){
  var btn=$('fp-modal-add');var qty=parseInt($('fp-qty').textContent)||1;
  btn.disabled=true;btn.textContent='Adding...';
  var anyFailed=false;
  for(var i=0;i<qty;i++){var ok=await addToCartSilent(pid);if(!ok)anyFailed=true;}
  if(anyFailed){
    btn.textContent='Add to Cart';btn.disabled=false;
    toast('Couldn’t add to cart — item may be unavailable');
    return;
  }
  if(!CART[pid])CART[pid]={name:name,price:price,qty:0};
  CART[pid].qty+=qty;
  CART_QTY[pid]=(CART_QTY[pid]||0)+qty;
  refreshCartButtons(pid);
  btn.textContent=inCartLabel(pid)||'Added!';btn.classList.add('added');btn.disabled=false;
  await loadServerCart();
  updateCartBar();toast(qty+' added to cart');
  setTimeout(fpCloseModal,800);
};
async function fpMultiQuickView(ids,title){
  var modal=$('fp-modal');var c=$('fp-modal-content');
  c.innerHTML='<div style="padding:40px;text-align:center;color:#999">Loading...</div>';
  modal.classList.add('open');document.body.style.overflow='hidden';
  await fetchProducts(ids);
  var items=ids.map(function(id){return PRODUCT_CACHE[id];}).filter(isShowable);
  if(!items.length){c.innerHTML='<h3 style="margin-bottom:14px;font-size:18px">'+esc(title)+'</h3><p style="font-size:13px;color:#777;padding:8px">These items are currently sold out.</p>';return;}
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
// Read the live BigCommerce cart (guest or logged-in; cookie/session based) so
// tiles can show "✓ IN CART (x)" persistently across refreshes/visits.
var CART_TOTAL_QTY=0;   // total item count in the real BC cart
var CART_TOTAL_AMT=0;   // grand total ($) of the real BC cart
async function loadServerCart(){
  CART_QTY={};CART_TOTAL_QTY=0;CART_TOTAL_AMT=0;
  try{
    var r=await fetch('/api/storefront/carts',{credentials:'same-origin'});
    if(!r.ok)return;
    var carts=await r.json();
    if(!carts||!carts.length)return;
    var cart=carts[0];
    var li=cart.lineItems||{};
    var all=(li.physicalItems||[]).concat(li.digitalItems||[]);
    all.forEach(function(item){
      var pid=item.productId;
      if(pid==null)return;
      var q=item.quantity||0;
      CART_QTY[pid]=(CART_QTY[pid]||0)+q;
      CART_TOTAL_QTY+=q;
      // sum line totals (extendedSalePrice is the per-line total after discounts)
      CART_TOTAL_AMT+=(item.extendedSalePrice!=null?item.extendedSalePrice:(item.salePrice||item.listPrice||0)*q);
    });
    // prefer the cart's own grand total if present
    if(cart.cartAmount!=null)CART_TOTAL_AMT=cart.cartAmount;
    else if(cart.baseAmount!=null)CART_TOTAL_AMT=cart.baseAmount;
  }catch(e){/* no cart / not available -> leave empty */}
}
// Returns the "in cart" button label for a product, or null if not in cart.
function inCartLabel(id){
  var q=CART_QTY[id];
  return q>0?('✓ IN CART ('+q+')'):null;
}
// Re-apply "in cart" state to every add button for a product (it can appear in
// multiple sections). Call after a successful add.
function refreshCartButtons(id){
  var lbl=inCartLabel(id);
  document.querySelectorAll('.fp-rich-add[data-pid="'+id+'"],.fp-cd-add[data-pid="'+id+'"]').forEach(function(b){
    if(lbl){b.textContent=lbl;b.classList.add('added');}
    else{b.textContent='Add to Cart';b.classList.remove('added');}
  });
}
// Sweep all currently-rendered add buttons and apply in-cart state.
// Resets buttons for items no longer in the cart too (so a removal elsewhere —
// e.g. the theme's cart drawer — reverts the tile to "Add to Cart").
function applyCartStateToButtons(){
  document.querySelectorAll('.fp-rich-add[data-pid],.fp-cd-add[data-pid]').forEach(function(b){
    if(b.disabled)return; // leave out-of-stock buttons alone
    var lbl=inCartLabel(b.getAttribute('data-pid'));
    if(lbl){b.textContent=lbl;b.classList.add('added');}
    else{b.textContent='Add to Cart';b.classList.remove('added');}
  });
}
// Returns true if the item was successfully added, false otherwise.
// Checks for an existing cart FIRST and adds to it; only creates a new cart if
// none exists. (Creating-first caused a 422 "cart already exists" error on every
// add after the first, flooding the console.)
async function addToCartSilent(id){
  try{
    var ex=await fetch('/api/storefront/carts',{credentials:'same-origin'}).then(function(x){return x.ok?x.json():null;}).catch(function(){return null;});
    if(ex&&ex.length){
      // Add to the existing cart
      var r2=await fetch('/api/storefront/carts/'+ex[0].id+'/items',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({lineItems:[{quantity:1,productId:id}]})});
      return r2.ok;
    }
    // No cart yet — create one
    var r=await fetch('/api/storefront/carts',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({lineItems:[{quantity:1,productId:id}]})});
    return r.ok;
  }catch(e){return false;}
}
window.fpAdd=async function(id,price,name,bid){
  var b=$(bid);if(b){b.disabled=true;b.textContent='Adding...';}
  var ok=await addToCartSilent(id);
  if(!ok){
    if(b){b.textContent='Add to Cart';b.disabled=false;}
    toast('Couldn’t add to cart — item may be unavailable');
    return;
  }
  if(!CART[id])CART[id]={name:name,price:price,qty:0};
  CART[id].qty++;
  CART_QTY[id]=(CART_QTY[id]||0)+1;
  if(b)b.disabled=false;
  refreshCartButtons(id);
  await loadServerCart();   // re-read the real cart so the bar shows the true total
  updateCartBar();toast('Added to cart');
};
function updateCartBar(){
  // Use the real BigCommerce cart totals (loaded via loadServerCart), which
  // include items added in this session AND items already in the cart / added
  // elsewhere — not just the session-only CART object.
  var c=CART_TOTAL_QTY,t=CART_TOTAL_AMT;
  $('fp-cart-count').textContent=c+(c===1?' item':' items');
  $('fp-cart-total').textContent='$'+(t||0).toFixed(2);
  $('fp-checkout').classList.toggle('visible',c>0);
}
function toast(msg){var t=$('fp-toast');t.textContent=msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},2200);}
// Copy a product's coupon code to the clipboard with brief "Copied!" feedback.
window.fpCopyProductCoupon=function(e,el){
  e.stopPropagation();           // don't trigger the tile's quick-view
  e.preventDefault();
  var code=el.getAttribute('data-code')||'';
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(code).catch(function(){});
  }
  var codeEl=el.querySelector('.cc-code');
  var hintEl=el.querySelector('.cc-hint');
  if(codeEl&&hintEl){
    var pc=codeEl.textContent, ph=hintEl.textContent;
    el.classList.add('copied');
    codeEl.textContent='✓ Copied!';
    hintEl.textContent='';
    setTimeout(function(){codeEl.textContent=pc;hintEl.textContent=ph;el.classList.remove('copied');},1200);
  }
  toast('Coupon '+code+' copied');
};

// ==================== FAQS ====================
function renderFAQs(){
  var w=$('fp-faqs');
  if(!w)return; // not on the flyer page
  var list=FAQS.length?FAQS:FAQS_FALLBACK;
  if(!list.length){if(w.parentNode)w.parentNode.style.display='none';return;}
  w.innerHTML=list.map(function(f,i){
    return '<div class="fp-faq"><div class="fp-faq-q" onclick="fpFAQ('+i+')">'+esc(f.q)+'<span class="fp-faq-icon" id="fpfi-'+i+'">+</span></div><div class="fp-faq-a" id="fpfa-'+i+'"><div class="fp-faq-inner">'+f.a+'</div></div></div>';
  }).join('');
}
window.fpFAQ=function(i){$('fpfa-'+i).classList.toggle('open');$('fpfi-'+i).classList.toggle('open');};

// ==================== SECTION VIEW ALL TOGGLE ====================
window.fpToggleSection=function(gid,btn){
  // Expand/collapse is driven by CSS off the data-ex attribute
  // (see .fp-rich-grid[data-ex="1"]). No inline widths here — the old code forced
  // every tile to a fixed 200px on desktop, which shrank and left-aligned them on
  // wide screens. CSS now lays out a responsive grid on expand instead.
  var g=$(gid);if(!g)return;
  var ex=g.getAttribute('data-ex')==='1';
  if(!ex){
    g.setAttribute('data-ex','1');
    btn.textContent='COLLAPSE';btn.classList.add('expanded');
  }else{
    g.setAttribute('data-ex','0');
    btn.textContent='VIEW ALL';btn.classList.remove('expanded');
  }
  // Arrows only make sense on a collapsed horizontal strip — refresh this one.
  refreshScrollArrows(g);
  // Show/hide the Load More button for this section (expanded = button mode).
  if(PAGERS[gid]){ if(typeof updateLoadMore==='function')updateLoadMore(gid); }
  else if(typeof BRAND_STRIP_STATE!=='undefined'&&BRAND_STRIP_STATE[gid]){ if(typeof updateBrandLoadMore==='function')updateBrandLoadMore(gid); }
};

// ==================== SHARED SCROLL ARROWS ====================
// Overlays left/right chevrons on every horizontal product strip (.fp-rich-grid),
// reusing the flyer-arrow style. Arrows show only when the strip overflows AND is
// collapsed; they hide when expanded (VIEW ALL) and auto-hide at each end. Runs
// once after render and is idempotent (safe to re-run after lazy-load appends).
function setupScrollArrows(){
  if(!getSetting('enable_scroll_arrows',true))return;
  document.querySelectorAll('.fp-rich-grid, .fp-countdown-grid').forEach(function(grid){
    if(grid.parentNode&&grid.parentNode.classList.contains('fp-scroll-wrap'))return; // already wrapped
    var wrap=document.createElement('div');
    wrap.className='fp-scroll-wrap';
    grid.parentNode.insertBefore(wrap,grid);
    wrap.appendChild(grid);
    var L=document.createElement('button');
    L.className='fp-scroll-arrow fp-scroll-arrow-l';L.setAttribute('aria-label','Scroll left');L.innerHTML='‹';L.hidden=true;
    var R=document.createElement('button');
    R.className='fp-scroll-arrow fp-scroll-arrow-r';R.setAttribute('aria-label','Scroll right');R.innerHTML='›';R.hidden=true;
    wrap.appendChild(L);wrap.appendChild(R);
    L.onclick=function(){grid.scrollBy({left:-Math.round(grid.clientWidth*0.8),behavior:'smooth'});};
    R.onclick=function(){grid.scrollBy({left:Math.round(grid.clientWidth*0.8),behavior:'smooth'});};
    grid.addEventListener('scroll',function(){refreshScrollArrows(grid);},{passive:true});
    grid.querySelectorAll('img').forEach(function(img){
      if(!img.complete)img.addEventListener('load',function(){refreshScrollArrows(grid);},{once:true});
    });
    refreshScrollArrows(grid);
  });
  window.addEventListener('resize',function(){
    document.querySelectorAll('.fp-rich-grid, .fp-countdown-grid').forEach(refreshScrollArrows);
  });
}

function refreshScrollArrows(grid){
  if(!grid)return;
  var wrap=grid.parentNode;
  if(!wrap||!wrap.classList.contains('fp-scroll-wrap'))return;
  var L=wrap.querySelector('.fp-scroll-arrow-l'), R=wrap.querySelector('.fp-scroll-arrow-r');
  if(!L||!R)return;
  var expanded=grid.getAttribute('data-ex')==='1';
  var overflow=grid.scrollWidth>grid.clientWidth+4;
  if(expanded||!overflow){ L.hidden=true; R.hidden=true; return; }
  var max=grid.scrollWidth-grid.clientWidth-2;
  L.hidden = grid.scrollLeft<=2;
  R.hidden = grid.scrollLeft>=max;
}

// ==================== ENDING SOON ====================
function renderEndingSoon(){
  var urgent=[];
  BRANDS_DEALS.forEach(function(b){b.deals.forEach(function(d){if(d.urgent)urgent.push(b.name+' — '+d.offer+(d.exp?' ends '+d.exp:''));});});
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
  // The flyer script is loaded site-wide via Script Manager, but the flyer
  // markup only exists on the flyer page. Bail early everywhere else so we
  // don't fetch CSVs or run renderers against elements that aren't present
  // (which throws "Cannot set properties of null" on category/product/etc.).
  if(!document.querySelector('.flyers-page')){return;}
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

  // 2) Fetch all other CSVs in parallel (plus the live cart, so tiles can show "in cart")
  var keys=['flyerTabs','shopByBrand','bundles','coupons','trendingProducts','trendingDeals','newFeatured','topSearched','flashSales','priceDrop','bogo','hotDeals','under99','clearance','freeKit','freeBattery','atlasExclusive','countdown','dealOfDay','staffPicks','newArrivals','lastChance','videoSection','shopByTrade','promoBanners','faqs','sectionOrder','allCoupons'];
  var promises=keys.map(function(k){return fetchCSV(k,GIDS[k]);});
  var results=await Promise.all(promises.concat([loadServerCart()]));
  keys.forEach(function(k,i){SECTION_DATA[k]=results[i]||[];});
  console.log('[Atlas Flyers] All CSVs loaded');

  // 2.1) Build the per-product coupon lookup from the "All Coupon Codes" tab.
  // Columns: "Big Commerce Product ID" + "Coupon Code". The ID cell may contain
  // a SINGLE id or a COMMA-SEPARATED LIST of ids (like the brand tabs) — every
  // id in the list gets mapped to that row's code. Blank ids are ignored.
  PRODUCT_COUPONS={};
  var couponIdOrder=[];           // preserves sheet order, de-duped
  var seenCoupon={};
  (SECTION_DATA.allCoupons||[]).forEach(function(r){
    var idCell=(r['Big Commerce Product ID']||r['BigCommerce Product ID']||r['Product ID']||'').toString();
    var code=(r['Coupon Code']||'').toString().trim();
    if(!code)return;
    idCell.split(',').forEach(function(pid){
      pid=pid.trim();
      if(!pid)return;
      PRODUCT_COUPONS[pid]=code;
      if(!seenCoupon[pid]){seenCoupon[pid]=1;couponIdOrder.push(pid);}
    });
  });
  COUPON_PRODUCT_IDS=couponIdOrder;
  // Synthetic rows so the Monthly Flyer section renders through the generic
  // section renderer (paging, scroll, View All) exactly like other sections.
  SECTION_DATA.monthlyFlyer=couponIdOrder.map(function(id){return {'Product ID':id};});

  // (Brand injection runs later, after BRANDS_DEALS is parsed — see below.)

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
  // Inject coupon products into matching brand "Shop All" groups (no dup) before render.
  await injectCouponProductsIntoBrandDeals();

  // 4) Render synchronous bits (no product fetching needed yet)
  renderFlyerTabs();
  renderHero();
  renderChips();
  renderEndingSoon();
  renderCoupons();
  renderVideos();
  renderTrades();
  applySectionOrder();

  // Sections are now ordered and the empty ones hidden — reveal the page (it was
  // held at opacity:0 by the .flyers-page:not(.fp-ready) rule in the widget CSS).
  // This stops the flash where default-order headers (e.g. "Deal of the Day")
  // briefly appeared before the JS reordered/hid them. Product grids inside still
  // fill in via their skeletons/lazy-load; brand deals still arrive last by design.
  var fpPage=document.querySelector('.flyers-page');
  if(fpPage)fpPage.classList.add('fp-ready');

  // 5) Render product-heavy sections (above-fold first, lazy rest)
  await Promise.all([
    renderCountdown(),
    renderRecent()
  ]);

  // 6) Lazy-load remaining product grids
  setupLazyLoad();

  // 7) Async: bundles, staff picks, shop-by-brand rows (don't block)
  renderBundles();
  renderStaff();
  renderBrandRows();

  // Wrap any horizontal product strips with scroll arrows (idempotent; also
  // called by the section/brand renderers as they populate on scroll).
  setupScrollArrows();

  // Reflect the real cart total in the sticky bar on load (in case the visitor
  // arrived with items already in their cart).
  updateCartBar();

  console.log('[Atlas Flyers] Init complete');

  // ---- Keep the flyer's cart UI (footer + tile buttons) in sync when the cart
  // changes outside the flyer — e.g. an item removed in the theme's own cart
  // drawer. Re-reads the real BC cart and re-paints. Debounced + guarded so it
  // never piles up requests or slows the page.
  var _resyncing=false, _resyncT=null;
  async function resyncCart(){
    if(_resyncing)return;            // never overlap reads
    _resyncing=true;
    try{ await loadServerCart(); updateCartBar(); applyCartStateToButtons(); }
    catch(e){}
    _resyncing=false;
  }
  function resyncSoon(){             // collapse rapid triggers into one read
    clearTimeout(_resyncT);
    _resyncT=setTimeout(resyncCart,400); // ~400ms: lets BC settle the cart server-side first
  }
  // Re-sync when the shopper returns to the page (covers drawer edits, other
  // tabs, and back-from-checkout). Reliable, costs nothing until it fires.
  document.addEventListener('visibilitychange',function(){
    if(document.visibilityState==='visible')resyncSoon();
  });
  window.addEventListener('pageshow',resyncSoon);
  // Detect cart-changing API calls (add/remove/update) and re-sync shortly
  // after. Only acts on cart URLs with a non-GET method; everything else passes
  // straight through, so no overhead is added to other requests.
  function isCartMutation(url,method){
    return typeof url==='string'
      && url.indexOf('/api/storefront/cart')!==-1
      && String(method||'GET').toUpperCase()!=='GET';
  }
  // PRIMARY trigger — the theme's cart drawer (add/remove) uses XHR, so this is
  // the path that actually fires on a drawer edit.
  if(window.XMLHttpRequest&&XMLHttpRequest.prototype){
    var _xhrOpen=XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open=function(method,url){
      try{ if(isCartMutation(url,method)) this.addEventListener('loadend',resyncSoon); }catch(e){}
      return _xhrOpen.apply(this,arguments);
    };
  }
  // Secondary trigger — covers any cart calls made via fetch().
  if(window.fetch){
    var _origFetch=window.fetch;
    window.fetch=function(){
      var u=(arguments[0]&&arguments[0].url)||arguments[0]||'';
      var m=(arguments[1]&&arguments[1].method)||(arguments[0]&&arguments[0].method)||'GET';
      var p=_origFetch.apply(this,arguments);
      try{ if(isCartMutation(u,m)) p.then(function(){resyncSoon();},function(){}); }catch(e){}
      return p;
    };
  }
}

// Run
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();

})();
