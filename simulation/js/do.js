var count=0;
var count2=0;
var titration=1;
var repeat=0;

var a,b,c,d,e=0;
var ido,fdo,bdo=0;
var op2,dol;
//to find normality sodium thosulphate			  
var dataSet1=[[10, 0, 9.6, 9.6],
			  [10, 0, 9.9, 9.9],
			  [10, 0, 10.1, 10.1],
			  [10, 0, 9.2, 9.2],
			  [10, 0, 10.5, 10.5],
			  [10, 0, 9.5, 9.5],
			  [10, 0, 10, 10],
			  [10, 0, 9.8, 9.8]];
//to find Dissolved oxygen level
var reading=[[0,5.9,5.9],
			 [0,6.7,6.7],
			 [0,3.6,3.6],
			 [0,6,6],
			 [0,8.2,8.2],
			 [0,4.5,4.5],
			 [0,6.4,6.4],
			 [0,5.7,5.7]];
var p=Math.floor(Math.random()*(8));
var op1=(0.025*dataSet1[p][0]/dataSet1[p][3]).toFixed(2);
var op2=(op1*reading[p][2]*8000/200).toFixed(2);

var ca;
var questions=["What is the normality of Potassium</br> Dichromate solution taken?","Solution colour turns ______ after adding starch.","Which of the following indicator </br>is used during the titration?","Normality of Sodium Thiosulphate solution obtained is __________"];
var options2=[["0.01N","0.02N","0.025N","0.05N"],//0.025N
			  ["Black","Yellow","Red","Blue"],//blue
			  ["Ferroin","Erichrome Black T","Starch","Phenolphthalein"],//starch
			  ["0.001N","0.005N","0.01N"]];

function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});
		
