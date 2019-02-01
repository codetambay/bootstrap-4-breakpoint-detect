
$(function() {
    /*!
    Author: aljun
    Description: Bootstrap 4 Breakpoint and @media Detect using JS and CSS
    url: https://github.com/codetambay/bootstrap-4-breakpoint-detect
    Version: 1.0.1
    */	
    
    "use strict";
    
    //create and append div element before </body> 
    // add bootstrap 4 classes 
    $('body').append('<div id="bootstrap-bp" class="container border border-danger text-center invisible sr-only">' +
             '<span class="bp-hide bp-xs">bp-xs</span>' +
             '<span class="bp-hide bp-sm">bp-sm</span>' +
             '<span class="bp-hide bp-md">bp-md</span>' +
             '<span class="bp-hide bp-lg">bp-lg</span>' +
             '<span class="bp-hide bp-xl">bp-xl</span>' +
             '</div>');    
    
            let totalbpArraySrcs = $("#bootstrap-bp span"), spanElems = $("#bootstrap-bp span"), bootstapBPText;
            function getBPResult() {
                let spanElems = $("#bootstrap-bp span");
                for (let i = 0; i < totalbpArraySrcs.length; i++) {
    
                    let valueOfArr = spanElems[i].innerText;
                    //console.log("valueOfArr:",valueOfArr);	
                    if( (valueOfArr.trim()=='') ) {
                    bootstapBPText = spanElems[i].innerHTML;	    	
                    }    
                }	
    
                return bootstapBPText; 
    
            }//getBPResult
    
            //function getBPResult() = return one of these 'bp-xs', 'bp-sm', 'bp-md', 'bp-lg', 'bp-xl'
    
            class BreakPointMediaNames {  
              constructor (names) {
                this.names = names;
              }
              contains(names) {
                return names.every((name) => this.names.indexOf(name) !== -1);
              }
            }
    
            const breakpointMediaArr = ['bp-xs', 'bp-sm', 'bp-md', 'bp-lg', 'bp-xl'];
            const breakpointMediaObj = new BreakPointMediaNames(breakpointMediaArr);  	
            //check if getBPResult() return value contain one of these breakpointMediaArr values
            //breakpointMediaContains = true/false 		
            const breakpointMediaContains =  breakpointMediaObj.contains([ getBPResult() ]);
    
            function getBreakpoint (bpQuery) {
    
                  let breakpointMedia;
    
                  function bpXSmall () {          
                    //console.log("breakpointType = 'bp-xs': bpXSmall.");   
                    return breakpointMedia = 'bpXSmall';
                  }
                  function bpSmall () {
                    //console.log("breakpointType = 'bp-sm': bpSmall.");  
                    return breakpointMedia = 'bpSmall';
                  }
                  function bpMedium () {
                    //console.log("breakpointType = 'bp-md': bpMedium.");  
                    return breakpointMedia = 'bpMedium';
                  }
                  function bpLarge () {
                    //console.log("breakpointType = 'bp-lg': bpLarge.");  
                    return breakpointMedia = 'bpLarge';
                  }
                  function bpXLarge () {
                    //console.log("breakpointType = 'bp-xl': bpXLarge.");
                    return breakpointMedia = 'bpXLarge';
                  }					  
    
                  var breakpointType = {    
                    'bp-xs': bpXSmall,
                    'bp-sm': bpSmall,
                    'bp-md': bpMedium,
                    'bp-lg': bpLarge,
                    'bp-xl': bpXLarge,    
                  };
    
                  return breakpointType[bpQuery]();
    
            }//getBreakpoint
    
            function runBreakpoint() {
                if( breakpointMediaContains ) {
                    //let getBPResultFunc = getBPResult();//store function retun value 
                    let breakpointMedia = getBreakpoint( getBPResult() );
                    breakpointMedia;//run 	

                    //site logo image
                    var brandLogo = $('.navbar-brand > img'), 
                    mobileLogo = brandLogo.data('mobile'), 
                    mainLogo = brandLogo.data('data');
                    if (breakpointMedia === 'bpXSmall' ) {
                        //run if is is XS breakpoint                        
                    } else {
                        //run in all Breakpoints except XS breakpoint
                    }                 
 
                } else {
                    //testing only
                    console.log("Not Runnig... Please check bootstrap 4 breakpoinrs and CSS.");					
                }
            }//runBreakpoint
    
            runBreakpoint();//invoke main func
    
            $(window).resize(function() {  

                runBreakpoint();//invoke main func when resize    
                
                //site logo image
                var brandLogo = $('.navbar-brand > img'), 
                    mobileLogo = brandLogo.data('mobileLogo'), 
                    mainLogo = brandLogo.data('main');      
                    
                    let breakpointMedia = getBreakpoint( getBPResult() );
                    //console.log("breakpointMedia", breakpointMedia);

                    if (breakpointMedia === 'bpXSmall' ) {
                        //run if is is XS breakpoint
                    } else {
                        //run in all Breakpoints except XS breakpoint
                    }    

            });//resize
    
    }); //function
