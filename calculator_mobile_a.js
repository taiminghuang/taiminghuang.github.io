var insert_flag="yes";   
   
var PIMUL2 ="6.28318530717958647692528676655900576839433879875021164194988918461563281257241799725606965068423413596429617302656461329418768921910116446345071881625696223490056820540387704221111928924589790986076392885762195133186689225695129646757356633054240381829129713384692069722090865329642678721452049828254744917401321263117634976304184192565850818343072873578518072002266106109764093304276829390388302321886611454073151918390618437223476386522358621023709614892475992549913470377150544978245587636602389825966734672488131328617204278989279044947438140435972188740554107843435258635350476934963693533881026400113625429052712165557154268551557921834727435744293688180244990686029309917074210158455937851784708403991222425804392172806883631962725954954261992103741442269999999674595609990211946346563219263719004891891069381660528504461650668937007052386237634202000627567750577317506641676284123435533829460719650698085751093746231912572776470757518750391556371556106434245361322600385575322239181843284039787619051440213097172";
                                                                                                
var PI ="3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680661300192787661119590921642019893809525720106548586";
var PIDIV2="1.57079632679489661923132169163975144209858469968755291048747229615390820314310449931401741267105853399107404325664115332354692230477529111586267970406424055872514205135096926055277982231147447746519098221440548783296672306423782411689339158263560095457282428346173017430522716332410669680363012457063686229350330315779408744076046048141462704585768218394629518000566526527441023326069207347597075580471652863518287979597654609305869096630589655255927403723118998137478367594287636244561396909150597456491683668122032832154301069747319761236859535108993047185138526960858814658837619233740923383470256600028406357263178041389288567137889480458681858936073422045061247671507327479268552539613984462946177100997805606451098043201720907990681488738565498025935360567499999918648902497552986586640804815929751222972767345415132126115412667234251763096559408550500156891937644329376660419071030858883457365179912674521437773436557978143194117689379687597889092889026608561340330650096393830559795460821009946904762860053274293";
var PIDIV2MUL3="4.712388980384689857693965074919254326295754099062658731462416888461724609429313497942052238013175601973222129769923459970640766914325873347588039112192721676175426154052907781658339466934423432395572946643216463498900169192713472350680174747906802863718472850385190522915681489972320090410890373711910586880509909473382262322281381444243881137573046551838885540016995795823230699782076220427912267414149585905548639387929638279176072898917689657677822111693569944124351027828629087336841907274517923694750510043660984964629032092419592837105786053269791415554155808825764439765128577012227701504107698000852190717895341241678657014136684413760455768082202661351837430145219824378056576188419533888385313029934168193532941296051627239720444662156964940778060817024999997559467074926589597599224144477892536689183020362453963783462380017027552892896782256515004706758129329881299812572130925766503720955397380235643133203096739344295823530681390627936672786670798256840209919502891814916793863824630298407142885824";
var PIDIV4="0.785398163397448309615660845819875721049292349843776455243736148076954101571552249657008706335529266995537021628320576661773461152387645557931339852032120279362571025675484630276389911155737238732595491107202743916483361532118912058446695791317800477286412141730865087152613581662053348401815062285318431146751651578897043720380230240707313522928841091973147590002832632637205116630346036737985377902358264317591439897988273046529345483152948276279637018615594990687391837971438181222806984545752987282458418340610164160771505348736598806184297675544965235925692634804294073294188096168704616917351283000142031786315890206946442835689447402293409294680367110225306238357536637396342762698069922314730885504989028032255490216008604539953407443692827490129676802837499999593244512487764932933204024079648756114863836727075660630577063336171258815482797042752500784459688221646883302095355154294417286825899563372607188867182789890715970588446898437989445464445133042806701653250481969152798977304105049734523814300266371465";
var SQRPI="1.772453850905516027298167483341145182797549456122387128213807789852911284591032181374950656738544665416226823624282570666236152865724422602525093709602787068462037698653105122849925173028950826228932095379267962800174639015351479720516700190185234018585446974494912640313921775525906216405419332500906398407613733477475153433667989789365851836408795451165161738760059067393431791332809854846248184902054654852195613251561647467515042738761056107996127107210060372044483672365296613708094323498439";
var RR=0.577215664901532860605129;
var LN2  = "0.69314718055994530941723212145817656807550013436025525412068000949339362196969471560586332699641868754200148102057068573368552023575813055703267075163507596193072757082837143519030703862389167347112335011536449795523912047517268157493206515552473413952588295045300709532636664265410423915781495204374043038550080194417064167151864471283996817178454695702627163106454615025720740248163777338963855069526066834113727387372292895649354702576265209885969320196505855476470330679365443254763274495125040606";     
var LN3  = "1.09861228866810969139524523692252570464749055782274945173469433363749429321860896687361575481373208878797002906595786574236800422593051982105280187076727741060316276918338136717937369884436095990374257031679591152114559191775067134705494016677558022220317025294689756069010652150564286813803631737329857778236699165479213181814902003010382363012224865274819822599109745249089645805346700884596508574844411901885708764749486707961308582941160216612118400140982551439194876889367984943022557315353296853";    
var LN10 = "2.30258509299404568401799145468436420760110148862877297603332790096757260967735248023599720508959829834196778404228624863340952546508280675666628736909878168948290720832555468084379989482623319852839350530896537773262884616336622228769821988674654366747440424327436515504893431493939147961940440022210510171417480036880840126470806855677432162283552201148046637156591213734507478569476834636167921018064450706480002775026849167465505868569356734206705811364292245544057589257242082413146956890167589402";
var LN10_INV ="0.4342944819032518276511289189166050822943970058036665661144537831658646492088707747292249493384317483187061067447663037336416792871589639065692210646628122658521270865686703295933708696588266883311636077384905142844348666768646586085135561482123487653435434357317253835622281395603048646652366095539377356176323431916710991411597894962993512457934926357655469077671082419150479910989674900103277537653570270087328550951731440674697951899513594088040423931518868108402544654089797029863286828762624144";
var E1="2.71828182845904523536028747135266249775724709369995957496696762772407663035354759457138217852516642742746639193200305992181741359662904357290033429526059563073813232862794349076323382988075319525101901157383418793070215408914993488416750924476146066808226480016847741185374234544243710753907774499206955170276183860626133138458300075204493382656029760673711320070932870912744374704723069697720931014169283681902551510865746377211125238978442505695369677078544996996794686445490598793163688923009879312";
var DEG="0.017453292519943295769236907684886127134428718885417254560971914401710091146034494436822415696345094822123044925073790592483854692275281012398474218934047117319168245015010769561697553581238605305168788691271172087032963589602642490187704350918173343939698047594019224158946968481378963297818112495229298469927814479531045416008449560904606967176196468710514390888951836280826780369563245260844119508941294762613143108844183845478429899625621072806214155969235444237497596399365292916062377434350066384054631518680225870239366785527479973470762170567665894131682058551206534962093068803748991487052250733336489595251464226821032063015321053384297984326230380227229027519056369719918728059957109384771797455666422845161233115911302323110075720970951722002881706729722222213183211388616998509626756090658861246996974149490570236235045851914916862566284378727833350765770849369930740046563447873209273040575545852724604197048506442015910457521042187510876565876558512062371147850010710425617755051202334438544973651117030477";
var RAD="57.2957795130823208767981548141051703324054724665643215491602438612028471483215526324409689958511109441862233816328648932814482646012483150360682678634119421225263880974672679263079887028931107679382614426382631582096104604870205064442596568411201719120577385662804312849626242033761879372976238707903403159807196240895220451862054599233963148419069662201151266096918015147876373669231641071267740385146901654995941925157119864794352106616243890352023067561777967571133156835062057313133601565013488980187887099177764391811593169200139029797682608293230553397026181660490929593282083154995798031955967007118252058466439231799858456719168439917754131652959953056406279044967248722534340724738330651858790088201071935485520604850068426473490756058743885675329321782466021242331327342721294453089166761671467202323137495784487981772906726908497801351886627439550559185806930334380673689717269463983388546519913267567748257649341692338111382433230532082241985164541395979472567140094041784696151560535821579204602135";
var πDIV2="1.57079632679489661923132169163975144209858469968755291048747229615390820314310449931401741267105853399107404325664115332354692230477529111586267970406424055872514205135096926055277982231147447746519098221440548783296672306423782411689339158263560095457282428346173017430522716332410669680363012457063686229350330315779408744076046048141462704585768218394629518000566526527441023326069207347597075580471652863518287979597654609305869096630589655255927403723118998137478367594287636244561396909150597456491683668122032832154301069747319761236859535108993047185138526960858814658837619233740923383470256600028406357263178041389288567137889480458681858936073422045061247671507327479268552539613984462946177100997805606451098043201720907990681488738565498025935360567499999918648902497552986586640804815929751222972767345415132126115412667234251763096559408550500156891937644329376660419071030858883457365179912674521437773436557978143194117689379687597889092889026608561340330650096393830559795460821009946904762860053274293";
var π="3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680661300192787661119590921642019893809525720106548586";  
var πMUL2 ="6.28318530717958647692528676655900576839433879875021164194988918461563281257241799725606965068423413596429617302656461329418768921910116446345071881625696223490056820540387704221111928924589790986076392885762195133186689225695129646757356633054240381829129713384692069722090865329642678721452049828254744917401321263117634976304184192565850818343072873578518072002266106109764093304276829390388302321886611454073151918390618437223476386522358621023709614892475992549913470377150544978245587636602389825966734672488131328617204278989279044947438140435972188740554107843435258635350476934963693533881026400113625429052712165557154268551557921834727435744293688180244990686029309917074210158455937851784708403991222425804392172806883631962725954954261992103741442269999999674595609990211946346563219263719004891891069381660528504461650668937007052386237634202000627567750577317506641676284123435533829460719650698085751093746231912572776470757518750391556371556106434245361322600385575322239181843284039787619051440213097172";
var max_st=[[biΝd]];
var ln10 = LN10;
var ln2 = LN2 ;
var M ="0.43429448190325182765112891891660508229439700580366656611445378316586464920887077472922494933843174831870610674476630373364167928715896390656922106466281226585212708656867032959337086965882668833116360773849051428443486667686465860851355614821234876534354343573172538356222813956030486466523660955393773561763234319167109889719410143411237767964982194700611043912650947152577077168836701769579112578473658004821547772110361918217841806037719438510604511372932165542929988279211304575651288263270190879";  
                                
var MTX_COL =0;  
function m_deci_dgt(){     
  var deci_dgt= parseInt(document.getElementById('5_0').value); 
    if( deci_dgt <= 50){
        var data_row = 60; }   
    else if( deci_dgt > 50 && deci_dgt <= 150){
        var data_row = 65; }   
    else if( deci_dgt > 150 && deci_dgt <= 200){
        var data_row = 80; }   
      
    else if ( deci_dgt > 200 && deci_dgt<=300 ) { 
         var data_row = 90 ; }  

    else if ( deci_dgt > 300 && deci_dgt<=400 ) { 
         var data_row = 110 ; }  

    else if ( deci_dgt > 400 && deci_dgt<=450 ) { 
         var data_row = 120 ; }  

    else if ( deci_dgt > 450 && deci_dgt<=500 ) { 
         var data_row = 150 ; }  

    else if ( deci_dgt > 500 && deci_dgt<=1000 ) { 
         var data_row = 210 ; }  

    else { var data_row =  510 ;}    
       
    return  data_row; 
 
}

  function m_add_sub_fix_cols(){       
       var fix_cols = m_deci_dgt() * 5 - 35 ;  
      return  fix_cols; 
  }

   var display_width = 35;   
   function doGetCaretPosition (ctrl) {
   	var CaretPos = 0;
    	if (document.selection) {
   		ctrl.focus ();
    		var Sel = document.selection.createRange ();
    
    		Sel.moveStart ('character', -ctrl.value.length);
     
    		CaretPos = Sel.text.length;
    	}
     	else if (ctrl.selectionStart || ctrl.selectionStart == '0')
    		CaretPos = ctrl.selectionStart;
     
    	return (CaretPos);
     
    }

    function setCaretPosition(ctrl, pos)
    {
     
    	if(ctrl.setSelectionRange)
    	{
    		ctrl.focus();
    		ctrl.setSelectionRange(pos,pos);
    	}
    	else if (ctrl.createTextRange) {
    		var range = ctrl.createTextRange();
    		range.collapse(true);
    		range.moveEnd('character', pos);
    		range.moveStart('character', pos);
    		range.select();
    	}
    }

 function string_lg(it){        
        var this_it = it ;    

        var str_lg = this_it.length;

        return (str_lg);
      }

 function string_lg_1(){        

        var str_lg = string_lg(calc.input.value);

        return (str_lg);
      }

 function cursor_position()    
     {
       var nub = doGetCaretPosition(document.getElementById('input'));
       
       return (nub);

     }

   function cursor_position_set(n)     
     {

       var string_s = document.getElementById('input');
       var nub_set = setCaretPosition(string_s , n) ;
     }

     function cursor_left_1()         
    {
        s_chang_visible_all();     

        var no = cursor_position();
          
        var lg = string_lg_1();

        var input_str = calc.input.value.trim();
          
        var new_str = input_str.substr(0,no) + input_str.substr(no,lg-1);
          document.getElementById('input').value = new_str;

         cursor_position_set(no-1) ;    
                
         if(no==0){cursor_position_set(0); }    
         click_init() ;   
         
      }

    function cursor_right_1()          
    {
        s_chang_visible_all();     
       
        var no = cursor_position();
        var lg = string_lg_1();
          
        if(no <= lg){
    	 setCaretPosition(document.getElementById('input'),no+1);
                    }

    }

 function cursor_up_1(){               
     s_chang_visible_all();     

    var arry = m_count_newline();
    var arry_lg =arry.length;
    var arry_ref=[];                 

        arry_ref.push(0);

      for(i=0; i<arry_lg ;i++){
                           
                   arry_ref.push(arry[i]+1);
                               
                               }

    var no = cursor_position();
    var arry_ref_lg=arry_ref.length; 

     var arry_small=[];
            for(i=0; i<arry_ref_lg ;i++){
                if(arry_ref[i] <= no){             
                   arry_small.push(arry_ref[i]);
                                 }
                                     }   
        arry_small_lg = arry_small.length;

      var arry_small_2=[];   
           arry_small_2=arry_small.reverse(); 

      var  test_lg = arry_small_2.length;
          
            if(test_lg >=2){
                
               var ref_down = arry_small_2[0];    
               var ref_up = arry_small_2[1];      
             
                 if(((ref_down-ref_up)>(no-ref_down))&&((no-ref_down)< display_width)) {    
                    var new_no = ref_up+no-ref_down;}

                 if(((ref_down-ref_up)<=(no-ref_down))&&((no-ref_down)< display_width)){   
                    var new_no = ref_down-1;}

                  if((no-ref_down) > display_width){     
                    var new_no = no-display_width;}
  
                                                  } 

               if((test_lg ==1)&&(no > display_width)){ 
                  var new_no = no-display_width;}

                if((test_lg ==1)&&(no <= display_width)){ 
                  var new_no = no;}      
                  
              
         setCaretPosition(document.getElementById('input'),new_no);
          scroll_cursor();
   }
 
   function cursor_down_1(){                
      s_chang_visible_all();     
      var arry = m_count_newline();
      var arry_lg =arry.length;
         var no = cursor_position();
         var lg = string_lg_1();
         if(lg <= no) { no = lg;}    
          var arry_small=[];

           for(i=0; i<arry_lg ;i++){
                if(arry[i] <=no){             
                   arry_small.push(arry[i]);
                                 }
                                     }  

            var arry_small_lg = arry_small.length; 

       
            var arry_lager=[];

            for(i=0; i< arry_lg ;i++){
                if(arry[i] > no){             
                   arry_lager.push(arry[i]);
                                 }
                                     }  
  
             var arry_lager_lg = arry_lager.length;

            if(arry_small_lg >=1){
              var ref_1 = arry_small[arry_small_lg -1 ];}  
             else{  var ref_1=0;}
             if(arry_lager_lg >=1){                       
               var ref_2 = arry_lager[0];}
                  else{  var ref_2=0;}
         if(arry_small_lg >=0 && arry_lager_lg >=1){
               var trans_1=(no-ref_1) % display_width;
                    if((ref_2-no) >= display_width){   
                       var new_no = no + display_width;
                                                    }
                    else{ var new_no = ref_2+trans_1;}
                                                  }

          if(arry_small_lg ==0 && arry_lager_lg >=1){
               var trans_1=(no-ref_1) % display_width;
                    if((ref_2-no) >= display_width){   
                       var new_no = no + display_width;
                                                    }
                    else{ var new_no = ref_2+trans_1+1;}  
                                                  }

        if(arry_small_lg >= 1 && arry_lager_lg ==0){
               var trans_1=(no-ref_1) % display_width;
                    if((lg-no) >= display_width){   
                       var new_no = no + display_width;}
                                                   
                    else{ var new_no = no ;}
                                                  }

       if(arry_small_lg == 0 && arry_lager_lg ==0){
              
                    if((lg-no) >= display_width){   
                       var new_no = no + display_width;}
                                                   
                    else{ var new_no = no ;}
                                                  }

     	setCaretPosition(document.getElementById('input'),new_no);
        scroll_cursor();
          
    }

function cursor_position_row(){                
    var arry = m_count_newline();
     
    var arry_lg =arry.length;
  
    var no = cursor_position();
   
    var lg = string_lg_1();          
    
         if(lg <= no) { no = lg;}    

   var row_nub=0;

    for(i=0; i< arry_lg ;i++){

    var nub_1=arry[i];
 
       if(i==0 && nub_1<no ){
          var nub_1=arry[i];
          var row_nub = row_nub+ m_abs(m_nub_m((nub_1-0)/display_width))+2;   
              }
       if(i > 0 && nub_1 < no ){
         var nub_1=arry[i];
         var nub_2=arry[i+1];

        var row_nub = row_nub + m_abs(m_nub_m((nub_2-nub_1)/display_width))+1;  
        }

        
                            }

  arry =[];

  return row_nub; 

}


 function cursor_re_start(nub){                
      var nub_a=nub;
      var arry = m_count_semicolon();
      var arry_lg =arry.length;
         var no = cursor_position();
         var input_str_a = calc.input.value;  
         var lg = string_lg_1();
         if(lg <= no) { no = lg;}    
           var arry_small=[];
 
            for(i=0; i<arry_lg ;i++){
                if(arry[i] <=no){             
                   arry_small.push(arry[i]);
                                 }
                                     }  

            var arry_small_lg = arry_small.length; 

      
            var arry_lager=[];

            for(i=0; i< arry_lg ;i++){
                if(arry[i] > no){              
                   arry_lager.push(arry[i]);
                                 }
                                     }  
  
             var arry_lager_lg = arry_lager.length;

            input_str_1="";
            input_str_2="";
            input_str_3="";
  
        if(arry_small_lg >0 && arry_lager_lg >0){
           var input_str_1 = input_str_a.substr(0 ,arry_small[arry_small_lg-1]+1);                         
           var input_str_2 = input_str_a.substring(arry_small[arry_small_lg-1]+1,arry_lager[0]+1);         
           var input_str_3 = input_str_a.substr(arry_lager[0]+1,lg-arry_lager[0]);                          
                                              }

         if(arry_small_lg ==0 && arry_lager_lg>0){
                  
           var input_str_1 = "";                                                    
           var input_str_2 = input_str_a.substring(0 ,arry_lager[0]+1);             
           var input_str_3 = input_str_a.substr(arry_lager[0]+1 ,lg-arry_lager[0]);  
                                                             }
         if(arry_small_lg >0 && arry_lager_lg==0){
      
           var input_str_1 = input_str_a.substring(0 ,lg);      
           var input_str_2 = "";                                             
           var input_str_3 = "";                                             
                                                             }
          
  
      if(nub_a==1){ return input_str_1; }
      if(nub_a==2){ return input_str_2; }
      if(nub_a==3){ return input_str_3; } 
 

   }

function cursor_coords(event){      
 
  var x=event.clientX;
  var y=event.clientY;
  var ys=event.screenY;
   s_chang_visible_all(); 
  return data_a;
 }

 
var repeat_bs;
 var repeat_del;
 var repeat_sp;
 var repeat_left;
 var repeat_right;
 var repeat_up;
 var repeat_down;

function m_repeat_fu(nub){  
  var nub_a=nub;
    if(nub_a==0){
        repeat_bs = setInterval("backspace()" , 1);  }    
    
    if(nub_a==1){
        repeat_del = setInterval("delete_a()" , 100);  }   

    if(nub_a==2){
        repeat_sp = setInterval("space_1()" , 100);  }   
    if(nub_a==3){
        repeat_left = setInterval("cursor_left_1()" , 100);  }   
     if(nub_a==4){
        repeat_right = setInterval("cursor_right_1()" , 100);  }   
      if(nub_a==5){
        repeat_up = setInterval("cursor_up_1()" , 100);  }   
      if(nub_a==6){
        repeat_down = setInterval("cursor_down_1()" , 100);  }   
   
      
  }


 function m_stop_repeat_fu(nub){

  var nub_a=nub;
    if(nub_a==0){
      clearInterval(repeat_bs); }    
     if(nub_a==1){
      clearInterval(repeat_del); }    
     if(nub_a==2){
      clearInterval(repeat_sp); }    
    if(nub_a==3){
      clearInterval(repeat_left); }    
    if(nub_a==4){
      clearInterval(repeat_right); }     
    if(nub_a==5){
      clearInterval(repeat_up); }     
    if(nub_a==6){
      clearInterval(repeat_down); }     
   
 }

function backspace(){
      s_chang_visible_all();     
        var no = cursor_position();
        
        var lg = string_lg_1();
        var input_str = calc.input.value.trim();
         
        var new_str = input_str.substr(0,no-1) + input_str.substr(no,lg-1);
          document.getElementById('input').value = new_str;

         document.getElementById('input').blur();  

         cursor_position_set(no-1) ;    

            scroll_cursor();    

              click_init() ;   
     
             }

function delete_a(){
      
      s_chang_visible_all();     
        var no = cursor_position();
          
        var lg = string_lg_1();
        var input_str = calc.input.value;
       
        var new_str = input_str.substr(0,no) + input_str.substr(no+1,lg);
        document.getElementById('input').value = new_str;
         cursor_position_set(no) ;    
         
             }

function clear_all_1(item_1){
 
  s_chang_visible_all();    
      
   var item_a=item_1;
      s_chang_sum(item_a);     
    var input_str = calc.input.value;
    var new_str ="";
      document.getElementById('input').value = new_str;
       cursor_position_set(0) ;    

 }


function space_1(){
      s_chang_visible_all();     
   
        var no = cursor_position();
        
        var lg = string_lg_1();
        var input_str = calc.input.value;
       if(insert_flag=="yes"){
          var new_str = input_str.substr(0,no) +" "+ input_str.substr(no,lg);
                             }
        else{
         var new_str = input_str.substr(0,no) +" "+ input_str.substr(no+1,lg);
            }         

        document.getElementById('input').value = new_str;
         cursor_position_set(no+1) ;    
         
             }

function key_1(char_1){
      var char_1=char_1;

         s_chang_sum(char_1);      
       
      var char_lg = char_1.length;  
      var no = cursor_position();  
      var lg = string_lg_1();
      var input_str = calc.input.value;
       
      if(char_1== "h("){

         if(insert_flag=="yes"){
              var new_str = input_str.substr(0,no-1) +char_1+ input_str.substr(no,lg);
                             }
           else{ 
              var new_str = input_str.substr(0,no-1) +char_1+ input_str.substr(no+char_lg,lg);}  
                }
      else{
            if(insert_flag=="yes"){
              var new_str = input_str.substr(0,no) +char_1+ input_str.substr(no,lg);
                             }
           else{
             var new_str = input_str.substr(0,no) +char_1+ input_str.substr(no+char_lg,lg);
                }
                      }
      document.getElementById('input').value = new_str;

        cursor_position_set(no+char_lg) ;    
     
            s_check_nb(new_str);         

           s_check_end(new_str);        
            scroll_cursor();    
           click_init() ;   
  }


 var insert_flag="not";   

function rept_1(char_1, nb){
   var char_1 = char_1;
   var nb = nb;
   var char_t="";
     for(var n =0; n < nb+1 ;n++){

         char_t = char_t +char_1;
     }
     return (char_t);

}


function enter_1(){      

     s_chang_visible_all();     
        
   var no = cursor_position();
   var lg = string_lg_1();             
   var input_str = calc.input.value;
   var rten = input_str.charCodeAt(no);   

    if(rten !=13 && rten !=10){
        var new_str = input_str.substring(0,no) +'\r'+ input_str.substring(no,lg);        
                  }
 
     if(rten ==13 ){
       var new_str = input_str.substr(0,no) +'\r'+'\r'+ input_str.substr(no,lg);         
       }   
       
     if(rten ==10){
       var new_str = input_str.substr(0,no) +'\r'+'\n'+ input_str.substr(no,lg);         
       }

     document.getElementById('input').value = new_str;
         cursor_position_set(no+1) ;     

   scroll_cursor();
     
}


function newline_1(){                 

    s_chang_visible_all();     
   var no = cursor_position();
   var s_lg = string_lg_1();             
   var input_str = calc.input.value;
  
   var new_str = input_str+'\n' ;     
    document.getElementById('input').value = new_str;
 
       var new_ln_w = string_lg_1();  

    cursor_position_set(new_ln_w) ;    

      }

 function scroll_x_y(){
       var elem = document.getElementById('input');
       var x_1=elem.scrollLeft;
       var y_1=elem.scrollTop;

      elem.scrollTop = elem.scrollHeight ; 
          
   }


function scroll_cursor(){       

      var text_area = document.getElementById('input');
       var y_t=text_area.scrollTop;
       var y_h=text_area.scrollHeight ;
      var n_cur = cursor_position_row();  

        text_area.scrollTop = 9999 ;     

  
 };


function mtx_int_to_prime(x ){         
 var xx=x.toString().trim();

 var xx_fst=xx.substr(0,1);

      if(xx_fst=="-"){ var xx=xx.substr(1,xx.length-1);
                                                      }   
 var AA= m_mtx_prime_table();     
  var nub_ax= m_str_char(xx,".") ;  
  var nub_ex= m_str_char(xx,"e") ;  
 
       if( nub_ax !=0  || nub_ex !=0  ){
             return   ;  }    

 var nub_col= parseInt(xx/2);

  var BB = m_new_space_mtx(1,nub_col);   
    
      var data_x="";   
      var data_c="";
      var nub_col_new=0;
      var jj=0;
      var last_col=0;

  
   if( xx!=1 && xx!=-1  ){
    for (var i=0;i<AA[0].length ;i++){

        var data_c = parseInt(AA[0][i]) ;   


            if(data_c > xx  || xx==1 || xx==-1  ){   
               var i = AA[0].length;
            }
      
           var data_x = xx/data_c;
              var nub_x= m_str_char(data_x,".") ;  
            
               if(nub_x==0 ){                     

                     var xx=data_x;               
                      BB[0][jj] = data_c;          
                        var jj=jj+1;                 
                    
                     var i=i-1 ;                  
                     var nub_col_new = jj;
                                         }        


              var last_col=AA[0].length-1;
             if(i==last_col ){          
                 BB[0][jj] = xx;          
                       var jj=jj+1; 

                       var nub_col_new = jj;

                             }
     } 

   } 

         var CC = m_new_space_mtx(1,nub_col_new); 
          var CC = m_mtx_copy_mtx(CC,BB);      
              
              var data_chg= CC[0][0].toString();

             if(xx_fst=="-"){ CC[0][0]="-"+data_chg;}   
    var ans_1 = CC;

  return  ans_1 ;

}


function mtx_real_div_min_fraction(x,y ){               
  var xx=x.toString().trim();
  var yy=y.toString().trim();

  var AA= m_mtx_prime_table();                       

  var data_x="";   
  var data_y="";
  var data_c="";
     var nub_ax= m_str_char(xx,".") ;  
     var nub_ay= m_str_char(yy,".") ;  
     var nub_ex= m_str_char(xx,"e") ;  
     var nub_ey= m_str_char(yy,"e") ;  

       if( nub_ax !=0 && nub_ay !=0 && nub_ex !=0 && nub_ey !=0 ){
             return   ;  }    


  if( xx!=1 && xx!=-1 && yy!=1 && yy!=-1 && nub_ax==0 && nub_ay==0){
    for (var i=0;i<AA[0].length ;i++){

        var data_c = parseInt(AA[0][i]) ;   

            if(data_c > xx || data_c > yy || xx==1 || yy==1){   
               var i = AA[0].length;
            }
      
           var data_x = xx/data_c;
           var data_y=  yy/data_c; 
             var nub_x= m_str_char(data_x,".") ;  
             var nub_y= m_str_char(data_y,".") ;  
               if(nub_x==0 && nub_y==0){       

                     var xx=data_x;               
                     var yy=data_y;
                     var i=i-1 ;                 
                                         }  

     } 

   } 

   var ans_1 = xx+"/"+yy;
  return  ans_1 ;
}


function mtx_str_inpt_split(x){               
  var xx = x.toString().trim();
  var ans_0="";   
  var ans_1="";  
  var xx_fst = xx.substr(0,1); 

   var xx =  m_str_sub_ngt_bf(xx);   
        xx = xx.replace(/e\+/g , "EE");   
        xx = xx.replace(/eQ/g , "EQ");    
        xx = xx.replace(/\+/g , "YA");    
        xx = xx.replace(/\-/g , "YS");   
        xx = xx.replace(/\//g , "YD");    
        xx = xx.replace(/\*/g , "YM");    
        xx = xx.replace(/\^/g , "YP");    
        xx = xx.replace(/\(/g , "YL");    
        xx = xx.replace(/\)/g , "YR");    
        xx = xx.replace(/e/g , "EE");     
        xx = xx.replace(/\!/g , "EJ");     
      
     xx=xx+"YO"; 
     var nub_Y= m_str_char(xx,"Y") ;  
         
     var nub_col = nub_Y * 2  ;
     var AA = m_new_space_mtx(1,nub_col);   
       
     var str_bf="";  
     var str_mf="";
     var str_af="";
     var ans_0 = xx; 
     var nub_i = 0; 
   
       for(var i=0; i<nub_Y ;i++){         
        var index_Y = ans_0.indexOf("Y");     
        var str_bf = ans_0.substr(0,index_Y);  
     
        var str_mf = ans_0.substr(index_Y,2);  
            
           if(str_bf !=""){

             AA[0][nub_i]= str_bf;  var nub_i=nub_i+1 ;
                            }

             if(str_mf !=""){

            AA[0][nub_i]= str_mf;  var nub_i=nub_i+1 ;
                            }
         var str_af = ans_0.substr(index_Y+2,xx.length-index_Y-2);   
          
             var ans_0="";
             var ans_0=str_af;  
             var str_bf="";      
             var str_mf="";
             var str_af="";
         
                                      }
     
       
       for(var j=0; j< AA[0].length ;j++){         

           var data_item = AA[0][j];
            if(data_item !=""){
              data_item = data_item.replace(/EE/g , "e\+");       
               data_item = data_item.replace(/EQ/g , "eQ");    
               data_item = data_item.replace(/YA/g , "\+");    
               data_item = data_item.replace(/YS/g , "\-");    
               data_item = data_item.replace(/YD/g , "\/");    
               data_item = data_item.replace(/YM/g , "\*");    
               data_item = data_item.replace(/YP/g , "\^");    
               data_item = data_item.replace(/YL/g , "\(");    
               data_item = data_item.replace(/YR/g , "\)");    
               data_item = data_item.replace(/EE/g , "e");     
               data_item = data_item.replace(/EJ/g , "\!");     

               data_item = data_item.replace(/YO/g , "");     

                     AA[0][j]= data_item;

                  
                                   }
                    
          }

            BB = AA; 

            CC = m_mtx_space_end(BB) ;    

            var ans_1 ="";
            var ans_1 = m_mtx_element_str(CC);      
   
   return  ans_1 ;  
    
   } 

function mtx_str_inpt_spl_cal(A){         
       AA = A;
        
             for(var n= AA[0].length-2 ; n > 2 ;n--){         
                                
              var data_a="" ;
              var data_b="" ;
              var data_c="" ;
          
              var data_a=AA[0][n].toString() ;

              if(n>0){
                  var data_b=AA[0][n-1].toString() ;}
               else{ var data_b="" ;}

               if(n>0){
                  var data_c=AA[0][n-2].toString() ;}
               else { var data_c="";} 

                if(n>0){
                  var data_d=AA[0][n-3].toString() ;}
               else { var data_d="";} 

             if((data_d=="/" ) && ( data_a >=0 || data_a <0 ) && (data_a.length < 8) && data_b=="/" && ( data_c >=0 || data_c <0 ) && (data_c.length < 8 )) {       

                     var data_b ="*" ;    

                      var data_md = eval(data_a+data_b+data_c).toString(); 

                      AA[0][n-2] =data_md  ; AA[0][n] =""; AA[0][n-1] ="" ;}
              
            if( data_c!=")" && data_b=="^" && data_a=="0" ) { AA[0][n-2] =1 ; AA[0][n] =""; AA[0][n-1] ="" ;}                    
            if( data_c!=")" && data_b=="^" && data_a=="1" ) { AA[0][n] =""; AA[0][n-1] ="" ;}                                  

                                      }


                   AA = m_mtx_space_end(AA) ;    

      for(var mm=0; mm< 2 ;mm++){ 
       for(var m=0; m< AA[0].length-2 ;m++){         
                                
              var data_a="" ;
              var data_b="" ;
              var data_c="" ;

             
             if( m>=1){                       
                var data_1=AA[0][m-1] ;}
             else{ var data_1="" ;}
               var data_a=AA[0][m].toString() ;
              var data_b=AA[0][m+1].toString() ;
              var data_c=AA[0][m+2].toString() ;

          if(mm==0){
  
              if( data_a==0 && data_b=="*" && (data_c!="(" || data_c!="") ) { AA[0][m] =""; AA[0][m+1] ="" ;AA[0][m+2] =0 ;}             
              if( data_a==1 && data_b=="*"  ) { AA[0][m] =""; AA[0][m+1] =""  ;}                                                            
 
              if((data_1=="+" || data_1=="-"|| data_1==""|| data_1=="(") && ( data_a >=0 || data_a <0 ) && (data_a.length < 8) && data_b=="*" && ( data_c >=0 || data_c <0 ) && (data_c.length < 8 )) {
                     AA[0][m] =""  ; AA[0][m+1] =""  ;AA[0][m+2] = eval(data_a+data_b+data_c);}                                                                         

              if( data_a==0 && data_b=="/" && (data_c!="(" || data_c!="") ) { AA[0][m] =""; AA[0][m+1] ="" ;AA[0][m+2] =0 ;}         
  
              if( data_c==")" && data_b=="0" && data_a=="(" ) { AA[0][m] ="0"; AA[0][m+1] ="" ;AA[0][m+2] ="" ;}                     
              if( data_b==")" && data_a=="(" ) { AA[0][m] ="0"; AA[0][m+1] ="" ;}                                                     
                   }


              if(mm==1){
                if((data_1=="+" || data_1=="-"|| data_1==""|| data_1=="(") && ( data_a >=0 || data_a <0 ) && (data_a.length < 8) && data_b=="/" && ( data_c >=0 || data_c <0 ) && (data_c.length < 8 )) {       

                      var data_md = eval(data_a+data_b+data_c).toString(); 

                      var nub_point= m_str_char(data_md,".") ; 
                         if( nub_point==0){                         
                   
                          AA[0][m] =""  ; AA[0][m+1] =""  ;AA[0][m+2] = data_md ;
                                           }          
                                                                                                                                           }         
  
                          }  
                                    }    

                                  }           


                   AA = m_mtx_space_end(AA) ;    
        
             for(var k=0; k< AA[0].length-3 ;k++){         
                                
              var data_a="" ;
              var data_b="" ;
              var data_c="" ;

             
             if( k>=1){                      
                var data_1=AA[0][k-1] ;}
             else{ var data_1="" ;}
      

              var data_a=AA[0][k].toString() ;
              var data_b=AA[0][k+1].toString() ;
              var data_c=AA[0][k+2].toString() ;
              var data_d=AA[0][k+3].toString() ;    

              if((data_1=="" ||data_1=="+" || data_1=="-" || data_1=="(") && ( data_a >=0 || data_a <0 ) && (data_a.length < 8) && (data_b=="-"|| data_b=="+") && ( data_c >=0 || data_c <0 ) && (data_c.length < 8 ) && (data_d=="" ||data_d=="+" || data_d=="-"|| data_d==")") ) {
                     AA[0][k] =""  ; AA[0][k+1] =""  ;AA[0][k+2] = eval(data_a+data_b+data_c);}                                              

                                            }        

                  AA = m_mtx_space_end(AA) ;     
  
             for(var s=0; s< AA[0].length-2 ;s++){         
             var data_a="" ;
              var data_b="" ;
              var data_c="" ;
   
              var data_a=AA[0][s].toString() ;
              var data_b=AA[0][s+1].toString() ;
              var data_c=AA[0][s+2].toString() ;
 
              if( data_a=="(" && ( data_b >=0  ) && (data_b.length < 8) && (data_c==")") ) {
                     AA[0][s] =""  ; AA[0][s+1] =""  ;AA[0][s+2] = data_b;}                                              

                                       }        

              AA = m_mtx_space_end(AA) ;     
        
      return  AA ;  
}

function mtx_str_inpt_chk(x,nub){    
                                    
  var xx = x.toString().trim();

  var nub_e=0;   
  var nub_j=0;

  var nub_e= m_str_char(xx,"e") ;  
  var nub_j= m_str_char(xx,"!") ;   
 
  var ans_0="";   
  var ans_1="";  

  var xx_fst = xx.substr(0,1); 

  if(nub_e==0 && nub_j==0){                       
        var ans_1=xx; 
        return  ans_1 ; }            

   var xx =  m_str_sub_ngt_bf(xx);   

        xx = xx.replace(/e\+/g , "EE");   
        xx = xx.replace(/eQ/g , "EQ");    
        xx = xx.replace(/\+/g , "EA");    
        xx = xx.replace(/\-/g , "ES");    
        xx = xx.replace(/\//g , "ED");    
        xx = xx.replace(/\*/g , "EM");    
        xx = xx.replace(/\^/g , "EP");    
        xx = xx.replace(/\(/g , "EL");    
        xx = xx.replace(/\)/g , "ER");    
        xx = xx.replace(/e/g , "EE");     
        xx = xx.replace(/\!/g , "EJ");     
        
       
     xx=xx+"E"; 

     var nub_E= m_str_char(xx,"E") ;  
     var str_bf="";  
     var str_mf="";
     var str_af="";
     var ans_0 = xx; 


  
       for(var i=0; i<nub_E ;i++){         

        var index_E = ans_0.indexOf("E");     

        var str_bf = ans_0.substr(0,index_E);  

               if(str_mf=="EE"  && str_bf >450){        

                     var ans_1 = message_1(32);         
                      
                                               }

                     
                 if(str_mf=="EQ" && str_bf >50 ){                  

                    var ans_1 = x ;
                                                }


        var str_mf = ans_0.substr(index_E,2);  

                   if(str_mf=="EJ" && str_bf >10000000){   

                      var ans_1 = message_1(30);

                     return  ans_1  ;
                                               }  


        var str_af = ans_0.substr(index_E+2,xx.length-index_E-2);   
              
             var ans_0="";
             var ans_0=str_af;   
         
                                      }

          var ans="";

          if(nub==1){ var ans=ans_1 ;}   

   return  x ;  
    
   }



function mtx_str_inpt_chk_bf(x){               

  var xx = x.toString().trim();

  var nub_e=0;   
  var nub_j=0;

  var nub_e= m_str_char(xx,"e") ;   
  var nub_j= m_str_char(xx,"!") ;   
  var nub_point_xx = m_str_char(xx,".") ;  
          
  var ans_0="";   
  var ans_1="";  

  var xx_fst = xx.substr(0,1); 

  if(nub_e==0 && nub_j==0 && nub_point_xx <=1 ){      
        var ans_1=xx; 
        return  ans_1 ; }                         
   var xx =  m_str_sub_ngt_bf(xx);   

        xx = xx.replace(/e\+/g , "EE");   
        xx = xx.replace(/eQ/g , "EQ");    
        xx = xx.replace(/\+/g , "EA");    
        xx = xx.replace(/\-/g , "ES");    
        xx = xx.replace(/\//g , "ED");    
        xx = xx.replace(/\*/g , "EM");    
        xx = xx.replace(/\^/g , "EP");    
        xx = xx.replace(/\(/g , "EL");    
        xx = xx.replace(/\)/g , "ER");    
        xx = xx.replace(/e/g , "EE");     
        xx = xx.replace(/\!/g , "EJ");     
        
       
     xx=xx+"E"; 

     var nub_E= m_str_char(xx,"E") ;  
     var str_bf="";  
     var str_mf="";
     var str_af="";
     var ans_0 = xx; 
     var MTX_COL_bf =0;

       for(var i=0; i<nub_E ;i++){         

        var index_E = ans_0.indexOf("E");     
        var str_bf = ans_0.substr(0,index_E);  


              
               if(((str_mf=="EE"||str_mf=="EQ")  && str_bf >=100)||(str_bf.length >= 100)){         

                     var col_nub = Math.floor(m_mtx_real_div(str_bf,5));

                             

                         if( col_nub <=60 ){ var col_nub =60+20;}
                        
 
                              
                        if( col_nub >60 &&  col_nub <=400){

                          var  MTX_COL_bf = m_mtx_real_add(col_nub,100);                     
                                                           }
                       else{
                          var  MTX_COL_bf = m_mtx_real_add(col_nub,200);}



                                 var MTX_COL_bf = m_str_e_to_str(MTX_COL_bf);             
    
       
                              if(str_mf=="EQ"){  var MTX_COL_bf = m_mtx_real_add(MTX_COL_bf,m_mtx_real_div(str_bf,2)) ;    
                                                    var MTX_COL_bf = m_str_e_to_str(MTX_COL_bf);            
                                                                                      }   

                                      
                                                               }




                          if( parseInt(MTX_COL_bf) > parseInt(MTX_COL)){      

                                MTX_COL = parseInt(MTX_COL_bf);

                                    }
                    

                  
                 var nub_point = m_str_char(str_bf,".") ;   
          
                        if(nub_point>=2 ){   

                             var ans_1 = message_1(30);

                           return  ans_1  ;
                                               } 
            
       
        var str_mf = ans_0.substr(index_E,2);  
 
        var str_af = ans_0.substr(index_E+2,xx.length-index_E-2);   
           
             var ans_0="";
             var ans_0=str_af;   
             

         
                                      }
     

              
   
   return  x ;  
    

   }



function mtx_str_hat_chk(x){             

  var xx = x.toString().trim();

  var nub_hat= m_str_char(xx,"^") ;   
  var ans_0="";  
  var ans_1="";  

  var xx_fst = xx.substr(0,1); 

  if((nub_hat==0)||(nub_hat==1 && xx_fst !="-")){      
        var ans_1=xx;  return  ans_1 ; }               

   
   if(nub_hat==1 && xx_fst =="-"){
        var ans_1="0"+xx;  return  ans_1 ; }            

                                 

    var xx =  m_str_sub_ngt_bf(xx);   

        xx = xx.replace(/e\+/g , "EE");   
        xx = xx.replace(/eQ/g , "EQ");    
        xx = xx.replace(/\+/g , "EA");    
        xx = xx.replace(/\-/g , "ES");    
        xx = xx.replace(/\//g , "ED");    
        xx = xx.replace(/\*/g , "EM");    
        xx = xx.replace(/\^/g , "EP");    
        xx = xx.replace(/\(/g , "EL");    
        xx = xx.replace(/\)/g , "ER");    

        xx = xx.replace(/EP/g , "\^");      

     xx=xx+"E"; 

     var nub_E= m_str_char(xx,"E") ;  

       for(var i=0; i<nub_E ;i++){

        var index_E = xx.indexOf("E");  

        var str_bf = xx.substr(0,index_E);  

       
        var str_mf = xx.substr(index_E,2);  

         
        var str_af = xx.substr(index_E+2,xx.length-index_E-2);  
            
            
         var nub_hat_bf= m_str_char(str_bf,"^") ;   
 
           if(nub_hat_bf >1){          

                  var str_bf = mtx_str_e(str_bf);  

                  for(var j=0; j< nub_hat_bf ;j++){
                    var index_hat_p = str_bf.indexOf("^");         
                    var str_bf_bf = str_bf.substr(0,index_hat_p);  
                    var str_bf_mf = str_bf.substr(index_hat_p,1);  
                    var str_bf_af = str_bf.substr(index_hat_p+1,str_bf.length-index_hat_p-1);   
            
                    var ans_0 = ans_0+"("+ str_bf_bf + str_bf_mf;

                      var str_bf = str_bf_af ;     
                                 }

                    var ans_0 = ans_0+ str_bf_af;       

                      for(var k=0; k< nub_hat_bf ;k++){
                            var ans_0 = ans_0+")";       

                             }

                      var str_bf = ans_0;   
                      var ans_0="" ;        

               }



          var ans_1 = ans_1+ str_bf+ str_mf;  
             


             var xx = str_af ;     
 
                                      }
   

      var  ans_1 = ans_1.replace(/EA/g , "\+");    
      var  ans_1 = ans_1.replace(/ES/g , "\-");    
      var  ans_1 = ans_1.replace(/EM/g , "\*");    
      var  ans_1 = ans_1.replace(/ED/g , "\/");    
      var  ans_1 = ans_1.replace(/EP/g , "\^");    

      var  ans_1 = ans_1.replace(/EE/g , "e\+");   
      var  ans_1 = ans_1.replace(/EQ/g , "eQ");    
      var  ans_1 = ans_1.replace(/EL/g , "\(");    
      var  ans_1 = ans_1.replace(/ER/g , "\)");    


      var  ans_1 = ans_1.replace(/Q/g , "\-");    
      var  ans_1 = ans_1.replace(/E/g , "");     
 
     return  ans_1 ;

 }



function mtx_str_e_chk(x){             

   
 var xx = x.toString().trim();

    xx = xx.replace(/exp/g , "EZ");    


 var nub_e= m_str_char(xx,"e") ;  
 var ans_1="";   

  if(nub_e < 1){    
             var xx = xx.replace(/EZ/g , "exp");    
             var ans_1=xx;  return  ans_1 ; }       

    var xx =  m_str_sub_ngt_bf(xx);   
        xx = xx.replace(/e\+/g , "EE");   
        xx = xx.replace(/eQ/g , "EQ");    
        xx = xx.replace(/\+/g , "EA");    
        xx = xx.replace(/\-/g , "ES");    
        xx = xx.replace(/\*/g , "EM");   
        xx = xx.replace(/\//g , "ED");    
        xx = xx.replace(/\^/g , "EP");    
        xx = xx.replace(/π/g , "EI");    
        xx = xx.replace(/\°/g , "EG");    
        xx = xx.replace(/\(/g , "EL");    
        xx = xx.replace(/\)/g , "EJ");    
        xx = xx.replace(/\!/g , "E!");    
        xx = xx.replace(/In/g , "EN");    
        xx = xx.replace(/log/g , "EO");    
 
        xx = xx.replace(/asinh/g , "EB");    
        xx = xx.replace(/acosh/g , "EC");    
        xx = xx.replace(/atanh/g , "EF");    
 
        xx = xx.replace(/asin/g , "EH");    
        xx = xx.replace(/acos/g , "EK");    
        xx = xx.replace(/atan/g , "ER");    
 
        xx = xx.replace(/sinh/g , "ET");    
        xx = xx.replace(/cosh/g , "EU");    
        xx = xx.replace(/tanh/g , "EV");    
 
        xx = xx.replace(/sin/g , "EW");    
        xx = xx.replace(/cos/g , "EX");    
        xx = xx.replace(/tan/g , "EY");    
 


      

  
       xx=xx+"E"; 

  var nub_E= m_str_char(xx,"E") ;  
 
    
      var index_E = xx.indexOf("E");  


     for(var i=0; i<nub_E ;i++){

        
        var index_E = xx.indexOf("E");  

        var str_bf = xx.substr(0,index_E);  

           
        var str_mf = xx.substr(index_E,2);  

            
        var str_af = xx.substr(index_E+2,xx.length-index_E-2);  
            
             
         var nub_e_bf= m_str_char(str_bf,"e") ;   

           if(nub_e_bf >=1){
                  var str_bf = mtx_str_e(str_bf);  

                 
               }

          var ans_1 = ans_1+ str_bf+ str_mf;  

              

             var xx = str_af ;     
         

                                      }




      var  ans_1 = ans_1.replace(/EW/g , "sin");    
      var  ans_1 = ans_1.replace(/EX/g , "cos");    
      var  ans_1 = ans_1.replace(/EY/g , "tan");    
   

      var  ans_1 = ans_1.replace(/ET/g , "sinh");    
      var  ans_1 = ans_1.replace(/EU/g , "cosh");    
      var  ans_1 = ans_1.replace(/EV/g , "tanh");    
   

      var  ans_1 = ans_1.replace(/EH/g , "asin");    
      var  ans_1 = ans_1.replace(/EK/g , "acos");    
      var  ans_1 = ans_1.replace(/ER/g , "atan");    
      
      var  ans_1 = ans_1.replace(/EB/g , "asinh");    
      var  ans_1 = ans_1.replace(/EC/g , "acosh");    
      var  ans_1 = ans_1.replace(/EF/g , "atanh");    
   

      var  ans_1 = ans_1.replace(/EO/g , "log");   
      var  ans_1 = ans_1.replace(/EN/g , "In");    
      var  ans_1 = ans_1.replace(/E!/g , "\!");    
      
      var  ans_1 = ans_1.replace(/EL/g , "\(");   
      var  ans_1 = ans_1.replace(/EJ/g , "\)");    
      var  ans_1 = ans_1.replace(/EG/g , "\°");    
      var  ans_1 = ans_1.replace(/EI/g , "π");    
      var  ans_1 = ans_1.replace(/EA/g , "\+");    
      var  ans_1 = ans_1.replace(/ES/g , "\-");    
      var  ans_1 = ans_1.replace(/EM/g , "\*");    
      var  ans_1 = ans_1.replace(/ED/g , "\/");    
      var  ans_1 = ans_1.replace(/EP/g , "\^");    






       var  ans_1 = ans_1.replace(/EE/g , "e\+");    
       var  ans_1 = ans_1.replace(/EQ/g , "e\-");     


      var  ans_1 = ans_1.replace(/EZ/g , "exp");    
 
        
         

       var  ans_1 = ans_1.replace(/E/g , "");     
      

            
        if(nub_E ==1){                     
           var ans_1 = ans_1 +"-0" ;
                     }

   
         return  ans_1 ;

}




function mtx_str_e_bf(x){             

 var xx = x.toString().trim();

 var xx_lg = xx.length;

  

 var xx_fst =  xx.substr(0,1);
 var xx_lst =  xx.substr(xx_lg-1,1);
 var xx_lst_2 =  xx.substr(xx_lg-2,2);
 var ans_1="";
 var ans_bf="";
 var ans_af="";

   var nub_e= m_str_char(xx,"e") ;  
     
  
   if((xx_fst =="e")||(xx_lst =="e")||(xx_lst_2 =="e.")|| (nub_e>2)){        

              var ans_1 = message_1(32);   

                           return  ans_1 ; }


    

    var pos_e = xx.indexOf("e");  


     if(pos_e ==-1 ) { var ans_1=xx; return ans_1; }       
     if(pos_e !=-1 ) { 
                       var ans_bf=xx.substr(0,pos_e);                     

                          

                       var ans_af=xx.substr(pos_e+1,xx_lg-pos_e-1);     

                            
                       var ans_af = m_mtx_trim(ans_af);       

                            
                       var ans_af = m_str_e_to_str(ans_af);   
                             
                      } 

              
          var pos_point = ans_af.indexOf(".");  
          var ans_af_lg = ans_af.length;        

                 
            if(pos_point ==-1 ) {                            
                   

                var ans_af_fst = ans_af.substr(0,1);


                if(ans_af_fst =="-"){
                  var ans_1= ans_bf+"e"+ ans_af;
                                    }
                 else{
                      var ans_1= ans_bf+"e+"+ ans_af;
                       }
                                 }


            else{                   

                  var ans_af_bf= ans_af.substr(0,pos_point);                         

                  
                  var ans_af_af= ans_af.substr(pos_point+1,ans_af_lg-pos_point-1);   

                     var ans_af_af = m_mtx_trim(ans_af_af);       


                 var ans_af_bf_fst = ans_af_bf.substr(0,1); 

                  if(ans_af_bf_fst =="-"){

                    var ans_af_af="-0."+ ans_af_af;  
                                          } 
                  else{
                    var ans_af_af="0."+ ans_af_af;  
                       }

                     

                  var data_a = Math.pow(10,ans_af_af);  

                     
                  var data_b = m_mtx_real_mul(ans_bf, data_a) ;     

                  var ans_af_bf_fst = ans_af_bf.substr(0,1);     

                   if(ans_af_bf_fst =="-"){   
                     var ans_1 = data_b+"e"+ans_af_bf ;
                                          }
                   else{

                     var ans_1 = data_b+"e+"+ans_af_bf ; 
                       }
                }

               

   return ans_1; 

}



function mtx_str_e(x){        
var xx = x.toString().trim();

 var xx_lg = xx.length;

  

 var xx_fst =  xx.substr(0,1);
 var xx_lst =  xx.substr(xx_lg-1,1);
 var xx_lst_2 =  xx.substr(xx_lg-2,2);
 var ans_1="";
 var ans_bf="";
 var ans_af="";

   var nub_e= m_str_char(xx,"e") ;  
     
  
   if((xx_fst =="e")||(xx_lst =="e")||(xx_lst_2 =="e.")|| (nub_e>2)){        

              var ans_1 = message_1(32);   

                           return  ans_1  }


    

    var pos_e = xx.indexOf("e");  

  
     if(pos_e ==-1 ) { var ans_1=xx; return ans_1; }       
     if(pos_e !=-1 ) { 
                       var ans_bf=xx.substr(0,pos_e);                     

                        

                       var ans_af=xx.substr(pos_e+1,xx_lg-pos_e-1);    

                          
                       var ans_af = m_mtx_trim(ans_af);       

                          
                        var ans_af = mtx_str_e_bf(ans_af); 
                            
                       var ans_af = m_str_e_to_str(ans_af);   
                             
                      } 

             
          var pos_point = ans_af.indexOf(".");  
          var ans_af_lg = ans_af.length;        

                 
            if(pos_point ==-1 ) {                            
                 

                var ans_af_fst = ans_af.substr(0,1);


                if(ans_af_fst =="-"){
                  var ans_1= ans_bf+"e"+ ans_af;
                                    }
                 else{

                      var ans_1= ans_bf+"e+"+ ans_af;
                       }
                                 }


            else{                  

                  var ans_af_bf= ans_af.substr(0,pos_point);                         
                  var ans_af_af= ans_af.substr(pos_point+1,ans_af_lg-pos_point-1);   

                    var ans_af_af = m_mtx_trim(ans_af_af);       
    
 
                   var ans_af_bf_fst = ans_af_bf.substr(0,1); 


                  if(ans_af_bf_fst =="-"){

                    var ans_af_af="-0."+ ans_af_af;  
                                          } 
                  else{
                    var ans_af_af="0."+ ans_af_af;  
                       }

                  


                  var data_a = m_pow(10,ans_af_af);  
                  var data_b = m_mtx_real_mul(ans_bf, data_a) ;     
                  data_b = m_str_e_to_str(data_b);      0


                        

                  var ans_af_bf_fst = ans_af_bf.substr(0,1);     

                   if(ans_af_bf_fst =="-"){   
                     var ans_1 = data_b+"e"+ans_af_bf ;
                                          }
                   else{

                     var ans_1 = data_b+"e+"+ans_af_bf ; 
                       }
                }

                     
             

   return ans_1; 

}
 

function m_n(n){             
    var nn = n.toString().trim();
     nn = m_str_e_to_str(nn);      
      var nub_point= m_str_char(nn,".") ;  
          var ans_1 ="";
          if( nub_point >2){
              var ans_1 = message_1(30);
                           return  ans_1  }
         else{ nn=nn;}
   var nn =m_mtx_trim(nn) ;          
       var test_point = m_nub_p(nn);        
       var test_fst=nn.toString().substr(0,1);
       if(test_point > 0 || test_fst=="-"){
           return message_1(7);        
                         }       
    
        var data_comp_nn_20000001 = m_mtx_real_str_comp(nn,20000001);   
           if(( nn >= 20000001 )||(data_comp_nn_20000001 !=2)){       
              return message_1(33);} 
         var sum_total=1;
          if(nn == 0 || nn==1 ){  
              sum_total=1; return sum_total;}
      var AA= m_new_zero_mtx(1,MTX_COL);             
      var BB= m_new_zero_mtx(1,MTX_COL);            
      var CC= m_new_zero_mtx(1,MTX_COL);            
      var DD= m_new_zero_mtx(1,MTX_COL);            
      var data_row = AA.length;   
         AA[0][0]=100000;      
         DD[0][0]=100000;      
             var  value_nub=0;
             var MM = m_mtx_n_100_table();  
             var nn=parseFloat(nn);   
            TB = m_mtx_n_100_bf_table();  
              var data_flg =0 ;
              var data_i_end =0;
             for(var m=0; m < (TB.length) ;m++){
               if(nn >=TB[m][0] && nn < TB[m+1][0] ){       
                  if( nn <= (parseInt(TB[m][0]) + parseInt(TB[m+1][0]))/2){  
                       var data_i_star = TB[m][1];
                       var value_nub = TB[m][2];
                       var data_e_al = TB[m][3];
                       var data_flg =0 ;                     
                                                       }

                   else{
                        var data_i_end = TB[m+1][1];
                        var value_nub = TB[m+1][2];
                        var data_e_al = TB[m+1][3]; 
                         var data_flg =1 ;                  
                        }
                     var m =  TB.length; 
                     }
                                              }    

             if(value_nub >= 0 ){
               MM_part = m_mtx_row_table(MM,value_nub);
               AA= MM_part; 
                    }
             else{ AA=AA;}
          var nn=parseFloat(nn);   
               var data_e_a = 0;  
         if(data_flg ==0){
            for(var i = data_i_star ; i < (nn+1) ; i++){               
              var data_str = m_mtx_str_to_e_nez(i,0);    
              var data_e = m_mtx_str_to_e_nez(i,1);   
              BB=m_mtx_point_in(BB,data_str);         
              DD =  m_mtx_point_mul(DD,BB);        
               var data_e_a =data_e_a+data_e;  
                DD = m_mtx_cell_five(DD);          
                var data_test = parseInt(DD[0][0]);
                    if(  data_test ==0){
                           var  C = m_mtx_copy_col_mtx(CC,DD);   
                             var  DD = C;
                                     var data_e_a =data_e_a-5;   
                                       }
              
                                         }   
                               var data_e_al =parseInt(data_e_al)+parseInt(data_e_a);   
                               AA =  m_mtx_point_mul(AA,DD);        
                               AA = m_mtx_cell_five(AA);          
                          }  
               else{
                var data_e_a =0;
                 for(var i = (parseInt(nn)+1) ; i < parseInt(data_i_end) ; i++){            
                     var data_str = m_mtx_str_to_e_nez(i,0);    
                     var data_e = m_mtx_str_to_e_nez(i,1);   
                      BB=m_mtx_point_in(BB,data_str);         
               
                    DD =  m_mtx_point_mul(DD,BB);        
                     var data_e_a =data_e_a+data_e;  
                    DD = m_mtx_cell_five(DD);          
                  var data_test = parseInt(DD[0][0]);    
                    if(  data_test ==0){     
                        var  C = m_mtx_copy_col_mtx(CC,DD);   
                             var  DD = C;
                                     var data_e_a =data_e_a-5;   
                                       }

                                         }   
                                            var data_test_d0 = parseInt(DD[0][0]);
                                            var data_test_nub = 0;
                                     while( data_test_d0 < 100000){
                                      var DD = m_mtx_element_shift(DD,1);  
                                             var data_e_a = data_e_a-1;   
                                                  var data_test_d0 = parseInt(DD[0][0]);  
                                                        data_test_nub = data_test_nub+1;
                                                               if( data_test_nub ==10){  var data_test_d0 = 200000 ;}  
                                                                }
                                   var data_e_al =parseInt(data_e_al)-parseInt(data_e_a);   
                              
                                 DDI = m_mtx_any_inv(DD ,1);          
                               AA =  m_mtx_point_mul(AA,DDI);        
                               AA = m_mtx_cell_five(AA);          
                    }

             var sum_total= m_mtx_cell_five_show(AA);     
               sum_total = sum_total.toString();
               sum_total_lg = sum_total.length;
               sum_total = sum_total+"e+"+data_e_al;  
     return sum_total; 

   }



function m_nn(n){              
                              
       var nn = n.toString().trim();


      
      var nub_point= m_str_char(nn,".") ;  
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ nn=nn;}

  
   var nn =m_mtx_trim(nn) ;         
      


       var test_point = m_nub_p(nn);       
       var test_fst=nn.toString().substr(0,1);

      

        if(test_point > 0 || test_fst=="-"){
           return message_1(7);        
                         }

      

      
       var sum_total=1;
     
          if(nn == 0 || nn==1 ){  
              sum_total=1; return sum_total;}


      var data_even_odd = n % 2;  
         if(data_even_odd ==0){    
             var data_i_star=2;}
         if(data_even_odd ==1){    
             var data_i_star=1;}



      var AA= m_new_zero_mtx(1,MTX_COL);             
      var BB= m_new_zero_mtx(1,MTX_COL);            
      var CC= m_new_zero_mtx(1,MTX_COL);            
      var data_row = AA.length;   
     
         AA[0][0]=100000;     


         

             var  value_nub=0;
             var MM = m_mtx_n_100_table();  
           
             

              
               var nn=parseFloat(nn);   
      
           
    
      
           var data_e_al =0;  

          for(var i = data_i_star ; i < (nn+1) ; i=i+2){

              var data_str = m_mtx_str_to_e_nez(i,0);    
              var data_e = m_mtx_str_to_e_nez(i,1);   

              BB=m_mtx_point_in(BB,data_str);         
            
             AA =  m_mtx_point_mul(AA,BB);        
 
             AA = m_mtx_cell_five(AA);          

                var data_e_al =data_e_al+data_e;  

                    var data_test = parseInt(AA[0][0]);

                    if(  data_test ==0){
                          
                           var  C = m_mtx_copy_col_mtx(CC,AA);   
                             var  AA = C;
                              
                                     var data_e_al =data_e_al-5;   
                  
                                         }

                                         }  


             var sum_total= m_mtx_cell_five_show(AA);     
            

               sum_total = sum_total.toString();

               sum_total_lg = sum_total.length;

                
                     sum_total = sum_total+"e+"+data_e_al;  
                
            
     return sum_total; 

   }


 function m_nna(n){              
       var nn = n.toString().trim();
   
      var nub_point= m_str_char(nn,".") ;  
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ nn=nn;}

 
   var nn =m_mtx_trim(nn) ;         



       var test_point = m_nub_p(nn);       
       var test_fst=nn.toString().substr(0,1);

      
        if(test_point > 0 || test_fst=="-"){
           return message_1(7);        

                         }
  
       var sum_total=1;
       var sum_total_1=1;
       var sum_total_2=1;
     
          if(nn == 0 || nn==1 ){  
              sum_total=1; return sum_total;}

        var sum_total_1 = m_nn(n);       
        var sum_total_2 = m_nn(n-1);     

           MTX_COL=10000;  
     
         var sum_total= m_mtx_real_mul(sum_total_1,sum_total_2);

    return sum_total; 

   }


 function m_str_power(x,nub){          
   
    var xx=x.toString().trim();
                                                  
    var xx_fst=xx.substr(0,1);

       if( xx_fst=="-"){ xx =xx.substr(1,xx.length-1);}  

          var xx_p = xx.indexOf(".");
          var xx_e = xx.indexOf("e");
  
       if( xx_e != -1 &&  xx_p != -1){                             

          var  nub_p =  xx.substr(xx_e+1,xx.length - xx_e);  
                if(nub_p ==""){var nub_p =0;}

                    nub_p = nub_p.toString().trim();

                   var flag_1 = nub_p.substr(0,1);  
                   
                   if(flag_1 =="+"){ var nub_p = nub_p.substr(1,(nub_p.length-1));}     
 
                  xx = xx.substr(0,xx_e);       

                 
                          }


         if( xx_e != -1 &&  xx_p == -1){                               

          var  nub_p =  xx.substr(xx_e+1,xx.length - xx_e);  

               if(nub_p ==""){var nub_p =0;}

               
                   nub_p = nub_p.toString().trim();

                   var flag_1 = nub_p.substr(0,1);  
                   
                   if(flag_1 =="+"){ var nub_p = nub_p.substr(1,(nub_p.length-1));}     
            
               xx = xx.substr(0,xx_e);       

            
                          }


            if( xx_e == -1 &&  xx_p == -1){         
          var  nub_p =  0 ;  
             
          var   xx = xx;       

                                }


             if( xx_e == -1 &&  xx_p != -1){         
          var  nub_p =  0 ;  
             
          var   xx = xx;       

                                }


           if( xx_fst=="-"){ xx ="-"+xx;}     
        
   if(nub==0){
               

                   return nub_p;}    
       else{

             
            xx = m_mtx_trim(xx) ;   


         return xx ;}            

  }


function m_lg_str_to_e(x){     
  var xx=x.toString().trim(); 

  var xx_fst=xx.substr(0,1);  

      if(xx_fst=="-"){ xx=xx.substr(1,xx.length-1); } 

  var xx_e =0;
  var xx_e = m_str_power(xx,0);          
  var xx_str = m_str_power(xx,1);          


  var xx_str_bf = m_nub_m(xx_str);      
  var xx_str_af = m_nub_p(xx_str);       
   
  var xx_str_bf_lg = xx_str_bf.length;

          if((xx_e + sum_total_lg-1) >0){
             xx_t = xx_str_bf.substr(0,1)+"."+ xx_str_bf.substr(1,xx_str_bf-1)+"e+"+(xx_e + sum_total_lg-1);     
                               }
          else if((xx_e + sum_total_lg-1) <0){
             xx_t = xx_str_bf.substr(0,1)+"."+ xx_str_bf.substr(1,xx_str_bf-1)+"e"+(xx_e + sum_total_lg-1);    
                               }
           else{
               xx_t = xx_str_bf.substr(0,1)+"."+ xx_str_bf.substr(1,xx_str_bf-1);

                          }

           if(xx_fst=="-"){ xx_t = "-"+xx_t; }  

    return xx_t;
}

function message_1(n){
 var nn = n;
  var message_1;
     switch(nn){
       case 1:
          message_1 = "<--  Msg : asin(x) , |x|<= 1 -->" ;
          break;
        case 2:
          message_1 = "<--  Msg : acos(x) , |x|<= 1 -->" ;
          break;
        case 3:
          message_1 = "<--  Msg : acosh(x) , x >= 1 -->" ;
          break;
        case 4:
          message_1 = "<--  Msg : atanh(x) , |x|< 1 -->" ;
          break;
        case 5:
          message_1 = "<--  Msg : ln(x) , x > 0 -->" ;
          break;
        case 6:
          message_1 = "<--  Msg : b ^p , when b<0 and p decimal point except zero , complex logarithm-->" ;
          break;
         case 7:
          message_1 = "<--  Msg : n! , n >=0 ,  n=0 or n ∈ N   -->" ;
          break; 
         case 8:
          message_1 = "<--  Msg : () ,  no data -->" ;
          break;
          case 9:
          message_1 = "<--  Msg : log(x) , x > 0 -->" ;
          break;
          case 10:
          message_1 = "<--  Msg : exp(x) value approximation to  0 -->" ;
          break;
          case 11:
          message_1 = "<--  Msg : tan(x)  x ≠ kπ+π/2  k∈Z -->" ;   
          break;
          case 12:
          message_1 = "<--  Msg : tan(x) value  to  ± infinity -->" ;
          break;
          case 13:
          message_1 = "<--  Msg : ln(0) value  to  -infinity -->" ;
          break;
          case 14:
          message_1 = "<--  Msg : log(0) value  to  -infinity -->" ;
          break;
          case 15:
          message_1 = "<--  Msg : cot(x) value  to  ± infinity -->" ;
          break;
          case 16:
          message_1 = "<--  Msg : cot(x) value  to  ± infinity -->" ;
          break;
          case 17:
          message_1 = "<--  Msg : sin(x)  if |x| > 1,000,000,000,000,000 no support -->" ;
          break;
          case 18:
          message_1 = "<--  Msg : cos(x)  if  |x| > 1,000,000,000,000,000 no support -->" ;
          break;
          case 19:
          message_1 = "<--  Msg : tan(x)  if  |x| > 1,000,000,000,000,000 no support -->" ;
          break;
          case 20:
          message_1 = "<--  Msg : sin(x)  if |x|.length > 16  no support -->" ;
          break;
          case 21:
          message_1 = "<--  Msg : cos(x)  if |x|.length > 16  no support -->" ;
          break;
           case 22:
          message_1 = "<--  Msg : tan(x)  if |x|.length > 16  no support -->" ;
          break;
           case 23:
          message_1 = "<--  Msg : exp(x)  if x > 200 digit number  no support -->" ;
          break;
          case 24:
          message_1 = "<--  Msg : sinh(x)  if |x| > 1000000000000000000  no support -->" ;
          break;
           case 25:
          message_1 = "<--  Msg : cosh(x)  if |x| > 1000000000000000000  no support -->" ;
          break;
          case 26:
          message_1 = "<--  Msg : tanh(x)  if |x| > 1000000000000000000  no support  : tanh(x)  value  approaching 1 -->" ;
          break;
          case 27:
           message_1 = "<--  Msg : tanh(x)  if |x| > 1000000000000000000  no support  : tanh(x)  value  approaching -1 -->" ;
           break;
          case 28:
            message_1 = "<--  Msg :  undefined  : x^p  when x=0   p<=0  -->" ;
            break;
          case 29:
            message_1 = "<--  Msg :  error  : y/x   when x=0    -->" ;
            break;
            case 30:
            message_1 = "<--  Msg :  error  :  .  >=2    -->" ;
            break;
            case 31:
            message_1 = "<--  Msg :  error  :  A[0][0] < 100000 ||  A[0][0] > 999999    -->" ;
            break;
            case 32:
            message_1 = "<--  Msg :  sorry : (xe+y || xe-y)  y>225 || this e type no support     -->" ;
            break;
           case 33:
            message_1 = "<--  Msg : n! ,  n > 20000000 no support ,need a lot of calculation  -->" ;    
            break;
           case 34:  
            message_1 = "<--  Msg : -1e-200<= answer <=1e-200 , inside of calculator error range -->" ;    
            break;
            case 35:
            message_1 = "<-- Msg : sorry no support and try use parentheses() -->" ;  //20200729
            break;
       default:
               }
 return message_1; 
 }


  function m_del4_2f_char(s,c){     
    
     var ss=s;
     var cc=c;
     var ss_lg=ss.length; 
     var cc_lg=cc.length;
 
     var pos=ss.lastIndexOf(cc);
     var partstring = ss.substr((pos+cc_lg),ss_lg);

   return partstring ; 
    }


 function m_count_newline(){     
    var lg = string_lg_1();
    
    var input_str = calc.input.value ;


    var rten = "";  
    var arr  =[];
      for(var i=1 ; i<=lg ;i++){
         var rten = input_str.charCodeAt(i);  
             if(rten ==10 || rten ==13){
                   arr.push(i);
                                       }

                                }
    
     return arr;

  }

function m_count_semicolon(){     
    var lg = string_lg_1();
    
    var input_str = calc.input.value ;


    var rten = "";  
    var arr  =[];
      for(var i=1 ; i<=lg ;i++){
         var rten = input_str.charCodeAt(i);  
             if(rten ==59 ){
                   arr.push(i);
                                       }

                                }
   
     return arr;

  }




function m_replace(str_s ,old_s ,new_s ){          

    var ss = str_s.toString().trim();
    var oo = old_s.toString().trim();  
    var nn = new_s.toString().trim();  
    var ss_lg = ss.length;
    var oo_lg = oo.length;  
    var nn_lg = nn.length;  
    var new_ss = ss ;       
    var fg =0 ;            

      for(var i=0 ; i < ss_lg ; i++){
  
       var oo_part = ss.substr(i,oo_lg);

           if(oo_part == oo){
 
               var new_ss = new_ss.substr(0, i+fg) + nn  +new_ss.substr(i+oo_lg + fg , ss_lg-1+fg);

               
                 var fg = fg+(nn_lg-oo_lg);    

                            }

                                     }
       
     return new_ss;

}


function m_replace_star(str_s ){          
    var str_1=str_s;

 
    var str_new = m_replace(str_1 ,')m',')*m');

        for(var i=0;i<=9;i++){

          str_new = m_replace(str_new ,i+'m',i+'*m');
            }
  
   return str_new;
}



function m_str_sub_ngt_bf(str){   
var str_1 = str.toString().trim();
    var str_1_lg = str_1.length;
    var str_fst = str_1.substr(0,1);
    var str_sec = str_1.substr(1,1);
            if(str_fst=="-"){
                   var  str_1="0"+str_1;  }              
             str_1 = str_1.replace(/\(-/g , "\(0-");    
             str_1 = str_1.replace(/n-/g , "nQ");      
             str_1 = str_1.replace(/s-/g , "sQ");      
             str_1 = str_1.replace(/y-/g , "yQ");      
             str_1 = str_1.replace(/p-/g , "pQ");     
             str_1 = str_1.replace(/,-/g , ",Q");      
             str_1 = str_1.replace(/\^-/g , "\^Q");      
             str_1 = str_1.replace(/e-/g , "eQ");      
             str_1 = str_1.replace(/e\+/g , "e");      
   return str_1;
 }

function m_str_sub_ngt_bf_minus(str){   
    var str_1 = str.toString().trim();
    var str_1_lg = str_1.length;
    var str_fst = str_1.substr(0,1);
    var str_sec = str_1.substr(1,1);
             str_1 = str_1.replace(/n-/g , "nQ");      
             str_1 = str_1.replace(/s-/g , "sQ");      
             str_1 = str_1.replace(/y-/g , "yQ");      
             str_1 = str_1.replace(/p-/g , "pQ");      
             str_1 = str_1.replace(/,-/g , ",Q");      
             str_1 = str_1.replace(/\^-/g , "\^Q");      
             str_1 = str_1.replace(/e-/g , "eQ");      
             str_1 = str_1.replace(/e\+/g , "e");      
    return str_1;
 }



function m_str_spec_part_bf(str ,spec){           
                                                   
     var str_1 = str.toString().trim();
     var spec_1= spec;

                
          str_1 =  m_str_sub_ngt_bf(str_1) ;     
    
        var pos = str_1.indexOf(spec_1) ; 
                                                   

     var mark_1 =str_1[pos - 1];        
     var count_1 = 1 ;
     var count_mark = pos ;

     


          if(mark_1 ==")"){
            

           for(var i= pos-2;0 <= i  ; i=i-1){
              var mark_ref = str_1[i];

                 if(mark_ref ==")"){
                     count_1 = count_1 +1 ;}
                 if(mark_ref =="("){
                     count_1 = count_1-1 ;}
                                            
                  if(count_1==0){
                     var count_mark = i ;
                       i=-1;                                     
                                          }
                                           }
                           }

            
          if((mark_1 >=0 && mark_1<=9)|| mark_1=="π"|| mark_1=="°") {  
             var count_mark = pos-1;   
           for(var i = pos - 2; 0 <= i   ; i=i-1){
              var mark_ref = str_1[i];
                                    
                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='.'|| mark_ref=='Q' || mark_ref=='e'){     
                        var count_mark = i ;
                                                       }
                   else{  

                     
                           i=-1 ;                                
                                             }     
                                                    
                                                  }
                                  }
   
         var str_part_b= str_1.substring(count_mark,pos);


      
       
     return str_part_b;

}

function m_str_spec_part_bf_mn(str ,spec){            
     var str_1 = str.toString().trim();
     var spec_1= spec;
     var str_bf_1_bit ="";    //20200728
     var str_bf_2_bit ="";
     var ans_1="";
       var str_1 = str_1.replace(/eQ/g , "eN");    
           str_1 =  m_str_sub_ngt_bf(str_1) ;     
       var pos = str_1.indexOf(spec_1) ; 
     var mark_1 =str_1[pos - 1];        
     var count_1 = 1 ;
     var count_mark = pos ;

          if(mark_1 ==")"){
            for(var i= pos-2;0 <= i  ; i=i-1){
              var mark_ref = str_1[i];

                 if(mark_ref ==")"){
                     count_1 = count_1 +1 ;}
                 if(mark_ref =="("){
                     count_1 = count_1-1 ;}
                                            
                  if(count_1==0){
                     var count_mark = i ;
                       i=-1;                                     
                                          }
                                           }
                           }
        if((mark_1 >=0 && mark_1<=9)) {  
            var count_mark = pos-1;   
           for(var i = pos - 2; 0 <= i   ; i=i-1){
              var mark_ref = str_1[i];
                if((mark_ref <= 9 && mark_ref >= 0 )|| mark_ref=='e'||mark_ref =='°'  || mark_ref =='π' || mark_ref=='.'|| mark_ref=='N'){     
                        var count_mark = i ;
                                                       }
                   else{  
                    
                           i=-1 ;                                
                                             }     
                                                    
                                                  }
                                 }
 
         var str_part_b= str_1.substring(count_mark,pos);
         var str_part_b = str_part_b.replace(/eN/g , "eQ");    
      
     return str_part_b;
}

function m_str_spec_part_bf_mul(str ,spec){          
  var str_1 = str.toString().trim();
     var spec_1= spec;
          str_1 =  m_str_sub_ngt_bf(str_1) ;      
        var pos = str_1.indexOf(spec_1) ; 
      var mark_1 =str_1[pos - 1];        
     var count_1 = 1 ;
     var count_mark = pos ;
        if(mark_1 ==")"){
          for(var i= pos-2;0 <= i  ; i=i-1){
              var mark_ref = str_1[i];

                 if(mark_ref ==")"){
                     count_1 = count_1 +1 ;}
                 if(mark_ref =="("){
                     count_1 = count_1-1 ;}
                                            
                  if(count_1==0){
                     var count_mark = i ;
                       i=-1;                                     
                                          }
                                           }
                           }
           
          if((mark_1 >=0 && mark_1<=9)|| mark_1=="π"|| mark_1=="°"|| mark_1=="*"|| mark_1=="/") {  
             var count_mark = pos-1;   
           for(var i = pos - 2; 0 <= i   ; i=i-1){
              var mark_ref = str_1[i];
                  if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='.'|| mark_ref=='Q' || mark_ref=='e'|| mark_ref=='*'|| mark_ref=='/'){     
                        var count_mark = i ;
                                                       }
                   else{  
                          i=-1 ;                                
                                             }     
                                                }
                                  }
        var str_part_b= str_1.substring(count_mark,pos);
     return str_part_b; 

}



function m_str_spec_part_af(str ,spec){          
var str_1 = str.toString().trim();
     var str_0 =str_1 ;                    
     var str_a_lg = str_1.length;
     var spec_1= spec;
     var spec_a_lg = spec_1.length;
      if( spec_1=="π" || spec_1=="°"){ var ans_1="" ; return ans_1 ;}   
         var  str_1= m_str_sub_ngt_bf(str_1);   
     var pos = str_1.indexOf(spec_1) ;  
     var mark_1 =str_1[pos +spec_a_lg];           
     var count_a = 1 ;
     var count_mark=2500;  
          if(mark_1 =="("){
           for(var i= (pos + spec_a_lg+1) ; i < str_a_lg+1  ; i++){     
              var mark_ref = str_1[i];
                 if(mark_ref =="("){
                     count_a = count_a +1 ;}
                 if(mark_ref ==")"){
                     count_a = count_a-1 ;}
                 if(count_a==0){
                     var count_mark = i+1 ;
                       i = str_a_lg ;                                     
                                 }
                                                   }
                           }
        if(mark_1 >=0 && mark_1<=9) {
           for(var i = pos + spec_a_lg;  i < str_a_lg+1  ; i++){   //str_a_lg+1
              var mark_ref = str_1[i];
                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='.'|| mark_ref=='Q'|| mark_ref=='e' ) {      
                                                       }
                   else{  
                     var count_mark = i ;
                         i= str_a_lg;                      }      
                                                    
                                                  }
                                 }
        
           if(mark_1 =='.') {                                     
           for(var i = pos + spec_a_lg+1;  i < str_a_lg+1  ; i++){   
              var mark_ref = str_1[i];
                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='Q'|| mark_ref=='e') {      
                                                      }
                   else{  

                     var count_mark = i ;

                         i= str_a_lg;                      }       
                                                    
                                                  }
                                  }

         if(mark_1 =='π') {  var count_mark = pos+spec_a_lg+1 } ;   
                 if(mark_1 =="-") {
            for(var i = pos + spec_a_lg+1;  i < str_a_lg+1  ; i++){        
              var mark_ref = str_1[i];
                 if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π'|| mark_ref=='.' || mark_ref=='Q'|| mark_ref=='e') {      
                                                       }
                   else{  
                     var count_mark = i ;
                       i= str_a_lg;                      }       
                                                    
                                                  }
                                  }
           if(mark_1 =='^') {  var count_mark = pos+spec_a_lg } ;      
         var str_part_b= str_1.substring(pos+spec_a_lg ,count_mark);     
         
     return str_part_b;
  
}



function m_str_spec_part_af_mul(str ,spec){          
    var str_1 = str.toString().trim();
     var str_a_lg = str_1.length;
     var spec_1= spec;
     var spec_a_lg = spec_1.length;
     if( spec_1!="π" && spec_1!="°"){ var ans_1=""; return ans_1 ;}   
     var pos = str_1.indexOf(spec_1) ;  
     var mark_1 =str_1[pos +spec_a_lg];         
     var count_a = 1 ;
     var count_mark=pos+spec_a_lg;  
        if((mark_1 =="*" || mark_1=="/")) {     　　
           for(var i = pos + spec_a_lg;  i < str_a_lg+1  ; i++){     
             var mark_ref = str_1[i];
                       if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='.'|| mark_ref=='Q'|| mark_ref=='e'|| mark_ref=='＊'|| mark_ref=='/' ) {      
                                                       }
                   else{  
                     var count_mark = i ;    
                         i= str_a_lg;                      }      
                                                    
                                                  }  

                                  } 
            else{ var ans_1=""; return ans_1 ;}   
        var str_part_b= str_1.substring(pos+spec_a_lg ,count_mark);    
     return str_part_b;
  
}

function m_str_spec_part_af_div(str ,spec){          
    var str_1 = str.toString().trim();
     var str_0 =str_1 ;                    
     var str_a_lg = str_1.length;
     var spec_1= spec;
     var spec_a_lg = spec_1.length;
      if( spec_1=="π" || spec_1=="°"){ var ans_1="" ; return ans_1 ;}   
         var  str_1= m_str_sub_ngt_bf(str_1);  
     var pos = str_1.indexOf(spec_1) ;  
     var mark_1 =str_1[pos +spec_a_lg];           
     var count_a = 1 ;
     var count_mark=2500;  
          if(mark_1 =="("){
           for(var i= (pos + spec_a_lg+1) ; i < str_a_lg+1  ; i++){     
              var mark_ref = str_1[i];
                 if(mark_ref =="("){
                     count_a = count_a +1 ;}
                 if(mark_ref ==")"){
                     count_a = count_a-1 ;}
                 if(count_a==0){
                     var count_mark = i+1 ;
                       i = str_a_lg ;                                     
                                 }
                                                   }
                           }
 
          if(mark_1 >=0 && mark_1<=9) {
           for(var i = pos + spec_a_lg;  i < str_a_lg+1  ; i++){   
              var mark_ref = str_1[i];
                   if((mark_ref <= 9 && mark_ref >= 0 ) || mark_ref=='.'|| mark_ref=='Q'|| mark_ref=='e'|| mark_ref =='°' || mark_ref =='π') {         
                                                       }
                   else{  
                     var count_mark = i ;
                         i= str_a_lg;                      }       
                                                    
                                                  }
                                  }
          
           if(mark_1 =='.') {                                     
           for(var i = pos + spec_a_lg+1;  i < str_a_lg+1  ; i++){   
              var mark_ref = str_1[i];
                   if((mark_ref <= 9 && mark_ref >= 0 )|| mark_ref=='Q'|| mark_ref=='e'|| mark_ref =='°' || mark_ref =='π') {       
                                                      }
                   else{  
                     var count_mark = i ;
                         i= str_a_lg;                      }      
                                                    
                                                  }
                                  }
          if(mark_1 =='π'|| mark_1 =='°') {  var count_mark = pos+spec_a_lg+1 } ;   
              if(mark_1 =="-") {
            for(var i = pos + spec_a_lg+1;  i < str_a_lg+1  ; i++){        
              var mark_ref = str_1[i];
                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π'|| mark_ref=='.' || mark_ref=='Q'|| mark_ref=='e') {                                                            }
                   else{  
                     var count_mark = i ;
                        i= str_a_lg;                      }       
                                                    
                                                  }
                                  }
   
           if(mark_1 =='^') {  var count_mark = pos+spec_a_lg } ;      
          var str_part_b= str_1.substring(pos+spec_a_lg ,count_mark);    
     return str_part_b;
 
}


function m_str_spec_part_bf_inv(str ,spec){   //20200730   
     var str_1 = str.toString().trim();
     var spec_1= spec;
         str_1 =  m_str_sub_ngt_bf(str_1) ;     
     var pos = str_1.lastIndexOf(spec_1) ; 
     var mark_1 =str_1[pos - 1];        
     var count_1 = 1 ;
     var count_mark = pos ;
          if(mark_1 ==")"){
           for(var i= pos-2;0 <= i  ; i=i-1){
              var mark_ref = str_1[i];
                 if(mark_ref ==")"){
                     count_1 = count_1 +1 ;}
                 if(mark_ref =="("){
                     count_1 = count_1-1 ;}
                  if(count_1==0){
                     var count_mark = i ;
                       i=-1;                                     
                                          }
                                           }
                           }
          if((mark_1 >=0 && mark_1<=9)|| mark_1=="π") {  
             var count_mark = pos-1;   
           for(var i = pos - 2; 0 <= i   ; i=i-1){
              var mark_ref = str_1[i];
                  if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='.'|| mark_ref=='e'){  //20200730   
                        var count_mark = i ;
                                                       }
                   else{  
                           i=-1 ;                                
                                             }     
                                                  }
                                  }
         var str_part_b= str_1.substring(count_mark,pos);
    return str_part_b;
}


function m_str_spec_part_af_inv(str ,spec){          
     var str_1 = str.toString().trim();
     var str_a_lg = str_1.length;
     var spec_1= spec;
     var spec_a_lg = spec_1.length;
     var pos = str_1.lastIndexOf(spec_1) ;  
     var mark_1 =str_1[pos +spec_a_lg];        
     var count_a = 1 ;
     var count_mark=2500;  
         if(mark_1 =="("){
            for(var i= (pos + spec_a_lg+1) ; i < str_a_lg  ; i++){
              var mark_ref = str_1[i];
                 if(mark_ref =="("){
                     count_a = count_a +1 ;}
                 if(mark_ref ==")"){
                     count_a = count_a-1 ;}
                 if(count_a==0){
                     var count_mark = i+1 ;
                       i = str_a_lg ;                                     
                                 }
                                                   }
                           }
    
          if(mark_1 >=0 && mark_1<=9) {
           for(var i = pos + spec_a_lg;  i < str_a_lg  ; i++){
              var mark_ref = str_1[i];
                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='.'|| mark_ref=='Q'|| mark_ref=='e' ) {      
                                                      }
                   else{  
                     var count_mark = i ;
                         i= str_a_lg;                      }       
                                                    
                                                  }
                                  }
          
           if(mark_1 =='.') {                                     
           for(var i = pos + spec_a_lg+1;  i < str_a_lg  ; i++){
              var mark_ref = str_1[i];
                  if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='Q'|| mark_ref=='e') {      
                                                     }
                   else{  
                     var count_mark = i ;
                         i= str_a_lg;                      }       
                                                    
                                                  }
                                  }
          if(mark_1 =='π') {  var count_mark = pos+spec_a_lg+1 } ;   
              if(mark_1 =="-") {
            for(var i = pos + spec_a_lg+1;  i < str_a_lg  ; i++){
              var mark_ref = str_1[i];
                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π'|| mark_ref=='.' || mark_ref=='Q'|| mark_ref=='e') {      
                                                      }
                   else{  
                     var count_mark = i ;
                         i= str_a_lg;                      }     
                                                    
                                                  }
                                 }
           if(mark_1 =='^') {  var count_mark = pos+spec_a_lg } ;     
       var str_part_b= str_1.substring(pos+spec_a_lg ,count_mark);    
     return str_part_b;
}



  function m_fact(str){                                  
    var str_1=str;
    var part_bf = m_str_spec_part_bf_mn(str_1 ,'!');
    var part_bf_lg = part_bf.length;

     if(part_bf_lg > 0 &&  part_bf[0] =='(' ){
        str_1 = str_1.replace(part_bf+'!' , "m_n"+part_bf ) ;  }            

     if(part_bf_lg > 0 &&  part_bf[0] !='(' ){
        str_1 = str_1.replace(part_bf+'!' , "(m_n("+part_bf+'))');                 

                        }
    
         if(part_bf_lg == 0){  str_1 = str_1.replace(part_bf+'!' , "(m_n("+1+'))'); }   

     return str_1;

   }


 function m_star(str){                                 
  
    var str_1 = str;
 
    var part_bf = m_str_spec_part_bf(str_1 ,"π");  
    var part_bf_lg = part_bf.length;

    if(part_bf_lg > 0 ){
        str_1 = str_1.replace(part_bf+"π" , part_bf+'* 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680661300192787661119590921642019893809525720106548586' ) ; }          
         
  
    if(part_bf_lg == 0){  str_1 = str_1.replace(part_bf+"π" , part_bf+'3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680661300192787661119590921642019893809525720106548586' ) ; }     
     
     return str_1;

   }


function m_star_rem(str,nub){         
    var str_1 = str;
    var nubb = nub;
    var pi_index = str_1.indexOf("π");   
     
       if(pi_index ==-1){ var ans_1 = str_1; return ans_1;}  

    var str_1 = str_1.replace("*π","π");  
    var str_1 = str_1.replace("e+","e");  
    var part_bf = m_str_spec_part_bf(str_1 ,"π"); 
        var star_str_lg = str_1.length 
        var part_bf_lg = part_bf.length ; 
        var pi_index = str_1.indexOf("π");               
        var str_bf = str_1.substr(0,pi_index -part_bf_lg);  
        var str_af = str_1.substr(pi_index+1 ,star_str_lg-pi_index-1);  
                if(pi_index ==-1){  return str; } ;  
                   var bf_op_data = pi_index-part_bf_lg-1 ;
                     if(bf_op_data ==-1){ var bf_op ="";}
                      else {var bf_op = str_1.substr(pi_index-part_bf_lg-1,1); } 

                    var af_op = str_1.substr(pi_index+1,1);  
                    var af2_str_bf = str_bf.substr(str_bf.length-2,2);  
                    var bf2_str_af = str_af.substr(0,2);
              if( bf_op =="*" || bf_op =="/" || bf_op =="^"  ||af_op =="*" || af_op =="/" || af_op =="^" || af2_str_bf =="((" || af2_str_bf =="/("|| af2_str_bf =="*("|| af2_str_bf =="^(" || bf2_str_af =="))" || bf2_str_af ==")*" ||bf2_str_af ==")/" ||bf2_str_af ==")^" ){
              
                  str_1 = str_bf + part_bf +"π"+ str_af;
           
                         return str_1; 
                   
                   }
               
    var part_af = m_str_spec_part_af(str_1 ,"π");
       var part_bf = part_bf.replace("Q","-");  
   
          var nub_point= m_str_char(part_bf,".") ;  

           if(nub_point >2){        
              var ans_1 = message_1(30);   

                           return  ans_1  }

           var part_bf  = m_str_e_to_str(part_bf);      
      
    var bf_pos_pot = part_bf.indexOf(".");   
    var part_bf_lg = part_bf.length;

       if(bf_pos_pot ==-1){ var part_bf = part_bf.substr(part_bf_lg-1,1); 

                  if(part_bf % 2 == 0) { var part_bf = 0 ;}
                  else { var part_bf = 1 ;}

                     if(nubb==1){ var part_bf = 0 ;}  

                           }                                                      

       if(bf_pos_pot !=-1){ part_bf = part_bf.substr(bf_pos_pot-1,part_bf_lg-bf_pos_pot+1);  
                             var fst_part_bf =  part_bf.substr(0,1);         

                                 if(fst_part_bf % 2 == 0) { var part_bf = "0" + part_bf.substr(1,part_bf_lg -1) ;}   
                                     else { var part_bf = "1" + part_bf.substr(1,part_bf_lg -1);}                     
                                        
                                        if(nubb==1){  var part_bf = "0" + part_bf.substr(1,part_bf_lg -1) ;}    

                                                                                            }  

     if(part_bf_lg ==0){ var part_bf= "P" ; }                  
     if(part_bf_lg !=0 && part_bf != 0 && part_bf != 1 ){ var part_bf= part_bf+"P" ; }   
     if(part_bf_lg !=0 && part_bf == 0){ var part_bf= "0";}
     if(part_bf_lg !=0 && part_bf == 1){ var part_bf= "P" ; }   
        
              var str_new ="";
              var str_new = str_bf + part_bf + str_af;
               if(str_new=="0-0" || str_new=="-0" ){ var str_new="0";}

                     var str_new_lg = str_new.length;
                     var str_new_fst_sec = str_new.substr(0,2); 
                     var str_new_lst_sec = str_new.substr(str_new_lg-2,2);   
                     if(str_new_fst_sec =="0-" ){ str_new = str_new.substr(1,str_new_lg-1);}    
                     if(str_new_lst_sec =="-0" ){ str_new = str_new.substr(0,str_new_lg-2);}   
 

     return str_new;

   }



function m_star_deg(str){                                 
  
    var str_1 = str;
   
    var part_bf = m_str_spec_part_bf(str_1 ,"°");  
          part_bf = part_bf.replace("Q","\-");    
 
    var part_bf_lg = part_bf.length;
      
          if(part_bf_lg > 0 ){
              str_1 = str_1.replace(part_bf+"°" , part_bf+'\* 0.017453292519943295769236907684886127134428718885417254560971914401710091146034494436822415696345094822123044925073790592483854692275281012398474218934047117319168245015010769561697553581238605305168788691271172087032963589602642490187704350918173343939698047594019224158946968481378963297818112495229298469927814479531045416008449560904606967176196468710514390888951836280826780369563245260844119508941294762613143108844183845478429899625621072806214155969235444237497596399365292916062377434350066384054631518680225870239366785527479973470762170567665894131682058551206534962093068803748991487052250733336489595251464226821032063015321053384297984326230380227229027519056369719918728059957109384771797455666422845161233115911302323110075720970951722002881706729722222213183211388616998509626756090658861246996974149490570236235045851914916862566284378727833350765770849369930740046563447873209273040575545852724604197048506442015910457521042187510876565876558512062371147850010710425617755051202334438544973651117030477' ) ; }           
         
    if(part_bf_lg == 0){  str_1 = str_1.replace(part_bf+"°" , part_bf+'0.017453292519943295769236907684886127134428718885417254560971914401710091146034494436822415696345094822123044925073790592483854692275281012398474218934047117319168245015010769561697553581238605305168788691271172087032963589602642490187704350918173343939698047594019224158946968481378963297818112495229298469927814479531045416008449560904606967176196468710514390888951836280826780369563245260844119508941294762613143108844183845478429899625621072806214155969235444237497596399365292916062377434350066384054631518680225870239366785527479973470762170567665894131682058551206534962093068803748991487052250733336489595251464226821032063015321053384297984326230380227229027519056369719918728059957109384771797455666422845161233115911302323110075720970951722002881706729722222213183211388616998509626756090658861246996974149490570236235045851914916862566284378727833350765770849369930740046563447873209273040575545852724604197048506442015910457521042187510876565876558512062371147850010710425617755051202334438544973651117030477' ) ; }   
    
     return str_1;

   }

function m_str_spec_part_af_minus(str ,spec){         
     var str_1 = str.toString().trim();
     var str_0 =str_1 ;                    
     var str_a_lg = str_1.length;
     var spec_1= spec;                      
     var spec_a_lg = spec_1.length;
      if( spec_1=="π" || spec_1=="°"){ var ans_1=str_1 ; return ans_1 ;}   
         var  str_1= m_str_sub_ngt_bf_minus(str_1);   
         var nn_end = m_str_spc_count(str_1,spec_1);
    var nn = 0;
    var nn_end = 0;
        var nn_end = m_str_spc_count(str_1,spec_1);   
     for(var nn=0; nn < nn_end ;nn++){            
     var str_a_lg = str_1.length;
     var spec_1= spec;                      
     var spec_a_lg = spec_1.length;
     var pos = str_1.indexOf(spec_1) ;  
     var mark_1 =str_1[pos +spec_a_lg];          
     var count_a = 1 ;
     var count_mark=2500;  
          if(mark_1 =="("){
              var ans_1=str_1 ; return ans_1 ;}   
         if((mark_1 >=0 && mark_1<=9)||(mark_1=="Q")) {          
           for(var i = pos + spec_a_lg;  i < str_a_lg+1  ; i++){   
              var mark_ref = str_1[i];
                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='.'|| mark_ref=='Q'|| mark_ref=='e' ) {      
                                                     }
                   else{  
                     var count_mark = i ;
                         i= str_a_lg;                      }      
                                                    
                                                  }
                                  }
         
           if(mark_1 =='.') {                                     
           for(var i = pos + spec_a_lg+1;  i < str_a_lg+1  ; i++){   
              var mark_ref = str_1[i];
                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='Q'|| mark_ref=='e') {      
                                                       }
                   else{  
                     var count_mark = i ;
                         i= str_a_lg;                      }       
                                                    
                                                  }
                                  }
          if(mark_1 =='π'|| mark_1 =='°') {  var count_mark = pos+spec_a_lg+1 } ;   
         var str_part_fst= str_1.substring(0 ,pos+spec_a_lg);              
         var str_part_b= str_1.substring(pos+spec_a_lg ,count_mark);     
         var str_part_lst= str_1.substring((pos+spec_a_lg+str_part_b.length) ,str_1.length);     
         var str_part_fst=  str_part_fst.replace(spec_1 , "TTT" );     
         var str_1=str_part_fst+"("+str_part_b+")"+str_part_lst; 
                  } 
            var str_2 = str_1.replace(/Q/g , "-");        
            var str_3 = str_2.replace(/TTT/g ,spec_1);     
             var str_1 = str_3 ;    
          return str_3 ;
}

function m_str_spec_part_af_minus_sum(str){       
     var str_1 = str.toString().trim();
     var str_1_lg = str_1.length;
     var str_2 =""
     var str_3 =""
     var spec ="";
     var i=0
   for(var i=0 ; i < 15 ;i ++){    
      if(i==0){ var spec = "asinh" ;}
      if(i==1){ var spec = "acosh" ;}
      if(i==2){ var spec = "atanh" ;}
      if(i==3){ var spec = "sinh" ;}
      if(i==4){ var spec = "cosh" ;}
      if(i==5){ var spec = "tanh" ;}
      if(i==6){ var spec = "asin" ;}
      if(i==7){ var spec = "acos" ;}
      if(i==8){ var spec = "atan" ;}
      if(i==9){ var spec = "sin" ;}
      if(i==10){ var spec = "cos" ;}
      if(i==11){ var spec = "tan" ;}
      if(i==12){ var spec = "exp" ;}
      if(i==13){ var spec = "ln" ;}
      if(i==14){ var spec = "log" ;}
    var spec_lg = spec.length;
     var str_2 =  m_str_spec_part_af_minus(str_1 ,spec);
      if(i==0){ var str_3 = str_2.replace(/spec/g ,"aaaaa"); }   
      if(i==1){ var str_3 = str_2.replace(/spec/g ,"bbbbb"); }   
      if(i==2){ var str_3 = str_2.replace(/spec/g ,"ccccc"); }   
      if(i==3){ var str_3 = str_2.replace(/spec/g ,"dddd"); }    
      if(i==4){ var str_3 = str_2.replace(/spec/g ,"eeee"); }    
      if(i==5){ var str_3 = str_2.replace(/spec/g ,"ffff"); }    
      if(i==6){ var str_3 = str_2.replace(/spec/g ,"gggg"); }    
      if(i==7){ var str_3 = str_2.replace(/spec/g ,"hhhh"); }    
      if(i==8){ var str_3 = str_2.replace(/spec/g ,"iiii"); }    
      if(i==9){ var str_3 = str_2.replace(/spec/g ,"jjj"); }     
      if(i==10){ var str_3 = str_2.replace(/spec/g ,"kkk"); }    
      if(i==11){ var str_3 = str_2.replace(/spec/g ,"lll"); }    
      if(i==12){ var str_3 = str_2.replace(/spec/g ,"mmm"); }     
      if(i==13){ var str_3 = str_2.replace(/spec/g ,"nn"); }    
      if(i==14){ var str_3 = str_2.replace(/spec/g ,"ppp"); }    
     var str_1 = str_3 ;
                              } 
      var str_1 =  str_3.replace(/"aaaaa"/g ,"asinh");    
      var str_1 =  str_3.replace(/"bbbbb"/g ,"acosh");
      var str_1 =  str_3.replace(/"ccccc"/g ,"atanh");
      var str_1 =  str_3.replace(/"dddd"/g ,"sinh");
      var str_1 =  str_3.replace(/"eeee"/g ,"cosh");
      var str_1 =  str_3.replace(/"ffff"/g ,"tanh");
      var str_1 =  str_3.replace(/"gggg"/g ,"asin");
      var str_1 =  str_3.replace(/"hhhh"/g ,"acos");
      var str_1 =  str_3.replace(/"iiii"/g ,"atan");
      var str_1 =  str_3.replace(/"jjj"/g ,"sin");
      var str_1 =  str_3.replace(/"kkk"/g ,"cos");
      var str_1 =  str_3.replace(/"lll"/g ,"tan");
      var str_1 =  str_3.replace(/"mmm"/g ,"exp");
      var str_1 =  str_3.replace(/"nn"/g ,"ln");
      var str_1 =  str_3.replace(/"ppp"/g ,"log");
  return str_1 ;
}

function m_fun_aft(str,spec1,spec2){                   
   var str_1=str;                                               
   var spec_1=spec1;
   var spec_2=spec2;
   var part_aft =  m_str_spec_part_af(str_1 ,spec_1);
    var part_aft_lg = part_aft.length;
 
      if(part_aft_lg > 0 ){

        str_1 = str_1.replace(spec_1+part_aft , "("+spec2 +"("+part_aft+')'+")" );              
 
                        }
    
      if(part_aft_lg == 0 && spec2 =="eee" ){  str_1 = str_1.replace(spec_1+part_aft , "("+spec2 +"("+1+')'+")" );  }   
      if(part_aft_lg == 0 && spec2 !="eee" ){  str_1 = "error,  not data" ; }
       
     return str_1;
}



function m_star_deg_rem(str){                     
 
    var str_1 = str;
     var dg_index = str_1.indexOf("°");   
       if(dg_index ==-1){ var ans_1 = str_1; return ans_1;}  
    var str_1 = str_1.replace("*°","°");  
    var str_1 = str_1.replace("e+","e");  
  
    var part_bf = m_str_spec_part_bf(str_1 ,"°"); 
        var star_str_lg = str_1.length 
        var part_bf_lg = part_bf.length ; 
        var dg_index = str_1.indexOf("°");               
        var str_bf = str_1.substr(0,dg_index -part_bf_lg);  
        var str_af = str_1.substr(dg_index+1 ,star_str_lg-dg_index-1);  
 
                if(dg_index ==-1){  return str; } ;  
                  var bf_op_data = dg_index-part_bf_lg-1 ;
                     if(bf_op_data ==-1){ var bf_op ="";}
                      else {var bf_op = str_1.substr(dg_index-part_bf_lg-1,1); } 
 
                    var af_op = str_1.substr(dg_index+1,1);  
                    var af2_str_bf = str_bf.substr(str_bf.length-2,2);  
                    var bf2_str_af = str_af.substr(0,2);
              if( bf_op =="*" || bf_op =="/" || bf_op =="^"  ||af_op =="*" || af_op =="/" || af_op =="^" || af2_str_bf =="((" || af2_str_bf =="/("|| af2_str_bf =="*("|| af2_str_bf =="^(" || bf2_str_af =="))" || bf2_str_af ==")*" ||bf2_str_af ==")/" ||bf2_str_af ==")^" ){

                  part_bf = part_bf.replace("°" , "D");      
                  str_1 = str_bf + part_bf +"°"+ str_af;

                        return str_1; 
                    
                   }
               
    var part_af = m_str_spec_part_af(str_1 ,"°");

      var part_bf = part_bf.replace("Q","-");  
           var nub_point= m_str_char(part_bf,".") ;  

           if(nub_point >2){        
              var ans_1 = message_1(30);   

                           return  ans_1  }

           var part_bf  = m_str_e_to_str(part_bf);     

    var bf_pos_pot = part_bf.indexOf(".");   
    var part_bf_lg = part_bf.length;
         
                   var part_bf_b1 = m_nub_m(part_bf);      
                   var part_bf_a1 = m_nub_p(part_bf);       
                   var part_bf_a1 = part_bf_a1.toString().substr(1,part_bf_a1.length-1); 
                    
                  if(part_bf_b1==""){ var part_bf_b1 =1 ;}                                 
                   var part_bf_b = m_mtx_real_div(part_bf_b1 ,360 );      
                   var part_bf_b  = m_str_e_to_str(part_bf_b);       
                   var part_bf_bb = m_nub_p(part_bf_b);               
                   var part_bf_bbb = m_mtx_real_mul(part_bf_bb ,360 ); 
                       
                   var part_bf_bbbb = m_fix( part_bf_bbb,0) ; 

                   var fst_part_bf = part_bf.substr(0,1);

                     if(fst_part_bf =="-"){
                           var part_bf = "-"+part_bf_bbbb.toString()+part_bf_a1.toString();}     
                     else{ var part_bf = part_bf_bbbb.toString()+part_bf_a1.toString();}

      if(part_bf_lg ==0){ var part_bf= "D" ; }                  
     if(part_bf_lg !=0 && part_bf != 0 && part_bf != 1 ){ var part_bf= part_bf+"D" ; }   
     if(part_bf_lg !=0 && part_bf == 0){ var part_bf= "0";}
     if(part_bf_lg !=0 && part_bf == 1){ var part_bf= "D" ; }   

              var str_new ="";
              var str_new = str_bf + part_bf + str_af;

                if(str_new=="0-0" || str_new=="-0" ){ var str_new="0";}
                     var str_new_lg = str_new.length;
                     var str_new_fst_sec = str_new.substr(0,2); 
                     var str_new_lst_sec = str_new.substr(str_new_lg-2,2);   

                     if(str_new_fst_sec =="0-" ){ str_new = str_new.substr(1,str_new_lg-1);}    
                     if(str_new_lst_sec =="-0" ){ str_new = str_new.substr(0,str_new_lg-2);}    

     return str_new;

   }


function m_star_deg_rem_many(str){                                 
   
    var str_1 = str;
    
    var nub_1 = m_str_spc_count(str_1,"°");   

     var  str_2 ="" ; 

    for(var i=0; i< nub_1 ; i++){

         var str_2 =  m_star_deg_rem(str_1);   
            var str_1 = str_2 ;  

               }
            str_1 = str_1.toString().replace( /D/g, "°") ;  
     return  str_1;

  }




function m_hat_bf_aft(str,spec1,spec2){                   
  var str_1=str;                                              
   var spec_1=spec1;
   var spec_2=spec2;
   var part_aft ="";
  
   var part_bf = m_str_spec_part_bf(str_1 ,spec1);
   var part_bf_lg = part_bf.length;
   var part_aft =  m_str_spec_part_af(str_1 ,spec_1);
   var part_aft_lg = part_aft.length;

   var part_aft_1=part_aft;
   var part_bf_1=part_bf;

   if(part_aft[0] =='(' && part_aft[part_aft_lg-1] ==')'){    
          part_aft_1= part_aft.substr(1,part_aft_lg-2);
    }
    else{  part_aft_1= part_aft;}
 
   if(part_bf[0] =='(' && part_bf[part_bf_lg-1] ==')'){    
          part_bf_1= part_bf.substr(1,part_bf_lg-2);
    }
    else{part_bf_1= part_bf;}
   if((part_bf_lg > 0)  && (part_aft_lg > 0 )){
       
        str_1 = str_1.replace(part_bf+spec_1+part_aft , "("+spec2+"("+part_bf_1 +','+part_aft_1+")"+")" ) ;

           
                                                        }        
 
     if(part_aft_lg == 0 || part_bf_lg == 0 ){  str_1 = "error,  not data" ; }
    return str_1;

}


function m_hat_bf_aft_inv(str,spec1,spec2){             
  var str_1=str;                                              
   var spec_1=spec1;
   var spec_2=spec2;

   var part_aft ="";
  
   var part_bf = m_str_spec_part_bf_inv(str_1 ,spec1);   
  
   var part_bf_lg = part_bf.length;

   var part_aft =  m_str_spec_part_af_inv(str_1 ,spec_1);   
   var part_aft_lg = part_aft.length;

   var part_aft_1=part_aft;
   var part_bf_1=part_bf;
 
    var part_aft_1= part_aft;
    var part_bf_1= part_bf ;
 
   if((part_bf_lg > 0)  && (part_aft_lg > 0 )){

         
        str_1 = str_1.replace(part_bf+spec_1+part_aft , "("+part_bf_1 +","+part_aft_1+")" ) ;   

         
                                                        }        
 

     if(part_aft_lg == 0 || part_bf_lg == 0 ){  str_1 = "error,  not data" ; }

     return str_1;

}



  function m_str_spc_count(str,spec){            
   var str_1 = str;
   var spec_1 = spec;
   var str_1_lg = str_1.length;
   var spec_1_lg = spec_1.length;
   var count_1 = 0;

     for(var i=0;i<str_1_lg;i++){
   
       var str_ref= str_1.substr(i,spec_1_lg) ;
            if(str_ref == spec_1){
               count_1=count_1+1;
                 i= i+ spec_1_lg -1 ;}  
                                }

     return count_1;

   }


function m_str_spc_index(str,spec){            
   var str_1 = str;
   var spec_1 = spec;
   var str_1_lg = str_1.length;
   var spec_1_lg = spec_1.length;
   var index_1 = 0;                      
     for(var i=0;i<(str_1_lg-spec_1_lg+1);i++){
   
       var str_ref= str_1.substr(i,spec_1_lg) ;
            if(str_ref == spec_1){
               index_1=i;
             return index_1;       
     
                                 }  
                                }

    
     return index_1;

   }


function m_str_spc_index_m(str,spec){            
   var str_1 = str;
   var spec_1 = spec;
   var str_1_lg = str_1.length;
   var spec_1_lg = spec_1.length;
  
   var nub_count =  m_str_spc_count(str_1,spec_1);            

      var A=m_new_mtx(nub_count,2); 
      var k=0 ;   
      

     for(var i=0;i<(str_1_lg-spec_1_lg+1);i++){
   
       var str_ref= str_1.substr(i,spec_1_lg) ;
            if(str_ref == spec_1){
                A[k][0]=i;
                A[k][1]= spec_1;
                k=k+1;                
 
     
                                 }  

                                }
   
     return A;

   }


function m_str_spc_index_m_2(str,spec_1,spec_2){            
   var str_a = str;
   var spec_a = spec_1;
   var spec_b = spec_2;
   var str_a_lg = str_a.length;
   var spec_a_lg = spec_a.length;
   var spec_b_lg = spec_b.length;

 
   var nub_count_a =  m_str_spc_count(str_a,spec_a);            
   var nub_count_b =  m_str_spc_count(str_a,spec_b);            
      var A=m_new_mtx((nub_count_a+nub_count_b),2); 
      var k=0 ;   
      var m=0 ;   

     for(var i=0;i < str_a_lg;i++){
   
       var str_ref_a= str_a.substr(i,spec_a_lg) ;
            if(str_ref_a == spec_a){
                A[k][0]=i;
                A[k][1]= spec_a;
                k=k+1;                
    
                                 }  

         var str_ref_b= str_a.substr(i,spec_b_lg) ;
            if(str_ref_b == spec_b){
                A[k][0]=i;
                A[k][1]= spec_b;
                k=k+1;               
    
                                 }     



                                }
   
     return A;

   }


function m_str_spc_index_m_2_sp(str,spec_1,spec_2){            
   var str_a = str;                                            
   var spec_a = spec_1;                                       
   var spec_b = spec_2;
   var str_a_lg = str_a.length;
   var spec_a_lg = spec_a.length;
   var spec_b_lg = spec_b.length;

   var nub_count_a =  m_str_spc_count(str_a,spec_a);            
   var nub_count_b =  m_str_spc_count(str_a,spec_b);            
      var A=m_new_mtx((nub_count_a+nub_count_b),2); 
      var k=0 ;   
      var m=0 ;   

     for(var i=0;i < str_a_lg;i++){

       var str_bf_a = str_a.substr(i-1,1) ;
       var str_af_h = str_a.substr(i+3,1) ;
       var str_af_a = str_a.substr(i+3,1) ;  
    

       var str_af_b = str_a.substr(i+1,1) ;  
     
   
       var str_ref_a= str_a.substr(i,spec_a_lg) ;
            if(str_ref_a == spec_a && str_bf_a !="a" && str_af_h !="h" && str_af_a !="(" ){
                A[k][0]=i;
                A[k][1]= spec_a;
                k=k+1;                
    
                                 }  

         var str_ref_b= str_a.substr(i,spec_b_lg) ;
            if(str_ref_b == spec_b && str_af_b !=")"  ){
                A[k][0]=i;
                A[k][1]= spec_b;
                k=k+1;                
    
                                 }     



                                }
   
     return A;

   }


function m_str_spc_index_m_2_st(str,spec_1,spec_2){            
   var str_a = str;                                           
   var spec_a = spec_1;                                      
   var spec_b = spec_2;
   var str_a_lg = str_a.length;
   var spec_a_lg = spec_a.length;
   var spec_b_lg = spec_b.length;

   var nub_count_a =  m_str_spc_count(str_a,spec_a);            
   var nub_count_b =  m_str_spc_count(str_a,spec_b);            
      var A=m_new_mtx((nub_count_a+nub_count_b),2); 
      var k=0 ;   
      var m=0 ;   

     for(var i=0;i < str_a_lg;i++){

       var str_bf_a = str_a.substr(i-1,1) ;
    
        
       var str_ref_a= str_a.substr(i,spec_a_lg) ;
            if(str_ref_a == spec_a && str_bf_a !="a" ){
                A[k][0]=i;
                A[k][1]= spec_a;
                k=k+1;               
    
                                 }  

         var str_ref_b= str_a.substr(i,spec_b_lg) ;
            if(str_ref_b == spec_b  ){
                A[k][0]=i;
                A[k][1]= spec_b;
                k=k+1;                
    
                                 }     



                                }
   
     return A;

   }






function m_str_spc_inter(str,spec_1,spec_2){            
   var str_1 = str;
   var spec_a = spec_1;
   var spe2_2 = spec_2;

   var str_1_lg = str_1.length;
   
   var index_1 = 0; 
   var index_2 = 0; 
                    
       index_1 = m_str_spc_index(str,spec_a);
       index_2 = m_str_spc_index(str,spe2_2);

   var new_str =str_1.substring(index_1,index_2+1);   

       return new_str;

   }



function m_str_spc_inter_2word(str,spec_1,spec_2){            
   var str_1 = str;
   var spec_a = spec_1;
   var spe2_2 = spec_2;

   var str_1_lg = str_1.length;
   
   var index_1 = 0; 
   var index_2 = 0; 
                    
       index_1 = m_str_spc_index(str,spec_a);
       index_2 = m_str_spc_index(str,spe2_2);

   var new_str =str_1.substring(index_1,index_2+2);   

       return new_str;

   }


 function m_str_spc_inter_m_word(str,spec_1,spec_2){            
   var str_1 = str;                                             
   var spec_a = spec_1;  
   var spec_b = spec_2;  

   var str_1_lg = str_1.length;
   
   var index_1 = 0; 
   var index_2 = 0; 
                    
       index_1 = m_str_spc_index(str,spec_a);
       index_2 = m_str_spc_index(str,spec_b);

   var new_str =str_1.substring((index_1+spec_a.length) ,(index_2+spec_b.length-1));   

       return new_str;

   }



function m_str_spc_end(str,spec){            
   var str_1 = str;
   var spec_1 = spec;
   var str_1_lg = str_1.length;
   var spec_1_lg = spec_1.length;
   var str_ref="";

     for(var i=(str_1_lg-spec_1_lg);i<str_1_lg;i=(i+spec_1_lg)){
   
       var str_ref= str_1.substr(i,spec_1_lg) ;
            if(str_ref == spec_1){

              
               return 1;         

                }  
           else{ 
              
                 return 0 ;}     
        
                                }

     
   }








  function m_fact_many(str){                         

      var str_1 = str;
      var nub_1 = m_str_spc_count(str_1,'!');   

          for(var i=0; i< nub_1 ; i++){
            str_1 =  m_fact(str_1);   
             }

      return  str_1;

  }


 function m_star_many(str){                                 
   
    var str_1 = str;
    
    var nub_1 = m_str_spc_count(str_1,"π");   

    for(var i=0; i< nub_1 ; i++){
            str_1 =  m_star(str_1);   
               }

      str_1 = str_1.replace( /pi/g, "π") ;  
     return  str_1;

  }

function m_star_rem_many(str,nub){                                 
   
    var str_1 = str;
    var nubb = nub;
      
    var nub_1 = m_str_spc_count(str_1,"π");   

     var  str_2 ="" ; 

    for(var i=0; i< nub_1 ; i++){
           
        var str_2 =  m_star_rem(str_1 ,nubb);   
   

           var str_1 = str_2 ;  

               }


            str_1 = str_1.toString().replace( /P/g, "π") ;  

     return  str_1;
  

  }



function m_lj_str(str){   

   var str_1 = str;

    
     var nub_l = m_str_spc_count(str_1,"(");   
     var nub_j = m_str_spc_count(str_1,")");    

      if( nub_l != nub_j){ var ans_1="error" ; return ans_1 ;}
      if( nub_l == 0){ var ans_1=str ; return ans_1 ;}
 
     var str_new ="";  

     if(nub_l > 0 ){

      var str_1_lg=str_1.length;

      var l_index = str_1.lastIndexOf("(");  
      var str_1_af = str_1.substr(l_index+1,str_1_lg-l_index-1);  

      var j_index = str_1_af.indexOf(")");  

      var str_1_m = str_1_af.substr(0,j_index);  
     
          var str_1= str_1_m;


        }


  
     return  str_1;

}


function m_pi_dg_bf_and_1(str){       
     var str_1 = str;

     var nub_pi = m_str_spc_count(str_1,"π");    
     var nub_dg = m_str_spc_count(str_1,"°");   
 
   if(nub_pi !=0){
     str_1 = str_1.replace(/\(π/g , "\(1π");      
     str_1 = str_1.replace(/\+π/g , "\+1π");    
     str_1 = str_1.replace(/\-π/g , "\-1π");    
     str_1 = str_1.replace(/\*π/g , "\*1π");    
     str_1 = str_1.replace(/\/π/g , "\/1π");    

           var data_fst=str_1.substr(0,1);    

               if(data_fst=="π"){  var str_1="1"+str_1;}


                 }


      if(nub_dg !=0){
     str_1 = str_1.replace(/\(°/g , "\(1°");       
     str_1 = str_1.replace(/\+°/g , "\+1°");    
     str_1 = str_1.replace(/\-°/g , "\-1°");    
     str_1 = str_1.replace(/\*°/g , "\*1°");    
     str_1 = str_1.replace(/\/°/g , "\/1°");    

           var data_fst=str_1.substr(0,1);    

               if(data_fst=="°"){  var str_1="1"+str_1; }


                 }



     return  str_1;

 }

function m_pi_dg_bf_del_1(str){       
  var str_1 = str;
     var nub_pi = m_str_spc_count(str_1,"π");    
     var nub_dg = m_str_spc_count(str_1,"°");   
   if(nub_pi !=0){
     str_1 = str_1.replace(/\(1π/g , "\(π");       
     str_1 = str_1.replace(/\+1π/g , "\+π");    
     str_1 = str_1.replace(/\-1π/g , "\-π");    
     str_1 = str_1.replace(/\*1π/g , "\*π");    
     str_1 = str_1.replace(/\/1π/g , "\\π");    
           var data_fst=str_1.substr(0,1);    
           var data_sec=str_1.substr(1,1);    
               if(data_fst=="1" && data_sec=="π"){  var str_1="1"+str_1;}
                 }
      if(nub_dg !=0){
     str_1 = str_1.replace(/\(1°/g , "\(°");       
     str_1 = str_1.replace(/\+1°/g , "\+°");    
     str_1 = str_1.replace(/\-1°/g , "\-°");    
     str_1 = str_1.replace(/\*1°/g , "\*°");    
     str_1 = str_1.replace(/\/1°/g , "\/°");    
           var data_fst=str_1.substr(0,1);    
           var data_sec=str_1.substr(1,1);    
               if(data_fst=="1" && data_sec=="°"){  var str_1="1"+str_1; }
                 }
     return  str_1;
 }

function m_str_div_continous_b(y,x){            //20200707   
  var data_y_str=y;
  var data_x_str=x;
  var data_y=y;
  var data_x=x;
  var flag_y="";
  var flag_x="";
  var flag_y_pi_zo="";
  var flag_x_pi_zo="";
  var ans_1="";
  var y_nub=0;
  var x_nub=0;
   var data_y_lg=data_y.length;
   var data_x_lg=data_x.length;
      var nub_pi_1 = m_str_spc_count(data_y,"π");    
      var nub_zero_1 = m_str_spc_count(data_y,"°");    
      var nub_pi_2 = m_str_spc_count(data_x,"π");    
      var nub_zero_2 = m_str_spc_count(data_x,"°");     
         if(nub_pi_1 >=2 || nub_zero_1>=2 || nub_pi_2 >=2 || nub_zero_2>=2  ){        
              var ans_1=data_y_str+"/"+data_x_str;
     
            return ans_1 ;}
    for(var i=0; i<1; i++){    
        var data_y_fist= data_y.substr(0,1) ;     
        var data_y_last= data_y.substr(data_y_lg,1) ; 
               if((data_y_fist=="\(")&&(data_y_last=="\)")){
                  data_y=data_y.substr(1,data_y_lg-2);     
         
                                 }

               if(data_y_fist=="\-"){  
                   data_y=data_y.substr(1,data_y_lg-1);   
                   flag_y="-";  
                                    }
            var data_x_fist= data_x.substr(0,1) ;    
            var data_x_last= data_y.substr(data_x_lg,1) ;
              if((data_x_fist=="\(")&&(data_x_last=="\)")){
                      data_x=data_x.substr(1,data_x_lg-2);
                                 }

                if(data_x_fist=="\-"){  
                   data_x=data_x.substr(1,data_x_lg-1);   
                   flag_x="-";  
                                    }
 
                  }
          var data_y_last= data_y.substr(data_y.length-1,1) ; 
          var data_x_last= data_x.substr(data_x.length-1,1) ;
             if(data_y_last=="π" && data_x_last=="π"){
                   data_y=data_y.substr(0,data_y.length-1);   
                   data_x=data_x.substr(0,data_x.length-1);   
                                                        }
              else if(data_y_last=="°" && data_x_last=="°"){
                    data_y=data_y.substr(0,data_y.length-1);   
                    data_x=data_x.substr(0,data_x.length-1);   
                                                        }
              else if(data_y_last=="π" && data_x_last=="°"){
                   data_y=data_y.substr(0,data_y.length-1);   
                   data_x=data_x.substr(0,data_x.length-1);   
                      
                       if(data_y==""|| data_y==1){ var data_y =180 ;}
                      else{ data_y= m_mtx_real_mul(data_y,180);}
                                                           }
          
              else if(data_y_last=="°" && data_x_last=="π"){
                   data_y=data_y.substr(0,data_y.length-1);   
                  data_x=data_x.substr(0,data_x.length-1);   
                       if(data_x==""|| data_x==1){ var data_x =180 ;}
                       else{ data_x= m_mtx_real_mul(data_x,180);}
                                                        }
              else if(data_y_last=="π" && data_x_last!="π" && data_x_last!="°"){                
                   data_y=data_y.substr(0,data_y.length-1);   //去掉最後π
                        var flag_y_pi_zo="π";
                                                           }
              else if(data_y_last=="°" && data_x_last!="π" && data_x_last!="°"){
                   data_y=data_y.substr(0,data_y.length-1);   //去掉最後°
                    if(data_x==""|| data_x==1){ var data_x =180 ;}
                       else{ data_x= m_mtx_real_mul(data_x,180);}
                         var flag_y_pi_zo="π";
                                                           }

               else if(data_y_last!="π" && data_y_last!="°" && data_x_last=="π"){
                   data_x=data_x.substr(0,data_x.length-1);   //去掉最後π
                         var flag_x_pi_zo="π";
                                                           }
              else if(data_y_last!="π" && data_y_last!="°"  && data_x_last=="°"){
                   data_x=data_x.substr(0,data_x.length-1);   //去掉最後°
                             var flag_x_pi_zo="°";
                                                           }
                  if( data_y ==""){ var data_y=1 ;}       
                  if( data_x ==""){ var data_x=1 ;}       
   var nub_add_1 = m_str_spc_count(data_y,"+");    
   var nub_sub_1 = m_str_spc_count(data_y,"-");    
   var nub_mul_1 = m_str_spc_count(data_y,"*");     
   var nub_div_1 = m_str_spc_count(data_y,"/");    
   var nub_pow_1 = m_str_spc_count(data_y,"^");    
   var nub_e_1 = m_str_spc_count(data_y,"e");       
   var nub_n_1 = m_str_spc_count(data_y,"!");      
   var nub_exp_1 = m_str_spc_count(data_y,"exp");   
   var nub_ln_1 = m_str_spc_count(data_y,"ln");    
   var nub_log_1 = m_str_spc_count(data_y,"log");   
   var nub_a_1 = m_str_spc_count(data_y,"a");       
   var nub_sin_1 = m_str_spc_count(data_y,"sin");  
   var nub_cos_1 = m_str_spc_count(data_y,"cos");   
   var nub_tan_1 = m_str_spc_count(data_y,"tan");   
   var nub_h_1 = m_str_spc_count(data_y,"h");       
   var nub_l_1 = m_str_spc_count(data_y,"(");      
   var nub_j_1 = m_str_spc_count(data_y,")");      
   var nub_poin_1 = m_str_spc_count(data_y,".");       
  var y_nub=nub_add_1+nub_sub_1+nub_mul_1+nub_div_1+nub_pow_1+nub_e_1+nub_n_1+nub_exp_1+nub_ln_1+nub_log_1+nub_a_1+nub_sin_1+nub_cos_1+nub_tan_1+nub_h_1+nub_l_1+nub_j_1+nub_poin_1;
   var nub_add_2 = m_str_spc_count(data_x,"+");    
   var nub_sub_2 = m_str_spc_count(data_x,"-");     
   var nub_mul_2 = m_str_spc_count(data_x,"*");     
   var nub_div_2 = m_str_spc_count(data_x,"/");     
   var nub_pow_2 = m_str_spc_count(data_x,"^");    
   var nub_e_2 = m_str_spc_count(data_x,"e");       
   var nub_n_2 = m_str_spc_count(data_x,"!");       
   var nub_exp_2 = m_str_spc_count(data_x,"exp");  
   var nub_ln_2 = m_str_spc_count(data_x,"ln");     
   var nub_log_2 = m_str_spc_count(data_x,"log");   
   var nub_a_2 = m_str_spc_count(data_x,"a");       
   var nub_sin_2 = m_str_spc_count(data_x,"sin");   
   var nub_cos_2 = m_str_spc_count(data_x,"cos");   
   var nub_tan_2 = m_str_spc_count(data_x,"tan");   
   var nub_h_2 = m_str_spc_count(data_x,"h");     
   var nub_l_2 = m_str_spc_count(data_x,"(");      
   var nub_j_2 = m_str_spc_count(data_x,")");     
   var nub_poin_2 = m_str_spc_count(data_x,".");    
    var x_nub=nub_add_2+nub_sub_2+nub_mul_2+nub_div_2+nub_pow_2+nub_e_2+nub_n_2+nub_exp_2+nub_ln_2+nub_log_2+nub_a_2+nub_sin_2+nub_cos_2+nub_tan_2+nub_h_2+nub_l_2+nub_j_2+nub_poin_2;
    if(y_nub!=0 || x_nub!=0){              
               var ans_1=data_y_str+"/"+data_x_str;
      
            return ans_1 ;}
        var AA= m_mtx_prime_table();       
   var data_c="";
    if( data_y.length<=14 && data_x.length<=14 && data_y>1 && data_x >1 && data_y!=""&& data_x!=""){   
       for (var i=0;i<AA[0].length ;i++){
         var data_c = parseInt(AA[0][i]) ;   
               for (var j=0;j<2 ;j++){   
                var y_remainder = data_y % data_c ;
                var x_remainder = data_x % data_c ;
                    if(y_remainder==0 && x_remainder==0  ){    
                      var  data_y = data_y / data_c;
                       var  data_x = data_x / data_c;
                     var   j=0;                        }
                                                   
                     else{ var j=2 ;}  
                                        }  
           if(data_c > data_y || data_c > data_x || data_y==1 || data_x==1){   
               var i = AA[0].length+1;
              }
                                               } 

                                                                          }     
                 var ans_b = flag_y+data_y+flag_y_pi_zo;
                 var ans_a = flag_x+data_x+flag_x_pi_zo;
                   if(data_y==1 && flag_y_pi_zo !=""){   
                     var ans_b = flag_y+flag_y_pi_zo; }         
                    if(data_x==1 && flag_x_pi_zo !=""){   
                     var ans_a = flag_x+flag_x_pi_zo; }         
                 if( ans_b ==""){ var ans_b=1 ;}       
                 if( ans_a ==""){ var ans_a=1 ;}       
                 if( ans_a ==1){                         
                      var ans_1=ans_b;}
                 else{ var ans_1=ans_b+"/"+ans_a;}
                      return ans_1 ;

}






 function m_str_div_continous(str){            
    var str_1=str;
     var ans_1="";
     var nub_div = m_str_spc_count(str_1,"/");   
    if(nub_div ==0){ var ans_1= str_1; return ans_1 ; } 
    var nub_str_e = m_str_spc_count(str_1,"e");    
             if(nub_str_e!=0 ){               
            var ans_1= str_1; return ans_1 ; }
   for(var i=0; i<nub_div; i++){
    var fst_index = str_1.indexOf("/");        
    var data_y = m_str_div_2part(str_1,1);     
    var data_y_lg = data_y.length;
    var data_x = m_str_div_2part(str_1,2);     
    var data_x_lg = data_x.length;
    var str_1_lg=str_1.length;
       var data_y_fist= data_y.substr(0,1) ;   
               if(data_y_fist=="\("){
                 data_y=data_y.substr(1,data_y_lg-2);     
                                }
            var data_x_fist= data_x.substr(0,1) ;    
              if(data_x_fist=="\("){
                      data_x=data_x.substr(1,data_x_lg-2);
                                 }
             var str_1_bf = str_1.substring(0,fst_index-data_y_lg) ;               
             var str_1_bf_last= str_1_bf.substr(str_1_bf.length-1,1) ;    
        if( str_1_bf_last=="" || str_1_bf_last=="+"  || str_1_bf_last=="-" || str_1_bf_last=="*" ||str_1_bf_last=="/" ||str_1_bf_last=="(") {   
           var data_z = m_str_div_continous_b(data_y,data_x)      
                                                  }     
 
        else{
             var data_z = str_1;    
            return data_z ;}
     var str_1_bf = str_1.substring(0,fst_index-data_y_lg) ;               
      var data_z = data_z.toString().replace(/\//g , "D");    
      var str_1_af = str_1.substring(str_1_bf.length + data_x_lg+1+data_y_lg,str_1_lg) ;        
       var str_1 = str_1_bf+data_z+str_1_af ;  
                                 }  //for
    var str_1 = str_1.replace(/D/g , "\/");    
    var str_1 = str_1.replace(/Q/g , "\-");    
    var ans_1 = str_1 ;
    return ans_1 ;
 }

function m_str_div_2part(str,nub){     //20200707       
var str_1=str;
   var nub_1=nub;
   var ans_1="";
   var nub_div = m_str_spc_count(str_1,"/");    
    if(nub_div ==0){ var ans_1= str_1; return ans_1 ; } 
   var fst_index = str_1.indexOf("/");   
    var div_bf = m_str_spec_part_bf(str_1 ,"/");
    var div_af = m_str_spec_part_af(str_1 ,"/"); 
      var bf_lg = div_bf.length;
      var af_lg = div_af.length;
      var bf_data = str_1.substr( fst_index-bf_lg-1,1); 
      var af_data = str_1.substr( fst_index+af_lg+1,1); 
    if( bf_data =="^" || af_data =="^"){var ans_1= str_1; return ans_1 ; } 
   if(nub==1){ var ans_1=div_bf ;return ans_1 ; } 
   if(nub==2){ var ans_1=div_af ;return ans_1 ; } 
 return ans_1 ;    

 }



function m_str_div_2part(str,nub){         
  var str_1=str;
   var nub_1=nub;
   var ans_1="";
   var nub_div = m_str_spc_count(str_1,"/");   
    if(nub_div ==0){ var ans_1= str_1; return ans_1 ; } 
    var fst_index = str_1.indexOf("/");  
    var div_bf = m_str_spec_part_bf(str_1 ,"/"); 
    var div_af = m_str_spec_part_af(str_1 ,"/"); 
      var bf_lg = div_bf.length;
      var af_lg = div_af.length;
      var bf_data = str_1.substr( fst_index-bf_lg-1,1); 
      var af_data = str_1.substr( fst_index+af_lg+1,1); 
   if( bf_data =="^" || af_data =="^"){var ans_1= str_1; return ans_1 ; } 
   if(nub==1){ var ans_1=div_bf ;return ans_1 ; } 
   if(nub==2){ var ans_1=div_af ;return ans_1 ; } 
 return ans_1 ;

}


function m_pi_dg_ot(str,nub){   
   
     return  str;
 
}




function m_tri_ang_2pi_replace(str){         
    var str_1 = str;
     var str_pi = m_str_spc_count(str_1,"π");      
     var str_degree = m_str_spc_count(str_1,"°");   
     var str_sin = m_str_spc_count(str_1,"sin");    
     var str_cos = m_str_spc_count(str_1,"cos");    
     var str_tan = m_str_spc_count(str_1,"tan");    
         
       if(str_pi == 0 && str_degree ==0 ){ var ans_1=str_1 ; return ans_1 ;} 

    if(str_pi != 0 && str_sin !=0){
     str_1 = str_1.replace(/sin\(0π\)/g , "0");         
     str_1 = str_1.replace(/sin\(π\/6\)/g , "0.5");        
     str_1 = str_1.replace(/sin\(0.5π\)/g , "1");          
     str_1 = str_1.replace(/sin\(π\/2\)/g , "1");             
     str_1 = str_1.replace(/sin\(5π\/6\)/g , "0.5");          
     str_1 = str_1.replace(/sin\(π\)/g , "0");             
     str_1 = str_1.replace(/sin\(1π\)/g , "0");            
     str_1 = str_1.replace(/sin\(7π\/6\)/g , "-0.5");         
     str_1 = str_1.replace(/sin\(1.5π\)/g , "-1");         
     str_1 = str_1.replace(/sin\(3π\/2\)/g , "-1");          
     str_1 = str_1.replace(/sin\(11π\/6\)/g , "-0.5");        
     str_1 = str_1.replace(/sin\(2π\)/g , "0");           
     str_1 = str_1.replace(/sin\(\-0π\)/g , "0");        
     str_1 = str_1.replace(/sin\(\-π\/6\)/g , "-0.5");     
     str_1 = str_1.replace(/sin\(\-0.5π\)/g , "-1");       
     str_1 = str_1.replace(/sin\(\-π\/2\)/g , "-1");         
     str_1 = str_1.replace(/sin\(\-5π\/6\)/g , "-0.5");       
     str_1 = str_1.replace(/sin\(\-π\)/g , "0");           
     str_1 = str_1.replace(/sin\(\-1π\)/g , "0");          
     str_1 = str_1.replace(/sin\(\-7π\/6\)/g , "0.5");        
     str_1 = str_1.replace(/sin\(\-1.5π\)/g , "1");        
     str_1 = str_1.replace(/sin\(\-3π\/2\)/g , "1");         
     str_1 = str_1.replace(/sin\(\-11π\/6\)/g , "0.5");       
     str_1 = str_1.replace(/sin\(\-2π\)/g , "0");        
     str_1 = str_1.replace(/sin0π/g , "0");         
     str_1 = str_1.replace(/sin0.5π/g , "1");          
     str_1 = str_1.replace(/sinπ/g , "0");             
     str_1 = str_1.replace(/sin1π/g , "0");           
     str_1 = str_1.replace(/sin1.5π/g , "-1");         
     str_1 = str_1.replace(/sin2π/g , "0");            
     str_1 = str_1.replace(/sin\-0π/g , "0");       
     str_1 = str_1.replace(/sin\-0.5π/g , "-1");       
     str_1 = str_1.replace(/sin\-π/g , "0");          
     str_1 = str_1.replace(/sin\-1π/g , "0");          
     str_1 = str_1.replace(/sin\-1.5π/g , "1");        
     str_1 = str_1.replace(/sin\-2π/g , "0");          

                                 }

   if(str_pi != 0 && str_cos !=0){

     str_1 = str_1.replace(/cos\(0π\)/g , "1");         
     str_1 = str_1.replace(/cos\(π\/3\)/g , "0.5");        
     str_1 = str_1.replace(/cos\(0.5π\)/g , "0");          
     str_1 = str_1.replace(/cos\(π\/2\)/g , "0");             
     str_1 = str_1.replace(/cos\(2π\/3\)/g , "-0.5");         
     str_1 = str_1.replace(/cos\(π\)/g , "-1");            
     str_1 = str_1.replace(/cos\(1π\)/g , "-1");           
     str_1 = str_1.replace(/cos\(4π\/3\)/g , "-0.5");         
     str_1 = str_1.replace(/cos\(1.5π\)/g , "0");          
     str_1 = str_1.replace(/cos\(3π\/2\)/g , "0");            
     str_1 = str_1.replace(/cos\(5π\/3\)/g , "0.5");          
     str_1 = str_1.replace(/cos\(2π\)/g , "1");         
     str_1 = str_1.replace(/cos\(\-0π\)/g , "1");       
     str_1 = str_1.replace(/cos\(\-π\/3\)/g , "0.5");      
     str_1 = str_1.replace(/cos\(\-0.5π\)/g , "0");        
     str_1 = str_1.replace(/cos\(\-π\/2\)/g , "0");           
     str_1 = str_1.replace(/cos\(\-2π\/3\)/g , "-0.5");      
     str_1 = str_1.replace(/cos\(\-π\)/g , "-1");          
     str_1 = str_1.replace(/cos\(\-1π\)/g , "-1");         
     str_1 = str_1.replace(/cos\(\-4π\/3\)/g , "-0.5");       
     str_1 = str_1.replace(/cos\(\-1.5π\)/g , "0");        
     str_1 = str_1.replace(/cos\(\-3π\/2\)/g , "0");          
     str_1 = str_1.replace(/cos\(\-5π\/3\)/g , "0.5");        
     str_1 = str_1.replace(/cos\(\-2π\)/g , "1");          
     str_1 = str_1.replace(/cos0π/g , "1");         
     str_1 = str_1.replace(/cos0.5π/g , "0");         
     str_1 = str_1.replace(/cosπ/g , "-1");            
     str_1 = str_1.replace(/cos1π/g , "-1");           
     str_1 = str_1.replace(/cos1.5π/g , "0");          
     str_1 = str_1.replace(/cos2π/g , "1");            
     str_1 = str_1.replace(/cos\-0π/g , "1");       
     str_1 = str_1.replace(/cos\-0.5π/g , "0");       
     str_1 = str_1.replace(/cos\-π/g , "-1");          
     str_1 = str_1.replace(/cos\-1π/g , "-1");         
     str_1 = str_1.replace(/cos\-1.5π/g , "0");        
     str_1 = str_1.replace(/cos\-2π/g , "1");          

                                }


   if(str_pi != 0 && str_tan !=0){

     str_1 = str_1.replace(/tan\(0π\)/g , "0");      
     str_1 = str_1.replace(/tan\(0.25π\)/g , "1");       
     str_1 = str_1.replace(/tan\(π\/4\)/g , "1");         
     str_1 = str_1.replace(/tan\(0.75π\)/g , "-1");  
     str_1 = str_1.replace(/tan\(3π\/4\)/g , "-1");       
     str_1 = str_1.replace(/tan\(π\)/g , "0");         
     str_1 = str_1.replace(/tan\(1π\)/g , "0");         
     str_1 = str_1.replace(/tan\(1.25π\)/g , "1");      
     str_1 = str_1.replace(/tan\(5π\/4\)/g , "1");        
     str_1 = str_1.replace(/tan\(1.75π\)/g , "-1");     
     str_1 = str_1.replace(/tan\(7π\/4\)/g , "-1");       
     str_1 = str_1.replace(/tan\(2π\)/g , "0");      
     str_1 = str_1.replace(/tan\(\-0π\)/g , "0");     
     str_1 = str_1.replace(/tan\(\-0.25π\)/g , "-1");      
     str_1 = str_1.replace(/tan\(\-π\/4\)/g , "-1");        
     str_1 = str_1.replace(/tan\(\-0.75π\)/g , "1");    
     str_1 = str_1.replace(/tan\(\-3π\/4\)/g , "1");        
     str_1 = str_1.replace(/tan\(\-π\)/g , "0");          
     str_1 = str_1.replace(/tan\(\-1π\)/g , "0");         
     str_1 = str_1.replace(/tan\(\-1.25π\)/g , "-1");     
     str_1 = str_1.replace(/tan\(\-5π\/4\)/g , "-1");       
     str_1 = str_1.replace(/tan\(\-1.75π\)/g , "1");      
     str_1 = str_1.replace(/tan\(\-7π\/4\)/g , "1");       
     str_1 = str_1.replace(/tan\(\-2π\)/g , "0");        
     str_1 = str_1.replace(/tan0π/g , "0");       
     str_1 = str_1.replace(/tan0.25π/g , "1");         
     str_1 = str_1.replace(/tan0.75π/g , "-1");    
     str_1 = str_1.replace(/tanπ/g , "0");           
     str_1 = str_1.replace(/tan1π/g , "0");          
     str_1 = str_1.replace(/tan1.25π/g , "1");       
     str_1 = str_1.replace(/tan1.75π/g , "-1");      
     str_1 = str_1.replace(/tan2π/g , "0");          
     str_1 = str_1.replace(/tan\-0π/g , "0");        
     str_1 = str_1.replace(/tan\-0.25π/g , "-1");         
     str_1 = str_1.replace(/tan\-0.75π/g , "1");      
     str_1 = str_1.replace(/tan\-π/g , "0");          
     str_1 = str_1.replace(/tan\-1π/g , "0");           
     str_1 = str_1.replace(/tan\-1.25π/g , "-1");       
     str_1 = str_1.replace(/tan\-1.75π/g , "1");        
     str_1 = str_1.replace(/tan\-2π/g , "0");           


                                 }


   if(str_degree != 0 && str_sin !=0){

     str_1 = str_1.replace(/sin\(0°\)/g , "0");        
     str_1 = str_1.replace(/sin\(30°\)/g , "0.5");       
     str_1 = str_1.replace(/sin\(90°\)/g , "1");        
     str_1 = str_1.replace(/sin\(150°\)/g , "0.5");       
     str_1 = str_1.replace(/sin\(180°\)/g , "0");        
     str_1 = str_1.replace(/sin\(210°\)/g , "-0.5");      
     str_1 = str_1.replace(/sin\(270°\)/g , "-1");        
     str_1 = str_1.replace(/sin\(330°\)/g , "-0.5");     
     str_1 = str_1.replace(/sin\(360°\)/g , "0");        
     str_1 = str_1.replace(/sin\(\-0°\)/g , "0");        
     str_1 = str_1.replace(/sin\(\-30°\)/g , "-0.5");       
     str_1 = str_1.replace(/sin\(\-90°\)/g , "-1");         
     str_1 = str_1.replace(/sin\(\-150°\)/g , "-0.5");      
     str_1 = str_1.replace(/sin\(\-180°\)/g , "0");        
     str_1 = str_1.replace(/sin\(\-210°\)/g , "0.5");      
     str_1 = str_1.replace(/sin\(\-270°\)/g , "1");        
     str_1 = str_1.replace(/sin\(\-330°\)/g , "0.5");       
     str_1 = str_1.replace(/sin\(\-360°\)/g , "0");         
     str_1 = str_1.replace(/sin0°/g , "0");        
     str_1 = str_1.replace(/sin30°/g , "0.5");       
     str_1 = str_1.replace(/sin90°/g , "1");         
     str_1 = str_1.replace(/sin150°/g , "0.5");       
     str_1 = str_1.replace(/sin180°/g , "0");         
     str_1 = str_1.replace(/sin210°/g , "-0.5");      
     str_1 = str_1.replace(/sin270°/g , "-1");     
     str_1 = str_1.replace(/sin330°/g , "-0.5");     
     str_1 = str_1.replace(/sin360°/g , "0");        
     str_1 = str_1.replace(/sin\-0°/g , "0");         
     str_1 = str_1.replace(/sin\-30°/g , "-0.5");        
     str_1 = str_1.replace(/sin\-90°/g , "-1");          
     str_1 = str_1.replace(/sin\-150°/g , "-0.5");      
     str_1 = str_1.replace(/sin\-180°/g , "0");          
     str_1 = str_1.replace(/sin\-210°/g , "0.5");      
     str_1 = str_1.replace(/sin\-270°/g , "1");         
     str_1 = str_1.replace(/sin\-330°/g , "0.5");      
     str_1 = str_1.replace(/sin\-360°/g , "0");         



                                    }





    if(str_degree != 0 && str_cos !=0){  


     str_1 = str_1.replace(/cos\(0°\)/g , "1");        
     str_1 = str_1.replace(/cos\(60°\)/g , "0.5");        
     str_1 = str_1.replace(/cos\(90°\)/g , "0");          
     str_1 = str_1.replace(/cos\(120°\)/g , "-0.5");      
     str_1 = str_1.replace(/cos\(180°\)/g , "-1");        
     str_1 = str_1.replace(/cos\(240°\)/g , "-0.5");      
     str_1 = str_1.replace(/cos\(270°\)/g , "0");         
     str_1 = str_1.replace(/cos\(300°\)/g , "0.5");      
     str_1 = str_1.replace(/cos\(360°\)/g , "1");       
     str_1 = str_1.replace(/cos\(\-0°\)/g , "1");        
     str_1 = str_1.replace(/cos\(\-60°\)/g , "0.5");       
     str_1 = str_1.replace(/cos\(\-90°\)/g , "0");          
     str_1 = str_1.replace(/cos\(\-120°\)/g , "-0.5");   
     str_1 = str_1.replace(/cos\(\-180°\)/g , "-1");        
     str_1 = str_1.replace(/cos\(\-240°\)/g , "-0.5");    
     str_1 = str_1.replace(/cos\(\-270°\)/g , "0");        
     str_1 = str_1.replace(/cos\(\-300°\)/g , "0.5");       
     str_1 = str_1.replace(/cos\(\-360°\)/g , "1");        
     str_1 = str_1.replace(/cos0°/g , "1");        
     str_1 = str_1.replace(/cos60°/g , "0.5");       
     str_1 = str_1.replace(/cos90°/g , "0");       
     str_1 = str_1.replace(/cos120°/g , "-0.5");     
     str_1 = str_1.replace(/cos180°/g , "-1");     
     str_1 = str_1.replace(/cos240°/g , "-0.5");     
     str_1 = str_1.replace(/cos270°/g , "0");      
     str_1 = str_1.replace(/cos300°/g , "0.5");     
     str_1 = str_1.replace(/cos360°/g , "1");         
     str_1 = str_1.replace(/cos\-0°/g , "1");        
     str_1 = str_1.replace(/cos\-60°/g , "0.5");      
     str_1 = str_1.replace(/cos\-90°/g , "0");        
     str_1 = str_1.replace(/cos\-120°/g , "-0.5");    
     str_1 = str_1.replace(/cos\-180°/g , "-1");       
     str_1 = str_1.replace(/cos\-240°/g , "-0.5");     
     str_1 = str_1.replace(/cos\-270°/g , "0");        
     str_1 = str_1.replace(/cos\-300°/g , "0.5");      
     str_1 = str_1.replace(/cos\-360°/g , "1");       

                                       }

   if(str_degree != 0 && str_tan !=0){
     str_1 = str_1.replace(/tan\(0°\)/g , "0");       
     str_1 = str_1.replace(/tan\(45°\)/g , "1");               
     str_1 = str_1.replace(/tan\(135°\)/g , "-1");               
     str_1 = str_1.replace(/tan\(180°\)/g , "0");      
     str_1 = str_1.replace(/tan\(225°\)/g , "1");       
     str_1 = str_1.replace(/tan\(315°\)/g , "-1");     
     str_1 = str_1.replace(/tan\(360°\)/g , "0");    
     str_1 = str_1.replace(/tan\(\-0°\)/g , "0");     
     str_1 = str_1.replace(/tan\(\-45°\)/g , "-1");             
     str_1 = str_1.replace(/tan\(\-135°\)/g , "1");             
     str_1 = str_1.replace(/tan\(\-180°\)/g , "0");     
     str_1 = str_1.replace(/tan\(\-225°\)/g , "-1");    
     str_1 = str_1.replace(/tan\(\-315°\)/g , "1");     
     str_1 = str_1.replace(/tan\(\-360°\)/g , "0");  
     str_1 = str_1.replace(/tan0°/g , "0");         
     str_1 = str_1.replace(/tan45°/g , "1");                   
     str_1 = str_1.replace(/tan135°/g , "-1");                  
     str_1 = str_1.replace(/tan180°/g , "0");         
     str_1 = str_1.replace(/tan225°/g , "1");         
     str_1 = str_1.replace(/tan315°/g , "-1");         
     str_1 = str_1.replace(/tan360°/g , "0");        
     str_1 = str_1.replace(/tan\-0°/g , "0");       
     str_1 = str_1.replace(/tan\-45°/g , "-1");               
     str_1 = str_1.replace(/tan\-135°/g , "1");            
     str_1 = str_1.replace(/tan\-180°/g , "0");        
     str_1 = str_1.replace(/tan\-225°/g , "-1");     
     str_1 = str_1.replace(/tan\-315°/g , "1");      
     str_1 = str_1.replace(/tan\-360°/g , "0");      


                  }
       var negate_d ="";
       var negate_d = str_1.substr(0,2);
       if(negate_d =="--"){ str_1 = str_1.substr(2,str_1.length-2);}   
        str_1 = str_1.replace(/\-\-/g , "\+");    
        str_1 = str_1.replace(/\+\-/g , "\-"); 
      return  str_1;
 

}




function m_tri_ang_2pi_rem(str){                                
   
    var str_1 = str;
    var str_1 = m_tri_ang_2pi_replace(str_1);        
    var str_pi = m_str_spc_count(str_1,"π");   

       if(str_pi == 0){ var ans_1=str_1 ; return ans_1 ;} 
           
        str_1 = str_1.replace(/asinh/g , "EB");    
        str_1 = str_1.replace(/acosh/g , "EC");   
        str_1 = str_1.replace(/atanh/g , "EF");    
        str_1 = str_1.replace(/asin/g , "EH");    
        str_1 = str_1.replace(/acos/g , "EK");    
        str_1 = str_1.replace(/atan/g , "ER");    
        str_1 = str_1.replace(/sinh/g , "ET");    
        str_1 = str_1.replace(/cosh/g , "EU");    
        str_1 = str_1.replace(/tanh/g , "EV");   

      var nub_sin = m_str_spc_count(str_1,"sin");   
      var nub_cos = m_str_spc_count(str_1,"cos");   
      var nub_tan = m_str_spc_count(str_1,"tan");   
   
       if(nub_sin ==0 && nub_cos ==0 && nub_tan ==0 ){  return str ;} 
        var str_1_new="" ;     

   if( nub_sin !=0 && str_pi !=0){   

    for(var i=0 ;i < nub_sin ;i++){

     var ang_af = m_str_spec_part_af(str_1 ,"sin"); 

        var nub_pi = m_str_spc_count(ang_af,"π");   

        if(nub_pi ==0){      

        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("sin");                

        var str_1_bf = str_1.substr(0,ang_index+3);  
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg);  

        var str_1_bf = str_1_bf.toString().replace( /sin/g, "SIN") ;  

        var str_1_new = str_1_bf + ang_af + str_1_af;    
        
        var str_1 = str_1_new;     

                       }

        if(nub_pi !=0){      
        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("sin");                
        var str_1_bf = str_1.substr(0,ang_index+3);  
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg);  
       var str_1_bf = str_1_bf.toString().replace( /sin/g, "SIN") ;  

              if(nub_pi !=0){      

               for(var m=0 ; m< 2 ;m++){
                  var ang_af_rem =  m_star_rem_many(ang_af,2);      
                        
                   var ang_af = ang_af_rem ;
                 
                                             }
                                               

                           }
         
        var str_1_new = str_1_bf + ang_af_rem + str_1_af;   
        
        var str_1 = str_1_new;     


                          }   

                                 }   

                                    } 

if( nub_cos !=0 && str_pi !=0){   
   
    for(var i=0 ;i < nub_cos ;i++){

     var ang_af = m_str_spec_part_af(str_1 ,"cos"); 

        var nub_pi = m_str_spc_count(ang_af,"π");   
       if(nub_pi ==0){      

        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("cos");                

        var str_1_bf = str_1.substr(0,ang_index+3);  
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg); 

        var str_1_bf = str_1_bf.toString().replace( /cos/g, "COS") ;  

        var str_1_new = str_1_bf + ang_af + str_1_af;    
        
        var str_1 = str_1_new;     

                       }

        if(nub_pi !=0){      

        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("cos");               

        var str_1_bf = str_1.substr(0,ang_index+3);  
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg);  

        var str_1_bf = str_1_bf.toString().replace( /cos/g, "COS") ;  
            
             if(nub_pi !=0){      
               for(var m=0 ; m< 2 ;m++){
 
                  var ang_af_rem =  m_star_rem_many(ang_af,2);      
                   var ang_af = ang_af_rem ;
                 
                  
                                             }

                                                  
                           }

             
        var str_1_new = str_1_bf + ang_af_rem + str_1_af;    
        
        var str_1 = str_1_new;     

                          }   

                                 }  

                                    } 


if( nub_tan !=0 && str_pi !=0){   
   
    for(var i=0 ;i < nub_tan ;i++){

     var ang_af = m_str_spec_part_af(str_1 ,"tan"); 

        var nub_pi = m_str_spc_count(ang_af,"π");   

       if(nub_pi ==0){      
        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("tan");               

        var str_1_bf = str_1.substr(0,ang_index+3);  
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg);  

        var str_1_bf = str_1_bf.toString().replace( /tan/g, "TAN") ; 

        var str_1_new = str_1_bf + ang_af + str_1_af;    
        
        var str_1 = str_1_new;     


                       }

        if(nub_pi !=0){      

        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("tan");                

        var str_1_bf = str_1.substr(0,ang_index+3);  
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg);  

        var str_1_bf = str_1_bf.toString().replace( /tan/g, "TAN") ;  

             if(nub_pi !=0){      

               for(var m=0 ; m< 2 ;m++){

                  var ang_af_rem =  m_star_rem_many(ang_af,1);      
                         
                   var ang_af = ang_af_rem ;

                  
                                             }

                                                  
                           }

          
        var str_1_new = str_1_bf + ang_af_rem + str_1_af;    
        
        var str_1 = str_1_new;     

                          }   

                                 }  

                                    } 

 
      var  str_1_new = str_1_new.replace(/ET/g , "sinh");    
      var  str_1_new = str_1_new.replace(/EU/g , "cosh");    
      var  str_1_new = str_1_new.replace(/EV/g , "tanh");    
      var  str_1_new = str_1_new.replace(/EH/g , "asin");    
      var  str_1_new = str_1_new.replace(/EK/g , "acos");    
      var  str_1_new = str_1_new.replace(/ER/g , "atan");    
      
      var  str_1_new = str_1_new.replace(/EB/g , "asinh");    
      var  str_1_new = str_1_new.replace(/EC/g , "acosh");    
      var  str_1_new = str_1_new.replace(/EF/g , "atanh");    
   
      var  str_1_new = str_1_new.replace(/SIN/g , "sin");    
      var  str_1_new = str_1_new.replace(/COS/g , "cos");    
      var  str_1_new = str_1_new.replace(/TAN/g , "tan");    

       var  str_1_new = str_1_new.replace(/\(\+/g , "(");    
       var  str_1_new = str_1_new.replace(/n\+/g , "(");     
       var  str_1_new = str_1_new.replace(/s\+/g , "(");     
  

     return  str_1_new;

  }


  

function m_tri_ang_360deg_rem(str){                                 
  var str_1 = str;
      var str_nub_deg = m_str_spc_count(str_1,"°");   
       if(str_nub_deg == 0){ var ans_1=str;  return ans_1 ;} 
        str_1 = str_1.replace(/asinh/g , "EB");    
        str_1 = str_1.replace(/acosh/g , "EC");    
        str_1 = str_1.replace(/atanh/g , "EF");   
        str_1 = str_1.replace(/asin/g , "EH");    
        str_1 = str_1.replace(/acos/g , "EK");    
        str_1 = str_1.replace(/atan/g , "ER");    
        str_1 = str_1.replace(/sinh/g , "ET");    
        str_1 = str_1.replace(/cosh/g , "EU");    
        str_1 = str_1.replace(/tanh/g , "EV");    
      var nub_sin = m_str_spc_count(str_1,"sin");   
      var nub_cos = m_str_spc_count(str_1,"cos");   
      var nub_tan = m_str_spc_count(str_1,"tan");  
  
       if(nub_sin ==0 && nub_cos ==0 && nub_tan ==0 ){  return str ;} 
        var str_1_new="" ;     
   if( nub_sin !=0 && str_nub_deg !=0){   
    for(var i=0 ;i < nub_sin ;i++){
     var ang_af = m_str_spec_part_af(str_1 ,"sin"); 
     var nub_deg_af = m_str_spc_count(ang_af,"°");   
        if(nub_deg_af ==0){      
        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("sin");               
        var str_1_bf = str_1.substr(0,ang_index+3);  
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg); 
        var str_1_bf = str_1_bf.toString().replace( /sin/g, "SIN") ;  
        var str_1_new = str_1_bf + ang_af + str_1_af;    
        var str_1 = str_1_new;     
                      }
       if(nub_deg_af !=0){      
        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("sin");               
        var str_1_bf = str_1.substr(0,ang_index+3);  
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg);  
        var str_1_bf = str_1_bf.toString().replace( /sin/g, "SIN") ;  
       
             if(nub_deg_af !=0){      
               for(var m=0 ; m< 2 ;m++){
                 var ang_af_rem =  m_star_deg_rem_many(ang_af);      
                 var ang_af = ang_af_rem ;
                 
 
                                             }
                                             
                           }
       
        var str_1_new = str_1_bf + ang_af_rem + str_1_af;   
        var str_1 = str_1_new;     

                          }   
                                 }   
                                   } 

 
if( nub_cos !=0 && str_nub_deg !=0){   
   
    for(var i=0 ;i < nub_cos ;i++){

     var ang_af = m_str_spec_part_af(str_1 ,"cos"); 

        var nub_deg_af = m_str_spc_count(ang_af,"°");   


         if(nub_deg_af ==0){      

        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("cos");                

        var str_1_bf = str_1.substr(0,ang_index+3);  
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg);  

        var str_1_bf = str_1_bf.toString().replace( /cos/g, "COS") ;  

        var str_1_new = str_1_bf + ang_af + str_1_af;    
        
        var str_1 = str_1_new;     


                       } 


        if(nub_deg_af !=0){      

        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("cos");               

        var str_1_bf = str_1.substr(0,ang_index+3);  
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg);  

        var str_1_bf = str_1_bf.toString().replace( /cos/g, "COS") ;  

             if(nub_deg_af !=0){      


               for(var m=0 ; m< 2 ;m++){


                  var ang_af_rem =  m_star_deg_rem_many(ang_af);     
                         
                   var ang_af = ang_af_rem ;

     
                                             }

                                                  
                           }

         
        var str_1_new = str_1_bf + ang_af_rem + str_1_af;    
        
        var str_1 = str_1_new;     


                          }   

                                 }   

                                    } 



if( nub_tan !=0 && str_nub_deg !=0){   
   
    for(var i=0 ;i < nub_tan ;i++){

     var ang_af = m_str_spec_part_af(str_1 ,"tan"); 

        var nub_deg_af = m_str_spc_count(ang_af,"°");   


         if(nub_deg_af ==0){      

        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("tan");              

        var str_1_bf = str_1.substr(0,ang_index+3);  
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg); 

        var str_1_bf = str_1_bf.toString().replace( /tan/g, "TAN") ;  

        var str_1_new = str_1_bf + ang_af + str_1_af;    
        
        var str_1 = str_1_new;     


                       }


        if(nub_deg_af !=0){      

        var str_1_g = str_1.length 
        var ang_af_lg = ang_af.length ; 
        var ang_index = str_1.indexOf("tan");               

        var str_1_bf = str_1.substr(0,ang_index+3); 
        var str_1_af = str_1.substr(ang_index+3+ang_af_lg ,str_1_g-ang_index-3-ang_af_lg);  

        var str_1_bf = str_1_bf.toString().replace( /tan/g, "TAN") ;  


             if(nub_deg_af !=0){      


               for(var m=0 ; m< 2 ;m++){


                  var ang_af_rem =  m_star_deg_rem_many(ang_af);      
                         
                   var ang_af = ang_af_rem ;

                  
                
                                             }

                                                  

                           }

    
             
        var str_1_new = str_1_bf + ang_af_rem + str_1_af;    
        var str_1 = str_1_new;     
                          }   

                                 }  
                                    } 


      var  str_1_new = str_1_new.replace(/ET/g , "sinh");    
      var  str_1_new = str_1_new.replace(/EU/g , "cosh");    
      var  str_1_new = str_1_new.replace(/EV/g , "tanh");    
      var  str_1_new = str_1_new.replace(/EH/g , "asin");    
      var  str_1_new = str_1_new.replace(/EK/g , "acos");    
      var  str_1_new = str_1_new.replace(/ER/g , "atan");    
      var  str_1_new = str_1_new.replace(/EB/g , "asinh");    
      var  str_1_new = str_1_new.replace(/EC/g , "acosh");    
      var  str_1_new = str_1_new.replace(/EF/g , "atanh");    
      var  str_1_new = str_1_new.replace(/SIN/g , "sin");    
      var  str_1_new = str_1_new.replace(/COS/g , "cos");    
      var  str_1_new = str_1_new.replace(/TAN/g , "tan");    
      var  str_1_new = str_1_new.replace(/\(\+/g , "(");    
      var  str_1_new = str_1_new.replace(/n\+/g , "(");     
      var  str_1_new = str_1_new.replace(/s\+/g , "(");     
 
     return  str_1_new;


  }


 function m_star_deg_many(str){                                

   var str_1 = str;
    
    var nub_1 = m_str_spc_count(str_1,"°");   
      for(var i=0; i< nub_1 ; i++){
            str_1 =  m_star_deg(str_1);   
             }

    str_1 = str_1.replace( /deg/g, "°") ;  
      return  str_1;

 }


function m_fun_aft_many(str,spec1,spec2){                     
   var str_1=str;
   var spec_1=spec1;
   var spec_2=spec2;

   var nub_1 = m_str_spc_count(str_1,spec_1);   
   for(var i=0; i< nub_1 ; i++){
            str_1 =  m_fun_aft(str_1,spec_1,spec_2);     
               }

       return  str_1;
 
}



function m_hat_bf_aft_many(str,spec1,spec2){                   
   var str_1=str;
   var spec_1=spec1;
   var spec_2=spec2;

   var nub_1 = m_str_spc_count(str_1,spec_1);   
         
   for(var i=0; i< nub_1 ; i++){

            str_1 =  m_hat_bf_aft(str_1,spec_1,spec_2);     
      
                   }


   return  str_1;
    
}


function m_hat_bf_aft_many_inv(str,spec1,spec2){        

   var str_1=str.toString().trim();
   var spec_1=spec1;
   var spec_2=spec2;
   var data_fst = str_1.substr(0,1);

     if(data_fst =="-"){ var str_1="0"+str_1;}    

   var nub_1 = m_str_spc_count(str_1,spec_1);   
         
 
      for(var i = nub_1; i>0 ; i--){

            str_1 =  m_hat_bf_aft_inv(str_1,spec_1,spec_2);     
            
                   }

         
         str_1 = str_1.replace( /\,/g, "\^") ;  

  return  str_1;
    
}


function m_str_b_sec(str,spec){     
   var str_1 = str;
   var spec_1 = spec;
   var index_a= m_str_spc_index(str_1,spec_1);           
   
   var str_b_part=str_1.substr(0 ,index_a);
 
   return  str_b_part;

}



function m_str_math_replacec(this_it){         
var this_it_a = this_it;
           this_it_a = this_it_a.toLowerCase(); 
           this_it_a = this_it_a.replace(/q/g , "Q");
           this_it_a = m_fun_aft_many(this_it_a ,' ','');   
           this_it_a = this_it_a.replace(/e-/g , "eQ");      
           this_it_a = this_it_a.replace(/e\+/g , "e");  
           this_it_a = m_fact_many(this_it_a); 
           this_it_a = m_hat_bf_aft_many_inv(this_it_a ,'^','');   
           this_it_a = m_hat_bf_aft_many(this_it_a ,'^','hhh');
           this_it_a = this_it_a.replace(/hhh/g , "m_pow"); 
           this_it_a = m_fun_aft_many(this_it_a ,'asinh','azh');       
           this_it_a = m_fun_aft_many(this_it_a ,'asin','azz');   
           this_it_a = m_fun_aft_many(this_it_a ,'sinh','zzh');   
           this_it_a = m_fun_aft_many(this_it_a ,'sin','zzz');   
           this_it_a = m_fun_aft_many(this_it_a ,'acosh','ayh');   
           this_it_a = m_fun_aft_many(this_it_a ,'acos','ayy');   
           this_it_a = m_fun_aft_many(this_it_a ,'cosh','yyh');   
           this_it_a = m_fun_aft_many(this_it_a ,'cos','yyy');   
           this_it_a = m_fun_aft_many(this_it_a ,'atanh','axh');   
           this_it_a = m_fun_aft_many(this_it_a ,'atan','axx');   
           this_it_a = m_fun_aft_many(this_it_a ,'tanh','xxh');   
           this_it_a = m_fun_aft_many(this_it_a ,'tan','xxx');   
           this_it_a = this_it_a.replace(/azh/g , "m_asinh");         
           this_it_a = this_it_a.replace(/azz/g , "m_asin");     
           this_it_a = this_it_a.replace(/zzh/g , "m_sinh");     
           this_it_a = this_it_a.replace(/zzz/g , "m_sin");                
           this_it_a = this_it_a.replace(/ayh/g , "m_acosh");     
           this_it_a = this_it_a.replace(/ayy/g , "m_acos");     
           this_it_a = this_it_a.replace(/yyh/g , "m_cosh");     
           this_it_a = this_it_a.replace(/yyy/g , "m_cos");     
           this_it_a = this_it_a.replace(/axh/g , "m_atanh");      
           this_it_a = this_it_a.replace(/axx/g , "m_atan");     
           this_it_a = this_it_a.replace(/xxh/g , "m_tanh");     
           this_it_a = this_it_a.replace(/xxx/g , "m_tan");     
           this_it_a = m_fun_aft_many(this_it_a ,'exp','eee');    
           this_it_a = this_it_a.replace(/eee/g , "m_exp");   
           this_it_a = m_fun_aft_many(this_it_a ,'ln','nnn');   
           this_it_a = this_it_a.replace(/nnn/g , "m_ln");   
           this_it_a = m_fun_aft_many(this_it_a ,'log','ggg');    
           this_it_a = this_it_a.replace(/ggg/g , "m_log");   
           this_it_a = m_hat_bf_aft_many(this_it_a ,'/','DDD');           
           this_it_a = this_it_a.replace(/DDD/g ,'m_mtx_real_div');    
           this_it_a = this_it_a.replace(/\/1°/g , "\/(0.017453292519943295769236907684886127134428718885417254560971914401710091146034494436822415696345094822123044925073790592483854692275281012398474218934047117319168245015010769561697553581238605305168788691271172087032963589602642490187704350918173343939698047594019224158946968481378963297818112495229298469927814479531045416008449560904606967176196468710514390888951836280826780369563245260844119508941294762613143108844183845478429899625621072806214155969235444237497596399365292916062377434350066384054631518680225870239366785527479973470762170567665894131682058551206534962093068803748991487052250733336489595251464226821032063015321053384297984326230380227229027519056369719918728059957109384771797455666422845161233115911302323110075720970951722002881706729722222213183211388616998509626756090658861246996974149490570236235045851914916862566284378727833350765770849369930740046563447873209273040575545852724604197048506442015910457521042187510876565876558512062371147850010710425617755051202334438544973651117030477)");    
            this_it_a = this_it_a.replace(/\/°/g , "\/(0.017453292519943295769236907684886127134428718885417254560971914401710091146034494436822415696345094822123044925073790592483854692275281012398474218934047117319168245015010769561697553581238605305168788691271172087032963589602642490187704350918173343939698047594019224158946968481378963297818112495229298469927814479531045416008449560904606967176196468710514390888951836280826780369563245260844119508941294762613143108844183845478429899625621072806214155969235444237497596399365292916062377434350066384054631518680225870239366785527479973470762170567665894131682058551206534962093068803748991487052250733336489595251464226821032063015321053384297984326230380227229027519056369719918728059957109384771797455666422845161233115911302323110075720970951722002881706729722222213183211388616998509626756090658861246996974149490570236235045851914916862566284378727833350765770849369930740046563447873209273040575545852724604197048506442015910457521042187510876565876558512062371147850010710425617755051202334438544973651117030477)");   
             this_it_a =  m_star_deg_many(this_it_a);           
             this_it_a = this_it_a.replace(/°/g , "(0.017453292519943295769236907684886127134428718885417254560971914401710091146034494436822415696345094822123044925073790592483854692275281012398474218934047117319168245015010769561697553581238605305168788691271172087032963589602642490187704350918173343939698047594019224158946968481378963297818112495229298469927814479531045416008449560904606967176196468710514390888951836280826780369563245260844119508941294762613143108844183845478429899625621072806214155969235444237497596399365292916062377434350066384054631518680225870239366785527479973470762170567665894131682058551206534962093068803748991487052250733336489595251464226821032063015321053384297984326230380227229027519056369719918728059957109384771797455666422845161233115911302323110075720970951722002881706729722222213183211388616998509626756090658861246996974149490570236235045851914916862566284378727833350765770849369930740046563447873209273040575545852724604197048506442015910457521042187510876565876558512062371147850010710425617755051202334438544973651117030477)");   
             
             this_it_a = m_replace_star(this_it_a) ;
             this_it_a = m_star_many(this_it_a); 
      
return  this_it_a;
}
  
 function cursor_sec_recal_t( ){                
  
    var str_a = cursor_re_start(1);                
    var str_b = cursor_re_start(2);                
    var str_c = cursor_re_start(3);                
      
     var new_str ="";

    var str_2_0_1 = m_str_b_sec(str_b,"<--");          
    var str_2_0_2 = m_str_b_sec(str_b,"=");          
       
      if(str_2_0_1.length >0){

         var str_2_0=str_2_0_1;}
       else{
          var str_2_0=str_2_0_2;}
   
    var str_2_0_r =  m_str_math_replacec(str_2_0);     

    var str_2_0_r_ans = eval(str_2_0_r);             
     
 if( str_2_0_r_ans >=0 || str_2_0_r_ans < 0){    
         
        var new_str = str_a+str_2_0.toString().trim()+"="+str_2_0_r_ans.toString().trim()+";"+str_c ;

          document.getElementById('input').value = "";        
           document.getElementById('input').value = new_str;


                                           }

       else {
        
            str_2_0_r_ans =  m_str_spc_inter( str_2_0_r_ans,"<",">");    

         document.getElementById('input').value = "";        

         document.getElementById('input').value = str_a+str_2_0 ;
               newline_1();                 

         document.getElementById('input').value +=  str_2_0_r_ans+";" +str_c ;   
      
             }
  
     
  }



 function m_oct_nb(str_a) {             
 var stra=str_a;
  var lg=stra.length;
  var test_nub1=1;
  var test_nub2=1;
  if(lg>=200){ var test_nub1=100 ;}
    else { var test_nub1 = lg-1 ;}
   for(var i=0;i<test_nub1;i++){
     var char_1= stra.toString().substr(0,1);  
     var char_2= stra.toString().substr(1,1);  
     var index_1= m_str_spc_index(stra,"1") ; 
     var index_2= m_str_spc_index(stra,"2") ; 
     var index_3= m_str_spc_index(stra,"3") ; 
     var index_4= m_str_spc_index(stra,"4") ; 
     var index_5= m_str_spc_index(stra,"5") ; 
     var index_6= m_str_spc_index(stra,"6") ; 
     var index_7= m_str_spc_index(stra,"7") ; 
     var index_8= m_str_spc_index(stra,"8") ; 
     var index_9= m_str_spc_index(stra,"9") ; 
         if((char_1=="0" && (index_1==1 || index_2==1 ||index_3==1 || index_4==1 ||index_5==1 || index_6==1 ||index_7==1 || index_8==1 ||index_9==1 || char_2=="0" ))||char_1==""){ 
             var  stra=stra.substring(1,lg);
             var  lg=stra.length;    }   
                          }
    var lg=stra.length;  
      if(lg>=200){ var test_nub2=100 ;}
      else { var test_nub2 = lg-1 ;}
    for(var i=0;i<test_nub2 ;i++){       
        var stra =m_replace(stra ,"+00" ,"+0" ) ;         
        var stra =m_replace(stra ,"-00" ,"-0" ) ;         
        var stra =m_replace(stra ,"*00" ,"*0" ) ;           
        var stra =m_replace(stra ,"/00" ,"/0" ) ;         
        var stra =m_replace(stra ,"^00" ,"^0" ) ;          
        var stra =m_replace(stra ,"(00" ,"(0" ) ;        
        var stra =m_replace(stra ,"(-00" ,"(-0" );        
        var stra =m_replace(stra ,"+0000" ,"+0" ) ;        
        var stra =m_replace(stra ,"-0000" ,"-0" ) ;         
        var stra =m_replace(stra ,"*0000" ,"*0" ) ;           
        var stra =m_replace(stra ,"/0000" ,"/0" ) ;         
        var stra =m_replace(stra ,"^0000" ,"^0" ) ;         
        var stra =m_replace(stra ,"(0000" ,"(0" ) ;          
        var stra =m_replace(stra ,"(-0000" ,"(-0" );        
                                      }
        var stra =m_replace(stra ,"+01" ,"+1" ) ;         
        var stra =m_replace(stra ,"+02" ,"+2" ) ;        
        var stra =m_replace(stra ,"+03" ,"+3" ) ;          
        var stra =m_replace(stra ,"+04" ,"+4" )  ;        
        var stra =m_replace(stra ,"+05" ,"+5" ) ;         
        var stra =m_replace(stra ,"+06" ,"+6" ) ;          
        var stra =m_replace(stra ,"+07" ,"+7" ) ;         
        var stra =m_replace(stra ,"+08" ,"+8" ) ;         
        var stra =m_replace(stra ,"+09" ,"+9" );            
        var stra =m_replace(stra ,"-01" ,"-1" ) ;         
        var stra =m_replace(stra ,"-02" ,"-2" ) ;         
        var stra =m_replace(stra ,"-03" ,"-3" ) ;           
        var stra =m_replace(stra ,"-04" ,"-4" ) ;         
        var stra =m_replace(stra ,"-05" ,"-5" ) ;         
        var stra =m_replace(stra ,"-06" ,"-6" ) ;           
        var stra =m_replace(stra ,"-07" ,"-7" ) ;         
        var stra =m_replace(stra ,"-08" ,"-8" ) ;         
        var stra =m_replace(stra ,"-09" ,"-9" ) ;           
        var stra =m_replace(stra ,"*01" ,"*1" ) ;         
        var stra =m_replace(stra ,"*02" ,"*2" ) ;         
        var stra =m_replace(stra ,"*03" ,"*3" ) ;           
        var stra =m_replace(stra ,"*04" ,"*4" ) ;         
        var stra =m_replace(stra ,"*05" ,"*5" ) ;         
        var stra =m_replace(stra ,"*06" ,"*6" ) ;           
        var stra =m_replace(stra ,"*07" ,"*7" ) ;         
        var stra =m_replace(stra ,"*08" ,"*8" );          
        var stra =m_replace(stra ,"*09" ,"*9" ) ;           
        var stra =m_replace(stra ,"/01" ,"/1" );          
        var stra =m_replace(stra ,"/02" ,"/2" ) ;         
        var stra =m_replace(stra ,"/03" ,"/3" ) ;           
        var stra =m_replace(stra ,"/04" ,"/4" ) ;         
        var stra =m_replace(stra ,"/05" ,"/5" ) ;         
        var stra =m_replace(stra ,"/06" ,"/6" ) ;           
        var stra =m_replace(stra ,"/07" ,"/7" ) ;         
        var stra =m_replace(stra ,"/08" ,"/8" ) ;         
        var stra =m_replace(stra ,"/09" ,"/9" ) ;         
        var stra =m_replace(stra ,"^01" ,"^1" );          
        var stra =m_replace(stra ,"^02" ,"^2" );          
        var stra =m_replace(stra ,"^03" ,"^3" );            
        var stra =m_replace(stra ,"^04" ,"^4" ) ;         
        var stra =m_replace(stra ,"^05" ,"^5" );          
        var stra =m_replace(stra ,"^06" ,"^6" );            
        var stra =m_replace(stra ,"^07" ,"^7" ) ;         
        var stra =m_replace(stra ,"^08" ,"^8" );          
        var stra =m_replace(stra ,"^09" ,"^9" );            
        var stra =m_replace(stra ,"(01" ,"(1" ) ;         
        var stra =m_replace(stra ,"(02" ,"(2" );          
        var stra =m_replace(stra ,"(03" ,"(3" );            
        var stra =m_replace(stra ,"(04" ,"(4" ) ;         
        var stra =m_replace(stra ,"(05" ,"(5" ) ;         
        var stra =m_replace(stra ,"(06" ,"(6" ) ;           
        var stra =m_replace(stra ,"(07" ,"(7" ) ;         
        var stra =m_replace(stra ,"(08" ,"(8" ) ;         
        var stra =m_replace(stra ,"(09" ,"(9" );            
        var stra =m_replace(stra ,"(-01" ,"(-1" );          
        var stra =m_replace(stra ,"(-02" ,"(-2" ) ;         
        var stra =m_replace(stra ,"(-03" ,"(-3" );            
        var stra =m_replace(stra ,"(-04" ,"(-4" ) ;         
        var stra =m_replace(stra ,"(-05" ,"(-5" ) ;         
        var stra =m_replace(stra ,"(-06" ,"(-6" ) ;           
        var stra =m_replace(stra ,"(-07" ,"(-7" );          
        var stra =m_replace(stra ,"(-08" ,"(-8" ) ;         
        var stra =m_replace(stra ,"(-09" ,"(-9" ) ;         
   return stra ;
  }

   function m_abs(x){         

    var xx = x.toString().trim() ;
    var xx_fst=xx.substr(0,1);
     if(xx_fst=="-"){ var xx=xx.substr(1,xx.length-1);}

       return xx; 

  }



   function m_abs(x){         

    var xx = x.toString().trim() ;
    var xx_fst=xx.substr(0,1);
     if(xx_fst=="-"){ var xx=xx.substr(1,xx.length-1);}

       return xx; 

     }


 function m_sing(nub){        
    var nn = nub;
    var res = nn % 2;
 
        return res; 
    }

 function m_sgn(base,p){         
    var bb = base ;
    var pp = p ;
    var rr = m_sing(pp);
    var ans_1 = -1;

      if(bb==-1 && rr==0){
        ans_1 = 1;
        }
  
      return ans_1;  

     }



function m_cut_nub_m_s(nub){             

    var nn = nub.toString().trim();               
    var nn_lg = nn.length;      
     var count_p =0 ;

     var pos_pot = nn.indexOf(".");   

     var nn_lg = nn.length;

     var point_index = m_str_spc_index(nn,".");            

    
    if(pos_pot != -1){               
       var count_p =  point_index;  
                     }
    else{ var count_p =  nn_lg ;}    
   
       return count_p;  
  }


function m_cut_nub_m(nub){             
     var nn = m_abs(nub);                
    var nn_lg = nn.toString().length;       
          
    var count_p =0 ; 
       for(var i =0  ; i < (nn_lg) ; i++){
            if(nn >=1 ){
              count_p =count_p +1;
               nn = nn/10;
                       }
                                         }
      if(nub < 0 ){count_p = count_p +1;}   

      if(nub == 0 ){count_p = -1;}   

      return count_p;  
  }

function m_cut_nub_p(nub){             
    var nn=nub;
    var nn_str = nn.toString().trim();
    var nn_lg = nn.toString().trim().length;  

    var nn_m = m_cut_nub_m(nub);       

    var e_index = m_str_spc_index(nn_str,"e");            
     
     if(e_index ==0){
       var count_p = nn_lg - nn_m -1 ;    
                    }
      else{
         var e_after = nn_str.substring(e_index+1,nn_lg); 

              var count_p =m_abs(e_after)+1;                    
                 
           }

    
        return count_p;    
  }




function m_nub_m_s(nub){         
   var nn = nub.toString().trim();
   var mb = m_cut_nub_m_s(nn);   
   var ans_1= nn.toString().substr(0,mb);

    return ans_1; 
     
}



function m_nub_m(nub){         
 
   var nn = nub.toString().trim();
   var pos_pot = nn.indexOf(".");   
   var pos_e = nn.indexOf("e");     
   var nn_lg = nn.length ;
   var ans_1 ="";

   if(pos_pot !=-1 ) { var ans_1=nn.substr(0,pos_pot); }   
   if(pos_pot ==-1 &&  pos_e ==-1) { var ans_1=nn ; }      
   if(pos_pot ==-1 &&  pos_e !=-1) { var ans_1=nn ; }      
   if(ans_1 == '-0' ){ var ans_1=0;}
    
    return ans_1; 
     
}



function m_nub_p(nub){         
 
   var nn = nub;    
   var nn_lg =nn.length;
   var nn_str=nn.toString();
   var nn_first =nn_str.substr(0,1);

      if(nn_first=="-"){ var nn_abs = nn_str.substr(1,nn_lg-1);}
      else{ var nn_abs = nn_str;}
  
   var nn_abs_str = nn_abs.toString();  
   var str_lg = nn_abs_str.length;
   var data_t="";
          var pos_pot = nn_abs_str.indexOf(".");  
          var pos_e = nn_abs_str.indexOf("e");  
          var pos_ngt = nn_abs_str.indexOf("-");  
          var pos_pst = nn_abs_str.indexOf("+");  
   
     if(pos_pot != -1 && pos_e==-1 && pos_ngt==-1 && pos_pst ==-1){    
                          
          var data_t = nn_abs_str.substr( pos_pot,(str_lg - pos_pot));     
                   if(nn<0){  var data_t="-0"+data_t ; }  
                    else{      var data_t="0"+data_t ;}    

              
                              return data_t ; }                           
     
     else if( pos_e !=-1  && pos_ngt !=-1 && pos_pst ==-1 ){    
          if(pos_pot == -1){   
                 var data_bf = nn_abs_str.substr( 0,pos_e);}                                                      
           else{ var data_bf = nn_abs_str.substr( 0,pos_pot) + nn_abs_str.substr( pos_pot+1,pos_e-pos_pot-1); }  
           var data_af = nn_abs_str.substr(( pos_e+1),(str_lg-pos_e));   
           var data_af = m_abs(data_af);
     
               var data_a="0.";
                      while( data_af >1){
                             data_a = data_a+"0" ;
                             data_af= data_af-1;    

                                         }
               var data_t= data_a + data_bf ;

               if( nub < 0 ){  var data_t="-"+ data_t.toString();}
                         return data_t ;
                 
           
                 }


      else if(pos_pot == -1 && pos_e ==-1 && pos_ngt==-1 && pos_pst ==-1){ return 0 ;}  
      else if( pos_e !=-1  && pos_pst !=-1){ return 0 ;}     
       else{ return "未處理" ;}   

      }


function m_round(nub){            
   var nub_a=nub;
   var nub_m= m_nub_m(nub_a);      
   var nub_p= m_abs(m_nub_p(nub_a));      
   var ans_1=0;
    if( nub_m >0 && nub_p >=0.5){  ans_1=nub_m+1; }
    if( nub_m >0 && nub_p < 0.5){  ans_1=nub_m ; }
    if( nub_m <0 && nub_p >=0.5){  ans_1=nub_m-1; }
    if( nub_m <0 && nub_p < 0.5){  ans_1=nub_m; }

     return ans_1; 
}



function m_fix_str_lst(nub){    
                             
   var nub_str = nub.toString().trim();  
   var new_nub_str="";

           var nub_str_a = m_str_power(nub_str,1); 
           var str_lg =  nub_str_a.length ;        
           
           var pos_pot_e = nub_str_a.indexOf(".");    
           var str_lst = nub_str_a.substr(str_lg-1,1);

         if( pos_pot_e !=-1 && (str_lg-pos_pot_e) >200 && str_lst ==9){
                  
           var new_nub_str = m_fix(nub_str,str_lg-pos_pot_e-5);
                }
            
          else{ 
                 var new_nub_str = nub_str;
   
                  return new_nub_str;
                                       }

     return new_nub_str;
}


function m_fix_pow_lst(nub){    
                             
   var nub_str = nub.toString().trim();  

          var pos_e = nub_str.indexOf("e");     
          var pos_ngt = nub_str.indexOf("-");   
          var pos_pst = nub_str.indexOf("+");   

           var nub_e = m_str_power(nub_str,0); 
               var nub_e = nub_e.toString().trim();  
              var pos_pot_e = nub_e.indexOf(".");    
        
             var str_lg =  nub_e.length ;             
             var str_lst = nub_e.substr(str_lg-1,1); 
          

         if(pos_e !=-1 && pos_pot_e !=-1 && (str_lg-pos_pot_e) >200  && str_lst ==9){
                     
           var nub_e_p = m_fix(nub_e,str_lg-pos_pot_e-2);
                        
 
             if(nub_e_p <=0){
                var new_nub_str = m_str_power(nub_str,1)+"e"+ nub_e_p;       
                             }
              else{var new_nub_str = m_str_power(nub_str,1)+"e+"+ nub_e_p;}  

                                        }
          else{ 
                 var new_nub_str = nub;
   
                  return new_nub_str;
                                       }

     return new_nub_str;
}



function m_fix_pow(nub,pit_n){    

                             
   var nub_str = nub.toString().trim();  
         var pos_e = nub_str.indexOf("e");     
          var pos_ngt = nub_str.indexOf("-");   
          var pos_pst = nub_str.indexOf("+");   
           var nub_e = m_str_power(nub_str,0);     

               var nub_e = nub_e.toString().trim();  

               var pos_pot_e = nub_e.indexOf(".");    

         if(pos_e !=-1 && pos_pot_e !=-1){
           var nub_e_p = m_fix(nub_e,pit_n);
            
          if(nub_e_p <=0){
                var new_nub_str = m_str_power(nub_str,1)+"e"+ nub_e_p;       
                             }
              else{var new_nub_str = m_str_power(nub_str,1)+"e+"+ nub_e_p;}  


                                        }

          else{ 
                 var new_nub_str = nub;
   
                  return new_nub_str;
                                       }

     return new_nub_str;
}
 
 
 
function m_fix(nub,pit_n){                 
   var nn = nub;                           
   var nn_abs_str = nn.toString().trim();  
   var str_lg = nn_abs_str.length;         
   var data_nn_test= nn_abs_str.substr(0,1); 
         if(data_nn_test=="-"){              
                 nn_abs_str = nn_abs_str.substr(1,str_lg-1);
                  str_lg = str_lg -1;       
                                }
          else{ nn_abs_str = nn_abs_str;}
   var pnn = pit_n ;     
   var data_t="";
          var pos_pot = nn_abs_str.indexOf(".");   
          var pos_e = nn_abs_str.indexOf("e");     
          var pos_ngt = nn_abs_str.indexOf("-");  
          var pos_pst = nn_abs_str.indexOf("+");   
          var nub_e =m_str_power(nn_abs_str,0);          
           if(pos_pot == -1){ return nub ;} 
               var chk_lg_1 = pos_e-pos_pot-1;
               var chk_lg_2 = str_lg-pos_pot-1; 
           if((pos_e == -1)&& chk_lg_2 <=pnn){ return nub ;}  
           if((pos_e != -1)&& chk_lg_1 <=pnn){ return nub ;}  
    var data_a_test  = nn_abs_str.substr((pos_pot+pnn+1),1);    
    var data_bf  = nn_abs_str.substr(0,pos_pot);                   
    var data_a   = nn_abs_str.substr((pos_pot+pnn),1);         
    if(pos_e !=-1 && (pos_e-pos_pot ) > pnn){ var data_af  = nn_abs_str.substr((pos_pot+1),pnn); }  
    if(pos_e !=-1 && (pos_e-pos_pot ) <= pnn) { return nn ; }                                        
    if(pos_e ==-1 && (nn_abs_str.length - pos_pot-1 ) > pnn){ var data_af  = nn_abs_str.substr((pos_pot+1),pnn); }   
    if(pos_e ==-1){var data_af  = nn_abs_str.substr((pos_pot+1),pnn); }                             
    if( pos_e ==-1 && data_af.toString().trim().length <  pnn) { return nn ; }                                 
    if( data_af.toString().trim().length >= pnn && (data_a_test=="e"||parseInt(data_a_test) <=4) && pos_e !=-1 ){      
             var data_t = data_bf +"."+data_af.substr(0,data_af.length)+ nn_abs_str.substr(pos_e,(nn_abs_str.length-pos_e)); 
                                     }
   if( data_af.toString().trim().length >= pnn && parseInt(data_a_test) <=4 && pos_e ==-1 ){      
              var data_t = data_bf +"."+data_af.substr(0,pnn); 
                                    }
  if( data_af.toString().trim().length >= pnn && parseInt(data_a_test) >= 5 ){                  
               var AA =m_new_zero_mtx(1,MTX_COL);                                          
               var  data_af_in="0."+data_af.toString();            
                   AA=m_mtx_point_in(AA,data_af_in);         
                        if(data_bf !=0){
                              var data_bf = data_bf.toString() +"00000";
                                          }
                         else{ var data_bf = data_bf;}
                   var data_aa00= AA[0][0];
                   var data_asdfg = m_mtx_int_add(data_bf,data_aa00);    
                           AA[0][0] = data_asdfg;
                    var data_so =Math.floor(pnn / 5) ;  
                    var data_re = 5-(pnn % 5) ;         
                        if(data_re==0){data_so=data_so-1;} 
                   AA[0][data_so] =parseInt(AA[0][data_so])+parseInt(Math.pow(10,data_re))  ; 
                      BB = m_mtx_cell_five(AA);              
                    var sum_tt = m_mtx_cell_five_show(BB );   
                        sum_tt = m_mtx_trim(sum_tt) ;   
                    var zz_m = m_nub_m(sum_tt) ;                
                    var zz_p = m_nub_p(sum_tt) ;                
               if(pos_e ==-1 && zz_p !=0){                                          
                  var data_t = zz_m +"."+ zz_p.substr(2,pnn);
                            }
                 if(pos_e ==-1 && zz_p ==0){                                          
                  var data_t = zz_m ;
                              }
                if(pos_e !=-1 && zz_p !=0){                                         
                 var data_t = zz_m +"."+ zz_p.substr(2,pnn)+ nn_abs_str.substr(pos_e,(nn_abs_str.length-pos_e)); 
                           }
                 if(pos_e !=-1 && zz_p ==0){                                          
                  var data_t = zz_m +"e"+nub_e; 
                          }
                                                    }

             data_t = m_mtx_trim(data_t) ;   
            data_t = data_t.replace(/\.\./g,'\.');   
                      data_t_fst=data_t.substr(0,1);        
                      data_t_sec=data_t.substr(1,1); 
                      if(data_t_fst==0 && data_t_sec =="e"){  var data_t=0 ; } 
                      if(data_t_fst=="." ){  var data_t="0"+data_t ; }    
                     var data_cp =  m_mtx_real_str_comp(data_t,0);      
             if(data_nn_test=="-" && data_cp !=3){  var data_t="-"+data_t ; }  
                   data_t = m_mtx_trim(data_t);       
                 return data_t ; 
      }





 function m_delay_1(){
    var d1= new Date();
    var tc = d1.getMilliseconds();
       return tc; 
  }


 function m_delay_ms(ms){

   var data_a = new Date();
   var cur_date =null;

  do{cur_date =new Date();}

   while((cur_date -data_a)  < ms ){}

            
  }



function s_chang_hidden_array(array_1){     
   var array_a = array_1;
   var array_a_lg = array_a.length;
   var array_nb="";

     for(var i=0; i< array_a_lg ; i++){

      array_nb=array_a[i];

       

        s_chang_hidden_nub(array_nb);

      }

}


function s_chang_hidden_nub(nub_1){      
   var nub_a = nub_1;
       document.getElementById(nub_a).disabled=true;                  
        document.getElementById(nub_a).style.opacity=0.5;

     
}
  


function s_nub_array(nub_1){           
    var nub_a=nub_1;
    var array_a=[];

     s_chang_visible_all();       

  
  
    switch(nub_a){

      case "1_0":
      array_a=["1_0","1_1","1_2","1_4","2_0","2_1","2_2","2_3","2_4","2_5","3_0","3_1","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_4","5_5"];
      break;

    case "1_1":
      array_a=["1_0","1_1","1_4","1_5","1_6","1_2","2_0","2_2","2_3","2_4","2_5","2_6","3_0","3_2","3_3","3_4","3_5","3_6","4_2","4_3","4_4","4_5","4_6","5_1","5_2","5_4","5_5","5_6"];
      break;

    case "1_2":
      array_a=["1_0","1_1","1_2","1_4","2_0","2_1","2_2","2_3","2_4","2_5","3_1","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_4","5_5"];

      break;

      case "1_3":
     
      array_a=["1_2","1_5","1_6","2_6","3_0","3_6","4_6","5_1","5_2","5_5"];
      break;
  
    case "1_4":
      
      array_a=["1_5","1_6","2_6","4_6","5_1","5_2","3_0","5_6"];
      break;
    case "1_5":
      array_a=["1_1","1_4","2_0","2_1","2_2","2_3","2_4","2_5","3_0","3_1","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_4","5_5"];
     
      break;
   
    case "1_6":
      array_a=["1_2","1_5","1_6","2_6","3_0","3_6","4_6","5_1","5_2","5_5","5_6"];
      break;

    case "2_0":
       array_a=["1_0","1_1","1_2","1_4","2_0","2_1","2_2","2_3","2_4","2_5","3_0","3_1","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_4","5_5"];
      break;

    case "2_1":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_0","3_1","3_2","4_1","4_2","4_6","5_2","5_6"];
      break;
    case "2_2":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_0","3_1","3_2","4_1","4_2","4_6","5_1"];
      break;

    case "2_3":                
      array_a=["1_4","5_1"];
      break;
    case "2_4":
     array_a=["1_4","5_1"];
      break;
    case "2_5":
      array_a=["1_4","5_1"];
      break;
    case "2_6":
      array_a=["1_2","1_5","1_6","2_6","3_0","3_6","4_6","5_1","5_2","5_5","5_6"];
      break;
   
   
    case "3_1":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_0","3_1","3_2","4_1","4_2","4_6","5_2","5_6"];
      break;

   case "3_2":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_0","3_1","3_2","3_6","4_1","4_2","4_6","5_1","5_2","5_6"];
      break;

     case "3_3":
      array_a=["1_4","5_1"];
      break;
    case "3_4":
      array_a=["1_4","5_1"];
      break;
    case "3_5":
      array_a=["1_4","5_1"];
      break;
    case "3_6":
      array_a=["1_2","1_5","1_6","2_6","3_0","3_6","4_6","5_1","5_2","5_5","5_6"];
      break;
   
    case "4_1":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_0","3_1","3_2","4_1","4_2","4_6","5_2"];
      break;
    
      case "4_2":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_0","3_1","3_2","3_6","4_1","4_2","4_6","5_1","5_2","5_6"];
      break;
   
   
    case "4_3":
       array_a=["1_4","5_1"];
      break;
    case "4_4":
      array_a=["1_4","5_1"];
      break;
    case "4_5":
       array_a=["1_4","5_1"];
      break;
   case "4_6":
      array_a=["1_2","1_5","1_6","2_6","3_0","3_6","4_6","5_1","5_2","5_5","5_6"];
      break;
   
    
   case "5_1":                                                  
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_0","3_1","3_2","4_1","4_2","4_6","5_1","5_2","5_6"];
      break;

    case "5_2":
     array_a=["1_6","2_6","3_0","4_6","5_1","5_2","5_6"];
      break;
   
    case "5_3":   
       array_a=["1_5","1_6","2_6","3_0","4_6","5_1","5_2","5_5"];
      break;

    case "5_4":
       array_a=["1_4","5_1"];
      break;

    case "5_5":

      array_a=["1_1","1_0","1_2","1_4","1_6","2_0","2_1","2_2","2_6","3_0","3_1","3_2","3_6","4_1","4_2","4_6","5_1","5_2","5_5","5_6",];
  
      break;
    
     case "3_0":      
      array_a=["1_0","1_1","1_2","1_4","1_5","1_6","2_0","2_1","2_2","2_3","2_4","2_5","2_6","3_0","3_1","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_2","5_4","5_5","5_6"];
      break;

     case "5_6":
       array_a=["1_2","1_5","1_6","2_6","3_0","4_6","5_1","5_2","5_5","5_6"];
      break; 
   
    
     }
  
  
  
    return array_a;
 }



function s_map(item_1){

  var item_a = item_1;
  var item_a_p =item_a.substr(1,1);     

  var A = m_new_mtx(5,7);
  var B = m_new_mtx(5,7);
  var T = m_new_mtx(5,7);

  var item_map="" ;

   var A=[["°","a","!","<=x","(",")","/"],
         ["π","sin","exp","7","8","9","*"],
         ["e","cos","ln","4","5","6","-"],
         ["menu","tan","log","1","2","3","+"],
         ["open","h","^","ac","0",".","="]];                           

   var B=[["1_0","1_1","1_2","1_3","1_4","1_5","1_6"],
          ["2_0","2_1","2_2","2_3","2_4","2_5","2_6"],
          ["3_0","3_1","3_2","3_3","3_4","3_5","3_6"],
          ["4_0","4_1","4_2","4_3","4_4","4_5","4_6"],
          ["5_0","5_1","5_2","5_3","5_4","5_5","5_6"]];
          
     if( item_a_p =="_"){
        T=A;
        A=B;
        B=T;  }    

  
   var lg_c=A[0].length;    
   var lg_r=A.length;        


 
   for(var i=0; i<lg_r;i++){
     for(var j=0; j<lg_c;j++){
         if( item_a== A[i][j]){ 

         

             item_map=B[i][j] ;
              
                              } 
         
                           }
                          }
  

    return item_map; 
}



function s_chang_visible_all(){

    

     for(var i=1;i <= 5;i++){     

       for(var j=0;j <= 6;j++){   

       var item_n= i+"_"+j;
          document.getElementById(item_n).disabled=false;
              
          document.getElementById(item_n).style.opacity=1;      
                            }
                          }
         
     
                  }


function s_chang_no_visible_all(){   
   

     for(var i=1;i <= 5;i++){     

       for(var j=0;j <= 6;j++){   

       var item_n= i+"_"+j;
          document.getElementById(item_n).disabled=true;
              
          document.getElementById(item_n).style.opacity=1;      
                            }
                          }
     
                  }


function s_chang_sum(item){     
 
   s_chang_visible_all();       

    var item_1=item;
   
   var item_a= s_map(item_1);    
   
   var array_a = s_nub_array(item_a);      
    s_chang_hidden_array(array_a);     

}


function s_chang_sum_ini(){     
   s_chang_visible_all();       
   var item_1="=";

   var item_a= s_map(item_1);    
   var array_a = s_nub_array(item_a);      
     s_chang_hidden_array(array_a);     

}


  function s_check_nb(str){        
      var str_1=str;
      var befor_a = m_str_spc_count(str_1,"(");  
      var after_a = m_str_spc_count(str_1,")");   
  
          if( befor_a <=after_a){   
           
                           }
     }

 
   function s_check_end(str){                             
       var str_1=str;
       var asin_1 = m_str_spc_end(str_1,"asin");
       var acos_1 = m_str_spc_end(str_1,"acos");
       var acosh_1 = m_str_spc_end(str_1,"acosh");
       var atanh_1 = m_str_spc_end(str_1,"atanh");
       var atanh_2 = m_str_spc_end(str_1,"atanh-");
        var asin_3 = m_str_spc_end(str_1,"asin(");        
        var acos_3 = m_str_spc_end(str_1,"acos(");
        var acosh_3 = m_str_spc_end(str_1,"acosh(");      
        var atanh_3 = m_str_spc_end(str_1,"atanh(");      
        var asin_5 = m_str_spc_end(str_1,"asin(-");        
        var acos_5 = m_str_spc_end(str_1,"acos(-");
        var acosh_5 = m_str_spc_end(str_1,"acosh(-");      
        var atanh_5 = m_str_spc_end(str_1,"atanh(-");      
        var atanh_6 = m_str_spc_end(str_1,"atanh-0");     
       var atanh_7 = m_str_spc_end(str_1,"atanh(-0");      
       var atanh_8 = m_str_spc_end(str_1,"atanh0");      
       var atanh_9 = m_str_spc_end(str_1,"atanh(0");     
       var asin1_1 = m_str_spc_end(str_1,"asin1");        
       var acos1_1 = m_str_spc_end(str_1,"acos1");
       var asin1_0 = m_str_spc_end(str_1,"asin0");         
       var acos1_0 = m_str_spc_end(str_1,"acos0");
       var asin_30 = m_str_spc_end(str_1,"asin(0");        
       var acos_30 = m_str_spc_end(str_1,"acos(0");
       var asin_50 = m_str_spc_end(str_1,"asin(-0");        
       var acos_50 = m_str_spc_end(str_1,"acos(-0"); 
       var asin1_3 = m_str_spc_end(str_1,"asin(1");         
       var acos1_3 = m_str_spc_end(str_1,"acos(1");
       var asin_1_1 = m_str_spc_end(str_1,"asin-1");         
       var acos_1_1 = m_str_spc_end(str_1,"acos-1");
       var asin_1_3 = m_str_spc_end(str_1,"asin(-1");        
       var acos_1_3 = m_str_spc_end(str_1,"acos(-1");
       var ln_0 = m_str_spc_end(str_1,"ln0");        
       var log_0 = m_str_spc_end(str_1,"log0");        
       var ln_0_3 = m_str_spc_end(str_1,"ln(0");        
       var log_0_3 = m_str_spc_end(str_1,"log(0");        
       var ln_5 = m_str_spc_end(str_1,"ln(");        
       var log_5 = m_str_spc_end(str_1,"log(");        
       var ln_1 = m_str_spc_end(str_1,"ln0.");        
       var log_1 = m_str_spc_end(str_1,"log0.");        
       var ln_1_3 = m_str_spc_end(str_1,"ln(0.");        
       var log_1_3 = m_str_spc_end(str_1,"log(0.");        
       var a_0=m_str_spc_end(str_1,"0");        
       var a_1=m_str_spc_end(str_1,"1");         
       var a_2=m_str_spc_end(str_1,"2");         
       var a_3=m_str_spc_end(str_1,"3");        
       var a_4=m_str_spc_end(str_1,"4");         
       var a_5=m_str_spc_end(str_1,"5");         
       var a_6=m_str_spc_end(str_1,"6");        
       var a_7=m_str_spc_end(str_1,"7");         
       var a_8=m_str_spc_end(str_1,"8");         
       var a_9=m_str_spc_end(str_1,"9");        
       var a_ =m_str_spc_end(str_1,".");           

       var array_a=[];    


            if(a_0==1 || a_1==1 || a_2==1 || a_3==1 ||a_4==1 || a_5==1 || a_6==1 || a_7==1 ||a_8==1 || a_9==1 || a_==1 ){                                             
                array_a=["1_1","2_1","2_2","3_1","3_2","4_1","4_2"]; }

           if(asin_1==1 || acos_1==1 ||asin_3==1 || acos_3==1||asin_5==1 || acos_5==1 ){                                             
                array_a=["1_2","2_0","2_3","2_4","2_5","3_3","3_4","3_5","4_2","4_4","4_5"]; }

          if(acosh_1==1 || acosh_3==1|| acosh_5==1){                    
                array_a=["1_0","3_6","5_4","5_5"]; }


          if(atanh_1==1 ||atanh_2==1 || atanh_3==1 || atanh_5==1){                 
                array_a=["2_0","2_3","2_4","2_5","3_3","3_4","3_5","4_3","4_4","4_5"]; }   

           if(atanh_6==1 ||atanh_7==1 || atanh_8==1 || atanh_9==1){                 
                array_a=["2_0","2_3","2_4","2_5","3_3","3_4","3_5","4_3","4_4","4_5"]; }


          if(asin1_1==1 || acos1_1==1 ||asin_1_1==1 || acos_1_1==1 ||asin1_3==1 || acos1_3==1 ||asin_1_3==1 || acos_1_3==1  ){                 
                array_a=["1_0","1_1","1_2","2_1","2_0","2_2","2_3","2_4","2_5","3_1","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_2","5_4","5_5"];
                  }
        
           if(asin1_0==1 || acos1_0==1 ||asin_30==1 || acos_30==1||asin_50==1 || acos_50==1 ){                 
                array_a=["1_0","1_1","1_2","2_1","2_0","2_2","2_3","2_4","2_5","3_1","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_2","5_4"];
                  } 

       
           if(ln_0==1 || log_0==1 || ln_0_3==1 || log_0_3==1){                 
                array_a=["1_0","1_1","1_2","1_4","1_5","1_6","2_0","2_1","2_2","2_3","2_4","2_5","2_6","3_1","3_2","3_3","3_4","3_5","3_6","4_1","4_2","4_3","4_4","4_5","4_6","5_1","5_2","5_4"];
                  }

            if(ln_5==1 || log_5==1 ){                 
                array_a=["3_6"];
                  }



            if(ln_1==1 || log_1==1 || ln_1_3==1 || log_1_3==1){ 
                 array_a=["4_2","5_2"];  
             }


       s_chang_hidden_array(array_a);     

  }



function s_check_str_char(str,char_a ){       
     var str_1= str;
     var str_lg = str_1.length;
     var char_1=char_a;
     var char_lg=char_1.length;

    var A = m_new_mtx(1,str_lg); 

     var data_a = -1;
     var jj=0;
     
   var data_count=0;

  for(var i=0;i<str_lg;i++){

    var data_a = str_1.indexOf(char_1,i);

         
          if(data_a >=0){  A[0,jj]=data_a;

               data_count=data_count+1;

               jj=jj+1;

                
              var i=data_a+(char_lg-1) ;       
                 }
   
       }
                          
 
    return  data_count ;  
 }


function s_check_str_equal(str ){   

   var str_1=str;
   var data_a = s_check_str_char(str_1,"=");

     return  data_a ;  
}

function s_check_str_equation(str ){      

  var str_1=str;
      str_1 = str_1.replace(/m_mtx_real_div/g,'');
      str_1 = str_1.replace(/m_asinh\(/g,'');   
      str_1 = str_1.replace(/m_asin\(/g,'');    
      str_1 = str_1.replace(/m_sinh\(/g,'');    
      str_1 = str_1.replace(/m_sin\(/g,'');     
      str_1 = str_1.replace(/m_acosh\(/g,'');  
      str_1 = str_1.replace(/m_acos\(/g,'');    
      str_1 = str_1.replace(/m_cosh\(/g,'');    
      str_1 = str_1.replace(/m_cos\(/g,'');     
      str_1 = str_1.replace(/m_atanh\(/g,'');   
      str_1 = str_1.replace(/m_atan\(/g,'');    
      str_1 = str_1.replace(/m_tanh\(/g,'');    
      str_1 = str_1.replace(/m_tan\(/g,'');      
      str_1 = str_1.replace(/m_n\(/g,'');      
      str_1 = str_1.replace(/m_exp\(/g,'');    
      str_1 = str_1.replace(/m_ln\(/g,'');     
      str_1 = str_1.replace(/m_log\(/g,'');   
     
      str_1 = str_1.replace(/m_pow\(/g,'');    
   
      str_1 = str_1.replace(/\(/g,'');   
      str_1 = str_1.replace(/\)/g,'');   
      str_1 = str_1.replace(/\,/g,'');   
      str_1 = str_1.replace(/0|1|2|3|4|5|6|7|8|9/g,'');   
    
      str_1 = str_1.replace(/\+|\-|\*|\/|\.|\^/g,'');   
      str_1 = str_1.replace(/Q/g,'');   
      str_1 = str_1.replace(/π/g,'');   
       str_1 = str_1.replace(/°/g,'');   
       str_1 = str_1.replace(/e/g,'');   
      str_1=str_1.toString().trim();  
 
    return  str_1 ;


}





function m_new_mtx(rows,cols){

     var A =new Array(rows);                          

      for(var m=0; m<A.length; m++){
          A[m]= new Array(cols); }                     

  return A;
}


function m_new_space_mtx(rows,cols){               

     var A =m_new_mtx(rows,cols);                          

       for(var i=0;i<A.length ;i++){  
       for(var j=0;j<A[0].length ;j++){          
          A[i][j] ="";

                                      }

                                     }
  return A;
}



function m_new_zero_mtx(rows,cols){                    
     var A =m_new_mtx(rows,cols);                          
     for(var i=0;i<A.length ;i++){  
       for(var j=0;j<A[0].length ;j++){          
          A[i][j] =0;

                                      }

                                     }
      

  return A;
}

function m_new_unit_mtx(rows,cols){                    

     var A =m_new_mtx(rows,cols);                          

     for(var i=0;i<A.length ;i++){  
       for(var j=0;j<A[0].length ;j++){          
          A[i][j] =1;

                                      }

                                     }
      

  return A;
}

function m_new_5_unit_mtx(rows,cols){                   
     var A =m_new_zero_mtx(rows,cols);                        
       A[0][0] =100000;

     

 
  return A;
}


function m_mtx_space_end(A){       
  var AA=A;

      var data_row = AA.length;   
      var data_col=AA[0].length;  
   
      BB = m_new_space_mtx(data_row,data_col);               

    for(var i=0;i<data_row ;i++){

       var k=0 ; 

     for(var j=0;j<data_col ;j++){
      
         var data_element = AA[i][j].toString();

           if(data_element !=""){       
             BB[i][k] = data_element;
                  var k=k+1 ;
                                }   
     
                                }

                                 } 

  return BB;
}


function m_mtx_element_str(A){        
  var AA=A;
     var data_row = AA.length;   
      var data_col=AA[0].length;  
     var str_new = "" ;                

    for(var i=0;i<data_row ;i++){
     for(var j=0;j<data_col ;j++){
    
         var data_element = AA[i][j].toString();

           if(data_element !=""){       
               var str_new=str_new+data_element;

                                }  
    
                                }  

                                 }  

                var str_new=str_new.trim();  
  return str_new ;
}


function m_mtx_scale(A,x){      
  var AA=A;
  var xx=x;
      var data_row = AA.length;   
      var data_col=AA[0].length;  

    for(var i=0;i<data_row ;i++){
     for(var j=0;j<data_col ;j++){
        AA[i][j]=AA[i][j]*xx; 
       
                                }
                                 } 
  return AA;
}


function m_mtx_copy_mtx(A,B){      
  var AA=A;
  var BB=B;
 
      var data_row = AA.length;   
      var data_col=AA[0].length;  

    for(var i=0;i<data_row ;i++){

     for(var j=0;j<data_col ;j++){

        AA[i][j]= BB[i][j];   

                                }
                                 } 

  return AA;
}



function m_mtx_copy_col_mtx(A,B){      
  var AA=A;
  var BB=B;
      var data_row = AA.length;   
      var data_col=AA[0].length;  

    for(var i=0;i<data_row ;i++){     
     for(var j=0;j<(data_col-1) ;j++){
        AA[i][j]=BB[i][j+1]; 
       
                                            }
                                 } 


  return AA;
}



function m_mtx_point_add_total(x,y){     
  var A=m_new_zero_mtx(1,MTX_COL);            
  var B=m_new_zero_mtx(1,MTX_COL);            
  var C=m_new_zero_mtx(1,MTX_COL);                
      A=m_mtx_point_in(A,x);              
      B=m_mtx_point_in(B,y);              

         for(var i=0;i<C[0].length ;i++){  
              if(x<0){ A[0][i]=A[0][i]*(-1);}    
              if(y<0){ B[0][i]=B[0][i]*(-1);}    
             
                      }

    var C = m_mtx_point_add(A,B);

  return CC;
}




function m_mtx_point_add(A,B){        

    var AA=A;
    var BB=B; 
    AA= m_mtx_cell_five_brow(AA);        
    AA= m_mtx_cell_five(AA);             
    BB= m_mtx_cell_five_brow(BB);         
    BB= m_mtx_cell_five(BB);               
   var aa=AA[0][0].toString().trim();
   var bb=BB[0][0].toString().trim();
 
   var data_chk_a = aa.substr(0,1);
   var data_chk_b = bb.substr(0,1);

   if(data_chk_a =="-"){ 
         var aaa=aa.substr(1,aa.length-1);

        AA[0][0]= aaa ;   
         
         } 

   if(data_chk_b =="-"){ 
        var bbb=bb.substr(1,bb.length-1);
          
       BB[0][0]= bbb ;   
       
         }  

    var CC=m_new_zero_mtx(AA.length,AA[0].length);               

    if(data_chk_a =="-" && data_chk_b !="-"){                      
         CC= m_mtx_point_sub(BB,AA); 
         CC = m_mtx_cell_five_brow(CC); 
         CC= m_mtx_cell_five(CC);                
                                        }            

    else if(data_chk_a !="-" && data_chk_b =="-"){               
         CC= m_mtx_point_sub(AA,BB);
         CC = m_mtx_cell_five_brow(CC);  
         CC= m_mtx_cell_five(CC);
                                      }
    else{                                                    
        for(var n=0;n<CC[0].length ;n++){    
              var data_a = parseInt(AA[0][n]);
              var data_b = parseInt(BB[0][n]);
             
                   CC[0][n]= data_a + data_b;
                                                               
                                  }

                CC= m_mtx_cell_five(CC);                

                 if(data_chk_a =="-" && data_chk_b =="-"){
                     CC[0][0]= "-"+CC[0][0].toString() ;  }  
   
            }

  return CC;
}


function m_mtx_no_point_add(A,B){        

    var AA=A;
    var BB=B; 
    AA= m_mtx_cell_five_brow_int(AA);        
    AA= m_mtx_cell_five_int(AA);             
    BB= m_mtx_cell_five_brow_int(BB);         
    BB= m_mtx_cell_five_int(BB);                
   var aa=AA[0][0].toString().trim();
   var bb=BB[0][0].toString().trim();
   var data_chk_a = aa.substr(0,1);
   var data_chk_b = bb.substr(0,1);
   if(data_chk_a =="-"){ 
         var aaa=aa.substr(1,aa.length-1);

        AA[0][0]= aaa ;   
         
         } 

   if(data_chk_b =="-"){ 
        var bbb=bb.substr(1,bb.length-1);
          
       BB[0][0]= bbb ;   
       
         }  

    var CC=m_new_zero_mtx(AA.length,AA[0].length);                 

    if(data_chk_a =="-" && data_chk_b !="-"){                     
         CC= m_mtx_point_sub(BB,AA); 
         CC = m_mtx_cell_five_brow_int(CC); 
         CC= m_mtx_cell_five_int(CC);                
                                        }            

    else if(data_chk_a !="-" && data_chk_b =="-"){               
         CC= m_mtx_point_sub(AA,BB);
         CC = m_mtx_cell_five_brow_int(CC);  
         CC= m_mtx_cell_five_int(CC);
                                      }
    else{                                                    
        for(var n=0;n<CC[0].length ;n++){    
              var data_a = parseInt(AA[0][n]);
              var data_b = parseInt(BB[0][n]);
             
                   CC[0][n]= data_a + data_b;
                                                               
                                  }

                CC= m_mtx_cell_five_int(CC);               

                 if(data_chk_a =="-" && data_chk_b =="-"){
                     CC[0][0]= "-"+CC[0][0].toString() ;  }  
   
            }


  return CC;
}


function m_mtx_point_sub(A,B){  

   var AA=A;
   var BB=B;

   var aa = AA[0][0];
   var bb = BB[0][0];
       aa=aa.toString().trim(); 
       bb=bb.toString().trim(); 
 
   var aa_fst=aa.substr(0,1);
   var bb_fst=bb.substr(0,1);

     if(aa_fst =="-" && bb_fst == "-" ){   
  
          AA[0][0]=aa.substr(1,aa.length-1);  
          BB[0][0]=bb.substr(1,bb.length-1);
            for(var i=0; i< AA[0].length ; i++){            

                  var data_a_fst = parseInt(AA[0][i]);
                  var data_b_fst = parseInt(BB[0][i]);

                    if( data_a_fst != data_b_fst){
                         var i= AA[0].length }        

                     }  
 
             if(data_b_fst > data_a_fst){ 

                 CC= m_mtx_point_sub_bf(BB,AA); }       
             else{
                 CC= m_mtx_point_sub_bf(AA,BB);         
                 CC[0][0]= parseInt(CC[0][0]) *(-1);
                        if(CC[0][0]==0){ CC[0][0]= '-0';  }
                  }     
         
                                        }

    if(aa_fst !="-" && bb_fst!="-" ){   

                for(var i=0; i< AA[0].length ; i++){            
                  var data_a_fst = parseInt(AA[0][i]);
                  var data_b_fst = parseInt(BB[0][i]);

                    if( data_a_fst != data_b_fst){
                         var i= AA[0].length }        
                     }   
 
        if(data_a_fst > data_b_fst){ 
  
             CC= m_mtx_point_sub_bf(AA,BB);}

     else{ CC= m_mtx_point_sub_bf(BB,AA);              

              CC[0][0]= parseInt(CC[0][0]) *(-1);
                
                        if(CC[0][0]==0){CC[0][0]= '-0'; }
          }     

                                    }


      if(aa_fst !="-" && bb_fst=="-" ){            
          BB[0][0]= parseInt(BB[0][0]) *(-1);       

          CC= m_mtx_point_add(AA,BB);                
                                      }

       if(aa_fst =="-" && bb_fst!="-" ){             
          AA[0][0]= parseInt(AA[0][0]) *(-1);        
               if(AA[0][0]==0){ AA[0][0]= '0'; }       

             CC= m_mtx_point_add(AA,BB);             
              CC[0][0]= parseInt(CC[0][0]) *(-1);

                if(CC[0][0]==0){ CC[0][0]= '-0'; }

                                }          
       
 
  return CC;

 }

function m_mtx_point_sub_bf(A,B){        
    var AA=A;
    var BB=B; 

   
    var CC=m_new_zero_mtx(AA.length,AA[0].length);                 

    var data_a_fst=0;
    var data_b_fst=0;

          for(var i=0; i< AA[0].length ; i++){            

                  var data_a_fst = parseInt(AA[0][i]);
                  var data_b_fst = parseInt(BB[0][i]);

                    if( data_a_fst != data_b_fst){
                         var i= AA[0].length }        

                     }
     
        for(var n=0;n < CC[0].length ; n++){
             var data_a = parseInt(AA[0][n]);
             var data_b = parseInt(BB[0][n]);

                if(data_a_fst >= data_b_fst){
                   CC[0][n]= data_a - data_b;}
                else{
                   CC[0][n]= data_b - data_a;}     
                                            }

           if(data_a_fst < data_b_fst){
      
                   CC[0][0]= parseInt(CC[0][0])*(-1);                         

                     if(parseInt(CC[0][0]==0)){  CC[0][0]="-00000";}    

                                      }

                 CC = m_mtx_cell_five_brow(CC);   

                 CC = m_mtx_cell_five(CC);        
   
  return CC;
}


     


function m_mtx_trim(x){       

  var xx_st = x.toString().trim();       
 
  var xx_fst12 = xx_st.substr(0,2);

      if( xx_fst12 == '0e' || xx_st =='0.') { var data_t=0 ; return data_t ;}    

   var xx_st_1 = m_mtx_del_plus(xx_st);     

  var xx_st_2 = m_mtx_add_zero_bf(xx_st_1);     
 
   for(var i=0 ;i<10 ;i++){    

  var xx_st_3 = m_mtx_del_point(xx_st_2);    

  var xx_st_5 = m_mtx_del_zero_bf(xx_st_3);    

  var xx_st_6 = m_mtx_del_zero(xx_st_5);     

        var  xx_st_2 = xx_st_6;
            
                         }
    
   return xx_st_6;

}



function m_mtx_add_zero_bf(x){     

  var xx_st = x.toString().trim();
  var fst_st = xx_st.substr(0,1);
  var sec_st = xx_st.substr(1,1);

     if(fst_st =="."){ xx_st="0"+xx_st ;}

     if(fst_st =="-" && sec_st =="."){ xx_st="-0"+xx_st.substr(1,xx_st.length-1) ;}
      
        return xx_st;
}


function m_mtx_del_zero_bf(x){     

  var xx_st = x.toString().trim();
  var fst_st = xx_st.substr(0,1);
  var sec_st = xx_st.substr(1,1);
  var tri_st = xx_st.substr(2,1);

    for(var i=0 ;i < (xx_st.length-1);i++){   

       if(( fst_st ==0 || fst_st =="0") && (sec_st !=".")){ 

             var xx_st = xx_st.substr(1,xx_st_length-1);

                   var fst_st = xx_st.substr(0,1);  
                   var sec_st = xx_st.substr(1,2);  
                                                       }

                                           }  


     for(var i=0 ;i < (xx_st.length-1);i++){      

       if(fst_st =="-" && ( sec_st ==0 || sec_st =="0") && (tri_st !=".")){ 

             var xx_st = "-"+xx_st.substr(2,xx_st_length-2);

                   var fst_st = xx_st.substr(0,1);  
                   var sec_st = xx_st.substr(1,2);  
                   var tri_st = xx_st.substr(2,1);  

                                                       }

                                           }  

       return xx_st;
          
}


function m_mtx_del_zero(x){     
  
   var xx_st = x.toString().trim();
        var pos_pot  = xx_st.indexOf(".");    
         var pos_e  = xx_st.indexOf("e");    
         var st_lg = xx_st.length;
           
         var nub_e_x=0; 

          if(  pos_e != -1){                          
              nub_e_x =m_str_power(xx_st,0);          
              xx_st = m_str_power(xx_st,1);          

                           }

  var xx = xx_st;
  var xx_pot = xx.indexOf(".");
  var xx_lg  = xx.length;

  var xx_lst ="";  

  if(xx_lg >1){
     var xx_lst = xx.substr(xx_lg-1,1); 
              }
  
  var nn=0; 

     if(xx_lst=="0"){var nn=1;}
                  else{var nn=0;}   


 while(nn >0){       

  if(xx_pot != -1 && xx_lst=="0"){

           xx = xx.substr(0,(xx_lg-1));
              var xx_lg  = xx.length;       

               xx_lst =xx.substr(xx_lg-1,1); 

                  if(xx_lst=="0"){var nn=1;}
                  else{var nn=0;}   

                                  }  
    else{ var nn=0;}  
                 }  

     if(nub_e_x > 0){ xx=xx+"e+"+nub_e_x;}   
     if(nub_e_x < 0){ xx=xx+"e"+nub_e_x;}
     if(nub_e_x == 0){ xx=xx;}

     return xx;
}            


function m_mtx_del_point(x){     

   var xx_st = x.toString().trim();
      
          var lst_st = xx_st.substr(xx_st.length-1,1);    
          var lg = xx_st.length;

           for(var i=0 ;i< lg  ;i++){

             if( lst_st =="."){ xx_st = xx_st.substr(0,xx_st.length -1);
                               
                                var lst_st = xx_st.substr(xx_st.length-1,1);   
 
                                                                                 }
              else { var i= lg ;
                     
                    var  xx_st = xx_st ;

                    return xx_st;
                   }                                   

                             }

         var pos_pot  = xx_st.indexOf(".");    
         var pos_e  = xx_st.indexOf("e");     
         var st_lg = xx_st.length;
           
         var nub_e_x=0; 

          if( pos_pot ==-1){ return x ;} 
          if( xx_st=="0."){ return "0" ;}

          if(  pos_e != -1){ 
              nub_e_x =m_str_power(xx_st,0);          
              xx_st = m_str_power(xx_st,1);          

                           }

  var sutt=xx_st;

  var pos_pot_sum  = sutt.indexOf(".");
  var sum_lg  = sutt.length;
 
  if(pos_pot_sum == (sum_lg-1) ){sutt = sutt.substr(0,(sum_lg-1));}  
        
            if(nub_e_x > 0){ sutt=sutt+"e+"+nub_e_x;}   
     
            if(nub_e_x < 0){ sutt=sutt+"e"+nub_e_x;}
      
            if(nub_e_x == 0){ sutt=sutt;}

     return sutt;
}            


function m_mtx_test_msg(x){

   var  x= x.toString().trim();
    var x_msg = x.indexOf("Msg");
  
        if(x_msg !=-1 ){ return x;}     
        else{ return -1 ;}

}


function m_mtx_n_str_cpl_9(x){   

   var xx= x.toString().trim();
   var xx = m_str_e_to_str(xx);      
   var pos_pot  = xx.indexOf(".");    
   var st_lg = xx.length;

    if(pos_pot!=-1){ return xx;};  
   var data_x=xx;
   var data_y="";
    for(var i=0;i<st_lg;i++){     
      data_y=data_y+"9";}
    AA=m_new_zero_mtx(1,100);                
    BB=m_new_zero_mtx(1,100);                 
    CC=m_new_zero_mtx(1,100);                 
     AA=m_mtx_point_in_int(AA,data_x);  
     BB=m_mtx_point_in_int(BB,data_y);  
      for(var j=0; j< CC[0].length ;j++){

          var data_bb = BB[0][j];
          var data_bb = parseInt(data_bb); 
          var data_aa =  AA[0][j];
          var data_aa = parseInt(data_aa); 
               
         CC[0][j]= data_bb - data_aa;           
              
             
                                     }

         
      CC= m_mtx_cell_five_int(CC);           
  
      var  data_z="";  
      var  data_t="";  
  
       for(var k=0; k<CC[0].length ;k++){    

              var  data_t = CC[0][k].toString();
          
         data_z = data_t + data_z; 
         
                                      }
           
        var n=0;
            
      while(n<(CC[0].length*5)){   

        var data_fst=data_z.substr(0,1);  

              if(data_fst==0){

                  data_z=data_z.substr(1,data_z.length-1); 
          
                              }
               else { n=(CC[0].length*5);}
                  
                 var n=n+1;

                    } 

       if(data_z==""  ){var data_z=0;}
       if(data_z==-0  ){var data_z=0;}
       
   return data_z ;

}


function m_mtx_int_str_comp(x,y){      
   var  xx= x.toString().trim();
   var  yy= y.toString().trim();

    var x_e  = xx.indexOf("e");    
    var y_e  = yy.indexOf("e");    

     if(x_e !=-1 || y_e !=-1){ return ;};       

   var ant=0;
      if(xx!="" && yy==""){ var ant=1 ; return ant; }
      if(xx=="" && yy!=""){ var ant=2 ; return ant; }
      if(xx=="" && yy==""){ var ant=3 ; return ant; }
 
   var xx_fst = xx.substr(0,1);
   var yy_fst = yy.substr(0,1);

    if(xx_fst !="-" && yy_fst =="-"){ var ant=1 ; return ant; }   
    if(xx_fst =="-" && yy_fst !="-"){ var ant=2 ; return ant; }   

   var xx_lg = xx.length;
   var yy_lg = yy.length;
    if( xx_lg<=15 && yy_lg <=15){                
         xx_i = parseInt(xx);    
          yy_i = parseInt(yy);

          xx_f = parseFloat(xx);  
          yy_f = parseFloat(yy);

        if(( xx_i > yy_i)||( xx_f > yy_f)){ var ant=1 ; return ant; } 
        if(( xx_i < yy_i)||( xx_f < yy_f)){ var ant=2 ; return ant; } 
        if(( xx_i == yy_i)&&( xx_f == yy_f)){ var ant=3 ; return ant; } 
   
        } 

    else{ 
                                          
          if(xx_lg >= yy_lg){ var xy_lg = xx_lg; }    
                       else { var xy_lg = yy_lg; } 
                   
                   for(var i=0 ; i< xy_lg;i++){

                      var xx_word = xx.substr(i,1);
                      var yy_word = yy.substr(i,1);
                           
                       if( xx_word !="" &&  yy_word =="" && xx_fst !="-"){ var ant=1 ; return ant; }  
                       if( xx_word =="" &&  yy_word !="" && xx_fst !="-"){ var ant=2 ; return ant; }    
                       if( xx_word !="" &&  yy_word =="" && xx_fst =="-"){ var ant=2 ; return ant; }  
                       if( xx_word =="" &&  yy_word !="" && xx_fst =="-"){ var ant=1 ; return ant; }   
                       if(( xx_word > yy_word)&& xx_fst !="-"){ var ant=1 ; return ant; }  
                       if(( xx_word < yy_word)&& xx_fst !="-"){ var ant=2 ; return ant; }  
                       if(( xx_word > yy_word)&& xx_fst =="-"){ var ant=2 ; return ant; }  
                       if(( xx_word < yy_word)&& xx_fst =="-"){ var ant=1 ; return ant; }  
 
                                                   } 
                             var ant=3;
                            return ant ;

             }  
         
          
   }

function m_mtx_real_str_comp(x,y){      
 
   var  x= x.toString().trim();
   var  y= y.toString().trim();

   var ant=0;
    
      if(x!="" && y==""){ var ant=1 ; return ant; }
      if(x=="" && y!=""){ var ant=2 ; return ant; }
      if(x=="" && y==""){ var ant=3 ; return ant; }
 
    var xx = m_mtx_str_to_e(x);             
    var yy = m_mtx_str_to_e(y);   
    var xx = m_mtx_str_to_e_a(xx);             
    var yy = m_mtx_str_to_e_a(yy);
    var xx = m_mtx_str_to_e_ne(xx);             
    var yy = m_mtx_str_to_e_ne(yy);
     xx = m_fix_pow_lst(xx);    
     yy = m_fix_pow_lst(yy);    
     var xx_fst = xx.substr(0,1);
    var xx_sec = xx.substr(1,1);
    var xx_tri = xx.substr(2,1);
    var xx_e = m_mtx_e_str(xx,0);   
    var xx_lg = xx.length;
 
    var yy_fst = yy.substr(0,1);
    var yy_sec = yy.substr(1,1);
    var yy_tri = yy.substr(2,1);
    var yy_e = m_mtx_e_str(yy,0);   
    var yy_lg = yy.length; 
     if(xx_lg >= yy_lg){ var xy_lg = xx_lg; }    
     else { var xy_lg = yy_lg; } 
    if(xx_fst !="-" && yy_fst =="-"){ var ant=1 ; return ant; }   
    if(xx_fst =="-" && yy_fst !="-"){ var ant=2 ; return ant; }   
        var  xx_e=parseInt(xx_e);   
          var  yy_e=parseInt(yy_e); 

    if((xx_fst !="-" && yy_fst !="-")||(xx_fst =="-" && yy_fst =="-")){             
         if(xx_fst !="-" &&  xx !="0"  &&  yy =="0" && yy.length ==1){ var ant=1 ;   return ant; }       
          if(xx_fst =="-" &&  xx !="0"  &&  yy =="0" && yy.length ==1){ var ant=2 ;   return ant; }       
          if(xx =="0"  && xx.length ==1 &&  yy !="0" && yy_fst !="-"){ var ant=2 ; return ant; }        
                    

          if(xx =="0"  && xx.length ==1 &&  yy !="0" && yy_fst =="-"){ var ant=1 ; return ant; }        
                     

          if(xx =="0"  && xx.length ==1 &&  yy =="0" && yy.length ==1){ var ant=3 ; return ant; }        
 
            var data_e_cpl = m_mtx_int_str_comp(xx_e,yy_e);
           
               if(xx_fst !="-" && yy_fst !="-"){                    
                  if(data_e_cpl==1){ var ant=1 ; return ant; }            
                  if(data_e_cpl==2){ var ant=2 ; return ant; }            
                                            }
             if(xx_fst =="-" && yy_fst =="-"){                       
                 if(data_e_cpl==1){ var ant=2 ; return ant; }            
                  if(data_e_cpl==2){ var ant=1 ; return ant; }            
                                             }

             if((data_e_cpl == 3) && (xx_fst >  yy_fst)){ var ant=1 ; return ant; }   
             if((data_e_cpl == 3) && (xx_fst <  yy_fst)){ var ant=2 ; return ant; }   
          if(data_e_cpl == 3){

                            var xx_str = m_mtx_e_str(xx,1);   
                            var yy_str = m_mtx_e_str(yy,1);   
                   
                           
                           var ant = m_mtx_int_str_comp(xx_str,yy_str);
      
                               }
                             
                                                       
                                                               }   

   
          return ant; 
 
   }


function m_mtx_int_add(x,y){   
    var  xx= x.toString().trim();
    var  yy= y.toString().trim();

   var xx = m_str_e_to_str(xx);       
   var yy = m_str_e_to_str(yy);     

   var x_pos_pot  = xx.indexOf(".");    
   var y_pos_pot  = yy.indexOf(".");    

   var x_pos_e  = xx.indexOf("e");    
   var y_pos_e  = yy.indexOf("e");    
      if(x_pos_pot!=-1 ){ return ;};  
      if(y_pos_pot!=-1 ){ return ;};  
      if(x_pos_e !=-1 ){ return ;};  
      if(y_pos_e !=-1 ){ return ;};  

     
    var x_st_fst= xx.substr(0,1);
    var y_st_fst= yy.substr(0,1);

    if(x_st_fst=="-"){  var x_st=xx.substr(1,xx.length-1);} 
                      else{  var x_st = xx;}

      if(y_st_fst=="-"){  var y_st=yy.substr(1,yy.length-1);} 
                   else{  var y_st = yy;}

 
         if(x_st==0){ return y;}    

         if(y_st==0){ return x;} 

         var x_lg = x_st.length;
         var y_lg = y_st.length;
         var max_lg = 0;
         if( x_lg >= y_lg){ var max_lg = x_lg ;}
         else{var max_lg = y_lg ;}

         var data_z=0;

       if( max_lg <15){ var data_z= parseInt(x)+parseInt(y);
          return data_z;}

         var data_comp = m_mtx_real_str_comp(x_st,y_st);      
    
    var data_col=0;
    var data_col = Math.ceil(max_lg/5);    
   
    AA=m_new_zero_mtx(1,data_col);                     
    BB=m_new_zero_mtx(1,data_col);                 
    CC=m_new_zero_mtx(1,data_col);                 

     AA=m_mtx_point_in_int(AA,x_st);  
     BB=m_mtx_point_in_int(BB,y_st);  
 
    if((x_st_fst=="-" && y_st_fst=="-") || (x_st_fst!="-" && y_st_fst!="-")){
      for(var i=0;i< CC[0].length ;i++){              
          CC[0][i]=parseInt(AA[0][i])+parseInt(BB[0][i]);      
       }
         } 

   
     if((data_comp !=2)&&((x_st_fst=="-" && y_st_fst!="-") || (x_st_fst!="-" && y_st_fst=="-"))){
      for(var j=0;j< CC[0].length ;j++){                  
          CC[0][j]=parseInt(AA[0][j])-parseInt(BB[0][j]);      
 
       }
                     } 
 
    if((data_comp ==2)&&((x_st_fst=="-" && y_st_fst!="-") || (x_st_fst!="-" && y_st_fst=="-"))){
       for(var k=0;k< CC[0].length ;k++){                  
          CC[0][k]=parseInt(BB[0][k])-parseInt(AA[0][k]);      

       }
      
                      }

          
      CC= m_mtx_cell_five_brow_int(CC);     
      CC= m_mtx_cell_five_int(CC);           
 
      var  data_z="";  
      var  data_t="";  
  
       for(var k=0; k<data_col ;k++){       
              var  data_t = CC[0][k].toString();
 
         data_z = data_t + data_z; 

                                          }
               
        var n=0;
             
      while(n<(data_col*5)){   

        var data_fst=data_z.substr(0,1);  

              if(data_fst==0){

                  data_z=data_z.substr(1,data_z.length-1); 
          
                              }
               else { n=(data_col*5);}

                   
                 var n=n+1;

                    } 
          

                 data_z= data_z.toString();
 

       if(data_z==""){var data_z=0;}  

    if ((x_st_fst=="-" && y_st_fst=="-")||((data_comp !=2 && x_st_fst=="-" && y_st_fst!="-"))||((data_comp ==2 && x_st_fst!="-" && y_st_fst=="-"))){
         
          data_z ="-"+ data_z;

            }  


        if(data_z==-0  ){var data_z=0;} 
   
          return data_z; 
      
}


function m_mtx_int_sub(x,y){   
    var  xx= x.toString().trim();
    var  yy= y.toString().trim();

   var xx = m_str_e_to_str(xx);       
   var yy = m_str_e_to_str(yy);     

   var x_pos_pot  = xx.indexOf(".");    
   var y_pos_pot  = yy.indexOf(".");    

      if(x_pos_pot!=-1 ){ return ;};  
      if(y_pos_pot!=-1 ){ return ;};  
     
     var y_st_fst= yy.substr(0,1);

     var x_st = xx;

   
      if(y_st_fst=="-"){  var y_st=yy.substr(1,yy.length-1);}   
                   else{  var y_st = "-"+yy;}

       var data_z = 0; 
       var data_z = m_mtx_int_add(x_st,y_st);
         return data_z; 
      
}



function m_mtx_real_add(x,y){        
  
   var  x= x.toString().trim();
   var  y= y.toString().trim();

   var x_msg = m_mtx_test_msg(x);
   var y_msg = m_mtx_test_msg(y);
        if(x_msg !=-1 ){ return x;}     
        if(y_msg !=-1 ){ return y;}

   var  x_st= x;
   var  y_st= y;

   var  x_st_fst= x_st.substr(0,1);
   var  y_st_fst= y_st.substr(0,1);

      if(x_st_fst=="-"){  var x_st=x_st.substr(1,x_st.length-1);} 
                   else{  var x_st = x_st;}

      if(y_st_fst=="-"){  var y_st=y_st.substr(1,y_st.length-1);} 
                   else{  var y_st = y_st;}

    var  y_e = m_mtx_str_to_e(y_st);             
    var  x_e = m_mtx_str_to_e(x_st);           

    var  y_e = m_mtx_str_to_e_ne(y_e);               
    var  x_e = m_mtx_str_to_e_ne(x_e);              
    
    var  y_e = m_mtx_str_to_e_a(y_e).toString().trim();      
    var  x_e = m_mtx_str_to_e_a(x_e).toString().trim();       
         
             var fix_cols =MTX_COL;                       
  
    var  y_e_100 = m_fix(y_e,fix_cols).toString().trim();     
    var  x_e_100 = m_fix(x_e,fix_cols).toString().trim();      

   var  y_e_100 = y_e_100.toString();    
   var  x_e_100 = x_e_100.toString();
     
var sutt = " " ;

    if((y_e_100 == x_e_100 && x_st_fst=="-" &&  y_st_fst!="-")||(y_e_100 == x_e_100 && x_st_fst!="-" &&  y_st_fst=="-")) { 
        
           var sutt = 0;
           var sutt = sutt.toString();

            return sutt;
       
                       };


    if(y_e_100.length < 15 && x_e_100.length < 15 ){         
     if((parseFloat(y_e_100) == parseFloat(x_e_100) && x_st_fst=="-" &&  y_st_fst!="-")||(parseFloat(y_e_100) == parseFloat(x_e_100) && x_st_fst!="-" &&  y_st_fst=="-")) {      
          var sutt = 0;
           var sutt = sutt.toString();

            return sutt;
       
                       };    

                                                  };
   
  

  var pexp = x ;
  var nexp = y ;
  var sutt = 0 ;

        var  pexp = m_mtx_str_to_e_ne(pexp);               
        var  nexp = m_mtx_str_to_e_ne(nexp);               
        
          pexp = pexp.toString();                                   
          var p_idx_e = pexp.indexOf("e");
   
          nexp = nexp.toString();                               

          var n_idx_e = nexp.indexOf("e");
     
             if( n_idx_e == -1 &&  p_idx_e == -1){  
                
                  var sutt =  m_mtx_real_add_bf(pexp,nexp);   


                            }
                           
             else{ var sutt = m_mtx_point_add_sub_e(pexp,nexp ,0);}    
      
       return sutt;     
        
}


function m_mtx_real_add_bf(x,y){ 

  var xx=x.toString().trim() ;
  var yy=y.toString().trim() ;

  var x_fst = xx.substr(0,1);
  var y_fst = yy.substr(0,1);  

   if(( x_fst=="-" && y_fst=="-")||( x_fst !="-" && y_fst!="-")){  

     var sutt = m_mtx_real_add_bf_1(xx,yy);

      }

    if( x_fst!="-" && y_fst =="-"){                
       var yy=yy.substr(1,yy.length-1);
        var sutt = m_mtx_real_sub_bf(xx,yy);      

     }

      if( x_fst=="-" && y_fst !="-"){               
        var xx=xx.substr(1,xx.length-1);
        var sutt = m_mtx_real_sub_bf(yy,xx);        
     }


    return sutt;

}



function m_mtx_del_plus(x){    
    var xx = x.toString().trim() ;
    var xx_lg  = xx.length;
    var xx_fst = xx.substr(0,1);
    
    if(xx_fst=="+"){ var xx=xx.substr(1,xx_lg-1);}
     
     var xx_lg  = xx.length;
     var xx_lst = xx.substr(xx_lg-1,1);

    if(xx_lst=="."){ var xx=xx.substr(0,xx_lg-1);}
     return xx;

 }


function m_mtx_real_add_bf_1(x,y){        
  var pexp = x.toString().trim() ;
  var nexp = y.toString().trim() ;

  var x_fst = pexp.substr(0,1);
  var y_fst = nexp.substr(0,1); 

    if(x_fst =="-"){ pexp = pexp.substr(1,pexp.length-1);}
    if(y_fst =="-"){ nexp = nexp.substr(1,nexp.length-1);}

           pexp = pexp.toString();                                   
          pexp = pexp.toString().trim();
          var p_idx_p = pexp.indexOf(".");
          var p_idx_e = pexp.indexOf("e");
      
       if( p_idx_e != -1 &&  p_idx_p != -1){                           

          var  nub_p =  pexp.substr(p_idx_e+1,pexp.length - p_idx_e);  
               var nub_p = m_mtx_trim(nub_p) ;   

               pexp = pexp.substr(0,p_idx_e);       
               pexp =  m_mtx_str_element_shift(pexp ,nub_p);          
                          }
                nexp = nexp.toString();                                
                nexp = nexp.toString().trim();
            var n_idx_p = nexp.indexOf(".");
            var n_idx_e = nexp.indexOf("e");
         
             if( n_idx_e != -1 &&  n_idx_p != -1){                       

               var nub_n =  nexp.substr(n_idx_e+1,nexp.length - n_idx_e); 

               var nub_n = m_mtx_trim(nub_n) ;   
           nexp = nexp.substr(0,n_idx_e);                             

           nexp =  m_mtx_str_element_shift(nexp ,nub_n);               
                            }
              AA=m_new_zero_mtx(1,MTX_COL);                 
              BB=m_new_zero_mtx(1,MTX_COL);                 
              CC=m_new_zero_mtx(1,MTX_COL);                 
              DD=m_new_zero_mtx(1,MTX_COL);                 
              EE=m_new_zero_mtx(1,MTX_COL);                 
              FF=m_new_zero_mtx(1,MTX_COL);                 
              GG=m_new_zero_mtx(1,MTX_COL);                 
              var pexp_m = m_nub_m_s(pexp);  
              var pexp_p = m_nub_p(pexp);    
             AA=m_mtx_point_in_int(AA,pexp_m); 
             BB=m_mtx_point_in(BB,pexp_p);     
             var nexp_m = m_nub_m_s(nexp);  
             var nexp_p = m_nub_p(nexp);    
         
             CC=m_mtx_point_in_int(CC,nexp_m); 

             DD=m_mtx_point_in(DD,nexp_p);     

             EE=m_mtx_no_point_add(AA,CC);            
             EE= m_mtx_cell_five_brow_int(EE);     
             EE= m_mtx_cell_five_int(EE);          
         
             FF= m_mtx_point_add(BB,DD);        
             FF= m_mtx_cell_five_brow(FF);    
             FF= m_mtx_cell_five(FF);          
           
                  var data_ff = FF[0][0].toString();  
                  var data_ff_lg=data_ff.length;

                  if( data_ff_lg > 5){

                        FF[0][0]= data_ff.substr(data_ff_lg-5,5); 

                         data_ff_bf=data_ff.substr( 0 ,data_ff_lg-5); 
                         
                        EE[0][0]=  parseInt(EE[0][0]) + parseInt(data_ff_bf);
                       
                                     }  
                

                       EE= m_mtx_cell_five_int(EE);   
                       FF= m_mtx_cell_five(FF);       

             var sutt= m_mtx_cell_five_show_int(EE,FF);  
                
                  var sutt = m_mtx_trim(sutt) ;   
           
              if(x_fst =="-" && y_fst =="-"){ var sutt ="-"+sutt;}    

       return sutt;     
         
}

function m_sub_error_rg(str_1){      
  var str_a=str_1;
  var data_rang_str_up =-1;
  var data_rang_str_down =-1;
  var ng_nb =0;
  var n_nb =0;
  var p_nb =0;
  var g_nb =0;
  var s_nb =0;
  var h_nb =0;
  var sum_nb=0;
  var it = "";
  var ans ="";
  var data_rang_str_up = m_mtx_real_str_comp(str_a,1e-285);     
  var data_rang_str_down = m_mtx_real_str_comp(str_a,-1e-285);   
      var it = calc.input.value;
      var this_s = it.toString().trim();           
      var this_it = m_del4_2f_char(this_s,';').toString().trim();        
      var this_it_s = this_it;   
      var this_it_t = m_str_sub_ngt_bf(this_it_s);   
      var ng_nb = m_str_spc_count(this_it_t,"-");  
      var n_nb = m_str_spc_count(this_it_t,"n");  
      var p_nb = m_str_spc_count(this_it_t,"p");  
      var g_nb = m_str_spc_count(this_it_t,"g");  
      var s_nb = m_str_spc_count(this_it_t,"s");  
      var h_nb = m_str_spc_count(this_it_t,"h");  
         var sum_nb = n_nb + p_nb + g_nb+s_nb+h_nb ;
    if(data_rang_str_up ==2 && data_rang_str_down ==1 && ng_nb >=1 && sum_nb >=2 ){    
        var ans = "0  "+message_1(34);
      }
    else {ans = str_1;}
    return ans;  
}

function m_mtx_real_sub(x,y){       
  
    var x = x.toString().trim() ;      
    var y = y.toString().trim() ;          
      var x_msg = m_mtx_test_msg(x);
      var y_msg = m_mtx_test_msg(y);
   
        if(x_msg !=-1 ){ return x;}    
        if(y_msg !=-1 ){ return y;}
   var  x_st= x;
   var  y_st= y;
   var  x_st_fst= x_st.substr(0,1);
   var  y_st_fst= y_st.substr(0,1);

      if(x_st_fst=="-"){  var x_st=x_st.substr(1,x_st.length-1);} 
                   else{  var x_st = x_st;}

      if(y_st_fst=="-"){  var y_st=y_st.substr(1,y_st.length-1);} 
                   else{  var y_st = y_st;}
     
       var ans_1="";
 
      if(y=="0" && y.length==1){ var ans_1=x ; return ans_1 ;}                            
      if(x=="0" && x.length==1 && y_st_fst=="-") { var ans_1=y_st; return ans_1 ; }      
      if(x=="0" && x.length==1 && y_st_fst!="-") { var ans_1="-"+y_st ; return ans_1 ; }       
 
    var  y_e = m_mtx_str_to_e(y_st);               
    var  x_e = m_mtx_str_to_e(x_st);           
    var  y_e = m_mtx_str_to_e_ne(y_e);               
    var  x_e = m_mtx_str_to_e_ne(x_e);               
    var  y_e = m_mtx_str_to_e_a(y_e).toString().trim();       
    var  x_e = m_mtx_str_to_e_a(x_e).toString().trim();       
           
            var fix_cols =MTX_COL*5-5 ;              
 
    var  x_e_100 = m_fix(x_e,fix_cols).toString().trim();      
    var  y_e_100 = m_fix(y_e,fix_cols).toString().trim();    
  
   var  y_e_100 = y_e_100.toString();    
   var  x_e_100 = x_e_100.toString();
       
var sutt = " " ;

    if((y_e_100 == x_e_100 && x_st_fst=="-" && y_st_fst=="-")||(y_e_100 == x_e_100 && x_st_fst!="-" && y_st_fst!="-")) { 
           var sutt = 0;
           var sutt = sutt.toString();

            return sutt;
       
                       };



      if(y_e_100.length < 15 && x_e_100.length < 15 ){       
        if((parseFloat(y_e_100) == parseFloat(x_e_100) && x_st_fst=="-" &&  y_st_fst=="-")||(parseFloat(y_e_100) == parseFloat(x_e_100) && x_st_fst!="-" &&  y_st_fst !="-")) {      

           var sutt = 0;
           var sutt = sutt.toString();

            return sutt;
       
                       };
                                                   };

  

  var pexp = x ;      
  var nexp = y ;      
 
        var  pexp = m_mtx_str_to_e_ne(pexp);               
        var  nexp = m_mtx_str_to_e_ne(nexp);               

        var data_x_fst = pexp.substr(0,1);
        var data_y_fst = nexp.substr(0,1);
        var x_sub =pexp.substr(0,1000);  
         var y_sub =nexp.substr(0,1000);  

         if(x_sub==0 && x_sub.length==1 && data_y_fst=="-"){
                    var sutt = nexp.substr(1,nexp.length-1);  
                    var sutt=sutt.toString();

                    return sutt;
       
                       };

           if(x_sub==0 && x_sub.length==1 && data_y_fst!="-"){
                    var sutt = "-"+nexp;      
                    var sutt=sutt.toString();

                    return sutt;
       
                       };

             if(y_sub==0 && y_sub.length==1){
                    var sutt = x;                    
                    var sutt=sutt.toString();

          
                    return sutt;
       
                       };
     
          pexp = pexp.toString();                                   
          var p_idx_e = pexp.indexOf("e");
   
          nexp = nexp.toString();                                

          var n_idx_e = nexp.indexOf("e");
       
             if( n_idx_e == -1 &&  p_idx_e == -1){  

               var sutt =  m_mtx_real_sub_bf(pexp,nexp);   
                    
                            }
                           
             else{ 

                  var sutt = m_mtx_point_add_sub_e(pexp,nexp ,1);}   
           
              sutt = sutt.replace(/\.e/g , "e");  

              sutt =m_fix_str_lst(sutt);         
          if(sutt==-0 && sutt.lngth==2){ var sutt=0;}         
  
       return sutt;     
          
}


function m_mtx_real_sub_bf(x,y){       

  var pexp = x.toString().trim();
  var nexp = y.toString().trim();
  var sutt ="";
    var x_fst = pexp.substr(0,1);     
    var x_lg = pexp.length;
    var y_fst = nexp.substr(0,1);
    var y_lg = nexp.length;
      if( x_fst !="-" && y_fst=="-"){       
             nexp = nexp.substr(1,y_lg-1);
             var sutt = m_mtx_real_add(pexp,nexp);
                return sutt;

                    };  
   
       if( x_fst =="-" && y_fst != "-"){     
             pexp = pexp.substr(1,x_lg-1);   
              var sutt = m_mtx_real_add(pexp,nexp);
              var sutt ="-"+sutt;      
                 return sutt;

                      };  
        

           if( x_fst =="-" && y_fst == "-"){     
              var  pexp_ch = pexp.substr(1,x_lg-1);
              var  nexp_ch = nexp.substr(1,y_lg-1);       
              var pexp = nexp_ch;
              var nexp = pexp_ch;

                      };  

 
            var data_point =0;      
            var x_float = parseInt(pexp.substr(0,15));   
            var y_float = parseInt(nexp.substr(0,15));     
            var comp_pexp_nexp = m_mtx_real_str_comp(pexp,nexp);      
                
            if(comp_pexp_nexp ==3){
              var x_float = pexp;    
              var y_float = nexp;    
                                  } 

        
             if(comp_pexp_nexp ==2){     
                  var pexp_ch_2 = pexp;
                  var nexp_ch_2 = nexp;
                  var pexp = nexp_ch_2;
                  var nexp = pexp_ch_2;
                  var data_point =1;      

                 }


              AA=m_new_zero_mtx(1,MTX_COL);                 
              BB=m_new_zero_mtx(1,MTX_COL);                 
              CC=m_new_zero_mtx(1,MTX_COL);                 
              DD=m_new_zero_mtx(1,MTX_COL);                 
              EE=m_new_zero_mtx(1,MTX_COL);                 
              FF=m_new_zero_mtx(1,MTX_COL);                 
              GG=m_new_zero_mtx(1,MTX_COL);                 
              var pexp_m = m_nub_m_s(pexp);  
              var pexp_p = m_nub_p(pexp);    
             AA=m_mtx_point_in_int(AA,pexp_m); 
             BB=m_mtx_point_in(BB,pexp_p);     
             var nexp_m = m_nub_m_s(nexp);  
             var nexp_p = m_nub_p(nexp);    
             CC=m_mtx_point_in_int(CC,nexp_m); 
             DD=m_mtx_point_in(DD,nexp_p);     
             EE=m_mtx_no_point_sub(AA,CC);            
             EE= m_mtx_cell_five_brow_int(EE);     
             EE= m_mtx_cell_five_int(EE);          
            
             FF= m_mtx_point_sub(BB,DD);        
               
             FF= m_mtx_cell_five_brow(FF);     
      
             FF= m_mtx_cell_five(FF);         
     
              var nn=0;

                while( nn < 1000 ){      

                if(( parseInt(FF[0][0])< 0 ) &&  parseInt(EE[0][0])>0){  

                        if( parseInt(FF[0][0])<=(-1000000) ){

                            FF[0][0]=parseInt(FF[0][0])+100000;
                            EE[0][0]=parseInt(EE[0][0])-1;}

                         if( parseInt(FF[0][0]) > (-1000000) ){    

                            FF[0][0]=parseInt(FF[0][0])+99999;
                            EE[0][0]=parseInt(EE[0][0])-1;

                                for(var m=1; m < FF[0].length ;m++){

                                   FF[0][m]=99999 - parseInt(FF[0][m]); 
                                 }
                                                              }


                       }


                     if( parseInt(FF[0][0])> 0){ nn=10000 ;} 

                           nn=nn+1;
                               }
               
                     var data_ff00 = FF[0][0].toString().trim();        
                     var data_ff00_fst = data_ff00.substr(0,1);

                    if((data_ff00_fst =='-' ) &&  parseInt(EE[0][0])>0){  
                            FF[0][0]=parseInt(FF[0][0])+99999;
                            EE[0][0]=parseInt(EE[0][0])-1;

                                for(var m=1; m < FF[0].length ;m++){

                                   FF[0][m]=99999 - parseInt(FF[0][m]);  
                                                                   }
                                                                 }

              var nn=0;
               while( nn < 1000 ){      

                if( parseInt(FF[0][0]) >= 100000 ){  

                        FF[0][0]=parseInt(FF[0][0])-100000;
                        EE[0][0]=parseInt(EE[0][0])+1;

                       }

                     if( parseInt(FF[0][0]) <100000){ nn=10000 ;} 

                           nn=nn+1;
                               } 





                 FF= m_mtx_cell_five(FF); 

                     if(  parseInt(FF[0][0])==0){

                               FF[0][0]="00000"; }  


                      if(  parseInt(EE[0][0])==0){    

                               EE[0][0]="00000"; }  
 

                

                   EE= m_mtx_cell_five_int(EE);          
 
               var sutt= m_mtx_cell_five_show_int(EE,FF);   

                

                 if(data_point ==1){ sutt = "-" +sutt;} 
                    
       return sutt;     


          
}




function m_mtx_no_point_sub(A,B){    
   var AA=A;
   var BB=B;


               
   var CC=m_new_zero_mtx(AA.length,AA[0].length);                 
     


        for(var n=0;n < CC[0].length ; n++){
             var data_a = parseInt(AA[0][n]);
             var data_b = parseInt(BB[0][n]);
              
                  CC[0][n]= data_a - data_b;}
               


            CC= m_mtx_cell_five_brow_int(CC);     
                          
                    

                CC= m_mtx_cell_five_int(CC);          
               
                  if(  parseInt(CC[0][0])==0){    

                               CC[0][0]="00000"; }  
               


     return CC;    

}





function m_exp(x){     
  
    var bb=E1;
   

   var xx=x.toString().trim();
       xx = m_str_e_to_str(xx);     
          var nub_point= m_str_char(xx,".") ;  
         
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ xx=xx;}

 
         var xx =m_mtx_trim(xx) ;        

           var comp_xx_0 = m_mtx_real_str_comp(xx,0);      
           var comp_xx_1 = m_mtx_real_str_comp(xx,1);      
    var ant_1=1;

     var xx_lg =xx.length;

         
           if(comp_xx_0==3 ){ var ant_1=1;  return ant_1 ;}  
           if(comp_xx_1==3 ){ var ant_1=bb; return ant_1 ;}  
   
         var xx_fst=xx.substr(0,1);

         if(xx_fst=="-"){ var zz=xx.substr(1,xx.length-1);}
         else {var zz=xx;}   

        zz = m_str_e_to_str(zz);      

       var zz_m = m_nub_m(zz) ;           
       var zz_p = m_nub_p(zz) ;          
          

            var ans_1 = 0;      
            var ans_2 = 0;      
            var ans_3 = 0;      
            var ant_1 = 0;

               
              var comp_zz_m_0 = m_mtx_real_str_comp(zz_m,0);      
              var comp_zz_m_100 = m_mtx_real_str_comp(zz_m,100);     
              var comp_zz_p_0 = m_mtx_real_str_comp(zz_p,0);      
        
               if( comp_zz_m_100==2) {  var ans_1 = m_pow_ia(bb,zz_m )};

            
              if(  comp_zz_m_100!=2){  var ans_1 = m_pow_ib(bb,zz_m )};
 
              if(  comp_zz_p_0 != 3)  {  var ans_3 = m_exp_2_state(zz_p,0)};


              if( comp_zz_m_0 != 3 && comp_zz_p_0 !=3){ var ant_1 =m_mtx_real_mul(ans_1 ,ans_3); }          
              if( comp_zz_m_0 == 3 && comp_zz_p_0 !=3){ var ant_1 = ans_3; } 
              if( comp_zz_m_0 != 3 && comp_zz_p_0 ==3){ var ant_1 = ans_1; } 

            if(xx_fst=="-") { var ant_1 = m_mtx_real_div(1 ,ant_1 );}
  
     var ant_1 = ant_1.toString().trim();

   return ant_1;

}




function m_exp_2_state(x,nub){    
   
      var xx=x.toString().trim();

      var xx = m_str_e_to_str(xx);      
      var xx_fst=xx.substr(0,1);

      if(xx_fst=="-"){ var zz=xx.substr(1,xx.length-1);}
      else {var zz=xx;}
 
    var nubb = nub;

    if(m_mtx_real_str_comp(x,0)==3 && m_mtx_real_str_comp(nubb,0)==3){ return  1;}  
 
    var zz_m = m_nub_m(zz) ;           
    var zz_p = m_nub_p(zz) ;          

     var AA =m_mtx_unit_inv_lg_100_table();   
    var CC=m_new_zero_mtx(1,AA[0].length);            
    var BB=m_new_zero_mtx(1,AA[0].length);              
    var ZZ=m_new_zero_mtx(1,AA[0].length);              


    var ITEM_S= m_new_5_unit_mtx(1,AA[0].length);                
    var SUM_T = m_new_5_unit_mtx(1,AA[0].length);                
       if(m_mtx_real_str_comp(x,0)==3 && m_mtx_real_str_comp(nubb,1)==3){
             CC[0][0]=100000;
                  return  CC ;}   
     

    var DD=m_new_zero_mtx(1,AA[0].length);                 
        DD=m_mtx_point_in(DD,zz_p);         

      for(var n=1;n <AA.length  ;n++){      
          EE = m_mtx_row_table(AA,n);    
         
         for(var i=0;i<EE[0].length;i++){

           if(zz_m !=0 && zz_m !="0" ){
                CC[0][i]= m_abs(zz_m) *EE[0][i];          
                                     }
           else{ CC=ZZ;}
                                        }

               
           if(m_mtx_real_str_comp(zz_p,0)!=3 ){   
              var BB = m_mtx_point_mul(EE,DD);     
                       }

            else{ BB=ZZ;}

           var FF = m_mtx_point_add(BB,CC);        

             FF = m_mtx_cell_five(FF);      
             
             if(n==1){ var ITEM_S = FF ;}                   
             else { var ITEM_S = m_mtx_point_mul(ITEM_S,FF);}
 
               ITEM_S = m_mtx_cell_five(ITEM_S);      
               
                  CC=m_new_zero_mtx(1,AA[0].length);            0
                  BB=m_new_zero_mtx(1,AA[0].length);
                  EE=m_new_zero_mtx(1,AA[0].length);  
               
               if(m_mtx_real_str_comp(x,0)==2 && n%2==1){                           
 
                      SUM_T = m_mtx_point_sub(SUM_T,ITEM_S);  
                    
                        SUM_T = m_mtx_cell_five_brow(SUM_T);   
                     
                        SUM_T = m_mtx_cell_five(SUM_T);      

                    
                                 }
               else{

                 SUM_T = m_mtx_point_add(SUM_T,ITEM_S);

                     SUM_T = m_mtx_cell_five(SUM_T);      
                   
                                                         }   

            
                  FF=m_new_zero_mtx(1,AA[0].length);          

                 SUM_T = m_mtx_cell_five_brow(SUM_T);   
 
                 SUM_T = m_mtx_cell_five(SUM_T);      
           
                                 }


            SUM_T = m_mtx_cell_five(SUM_T);      

             if( nubb =="1"){
                 
                 return SUM_T ;}    
             

           var sum_tt = m_mtx_cell_five_show(SUM_T);   

               sum_tt =sum_tt.toString();
   
           return sum_tt ;  
         
           
}





    
function m_sin(x){         
     var xx=x.toString().trim();
    
        var nub_point= m_str_char(xx,".") ;  
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ xx=xx;}

     var xx =m_mtx_trim(xx) ;         

    var zz=xx;

    var x_fst=zz.substr(0,1);

      if(x_fst=="-"){ var zz=zz.substr(1,zz.length-1);
                                                      }   
        
  
         zz = m_str_e_to_str(zz);      
    
            var zz_m = m_nub_m(zz) ;           
            var zz_p = m_nub_p(zz) ;           
            var zz_mr =0 ;

       if( zz_m >= 6 && zz_m != 0){
         var data_comp_zz_m_PIMUL2 = m_mtx_real_str_comp(zz_m,PIMUL2);   

          if( data_comp_zz_m_PIMUL2 ==1 ){

                  var zz_m =  m_2pi_rem(zz_m);  
                                      }
                       }


              if(zz_m==0 && zz_m.length ==1){ var zz =  zz_p;}
              else if(zz_p==0 && zz_p.length ==1 ){ var zz =  zz_m;}
              else {var zz = m_mtx_real_add(zz_m, zz_p);}
         

           if( zz >= 6 ){
             var data_comp_zz_PIMUL2 = m_mtx_real_str_comp(zz,PIMUL2);   
              if( data_comp_zz_PIMUL2 ==1 ){

                  var zz =  m_mtx_real_sub(zz,PIMUL2);  
                                      }  
                          }
    var ans_1=0;
    var x_flag=0; 
     var data_comp_zz_0   =  m_mtx_real_str_comp(zz,0); 
     var data_comp_zz_PIDIV2   =  m_mtx_real_str_comp(zz,PIDIV2);     
   
     var data_comp_zz_PI = m_mtx_real_str_comp(zz,PI);
      var data_comp_zz_PIDIV2MUL3 = m_mtx_real_str_comp(zz,PIDIV2MUL3);
     var data_comp_zz_PIMUL2   =  m_mtx_real_str_comp(zz,PIMUL2);
     var data_comp_xx_0   =  m_mtx_real_str_comp(xx,0);
    if( data_comp_zz_0==3 ){ ans_1 = 0 ; return ans_1 ;}  
    else if( data_comp_zz_PIDIV2==3 && data_comp_xx_0==1 ){ ans_1 = 1 ; return ans_1 ;}  
    else if( data_comp_zz_PIDIV2==3 && data_comp_xx_0==2 ){ ans_1 = -1 ; return ans_1 ;}  
    else if( data_comp_zz_PI==3 ){ ans_1 = 0 ; return ans_1 ;}  
    else if( data_comp_zz_PIDIV2MUL3==3 && data_comp_xx_0==1 ){ ans_1 = -1 ; return ans_1 ;}  
    else if( data_comp_zz_PIDIV2MUL3==3 && data_comp_xx_0==2 ){ ans_1 = 1 ; return ans_1 ;}  
    else if( data_comp_zz_PIMUL2==3 ){ ans_1 = 0 ; return ans_1 ; } 
         var sum_tt = zz;
       
       if(sum_tt < PIMUL2 && sum_tt > PI){                    
               var sum_tt = m_mtx_real_sub(sum_tt,PIMUL2);
                  if(parseFloat(x) >0){ var x_flag =-1 ;}  
                  if(parseFloat(x) <0){ var x_flag = 1 ;}  

                                          }  

      ans_1=  m_sin_matrix_1(sum_tt) ;   

         var ans_fst = ans_1.substr(0,1);
     
               var comp_ans_1_0 = m_mtx_real_str_comp(ans_1,0);      

                   var comp_sum_ans_1_0 = m_mtx_real_str_comp(ans_1,0);   

             if(x_fst=="-" && ans_fst=="-" && comp_ans_1_0 !=3 && x_flag==0){         
                   ans_1= ans_1.substr(1,ans_1.length-1) ;}  
               if(x_fst=="-" && ans_fst!="-"  && comp_sum_ans_1_0 !=3 && x_flag==0){
                  ans_1= "-"+ans_1 ;}                                                    

            if( ans_fst=="-" && comp_ans_1_0 !=3 && x_flag==1){        
                   ans_1= ans_1.substr(1,ans_1.length-1) ;}   

             if( ans_fst !="-" && comp_ans_1_0 !=3 && x_flag==-1){     
                   ans_1=  "-"+ans_1  ;}  
       
            var ans_1 = m_mtx_trim(ans_1) ;   

           ans_1 = m_str_e_to_str(ans_1);     
         
       var ans_1 = ans_1.toString().trim();
  
   return ans_1;

    
}





function m_2pi_rem(x){        
   var x=x.toString().trim();
    var x_fst= x.substr(0,1);
    if(x_fst=="-"){ var zz = x.substr(1,x.length-1);}
   
        else {var zz=x ;}   
   var ans_1=0;
      var zz_m = m_nub_m(zz) ;           
      var zz_p = m_nub_p(zz) ;           
    var AA =m_mtx_pi_100_table();        
    
      var BB=m_new_zero_mtx(1,AA[0].length);              
      var BB_1=m_new_zero_mtx(1,AA[0].length);              
      var BB_2=m_new_zero_mtx(1,AA[0].length);              
 
      var BB_t=m_new_zero_mtx(1,AA[0].length);              
       var DD=m_new_zero_mtx(1,MTX_COL);                 
          DD=m_mtx_point_in(DD,zz_p);        

     var FF=m_new_zero_mtx(1,MTX_COL);                   
         FF=m_mtx_point_in_int(FF,zz_m);         
     
          EE_0 = m_mtx_row_table(AA,0);     
          
                        BB_1[0][i]=0 ;   

                        var k_rang = Math.ceil(zz_m.length/5);     

                       for(var k=0 ; k< k_rang ; k++){  

                            for(var i=0 ; (i+k)< MTX_COL ; i++){ 

                                 
                                   BB_1[0][i] = BB_1[0][i] + FF[0][k]*EE_0[0][i+k];
                                              

                                                       }  

                                                    }     
                                     
                BB_1 = m_mtx_cell_five_brow(BB_1);   
                BB_1 = m_mtx_cell_five(BB_1);      

         
          BB = m_mtx_point_mul(DD,EE_0);    
              
          BB = m_mtx_cell_five_brow(BB);   

           BB_2 =  m_mtx_point_add(BB_1,BB);        

           BB_2 = m_mtx_cell_five_brow(BB_2);    
          
           BB_2 = m_mtx_cell_five(BB_2);      

           var data_a=BB_2[0][0].toString().trim();
           var data_a_lg = data_a.length;

          if(data_a_lg >=5){
              var data_b = data_a.substr(data_a_lg-5,5);  
                           }
          else{var data_b = data_a.substr(0,data_a_lg);}     

               BB_2[0][0]=data_b;
 
           EE_4 = m_mtx_row_table(AA,4);     
           BB_t = m_mtx_point_mul(BB_2,EE_4);    
           BB_t = m_mtx_cell_five_brow(BB_t);   
          
          BB_t = m_mtx_cell_five(BB_t);      
 
           var sum_tt = m_mtx_cell_five_show(BB_t);  
               if(x<0)

               sum_tt =sum_tt.toString(); 
           
             
   return sum_tt ;


 }




function m_str_to_mtx(str){  
     var zz = str.toString().trim();
     var zz_lg=zz.length;  
      
        if(zz.substr(0,1)=="-"){ zz = zz.substr(1,zz_lg-1);
                                 zz_lg = zz_lg-1;    }
   
     var zz_str= zz.toString();

     var zz_m = m_nub_m(zz) ;           
     var zz_p = m_nub_p(zz) ;           

      var DD=m_new_zero_mtx(1,MTX_COL);            
         
          DD=m_mtx_point_in(DD,zz_p);         
       DD[0][0] = zz_m*100000 + parseInt(DD[0][0]) ;     

      return DD;

}


function m_mtx_element_shift(A,nub){     


                                         
var nubb = nub;



var AA=A;

  
var mtx_lg =AA[0].length;  

 
var BB = m_new_zero_mtx(1,mtx_lg);            
var CC = m_new_zero_mtx(1,mtx_lg);            
   

 
  while(nubb>0){                      
    for(var i=0;i<(mtx_lg);i++){

        if(i==0){
          BB[0][i]=(AA[0][i]).toString()+(AA[0][i+1]).toString().substr(0,1);}

                             
        if(i >0 && i != (mtx_lg-1)){
          BB[0][i]=(AA[0][i]).toString().substr(1,4)+(AA[0][i+1]).toString().substr(0,1);} 

         if(i== (mtx_lg-1)){
          BB[0][i]=(AA[0][i]).toString().substr(1,4)+"0";}  
               

                               }  
               AA = m_mtx_copy_mtx(AA,BB);      
              var  nubb = nubb-1;

             }


        
 
 while(nubb<0){ 
  for(var i=0;i<mtx_lg;i++){
        if(i==0){
          BB[0][i]="0"+(AA[0][i]).toString().substr(0,4);}    
           
        if(i>0 ){
          BB[0][i]=(AA[0][i-1]).toString().substr(4,1)+(AA[0][i]).toString().substr(0,4);} 

                
                               }   
                AA = m_mtx_copy_mtx(AA,BB);      
                 var  nubb = nubb+1;

                 

                             }  

               

           
    return BB ;

}




function m_mtx_str_element_shift(x,nub){    
    var nubb=nub;
   
    var zz_str= x.toString();

    


    var data_zo = zz_str.substr(0,1);
       if(data_zo=="-"){ zz_str = zz_str.substr(1,zz_str.length-1); }   
    var ans_1="";

    var pos_pot = zz_str.indexOf(".");   
    
      if(  nubb==0 ){return x;} 
    if(nubb > 0 ) {      

            var nubc = nubb;

            while( nubc > 0){ var zz_str=zz_str+"0";   
                                  nubc=nubc-1; }
                   }

      if(nubb > 0 ) {  
              var nubd = nubb;

            while( nubd > 0){
         var zz_str= zz_str.substr(0,pos_pot)+ zz_str.substr(pos_pot+1,1)+"."+zz_str.substr(pos_pot+2 ,zz_str.length-pos_pot-1);
         var pos_pot = zz_str.indexOf("."); 
                      nubd=nubd-1;                                           
                            }
            ans_1= zz_str ;   

                      }
         
         
          
        if(nubb < 0 ) {      
         
            var  zz_str=zz_str.toString();

            var nubc = parseInt(nubb); 
            while( nubc < 0){ 
                        var zz_str="0"+zz_str;   
                            zz_str=zz_str.toString().trim();
                                  nubc=nubc+1; }

           
                   }



      if(nubb < 0 ) {                               
              var nubd = m_abs(nubb);

              var pos_pot = zz_str.indexOf(".");   
              var zz_str_lg = zz_str.length;  
          
              if(pos_pot !=-1){   
                       var zz_str = zz_str.substr(0,pos_pot-nubd)+"."+ zz_str.substr(pos_pot-nubd,nubd)+ zz_str.substr(pos_pot+1,zz_str_lg-pos_pot);
                               }
              
                 else{
                
                      var zz_str = zz_str.substr(0,zz_str_lg-nubd )+"."+ zz_str.substr(zz_str_lg-nubd,nubd);}     
            
       
             var pos_pot = zz_str.indexOf("."); 
                    
                     
            ans_1= zz_str ; 

                      }

       

               nube=m_abs(nub);


      
          while( nube > 0){ 
               var pos_pot_a = ans_1.indexOf("."); 

               if( pos_pot_a >1 && ans_1.substr(0,1)=="0"){

                           ans_1=ans_1.substr(1,ans_1.length-1);   
                                                           }



               if(ans_1.substr(ans_1.length-1,1)=="0"){
                         ans_1=ans_1.substr(0,ans_1.length-1);   
                                                      }
                  nube=nube-1;

                          }


         if(data_zo=="-"){var ans_1="-"+ans_1; }

     return ans_1;

 }




function m_mtx_str_to_mtx_wait_inv(x){     
    var zz_str= x.toString();
    var data_zo = zz_str.substr(0,1);
       if(data_zo=="-"){ zz_str = zz_str.substr(1,zz_str.length-1); }    
    var zz_m = m_nub_m(zz_str) ;           
    var zz_p = m_nub_p(zz_str) ;           
    var DD=m_new_zero_mtx(1,MTX_COL);                
       DD=m_mtx_point_in(DD,zz_p);         
       DD[0][0] = zz_m*100000 + parseInt(DD[0][0]) ;    
     return DD;
}



function m_mtx_any_inv(A ,nub){    
  var col_nub = A[0].length;   
  var X = m_new_zero_mtx(1,col_nub);              
  var AA =A;
  var data_test = parseInt(AA[0][0]); 
    if(data_test < 100000 || data_test >999999){
            var ans_1 = message_1(31);
                    return  ans_1 ;     }
  var PI_a = A ;                               
  var SS = m_new_zero_mtx(1 ,col_nub);            
    for(var i=0;i< (col_nub-1);i++){     
     for( var j=4;j >=0 ;j--){    
       for(var k=9 ;k > 0 ;k--){    
           X[0][i]=parseInt(X[0][i])+Math.pow(10,j) ;      
             SS = m_mtx_point_mul(PI_a,X);      
             SS = m_mtx_cell_five_brow(SS);   
              SS = m_mtx_cell_five(SS);        
               var data_chk=0;
               for(var m=1;m<col_nub; m++){     
                    if(SS[0][m] == "00000"){
                       var data_chk=1;  }

                    else{  data_chk=-1;
                            m=col_nub;       }   
                                      
                                     }  

              if(parseInt(SS[0][0]) == 100000 && data_chk==1){    
                  k=-1;
                  j=-1;
                  i=col_nub; 
                }
          
              if((parseInt(SS[0][0]) > 100000)||(parseInt(SS[0][0]) == 100000 && data_chk==-1)) {    
                X[0][i]=parseInt(X[0][i]) - Math.pow(10,j) ;      
                     k = -1; } 

                               } 

                               } 
                        } 
 
          X = m_mtx_cell_five_brow(X);   
          X = m_mtx_cell_five(X);        
         var sum_tt = m_mtx_cell_five_show(X);   
             sum_tt =sum_tt.toString(); 
         
     if(nub==1){         
         return  X ;
               }   
     
    else{
        return  sum_tt;}

}


function m_mtx_pi_inv(){          
  var X = m_new_zero_mtx(5,MTX_COL);            
  var AA =m_mtx_pi_100_table();                
  var PI = m_mtx_row_table(AA,3);          
  var SS = m_new_zero_mtx(5,MTX_COL);            
    for(var i=0;i<MTX_COL;i++){     
     for( var j=4;j >=0 ;j--){    
       for(var k=9 ;k > 0 ;k--){    
           X[0][i]=parseInt(X[0][i])+Math.pow(10,j) ;     
        
              SS = m_mtx_point_mul(PI,X);       
  
              SS = m_mtx_cell_five_brow(SS);   
              SS = m_mtx_cell_five(SS);        
              if(parseInt(SS[0][0]) >= 100000){
                X[0][i]=parseInt(X[0][i]) - Math.pow(10,j) ;     
             
                      k = -1; }                        
                                } 
                               } 
                        } 
          X = m_mtx_cell_five_brow(X);   
          X = m_mtx_cell_five(X);         
          var sum_tt = m_mtx_cell_five_show(X);   
              sum_tt =sum_tt.toString(); 
    return  sum_tt;
}


function m_sin_matrix_1(x){    
     var zz = x.toString().trim();
     var zz_fst=zz.substr(0,1);
     if(zz_fst=="-"){zz = zz.substr(1,zz.length-1);}    
     else{ zz=zz;}
    var zz_str= zz.toString();
    var sum_tt =0 ;
    var tt=1;
         var comp_zz_PIDIV2 = m_mtx_real_str_comp(zz,PIDIV2);   
         var comp_zz_PI = m_mtx_real_str_comp(zz,PI);    
        if(comp_zz_PIDIV2 ==1  && comp_zz_PI !=1){  
          zz = m_mtx_real_sub(PI,zz);   
                                   } 
    
                var comp_e_zz_500 = m_mtx_real_str_comp(zz,1e-500);   
         
    if((zz ==0 && zz.length==1)||(comp_e_zz_500 !=1)){                
              return  zz ;}  
         zz = m_str_e_to_str(zz);      
    var zz_m = m_nub_m(zz) ;           
    var zz_p = m_nub_p(zz) ;          
    var AA =m_mtx_unit_inv_lg_100_table();       
    var CC=m_new_zero_mtx(1,AA[0].length);            
    var BB=m_new_zero_mtx(1,AA[0].length);            
    var ZZ=m_new_zero_mtx(1,AA[0].length);           
    var ITEM_S= m_new_5_unit_mtx(1,MTX_COL);                
    var SUM_T = m_new_zero_mtx(1,MTX_COL);                   
    var DD=m_new_zero_mtx(1,MTX_COL);            
        DD=m_mtx_point_in(DD,zz_p);         
       for(var n=1;n < AA.length ;n++){      
          EE = m_mtx_row_table(AA,n);     
         for(var i=0;i<EE[0].length;i++){
           if(zz_m !=0 && zz_m !="0" ){
                CC[0][i]= m_abs(zz_m) *EE[0][i];          
                                     }
           else{ CC=ZZ;}
                                        }
         if(zz_p !=0 && zz_p !="0" ){      
            var BB = m_mtx_point_mul(EE,DD);      
                       }
            else{ BB=ZZ;}
           var FF = m_mtx_point_add(BB,CC);       
               FF = m_mtx_cell_five_brow(FF);   
               FF = m_mtx_cell_five(FF);      
             if(n==1){ var ITEM_S = FF ;}                      
             else { var ITEM_S = m_mtx_point_mul(ITEM_S,FF);}
               ITEM_S = m_mtx_cell_five_brow(ITEM_S);  
               ITEM_S = m_mtx_cell_five(ITEM_S);      
                 CC=m_new_zero_mtx(1,AA[0].length);            
                  BB=m_new_zero_mtx(1,AA[0].length);
                  EE=m_new_zero_mtx(1,AA[0].length);  
              if( (n+1)%2==0 && (n+1)%4 !=0 ){       
                    SUM_T = m_mtx_point_add(SUM_T,ITEM_S);   
                                   }
               if( (n+1)%2==0 && (n+1)%4 ==0 ){          
                      SUM_T = m_mtx_point_sub(SUM_T,ITEM_S);   
                        }                                       
                 SUM_T = m_mtx_cell_five_brow(SUM_T);   
                 SUM_T = m_mtx_cell_five(SUM_T);      
                 FF=m_new_zero_mtx(1,AA[0].length);          
                                 }

            SUM_T = m_mtx_cell_five_brow(SUM_T);   
            SUM_T = m_mtx_cell_five(SUM_T);      
           var sum_tt = m_mtx_cell_five_show(SUM_T);   
               if(x < 0 && SUM_T[0][0] >=0 ){           
                        var sum_tt = "-"+ sum_tt ;}     
                  if(x < 0 && SUM_T[0][0] < 0 ){   
                         var sum_tt = sum_tt.substr(1,sum_tt.length) ;}   
       
               sum_tt =sum_tt.toString();
           return sum_tt ;  
  }

 

function m_cos(x){          
    var zz=x.toString().trim();
          var nub_point= m_str_char(zz,".") ;  
          var ans_1 ="";
          if( nub_point >2){
              var ans_1 = message_1(30);
                           return  ans_1  }
         else{ zz=zz;}
     var zz =m_mtx_trim(zz) ;        
     var x_fst=zz.substr(0,1);                         
      if(x_fst=="-"){ var zz=zz.substr(1,zz.length-1);
                                                }   
        zz = m_str_e_to_str(zz);      
     var ans_1=0;
    var zz_r =0;
    var zz_s =0;
       var data_comp_zz_PIMUL2 = m_mtx_real_str_comp(zz,PIMUL2);   
         if( data_comp_zz_PIMUL2 ==1){
                 var zz_r =  m_2pi_rem(zz);  
                                      }
          else{  var zz_r =zz; }
           var r_fst=zz_r.substr(0,1);                         
                     if(r_fst=="-"){ var zz_r=zz_r.substr(1,zz_r.length-1);
                                                          }              
             var data_comp_zz_r_PIDIV2   =  m_mtx_real_str_comp(zz_r,PIDIV2);        
             var data_comp_zz_r_PI = m_mtx_real_str_comp(zz_r,PI);
             var data_comp_zz_r_PIDIV2MUL3  =  m_mtx_real_str_comp(zz_r,PIDIV2MUL3);  
             var data_comp_zz_r_PIMUL2 = m_mtx_real_str_comp(zz_r,PIMUL2);   
          
                if(zz_r==0){var ans_1=1; return ans_1;}
                if(data_comp_zz_r_PIDIV2==3){var ans_1=0; return ans_1;}
                if(data_comp_zz_r_PI==3){var ans_1=-1; return ans_1;}
                if(data_comp_zz_r_PIDIV2MUL3==3){var ans_1=0; return ans_1;}
                if(data_comp_zz_r_PIMUL2==3){var ans_1=1; return ans_1;}
             var flag=0;
             if( data_comp_zz_r_PI==2 && data_comp_zz_r_PIDIV2==1){ var zz_r = m_mtx_real_sub(PI,zz_r) ; var flag=-1;}   
             if( data_comp_zz_r_PIDIV2MUL3==2 && data_comp_zz_r_PI==1){ var zz_r = m_mtx_real_sub(zz_r,PI) ; var flag=-1;}   
             if( data_comp_zz_r_PIMUL2==2 && data_comp_zz_r_PIDIV2MUL3==1){ var zz_r = m_mtx_real_sub(PIMUL2,zz_r) ; }   
                var zz_s = m_mtx_real_sub(PIDIV2,zz_r);   
                 var comp_e_xx_500 = m_mtx_real_str_comp(zz_s,1e-500);    
                if( comp_e_xx_500==2 ){ ans_1 = 1  ; }   
                else{
                      ans_1 = m_sin(zz_s);}
    var ans_1 = ans_1.toString().trim();
     if(flag == -1 && ans_1 !=0){ var ans_1 ="-"+ans_1;}   
   return ans_1;
   
}

function m_tan(x){                           
     var xx=x.toString().trim();
         var nub_point= m_str_char(xx,".") ;  
          var ans_1 ="";
          if( nub_point >2){
              var ans_1 = message_1(30);
                          return  ans_1  }
         else{ xx=xx;}
         var xx =m_mtx_trim(xx) ;         
      var ans_1=0;
     var xx_fst=xx.substr(0,1);
     if(xx_fst=="-"){ var zz=xx.substr(1,xx.length-1);}  
     else{ zz=xx;}
       zz = m_str_e_to_str(zz);      
         var zz_r =0;
         var zz_s =0;
         var data_comp_zz_PIMUL2 = m_mtx_real_str_comp(zz,PIMUL2);   
          if( data_comp_zz_PIMUL2 ==1){
                  var zz_r =  m_2pi_rem(zz);  
                                      }
          else{  var zz_r =zz; }
             var data_comp_zz_r_PIDIV2   =  m_mtx_real_str_comp(zz_r,PIDIV2);        
             var data_comp_zz_r_PI = m_mtx_real_str_comp(zz_r,PI);
             var data_comp_zz_r_PIDIV2MUL3  =  m_mtx_real_str_comp(zz_r,PIDIV2MUL3);  
             var data_comp_zz_r_PIMUL2 = m_mtx_real_str_comp(zz_r,PIMUL2);   
                if(zz_r==0 && zz_r.length==1 ){var ans_1=0; return ans_1;}                     
                if(data_comp_zz_r_PIDIV2==3){var ans_1=message_1(11); return ans_1;}   
                if(data_comp_zz_r_PI==3){var ans_1=0; return ans_1;}           
                if(data_comp_zz_r_PIDIV2MUL3==3){var ans_1=message_1(11); return ans_1;}  
                if(data_comp_zz_r_PIMUL2==3){var ans_1=0; return ans_1;}     
              var flag_tan=0;
            if( data_comp_zz_r_PI==2 && data_comp_zz_r_PIDIV2==1){ var zz_r = m_mtx_real_sub(PI,zz_r) ; var flag_tan=1; }   
             if( data_comp_zz_r_PIDIV2MUL3==2 && data_comp_zz_r_PI==1){ var zz_r = m_mtx_real_sub(zz_r,PI) ;  var flag_tan=0;}   
             if( data_comp_zz_r_PIMUL2==2 && data_comp_zz_r_PIDIV2MUL3==1){ var zz_r = m_mtx_real_sub(PIMUL2,zz_r) ;var flag_tan=1;}   
      var sum_total =0;
               var data_sin = m_sin(zz_r);    
               var data_cos = m_cos(zz_r);
             if(data_sin.length >300){             
               var data_sin =m_fix(data_sin,300);
                                     }
             if(data_cos.length >300){
               var data_cos =m_fix(data_cos,300);              
                                     }
            var cp_cos =  m_mtx_real_str_comp(data_cos,0);      
          if(  cp_cos !=3 ){   
                var comp_e_zz_r_300 = m_mtx_real_str_comp(zz_r,1e-300);    
                if( comp_e_zz_r_300==2 ){ sum_total = data_sin  ; }  
                else{
                    var sum_total =  m_mtx_real_div(data_sin,data_cos);     
                     } 
                      
           var sum_total = sum_total.toString().trim();
                if((xx_fst=="-" && flag_tan ==0 )||(xx_fst!="-" && flag_tan ==1 )){ var sum_total = "-"+sum_total;}
                   if(sum_total==-0 && sum_total.length==2){sum_total=0;}     
             return sum_total;}
       if( cp_cos ==3  ) 
         {   
          sum_total = message_1(11); }
        var sum_total = sum_total.toString().trim();
    return sum_total; 
   }



function m_sinh(x){
   
  var xx = x.toString().trim();
          var nub_point= m_str_char(xx,".") ;  
       
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ xx=xx;}

         var xx =m_mtx_trim(xx) ;          
  var xx_str =xx;
  var xx_fst =xx_str.substr(0,1);

    if(xx_fst=="-"){ var xx_abs = xx_str.substr(1,xx_str.length-1);}
    else { var xx_abs = xx_str;}

       xx_str = m_str_e_to_str(xx_str);      

     if(m_mtx_real_str_comp(xx_abs,0)==3 ){ var sum_total = 0; return sum_total; }      

      var pexp = m_exp(xx_abs);
       var nexp = m_exp("-"+xx_abs);
       var sutt ="";
       var sum_total ="";
           var sutt = m_mtx_real_sub(pexp,nexp);
       
               var sutt_1= m_mtx_real_div(sutt,2); 
                 
                  sum_total = sutt_1;
           
          if(xx_fst=="-"){  sum_total = "-"+sum_total;} 

         var sum_total = sum_total.toString().trim();
     return sum_total;
  
}


function m_cosh(x){       
  var xx = x.toString().trim();
          var nub_point= m_str_char(xx,".") ;  
        
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ xx=xx;}

         var xx =m_mtx_trim(xx) ;         
  var xx_str =xx;
  var xx_fst =xx_str.substr(0,1);
  var sutt ="";
  var sutt_1="";
  var sum_total ="";

    if(xx_fst=="-"){ var xx_abs = xx_str.substr(1,xx_str.length-1);}
     else { var xx_abs = xx_str;}
       xx_str = m_str_e_to_str(xx_str);      
 
     if( m_mtx_real_str_comp(xx_abs,0)==3){ var sum_total = 1; return sum_total;}       
       var pexp = m_exp(xx_abs);
       var nexp = m_exp("-"+xx_abs);
        var sutt = m_mtx_real_add(pexp,nexp); 
         var sutt_1= m_mtx_real_div(sutt,2); 

                sum_total = sutt_1;
  
     var sum_total = sum_total.toString().trim();
     return sum_total;
  
}



function m_tanh(x){
  var xx = x.toString().trim();
        var nub_point= m_str_char(xx,".") ;  
       
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ xx=xx;}
         var xx =m_mtx_trim(xx) ;         
  var xx_str =xx;
  var xx_fst =xx_str.substr(0,1);

    if(xx_fst=="-"){ var xx_abs = xx_str.substr(1,xx_str.length-1);}
    else { var xx_abs = xx_str;}
     xx_str = m_str_e_to_str(xx_str);      
       if(m_mtx_real_str_comp(xx_abs,0)==3 ){ var sum_total = 0; return sum_total; }  
  var yy=0;    
  var zz=0;
  sum_t="";
 
    var yy=m_sinh(xx_abs); 
    var zz=m_cosh(xx_abs); 
   
       var sum_t= m_mtx_real_div(yy,zz);   
     if(xx_fst=="-"){ var sum_t="-"+sum_t; }
   
     var sum_t = sum_t.toString().trim();

return sum_t;


}
 


 function m_bf_eval_to_str(x){        
     var this_it=x;
                 this_it = this_it.replace(/e\+/g , "xxx");   
                 this_it = this_it.replace(/e\-/g , "yyy");   
                 this_it = this_it.replace(/\(/g , "\('");   
                 this_it = this_it.replace(/\)/g , "'\)");   
                 this_it = this_it.replace(/\'\(/g , "\(");   
                 this_it = this_it.replace(/\)\'/g , "\)");   
                 this_it = this_it.replace(/\(\'m/g , "\(m");  
                 this_it = this_it.replace(/xxx/g , "e\+");    
                 this_it = this_it.replace(/yyy/g , "e\-");    
        return  this_it;     
  }

function m_ext_in_funct(x){   
   var xx_st = x;
       xx_st = xx_st.replace(/\(Q\(/g , "\(0\-\(");    
     xx_st = m_hat_bf_aft_many(xx_st ,'^','PPP');           
     xx_st = xx_st.replace(/PPP/g ,'m_pow');             
     xx_st = m_hat_bf_aft_many(xx_st ,'*','MMM');              
     xx_st = xx_st.replace(/MMM/g, 'm_mtx_real_mul');    
     xx_st = m_hat_bf_aft_many(xx_st ,'-','SSS');            
     xx_st = xx_st.replace(/SSS/g ,'m_mtx_real_sub');  
     xx_st = m_hat_bf_aft_many(xx_st ,'+','AAA');                                 
     xx_st = xx_st.replace(/AAA/g , "m_mtx_real_add");   
                 xx_st = xx_st.replace(/e\+/g , "xxx");   
                 xx_st = xx_st.replace(/e\-/g , "yyy");   
                 xx_st = xx_st.replace(/\(/g , "\('");   
                 xx_st = xx_st.replace(/\)/g , "'\)");   
                 xx_st = xx_st.replace(/\+/g , "'\+'");   
                 xx_st = xx_st.replace(/\-/g , "'\-'");      
                 xx_st = xx_st.replace(/\*/g , "'\*'");   
                 xx_st = xx_st.replace(/\//g , "'\/'");   
                xx_st = xx_st.replace(/\^/g , "'\^'");    
                 xx_st = xx_st.replace(/\,/g , "'\,'");     
                 xx_st = xx_st.replace(/''/g , "'");                     
                 xx_st = xx_st.replace(/\'\(/g , "\(");  
                 xx_st = xx_st.replace(/\)\'/g , "\)");  
                 xx_st = xx_st.replace(/\(\'m/g , "\(m"); 
                 xx_st = xx_st.replace(/\'m/g , "\m");    
                xx_st = xx_st.replace(/xxx/g , "e\+");    
                 xx_st = xx_st.replace(/yyy/g , "e\-");    
                xx_st = xx_st.replace(/Q\'3\.14/g , "\Q3\.14");     
      
        var pos_m  = xx_st.indexOf("m");    
         
  var xx_st = xx_st.toString();   

  return xx_st ;


}





function m_mtx_e_str(x,nub){   
   var xx_st=x.toString();
   
         var pos_pot  = xx_st.indexOf(".");    
         var pos_e  = xx_st.indexOf("e");    
         var pos_pls  = xx_st.indexOf("+");   

         var st_lg = xx_st.length;
        
         var nub_e=0; 
         
         
         if(  pos_e != -1){

            if(pos_pls ==-1){
               var nub_e =  xx_st.substr(pos_e+1,xx_st.length - pos_e); 
                             }
            else{var nub_e =  xx_st.substr(pos_e+2,xx_st.length - pos_e-1);} 
                      
          
                var nub_e=nub_e.toString().trim();
  
              
                xx_st = xx_st.substr(0,pos_e);       
            
                       }


            var nub_e =m_mtx_trim(nub_e) ;          
            var xx_st =m_mtx_trim(xx_st) ;          


        if(nub==0){
               var nub_e=nub_e.toString().trim();

                return nub_e;}
        else{

               var xx_st=xx_st.toString().trim();

               var xx_st=m_mtx_del_point(xx_st);    
  

               return xx_st;}


   }







function m_mtx_point_add_sub_e(a,b,nub){    
   var aa=a.toString().trim();
   var bb=b.toString().trim();
   var nubb=nub;
   var deci_dgt_inpt=16;
   var deci_dgt_nub =0;
   var aa_e = m_mtx_e_str(aa ,0);   
   var aa_str = m_mtx_e_str(aa ,1);   
   var bb_e = m_mtx_e_str(bb ,0);   
   var bb_str = m_mtx_e_str(bb ,1);   
   var sum_st ="";
   var e_nub =0;
   var dd_e =  m_mtx_int_sub(aa_e,bb_e); 
   var b_fst=bb.substr(0,1);
       if(dd_e >0  ){               
                   bb_str =bb_str.toString().trim();
               var chk_point =0;  
               var chk_fst=bb_str.substr(0,1);
                    if(chk_fst=="-"){ var bb_str=bb_str.substr(1,bb_str.length-1);  
                       var chk_point =1;}
        var bb_str = m_mtx_str_element_shift(bb_str,-dd_e);     
                    if(chk_point==1){ var bb_str="-"+bb_str;}   
          var e_nub = aa_e;           
                                                    }   

      if(dd_e < 0  ){            
            var dd_e_s = dd_e.toString().trim();
             var dd_e_fst = dd_e_s.substr(0,1);
             if(dd_e_fst=="-"){ var dd_e = dd_e_s.substr(1,dd_e_s.length-1);}
                else{var dd_e = dd_e_s;}

                    aa_str =aa_str.toString().trim();
               var chk_point =0;  
               var chk_fst=aa_str.substr(0,1);
                    if(chk_fst=="-"){ var aa_str=aa_str.substr(1,aa_str.length-1);  
                       var chk_point =1;}
                var aa_str = m_mtx_str_element_shift(aa_str,-dd_e);     
                    if(chk_point==1){ var aa_str="-"+aa_str;}   
             var e_nub = bb_e;            
                                }
        if(dd_e == 0 ){        
                   var e_nub = aa_e; }
                if(aa_str==0. && aa_str.length==2){var aa_str=0;}  
      if(nubb==0){     
       var sum_st = m_mtx_real_add_bf(aa_str,bb_str);      
                 }
       else {           
       var sum_st = m_mtx_real_sub_bf(aa_str,bb_str);      
            }
         var sum_st =sum_st.toString().trim();
         var fst_n=sum_st.substr(0,1); 
            if(fst_n=="-"){ sum_st=sum_st.substr(1,sum_st.length-1);
                            var data_point=1;              }   
            else{ var data_point=0;}
         var point_n=sum_st.indexOf(".");
         var zero_n=sum_st.substr(0,1);
         var sec_n=sum_st.substr(2,1);
         var lg=sum_st.length; 
          if(point_n == 1 && zero_n==0 && sec_n==0){ var n = 1;}
          else{ var n = 0;}
           while(n > 0){                                
               sum_st = "0."+sum_st.substr(3,lg-3);
                   var point_n=sum_st.indexOf(".");
                   var zero_n=sum_st.substr(0,1);
                   var sec_n=sum_st.substr(2,1);
                   var lg=sum_st.length; 
                  if(point_n == 1 && zero_n==0 && sec_n==0){ var n = 1;}
                  else{ var n = 0;}
                  var e_nub = m_mtx_int_sub(e_nub,1);
                        }  
                  var point_n=sum_st.indexOf(".");    
                  var zero_n=sum_st.substr(0,1);
                  var sec_n=sum_st.substr(2,1);
                    if(point_n == 1 && zero_n==0 && sec_n!=0){
                           sum_st=sum_st.substr(2,1)+"."+ sum_st.substr(3,sum_st.length-3);
                         var e_nub = m_mtx_int_sub(e_nub,1);     
                                             }
              var sum_st_m_bf = m_nub_m_s(sum_st).toString();    
              var sum_st_m_bf = m_mtx_trim(sum_st_m_bf) ;   
              var sum_st_m_bf_lg = sum_st_m_bf.length;           
              var sum_st_p_bf = m_nub_p(sum_st).toString();         
              var sum_st_p_bf_lg = sum_st_p_bf.length;           
              if(sum_st_m_bf_lg>1){
                 sum_st = sum_st.substr(0,1)+"."+sum_st.substr(1,sum_st_m_bf_lg-1)+sum_st.substr(sum_st_m_bf_lg+1,sum_st_p_bf_lg);
                          var e_nub = m_mtx_int_add(e_nub,sum_st_m_bf_lg); 
                          var e_nub = m_mtx_int_sub(e_nub,1);      
                                   }
                   var sum_st = m_mtx_trim(sum_st) ;   
             if(e_nub > 0 && sum_st !=0){
                  sum_st = sum_st+"e+"+ e_nub;}   
             if(e_nub == 0 || sum_st ==0){
                  sum_st = sum_st;}
             if(e_nub < 0 && sum_st !=0 ){
                  sum_st = sum_st+"e"+ e_nub;}
             if(data_point==1){ sum_st = "-"+sum_st;}  
     return sum_st;
}



function m_str_char(str,char){   
   var str_a = str.toString().trim();
   var char_a = char.toString().trim();

   var str_lg = str_a.length;
   var char_lg = char_a.length;
   var count_a=0;

      if(str_lg < char_lg){ count_a=0 ; return count_a;}

         for(var i=0;i< (str_lg-char_lg+1) ;i++){
            var str_part = str_a.substr(i,char_lg);

                if(str_part ==char_a){ var count_a=count_a+1;}

                                                }
  
        return  count_a;
}



function m_mtx_dele_zero(x){  
   var xx = x;
   var xx_st = xx.toString().trim();
   var xx_st_lg = xx_st.length;   
   var pos_pot  = xx_st.indexOf(".");    
   var pos_e = xx_st.indexOf("e"); 
   var data_lst = xx_st.substr(xx_st_lg-1,1);        
   var data_nub = 1; 
      if(pos_pot !=-1 && pos_e == -1){     
            while( data_nub > 0){
             if( data_lst == 0){
                  xx_st = xx_st.substr(0,xx_st_lg-1);        
                  xx_st_lg = xx_st.length;
                  data_lst = xx_st.substr(xx_st_lg-1,1);}                  
       else{ var data_nub = 0 ;}  
                               } 
                      }
           var xx_st = m_mtx_trim(xx_st) ;   
   return xx_st;
}




function m_ln(x){       
  var xx = x.toString().trim();
  var xx = m_str_e_to_str(xx);         
          var nub_point= m_str_char(xx,".") ;  
          var ans_1 ="";
          if( nub_point >2){
              var ans_1 = message_1(30);
                           return  ans_1  }
         else{ xx=xx;}
         var xx =m_mtx_trim(xx) ;         
  var xx_st=xx; 
  var sum_tt = 0 ;
  var nub_e=0;     
  var xx_st = m_mtx_trim(xx_st) ;   
  var xx_st_ref = xx_st ;
  var xx_fst=xx_st.substr(0,1);
  var xx_st_lg=xx_st.length;   
     var data_comp_xx_st_1   =  m_mtx_real_str_comp(xx_st,1);      
     var data_comp_xx_0   =  m_mtx_real_str_comp(xx,0); 
    if ( data_comp_xx_st_1 == 3){ var sum_tt = 0 ; return sum_tt; }   
    if ( data_comp_xx_0 ==3 ){ var sum_tt = message_1(13); return sum_tt; }
    if ( xx_fst =="-" ) { var sum_tt = message_1(5); return sum_tt; }
         var pos_pot  = xx_st.indexOf(".");    
         var pos_e  = xx_st.indexOf("e");     
         var pos_fst  = xx_st.substr(0,1);   
         var pos_sec  = xx_st.substr(1,1);   
           if(pos_fst =="0" && pos_sec  !="."){    
                 var flag=1;
                  while(flag >0){
                    xx_st=xx_st.substr(1,xx_st.length-1);   
                     var pos_fst  = xx_st.substr(0,1);      
                     var pos_sec  = xx_st.substr(1,0); 

                            if(pos_fst =="0" && pos_sec  !="."){
                                var flag=1;}
                            else{ var flag=0;}

                                }  
                      }
         if(  pos_e != -1){ 
          var nub_e =  xx_st.substr(pos_e+1,xx_st.length - pos_e); 
               var nub_e =m_mtx_trim(nub_e) ;         
                xx_st = xx_st.substr(0,pos_e);       
                       }
        var xx_st_m_bf = m_nub_m_s(xx_st).toString();    
        var xx_st_m_bf_lg = xx_st_m_bf.length;           
        var xx_st_p_bf = m_nub_p(xx_st).toString();      
        var xx_st_p_bf_lg = xx_st_p_bf.length;           
           xx_st=xx_st.toString().trim();
           var st_fst = xx_st.substr(0,1);       
           var st_sec = xx_st.substr(1,1);       
           var st_tri = xx_st.substr(2,1); 
   if(xx_st_m_bf !=0  ){              
       xx_st = "0"+"."+xx_st_m_bf.substr(0,xx_st_m_bf_lg)+xx_st.substr(xx_st_m_bf_lg+1,xx_st.length-xx_st_m_bf_lg-1);    
       var nub_e= nub_e + xx_st_m_bf_lg;
                          }
        if(st_fst =="0" && st_sec =="." && st_tri =="0" && parseFloat(xx_st_p_bf) >0 ){      
               var flag_a=1;
               while(flag_a > 0){
                xx_st = "0."+ xx_st.substr(3,xx_st.length-3);
                var nub_e=m_mtx_int_sub(nub_e,1);
                 var st_fst = xx_st.substr(0,1);       
                  var st_sec = xx_st.substr(1,1);       
                  var st_tri = xx_st.substr(2,1);         
                        if(st_fst ==0 && st_sec =="." && st_tri ==0 ){
                            var flag_a=1;}
                         else{ var flag_a=0;}
                               }  

               }
           FF=m_new_zero_mtx(1,MTX_COL);            
           SMT=m_new_zero_mtx(1,MTX_COL);            
           SMT_T=m_new_zero_mtx(1,MTX_COL);            
           SMT_TT=m_new_zero_mtx(1,MTX_COL);            
           SUM_2=m_new_zero_mtx(1,MTX_COL);            
           FF[0][0]= (parseInt(FF[0][0])+ (m_abs(nub_e)*100000)).toString() ; 
           AA=m_mtx_ln_100_table();    
           BB_10 =m_mtx_row_table(AA,1) ; 
           SUM_M=m_mtx_point_mul( FF,BB_10);     
           SUM_M = m_mtx_cell_five(SUM_M);
           var nub_ln2=0;  
           var nub_ln3=0;  
           var nub_ln5=0;   
           var nub_ln7=0;    
           var nub_ln10=0;  
           var nub_ln13=0;  
           var nub_ln19=0;  
           var nub_ln37=0;   
           var nub_ln67=0;    
               var data_chk = xx_st.substr(0,12).trim();
               var data_chk = parseFloat(data_chk);
            if( data_chk >= 0.1   && data_chk< 0.124){  xx_st=m_mtx_real_mul(xx_st,8); var nub_ln2=m_mtx_int_sub(nub_ln2,3);}    
            if( data_chk >= 0.124 && data_chk< 0.24 ){  xx_st=m_mtx_real_mul(xx_st,4); var nub_ln2=m_mtx_int_sub(nub_ln2,2);}
            if( data_chk >= 0.24  && data_chk < 0.5  ){  xx_st=m_mtx_real_mul(xx_st,2); var nub_ln2=m_mtx_int_sub(nub_ln2,1);}
                 xx_st = m_str_e_to_str(xx_st);  
                 var data_chk_1 = xx_st.substr(0,12);
                 var data_chk_1 = parseFloat(data_chk_1); 
               if( data_chk_1 <= 0.6 ){  xx_st=m_mtx_real_mul(xx_st,2); var nub_ln2 = m_mtx_int_sub(nub_ln2,1);}      
                   xx_st = m_str_e_to_str(xx_st);         
                   var data_chk_2 = xx_st.substr(0,12);
                   var data_chk_2 = parseFloat(data_chk_2); 
                  if( data_chk_2 >= 0.6  && data_chk_2 <= 0.7 ){ 
                   xx_st=m_mtx_real_div(xx_st,0.64); var nub_ln2 = m_mtx_int_add(nub_ln2 ,6 );           
                                                          var nub_ln10 = m_mtx_int_sub(nub_ln10 ,2); 
                                                                 }   
  
                  if( data_chk_2 > 0.7  && data_chk_2 <= 0.875 ){ 
                        xx_st=m_mtx_real_div(xx_st,0.8); var nub_ln2 = m_mtx_int_add(nub_ln2 ,3) ;   
                                                         var nub_ln10 = m_mtx_int_sub(nub_ln10,1);
                                                                                  }       

                  if( data_chk_2 >= 1.125  && data_chk_2 <= 1.2 ){ 
                       xx_st=m_mtx_real_div(xx_st,1.28); var nub_ln2 = m_mtx_int_add(nub_ln2 ,7) ; 
                                                         var nub_ln10 = m_mtx_int_sub(nub_ln10 ,2); 
                                                                                      }      

                   xx_st = m_str_e_to_str(xx_st);         
                   var data_chk_3 = xx_st.substr(0,12);
                   var data_chk_3 = parseFloat(data_chk_3); 
                  if( data_chk_3 >= 0.875  && data_chk_3 <= 0.95 ){ 
                       xx_st=m_mtx_real_div(xx_st,0.9); var nub_ln3 = m_mtx_int_add(nub_ln3 , 2) ;  
                                                         var nub_ln10 = m_mtx_int_sub(nub_ln10 ,1);
                                                                                   }   

                         var data_chk_3_1 = xx_st.substr(0,12);          
                         var data_chk_3_1 = parseFloat(data_chk_3_1);     
                        if(( data_chk_3_1 >= 1.1  && data_chk_3_1 < 1.125 )||( data_chk_3_1 < 1.1  && data_chk_3_1 >= 1.05 )){
                                   var data_chk_3=data_chk_3_1;       
                                         }
                   if( data_chk_3 >= 1.1  && data_chk_3 < 1.125 ){ 
                        xx_st=m_mtx_real_div(xx_st,1.125); var nub_ln3 = m_mtx_int_add(nub_ln3 , 2) ;  
                                                           var nub_ln5 = m_mtx_int_add(nub_ln5 , 3) ;
                                                           var nub_ln10 = m_mtx_int_sub(nub_ln10 ,3); 
                                                                                       }      

                   if( data_chk_3 < 1.1  && data_chk_3 >= 1.05 ){ 
                       xx_st=m_mtx_real_div(xx_st,1.05); 
                                    var nub_ln3 = m_mtx_int_add(nub_ln3 ,1) ;  
                                     var nub_ln5 = m_mtx_int_add(nub_ln5 ,1) ; 
                                     var nub_ln7 = m_mtx_int_add(nub_ln7 ,1 ); 
                                     var nub_ln10 = m_mtx_int_sub(nub_ln10 ,2);  
                                                                                    }                   

                   xx_st = m_str_e_to_str(xx_st); 
                  var data_chk_5 = xx_st.substr(0,12);
                   var data_chk_5 = parseFloat(data_chk_5); 
                if( data_chk_5 >= 0.95  && data_chk_5 <= 0.975 ){ 
                     xx_st=m_mtx_real_div(xx_st,0.96);
                                                       var nub_ln3 = m_mtx_int_add(nub_ln3 , 1) ;  
                                                         var nub_ln2 = m_mtx_int_add(nub_ln2 , 5) ; 
                                                         var nub_ln10 = m_mtx_int_sub(nub_ln10 ,2);
                                                                   }   
  
                   if( data_chk_5 >= 1.025  && data_chk_5 < 1.05 ){ 
                      xx_st=m_mtx_real_div(xx_st,1.05); 
                                                        var nub_ln3 = m_mtx_int_add(nub_ln3 , 1) ;  
                                                         var nub_ln5 = m_mtx_int_add(nub_ln5 , 1) ;  
                                                         var nub_ln7 = m_mtx_int_add(nub_ln7 , 1) ;  
                                                         var nub_ln10 = m_mtx_int_sub(nub_ln10 ,2); 
                                                                                     }       
                   xx_st = m_str_e_to_str(xx_st);        
                   var data_chk_6 = xx_st.substr(0,12);
                   var data_chk_6 = parseFloat(data_chk_6); 
                  if( data_chk_6 >= 0.975  && data_chk_6 <= 0.9875 ){ 
                        xx_st=m_mtx_real_div(xx_st,0.98); var nub_ln7 = m_mtx_int_add(nub_ln7 , 2) ;  
                                                         var nub_ln2 = m_mtx_int_add(nub_ln2 , 1) ;
                                                         var nub_ln10 = m_mtx_int_sub(nub_ln10,2);
                                                                                     }   
  
                   if( data_chk_6 >= 1.0125  && data_chk_6 < 1.025 ){ 
                        xx_st=m_mtx_real_div(xx_st,1.024); var nub_ln2 = m_mtx_int_add(nub_ln2 , 10) ;
                                                           var nub_ln10 = m_mtx_int_sub(nub_ln10 ,3);  
                                                                                  } 
                     xx_st = m_str_e_to_str(xx_st);        
                   var data_chk_7 = xx_st.substr(0,12);
                   var data_chk_7 = parseFloat(data_chk_7); 
                  if( data_chk_7 > 0.9875  && data_chk_7 <= 0.99 ){ 
                       xx_st=m_mtx_real_div(xx_st,0.98); var nub_ln7 = m_mtx_int_add(nub_ln7 , 2) ;  
                                                        var nub_ln2 = m_mtx_int_add(nub_ln2 , 1) ; 
                                                        var nub_ln10 = m_mtx_int_sub(nub_ln10 ,2);
                                                                                       }  

                        var data_chk_7_1 = xx_st.substr(0,12);          
                         var data_chk_7_1 = parseFloat(data_chk_7_1);      
                        if( data_chk_7_1 >= 1.01  && data_chk_7_1 < 1.0125 ){
                                   var data_chk_7=data_chk_7_1;       
                                         }
             
                     if( data_chk_7 >= 1.01  && data_chk_7 < 1.0125 ){             
                       xx_st=m_mtx_real_div(xx_st,1.0125); 
                                                         var nub_ln5 = m_mtx_int_add(nub_ln5 , 3) ; 
                                                         var nub_ln3 = m_mtx_int_add(nub_ln3 , 4) ; 
                                                         var nub_ln10 = m_mtx_int_sub(nub_ln10,4);  } 
                   
                    xx_st = m_str_e_to_str(xx_st);         
                   var data_chk_8 = xx_st.substr(0,12);
                   var data_chk_8 = parseFloat(data_chk_8); 
                if( data_chk_8 > 0.99  && data_chk_8 <= 0.995 ){ 
                         xx_st=m_mtx_real_mul(xx_st,1.008); var nub_ln7 = m_mtx_int_sub(nub_ln7 , 1) ; 
                                                          var nub_ln3 = m_mtx_int_sub(nub_ln3 , 2) ;
                                                          var nub_ln2 = m_mtx_int_sub(nub_ln2 , 4) ; 
                                                          var nub_ln10 = m_mtx_int_add(nub_ln10 ,3);  }   
             
                     if( data_chk_8 >= 1.005  && data_chk_8 < 1.01 ){                        
                         xx_st=m_mtx_real_div(xx_st,1.008); 
                                                         var nub_ln7 = m_mtx_int_add(nub_ln7 , 1) ; 
                                                         var nub_ln3 = m_mtx_int_add(nub_ln3 , 2) ; 
                                                         var nub_ln2 = m_mtx_int_add(nub_ln2 , 4) ; 
                                                         var nub_ln10 = m_mtx_int_sub(nub_ln10 ,3);    }         
                   xx_st = m_str_e_to_str(xx_st);   
                  var data_chk_9 = xx_st.substr(0,12);
                   var data_chk_9 = parseFloat(data_chk_9); 

                  if( data_chk_9 > 0.995  && data_chk_9 <= 0.9975 ){ 
                                                                                         
                        xx_st=m_mtx_real_mul(xx_st,1.005); var nub_ln67 = m_mtx_int_sub(nub_ln67 , 1) ; 
                                                           var nub_ln3 = m_mtx_int_sub(nub_ln3 , 1) ;
                                                           var nub_ln5 = m_mtx_int_sub(nub_ln5 , 1) ; 
                                                           var nub_ln10 = m_mtx_int_add(nub_ln10 ,3);  } 
                
                     if( data_chk_9 >= 1.0025  && data_chk_9 < 1.005 ){                       
                         xx_st=m_mtx_real_mul(xx_st,0.9975);  
                       
                                                         var nub_ln3 = m_mtx_int_sub(nub_ln3 , 1) ; 
                                                         var nub_ln5 = m_mtx_int_sub(nub_ln5 , 2) ; 
                                                         var nub_ln7 = m_mtx_int_sub(nub_ln7 ,1) ; 
                                                         var nub_ln19 = m_mtx_int_sub(nub_ln19 , 1) ;  
                                                         var nub_ln10 = m_mtx_int_add(nub_ln10 ,4);    }       
                    xx_st = m_str_e_to_str(xx_st);         
                  var data_chk_a = xx_st.substr(0,12);
                   var data_chk_a = parseFloat(data_chk_a); 
                  if( data_chk_a > 0.9975  && data_chk_a <= 0.99875 ){ 
                                                                                        
                        xx_st=m_mtx_real_div(xx_st,0.9984); var nub_ln2 = m_mtx_int_add(nub_ln2 ,8) ; 
                                                            var nub_ln3 = m_mtx_int_add(nub_ln3 , 1) ;
                                                            var nub_ln13 = m_mtx_int_add(nub_ln13 , 1) ; 
                                                            var nub_ln10 = m_mtx_int_sub(nub_ln10 ,4);  }   
                
                     if( data_chk_a >= 1.00125  && data_chk_a < 1.0025 ){                        
                         xx_st=m_mtx_real_mul(xx_st,0.9984);  
                                                           var nub_ln2 = m_mtx_int_sub(nub_ln2 ,8) ; 
                                                            var nub_ln3 = m_mtx_int_sub(nub_ln3 , 1) ;
                                                            var nub_ln13 = m_mtx_int_sub(nub_ln13 , 1) ; 
                                                            var nub_ln10 = m_mtx_int_add(nub_ln10 ,4);  } 
                    xx_st = m_str_e_to_str(xx_st);         
                  var data_chk_b = xx_st.substr(0,12);
                   var data_chk_b = parseFloat(data_chk_b); 
                  if( data_chk_b > 0.99875  && data_chk_b <= 0.999375 ){ 
                      xx_st=m_mtx_real_div(xx_st,0.999);  
                                                            var nub_ln3 = m_mtx_int_add(nub_ln3 , 3) ;
                                                            var nub_ln37 = m_mtx_int_add(nub_ln37 , 1) ; 
                                                            var nub_ln10 = m_mtx_int_sub(nub_ln10 ,3);  }   
               
                     if( data_chk_b >= 1.000625  && data_chk_b < 1.00125 ){                       
                         xx_st=m_mtx_real_mul(xx_st,0.999);  
                                                           var nub_ln3 = m_mtx_int_sub(nub_ln3 , 3) ;
                                                            var nub_ln37 = m_mtx_int_sub(nub_ln37 , 1) ; 
                                                            var nub_ln10 = m_mtx_int_add(nub_ln10 ,3);  } 
                      
                 xx_st = m_str_e_to_str(xx_st);         
              KK=m_new_zero_mtx(1,MTX_COL);           
               KK[0][0]= (parseInt(KK[0][0])+ ( m_abs(nub_ln3)*100000)).toString() ; 
          AA=m_mtx_ln_100_table();    
           BB_3 =m_mtx_row_table(AA,3) ; 
           SUM_3=m_mtx_point_mul( KK,BB_3);    
          SUM_3=m_mtx_cell_five(SUM_3);
            MM=m_new_zero_mtx(1,MTX_COL);           
              MM[0][0]= (parseInt(MM[0][0])+ ( m_abs(nub_ln5)*100000)).toString() ; 
           AA=m_mtx_ln_100_table();    
           BB_5 =m_mtx_row_table(AA,4) ; 
          SUM_5=m_mtx_point_mul( MM,BB_5);     
         SUM_5=m_mtx_cell_five(SUM_5);
 
           NN=m_new_zero_mtx(1,MTX_COL);           
               NN[0][0]= (parseInt(NN[0][0])+ ( m_abs(nub_ln7)*100000)).toString() ;
           AA=m_mtx_ln_100_table();   
           BB_7 =m_mtx_row_table(AA,5) ; 
           SUM_7=m_mtx_point_mul( NN,BB_7);     
     
          SUM_7=m_mtx_cell_five(SUM_7);
           HH=m_new_zero_mtx(1,MTX_COL);           
              HH[0][0]= (parseInt(HH[0][0])+ ( m_abs(nub_ln10)*100000)).toString() ; 
           AA=m_mtx_ln_100_table();    
           BB_10 =m_mtx_row_table(AA,1) ; 
          SUM_10=m_mtx_point_mul( HH,BB_10);     
         
          SUM_10=m_mtx_cell_five(SUM_10);
              GG=m_new_zero_mtx(1,MTX_COL);           
              GG[0][0]= (parseInt(GG[0][0])+ (m_abs(nub_ln2)*100000)).toString() ; 
              BB_02 =m_mtx_row_table(AA,0) ; 
              SUM_2=m_mtx_point_mul( GG,BB_02);     
              SUM_2=m_mtx_cell_five(SUM_2);    
             M13=m_new_zero_mtx(1,MTX_COL);            
              M13[0][0]= (parseInt(M13[0][0])+ (m_abs(nub_ln13)*100000)).toString() ;
              BB_13 =m_mtx_row_table(AA,7) ; 
              SUM_13=m_mtx_point_mul( M13,BB_13);     
              SUM_13=m_mtx_cell_five(SUM_13);    
             M19=m_new_zero_mtx(1,MTX_COL);            
              M19[0][0]= (parseInt(M19[0][0])+ (m_abs(nub_ln19)*100000)).toString() ; 
              BB_19 =m_mtx_row_table(AA,9) ; 
              SUM_19=m_mtx_point_mul( M19,BB_19);     
              SUM_19=m_mtx_cell_five(SUM_19);    
              M37=m_new_zero_mtx(1,MTX_COL);            
              M37[0][0]= (parseInt(M37[0][0])+ (m_abs(nub_ln37)*100000)).toString() ; 
              BB_37 =m_mtx_row_table(AA,13) ; 
              SUM_37=m_mtx_point_mul( M37,BB_37);     
              SUM_37=m_mtx_cell_five(SUM_37);    
              M67=m_new_zero_mtx(1,MTX_COL);            
              M67[0][0]= (parseInt(M67[0][0])+ (m_abs(nub_ln67)*100000)).toString() ;
              BB_67 =m_mtx_row_table(AA,20) ; 
              SUM_67=m_mtx_point_mul( M67,BB_67);    
              SUM_67=m_mtx_cell_five(SUM_67);    
              if( xx_st !='1'  ){                   
                  xx_st=xx_st.toString();          
                  var SMT =  m_ln_05_15(xx_st ,1);     
                      SMT = m_mtx_cell_five_brow(SMT); 
                      SMT = m_mtx_cell_five(SMT);    
                                     }

               IV=m_new_zero_mtx(1,MTX_COL);            
               if(  nub_e < 0) {
                       var SUM_M = m_mtx_point_sub(IV ,SUM_M);}    
               else { var SUM_M = SUM_M;}
                  var data_comp_xx_st_1 = m_mtx_real_str_comp(xx_st ,1);      
                 if(   data_comp_xx_st_1 == 2 ){    
                   var SUM_T = m_mtx_point_sub(SUM_M ,SMT);
                                }
               else{
                 var SUM_T = m_mtx_point_add(SUM_M ,SMT);
                        }
                        SUM_T = m_mtx_cell_five_brow(SUM_T); 
                        SUM_T = m_mtx_cell_five(SUM_T);   
                   if(nub_ln2 < 0){
                          var SUM_TT = m_mtx_point_sub(SUM_T ,SUM_2);}
                    else { var SUM_TT = m_mtx_point_add(SUM_T ,SUM_2);}

                        SUM_TT = m_mtx_cell_five_brow(SUM_TT); 
                        SUM_TT = m_mtx_cell_five(SUM_TT);      
                       if(nub_ln10 < 0){
                           var SUM_TTA = m_mtx_point_sub(SUM_TT ,SUM_10);}
                    else { var SUM_TTA = m_mtx_point_add(SUM_TT ,SUM_10);}
                     var  SUM_TTA = m_mtx_cell_five_brow(SUM_TTA); 
                            SUM_TTA = m_mtx_cell_five(SUM_TTA);  
                    if(nub_ln3 < 0){
                           var SUM_TTB = m_mtx_point_sub(SUM_TTA ,SUM_3);}
                    else { var SUM_TTB = m_mtx_point_add(SUM_TTA ,SUM_3);}
                     var  SUM_TTB = m_mtx_cell_five_brow(SUM_TTB); 
                           SUM_TTB = m_mtx_cell_five(SUM_TTB);      
                               
                    if(nub_ln5 < 0){
                           var SUM_TTC = m_mtx_point_sub(SUM_TTB ,SUM_5);}
                    else { var SUM_TTC = m_mtx_point_add(SUM_TTB ,SUM_5);}
                     var  SUM_TTC = m_mtx_cell_five_brow(SUM_TTC); 
                           SUM_TTC = m_mtx_cell_five(SUM_TTC);      
          
                     if(nub_ln7 < 0){
                           var SUM_TTD = m_mtx_point_sub(SUM_TTC ,SUM_7);}
                    else { var SUM_TTD = m_mtx_point_add(SUM_TTC ,SUM_7);}
                     var  SUM_TTD = m_mtx_cell_five_brow(SUM_TTD); 
                           SUM_TTD = m_mtx_cell_five(SUM_TTD);      
                      if(nub_ln13 < 0){
                           var SUM_TTE = m_mtx_point_sub(SUM_TTD ,SUM_13);}
                    else { var SUM_TTE = m_mtx_point_add(SUM_TTD ,SUM_13);}
                     var  SUM_TTE = m_mtx_cell_five_brow(SUM_TTE); 
                           SUM_TTE = m_mtx_cell_five(SUM_TTE);      
                     if(nub_ln19 < 0){
                           var SUM_TTF = m_mtx_point_sub(SUM_TTE ,SUM_19);}
                    else { var SUM_TTF = m_mtx_point_add(SUM_TTE ,SUM_19);}
                      var  SUM_TTF = m_mtx_cell_five_brow(SUM_TTF); 
                           SUM_TTF = m_mtx_cell_five(SUM_TTF);      
                     if(nub_ln37 < 0){
                           var SUM_TTG = m_mtx_point_sub(SUM_TTF ,SUM_37);}
                    else { var SUM_TTG = m_mtx_point_add(SUM_TTF ,SUM_37);}
                      var  SUM_TTG = m_mtx_cell_five_brow(SUM_TTG); 
                           SUM_TTG = m_mtx_cell_five(SUM_TTG);      
                        if(nub_ln67 < 0){
                           var SUM_TTH = m_mtx_point_sub(SUM_TTG ,SUM_67);}
                    else { var SUM_TTH = m_mtx_point_add(SUM_TTG ,SUM_67);}
                      var  SUM_TTH = m_mtx_cell_five_brow(SUM_TTH); 
                           SUM_TTH = m_mtx_cell_five(SUM_TTH);      
             var sum_tt = m_mtx_cell_five_show(SUM_TTH);    
            var sum_fst=sum_tt.substr(0,1);
          var data_comp_xx_st_ref_1  =  m_mtx_real_str_comp(xx_st_ref,1);
               if( data_comp_xx_st_ref_1 == 2 && sum_fst !="-"){   var sum_tt ="-"+sum_tt;}             
               if( data_comp_xx_st_ref_1 == 1 && sum_fst =="-"){   var sum_tt =sum_tt.substr(1,sum_tt.length-1);}             
              
         var sum_tt = sum_tt.toString().trim();
  return   sum_tt ;

}


function m_ln_05_15(x,nub){        
                                     
    var x_str = x.toString();
    var x_lg = x_str.length;


  
       var x_str = m_str_e_to_str(x_str);      
     

        var x_str = m_mtx_trim(x_str) ;   
      


       var xx_fst = x_str.substr(0,1);

       var x_str_lg = x_str.length;  

      var sum_tt ="";

    if ( xx_fst == 1 && x_str_lg == 1){ var sum_tt = 0 ; return sum_tt; }
    if ( x == 0 && x_str_lg <16 ){ var sum_tt = message_1(13); return sum_tt; }
    if ( xx_fst =="-" ) { var sum_tt =message_1(5); return sum_tt; }


    if(x > 1 && x< 2 ){                                    
        var zz = "0."+x_str.substr(2,x_lg-2);}   

    else if(xx_fst == 1 && x_str_lg == 1){ var zz=0;}    

    else if(x< 1 && x > 0){                               
   
      
        var zz = "-"+ m_mtx_real_sub(1,x); 
    
                  }

     else if(x==2){ var zz=1;} 
     else{ 
             var zz =  m_mtx_real_sub(x,1);    
         
                            }                                                  



      var zz_st = zz.toString();
      var zz_lg = zz_st.length;

   

    
 
    var zz_m = m_nub_m(zz.toString()) ;           
    var zz_p = m_nub_p(zz.toString()) ;           

      var AA =m_mtx_unit_inv_lg_100_table();     

 
    var ITEM_S= m_new_5_unit_mtx(1,MTX_COL);                 
    var ITEM_S_1= m_new_5_unit_mtx(1,MTX_COL);                 
    var SUM_T = m_new_zero_mtx(1,MTX_COL);                 
   
    var DD=m_new_zero_mtx(1,MTX_COL);                 
        DD=m_mtx_point_in(DD,zz_p.toString());         
      

        DD[0][0]= zz_m*100000 + parseInt(DD[0][0]);    
  
  for(var n = 1;n < AA.length ;n++){      
          EE = m_mtx_row_table(AA,n);     
                 
            var ITEM_S_1= m_mtx_point_mul(DD,ITEM_S_1);  

                ITEM_S_1 = m_mtx_cell_five_brow(ITEM_S_1);   
                ITEM_S_1 = m_mtx_cell_five(ITEM_S_1);      

        
            var ITEM_S = m_mtx_point_mul(EE,ITEM_S_1);      
                ITEM_S = m_mtx_cell_five_brow(ITEM_S);   
                ITEM_S = m_mtx_cell_five(ITEM_S);      
           

                if( n % 2 ==0 && parseFloat(zz_p) > 0 ){                           
                      SUM_T = m_mtx_point_sub(SUM_T,ITEM_S);  
                                 }

              else{
                      SUM_T = m_mtx_point_add(SUM_T,ITEM_S);}    

                  
                  

                 SUM_T = m_mtx_cell_five_brow(SUM_T);   
                 SUM_T = m_mtx_cell_five(SUM_T);      
                  EE=m_new_zero_mtx(1,MTX_COL);  
                             
                                 } 


             SUM_T = m_mtx_cell_five_brow(SUM_T);   
            SUM_T = m_mtx_cell_five(SUM_T);     
           var sum_tt = m_mtx_cell_five_show(SUM_T);   
               sum_tt =sum_tt.toString();

              if( zz_p < 0 ){ sum_tt ="-"+sum_tt;}  


           
         if( nub==0){
            return sum_tt ;}
         else{ return SUM_T ;}
            
 
}










function m_s_e(x,nub){       
  var xx=x.toString().trim();

   
   var xx_st= m_mtx_str_to_e(xx); 

      
   var xx_st= m_mtx_str_to_e_a(xx);             
         var pos_pot  = xx_st.indexOf(".");    
         var pos_e  = xx_st.indexOf("e");       
         var pos_fst  = xx_st.substr(0,1);   
         var pos_sec  = xx_st.substr(1,1);   
         var sum_tt =0;
         var nub_e=0;


      
         
         if(  pos_e != -1){      
          var nub_e =  xx_st.substr(pos_e+1,xx_st.length - pos_e); 
                 
                var nub_e_fst  = nub_e.substr(0,1);


                    if(nub_e_fst=="+"){ var nub_e = nub_e.substr(1,nub_e.length-1);}
                    else{  var nub_e = nub_e ;}

                   
                xx_st = xx_st.substr(0,pos_e);       
                       }


        if(nub==0){ var sum_tt=xx_st;}
        else {var sum_tt = nub_e;} 

             

 return sum_tt ;

}




function m_log(x){      
  var xx=x.toString().trim();

     
          var nub_point= m_str_char(xx,".") ; 
         
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ xx=xx;}

 
         var xx =m_mtx_trim(xx) ;         
   


    xx = m_str_e_to_str(xx);      


  var xx_fst=xx.substr(0,1);

  if(xx_fst=="-"){
      var xxabs = xx.substr(1,xx.length-1);}  
  else{ var xxabs = xx;}

   
 var ans_t = 0;

      if ( xxabs == 0){ var ans_t = message_1(14) ;  return ans_t;} 
      if (xx_fst == "-") {  var ans_t = message_1(9); return ans_t;} 
      if (xxabs == 1) {  var ans_t = 0 ; return ans_t;}
 

         var xxabs = m_mtx_str_to_e(xxabs);     
  
        
     var  nub_e = 0;
     var  xxabs_s =  m_s_e(xxabs ,0);       
           
     var  nub_e =  m_s_e(xxabs ,1);      
          


    var data_y = m_ln(xxabs_s);   

    
    var data_x = LN10_INV; 

        var ans_t =  m_mtx_real_mul(data_y,data_x);
           
        
        var ans_t =  m_mtx_real_add(ans_t,nub_e);

         

        var ans_fst=ans_t.substr(0,1);

            var data_comp_xxabs_1   =  m_mtx_real_str_comp(xxabs,1);      

          if( data_comp_xxabs_1==2 && ans_fst !="-"){   var ans_t ="-"+ans_t;}             
          if( data_comp_xxabs_1==1 && ans_fst =="-"){   var ans_t =ans_t.substr(1,ans_t.length-1);}             


     
   
      var ans_t = ans_t.toString().trim();


  return ans_t;
}



function m_pow_ia(base,p){    
   var bb=base;

    bb = m_str_e_to_str(bb);      

    var pp= p;

    pp = m_str_e_to_str(pp).trim();      

    var pp_fst = pp.substr(0,1); 

 
    if(pp_fst=="-"){ var pp = pp.substr(1,(pp.length-1));}     


    var ans_1=""; 
    var data_a = 1;
   
      

                    for(var i=0; i<pp ;i++){
                      var data_a = m_mtx_real_mul(data_a ,bb); 
                                           }
                     
     var ans_1= data_a ;   

    if(pp_fst=="-") { var ans_1 = m_mtx_real_div(1 ,ans_1 );}
 

return ans_1;

}


function m_pow_ib(base,p){     
  

    var bb=base;

    bb = m_str_e_to_str(bb);      


       

    var pp= p;



    pp = m_str_e_to_str(pp).trim();     

    var pp_fst = pp.substr(0,1); 

 
    if(pp_fst=="-"){ var pp = pp.substr(1,(pp.length-1));}      


    var pp_r = 0;  
    var ans_1="";
 
    var pp_lg = pp.length;
    var row_nub_t = m_mtx_real_mul(pp_lg,3.5) ; 
    var row_nub_t = m_nub_m(row_nub_t) ;       

    var row_nub_t =parseInt(row_nub_t)+2;   


    var AA = m_pow_ib_bf(row_nub_t);  
  

    var data_a = 1;
    var data_p_b=0;   
    var data_p_a=0;   

        
    var data_pp = pp;


                   

                    for(var i=0; i< data_pp ;i++){
                         

                       var data_a = m_mtx_real_mul(data_a ,data_a);    

                          if(i==0){ var data_a = bb ;}


                             
                               data_a = m_mtx_str_to_e_a(data_a);         
                               data_a = m_fix(data_a ,499);            

                              
                           AA[i][1] = data_a ;                        

                           var data_p_a= AA[i][0];                    

                                
                                var data_p_b= AA[i+1][0];                   


                                  var data_cp =  m_mtx_real_str_comp(data_p_b,pp);      
     

                               if(data_cp ==1 ){     
                                 

                                 var data_pp = -1 ;

                                             }   



                                           }  

                     
                    
                    var pp_r = m_mtx_real_sub(pp ,data_p_a);    
                        
                        

                        var pp_r =m_fix(pp_r,499);     

                        pp_r = m_str_e_to_str(pp_r);      
                       
                 
          
       var data_b=1;

                     
                      var aa_lga = AA.length;

            
                      var aa_lg = m_mtx_real_sub(aa_lga,1) ;

                        var  aa_lg =m_fix(aa_lg,499);               
                        var  aa_lg = m_str_e_to_str(aa_lg);      
                 while( pp_r >0 ){

                          
                  for(var i= aa_lg ;i >= 0 ;i--){


                        var data_aa_0 = AA[i][0];           
                            

                        var data_cp_0 =  m_mtx_real_str_comp(pp_r,data_aa_0);     
                           
 
     
                        var data_aa_1 = AA[i][1];


                        var data_cp_1 =  m_mtx_real_str_comp(data_aa_1,0);      

                              
                  
                       if( data_cp_0!=2  && data_cp_1!=3){    
                              

                           var data_b= m_mtx_real_mul(data_b,AA[i][1]) ;

                            

                           var pp_r = m_mtx_real_sub(pp_r,AA[i][0]);

                                  

                                    var pp_r =m_fix(pp_r,499);     
                                   
                                 pp_r = m_str_e_to_str(pp_r);      

                                      if( pp_r == 0){ var i=-1 ;} 
                                       
                                                      } 



                                                  }     


                                      }   

               
     var ans_1= m_mtx_real_mul(data_a ,data_b );

       var ans_1 = ans_1.toString();  


       

     if(pp_fst=="-") { 

               var ans_1 =m_fix(ans_1,499);   
               
          var ans_1 = m_mtx_real_div(1 ,ans_1 );}
       
              

return ans_1;



}

function m_pow_ib_bf(n){        

 var nn=n;
 
   A = m_new_zero_mtx(nn,2);      

 
         A[0][1] = 0;  
         A[1][1] = 1;  

   for(var i=0;i<nn ;i++){

     
     
    if(i==0){ var data_a = 1;
              A[i][0] = data_a;  }

    else{
     var data_a = m_mtx_real_mul(data_a,2 );   

           
          data_a = m_str_e_to_str(data_a);      

        A[i][0] = data_a;
        A[i][1] = 0;

        
        }
        
      
   
       
                            }  

   return A;

}


function m_pow_ic(base,p){    
    var bb=base;
        bb = m_str_e_to_str(bb).trim();      
   var pp= p;
       pp = m_str_e_to_str(pp).trim();      
   var pp_lg = pp.length;
   var pp_lst = pp.substr((pp_lg-1),1);  
   var pp_fst = pp.substr(0,1); 
     if(pp_fst=="-"){ var pp = pp.substr(1,(pp.length-1));}     
      var ans_1 =1;
      var data_ln_a =0;
      var data_ln_b =0;
      var ppp = m_nub_p(pp) ;       
      var ppp_lg = ppp.length;
      var data_ln_a = m_ln(bb);   
      var data_ln_b = m_mtx_real_mul(ppp ,data_ln_a);      
      var data_ln_b = m_str_e_to_str(data_ln_b).trim();      
      var ans_1 =  m_exp(data_ln_b);          
    if(pp_fst=="-") { var ans_1 = m_mtx_real_div(1 ,ans_1 );}
return ans_1;
}


function m_pow_ie(base,p){   
    var bb=base;
        bb = m_str_e_to_str(bb).trim();      
    var bb_fst = bb.substr(0,1); 
     if(bb_fst=="-"){ var bb = bb.substr(1,(bb.length-1));}   
      var pp= p;
          pp = m_str_e_to_str(pp).trim();      
      var pp_lg = pp.length;
      var pp_lst = pp.substr((pp_lg-1),1);  
      var pp_fst = pp.substr(0,1); 
     if(pp_fst=="-"){ var pp = pp.substr(1,(pp.length-1));}   
       var ans_1 =1;
       var data_ln_a =0;
       var data_ln_b =0;
       var data_a = 1;
       var data_b = 1;
       var pp_r = 0 ;
       var ppi = m_nub_m(pp) ;       
           ppi = m_str_e_to_str(ppi).trim();      
       var ppi_lg = ppi.length;  
       var ppp = m_nub_p(pp) ;       
       var ppi_lg = ppi.length;
       var ppp_lg = ppp.length;
             if( ppi==0 && ppp==0 && ppp_lg <=1){ var data_a=1;}
             if( ppi==1 && ppp==0 && ppp_lg <=1){ var data_a=bb;}  
             if(ppi_lg < 3 && ppi_lg >=1 && ppi!=0 && ppi !=-0  ){    
               var data_a = m_pow_ia(bb ,ppi) ;    
                       }
          if(ppi_lg >= 3  ){
               var data_b = m_pow_ib(bb ,ppi) ;     
                       } 
      var data_ln_a = m_ln(bb);  
      var data_ln_b = m_mtx_real_mul(ppp ,data_ln_a);     
      var data_ln_b = m_str_e_to_str(data_ln_b).trim();      
      var ans_1 =  m_exp(data_ln_b);         
            if(ppi_lg < 3 && ppi_lg >=1 && ppi!=0 && ppi !=-0 ){   
              var ans_t = m_mtx_real_mul(data_a ,ans_1);
                          }
           else if(ppi_lg >= 3  ){
             var ans_t = m_mtx_real_mul(data_b ,ans_1);            
                 }
           else { var ans_t = ans_1 ;}                           
       var ans_t = m_fix_pow(ans_t,10);  
        if(pp_fst=="-") { var ans_t = m_mtx_real_div(1 ,ans_t );}
        if(bb_fst=="-" && ppp==0 && (pp_lst==1 ||pp_lst==3 || pp_lst==5 ||pp_lst==7 ||pp_lst==9 )) {
              ans_t ="-"+ans_t ;}  
return ans_t;
}


function m_pow(base,p){    
    var base= base.toString().trim();
    var nub_point=0;  
    var nub_point= m_str_char(base,".") ;  
    var ans_1 ="";
          if( nub_point >2){
             var ans_1 = message_1(30);
                           return  ans_1  }
         else{ base=base;}
        var base =m_mtx_trim(base) ;         
        var  p= p.toString().trim();
        var nub_point_p=0;  
        var nub_point_p= m_str_char(p,".") ;  
        var ans_1 ="";
          if( nub_point_p >2){
              var ans_1 = message_1(30);
                           return  ans_1  }
         else{ p=p;}
         var p =m_mtx_trim(p) ;         
         var base_msg = m_mtx_test_msg(base);
         var p_msg = m_mtx_test_msg(p);
        if(base_msg !=-1 ){ return base;}     
        if(p_msg !=-1 ){ return p;}
   var bb=base;
   var pp=p;
   var ans_1="";
     bb = m_str_e_to_str(bb);      
     pp = m_str_e_to_str(pp);      
   var ppi = m_nub_m(pp) ;      
        data_pp_ppi = m_mtx_real_str_comp(pp,ppi);      
      if(data_pp_ppi !=3){
         var ppp = m_nub_p(pp) ;   
                       }
       else{ var ppp =0;}
       var bb = bb.toString().trim();
       var bb = m_mtx_trim(bb) ;   
       var bb_lg =bb.length;
       var data_comp_bb_1   =  m_mtx_real_str_comp(bb,1);      
       var data_comp_bb_0   =  m_mtx_real_str_comp(bb,0); 
       var data_comp_pp_0   =  m_mtx_real_str_comp(pp,0);
       var data_comp_ppp_0   =  m_mtx_real_str_comp(ppp,0);
       var data_comp_ppi_0   =  m_mtx_real_str_comp(ppi,0);
   if(data_comp_bb_1==3 ){ var ans_1=1;  return ans_1; }            
   if(bb!=0 && data_comp_pp_0 == 3) {var  ans_1=1; return ans_1;  }
   if(data_comp_bb_0==3 && data_comp_pp_0==1) { var ans_1=0; return ans_1;  }
   if(data_comp_bb_0==3 && data_comp_pp_0==2) { var ans_1=message_1(28); return ans_1; }
   if(data_comp_bb_0==3 && data_comp_pp_0 ==3) { var ans_1=message_1(28); return ans_1; }
   if(bb < 0 && ppp !=0 && data_comp_ppp_0 !=3) { var ans_1=message_1(6) ; return ans_1; }
          var pa_fst = pp.substr(0,1); 
        if(( data_comp_ppp_0 == 3 && pp.length <3  && pa_fst !="-" )||( data_comp_ppp_0 == 3 && pp.length < 4  && pa_fst =="-")){          
              var ans_1 = m_pow_ia(bb,pp);
            }
          if(( data_comp_ppp_0 == 3 && pp.length >=3 && pa_fst !="-")||( data_comp_ppp_0 == 3 && pp.length >= 4  && pa_fst =="-" )){          
            var ans_1 = m_pow_ib(bb,pp);
                  }
          if( data_comp_ppp_0 != 3 && data_comp_ppi_0 ==3){   
                var ans_1 = m_pow_ic(bb,pp);
           }
          if( data_comp_ppp_0 != 3 && data_comp_ppi_0 !=3){   
             var ans_1 = m_pow_ie(bb,pp);
             }
         var ans_1 = ans_1.toString().trim();
            return ans_1;
     
}



function m_asin_bf_ext(x,nub){            

   var x = x.toString().trim();    

    

   
      var nub_point= m_str_char(x,".") ;  
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ x=x;}
    var x =m_mtx_trim(x) ;         

   
    

       
   var  xx = m_str_e_to_str(x);      

   
   var xx_fst = xx.substr(0,1);
   var nubb=nub;

   if(xx_fst=="-"){ var xx=xx.substr(1,xx.length-1);}   
    else { var xx=xx;} 

   
    var ans_1=0;
    
    var data_up=0;
    var data_up_t=0;

         
    
         var xx_test = m_mtx_trim(xx) ;   
      
     
     var data_comp_xx_1   =  m_mtx_real_str_comp(xx,1);      
     var data_comp_x_1    =  m_mtx_real_str_comp(x,1); 
     var data_comp_x_n1   =  m_mtx_real_str_comp(x,-1);
     var data_comp_xx_0   =  m_mtx_real_str_comp(xx,0); 
     var data_comp_xx_test_0   =  m_mtx_real_str_comp(xx_test,0); 
     var data_comp_xx_test_1   =  m_mtx_real_str_comp(xx_test,1); 
   

    if(data_comp_xx_1 ==1 ) {  var ans_1= message_1(1);  return ans_1; }     
            
    if(data_comp_xx_0 ==3 ){ ans_1 = 0 ; return ans_1 ;}                    

    if(data_comp_xx_1 ==3 && data_comp_x_1 ==3  ){ ans_1 = PIDIV2 ;   return ans_1   ;}  

    if( data_comp_xx_1 ==3 && data_comp_x_n1 ==3 ){ ans_1 = "-"+PIDIV2  ; return ans_1  ;}  


      var VT = m_mtx_asin_value_100_table();                  
       

      var VC =m_mtx_asin_cos_value_100_table();              
          
         var value_nub = -1;
         var ans_0 =  0;

         
        for(var nn=0 ;nn < VT.length ;nn=nn+0.05){           

               var xx_table_nb = m_mtx_real_str_comp(xx,nn);

                       


                    if( xx_table_nb == 3){ value_nub = nn *20 ;

                            

                            var VT_va = m_mtx_row_table(VT,value_nub);    

                            var ans_0 = m_mtx_cell_five_show(VT_va);   

                       

                                ans_0 = ans_0.toString();

                            if(xx_fst=="-"){ var ans_0 = "-"+ans_0;}                    


                              if(nubb==1){ var ans_0 = VT_va ;}        



                                     return ans_0  ;                      
                           
                                            }
                                               }  

 
              
    
    if(( data_comp_xx_0==1  && data_comp_xx_1==2)||( data_comp_xx_test_0==1 &&  data_comp_xx_test_1==2)){                              
  
        var AA = m_mtx_asin_coef_100_table();                  
        var BB = m_new_zero_mtx(1,AA[0].length);              


        var DD=m_new_zero_mtx(1,MTX_COL);                          
     
         var DT=m_new_zero_mtx(1,MTX_COL);                           
        
              DT = m_mtx_cell_five(DT);                     
 
         var MM=m_new_unit_mtx(1,MTX_COL);                      


          var TT=m_new_zero_mtx(1,MTX_COL);                           

        
                var x_a =0;
                   var y_a =0;  
 
                   var table_nub = -1;

 
                    for(var kk=0 ;kk < VT.length ; kk++){


                       if(kk==0){
                                 var data_rang_s = 0 ;        
                                 var data_rang_e = 0.025;   
                                 var y_a =0;
      
                               }

                        else if(kk==1){
                                 var data_rang_s = 0.025 ;        
                                 var data_rang_e = 0.075;   
                                 

                               }

                        else {
                    
                                var data_rang_s =m_mtx_real_add(0.025 ,m_mtx_real_mul(0.05,m_mtx_real_sub(kk,1))); 
                                var data_rang_e =m_mtx_real_add(0.075 ,m_mtx_real_mul(0.05,m_mtx_real_sub(kk,1)));   

                               

                               }

                 

                           var xx_rang_s = m_mtx_real_str_comp(xx,data_rang_s);        
                           var xx_rang_e = m_mtx_real_str_comp(xx,data_rang_e);       
                           
                        


                       if(( xx_rang_s == 1)&& (xx_rang_e ==2 || xx_rang_e ==3)){
                                   var x_a = xx ;

                                   var y_a =m_mtx_real_mul(0.05,kk); 

                                
                                   var table_nub = kk;    

                                      kk = VT.length ;   
                                            }

                                               }  

                  
                             var  s_a_1 =  m_mtx_real_mul(x_a,x_a);    
                             
                       
                            var  s_a_2 =  m_mtx_real_sub(1,s_a_1);     
                          
                            var  s_a_3 =  m_pow(s_a_2,0.5);              
                              
                            var  s_a_5 =  m_mtx_real_mul(y_a,s_a_3);   
                             var VC_va = m_mtx_row_table(VC,table_nub);    

                            var s_a_8 = m_mtx_cell_five_show(VC_va);   

                           

                            var  s_a_9 =  m_mtx_real_mul(x_a,s_a_8);   

                              
                            var  s_a = m_mtx_real_sub(s_a_9,s_a_5);    

                                 

                                  var s_fst = s_a.substr(0,1);
                      
                                if(s_fst=="-"){ var s_a = s_a.substr(1,s_a.length-1);}   
                                         else { var s_a=s_a;} 



                             DD=m_mtx_point_in(DD,s_a);                      

                      
                            DT=m_mtx_point_mul(DD,DD);                            
                           
                             DT = m_mtx_cell_five( DT); 

                        

                    
           for(var i=0;i<AA.length  ;i++){                   

             EE_i = m_mtx_row_table(AA,i);                 
               if( i==0){  MM = DD; }                        
               else{
                    MM = m_mtx_point_mul(MM ,DT); }          
                      MM = m_mtx_cell_five(MM);  

               
               
                    BB = m_mtx_point_mul(MM,EE_i);          


                      BB = m_mtx_cell_five(BB);  

                
                    TT = m_mtx_point_add(TT,BB);

                       TT = m_mtx_cell_five(TT);         

                     

                                           }

               
           }
  
   
        

              if( table_nub>=0 && table_nub <=20){            

                 var VT_j = m_mtx_row_table(VT,table_nub);                      
                             if(s_fst=="-"){
                               TT = m_mtx_point_sub(VT_j,TT); }       
 
                             else{ TT = m_mtx_point_add(VT_j,TT); }    
                          

                                                 }
 
         
                   

    
             var ans_1 = m_mtx_cell_five_show(TT);   

                 ans_1 = ans_1.toString();



         if(xx_fst=="-"){ var ans_1 = "-"+ans_1;}                    

           if(nubb==1){ var ans_1=TT;}    


         
           

return ans_1;

}


           
                                
         



function m_asin(x){                                              
   var ans_1 = m_asin_bf_ext(x,0) ;        
    var ans_1 = ans_1.toString().trim();



return ans_1;

}





function m_acos(x){                   
   var xx = x.toString().trim();


      
          var nub_point= m_str_char(xx,".") ;  

         
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ xx=xx;}

 
         var xx =m_mtx_trim(xx) ;         
   
   var xx_fst = xx.substr(0,1);
  

   if(xx_fst=="-"){ var xx=xx.substr(1,xx.length-1);}   
    else { var xx=xx;}     

    xx = m_str_e_to_str(xx);      
    
    var ans_1=0;
  
   
     var data_comp_xx_0   =  m_mtx_real_str_comp(xx,0); 
     var data_comp_xx_1   =  m_mtx_real_str_comp(xx,1);      
     
     var data_comp_x_1    =  m_mtx_real_str_comp(x,1); 
     var data_comp_x_n1   =  m_mtx_real_str_comp(x,-1);
    

    if( data_comp_xx_1==1){  var ans_1= message_1(2);  return ans_1; }   

           
    if( data_comp_xx_0==3 ){ ans_1 = PIDIV2 ; return ans_1 ;}                    
             
    if( data_comp_xx_1== 3 && data_comp_x_1 == 3 ){ ans_1 = 0 ; return ans_1   ;}  

              
    if( data_comp_xx_1== 3 && data_comp_x_n1==3  ){ ans_1 = PI ;  return ans_1  ;}  

       var TT=m_new_zero_mtx(1,MTX_COL);                           



       var SS= m_asin_bf_ext(xx,1);



  
        var PP =m_mtx_pi_100_table();               
            PP_i = m_mtx_row_table(PP,2);          

       
   
             if(xx_fst !="-"){ 

                  
                     
                 TT = m_mtx_point_sub(PP_i,SS);}
             else{


                TT = m_mtx_point_add(PP_i,SS);
               }




          TT = m_mtx_cell_five_brow(TT);           

    
          TT = m_mtx_cell_five(TT);         

         var ans_1 = m_mtx_cell_five_show(TT);   

             
          var ans_1 = ans_1.toString().trim();


return ans_1;

}








function m_atan(x){                   
   var xx = x.toString().trim();


       
          var nub_point= m_str_char(xx,".") ;  
         
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ xx=xx;}

 
         var xx =m_mtx_trim(xx) ;         
    
          

   var xx_fst = xx.substr(0,1);
  

   if(xx_fst=="-"){ var xx=xx.substr(1,xx.length-1);}   
    else { var xx=xx;} 

    xx = m_str_e_to_str(xx);      

    var ans_1=0;
    var data_flag=0;

      


     var data_comp_xx_0   =  m_mtx_real_str_comp(xx,0); 
     var data_comp_xx_1   =  m_mtx_real_str_comp(xx,1);      
     var data_comp_x_1    =  m_mtx_real_str_comp(x,1); 
     var data_comp_x_n1   =  m_mtx_real_str_comp(x,-1);

    
    
    if( data_comp_xx_0==3 ){ ans_1 = 0 ; return ans_1 ;}                                     
    if( data_comp_xx_1== 3 && data_comp_x_1 == 3 ){ ans_1 = PIDIV4 ; return ans_1   ;}      
    if( data_comp_xx_1== 3 && data_comp_x_n1==3 ){ ans_1 = "-"+PIDIV4 ;  return ans_1  ;}  



          
         var comp_xx_99999  =  m_mtx_real_str_comp(xx,99999);      

            if( comp_xx_99999 ==1){

               var xx = m_mtx_real_div(1,xx);   

               var data_flag=1;
                                      }
          
     var data_2x = m_mtx_real_mul(xx,xx);                    
          
     var data_2x_1 = m_mtx_real_add(data_2x,1);                    
            
     var data_pow = m_pow(data_2x_1,0.5);                    
           
     var data_t = m_mtx_real_div(xx,data_pow);

           
             var data_t = m_str_e_to_str(data_t);          

     var ans_1 = m_asin(data_t);

         
             if(data_flag==1){
               var ans_1 = m_mtx_real_sub(PIDIV2,ans_1);   
               
                                      }
         
    if(xx_fst=="-"){ var ans_1 = "-"+ans_1;}                   


      var ans_1 = ans_1.toString().trim();

   

return ans_1;

}




function m_asinh(x){                            

   var xx = x.toString().trim();


      
          var nub_point= m_str_char(xx,".") ;  

         
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ xx=xx;}

 
         var xx =m_mtx_trim(xx) ;         

   

   var xx_fst = xx.substr(0,1);
  

   if(xx_fst=="-"){ var xx=xx.substr(1,xx.length-1);}   
    else { var xx=xx;} 

    xx = m_str_e_to_str(xx);     

    var ans_1=0;
    
   
       var data_2x = m_mtx_real_mul(xx,xx);
      
              
    
     var data_2x_1 = m_mtx_real_add(data_2x,1); 
                   
          

     var data_pow = m_pow(data_2x_1,0.5);    
                
           
        var data_pow = m_str_e_to_str(data_pow);  

             
        
     var data_t = m_mtx_real_add(xx,data_pow);

            
      
          ans_1 =m_ln(data_t);

         if(xx_fst=="-"){ var ans_1 = "-"+ans_1;}                    

       var ans_1 = ans_1.toString().trim();




return ans_1;

}






function m_acosh(x){                  
   var xx = x.toString().trim();

        
          var nub_point= m_str_char(xx,".") ;  
         
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ xx=xx;}

 
         var xx =m_mtx_trim(xx) ;        
   




   var xx_fst = xx.substr(0,1);
  

   if(xx_fst=="-"){ var xx=xx.substr(1,xx.length-1);}   
    else { var xx=xx;}  

    xx = m_str_e_to_str(xx);      

    var ans_1=0;
    
    if( m_mtx_real_str_comp(x,1)==2 || xx_fst=="-" ){ var ans_1= message_1(3);  return ans_1 ;}      
    if( m_mtx_real_str_comp(x,1)==3 ){ var ans_1 = 0  ; return ans_1 ;}       
   
       var data_2x = m_mtx_real_mul(xx,xx);                    

     var data_2x_1 = m_mtx_real_sub(data_2x,1);                    

     var data_pow = m_pow(data_2x_1,0.5);                    
      
     var data_t = m_mtx_real_add(xx,data_pow);

          ans_1 =m_ln(data_t);

         if(xx_fst=="-"){ var ans_1 = "-"+ans_1;}                    



       var ans_1 = ans_1.toString().trim();


return ans_1;

}





function m_atanh(x){                            

   var xx = x.toString().trim();

       
          var nub_point= m_str_char(xx,".") ;  

         
          var ans_1 ="";
          if( nub_point >2){

              var ans_1 = message_1(30);

                           return  ans_1  }

         else{ xx=xx;}

 
         var xx =m_mtx_trim(xx) ;         
    


   var xx_fst = xx.substr(0,1);
  

   if(xx_fst=="-"){ var xx=xx.substr(1,xx.length-1);}   
    else { var xx=xx;}    

    xx = m_str_e_to_str(xx);      

    var ans_1=0;

       var comp_xx_0 = m_mtx_real_str_comp(xx,0);
       var comp_xx_1 = m_mtx_real_str_comp(xx,1);    
       var comp_xx_n1 = m_mtx_real_str_comp(xx,-1);    
 

    if( comp_xx_n1 == 2 || comp_xx_1 ==1 ){ var ans_1= message_1(4);  return ans_1 ;}    
    if( comp_xx_n1 == 3 || comp_xx_1 ==3 ){ var ans_1= message_1(4);  return ans_1 ;}    


 
    if( comp_xx_0 == 3 ){ var ans_1 = 0  ; return ans_1 ;}     
 
     
   
       var data_a = m_mtx_real_add(1,xx);                     

     var data_b = m_mtx_real_sub(1,xx);                    

     var data_c = m_mtx_real_div(data_a,data_b);           

     var data_d = m_ln(data_c);                            
   
     var ans_1 = m_mtx_real_mul(0.5,data_d);              
         

         if(xx_fst=="-"){ var ans_1 = "-"+ans_1;}                    


       var ans_1 = ans_1.toString().trim();



return ans_1;

}








function m_mtx_row_table(A,row){     
 var AA=A;
 var n=row;

 var BB=m_new_zero_mtx(1,AA[0].length);               

   for(var i=0;i<AA[0].length;i++){ 
         

              BB[0][i]=AA[n][i];
                                  }

   return BB ;  
 
}




function m_mtx_point_in_int(A,x){      
   var AA=A;
   var xx=m_abs(x);

    var data_row = AA.length;     
    var data_col=AA[0].length;  


    xx="00000"+xx.toString();    

    var xx_lg=xx.length;

    for(var m=0;m<data_row ;m++){        
         for(var n=0;n<data_col;n++){

         if( (xx_lg-(m+n+1)*5) >=0){

            AA[m][n]= xx.substr((xx_lg-(m+n+1)*5),5);    
                                   }
              

              if(AA[m][n]==""){ AA[m][n]=0;}       


                                 }
                                         }


   
   return AA;

}


function m_mtx_point_in(A,x){      
   var AA=A;

   
     var xx = m_str_e_to_str(x);  
      var xx_st = xx.toString().trim();
      var data_chk= xx_st.substr(0,1);
      var data_chk_lg= xx_st.length;

        if(data_chk=="-"){
          var xx = xx_st.substr(1,data_chk_lg-1);}
        else{ var xx=xx_st;}

   
    var data_row = AA.length;     
    var data_col=AA[0].length;  


    xx=xx.toString()+"00000";    



    var xx_lg=xx.length;

    for(var m=0;m<data_row ;m++){        
         for(var n=0;n<data_col;n++){

           AA[m][n]= xx.substr(2+((m+n)*5),5);    

              if(AA[m][n]==""){ AA[m][n]=0;}       


                                 }
                                         }


   return AA;

}


function m_mtx_point_mul_all(A,B){      
  var AA=A;
  var BB=B;

      

 
       var data_chk_a = AA[0][0].toString().trim();
       var data_chk_b = BB[0][0].toString().trim();
       var data_chk_a_fst = data_chk_a.substr(0,1);
       var data_chk_b_fst = data_chk_b.substr(0,1);
 


       if(data_chk_a_fst =="-" ){ 
                     var data_chk_a = data_chk_a.substr(1,data_chk_a.length-1);}
        else{ var data_chk_a = data_chk_a;}

                     AA[0][0]= data_chk_a; 

       if(data_chk_b_fst =="-" ){
                     var data_chk_b = data_chk_b.substr(1,data_chk_b.length-1);}
        else{ var data_chk_b = data_chk_b;}

 
                      BB[0][0]= data_chk_b;   
  
     




  var CC = m_new_zero_mtx(1,MTX_COL);     
      CC = m_mtx_point_mul(A,B);      
     
     CC=m_mtx_cell_five(CC);


           if(( data_chk_a_fst=="-" && data_chk_b_fst !="-")||( data_chk_a_fst !="-" && data_chk_b_st=="-")){
                            var data_c00= CC[0][0];
 
                             CC[0][0]= "-"+data_c00 ;} 

        


  return CC;  


}



function m_mtx_point_mul(A,B){      
  var AA=A;

  var BB=B;






      var data_row_a = AA.length;      
      var data_col_a = AA[0].length;  

      var data_row_b = BB.length;     
      var data_col_b = BB[0].length;  

    var data_chk_a = AA[0][0].toString().trim();
       var data_chk_b = BB[0][0].toString().trim();
       var data_chk_a_fst = data_chk_a.substr(0,1);
       var data_chk_b_fst = data_chk_b.substr(0,1);
 


       if(data_chk_a_fst =="-" ){ 
                     var data_chk_a = data_chk_a.substr(1,data_chk_a.length-1);}
        else{ var data_chk_a = data_chk_a;}

                     AA[0][0]= data_chk_a; 

       if(data_chk_b_fst =="-" ){
                     var data_chk_b = data_chk_b.substr(1,data_chk_b.length-1);}
        else{ var data_chk_b = data_chk_b;}

 
                      BB[0][0]= data_chk_b;   
  
      


   

     
         var data_col_max =0;
           if(data_col_a >= data_col_b){ var data_col_max = data_col_a ;}    
           if(data_col_a < data_col_b){ var data_col_max = data_col_b ;}




  var CC = m_new_zero_mtx(1,data_col_max); 
 
       

     for(var i=0;i<data_col_b ;i++){          

          

          var data_a=  parseInt(BB[0][i]);


            

         for(var n=0;n<(data_col_a-1-i) ;n++){    
        
               if(data_a >=0 || data_a<0 ){      
                CC[0][(n+i)+1]= data_a *parseInt(AA[0][n]) + parseInt(CC[0][(n+i)+1]);   

                 

                   
                                          } 

                                             }   
           

                                       }         
     
           CC[0][0]=0;

      
  return CC;
}






function m_str_e_to_str(x){             
                                     
  var xx_st=x.toString().trim();             

         
  var xx_fst = xx_st.substr(0,1);
  var xx_lg = xx_st.length;

  
     if(xx_fst=="-"){ xx_st=xx_st.substr(1,xx_lg-1);    
                          xx_lg=xx_lg-1;}
 

       var pos_pot  = xx_st.indexOf(".");    
       var pos_e  = xx_st.indexOf("e");  



   

    if(pos_e == -1){ return x ;}                      


         var  nub_x_0 = m_str_power(xx_st,0);         
         var  xx_st_0 = m_str_power(xx_st,1);          

            var nub_pot = nub_x_0.indexOf(".");   
            var flag_e=0;


    if( nub_pot !=-1){                              
             var xx_st = mtx_str_e(xx_st);        

             
            var flag_e = 1;

                     }


      


     if( nub_pot ==-1 || flag_e == 1 ){                             

         var  nub_x = m_str_power(xx_st,0);          
              xx_st = m_str_power(xx_st,1);          
           var xx_lg = xx_st.length;             
           var pos_pot  = xx_st.indexOf(".");    
           var xx_chk = xx_lg-pos_pot-1;





           if(xx_chk >= nub_x && pos_pot !=-1){                    
           
             xx_st = m_mtx_str_element_shift(xx_st,nub_x);     

               nub_x =0;
                             }


            if(xx_chk < nub_x && pos_pot !=-1){                    
                  var data_z=0;
                  var data_z=nub_x - xx_chk;

                     while( data_z >0){
                      xx_st =  xx_st+"0";
                       data_z = data_z -1 ;
                                    }

             xx_st = m_mtx_str_element_shift(xx_st,nub_x);     

               nub_x =0;
                             }




                

                var nub_x_comp_0 = m_mtx_real_str_comp(nub_x,0);   

               

              if( nub_x_comp_0==2  && pos_pot !=-1 ){                             
             xx_st = m_mtx_str_element_shift(xx_st,nub_x);     
               nub_x =0;
                             }


              if( nub_x_comp_0==2  && pos_pot == -1 ){                      
                   xx_st =xx_st+"." ;    
  
                   xx_st = m_mtx_str_element_shift(xx_st,nub_x);         
                       nub_x =0;
                             } 


 
  

              if( nub_x_comp_0==1 && pos_pot ==-1){                    
                    while( nub_x_comp_0==1){

                      xx_st =  xx_st+"0";


                       nub_x = m_mtx_real_sub(nub_x,1) ;

                        var nub_x_comp_0 = m_mtx_real_str_comp(nub_x,0);   

                                    }

                   nub_x_comp_0==3;
                
                             }




           }   


         

        if(xx_fst=="-"){ xx_st="-"+xx_st;}    
         else{ xx_st=xx_st;}

         
         var xx_st = m_mtx_trim(xx_st) ;   
      
      
 
    return xx_st ;

}



function m_mtx_str_to_e(x){             
                                            
  var xx_st=x.toString().trim();             

  var xx_fst = xx_st.substr(0,1);
  var xx_lg = xx_st.length;

    

     if(xx_fst=="-"){ xx_st=xx_st.substr(1,xx_lg-1);   
                          xx_lg=xx_lg-1;}
 
     
       var pos_e  = xx_st.indexOf("e");    
       var pos_point  = xx_st.indexOf("."); 


 
        var data_msg = xx_st.indexOf("Msg"); 
        if(data_msg !=-1){ return xx_st ;}  
  

  
       var data_fst = xx_st.substr(0,1);     
       var data_chk = 1;
       var nub_x =0;
  
       

    if(pos_e != -1  ){ return x ;}   
    if(pos_e == -1 && pos_point ==-1 && xx_lg>=2 ){             
            xx_st= xx_st.substr(0,1) +"."+xx_st.substr(1,xx_lg-1)+"e+"+ (xx_lg-1);

                   if(xx_fst=="-"){ xx_st="-"+xx_st;}    
                    else{ xx_st=xx_st;}

                   
                       return xx_st ;}      

             
     if(pos_e == -1 && pos_point !=-1 && data_fst !=0 && pos_point >1 && xx_lg >3){       
    
                      xx_st= xx_st.substr(0,1) +"."+xx_st.substr(1,pos_point-1) + xx_st.substr(pos_point+1,xx_lg-pos_point-1)+"e+"+(pos_point-1);


                      if(xx_fst=="-"){ xx_st="-"+xx_st;}    
                       else{ xx_st=xx_st;}


                       return xx_st ;}  

     
                                                     
  



     if(pos_e == -1 && pos_point !=-1 && data_fst ==0 ){       
         

           var xx_lg = xx_st.length;             
           var pos_pot  = xx_st.indexOf(".");    
           

             for(var i=0 ;i<xx_lg-1 ;i++){

                var data_chk = xx_st.substr(i+2,1);           
                    if( data_chk ==0){ var nub_x = nub_x+1;}
                    else{ i= xx_lg;}                          

                                          }



           if( nub_x >=1){                    
             xx_st = m_mtx_str_element_shift(xx_st,nub_x+1);    
               
                             }


           }




        if(xx_fst=="-"){ xx_st="-"+xx_st;}    
         else{ xx_st=xx_st;}  

        
         var xx_st = m_mtx_trim(xx_st) ;   
      
  
          if( nub_x >=1){
            xx_st = xx_st+"e-"+(nub_x+1); }           

           nub_x =0;

    return xx_st ;

}




function m_mtx_str_to_e_a(x){             

                                            
  var xx_st=x.toString().trim();             

  var xx_fst = xx_st.substr(0,1);
  var xx_lg = xx_st.length;


     if(xx_fst=="-"){ xx_st=xx_st.substr(1,xx_lg-1);    
                          xx_lg=xx_lg-1;}
 
     
       var pos_e  = xx_st.indexOf("e");  
       var data_msg = xx_st.indexOf("Msg"); 

         if(data_msg !=-1){ return xx_st ;}  

       var data_fst = xx_st.substr(0,1);     
       var data_chk = 1;
       var nub_x =0;


      if(pos_e  !=-1){
        nub_x = m_str_power(xx_st,0);          
                     }


      xx_st = m_str_power(xx_st,1);          
  
     var nub_m= m_nub_m(xx_st);      
     var nub_p= m_nub_p(xx_st);      

     var nub_m_lg = nub_m.toString().length;
     var nub_p_lg = nub_p.toString().length;

    
         

           var xx_lg = xx_st.length;             
           var pos_pot  = xx_st.indexOf(".");    
           

            
              var data_fst = xx_st.substr(0,1);


           if( nub_m_lg >1 &&  pos_pot  !=-1 &&  data_fst !=0){                    
              xx_st = m_mtx_str_element_shift(xx_st, (-nub_m_lg+1));               
           
                   var nub_x = m_mtx_int_sub(nub_x,1);                
                   var nub_x = m_mtx_int_add(nub_x,nub_m_lg);
               
                             }
          var data_fst = xx_st.substr(0,1);  

            if( nub_m_lg ==1 &&  pos_pot  !=-1 &&  data_fst ==0){                

                   xx_st = m_mtx_str_element_shift(xx_st, 1);                     
           var nub_x = m_mtx_int_sub(nub_x,1);

               
                             } 


            var nn=1;

                 var data_fst = xx_st.substr(0,1);  

       
            if( nub_m ==0 &&  pos_pot  !=-1 &&  data_fst ==0){               
              while( nn >0){
               xx_st = m_mtx_str_element_shift(xx_st, 1);            

                 
                  var nub_x = m_mtx_int_sub(nub_x,1);
 
         
                          var nub_m= m_nub_m(xx_st);      

                              if(nub_m !=0){ var nn=-1 ;} 
                               }

               
                                                       }
 


           



        if(xx_fst=="-"){ xx_st="-"+xx_st;}    
         else{ xx_st=xx_st;}  

      
         var xx_st = m_mtx_trim(xx_st) ;   
      


           nub_x = m_str_e_to_str(nub_x);             
  
          if( nub_x < 0){
            xx_st = xx_st+"e"+(nub_x); }           

           if( nub_x == 0){
            xx_st = xx_st; }                       

           if( nub_x > 0){
            xx_st = xx_st+"e+"+(nub_x); }          


           nub_x =0;


          var xx_st=  m_fix_pow_lst(xx_st);    



    return xx_st ;

}



function m_mtx_str_to_e_ne(x){             
                                            
  var xx_st=x.toString().trim();             

  var xx_fst = xx_st.substr(0,1);
  var xx_lg = xx_st.length;
  
    

     if(xx_fst=="-"){ xx_st=xx_st.substr(1,xx_lg-1);    
                          xx_lg=xx_lg-1;}
 
       var xx_st_new = xx_st;

       var xx_st = m_mtx_trim(xx_st) ;   
        

       var pos_e  = xx_st.indexOf("e");  
       var pos_pot  = xx_st.indexOf(".");    

       var data_fst = xx_st.substr(0,1);     
       var xx_lg = xx_st.length;             
      


    if(pos_e == -1 && pos_pot ==-1 && xx_lg >1 ){       

    
            
              for(var i=0; i< xx_st.length;i++){

                 if(data_fst ==0 && xx_lg >1){           

                       xx_st = xx_st.substr(1,xx_lg-1);

                       var data_fst = xx_st.substr(0,1);       
                       var xx_lg = xx_st.length;             

                                 }

                                                }     

                    
  
             var xx_lg = xx_st.length;             

               if(xx_lg >1){
                 var xx_st_new = xx_st.substr(0,1)+"."+ xx_st.substr(1,xx_lg-1)+"e+"+(xx_lg-1);
                           }

                                                 }


                   


        if(xx_fst=="-"){ xx_st_new="-"+xx_st_new;}    
         else{ xx_st_new=xx_st_new;}  

    return xx_st_new ;

}


function m_mtx_str_to_e_nez(x,n){             
                                            
  var xx_st=x.toString().trim();             

  var xx_fst = xx_st.substr(0,1);
  var xx_lg = xx_st.length;
  
    

     if(xx_fst=="-"){ xx_st=xx_st.substr(1,xx_lg-1);    
                          xx_lg=xx_lg-1;}
 
       var xx_st_new = xx_st;

       
       var xx_st = m_mtx_trim(xx_st) ;   
       
       var pos_e  = xx_st.indexOf("e");  
       var pos_pot  = xx_st.indexOf(".");    

       var data_fst = xx_st.substr(0,1);     
       var xx_lg = xx_st.length;             
      


    if(pos_e == -1 && pos_pot ==-1 && xx_lg >=1 ){       

         
              var xx_st_new = "0."+ xx_st.substr(0,xx_lg);
             

                                                }     

                    
  

        if(xx_fst=="-"){ xx_st_new="-"+xx_st_new;}    
         else{ xx_st_new=xx_st_new;}  


    if(n==0){
       return xx_st_new ;}
    else { return xx_lg ;}



}


function m_mtx_str_to_e_small(x){                
                                            
  var xx_st=x.toString().trim();             

  var xx_fst = xx_st.substr(0,1);
  var xx_lg = xx_st.length;
  
    

     if(xx_fst=="-"){ xx_st=xx_st.substr(1,xx_lg-1);    
                          xx_lg=xx_lg-1;}
 
       var xx_st_new = xx_st;

       
       var xx_st = m_mtx_trim(xx_st) ;   
       
       var pos_e  = xx_st.indexOf("e");  
       var pos_pot  = xx_st.indexOf(".");    

       var data_fst = xx_st.substr(0,2);     
       var xx_lg = xx_st.length;             
      
       var data_zero = 1;
       var data_nub = 0;

    if(pos_e == -1 && pos_pot !=-1 && xx_lg >=1 && data_fst=="0."){       
                 for(var i=0;i<xx_lg ;i++){    

                       var data_zero = xx_st.substr(2+i,1);

                            if(data_zero==0){ var data_nub=data_nub+1; } 
                            else {var i =xx_lg ;}  
 
             
                                           } 

                              if(data_nub >=1) { xx_st_new = xx_st.substr(data_nub+2,1) + "." + xx_st.substr(data_nub+3,xx_lg-data_nub-3)+"e-"+ (data_nub+1);

                                                }   
  
                                                                        }
                    
  

        if(xx_fst=="-"){ xx_st_new="-"+xx_st_new;}    
         else{ xx_st_new=xx_st_new;}  


   
       return xx_st_new ;
    



}





function m_str_1_point( x ,nub){             
                                            
  var xx_st=x.toString().trim();             

  var data_x_fst=xx_st.substr(0,1);
  var data_x_lg=xx_st.length;
  var data_x_pot  =xx_st.indexOf(".");    
  var data_x_e  =xx_st.indexOf("e");
  var data_chk=0;

       if(data_x_pot==-1 && data_x_e==-1 && data_x_fst !="-"){            

           xx_st=xx_st.substr(0,1)+"."+xx_st.substr(1,data_x_lg-1);

                 if(data_x_fst =="-"){
                    xx_st=xx_st.substr(0,2)+"."+xx_st.substr(2,data_x_lg-2);}

                var data_chk = data_chk+ data_x_lg-1 ; 

         }



     if(data_x_fst=="-"){ xx_st=xx_st.substr(1,data_x_lg-1);    
                          data_x_lg=data_x_lg-1;} 


     
     

          var xx_st= xx_st.toString().trim();
   
          var pos_pot_a  = xx_st.indexOf(".");    

           var  data_x_fst_a =xx_st.substr(0,1);

           
        

          for(var i=0;i<= 400 ;i++){                                            
           if( pos_pot_a ==1 && data_x_fst_a == "0"){    
            
               xx_st = m_mtx_str_element_shift(xx_st,1);     
                   var data_chk = data_chk-1; 


                   var pos_pot_a  = xx_st.indexOf(".");   
                   var data_x_fst_a =xx_st.substr(0,1);   
    

                                                     }  

                                            }           



          

            var pos_pot_a  = xx_st.indexOf(".");   
            var data_x_fst_a =xx_st.substr(0,1);   
           


           for(var j=0;j< 400 ;j++){               
           if( pos_pot_a >1 && data_x_fst_a != "0"){    

                 
               xx_st = m_mtx_str_element_shift(xx_st,-1);     
                              
                   var data_chk = data_chk+1;  

       
                   var pos_pot_a  = xx_st.indexOf(".");   
                   var data_x_fst_a =xx_st.substr(0,1);   

                                                     }  

                                            }           
  


           if(data_x_fst=="-"){ xx_st="-"+xx_st; }   
                           

      if(nub == 1){ return data_chk ;}  
      if(nub == 0){ return xx_st ;}
     



 }



function m_mtx_real_mul(y,x){     
     var  x= x.toString().trim();
     var  y= y.toString().trim();
     var x_msg = m_mtx_test_msg(x);
     var y_msg = m_mtx_test_msg(y);
        if(x_msg !=-1 ){ return x;}     
        if(y_msg !=-1 ){ return y;}
   y = m_mtx_str_to_e(y);       
   x = m_mtx_str_to_e(x);         
   y = m_mtx_str_to_e_a(y);       
   x = m_mtx_str_to_e_a(x);       
        var yy=y;
        var yy_st =yy.toString();
        var pos_pot  = yy_st.indexOf(".");    
        var pos_e  = yy_st.indexOf("e");     
        var st_lg = yy_st.length;
        var nub_e_y=0;  
         if(  pos_e != -1){ 
           nub_e_y =m_str_power(yy_st,0);          
           yy_st = m_str_power(yy_st,1);          
                           }
   var data_y_fst=yy_st.substr(0,1);
   var data_y_lg=yy_st.length;
     if(data_y_fst=="-"){ yy_st=yy_st.substr(1,data_y_lg-1);    
                          data_y_lg=data_y_lg-1;} 
        var xx=x;
        var xx_st =xx.toString();
        var pos_pot_x  = xx_st.indexOf(".");    
        var pos_e_x  = xx_st.indexOf("e");     
        var st_lg_x = xx_st.length;
        var nub_e_x=0;   
         if(  pos_e_x != -1){ 
           nub_e_x =m_str_power(xx_st,0);          
           xx_st = m_str_power(xx_st,1);          
                           }
       var data_x_fst=xx_st.substr(0,1);   
       var xx_chk = m_str_1_point( xx_st ,1);       
       var xx_st  = m_str_1_point( xx_st ,0);       
       var yy_chk = m_str_1_point( yy_st ,1);              
       var yy_st  = m_str_1_point( yy_st ,0);             
       var data_chk = xx_chk+yy_chk ;   
   var AA = m_str_to_mtx(yy_st) ; 
   var BB = m_str_to_mtx(xx_st) ; 
   var CC = m_mtx_point_mul(AA,BB) ;  
       CC = m_mtx_cell_five(CC);      
      var sum_tt = m_mtx_cell_five_show(CC);   
      var sum_tt = m_mtx_trim(sum_tt) ;   
      var pos_pot_b  = sum_tt.indexOf(".");    
               if(pos_pot_b > 1){                        
                  sum_tt = m_mtx_str_element_shift(sum_tt,1-pos_pot_b);   
                          var data_chk = m_mtx_int_add(data_chk,pos_pot_b);
                          var data_chk = m_mtx_int_sub(data_chk,1);
                                }
                 var sum_tt = m_mtx_trim(sum_tt) ;   
       if( data_y_fst =="-" && data_x_fst !="-"){ var sum_tt = "-"+sum_tt;} 
       if( data_y_fst !="-" && data_x_fst =="-"){ var sum_tt = "-"+sum_tt;} 
           var nub_e_y = m_mtx_trim(nub_e_y) ;   
           var nub_e_x = m_mtx_trim(nub_e_x) ;   
           var data_chk = m_mtx_trim(data_chk) ;   
           var nub_e_t1 =0;
           var nub_e_t =0;
           var nub_e_t1 = m_mtx_int_add(nub_e_y,nub_e_x) ;           
           var nub_e_t1 = m_fix(nub_e_t1,200);                          
           var nub_e_t = m_mtx_int_add(nub_e_t1,data_chk);
           var nub_e_t = m_fix(nub_e_t,200);                          
               nub_e_t = m_str_e_to_str(nub_e_t);      
         var sum_ttt = 0 ;  
          if(parseFloat(nub_e_t) > 0 ){ sum_ttt = sum_tt+"e+"+nub_e_t;}   
          if(parseFloat(nub_e_t) < 0 ){ sum_ttt = sum_tt+"e"+nub_e_t;}
          if(parseFloat(nub_e_t) == 0 ){ sum_ttt = sum_tt;}
          if(sum_tt == 0 || sum_tt == "0"){ var sum_ttt = 0 ;}    
          if( nub_e_t <=10 && nub_e_t >= 0){                            
               sum_ttt = m_str_e_to_str(sum_ttt) ;            
                                }
   return sum_ttt;
 }



function m_mtx_point_div(A,B){     
  var AA=A;
  var BB=B;
  var data_row_a = AA.length;   
  var data_col_a = AA[0].length;  
  var data_row_b = BB.length;   
  var data_col_b = BB[0].length;  
  var CC = m_new_zero_mtx(1,MTX_COL);    
  var DD = m_new_zero_mtx(1,MTX_COL);    
      CC = m_mtx_any_inv(BB ,1);          
      DD=  m_mtx_point_mul(AA,CC) ;    
  return DD;
}


function m_mtx_real_div(y,x){    
     var  x= x.toString().trim();
     var  y= y.toString().trim();
     var x_msg = m_mtx_test_msg(x);
     var y_msg = m_mtx_test_msg(y);
        if(x_msg !=-1 ){ return x;}     
        if(y_msg !=-1 ){ return y;}
        if(x==0 || x=="0"){  alert("xx="+x);  return message_1(29); }
      var y_data = m_mtx_trim(y) ; 
      var x_data = m_mtx_trim(x) ; 
      var ans_1 =0;
      var data_comp_y_0 = m_mtx_real_str_comp(y_data,0);      
       if(data_comp_y_0==3){ return 0;}   
      var data_comp_x_1 = m_mtx_real_str_comp(x_data,1);     
      if(data_comp_x_1==3){
                  var ans_1 = y_data.toString().trim();                         
                       return ans_1 ;}   
   y = m_mtx_str_to_e(y);       
   x = m_mtx_str_to_e(x);        
   y = m_mtx_str_to_e_a(y);       
   x = m_mtx_str_to_e_a(x);       
     var yy=y;
     var yy_st =yy.toString();
     var sum_tt=0;
     var x_sub =parseFloat(x.substr(0,500));  
     var x_sub_lg = x.length;  
     if( x_sub==0 && x_sub_lg==1){ var sum_tt= message_1(29);  return sum_tt ;}   
         var pos_pot  = yy_st.indexOf(".");    
         var pos_e  = yy_st.indexOf("e");     
         var st_lg = yy_st.length;
        var nub_e_y=0;   
         if(  pos_e != -1){ 
             nub_e_y =m_str_power(yy_st,0);          
             yy_st = m_str_power(yy_st,1);          
                       }
   var data_y_fst=yy_st.substr(0,1);
   var data_y_lg=yy_st.length;
     if(data_y_fst=="-"){ yy_st=yy_st.substr(1,data_y_lg-1);    
                          data_y_lg=data_y_lg-1;} 
         var xx=x;
         var xx_st =xx.toString();
         var pos_pot_x  = xx_st.indexOf(".");    
         var pos_e_x  = xx_st.indexOf("e");    
         var st_lg_x = xx_st.length;
         var nub_e_x=0; 
       if(  pos_e_x != -1){ 
           nub_e_x =m_str_power(xx_st,0);          
           xx_st = m_str_power(xx_st,1);          
                       }
       var data_x_fst=xx_st.substr(0,1);
       var data_x_lg=xx_st.length;
       var xx_chk = m_str_1_point( xx_st ,1);          
       var xx_st  = m_str_1_point( xx_st ,0);       
       var yy_chk = m_str_1_point( yy_st ,1);             
       var yy_st  = m_str_1_point( yy_st ,0);             
       var data_chk = yy_chk-xx_chk ;  
     var AA = m_str_to_mtx(yy_st) ; 
     var BB = m_str_to_mtx(xx_st) ;
     var CC = m_mtx_point_div(AA,BB) ;  
         CC = m_mtx_cell_five(CC);      
       var sum_tt = m_mtx_cell_five_show(CC);   
            var pos_pot_b  = sum_tt.indexOf(".");    
               if(pos_pot_b !=0){
                  sum_tt = m_mtx_str_element_shift(sum_tt,data_chk);   
                                }
               if(pos_pot_b ==0 && data_chk>0 ){      
                      for(var n=0; n<data_chk ;n++){  
                         sum_tt = sum_tt+"0";
                                                    }
                                               }

                 if(pos_pot_b ==0 && data_chk < 0 ){  
                        var  data_chk=m_abs(data_chk);
                        var   s_lg = sum_tt.length
                        sum_tt = sum_tt.substr(0,s_lg-data_chk) +"."+ sum_tt.substr(s_lg-data_chk , data_chk);
                                                   }
                  var sum_tt = m_mtx_trim(sum_tt) ;  
      if( data_y_fst =="-" && data_x_fst !="-"){  sum_tt = "-"+sum_tt;} 
       if( data_y_fst !="-" && data_x_fst =="-"){  sum_tt = "-"+sum_tt;} 
         var nub_e_t =  m_mtx_int_sub(nub_e_y,nub_e_x) ;                       
             nub_e_t = m_str_e_to_str(nub_e_t);   
         if(nub_e_t > 0 ){ sum_tt = sum_tt+"e+"+nub_e_t;}   
         if(nub_e_t < 0 ){ sum_tt = sum_tt+"e"+nub_e_t;}
               sum_tt=m_fix_pow_lst(sum_tt);   
               sum_tt=m_fix_str_lst(sum_tt);   
   return sum_tt;
 }


function m_mtx_cell_five(A){     
     var AA=A;
     var data_row = AA.length;   
     var data_col=AA[0].length;  
        if(A==0){ return A;}
     var count_a = 1 ;
       while( count_a >= 1 ){
   for(var i=0 ;i< 3 ;i++){      
    for(var k=1; k< data_col ;k++){         
                var data_b = parseInt( AA[0][k]);
                var data_b_str = data_b.toString();
                       if(data_b_str.length >= 6 ){       
                          var data_c= data_b_str.substr(0,data_b_str.length-5);
                           AA[0][k-1] = m_mtx_int_add(AA[0][k-1],data_c);  
                           AA[0][k]=   data_b_str.substr(data_b_str.length-5,5 );  
                                              } 
                                  } 
                         } 
              for(var n=1 ;n< data_col; n++){                
                    var data_n = (AA[0][n]).toString();
                    var data_lg = data_n.length;
                       if(data_lg >=6){ var count_a = 1;                       
                                                  n = data_col ; }     
                       else{ var count_a =0;}                

                                             }   
               }  
           for(var m = 1 ;m< data_col; m++){                
                    var data_m = (AA[0][m]).toString();
                    var data_lg_m = data_m.length;
                       while(data_lg_m < 5){
                             AA[0][m]="0"+AA[0][m];
                               data_lg_m=data_lg_m+1;
                                             }
                                              }   
  return AA;
 }



function m_mtx_cell_five_int(A){      
                                       
  var AA=A;                           
     var data_row = AA.length;        
     var data_col=AA[0].length;       

   var count_a = 1 ;

  while( count_a >= 1 ){

   for(var i=0 ;i< 3 ;i++){      
    for(var k=0; k< data_col-1 ;k++){         
                var data_b = parseInt( AA[0][k]);

                var data_b_str = data_b.toString();

                       if(data_b_str.length >= 6 && data_b > 0 ){       

                          var data_c= data_b_str.substr(0,data_b_str.length-5);

                          AA[0][k+1]= parseInt(AA[0][k+1]) + parseInt(data_c);  
                      
                          AA[0][k]=   data_b_str.substr(data_b_str.length-5,5 );  
                           
                                              } 
                                  } 

                         } 
             
               for(var n=0 ;n< data_col-1; n++){                

                    var data_b_n = parseInt( AA[0][n]);

                    var data_n = (AA[0][n]).toString();
                    var data_lg = data_n.length;


                       if(data_lg >=6 &&  data_b_n >0){ var count_a = 1;                       
                                                  n = data_col ; }     
                       else{ var count_a =0;}                 
                                             }   


               }  

            
           for(var m = 0 ;m< data_col-1; m++){               
                    var data_b_m = parseInt( AA[0][m]); 
                    var data_m = (AA[0][m]).toString();
                    var data_lg_m = data_m.length;
                    var data_fst = data_m.substr(0,1);

                      
                       while(data_lg_m < 5 &&  data_b_m >=0 ){       
                              AA[0][m]="0"+AA[0][m];
                                       

                                 data_lg_m=data_lg_m+1;

                                                            }

                       while(data_lg_m < 6 &&  data_fst =="-" ){      
                              AA[0][m]="-0"+data_m.substr(1,data_lg-1);
                                       

                                 data_lg_m=data_lg_m+1;
                                                          }



                                             }   

  return AA;


 }




function m_mtx_cell_five_brow(A){      
  var AA=A;
  var data_row = AA.length;   
     var data_col=AA[0].length;  
      for(var i=0;i<data_row ;i++){
       for(var j= data_col-1;j > 0 ;j--){   

         var data_a = parseInt(AA[i][j]);

            while(data_a < 0){

                      AA[i][j]=100000+parseInt(AA[i][j]) ;  
                      AA[i][j-1]=parseInt(AA[i][j-1])-1 ;

                       data_a = parseInt(AA[i][j]); 
                      
                           }

                                         }

                                    }
        

    return AA ;
}




function m_mtx_value_col_max(A){        
  var AA=A;

     var data_row = AA.length;   
     var data_col=AA[0].length;  
     var col_nub = -1;
     var data_a = 0;    

    for(var i= 0 ; i < data_col ;i++){ 
 
        var data_a = parseInt(AA[0][i]);
    
            if( data_a !=0){

                 var col_nub =i;

                           }

                                     }
     return col_nub ;

}



function m_mtx_cell_five_brow_int(A){      
  var AA=A;

     var data_row = AA.length;   
     var data_col=AA[0].length;  
      var data_nub =  m_mtx_value_col_max(AA);        
  
       for(var j= 0 ; j < data_nub ;j++){       
         var data_a = parseInt(AA[0][j]);
           

          if(  data_a < 0){
            while(data_a < 0){
             
                      AA[0][j]=100000 + parseInt(AA[0][j]) ;  
                      AA[0][j+1]=parseInt(AA[0][j+1]) - 1 ;

                       data_a = parseInt(AA[0][j]);   
                      
                      
                            } 
                                      } 

                                         } 

       
     
    return AA ;
}



function m_mtx_cell_five_show_int(A,B){      
     var AA=A;
     var data_row = AA.length;   
     var data_col=AA[0].length;  
     var data_str_a = "";
     var data_str_b = "";
     var data_str = "";
    var data_cunt = data_col-1;
                                           
           for(var i=0;i< data_cunt ;i++){  

                var data_a = AA[0][i];
    
                var data_a1= data_a.toString();
              
   
                var data_str_a =  data_a1 + data_str_a; 

                var data_str_a = data_str_a.toString();
                                    
                                        } 
           
              while(data_str_a.substr(0,1)=="0"){ data_str_a = data_str_a.substr(1,data_str_a.length);}  
     
              var data_str_b = m_mtx_cell_five_show(B);
              var data_str_b = data_str_b.toString();  

                if(data_str_a !="" ){
                   data_str = data_str_a+ data_str_b.substr(1,data_str_b.length-1);  
                                   }
                 else{  data_str = "0"+ data_str_b.substr(1,data_str_b.length-1);}                 

         
     return data_str;

}


function m_mtx_cell_five_show(A){      
     var AA=A;
     var data_row = AA.length;   
     var data_col=AA[0].length;  
     var data_str = "";
      
      if(AA[0][0].toString() == "-0"){  AA[0][0]="-00000";}  

         for(var i=(data_row-1) ;i >=0  ;i--){       
           for(var j=(data_col-1);j >=0 ;j--){  

                var data_a= AA[i][j];
                var data_b= data_a.toString();

                  while( data_b.length < 5  &&  AA[i][j] >= 0){   
                        data_b="0"+data_b;                      
                                                                 
                     }
              
                while( data_b.length < 6  &&  AA[i][j] < 0){    

                        data_b=data_b.substr(0,1)+"0"+data_b.substr(1,data_b.length-1);    
 
                     }

                    var data_str=  data_b +data_str ;
  
                                       }  
                                        } 

           
              var data_result = AA[0][0].toString();
              var data_result_lg = data_result.length;

                if(data_result_lg <= 5 && AA[0][0] >=0){

                       data_str ="0."+data_str ;  

                                           }
              
                else if(data_result_lg <= 6 && AA[0][0] < 0){       

                       data_str ="-0."+data_str.substr(1,data_str.length) ;  
                                           }

                else if(data_result_lg > 5 && AA[0][0] < 0) {data_str = data_str.substr(0,data_result.length-5)+"."+data_str.substr(data_result.length-5,data_str.length);}  


                else{data_str = data_str.substr(0,data_result.length-5)+"."+data_str.substr(data_result.length-5,data_str.length);}  

           
              while(data_str.substr(data_str.length-1,1)=="0"){
                    data_str = data_str.substr(0,data_str.length-1);}  

                var data_t_fst = data_str.substr(0,1);
                var data_t_sec = data_str.substr(1,1);

                if(data_t_fst=="." ){  var data_str="0"+data_str ; }    
                if(data_t_fst=="-" && data_t_sec=="."){  var data_str="-0."+ data_str.substr(2,(data_str.length-2)) ; }     

        var data_str = m_mtx_trim(data_str) ;    

     return data_str;

}


function m_mtx_insert_blank(A,row_nub){      
     var AA = A;
     var nub = row_nub;
     var data_row = AA.length;   
     var data_col = AA[0].length;  
     var BB= m_new_zero_mtx(data_row+1,data_col);              
     var data_nub=0;
      var data_shift=0; 

     for(var i = 0 ; i < data_row; i++){

        for(var j = 0 ; j < data_col; j++){ 

          if(i >= nub){ var data_nub = 1;}

            var data_shift =  i + data_nub;

            BB[data_shift][j]= AA[i][j];
                          
                                           }


                                      }
     
         return BB;

}


function m_mtx_insert_blank_col(A,col_nub){      
     var AA = A;
     var nub = col_nub;
     var data_row = AA.length;   
     var data_col = AA[0].length;  

     var BB= m_new_zero_mtx(data_row,data_col+1);             
     for(var i = 0 ; i < data_row; i++){       
          var data_nub=0;
          var data_shift=0; 

        for(var j = 0 ; j < data_col; j++){ 

          if(j >= nub){ var data_nub = 1;}

            var data_shift =  j + data_nub;

            BB[i][data_shift]= AA[i][j];

                                        }


                                      }

      
         return BB;

}


function m_mtx_update_col_index(A,col_nub){      
     var AA = A;
     var nub = parseInt(col_nub);
     var data_row = AA.length;   
     var data_col = AA[0].length;  
     for(var i = 0 ; i < data_row; i++){       
      
        for(var j = 0 ; j < data_col; j++){ 

          if(j == nub){  
             AA[i][j]= i;
             

                       }                  
                                           }


                                      }

      
         return AA;

}


function m_mtx_delete_one(A,row_nub){      

     var AA = A;
     var nub = row_nub;
     var data_row = AA.length;   
     var data_col = AA[0].length;  
    var BB= m_new_zero_mtx(data_row-1,data_col);             
     var data_nub=0;
      var data_shift=0; 

     for(var i = 0 ; i < data_row-1; i++){

        for(var j = 0 ; j < data_col; j++){ 

          if(i >= nub){ var data_nub = 1;}

            var data_shift =  i + data_nub;

            BB[i][j]= AA[data_shift][j];

                          
                                           }


                                      }
      
         return BB;

}






function m_mtx_sort_col_nub( X ,col_nub ,property){      
     var AA = X;
     var nub = col_nub;
     var ad = property;
     var data_row = AA.length;   
     var data_col = AA[0].length;  
     var BB= m_new_zero_mtx(1,data_col);             

  for(var k=0; k< data_row+1 ; k++){      

       for(var i=0; i< data_row ; i++){      

                var data_i_up = AA[i][nub];

             if( i < (data_row -1)){    

                var data_i_down = AA[i+1][nub];
               
                                 } 
                                  
    
        if(i< data_row-1){       


               var data_comp_a  =  m_mtx_real_str_comp(data_i_up ,data_i_down);      
     
            if(ad=="A"){             
           
                if( data_comp_a  == 2 ){        
 
                           for(var j=0;j <data_col;j++){

                             BB[0][j]=AA[i][j] ;            
                             AA[i][j] = AA[i+1][j];          
                             AA[i+1][j]= BB[0][j];

                                                }  

                                                       }      
                 
                         }   

              if(ad !="A"){           
          
                 if(  data_comp_a  == 1 ){     
                                                
          
                for(var j=0;j <data_col;j++){

                             BB[0][j]=AA[i][j] ;            

                             AA[i][j] = AA[i+1][j];          

                             AA[i+1][j]= BB[0][j];

                                                }  

                                                       }      
                  
                         }   

                         }  
      
              if( i == (data_row-1) ){              

                  var data_i_upup = AA[i-1][nub];    
 
                 var data_comp_b  =  m_mtx_real_str_comp(data_i_upup ,data_i_up);      
             
               if((data_comp_b ==2  && ad=="A")||       
                  (data_comp_b ==1  && ad != "A")){         

                                                                   
                     for(var j=0;j <data_col;j++){

                       BB[0][j]=AA[i-1][j] ;    

                       AA[i-1][j] = AA[i][j];  

                       AA[i][j]= BB[0][j];

                                                } 

                                       }   

                                            }  

                                      }   

                                        }    

 
   return AA;

    }
  
 function calculate(item_1){

           s_chang_visible_all();          
             MTX_COL = m_deci_dgt();  

             var str_part_lg= string_lg_1();             
             var str_cursor_pos = cursor_position();     
   
         if(str_part_lg >str_cursor_pos){  
           
                cursor_sec_recal_t( );                
                                         } 

              var item_a=calc.input.value;  

          var it = calc.input.value;

      var this_s = it.toString().trim();           
                               
      var this_it = m_del4_2f_char(it,';').toString().trim();        

      var this_it_s = this_it;   

                this_it = mtx_str_inpt_chk_bf(this_it);             

                                            
                   var nub_Msg = m_str_char(this_it,"Msg") ;      
 
               if(nub_Msg !=0){

                         document.getElementById('input').value += "     "+ this_it  +";";

              
                   newline_1(); 
                   scroll_cursor();
                      return;
                                          }


             

               this_it =mtx_str_e_chk(this_it);                     
              
               this_it =  m_str_spec_part_af_minus_sum(this_it);
               this_it = m_tri_ang_2pi_rem(this_it);


               
        
                this_it = m_tri_ang_360deg_rem(this_it);



           this_it = m_str_sub_ngt_bf(this_it);         
           
          this_it = m_str_math_replacec(this_it);           

    
          this_it =  m_oct_nb(this_it);                 
       

           var data_chk1 = s_check_str_char(this_it_s,"(" );   
        
           var data_chk2 = s_check_str_char(this_it_s,")" );   
          
             
               if((data_chk1 - data_chk2) !=0){

                       document.getElementById('input').value += "     "+ "<- error '(' != ')' ->" +";" ;
              
              
                   newline_1(); 
                   scroll_cursor();
                      return;
                                          }


              

              var data_equal = s_check_str_equal(this_it_s);    
            

                 if(data_equal > 0){

                  document.getElementById('input').value += "     "+"<- sorry  '= ' no support  ->" + ";"  ;
                  
                    newline_1(); 
                    scroll_cursor();
                       return;
                                          }


               
              var data_equation =  s_check_str_equation(this_it );       
               
                  if(data_equation !="" || data_equation ==null){

                      document.getElementById('input').value += "     "+"<- sorry  'equation ' no support  ->" + ";"  ;
                      
                          newline_1(); 
                          scroll_cursor(); 
                         return;
                                          }
      

                this_it = m_str_sub_ngt_bf(this_it);  
 
                this_it = m_ext_in_funct(this_it);   

                this_it = this_it.replace(/Q/g , "-"); 

                    

                 
                     var this_it_fst=this_it.substr(0,2);      

                        if(this_it_fst=="-\(" || this_it_fst=="-m"){ var this_it=this_it.substr(1,this_it.length-1);}   

               var this_it_pi_part = this_it.substr(0,50);    
               var this_it_pi_lst_part = this_it.substr(this_it.length-5 ,5);    

              
               if((this_it.length >=17 && this_it >=10000000000000000)||(this_it_pi_part=="3.141592653589793238462643383279502884197169399375" )||(this_it_pi_part=="0.017453292519943295769236907684886127134428718885")){

                   this_it="'"+this_it+"'";}    

              else{

                 this_it=this_it.toString(); 
 
                    }
                   

                           
           var this_data = eval(this_it);  

        var this_data_error = this_data;     

                     

                           this_data=this_data.toString();    
                       var this_data_fst = this_data.substr(0,1);

                       if((this_it_fst=="-\("||  this_it_fst=="-m") && this_data_fst=="-" && this_data !=0){         
                          this_data= this_data.substr(1,this_data.length-1) ;}  
                       if((this_it_fst=="-\("||  this_it_fst=="-m") && this_data_fst!="-"  && this_data !=0){
                         this_data= "-"+this_data ;}                      
     
                
                  this_data = m_mtx_str_to_e_a(this_data); 
 
                  
          var  nub_x = m_str_power(this_data,0);   

              
                         
                    if(m_abs(nub_x)<11  && m_abs(nub_x)>0 ){

                       this_data = m_str_e_to_str(this_data);             
                             

                                          }
             
        var this_data_abs=m_abs(this_data);  
 
              


   
       var this_data_str = m_mtx_e_str(this_data ,1);  
        var data_er_rg ="";
        var data_er_rg = m_sub_error_rg(this_data);
  

     if( parseFloat(this_data_str) >=0 || parseFloat(this_data_str) < 0){   
             if(data_er_rg != this_data.toString()){   
                  document.getElementById('input').value = this_s.toString().trim()+" = "+data_er_rg +";"  ;  
                                            }

               else{  
                var deci_dgt= parseInt(document.getElementById('5_0').value); 

                 document.getElementById('input').value = this_s.toString().trim()+" = "+m_fix(this_data.toString(),deci_dgt).toString() +";"  ;  
                   }

                                           }

       else {

          var error_str = this_data_error ;
          
               error_str =  m_str_spc_inter_2word( error_str,"<","->");               

               if(error_str ==""){ var error_str="system error";}

          document.getElementById('input').value = this_s.toString().trim()  ;  
                                                 
          document.getElementById('input').value += "     "+error_str +";"  ; 
                                                   
             }
  
          newline_1();

           s_chang_sum("=");    
 
          scroll_cursor();    
  
           click_init() ;   
 
         }

     function str_inser(str ,index_it, wd){          

        var str=str ;              
        var index_it=index_it;    
        var wd = wd ;             
        var str_leg = str.length;
            

      var str_new=str.substr(0,index_it) +wd+ str.substr((index_it),str_leg);

    
             return str_new  ;

       }

  
     function str_wdnb(str,index_it){          

        var str=str ;              
        var index_it=index_it;    
        var str_leg = str.length;
        var nb =0 ; 
           
          for(var i=index_it; i<str_leg;i++){
             
                var nb_new = str.substr(index_it,index_it+1) ;
                    if( (nb_new <=9 && nb_new>=0)||( nb_new =".") ||( nb_new ="π")){
                              
                             nb=nb+1;                                               }
           

                                            }
                 
             return nb ;
 

       }






      