function navNext()
{
	for(temp=0;temp<=17;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

function showIncubatorKnob()
{
     if (document.getElementById('11-2').style.visibility=="hidden")
         document.getElementById('11-2').style.visibility="visible";
     else
         document.getElementById('11-2').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}



var i=0;
var text='Care should be taken to avoid the bubbles in the BOD bottle';
var speed=30;
function typeWriter()
{
	if(i<text.length)
	{
		document.getElementById("p2-1").innerHTML += text.charAt(i);
		i++;
		setTimeout(typeWriter,speed);
	}
}

var j=0;
var text2="Label the samples as Sample A and Sample B";
speed2=30;
function typeWriter2()
{
	if(j<text2.length)
	{
		document.getElementById("p1-1").innerHTML+=text2.charAt(j);
		j++;
		setTimeout(typeWriter2,speed2);
	}
}


	//rotating pointer clockwise upto HRN value
	var looper;
    var degrees = 0;
    var cnt=0;
	var degrees;
	var i=0,k=0;
    function rotateAnimation(el,speed)
	{
	    var elem = document.getElementById(el);
	    if(navigator.userAgent.match("Chrome"))
		{
		     elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("Firefox"))
		{
		     elem.style.MozTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("MSIE"))
		{
		     elem.style.msTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("Opera"))
		{
		     elem.style.OTransform = "rotate("+degrees+"deg)";
	    } 
		else 
		{
		     elem.style.transform = "rotate("+degrees+"deg)";
	    }
	     looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	   
		if(cnt<5)
		{
			degrees++;
		}
		else 
		{
			takeOutBODfromIncubator();
		}
		i=degrees/360;
		var t=5;
		if(degrees%360==0)
		{
			cnt++;
			t = t - i;
			document.getElementById("p11-3").style="font-weight:bold;position:absolute; left:475px; top:335px; font-size:16px; color:red;";  
			document.getElementById("p11-3").innerHTML="After "+t+" days";
			if(t<=0)
				document.getElementById("p11-3").innerHTML="";
		}
}

function magic()
{
	if(simsubscreennum==1)
	{
		$("#heading1").fadeIn(500);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},700);
	}
	
	if(simsubscreennum==2)
	{
		$("#22-2").fadeIn(1500);
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:300px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById("22-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("22-2").onclick="";
				document.getElementById("22-2").style.animation="moveFunnel 2s forwards";
				setTimeout(function()
				{
					document.getElementById("22-3").style.visibility="visible";
					document.getElementById("22-3Cap").style.visibility="visible";
					setTimeout(function()
					{
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:559px; top:240px; height:30px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
						document.getElementById("arrow1").style.msTransform="rotate(270deg)";
						document.getElementById("arrow1").style.transform="rotate(270deg)";
						document.getElementById("22-3Cap").onclick=function()
						{
							myStopFunction();
							document.getElementById("22-3Cap").onclick="";
							document.getElementById("22-3Cap").style.animation="openNa2SO3Cap 2s forwards";
							setTimeout(function()
							{
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:350px; height:30px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
								document.getElementById("arrow1").style.msTransform="rotate(180deg)";
								document.getElementById("arrow1").style.transform="rotate(180deg)";
								document.getElementById("22-3").onclick=function()
								{
									myStopFunction();
									document.getElementById("22-3").onclick="";
									document.getElementById("22-32").style.visibility="visible";
									document.getElementById("22-3").style.visibility="hidden";
									document.getElementById("22-32").style.animation="moveNa2SO3Bottle 1.5s forwards";
									setTimeout(function()
									{
										document.getElementById("22-32").style="position:absolute; left:375px; top:32px; animation: rotateNa2SO3Bottle 1s forwards;";
										setTimeout(function()
										{
											document.getElementById("22-2samp").style.visibility="visible";
											document.getElementById("22-2samp").style.animation="sampFromFunnelUpDown 2s 7 ";
											setTimeout(function()
											{
												document.getElementById("22-2samp2").style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById("22-2samp3").style.animation="whiteUp 5s forwards";
													setTimeout(function()
													{
														document.getElementById("22-2samp3").style.visibility="hidden";
														document.getElementById("22-2samp4").style.animation="sampFromFunnelUp 5s forwards";
														setTimeout(function()
														{
															document.getElementById("22-2samp2").style.visibility="hidden";
															document.getElementById("22-2samp").style.animation="sampFromFunnelDown2 1.5s forwards ";
															setTimeout(function()
															{
																document.getElementById("22-2samp").style.visibility="hidden";
																document.getElementById("22-2samp4").style="position:absolute; left:240px; top:185px;";
																document.getElementById("22-2samp4").style.animation="sampFromFunnelUp2 1.5s forwards";
																document.getElementById("22-32").style.animation="rotateNa2SO3Bottle2 1.5s forwards";
																setTimeout(function()
																{
																	document.getElementById("22-32").style.animation="moveNa2SO3BottleBack 1.5s forwards";
																	setTimeout(function()
																	{
																		document.getElementById("22-32").style.visibility="hidden";
																		document.getElementById("22-3").style.visibility="visible";
																		
																		myInt=setInterval(function(){animatearrow();},500);
																		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:644px; top:320px; height:30px; z-index:10;";
																		document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.transform="rotate(270deg)";
																		document.getElementById("22-3Cap").onclick=function()
																		{
																			myStopFunction();
																			document.getElementById("22-3Cap").onclick="";
																			document.getElementById("22-3Cap").style.animation="closeNa2SO3Cap 2s forwards";
																			setTimeout(function()
																			{
																				document.getElementById("22-3Cap").style.visibility="hidden";
																				document.getElementById("22-3").style.visibility="hidden";
																				
																				myInt=setInterval(function(){animatearrow();},500);
																				document.getElementById("arrow1").style="visibility:visible; position:absolute; left:420px; top:155px; height:30px; z-index:10;";
																				document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.msTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.transform="rotate(0deg)";
																				document.getElementById("22-2").onclick=function()
																				{
																					myStopFunction();
																					document.getElementById("22-2").onclick="";
																					document.getElementById("22-2").style.animation="moveFunnelBack 2s forwards";
																					setTimeout(function()
																					{
																						$("#22-2").fadeOut(800);
																						document.getElementById("nextButton").style.visibility="visible";
																					},2100);
																				}
																			},2100);
																		}
																	},1600);
																},1000);
															},800);
														},5000);
													},4500);
												},800);
											},1000);
										},1100);
									},1550);
								}
							},2100);
						}
					},250);
				},2100);
			}
		},1500);
	}
	
	if(simsubscreennum==3)
	{
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:420px; top:235px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			document.getElementById("33-1cap").onclick=function()
			{
				myStopFunction();
				document.getElementById("33-1cap").onclick="";	
				document.getElementById("33-1cap").style.visibility="hidden";
				document.getElementById("33-1cap2").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("33-1cap2").style.animation="openbodCap3 1.2s forwards";
				
					setTimeout(function()
					{
						document.getElementById("33-1cap2").style.visibility="hidden";
						document.getElementById("33-1cap3").style.visibility="visible";
					
						document.getElementById("3-3").style.visibility="visible";
						can=3;
						fillPotassiumDichromate();
					},1250);
				},100);
			}
		},150);	
	}

	
	if(simsubscreennum==4)
	{
		document.getElementById("33name").style.visibility="hidden";
		document.getElementById("33-1").style.visibility="hidden";
		document.getElementById("33-1ab").style.visibility="hidden";
		document.getElementById("33-1a").style.visibility="hidden";
		document.getElementById("33-1samp").style.visibility="hidden";
		document.getElementById("33-1cap").style.visibility="hidden";
		tn=4;
		$("#"+tn+"4Up").fadeIn(1500);
		setTimeout(function()
		{
			document.getElementById(tn+"4button").style.visibility="visible";
	
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 280px; top: 232.5px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(225deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(225deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(225deg)";
			document.getElementById(tn+"4button").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"4button").onclick="";	
				document.getElementById(tn+"4Up").style.visibility="hidden";
				document.getElementById(tn+"4button").style.visibility="hidden";
				document.getElementById(tn+"4Down").style.visibility="visible";
			    setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:505px; top:260px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(270deg)";
					document.getElementById(tn+"2Cap").onclick=function()
					{
						myStopFunction();
						document.getElementById(tn+"2Cap").onclick="";	
						document.getElementById(tn+"2Cap").style.visibility="hidden";
						document.getElementById(tn+"2Cap2").style.visibility="visible";
						document.getElementById(tn+"2Cap2").style.animation="openBottleCap4 1.25s forwards";
				setTimeout(function()
				{
					document.getElementById(tn+"2Cap").style="position:absolute; visibility:visible; left:550px; top:350px; ";
					document.getElementById(tn+"2Cap2").style.visibility="hidden";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 240px; top: 320px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById(tn+"4Down").onclick=function()
					{
						myStopFunction();
						document.getElementById(tn+"4Down").onclick="";
						document.getElementById(tn+"4Down").style.animation="movePipette3-1 2s forwards";
						setTimeout(function()
						{
							// document.getElementById(tn+"3").style.animation="aiasDown 1s forwards";
							document.getElementById(tn+"4Up2").style.visibility="visible";
							document.getElementById(tn+"4Down").style.visibility="hidden";
							setTimeout(function()
							{
								document.getElementById(tn+"4Up2").style.animation="movePipette2 2s forwards";
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:602px; top:340px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById(tn+"2Cap").onclick=function()
									{
										myStopFunction();
										document.getElementById(tn+"2Cap").onclick="";	
										document.getElementById(tn+"2Cap").style.visibility="hidden";
										document.getElementById(tn+"2Cap2").style="left:520px; top:290px;; position:absolute; visibility:visible";
										document.getElementById(tn+"2Cap2").style.animation="closeBottleCap4 1.25s forwards";
									
								setTimeout(function()
								{
									document.getElementById(tn+"2Cap2").style.visibility="hidden";
									document.getElementById(tn+"2Cap").style="visibility:visible; position:absolute; left:449px; top:267px;";
									
									setTimeout(function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top:340px; height: 40px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
														// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById(tn+"4Up2").onclick=function()
													{
														myStopFunction();
														document.getElementById(tn+"4Up2").onclick="";	
														document.getElementById(tn+"4Up2").style="position:absolute; left: 256px; top: 200px;";
														document.getElementById(tn+"4Up2").style.animation="movePipette3 2s forwards";
														
														setTimeout(function()
														{
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:91px; top:150px; height: 35px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(240deg)"; 
															// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(240deg)"; 
															// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(240deg)";
															document.getElementById(tn+"4Up2").onclick=function()
															{
																myStopFunction();
																document.getElementById(tn+"4Up2").onclick="";
																document.getElementById(tn+"4Up2").style.visibility="hidden";
																document.getElementById(tn+"4Down2").style.visibility="visible";
																document.getElementById(tn+"1samp2").style.visibility="visible";
																setTimeout(function()
																{
																	document.getElementById(tn+"1samp2").style.animation="bufferDown 2.5s forwards";
																	document.getElementById(tn+"drop4-3").style.visibility="visible";
																	document.getElementById(tn+"drop4-3").style.animation="dropNHBuffer 0.5s 4";
																	document.getElementById(tn+"1samp1").style.animation="moveSolutionUp1 3s forwards";
																	setTimeout(function()
																	{
																		document.getElementById(tn+"1samp2").style.visibility="hidden";
																		document.getElementById(tn+"drop4-3").style.visibility="hidden";
																		setTimeout(function()
																		{
																			document.getElementById(tn+"4Down2").style.animation="movePipetteBack 2s forwards";
																			setTimeout(function()
																			{
																				$("#"+tn+"4Down2").hide(1000);
																				setTimeout(function()
																				{
																					addKIpowder();
																				},1200);
																			},2000);
																		},200);
																	},2000);
																},100);
															}							
														},2500);
													}
												},100);
									},1200);
								  }
								},2000);
							},500);
						},2500);
					  }
			
				  },1300);	
				}
			  },700);
			}
		},300);
	
	  },1300);
	}
	
	if(simsubscreennum==5)
	{
		document.getElementById("45").style.visibility="hidden";
		document.getElementById("4ki1").style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById("55p9-0a").style.visibility="visible";
			document.getElementById("55p9-1").style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(300deg)";
			document.getElementById("55-1knob").onclick=function()
			{
				myStopFunction();
				document.getElementById("55-1knob").onclick="";	
				document.getElementById("55-1knob").style.visibility="hidden";
				document.getElementById("55-1hand").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("55p9-0a").style.visibility="hidden";
					document.getElementById("55-1hand").style.visibility="hidden";
					document.getElementById("55-1hand2").style.visibility="visible";
					document.getElementById("55-1stopper").style="position:absolute; left:153px; top:309.75px;";
					setTimeout(function()
					{
						document.getElementById("55drop9-1").style.visibility="visible";
						document.getElementById("55drop9-1").style.animation="drop2 0.75s 10";
						document.getElementById("55-1a").style.animation="Na2S2O3fromBurette1 10s forwards";
						setTimeout(function()
						{
							document.getElementById("55drop9-2").style.visibility="visible";
							document.getElementById("55drop9-2").style.animation="drop2 0.75s 10";
							setTimeout(function()
							{
								document.getElementById("55-3").style.animation="colourChange5 8s forwards";

								setTimeout(function()
								{
									document.getElementById("55p9-0b").style.visibility="visible";
									setTimeout(function()
									{
										document.getElementById("55drop9-1").style.visibility="hidden";
										document.getElementById("55drop9-2").style.visibility="hidden";
										document.getElementById("55-3").style.backgroundColor="#FFFF99";
										document.getElementById("55-1hand").style.visibility="visible";
										document.getElementById("55-1hand2").style.visibility="hidden";
										document.getElementById("55p9-0b").style.visibility="hidden";
										document.getElementById("55-1stopper").style="position:absolute; left:150px; top:307.75px; ";
										setTimeout(function()
										{
											document.getElementById("55-1knob").style.visibility="visible";
											document.getElementById("55-6a").style.visibility="visible";
											document.getElementById("55-6b").style.visibility="visible";
											document.getElementById("55-1hand").style.visibility="hidden";
											setTimeout(function()
											{
												document.getElementById("55p9-2").style.visibility="visible";
												document.getElementById("55-6a").style.visibility="visible";
												document.getElementById("55-6b").style.visibility="visible";
												document.getElementById("55-6b2").style.visibility="visible";
												
												setTimeout(function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:472px; top:290px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
														// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
														// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(270deg)";
													document.getElementById("55-6a").onclick=function()
													{
														myStopFunction();
														document.getElementById("55-6a").onclick="";
														document.getElementById("55-6a").style.animation="openStarchBottle 1.5s forwards";
														document.getElementById("55p9-2").style.visibility="hidden";
														setTimeout(function()
														{
															document.getElementById("55-6dropper1").style.visibility="visible";
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:562px; top:190px; height: 35px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
															// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(270deg)";
															document.getElementById("55-6dropper1").onclick=function()
															{
																myStopFunction();
																document.getElementById("55-6dropper1").onclick="";
																document.getElementById("55-6dropper1").style.animation="dipdropper 1.5s forwards";
																setTimeout(function()
																{
																	document.getElementById("55-6dropper1").style.visibility="hidden";
																	document.getElementById("55-6dropper2").style.visibility="visible";
																	setTimeout(function()
																	{
																		document.getElementById("55-6dropper2").style.animation="dipdropper2 1.5s forwards";
																		setTimeout(function()
																		{
																			document.getElementById("55-6dropper2").style="position:absolute; left:220px; top:240px;";
																			document.getElementById("55-6dropper2").style.animation="rotateDropper 1.5s forwards";
																			setTimeout(function()
																			{
																				document.getElementById("55-6dropper2").style.transform="rotate(45deg)";
																				document.getElementById("55-6dropper2").style.animation="moveDropper 1s forwards";
																				setTimeout(function()
																				{
																					document.getElementById("55drop9-3").style.visibility="visible";
																					document.getElementById("55drop9-3").style.animation="drop3 1s 6";
																					setTimeout(function()
																					{
																						document.getElementById("55-3").style.animation="colourChange6 4s forwards";
																					//document.getElementById("55-3").style.backgroundImage="linear-gradient( #0000A0,#FFFF99,#FFFF99)";
																						setTimeout(function()
																						{
																							// document.getElementById("55-3").style.backgroundImage="linear-gradient( #0000A0,#0000A0,#FFFF99)";
																							setTimeout(function()
																							{
																								document.getElementById("55drop9-3").style.visibility="hidden";
																								// document.getElementById("55-3").style.backgroundImage="linear-gradient( #0000A0,#0000A0)";
																								setTimeout(function()
																								{
																									document.getElementById("55-6dropper2").style.visibility="hidden";
																									setTimeout(function()
																									{
																										document.getElementById("55-6a").style.animation="closeStarchBottle 1.5s forwards";
																										setTimeout(function()
																										{
																											document.getElementById("55-6a").style.visibility="hidden";
																											document.getElementById("55-6b").style.visibility="hidden";
																											document.getElementById("55-6b2").style.visibility="hidden";
																											document.getElementById("55-3").style.backgroundColor="#0000A0";
																											blueToColourlessTitrarion2();
																										},1550);
																									},250);
																								},1250);
																							},2000);
																						},1000);
																					},1000);
																				},1050);
																			},1500);
																		},1500);
																	},250);
																},1600);
															}
														},1500);
													}				
												},1000);
											},500);
										},750);//from here
									},4000);
								},2500);
							},1000);
						},250);
					},100);
				},250);
			}
		},500);	}
	
	if(simsubscreennum==6)
	{
		document.getElementById("55-3").style.visibility="hidden";
		document.getElementById("55-3b").style.visibility="hidden";
		document.getElementById("55p9-1").style.visibility="hidden";
		document.getElementById("55p9-3").style.visibility="hidden";
		document.getElementById("1").innerHTML=dataSet1[p][0];
		document.getElementById("2").innerHTML=dataSet1[p][1];
		document.getElementById("3").innerHTML=dataSet1[p][2];
		document.getElementById("4").innerHTML=dataSet1[p][3];//must be volume of na2s2o3 burrete reading
		
		// op1=(0.025*dataSet1[p][0]/dataSet1[p][3]).toFixed(3);
		op1=parseFloat(op1);
		
		document.getElementById("norm").onclick=function()
		{
			document.getElementById("eqn1").style.visibility="visible";
		}
		
		document.getElementById("check1").onclick=function()
		{
			document.getElementById("eqn1").style.visibility="hidden";
			if(!document.getElementById("output1").value  || !document.getElementById("output1").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				n = document.getElementById("output1").value;
				
				if(Math.round(n) == Math.round(op1))
				{
					document.getElementById("check1").style.visibility="hidden";
					document.getElementById("norm").style.visibility="hidden";
					document.getElementById("r1").style.visibility="visible";
					document.getElementById("nextButton").style.visibility="visible";
					document.getElementById("result1").style.visibility="hidden";
					document.getElementById("w1").style.visibility="hidden";
					document.getElementById("output1").disabled="true";
					document.getElementById("output1").style="border:none; background-color:white; colour:black;";
				}
				else
				{
					document.getElementById("result1").style.visibility="visible";
					document.getElementById("w1").style.visibility="visible";
				}
			}	
			document.getElementById("result1").onclick=function()
			{
				document.getElementById("eqn1").style.visibility="hidden";
				document.getElementById("display1").style.visibility="visible";
				document.getElementById("display1").innerHTML="Normality of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> = "+ op1 +" N";
				document.getElementById("check1").style.visibility="hidden";
				document.getElementById("result1").style.visibility="hidden";
				document.getElementById("w1").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
				document.getElementById("norm").style.visibility="hidden";
				document.getElementById("output1").disabled="true";
				document.getElementById("output1").style="border:none; background-color:white; colour:black;";
			}
		}
	}
	
	if(simsubscreennum==7)
	{
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("w1").style.visibility="hidden";
		document.getElementById("display1").style.visibility="hidden";
		$("#heading5").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	if(simsubscreennum==8)
	{
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:210px; top:230px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			document.getElementById("1-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("1-2").onclick="";
				document.getElementById("1-2").style.visibility="hidden";
				document.getElementById("1-11").style.visibility="visible";
				document.getElementById("1-11").style.animation="openBODBottleCap 1.5s forwards";
				setTimeout(function()
				{
					document.getElementById("1-11").style.visibility="hidden";
					document.getElementById("1-1").style.visibility="visible";
					setTimeout(function()
					{
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:470px; top:299px; height: 35px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
						document.getElementById("1-8").onclick=function()
						{
							myStopFunction();
							document.getElementById("1-8").onclick="";
							document.getElementById("1-8").style.visibility="hidden";
							document.getElementById("1-10").style.visibility="visible";
							document.getElementById("1-10").style.animation="openBottleCap 1.5s forwards";
							setTimeout(function()
							{
								document.getElementById("1-9").style.visibility="visible";
								document.getElementById("1-10").style.visibility="hidden";
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:440px; top:390px; height: 35px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								document.getElementById("1-7").onclick=function()
								{
									myStopFunction();
									document.getElementById("1-7").onclick="";
									document.getElementById("1-7").style.visibility="hidden";
									document.getElementById("1-6").style.visibility="visible";
									document.getElementById("1-6").style.animation="FillWithWater 1.75s forwards";
									setTimeout(function()
									{
										document.getElementById("1-6").style="position:absolute; left:210px; top:130px;";
										document.getElementById("1-6").style.transformOrigin="50% 50%";
										document.getElementById("1-6").style.animation="rotcan1 1.5s forwards";
										setTimeout(function()
										{
											document.getElementById("1-6").style.visibility="hidden";
											document.getElementById("1-5").style.visibility="visible";
											setTimeout(function()
											{
												document.getElementById("1-12").style.visibility="visible";
												document.getElementById("1-12").style.animation="fillWater 2.5s forwards";
												setTimeout(function()
												{
													document.getElementById("1-5").style.animation="rotatet3 0.75s forwards";
													setTimeout(function()
													{
														document.getElementById("1-4").style.visibility="visible";
														document.getElementById("1-5").style.visibility="hidden";
														setTimeout(function()
														{
															document.getElementById("1-4").style.animation="moveBackt4 1.5s forwards";
															setTimeout(function()
															{
																document.getElementById("1-4").style.visibility="hidden";
																document.getElementById("1-13").style.visibility="visible";
																
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:100px; top:370px; height: 35px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(270deg)";
																document.getElementById("1-1").onclick=function()
																{
																	myStopFunction();
																	document.getElementById("1-1").onclick="";
																	document.getElementById("1-1").style.visibility="hidden";
																	document.getElementById("1-11").style.visibility="visible";
																	document.getElementById("1-11").style.animation="closeBODBottleCap 1.05s forwards";
																	setTimeout(function()
																	{
																		document.getElementById("1-11").style.visibility="hidden";
																		document.getElementById("1-2").style.visibility="visible";
																		myInt = setInterval(function(){ animatearrow(); }, 500);
																		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:630px; top:370px; height: 35px; z-index: 10;";
																		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																		// Code for IE9
																		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																		// Standard syntax
																		document.getElementById("arrow1").style.transform = "rotate(270deg)";
																		document.getElementById("1-9").onclick=function()
																		{
																			myStopFunction();
																			document.getElementById("1-9").onclick="";
																			document.getElementById("1-9").style.visibility="hidden";
																			document.getElementById("1-10").style.visibility="visible";
																			document.getElementById("1-10").style.animation="closeBottleCap 1.5s forwards";
																			setTimeout(function()
																			{
																				document.getElementById("1-10").style.visibility="hidden";
																				document.getElementById("1-8").style.visibility="visible";
																				//document.getElementById("nextButton").style.visibility="visible";
																				validateAnswer(2,2,"250px","100px");
																			},1500);
																		}
																	},950);
																}
															},1500);
														},250);
													},750);
												},2500);
											},200);
										},1500);
									},1750);
								}
							},1500);
						}
					},200);
		
				},1500);
			}
		},500);
	}  
	if(simsubscreennum==9)
	{
		document.getElementById("1-1").style.visibility="hidden";		
		document.getElementById("1-2").style.visibility="hidden";		
		document.getElementById("1-12").style.visibility="hidden";		
		document.getElementById("1-8").style.visibility="hidden";		
		document.getElementById("1-13").style.visibility="hidden";		
			
		$("#2-4Up").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("2-4button").style.visibility="visible";
		// $("#p2-1").fadeIn(6500);
		
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 280px; top: 232.5px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(225deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(225deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(225deg)";
			document.getElementById("2-4button").onclick=function()
			{
				myStopFunction();
				document.getElementById("2-4button").onclick="";	
				// document.getElementById("p2-1").style.visibility="hidden";
				document.getElementById("2-4Up").style.visibility="hidden";
				document.getElementById("2-4button").style.visibility="hidden";
				document.getElementById("2-4Down").style.visibility="visible";
			
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 240px; top: 320px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById("2-4Down").onclick=function()
					{
						myStopFunction();
						document.getElementById("2-4Down").onclick="";
						document.getElementById("2-4Down").style.animation="movePipette1 2s forwards";
						setTimeout(function()
						{
							document.getElementById("2-3").style.animation="mnso4Down 1s forwards";
							document.getElementById("2-3_1").style.animation="mnso4Down 1s forwards";
							document.getElementById("2-4Up2").style.visibility="visible";
							document.getElementById("2-4Down").style.visibility="hidden";
							setTimeout(function()
							{
								document.getElementById("2-4Up2").style.animation="movePipette2 2s forwards";
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById("2-1cap").onclick=function()
									{
										myStopFunction();
										document.getElementById("2-1cap").onclick="";	
										document.getElementById("2-1cap").style.visibility="hidden";
										document.getElementById("2-1cap2").style.visibility="visible";
										
	
		setTimeout(function()
		{
			document.getElementById("2-1cap2").style.animation="openbodCap 1.2s forwards";

			setTimeout(function()
			{
				document.getElementById("2-1cap2").style.visibility="hidden";
				document.getElementById("2-1cap3").style.visibility="visible";
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top:340px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById("2-4Up2").onclick=function()
					{
						myStopFunction();
						document.getElementById("2-4Up2").onclick="";	
						document.getElementById("2-4Up2").style="position:absolute; left: 256px; top: 200px;";
						document.getElementById("2-4Up2").style.animation="movePipette3 2s forwards";
						setTimeout(function()
						{
							document.getElementById("p2-1").style.visibility="visible";
							typeWriter();
						},1900);
						setTimeout(function()
						{
							document.getElementById("2-4Up2").style.visibility="hidden";
							document.getElementById("2-4Down").style="position:absolute; left: 70px; top: 130px;";
							document.getElementById("2-4Down").style.visibility="visible";
							//typeWriter animation
							
							setTimeout(function()
							{
								document.getElementById("p2-1").style.visibility="hidden";
								document.getElementById("2-4Down").style.animation="movePipetteBack 2s forwards";
								setTimeout(function()
								{
									$("#2-4Down").hide(1000);
									
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(270deg)";
										document.getElementById("2-1cap3").onclick=function()
										{
											myStopFunction();
											document.getElementById("2-1cap3").onclick="";	
											document.getElementById("2-1cap3").style.visibility="hidden";
											document.getElementById("2-1cap22").style.visibility="visible";										
											document.getElementById("2-1cap22").style.animation="closebodCap 1.5s forwards";
											setTimeout(function()
											{
												document.getElementById("2-1cap22").style.visibility="hidden";
												document.getElementById("2-1cap").style.visibility="visible";
												document.getElementById("nextButton").style.visibility="visible";
											},1200);
										}
									
								},2100);
							},2200);
							
						},2400);
					}
				},100);
			},1250);
		},100);									
										
									}
								},2200);
							},500);
						},2500);
					}
				},700);
			}
		},300);
	
	},1330);
	}
	
	if(simsubscreennum==10)
	{
		document.getElementById("2-1cap").style.visibility="hidden";
		refresh();
		$("#3-4Up").fadeIn(1500);
		setTimeout(function()
		{
			document.getElementById("3-4button").style.visibility="visible";
		// $("#p2-1").fadeIn(6500);
		
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 280px; top: 232.5px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(225deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(225deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(225deg)";
			document.getElementById("3-4button").onclick=function()
			{
				myStopFunction();
				document.getElementById("3-4button").onclick="";	
				document.getElementById("3-4Up").style.visibility="hidden";
				document.getElementById("3-4button").style.visibility="hidden";
				document.getElementById("3-4Down").style.visibility="visible";
			    setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:505px; top:260px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(270deg)";
					document.getElementById("3-2Cap").onclick=function()
					{
						myStopFunction();
						document.getElementById("3-2Cap").onclick="";	
						document.getElementById("3-2Cap").style.visibility="hidden";
						document.getElementById("3-2Cap2").style.visibility="visible";
						document.getElementById("3-2Cap2").style.animation="openBottleCap3 1.25s forwards";
				setTimeout(function()
				{
					document.getElementById("3-2Cap").style="position:absolute; visibility:visible; left:540px; top:335px; width:25px;";
					document.getElementById("3-2Cap2").style.visibility="hidden";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 240px; top: 320px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById("3-4Down").onclick=function()
					{
						myStopFunction();
						document.getElementById("3-4Down").onclick="";
						document.getElementById("3-4Down").style.animation="movePipette3-1 2s forwards";
						setTimeout(function()
						{
							// document.getElementById("3-3").style.animation="aiasDown 1s forwards";
							document.getElementById("3-4Up2").style.visibility="visible";
							document.getElementById("3-4Down").style.visibility="hidden";
							setTimeout(function()
							{
								document.getElementById("3-4Up2").style.animation="movePipette2 2s forwards";
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:580px; top:330px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById("3-2Cap").onclick=function()
									{
										myStopFunction();
										document.getElementById("3-2Cap").onclick="";	
										document.getElementById("3-2Cap").style.visibility="hidden";
										document.getElementById("3-2Cap2").style="left:520px; top:290px;; position:absolute; visibility:visible";
										document.getElementById("3-2Cap2").style.animation="closeBottleCap3 1.25s forwards";
									
								setTimeout(function()
								{
									document.getElementById("3-2Cap2").style.visibility="hidden";
									document.getElementById("3-2Cap").style="visibility:visible; position:absolute; left:460px; top:253px; width:25px;";
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById("3-1cap").onclick=function()
									{
										myStopFunction();
										document.getElementById("3-1cap").onclick="";	
										
										setTimeout(function()
										{
											document.getElementById("3-1cap").style.visibility="hidden";
											document.getElementById("3-1cap2").style.visibility="visible";
											document.getElementById("3-1cap2").style.animation="openbodCap 1.2s forwards";

											setTimeout(function()
											{
												document.getElementById("3-1cap2").style.visibility="hidden";
												document.getElementById("3-1cap3").style.visibility="visible";
												setTimeout(function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top:340px; height: 40px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
														// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById("3-4Up2").onclick=function()
													{
														myStopFunction();
														document.getElementById("3-4Up2").onclick="";	
														document.getElementById("3-4Up2").style="position:absolute; left: 256px; top: 200px;";
														document.getElementById("3-4Up2").style.animation="movePipette3 2s forwards";
														setTimeout(function()
														{
															$("#p3-1").fadeIn(1800);
														},1800);
														setTimeout(function()
														{
															document.getElementById("3-4Up2").style.visibility="hidden";
															document.getElementById("3-4Down").style="position:absolute; left: 70px; top: 130px;";
															document.getElementById("3-4Down").style.visibility="visible";
															setTimeout(function()
															{    
															// colour change
															   document.getElementById("3-1samp").style.animation="colourChange1 4s forwards";
															   setTimeout(function()
															   {
															    document.getElementById("3-1samp").style.backgroundImage="linear-gradient(#FFFF99,#CFB53B)";
																
																document.getElementById("p3-1").style.visibility="hidden";
																document.getElementById("3-4Down").style.animation="movePipetteBack 2s forwards";
																setTimeout(function()
																{
																	$("#3-4Down").hide(1000);
									
																	myInt = setInterval(function(){ animatearrow(); }, 500);
																	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
																	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																	// Code for IE9
																	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																	// Standard syntax
																	document.getElementById("arrow1").style.transform = "rotate(270deg)";
																	document.getElementById("3-1cap3").onclick=function()
																	{
																		myStopFunction();
																		document.getElementById("3-1cap3").onclick="";	
																		document.getElementById("3-1cap3").style.visibility="hidden";
																		document.getElementById("3-1cap22").style.visibility="visible";
																		document.getElementById("3-1cap22").style.animation="closebodCap 1.5s forwards";
																		setTimeout(function()
																		{
																			document.getElementById("3-1cap22").style.visibility="hidden";
																			document.getElementById("3-1cap").style.visibility="visible";
																			
																			// document.getElementById("3-1samp").style.animation="settleDownaias 7s forwards";
																			// setTimeout(function()
																			// {
																				document.getElementById("nextButton").style.visibility="visible";
																			// },7100);
																		},1200);
																	}
																},2100);
															 },3200);
															},1200);
														},2500);
													}
												},100);
											
										    },1250);
										  },100);	
										}
									},1200);
								  }
								  
								},2000);
							},500);
						},2500);
					  }
			
				  },1300);	
				}
			  },700);
			}
		},300);
	
	  },1300);
	}
	
	if(simsubscreennum==11)
	{
		document.getElementById("3-1cap").style.visibility="hidden";
		document.getElementById("3-2Cap").style.visibility="hidden";
		setTimeout(function()
		{
			myInt=setInterval(function(){ animatearrow(); }, 500);
			document.getElementById("arrow1").style="position:absolute; left:430px; top:390px; height:40px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
			document.getElementById("arrow1").style.msTransform="rotate(0deg)";
			document.getElementById("arrow1").style.transform="rotate(0deg)";
			document.getElementById("4-1").onclick=function()
			{
				step4();
			}
			document.getElementById("4-1cap").onclick=function()
			{
				step4();
			}
		},500);
	}
	
	if(simsubscreennum==12)
	{
		document.getElementById("4-1").style.visibility="hidden";
		document.getElementById("4-2").style.visibility="hidden";
		document.getElementById("4-1cap").style.visibility="hidden";
		document.getElementById("4-1samp").style.visibility="hidden";
		document.getElementById("4-1samp4").style.visibility="hidden";
		document.getElementById("4-1samp3").style.visibility="hidden";
		document.getElementById("4blank").style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:507.5px; top:245px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById("5-2cap").onclick=function()
		{
			myStopFunction();
			document.getElementById("5-2cap").onclick="";
			document.getElementById("5-2cap").style.animation="openH2SO4Cap 1.25s forwards";
			setTimeout(function()
			{
				document.getElementById("p5-1").style.visibility="visible";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:295px; top:190px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(220deg)"; 
		     // Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(220deg)"; 
		     // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(220deg)";
				document.getElementById("5-4").onclick=function()
				{
					myStopFunction();
					document.getElementById("5-4").onclick="";
					document.getElementById("5-4").style.visibility="hidden";
					document.getElementById("p5-1").style.visibility="hidden";
					document.getElementById("5-41").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("5-41").style.animation="moveGP1 1.5s forwards";
						setTimeout(function()
						{
							$("#5-5bulb").fadeIn(1000);
							$("#5-5up").fadeIn(1000);
							$("#5-5down").fadeIn(1000);
							setTimeout(function()
							{
								document.getElementById("p5-2").style.visibility="visible";
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="position:absolute; visibility:visible; left:321px; top:300px; height:20px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								document.getElementById("5-5up").onclick=function()
								{
									myStopFunction();
									document.getElementById("5-5up").onclick="";
									document.getElementById("p5-2").style.visibility="hidden";
									$("#5-5bulb").fadeOut(1500);
									$("#5-5up").fadeOut(1500);
									$("#5-5down").fadeOut(1500);
									document.getElementById("5-41sw").style.visibility="visible";
									document.getElementById("5-41sw").style.animation="h2so4Up 1.5s forwards";
									document.getElementById("5-3").style.animation="h2so4Down 1.5s forwards";
									document.getElementById("5-3").style.animation="h2so4Down 1.5s forwards";
									setTimeout(function()
									{
										document.getElementById("5-41sw").style.visibility="hidden";
										document.getElementById("5-41").style.visibility="hidden";
										document.getElementById("5-42").style.visibility="visible";
									     
										 myInt = setInterval(function(){ animatearrow(); }, 500);
										 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
										 document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			                            // Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(270deg)";
										document.getElementById("5-1cap").onclick=function()
										{  
										    myStopFunction();
											document.getElementById("5-1cap").onclick="";	
											document.getElementById("5-1cap").style.visibility="hidden";
											document.getElementById("5-1cap2").style.visibility="visible";
											setTimeout(function()
											{ 
											    document.getElementById("5-1cap2").style.animation="openbodCap 1.2s forwards";
												
												setTimeout(function()
												{
													document.getElementById("5-1cap2").style.visibility="hidden";
													document.getElementById("5-1cap3").style.visibility="visible";
													
													 myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:450px; top:230px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
													// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById("5-42").onclick=function()
													{  
														myStopFunction();
														document.getElementById("5-42").onclick="";
														document.getElementById("5-42").style.animation="moveGP3 3s forwards";
														setTimeout(function()
														{   
														    document.getElementById("5-2cap").style.animation="closeH2SO4Cap 1.25s forwards";
															setTimeout(function()
															{
															$("#5-5bulb").fadeIn(1500);
															$("#5-5up").fadeIn(1500);
															$("#5-5down").fadeIn(1500);
															document.getElementById("p5-2").style="visibility:visible; position:absolute; left:350px; top:100px; color:red; font-size:14px;";
															document.getElementById("p5-2").innerHTML="Press the down arrow on the bulb </br></br>to release the liquid into the BOD bottle";
															setTimeout(function()
															{
																document.getElementById("p5-2").style.visibility="visible";
																myInt=setInterval(function(){animatearrow();},500);
																document.getElementById("arrow1").style="position:absolute; visibility:visible; left:358px; top:330px; height:20px; z-index:10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(90deg)";
																document.getElementById("5-5down").onclick=function()
																{
																	myStopFunction();
																	document.getElementById("5-5down").onclick="";
																	document.getElementById("p5-2").style.visibility="hidden";
																	$("#5-5bulb").fadeOut(1000);
																	$("#5-5up").fadeOut(1000);
																	$("#5-5down").fadeOut(1000);
																	document.getElementById("5-41").style="visibility:visible; position:absolute; left:75px; top:100px;";
																	
																	document.getElementById("5-1samp1").style.animation="colourChange1 1.5s forwards";
																	// document.getElementById("5-1samp2").style.animation="precipitateUp1 1.5s forwards";
																	$("#5-1samp3").fadeIn(1000);
																	document.getElementById("5-42").style.visibility="hidden";
																	setTimeout(function()
																	{
																		document.getElementById("5-41").style.animation="movebackGP 1.5s forwards";
																		setTimeout(function()
																		{
																			
																			
																			$("#5-41").fadeOut(1200);
																			myInt = setInterval(function(){ animatearrow(); }, 500);
																			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
																			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																			// Code for IE9
																			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																			// Standard syntax
																			document.getElementById("arrow1").style.transform = "rotate(270deg)";
																			document.getElementById("5-1cap3").onclick=function()
																			{
																				myStopFunction();
																				document.getElementById("5-1cap3").onclick="";	
																				document.getElementById("5-1cap3").style.visibility="hidden";
																				document.getElementById("5-1cap22").style.visibility="visible";			document.getElementById("5-1cap22").style.animation="closebodCap 1.5s forwards";
																				setTimeout(function()
																				{
																					document.getElementById("5-1cap22").style.visibility="hidden";
																					document.getElementById("5-1cap").style.visibility="visible";
																					setTimeout(function()
																					{
																						document.getElementById("nextButton").style.visibility="visible";
																					},600);
																				},1400);
																			}
																		},1750);
																	},200);
																}
															},1000);
														  },1000);
														},3100);
													}
												},1250);
											},100);	 
										}			
										
									},1600);
								}
							},1100);
						},1600);
						
					},150);
				}
			},1250);
		}
	}
	
	if(simsubscreennum==13)
	{
		$("#6-1samp4").fadeIn(0);
		document.getElementById("5-1cap").style.visibility="hidden";
		setTimeout(function()
		{
			myInt=setInterval(function(){ animatearrow(); }, 500);
			document.getElementById("arrow1").style="position:absolute; left:430px; top:390px; height:40px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
			document.getElementById("arrow1").style.msTransform="rotate(0deg)";
			document.getElementById("arrow1").style.transform="rotate(0deg)";
			document.getElementById("6-1").onclick=function()
			{
				step6();
			}
			document.getElementById("6-1cap").onclick=function()
			{
				step6();
			}
		},500);
	}
	if(simsubscreennum==14)
	{
		document.getElementById("6-1").style.visibility="hidden";
		document.getElementById("6-2").style.visibility="hidden";
		document.getElementById("6-1cap").style.visibility="hidden";
		document.getElementById("6-1samp2").style.visibility="hidden";
		document.getElementById("6-1samp3").style.visibility="hidden";
		document.getElementById("6-1samp4").style.visibility="hidden";
		document.getElementById("6blank").style.visibility="hidden";
		can=7;
		fun7and17();
	}
	
	if(simsubscreennum==15)
	{
		refresh();
		document.getElementById("7-1").style.visibility="hidden";
		document.getElementById("7-1samp").style.visibility="hidden";
		document.getElementById("7-1cap3").style.visibility="hidden";
		// document.getElementById("table").style.visibility="hidden";
		
		// document.getElementById('titration').style="visibility:visible;left: 650px; top: 100px; position: absolute;font-weight: bold;text-transform: uppercase;";
		// document.getElementById('titration').innerHTML="Titration : " + titration;
		
		$("#8-2").fadeIn(1500);
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:300px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById("8-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("8-2").onclick="";
				document.getElementById("8-2").style.animation="moveFunnel 2s forwards";
				setTimeout(function()
				{
					document.getElementById("8-3").style.visibility="visible";
					document.getElementById("8-3Cap").style.visibility="visible";
					setTimeout(function()
					{
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:559px; top:240px; height:30px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
						document.getElementById("arrow1").style.msTransform="rotate(270deg)";
						document.getElementById("arrow1").style.transform="rotate(270deg)";
						document.getElementById("8-3Cap").onclick=function()
						{
							myStopFunction();
							document.getElementById("8-3Cap").onclick="";
							document.getElementById("8-3Cap").style.animation="openNa2SO3Cap 2s forwards";
							setTimeout(function()
							{
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:350px; height:30px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
								document.getElementById("arrow1").style.msTransform="rotate(180deg)";
								document.getElementById("arrow1").style.transform="rotate(180deg)";
								document.getElementById("8-3").onclick=function()
								{
									myStopFunction();
									document.getElementById("8-3").onclick="";
									document.getElementById("8-32").style.visibility="visible";
									document.getElementById("8-3").style.visibility="hidden";
									document.getElementById("8-32").style.animation="moveNa2SO3Bottle 1.5s forwards";
									setTimeout(function()
									{
										document.getElementById("8-32").style="position:absolute; left:375px; top:32px; animation: rotateNa2SO3Bottle 1s forwards;";
										setTimeout(function()
										{
											document.getElementById("8-2samp").style.visibility="visible";
											document.getElementById("8-2samp").style.animation="sampFromFunnelUpDown 2s 7 ";
											setTimeout(function()
											{
												document.getElementById("8-2samp2").style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById("8-2samp3").style.animation="whiteUp 5s forwards";
													setTimeout(function()
													{
														document.getElementById("8-2samp3").style.visibility="hidden";
														document.getElementById("8-2samp4").style.animation="sampFromFunnelUp 5s forwards";
														setTimeout(function()
														{
															document.getElementById("8-2samp2").style.visibility="hidden";
															document.getElementById("8-2samp").style.animation="sampFromFunnelDown2 1.5s forwards ";
															setTimeout(function()
															{
																document.getElementById("8-2samp").style.visibility="hidden";
																document.getElementById("8-2samp4").style="position:absolute; left:240px; top:185px;";
																document.getElementById("8-2samp4").style.animation="sampFromFunnelUp2 1.5s forwards";
																document.getElementById("8-32").style.animation="rotateNa2SO3Bottle2 1.5s forwards";
																setTimeout(function()
																{
																	document.getElementById("8-32").style.animation="moveNa2SO3BottleBack 1.5s forwards";
																	setTimeout(function()
																	{
																		document.getElementById("8-32").style.visibility="hidden";
																		document.getElementById("8-3").style.visibility="visible";
																		
																		myInt=setInterval(function(){animatearrow();},500);
																		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:644px; top:320px; height:30px; z-index:10;";
																		document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.transform="rotate(270deg)";
																		document.getElementById("8-3Cap").onclick=function()
																		{
																			myStopFunction();
																			document.getElementById("8-3Cap").onclick="";
																			document.getElementById("8-3Cap").style.animation="closeNa2SO3Cap 2s forwards";
																			setTimeout(function()
																			{
																				document.getElementById("8-3Cap").style.visibility="hidden";
																				document.getElementById("8-3").style.visibility="hidden";
																				
																				myInt=setInterval(function(){animatearrow();},500);
																				document.getElementById("arrow1").style="visibility:visible; position:absolute; left:420px; top:155px; height:30px; z-index:10;";
																				document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.msTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.transform="rotate(0deg)";
																				document.getElementById("8-2").onclick=function()
																				{
																					myStopFunction();
																					document.getElementById("8-2").onclick="";
																					document.getElementById("8-2").style.animation="moveFunnelBack 2s forwards";
																					setTimeout(function()
																					{
																						$("#8-2").fadeOut(800);
																						document.getElementById("nextButton").style.visibility="visible";
																					},2100);
																				}
																			},2100);
																		}
																	},1600);
																},1000);
															},800);
														},5000);
													},4500);
												},800);
											},1000);
										},1100);
									},1550);
								}
							},2100);
						}
					},250);
				},2100);
			}
		},1500);
	}
	if(simsubscreennum==16)
	{
		document.getElementById("8-2samp4").style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById("p9-0a").style.visibility="visible";
			document.getElementById("p9-1").style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(300deg)";
			document.getElementById("9-1knob").onclick=function()
			{
				myStopFunction();
				document.getElementById("9-1knob").onclick="";	
				document.getElementById("9-1knob").style.visibility="hidden";
				document.getElementById("9-1hand").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("p9-0a").style.visibility="hidden";
					document.getElementById("9-1hand").style.visibility="hidden";
					document.getElementById("9-1hand2").style.visibility="visible";
					document.getElementById("9-1stopper").style="position:absolute; left:153px; top:309.75px;";
					setTimeout(function()
					{
						document.getElementById("drop9-1").style.visibility="visible";
						document.getElementById("drop9-1").style.animation="drop2 0.75s 10";
						document.getElementById("9-1a").style.animation="Na2S2O3fromBurette1 10s forwards";
						setTimeout(function()
						{
							document.getElementById("drop9-2").style.visibility="visible";
							document.getElementById("drop9-2").style.animation="drop2 0.75s 10";
							setTimeout(function()
							{
								//document.getElementById("drop9-1").style.visibility="hidden";
								//document.getElementById("drop9-2").style.visibility="hidden";
								document.getElementById("9-3").style.animation="colourChange2 8s forwards";

								setTimeout(function()
								{
									document.getElementById("p9-0b").style.visibility="visible";
									setTimeout(function()
									{
										document.getElementById("drop9-1").style.visibility="hidden";
										document.getElementById("drop9-2").style.visibility="hidden";
										document.getElementById("9-3").style.backgroundColor="#FFFF99";
										document.getElementById("9-1hand").style.visibility="visible";
										document.getElementById("9-1hand2").style.visibility="hidden";
										document.getElementById("p9-0b").style.visibility="hidden";
										document.getElementById("9-1stopper").style="position:absolute; left:150px; top:307.75px; ";
										setTimeout(function()
										{
											document.getElementById("9-1knob").style.visibility="visible";
											document.getElementById("9-6a").style.visibility="visible";
											document.getElementById("9-6b").style.visibility="visible";
											document.getElementById("9-1hand").style.visibility="hidden";
											setTimeout(function()
											{
												document.getElementById("p9-2").style.visibility="visible";
												document.getElementById("9-6a").style.visibility="visible";
												document.getElementById("9-6b").style.visibility="visible";
												document.getElementById("9-6b2").style.visibility="visible";
												
												setTimeout(function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:472px; top:290px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
														// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
														// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(270deg)";
													document.getElementById("9-6a").onclick=function()
													{
														myStopFunction();
														document.getElementById("9-6a").onclick="";
														document.getElementById("9-6a").style.animation="openStarchBottle 1.5s forwards";
														document.getElementById("p9-2").style.visibility="hidden";
														setTimeout(function()
														{
															document.getElementById("9-6dropper1").style.visibility="visible";
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:562px; top:190px; height: 35px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
															// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(270deg)";
															document.getElementById("9-6dropper1").onclick=function()
															{
																myStopFunction();
																document.getElementById("9-6dropper1").onclick="";
																document.getElementById("9-6dropper1").style.animation="dipdropper 1.5s forwards";
																setTimeout(function()
																{
																	document.getElementById("9-6dropper1").style.visibility="hidden";
																	document.getElementById("9-6dropper2").style.visibility="visible";
																	setTimeout(function()
																	{
																		document.getElementById("9-6dropper2").style.animation="dipdropper2 1.5s forwards";
																		setTimeout(function()
																		{
																			document.getElementById("9-6dropper2").style="position:absolute; left:220px; top:240px;";
																			document.getElementById("9-6dropper2").style.animation="rotateDropper 1.5s forwards";
																			setTimeout(function()
																			{
																				document.getElementById("9-6dropper2").style.transform="rotate(45deg)";
																				document.getElementById("9-6dropper2").style.animation="moveDropper 1s forwards";
																				setTimeout(function()
																				{
																					document.getElementById("drop9-3").style.visibility="visible";
																					document.getElementById("drop9-3").style.animation="drop3 1s 4";
																					setTimeout(function()
																					{
																						document.getElementById("9-3").style.backgroundImage="linear-gradient( #0000A0,#FFFF99,#FFFF99)";
																						setTimeout(function()
																						{
																							document.getElementById("9-3").style.backgroundImage="linear-gradient( #0000A0,#0000A0,#FFFF99)";
																							setTimeout(function()
																							{
																								document.getElementById("drop9-3").style.visibility="hidden";
																								document.getElementById("9-3").style.backgroundImage="linear-gradient( #0000A0,#0000A0)";
																								setTimeout(function()
																								{
																									document.getElementById("9-6dropper2").style.visibility="hidden";
																									setTimeout(function()
																									{
																										document.getElementById("9-6a").style.animation="closeStarchBottle 1.5s forwards";
																										setTimeout(function()
																										{
																											document.getElementById("9-6a").style.visibility="hidden";
																											document.getElementById("9-6b").style.visibility="hidden";
																											document.getElementById("9-6b2").style.visibility="hidden";
																											document.getElementById("9-3").style.backgroundColor="#0000A0";
																											blueToColourlessTitrarion();
																										},1550);
																									},250);
																								},250);
																							},2000);
																						},1000);
																					},1000);
																				},1050);
																			},1500);
																		},1500);
																	},250);
																},1600);
															}
														},1500);
													}				
												},1000);
											},500);
										},750);//from here
									},4000);
								},2500);
							},1000);
						},250);
					},100);
				},250);
			}
		},500);
	}
	if(simsubscreennum==17)
	{
		document.getElementById("9-3").style.visibility="hidden";
		document.getElementById("9-3b").style.visibility="hidden";
		document.getElementById('p9-1').style="visibility:hidden";
		document.getElementById('p9-3').style="visibility:hidden";
		//op1=0.025;
		document.getElementById("11").innerHTML=op1;//normality of na2s2o3
		document.getElementById("22").innerHTML=reading[p][0];//initial burette reading
		document.getElementById("33").innerHTML=reading[p][1];//final burette reading
		document.getElementById("44-17").innerHTML=reading[p][2];//volume of na2s2o3 burrete reading
		
		// op2=(op1*reading[p][2]*8000/200).toFixed(3);
		op2=parseFloat(op2);
		
		document.getElementById("norm2").onclick=function()
		{
			document.getElementById("eqn2").style.visibility="visible";
		}
		
		document.getElementById("check2").onclick=function()
		{
			document.getElementById("eqn2").style.visibility="hidden";
			if(!document.getElementById("output2").value  || !document.getElementById("output2").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				n = document.getElementById("output2").value;
				
				if(Math.round(n) == Math.round(op2))
				{
					document.getElementById("check2").style.visibility="hidden";
					document.getElementById("norm2").style.visibility="hidden";
					document.getElementById("r2").style.visibility="visible";
					document.getElementById("result2").style.visibility="hidden";
					document.getElementById("w2").style.visibility="hidden";
					document.getElementById("output2").style="border:none; background-color:white; colour:black;";
					document.getElementById("output2").disabled="true";
					document.getElementById("nextButton").style.visibility="visible";
				}
				else
				{
					document.getElementById("result2").style.visibility="visible";
					document.getElementById("w2").style.visibility="visible";
				}
			}	
			document.getElementById("result2").onclick=function()
			{
				document.getElementById("eqn2").style.visibility="hidden";
				document.getElementById("display2").style.visibility="visible";
				document.getElementById("display2").innerHTML="Dissolved oxygen (mg/l) = "+ op2 ;
				document.getElementById("check2").style.visibility="hidden";
				document.getElementById("result2").style.visibility="hidden";
				document.getElementById("w2").style.visibility="hidden";
				document.getElementById("norm2").style.visibility="hidden";
				document.getElementById("output2").style="border:none; background-color:white; colour:black;";
				document.getElementById("output2").disabled="true";
				document.getElementById("nextButton").style.visibility="visible";
			}
		}
	}
	if(simsubscreennum==18)
	{
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
		document.getElementById("display2").style.visibility="hidden";
	}
}

function checkInference()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==2)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is 4mg/l to 7mg/l";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(op2>=4 && op2<=7)
		{
			// str="suitable";
			// str=str.fontcolor("green");
			document.getElementById("infAns").innerHTML="Acceptable limit of Dissolved Oxygen in water is 4mg/l to 7mg/l.<br/>Water with D.O. less than 4mg/l is extremely harmful to drink.<br/>The water sample given has Dissolved Oxygen level = "+op2+"mg/l, <br/>so it is in the BIS standards range for drinking water.";
		}
		else 
		{
			str="not";
			str=str.fontcolor("red");
			document.getElementById("infAns").innerHTML="Acceptable limit of Dissolved Oxygen in water is 4mg/l to 7mg/l.<br/>Water with D.O. less than 4mg/l is extremely harmful to drink.<br/>The water sample given has Dissolved Oxygen level = "+op2+"mg/l, <br/>so it is "+str+"  in the BIS standards range for drinking water.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}

function step4()
{
	refresh();
	myStopFunction();
	document.getElementById("4-1").onclick="";
	document.getElementById("4-1cap").onclick="";
	document.getElementById("4-1").style.visibility="hidden";
	document.getElementById("4-1cap").style.visibility="hidden";
	document.getElementById("4-1samp").style.visibility="hidden";
	document.getElementById("4-2").style.visibility="visible";
	document.getElementById("4-2").style.animation="moveBODup 0.5s forwards";
	setTimeout(function()
	{
		document.getElementById("4-2").style="position:absolute; left:400px; top:70px;";
		document.getElementById("4-2").style.animation="rotBOD 0.5s forwards";
		setTimeout(function()
		{
			document.getElementById("4-2").style.visibility="hidden";
			document.getElementById("4-21").style.visibility="visible";
			document.getElementById("4-21").style.animation="shakeBOD 0.75s 6";
			setTimeout(function()
			{
				document.getElementById("4-21").style.visibility="hidden";
				document.getElementById("4-22").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("4-22").style.animation="moveBODdown 0.60s forwards";
					setTimeout(function()
					{
							document.getElementById("4-1").style.visibility="visible";
							document.getElementById("4-1samp").style.visibility="visible";
							document.getElementById("4-1samp").style.backgroundImage="linear-gradient(#CFB53B,#CFB53B)";
							document.getElementById("4-1cap").style.visibility="visible";
							document.getElementById("4-1samp4").style.visibility="visible";
							// document.getElementById("4-1samp2").style.visibility="visible";
							document.getElementById("4-22").style.visibility="hidden";
							document.getElementById("p4-1").style.visibility="visible";
							document.getElementById("4blank").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("4-1samp").style.animation="precipitateDown1 25s forwards";
								setTimeout(function()
								{
									document.getElementById("p4-1").style.visibility="hidden";
									// document.getElementById("4-1samp").style.backgroundImage="linear-gradient(#fff8ff)";
									// document.getElementById("4-1samp2").style.visibility="hidden";
									// document.getElementById("4-1samp3").style.visibility="visible";

									document.getElementById("4blank").style.visibility="hidden";
									document.getElementById("nextButton").style.visibility="visible";
								},22000);
							},500);
					},750);
				},150);
			},4450);
		},500);
	},500);
}

function step6()
{
	refresh();
	myStopFunction();
	document.getElementById("6-1").onclick="";
	document.getElementById("6-1cap").onclick="";
	document.getElementById("6-1").style.visibility="hidden";
	document.getElementById("6-1cap").style.visibility="hidden";
	document.getElementById("6-1samp4").style.visibility="hidden";
	document.getElementById("6-2").style.visibility="visible";
	document.getElementById("6-2").style.animation="moveBODup 0.5s forwards";
	setTimeout(function()
	{
		document.getElementById("6-2").style="position:absolute; left:400px; top:70px;";
		document.getElementById("6-2").style.animation="rotBOD 0.5s forwards";
		setTimeout(function()
		{
			document.getElementById("6-2").style.visibility="hidden";
			document.getElementById("6-21").style.visibility="visible";
			document.getElementById("6-21").style.animation="shakeBOD 0.75s 6";
			setTimeout(function()
			{
				document.getElementById("6-21").style.visibility="hidden";
				document.getElementById("6-22").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("6-22").style.animation="moveBODdown 0.60s forwards";
					setTimeout(function()
					{
							document.getElementById("6-1").style.visibility="visible";
							document.getElementById("6-1cap").style.visibility="visible";
							document.getElementById("6-1samp2").style.visibility="visible";
							document.getElementById("6-22").style.visibility="hidden";
							// document.getElementById("p6-1").style.visibility="visible";
							document.getElementById("6blank").style.visibility="visible";
							setTimeout(function()
							{
								//document.getElementById("6-1samp2").style.animation="precipitateDown1 25s forwards";
								//setTimeout(function()
								//{
									// document.getElementById("p6-1").style.visibility="hidden";
								//	document.getElementById("6-1samp2").style.visibility="hidden";
								//	document.getElementById("6-1samp3").style.visibility="visible";
								//	document.getElementById("6blank").style.visibility="hidden";
									document.getElementById("nextButton").style.visibility="visible";
								//},20000);
							},500);
					},750);
				},150);
			},4450);
		},500);
	},500);
}

// function fillConicalFlask()
// {
	// count++;
	// setTimeout(function()
	// {
		// $("#7-3").fadeIn(1500);
		// setTimeout(function()
		// {
			// myInt = setInterval(function(){ animatearrow(); }, 500);
			// document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:635px; top:235px; height: 35px; z-index: 10;";
			// document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
			// // Code for IE9
			// document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
			// // Standard syntax
			// document.getElementById("arrow1").style.transform = "rotate(0deg)";
			// document.getElementById("7-3").onclick=function()
			// {
				// myStopFunction();
				// document.getElementById("7-3").onclick="";	
				// $("#7-3").fadeOut(1);
				// document.getElementById("7-3a").style.visibility="visible";
				// document.getElementById("7-3a").style.animation="movePipette4 1.5s forwards";
				// setTimeout(function()
				// {
					// document.getElementById("7-1").style.visibility="hidden";
					// if(count==1)
						// document.getElementById("7-1a").style.visibility="visible";
						// document.getElementById("7-1sol").style.visibility="visible";
						// document.getElementById("7-1samp").style.visibility="hidden";
					// if(count==2)
						// document.getElementById("7-1ab").style.visibility="visible";
						// document.getElementById("7-1samp").style.visibility="hidden";
						// setTimeout(function()
						// {
							// document.getElementById("7-3a").style="position:absolute;  left:410px; top:50px;"
							// document.getElementById("7-3a").style.animation="movePipette5 1s forwards";
							// document.getElementById("p7-1").style.visibility="visible";
							// document.getElementById("p7-1").innerHTML="Suck the solution from the BOD bottle with the<br><br> mouth and make it upto the mark";
							
							// setTimeout(function()
							// {
								// document.getElementById("7-1sol2").style="visibility:visible; position:absolute; left:305px; top:300px; ";
								// document.getElementById("7-3a").style.visibility="hidden";
								// document.getElementById("7-3b").style.visibility="visible";//sucking pipette
								// document.getElementById("7-1sol2").style.transform=" rotate(0deg)";
								// setTimeout(function()
								// {
									// document.getElementById("7-1sol2").style.animation="suckSample 2.5s forwards";
									// if(count==1)
										// document.getElementById("7-1sol").style.animation="sample7down 2.5s forwards";
									// if(count==2)
										// document.getElementById("7-1sol").style.animation="sample7down2 2.5s forwards";
								// setTimeout(function()
								// {
									// document.getElementById("p7-1").innerHTML="Close the top of pipette with the thumb";
									// setTimeout(function()
									// {
										// document.getElementById("7-1sol2").style.visibility="hidden";
										// document.getElementById("7-3b").style.visibility="hidden";
										// document.getElementById("7-3c").style.visibility="visible";
										// document.getElementById("7-3c").style="position:absolute; left:445px; top:80px; transform:rotate(35deg); ";
										// setTimeout(function()
										// {
											// document.getElementById("7-3c").style.animation="moveclosePipette1 1s forwards";
											// setTimeout(function()
											// {
												// document.getElementById("7-3c").style="position:absolute; left:485px; top:60px; transform:rotate(35deg); ";
												// document.getElementById("7-3c").style.animation="rotclosePipette 1s forwards";
													// setTimeout(function()
													// {
														// document.getElementById("7-1a").style.visibility="hidden";
														// document.getElementById("7-1ab").style.visibility="hidden";
														// document.getElementById("7-1sol").style.visibility="hidden";
														// document.getElementById("7-1").style.visibility="visible";
														// //
														// if(count==1)
															// document.getElementById("7-1samp").style="visibility:visible; position:absolute; left:352px; top:325px;";
														// if(count==2)
															// document.getElementById("7-1samp").style="visibility:visible; position:absolute; left:352px; top:340px;";
														// document.getElementById("7-3d").style.visibility="visible";
														// document.getElementById("7-3c").style.visibility="hidden";
														// document.getElementById("p7-1").style.visibility="hidden";
														// document.getElementById("7-3d").style="position:absolute;  left:485px; top:60px;";
				
														// myInt = setInterval(function(){ animatearrow(); }, 500);
														// document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:615px; top:255px; height: 35px; z-index: 10;";
														// document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
																		// // Code for IE9
														// document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
														// // Standard syntax
														// document.getElementById("arrow1").style.transform = "rotate(0deg)";
														// document.getElementById("7-3d").onclick=function()
														// {
															// myStopFunction();
															// document.getElementById("7-3d").onclick="";	
															// document.getElementById("7-3d").style.animation="movePipette6 3s forwards";
															// setTimeout(function()
															// {
																// document.getElementById("7-3d").style.visibility="hidden";
																// document.getElementById("7-3samp").style.visibility="visible";
																// document.getElementById("7-3e").style="position:absolute; left:81px; top:60px; visibility:visible";
																// setTimeout(function()
																// {
																	// document.getElementById("7-3samp").style.animation="sampmoveDown73 3s forwards";
																// setTimeout(function()
																// {																
																// if(count==1)
																	// document.getElementById("7-2samp").style.animation="sampleUp7 2s forwards";
																// if(count==2)
																	// document.getElementById("7-2samp").style="position:absolute; left:60px; top:392px; animation:sampleUp7b 2s forwards";
																// setTimeout(function()
																// {
																	// document.getElementById("7-3samp").style="visibility:hidden; position:absolute; left:81px; top:150px;";
																	// document.getElementById("7-3e").style.animation="moveBackPipette7 2.5s forwards";
																	// setTimeout(function()
																	// {
																		// document.getElementById("7-3e").style.visibility="hidden";
																		// if(count<2)
																			// fillConicalFlask();
																		// else
																		// {
																			// $("#7-4d").fadeIn(1500);
																			// setTimeout(function()
																			// {
																				// myInt = setInterval(function(){ animatearrow(); }, 500);
																				// document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:585px; top:235px; height: 35px; z-index: 10;";
																				// document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																				// // Code for IE9
																				// document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																				// // Standard syntax
																				// document.getElementById("arrow1").style.transform = "rotate(180deg)";
																				// document.getElementById("7-4d").onclick=function()
																				// {
																					// myStopFunction();
																					// document.getElementById("7-4d").onclick="";	
																					// document.getElementById("7-4d").style.animation="moveAP7d 1.5s forwards";	
																					// setTimeout(function()
																					// {
																						// $("#7-4d").fadeOut(1);
																						// $("#7-4u").fadeIn(1);
																						// document.getElementById("7-1samp").style="visibility:visible; position:absolute; left:352px; top:345px;";
																						// myInt = setInterval(function(){ animatearrow(); }, 500);
																						// document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:525px; top:235px; height: 35px; z-index: 10;";
																						// document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
																						// // Code for IE9
																						// document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
																						// // Standard syntax
																						// document.getElementById("arrow1").style.transform = "rotate(0deg)";
																						// document.getElementById("7-4u").onclick=function()
																						// {
																							// myStopFunction();
																							// document.getElementById("7-4u").onclick="";	
																							// document.getElementById("7-4u").style.animation="moveAP7u 2.5s forwards";
																							// setTimeout(function()
																							// {
																								// document.getElementById("7-4b").style.visibility="visible";
																								// fill1mlsampletoconicalFlask();
																							// },2600);
																						// }
																					// },1800);
																				// }
																			// },1550);													
																		// }
																	// },2700);
																// },2000);
																// },1200);
																// },200);
															// },3100);
														// }
													// },1200);
											// //},1000);
										// },1100);
									// },500);
								// },500);
							 // },2500);
							// },1200);
					// },250);
				// },500);
				// },1500);
			// }
		// },1500);
	// },100);
// }	
	
// function fill1mlsampletoconicalFlask()
// {
	
	// myInt=setInterval(function(){animatearrow();},500);
	// document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:97px; top:165px; height:30px; z-index:10;";
	// document.getElementById("arrow1").style.WebkitTransform="rotate(237deg)";
	// document.getElementById("arrow1").style.msTransform="rotate(237deg)";
	// document.getElementById("arrow1").style.transform="rotate(237deg)";
	// document.getElementById("7-4b").onclick=function()
	// {
		// myStopFunction();
		// document.getElementById("7-4b").onclick="";
		// document.getElementById("7-4b").style.visibility="hidden";
		// document.getElementById("7-4u").style.visibility="hidden";
		// document.getElementById("7-4d").style="position:absolute; left:71px; top:140px;";
		// $("#7-4d").fadeIn(1);
		// document.getElementById("7-4samp2").style.visibility="visible";
		// setTimeout(function()
		// {
			// document.getElementById("7-2samp").style="position:absolute; left:60px; top:369px;";
			// document.getElementById("drop7-1").style.visibility="visible";
			
			// document.getElementById("7-4samp2").style.animation="sampAPdown7 3s forwards";
			
			// document.getElementById("drop7-1").style.animation="drop1 1s forwards";
			// setTimeout(function(){
				// document.getElementById("drop7-2").style.visibility="visible";
				// document.getElementById("drop7-2").style.animation="drop1 1s forwards";
				// setTimeout(function(){
					// document.getElementById("drop7-3").style.visibility="visible";
					// document.getElementById("drop7-3").style.animation="drop1 1s forwards";
					// setTimeout(function(){
						// document.getElementById("drop7-4").style.visibility="visible";
						// document.getElementById("drop7-4").style.animation="drop1 1s forwards";
						// document.getElementById("7-4samp2").style.visibility="hidden";
					// },250);	
				// },250);		
			// },250);			
			// document.getElementById("7-2samp").style.animation=" sampleUp7c 2.5s forwards";	
			// setTimeout(function()
			// {
				// document.getElementById("7-4d").style.animation="moveAPd2 1s forwards";
				// setTimeout(function()
				// {
					// document.getElementById("drop7-1").style.visibility="hidden";
					// document.getElementById("drop7-2").style.visibility="hidden";
					// document.getElementById("drop7-3").style.visibility="hidden";
					// document.getElementById("drop7-4").style.visibility="hidden";

					// $("#7-4d").fadeOut(1500);
					
					// setTimeout(function()
					// {
						// document.getElementById("nextButton").style.visibility="visible";
					
					// },1500);
				// },200);
			// },2700);
		// },200);
	// }
// }
	
function blueToColourlessTitrarion()
{
	refresh();
	setTimeout(function()
	{
			//document.getElementById("p9-0a").style.visibility="visible";
			document.getElementById("p9-1").style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(300deg)";
			document.getElementById("9-1knob").onclick=function()
			{
				myStopFunction();
				document.getElementById("9-1knob").onclick="";	
				document.getElementById("9-1knob").style.visibility="hidden";
				document.getElementById("9-1hand").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("p9-0a").style.visibility="hidden";
					document.getElementById("9-1hand").style.visibility="hidden";
					document.getElementById("9-1hand2").style.visibility="visible";
					document.getElementById("9-1stopper").style="position:absolute; left:153px; top:309.75px;";
					setTimeout(function()
					{
						document.getElementById("drop9-1").style.visibility="visible";
						document.getElementById("drop9-1").style.animation="drop2 0.75s 10";
						document.getElementById("9-1a").style="position:absolute; left:142px; top:113px; ";
						document.getElementById("9-1a").style.animation="Na2S2O3fromBurette3 10s forwards";
						setTimeout(function()
						{
							document.getElementById("drop9-2").style.visibility="visible";
							document.getElementById("drop9-2").style.animation="drop2 0.75s 10";
							setTimeout(function()
							{
								document.getElementById("9-3b").style.visibility="visible";
								document.getElementById("9-3b").style.animation="colourChange3 8s forwards";

								setTimeout(function()
								{
									document.getElementById("p9-0b").style.visibility="visible";
									document.getElementById("p9-0b").innerHTML="Close the knob when the colour of solution changes to colourless";
									setTimeout(function()
									{
										document.getElementById("drop9-1").style.visibility="hidden";
										document.getElementById("drop9-2").style.visibility="hidden";
										document.getElementById("9-3b").style.backgroundColor="#F8F8F8;";
										document.getElementById("9-1hand").style.visibility="visible";
										document.getElementById("9-1hand2").style.visibility="hidden";
										document.getElementById("p9-0b").style.visibility="hidden";
										document.getElementById("9-1stopper").style="position:absolute; left:150px; top:307.75px; ";
										setTimeout(function()
										{
										document.getElementById("9-1hand").style.visibility="hidden";
										document.getElementById("p9-3").style.visibility="visible";
										document.getElementById("p9-3").innerHTML="Final burette reading = "+reading[p][1]+ " ml";
										document.getElementById("nextButton").style.visibility="visible";
										},750);
								},5000);
							},2500);
						},1000);
					},250);
				},100);
			},250);
		}
	},500);
}

function blueToColourlessTitrarion2()
{
	refresh();
	setTimeout(function()
	{
			//document.getElementById("p9-0a").style.visibility="visible";
			// document.getElementById("p9-1").style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(300deg)";
			document.getElementById("55-1knob").onclick=function()
			{
				myStopFunction();
				document.getElementById("55-1knob").onclick="";	
				document.getElementById("55-1knob").style.visibility="hidden";
				document.getElementById("55-1hand").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("55p9-0a").style.visibility="hidden";
					document.getElementById("55-1hand").style.visibility="hidden";
					document.getElementById("55-1hand2").style.visibility="visible";
					document.getElementById("55-1stopper").style="position:absolute; left:153px; top:309.75px;";
					setTimeout(function()
					{
						document.getElementById("55drop9-1").style.visibility="visible";
						document.getElementById("55drop9-1").style.animation="drop2 0.75s 10";
						document.getElementById("55-1a").style="position:absolute; left:142px; top:113px; ";
						document.getElementById("55-1a").style.animation="Na2S2O3fromBurette3 10s forwards";
						setTimeout(function()
						{
							document.getElementById("55drop9-2").style.visibility="visible";
							document.getElementById("55drop9-2").style.animation="drop2 0.75s 10";
							setTimeout(function()
							{
								document.getElementById("55-3b").style.visibility="visible";
								document.getElementById("55-3b").style.animation="colourChange3 8s forwards";

								setTimeout(function()
								{
									document.getElementById("55p9-0b").style.visibility="visible";
									document.getElementById("55p9-0b").innerHTML="Close the knob when the colour of solution changes to colourless";
									setTimeout(function()
									{
										document.getElementById("55drop9-1").style.visibility="hidden";
										document.getElementById("55drop9-2").style.visibility="hidden";
										document.getElementById("55-3b").style.backgroundColor="#F8F8F8;";
										document.getElementById("55-1hand").style.visibility="visible";
										document.getElementById("55-1hand2").style.visibility="hidden";
										document.getElementById("55p9-0b").style.visibility="hidden";
										document.getElementById("55-1stopper").style="position:absolute; left:150px; top:307.75px; ";
										setTimeout(function()
										{
										document.getElementById("55-1hand").style.visibility="hidden";
										document.getElementById("55p9-3").style.visibility="visible";
										document.getElementById("55p9-3").innerHTML="Final burette reading = "+dataSet1[p][2]+ " ml";
										// document.getElementById("nextButton").style.visibility="visible";
										validateAnswer(1,3,"250px","250px");
										},750);
									},5000);
								},2500);
						},1000);
					},250);
				},100);
			},250);
		}
	},500);
}


function addKIpowder()
{
	document.getElementById("42").style.visibility="hidden";
	document.getElementById("42Cap").style.visibility="hidden";
	document.getElementById("44name").style.visibility="hidden";
	document.getElementById("41samp3").style.visibility="hidden";
	$("#43").fadeIn(200);
	
	$("#44").fadeIn(1000);
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:560px; top:230px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById("44").onclick=function()
		{
			myStopFunction();
			document.getElementById("44").onclick="";
			document.getElementById("44").style.animation="moveSpatula1 1.5s forwards";
			setTimeout(function()
			{
				document.getElementById("44").style="position:absolute; left:480px; top:300px; width:105px;";
				document.getElementById("44").style.animation="moveSpatula2 0.25s forwards";
				setTimeout(function()
				{
					$("#43").fadeOut(0);
					$("#44").fadeOut(0);
					document.getElementById("45").style.visibility="visible";
					document.getElementById("442").style.visibility="visible";
					document.getElementById("442").style.animation="moveSpatula3 2.5s forwards";
					setTimeout(function()
					{
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:160px; top:190px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(270deg)";
						document.getElementById("442").onclick=function()
						{
							myStopFunction();
							document.getElementById("442").onclick="";
							document.getElementById("442").style="position:absolute; left:79px; top:198px; width:105px;";
							document.getElementById("442").style.animation="rotSpatula1 1.5s forwards";
							setTimeout(function()
							{
								document.getElementById("4ki1").style.visibility="visible";
								document.getElementById("4ki1").style.animation="fallKI 2s forwards";
								setTimeout(function()
								{
									document.getElementById("442").style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById("41samp1").style.animation="turnBrown 3s forwards";
										setTimeout(function()
										{
											validateAnswer(0,2,"280px","100px");
										},3000);
									},1750);
								},250);								
							},1500);
						}
					},2600);
				},250);
			},1500);
		}
	},1000);
}

function fun7and17()
{
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:420px; top:240px; height: 35px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(can+"-1cap").onclick=function()
		{
			myStopFunction();
			document.getElementById(can+"-1cap").onclick="";	
			document.getElementById(can+"-1cap").style.visibility="hidden";
			document.getElementById(can+"-1cap2").style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById(can+"-1cap2").style.animation="openbodCap3 1.2s forwards";
				setTimeout(function()
				{
					document.getElementById(can+"-1cap2").style.visibility="hidden";
					document.getElementById(can+"-1cap3").style.visibility="visible";
					
					fillConicalFlask();
						
				},1250);
			},100);
		}
	},150);	
}
	
function fillConicalFlask()
{
	count++;
	$("#"+can+"-3").fadeIn(100);
	setTimeout(function()
	{
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:380px; top:95px; height:30px; z-index:10;";
		document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
		document.getElementById("arrow1").style.msTransform="rotate(180deg)";
		document.getElementById("arrow1").style.transform="rotate(180deg)";
		document.getElementById(can+"-3").onclick=function()
		{
			myStopFunction();
			document.getElementById(can+"-3").onclick="";
			$("#"+can+"-3").fadeOut(0);
			document.getElementById(can+"-3a").style.visibility="visible";
			$("#"+can+"-3a").animate({"position":"absolute","top":"125px"},300,
			function()
			{
				document.getElementById(can+"-5bulb").style.visibility="visible";
				document.getElementById(can+"-5up").style.visibility="visible";
				document.getElementById(can+"-5down").style.visibility="visible";
				//click arrow on the pipette bulb
				myInt=setInterval(function(){animatearrow();},500);
				document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:565px; top:295px; height:30px; z-index:10;";
				document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
				document.getElementById("arrow1").style.msTransform="rotate(180deg)";
				document.getElementById("arrow1").style.transform="rotate(180deg)";
				document.getElementById(can+"-5up").onclick=function()
				{
					myStopFunction();
					document.getElementById(can+"-5up").onclick="";
					document.getElementById(can+"-5bulb").style.visibility="hidden";
					document.getElementById(can+"-5up").style.visibility="hidden";
					document.getElementById(can+"-5down").style.visibility="hidden";
					if(count==1)
					{
						// $("#"+can+"-1samp2").animate({"position":"absolute","top":"320px"},1000);
						$("#"+can+"-1samp").animate({"position":"absolute","top":"320px"},1000);
					}
					if(count==2)
					{
						// $("#"+can+"-1samp2").animate({"position":"absolute","top":"335px"},1000);
						$("#"+can+"-1samp").animate({"position":"absolute","top":"335px"},1000);
					}
					$("#"+can+"-1samp3").animate({"position":"absolute","top":"211.5px"},1000,
					function()
					{
						$("#"+can+"-1samp3").animate({"position":"absolute","top":"121.5px"},500);
						$("#"+can+"-3a").animate({"position":"absolute","top":"35px"},500,
						function()
						{
							$("#"+can+"-1samp3").animate({"position":"absolute","left":"90.5px"},600);
							$("#"+can+"-3a").animate({"position":"absolute","left":"76px"},600,
							function()
							{
								$("#"+can+"-1samp3").animate({"position":"absolute","top":"144.5px"},300);
								$("#"+can+"-3a").animate({"position":"absolute","top":"59px"},300,
								function()
								{
									document.getElementById(can+"-5bulb").style.visibility="visible";
									document.getElementById(can+"-5up").style.visibility="visible";
									document.getElementById(can+"-5down").style.visibility="visible";
									myInt=setInterval(function(){animatearrow();},500);
									document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:577.5px; top:307.5px; height:30px; z-index:10;";
									document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
									document.getElementById("arrow1").style.msTransform="rotate(180deg)";
									document.getElementById("arrow1").style.transform="rotate(180deg)";
									document.getElementById(can+"-5down").onclick=function()
									{
										myStopFunction();
										document.getElementById(can+"-5down").onclick="";
										document.getElementById(can+"-5bulb").style.visibility="hidden";
										document.getElementById(can+"-5up").style.visibility="hidden";
										document.getElementById(can+"-5down").style.visibility="hidden";
										if(count==1)
										{
											$("#"+can+"-2samp").animate({"position":"absolute","top":"390px"},1000);
										}
										if(count==2)
										{
											$("#"+can+"-2samp").animate({"position":"absolute","top":"380px"},1000);
										}
										$("#"+can+"-1samp3").animate({"position":"absolute","top":"390px"},1000,
										function()
										{
											document.getElementById(can+"-3a").style.visibility="hidden";
											setTimeout(function()
											{
												if(count<2)
												{
													$("#"+can+"-1samp3").css({"position":"absolute", "left":"384.5px", "top":"350px"});
													$("#"+can+"-3a").animate({"position":"absolute", "left":"370px", "top":"35px" });
													fillConicalFlask();
												}
												else
												{
													document.getElementById("p7-1").style.visibility="visible";
													setTimeout(function()
													{
														document.getElementById("p7-1").style.visibility="hidden";
														document.getElementById("nextButton").style.visibility="visible";
													},1200);
													//fill1ThroughAutomaticPipette();
												}
											},1500);
										});
									}
								});
							});
						});
					});
				}
			});
		}
	},250);
}	

function fill1ThroughAutomaticPipette()
{
	$("#"+can+"-4d").fadeIn(1500);
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:585px; top:235px; height: 35px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById(can+"-4d").onclick=function()
		{
			myStopFunction();
			document.getElementById(can+"-4d").onclick="";	
			document.getElementById(can+"-4d").style.animation="moveAP7d 1.5s forwards";	
			setTimeout(function()
			{
				$("#"+can+"-4d").fadeOut(1);
				$("#"+can+"-4u").fadeIn(1);
				document.getElementById(can+"-1samp").style="visibility:visible; position:absolute; left:352px; top:345px;";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:525px; top:235px; height: 35px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(0deg)";
				document.getElementById(can+"-4u").onclick=function()
				{
					myStopFunction();
					document.getElementById(can+"-4u").onclick="";	
					document.getElementById(can+"-4u").style.animation="moveAP7u 2.5s forwards";
					setTimeout(function()
					{
						document.getElementById(can+"-4b").style.visibility="visible";
						fill1mlsampletoconicalFlask();
					},2600);
				}
			},1800);
		}
	},1550);
}

function fill1mlsampletoconicalFlask()
{
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:97px; top:165px; height:30px; z-index:10;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(237deg)";
	document.getElementById("arrow1").style.msTransform="rotate(237deg)";
	document.getElementById("arrow1").style.transform="rotate(237deg)";
	document.getElementById(can+"-4b").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-4b").onclick="";
		document.getElementById(can+"-4b").style.visibility="hidden";
		document.getElementById(can+"-4u").style.visibility="hidden";
		document.getElementById(can+"-4d").style="position:absolute; left:71px; top:140px;";
		$("#"+can+"4d").fadeIn(1);
		document.getElementById(can+"-4samp2").style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById(can+"-2samp").style="position:absolute; left:60px; top:379px;";
			document.getElementById("drop"+can+"-1").style.visibility="visible";
			
			document.getElementById(can+"-4samp2").style.animation="sampAPdown7 3s forwards";
			
			document.getElementById("drop"+can+"-1").style.animation="drop1 1s forwards";
			setTimeout(function(){
				document.getElementById("drop"+can+"-2").style.visibility="visible";
				document.getElementById("drop"+can+"-2").style.animation="drop1 1s forwards";
				setTimeout(function(){
					document.getElementById("drop"+can+"-3").style.visibility="visible";
					document.getElementById("drop"+can+"-3").style.animation="drop1 1s forwards";
					setTimeout(function(){
						document.getElementById("drop"+can+"-4").style.visibility="visible";
						document.getElementById("drop"+can+"-4").style.animation="drop1 1s forwards";
						document.getElementById(can+"-4samp2").style.visibility="hidden";
					},250);	
				},250);		
			},250);			
			document.getElementById(can+"-2samp").style.animation=" sampleUp7c 2.5s forwards";	
			setTimeout(function()
			{
				document.getElementById(can+"-4d").style.animation="moveAPd2 1s forwards";
				setTimeout(function()
				{
					document.getElementById("drop"+can+"-1").style.visibility="hidden";
					document.getElementById("drop"+can+"-2").style.visibility="hidden";
					document.getElementById("drop"+can+"-3").style.visibility="hidden";
					document.getElementById("drop"+can+"-4").style.visibility="hidden";

					$("#"+can+"-4d").fadeOut(500);
					
					setTimeout(function()
					{
						document.getElementById("nextButton").style.visibility="visible";
					
					},500);
				},200);
			},2700);
		},200);
	}
}


function fillPotassiumDichromate()
{
	setTimeout(function()
	{
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:380px; top:95px; height:30px; z-index:10;";
		document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
		document.getElementById("arrow1").style.msTransform="rotate(180deg)";
		document.getElementById("arrow1").style.transform="rotate(180deg)";
		document.getElementById(can+"-3").onclick=function()
		{
			myStopFunction();
			document.getElementById(can+"-3").onclick="";
			$("#"+can+"-3").fadeOut(0);
			document.getElementById(can+"-3a").style.visibility="visible";
			$("#"+can+"-3a").animate({"position":"absolute","top":"125px"},300,
			function()
			{
				document.getElementById(can+"-5bulb").style.visibility="visible";
				document.getElementById(can+"-5up").style.visibility="visible";
				document.getElementById(can+"-5down").style.visibility="visible";
				//click arrow on the pipette bulb
				myInt=setInterval(function(){animatearrow();},500);
				document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:565px; top:295px; height:30px; z-index:10;";
				document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
				document.getElementById("arrow1").style.msTransform="rotate(180deg)";
				document.getElementById("arrow1").style.transform="rotate(180deg)";
				document.getElementById(can+"-5up").onclick=function()
				{
					myStopFunction();
					document.getElementById(can+"-5up").onclick="";
					document.getElementById(can+"-5bulb").style.visibility="hidden";
					document.getElementById(can+"-5up").style.visibility="hidden";
					document.getElementById(can+"-5down").style.visibility="hidden";
					$("#"+can+"3-1samp").animate({"position":"absolute","top":"320px"},1000);
					
					$("#"+can+"-1samp3").animate({"position":"absolute","top":"211.5px"},1000,
					function()
					{
						$("#"+can+"-1samp3").animate({"position":"absolute","top":"121.5px"},500);
						$("#"+can+"-3a").animate({"position":"absolute","top":"35px"},500,
						function()
						{
							$("#"+can+"-1samp3").animate({"position":"absolute","left":"90.5px"},600);
							$("#"+can+"-3a").animate({"position":"absolute","left":"76px"},600,
							function()
							{
								$("#"+can+"-1samp3").animate({"position":"absolute","top":"144.5px"},300);
								$("#"+can+"-3a").animate({"position":"absolute","top":"59px"},300,
								function()
								{
									document.getElementById(can+"-5bulb").style.visibility="visible";
									document.getElementById(can+"-5up").style.visibility="visible";
									document.getElementById(can+"-5down").style.visibility="visible";
									myInt=setInterval(function(){animatearrow();},500);
									document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:577.5px; top:307.5px; height:30px; z-index:10;";
									document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
									document.getElementById("arrow1").style.msTransform="rotate(180deg)";
									document.getElementById("arrow1").style.transform="rotate(180deg)";
									document.getElementById(can+"-5down").onclick=function()
									{
										myStopFunction();
										document.getElementById(can+"-5down").onclick="";
										document.getElementById(can+"-5bulb").style.visibility="hidden";
										document.getElementById(can+"-5up").style.visibility="hidden";
										document.getElementById(can+"-5down").style.visibility="hidden";
										$("#"+can+"3-2samp").animate({"position":"absolute", "top":"390px"},1250);
										$("#"+can+"-1samp3").animate({"position":"absolute","top":"400px"},1000,
										function()
										{
											document.getElementById(can+"-1samp3").style.visibility="hidden";
											document.getElementById(can+"-3a").style.visibility="hidden";
											//clse k2cr2o7 bod bottle cap
											setTimeout(function()
											{
												document.getElementById("33-3e").style.visibility="hidden";
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:528px; top:370px; height: 35px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
												// Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(270deg)";
												document.getElementById("33-1cap3").onclick=function()
												{
													myStopFunction();
													document.getElementById("33-1cap3").onclick="";	
													document.getElementById("33-1cap3").style.visibility="hidden";
													document.getElementById("33-1cap22").style.visibility="visible";			
													document.getElementById("33-1cap22").style.animation="closebodCap3 1.5s forwards";
													setTimeout(function()
													{
														document.getElementById("33-1cap22").style.visibility="hidden";
														document.getElementById("33-1cap").style.visibility="visible";
														setTimeout(function()
														{
															document.getElementById("nextButton").style.visibility="visible";
														},600);
													},1400);
												}
											},1500);
										});
									}
								});
							});
						});
					});
				}
			});
		}
	},250);
}
function refresh()
{
	
	document.getElementById("1-5").style.animation="";
	document.getElementById("1-4").style.animation="";
	document.getElementById("1-10").style.animation="";
	document.getElementById("1-11").style.animation="";
	document.getElementById("1-12").style.animation="";
	document.getElementById("1-6").style.animation="";
	document.getElementById("2-4Up2").style.animation="";
	document.getElementById("3-2Cap").style.animation="";
	document.getElementById("4-2").style.animation="";
	document.getElementById("7-3c").style.animation="";
	document.getElementById("7-1a").style.animation="";
	document.getElementById("7-2samp").style.animation="";
	document.getElementById("7-3d").style.animation="";
	document.getElementById("7-3e").style.animation="";
	document.getElementById("7-3c").style.animation="";
	document.getElementById("7-3a").style.animation="";
	document.getElementById("7-3samp").style.animation="";
	document.getElementById("7-1sol2").style.animation="";
	document.getElementById("drop9-1").style.animation="";
	document.getElementById("drop9-2").style.animation="";
	document.getElementById("9-3").style.animation="";
	document.getElementById("55drop9-1").style.animation="";
	document.getElementById("55drop9-2").style.animation="";
	document.getElementById("55-3").style.animation="";
	//document.getElementById("9-1a").style.animation="";
	document.getElementById("8-2").style.animation="";
	document.getElementById("8-3Cap").style.animation="";
	document.getElementById("8-32").style.animation="";
	document.getElementById("8-2samp").style.animation="";
	document.getElementById("8-2samp3").style.animation="";
	document.getElementById("8-2samp4").style.animation="";
}
