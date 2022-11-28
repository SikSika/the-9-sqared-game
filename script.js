// checking if page is loaded

document.addEventListener("DOMContentLoaded", ()=>{
	console.log("loaded");
	codeStart();
});


// stating whos turn it is (0 = player 1, 1 = player 2)
	var turn = 0;

// checking buttons (0 = empty, 1 = player 1, 2 = player 2)
	var btn1 = 0;
	var btn2 = 0;
	var btn3 = 0;
	var btn4 = 0;
	var btn5 = 0;
	var btn6 = 0;
	var btn7 = 0;
	var btn8 = 0;
	var btn9 = 0;

// ending
	var end = false;

function codeStart() {
	console.log("code started")

	document.getElementById('restart').style.display = "none";

	// code start
	function input(num) {
		if (end == false) {
				if (num == 1) {
					if (btn1 == 1) {

					} else {
						if (btn1 == 2) {

						} else {
							if (btn1 == 0) {
								// if the space is not taken
								if (turn == 0) {
									btn1 = 1;
									turn = 1;
									document.getElementById('1').style.background = `url("Photos/X.png")`;
									document.getElementById('1').style.backgroundRepeat = `no-repeat`;
									document.getElementById('1').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Os turn`
								} else {
									btn1 = 2;
									turn = 0;
									document.getElementById('1').style.background = `url("Photos/O.png")`;
									document.getElementById('1').style.backgroundRepeat = `no-repeat`;
									document.getElementById('1').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Xs turn`
								}
							}
						}
					}
				}

				if (num == 2) {
					if (btn2 == 1) {

					} else {
						if (btn2 == 2) {

						} else {
							if (btn2 == 0) {
								// if the space is not taken
								if (turn == 0) {
									btn2 = 1;
									turn = 1;
									document.getElementById('2').style.background = `url("Photos/X.png")`;
									document.getElementById('2').style.backgroundRepeat = `no-repeat`;
									document.getElementById('2').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Os turn`
								} else {
									btn2 = 2;
									turn = 0;
									document.getElementById('2').style.background = `url("Photos/O.png")`;
									document.getElementById('2').style.backgroundRepeat = `no-repeat`;
									document.getElementById('2').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Xs turn`
								}
							}
						}
					}
				}

				if (num == 3) {
					if (btn3 == 1) {

					} else {
						if (btn3 == 2) {

						} else {
							if (btn3 == 0) {
								// if the space is not taken
								if (turn == 0) {
									btn3 = 1;
									turn = 1;
									document.getElementById('3').style.background = `url("Photos/X.png")`;
									document.getElementById('3').style.backgroundRepeat = `no-repeat`;
									document.getElementById('3').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Os turn`
								} else {
									btn3 = 2;
									turn = 0;
									document.getElementById('3').style.background = `url("Photos/O.png")`;
									document.getElementById('3').style.backgroundRepeat = `no-repeat`;
									document.getElementById('3').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Xs turn`
								}
							}
						}
					}
				}

				if (num == 4) {
					if (btn4 == 1) {

					} else {
						if (btn4 == 2) {

						} else {
							if (btn4 == 0) {
								// if the space is not taken
								if (turn == 0) {
									btn4 = 1;
									turn = 1;
									document.getElementById('4').style.background = `url("Photos/X.png")`;
									document.getElementById('4').style.backgroundRepeat = `no-repeat`;
									document.getElementById('4').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Os turn`
								} else {
									btn4 = 2;
									turn = 0;
									document.getElementById('4').style.background = `url("Photos/O.png")`;
									document.getElementById('4').style.backgroundRepeat = `no-repeat`;
									document.getElementById('4').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Xs turn`
								}
							}
						}
					}
				}

				if (num == 5) {
					if (btn5 == 1) {

					} else {
						if (btn5 == 2) {

						} else {
							if (btn5 == 0) {
								// if the space is not taken
								if (turn == 0) {
									btn5 = 1;
									turn = 1;
									document.getElementById('5').style.background = `url("Photos/X.png")`;
									document.getElementById('5').style.backgroundRepeat = `no-repeat`;
									document.getElementById('5').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Os turn`
								} else {
									btn5 = 2;
									turn = 0;
									document.getElementById('5').style.background = `url("Photos/O.png")`;
									document.getElementById('5').style.backgroundRepeat = `no-repeat`;
									document.getElementById('5').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Xs turn`
								}
							}
						}
					}
				}

				if (num == 6) {
					if (btn6 == 1) {

					} else {
						if (btn6 == 2) {

						} else {
							if (btn6 == 0) {
								// if the space is not taken
								if (turn == 0) {
									btn6 = 1;
									turn = 1;
									document.getElementById('6').style.background = `url("Photos/X.png")`;
									document.getElementById('6').style.backgroundRepeat = `no-repeat`;
									document.getElementById('6').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Os turn`
								} else {
									btn6 = 2;
									turn = 0;
									document.getElementById('6').style.background = `url("Photos/O.png")`;
									document.getElementById('6').style.backgroundRepeat = `no-repeat`;
									document.getElementById('6').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Xs turn`
								}
							}
						}
					}
				}

				if (num == 7) {
					if (btn7 == 1) {

					} else {
						if (btn7 == 2) {

						} else {
							if (btn7 == 0) {
								// if the space is not taken
								if (turn == 0) {
									btn7 = 1;
									turn = 1;
									document.getElementById('7').style.background = `url("Photos/X.png")`;
									document.getElementById('7').style.backgroundRepeat = `no-repeat`;
									document.getElementById('7').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Os turn`
								} else {
									btn7 = 2;
									turn = 0;
									document.getElementById('7').style.background = `url("Photos/O.png")`;
									document.getElementById('7').style.backgroundRepeat = `no-repeat`;
									document.getElementById('7').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Xs turn`
								}
							}
						}
					}
				}

				if (num == 8) {
					if (btn8 == 1) {

					} else {
						if (btn8 == 2) {

						} else {
							if (btn8 == 0) {
								// if the space is not taken
								if (turn == 0) {
									btn8 = 1;
									turn = 1;
									document.getElementById('8').style.background = `url("Photos/X.png")`;
									document.getElementById('8').style.backgroundRepeat = `no-repeat`;
									document.getElementById('8').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Os turn`
								} else {
									btn8 = 2;
									turn = 0;
									document.getElementById('8').style.background = `url("Photos/O.png")`;
									document.getElementById('8').style.backgroundRepeat = `no-repeat`;
									document.getElementById('8').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Xs turn`
								}
							}
						}
					}
				}

				if (num == 9) {
					if (btn9 == 1) {

					} else {
						if (btn9 == 2) {

						} else {
							if (btn9 == 0) {
								// if the space is not taken
								if (turn == 0) {
									btn9 = 1;
									turn = 1;
									document.getElementById('9').style.background = `url("Photos/X.png")`;
									document.getElementById('9').style.backgroundRepeat = `no-repeat`;
									document.getElementById('9').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Os turn`
								} else {
									btn9 = 2;
									turn = 0;
									document.getElementById('9').style.background = `url("Photos/O.png")`;
									document.getElementById('9').style.backgroundRepeat = `no-repeat`;
									document.getElementById('9').style.backgroundSize = `cover`;
									document.getElementById('turn').innerHTML = `It's Xs turn`
								}
							}
						}
					}
				}






				check();

			} 

		}


	function test() {
		console.log("test");
	}


	//checking
	function check() {
		if (btn1 == 1) {
			if (btn2 == 1) {
				if (btn3 == 1) {
					document.getElementById('turn').innerHTML = "X won"
					stop();
				}
			}
		}

		if (btn1 == 1) {
			if (btn5 == 1) {
				if (btn9 == 1) {
					document.getElementById('turn').innerHTML = "X won"
					stop();
				}
			}
		}

		if (btn3 == 1) {
			if (btn5 == 1) {
				if (btn7 == 1) {
					document.getElementById('turn').innerHTML = "X won"
					stop();
				}
			}
		}
		if (btn4 == 1) {
			if (btn5 == 1) {
				if (btn6 == 1) {
					document.getElementById('turn').innerHTML = "X won"
					stop();
				}
			}
		}

		if (btn7 == 1) {
			if (btn8 == 1) {
				if (btn9 == 1) {
					document.getElementById('turn').innerHTML = "X won"
					stop();
				}
			}
		}

		if (btn1 == 1) {
			if (btn4 == 1) {
				if (btn7 == 1) {
					document.getElementById('turn').innerHTML = "X won"
					stop();
				}
			}
		}

		if (btn2 == 1) {
			if (btn5 == 1) {
				if (btn8 == 1) {
					document.getElementById('turn').innerHTML = "X won"
					stop();
				}
			}
		}

		if (btn3 == 1) {
			if (btn6 == 1) {
				if (btn9 == 1) {
					document.getElementById('turn').innerHTML = "X won"
					stop();
				}
			}
		} 

		if (btn1 == 2) {
			if (btn2 == 2) {
				if (btn3 == 2) {
					document.getElementById('turn').innerHTML = "O won"
					stop();
				}
			}
		} 

		if (btn1 == 2) {
			if (btn5 == 2) {
				if (btn9 == 2) {
					document.getElementById('turn').innerHTML = "O won"
					stop();
				}
			}
		}

		if (btn3 == 2) {
			if (btn5 == 2) {
				if (btn7 == 2) {
					document.getElementById('turn').innerHTML = "O won"
					stop();
				}
			}
		}

		if (btn4 == 2) {
			if (btn5 == 2) {
				if (btn6 == 2) {
					document.getElementById('turn').innerHTML = "O won"
					stop();
				}
			}
		}

		if (btn7 == 2) {
			if (btn8 == 2) {
				if (btn9 == 2) {
					document.getElementById('turn').innerHTML = "O won"
					stop();
				}
			}
		}

		if (btn1 == 2) {
			if (btn4 == 2) {
				if (btn7 == 2) {
					document.getElementById('turn').innerHTML = "O won"
					stop();
				}
			}
		}

		if (btn2 == 2) {
			if (btn5 == 2) {
				if (btn8 == 2) {
					document.getElementById('turn').innerHTML = "O won"
					stop();
				}
			}
		}

		if (btn3 == 2) {
			if (btn6 == 2) {
				if (btn9 == 2) {
					document.getElementById('turn').innerHTML = "O won"
					stop();
				}
			}
		}

		drawOrNot()
	}

	function stop() {
		console.log("game end process");
		end = true;

		document.getElementById('restart').style.display = "";

		console.log("ended")
	}

	// checking for draw
		function drawOrNot() {
			if (btn1+btn2+btn3+btn4+btn5+btn6+btn7+btn8+btn9 == 13) {
				console.log("draw");
				document.getElementById('turn').innerHTML = `Draw!`;

				if (btn1 == 1) {
					if (btn2 == 1) {
						if (btn3 == 1) {
							document.getElementById('turn').innerHTML = "X won"
							stop();
						}
					}
				}

				if (btn1 == 1) {
					if (btn5 == 1) {
						if (btn9 == 1) {
							document.getElementById('turn').innerHTML = "X won"
							stop();
						}
					}
				}

				if (btn3 == 1) {
					if (btn5 == 1) {
						if (btn7 == 1) {
							document.getElementById('turn').innerHTML = "X won"
							stop();
						}
					}
				}
				if (btn4 == 1) {
					if (btn5 == 1) {
						if (btn6 == 1) {
							document.getElementById('turn').innerHTML = "X won"
							stop();
						}
					}
				}

				if (btn7 == 1) {
					if (btn8 == 1) {
						if (btn9 == 1) {
							document.getElementById('turn').innerHTML = "X won"
							stop();
						}
					}
				}

				if (btn1 == 1) {
					if (btn4 == 1) {
						if (btn7 == 1) {
							document.getElementById('turn').innerHTML = "X won"
							stop();
						}
					}
				}

				if (btn2 == 1) {
					if (btn5 == 1) {
						if (btn8 == 1) {
							document.getElementById('turn').innerHTML = "X won"
							stop();
						}
					}
				}

				if (btn3 == 1) {
					if (btn6 == 1) {
						if (btn9 == 1) {
							document.getElementById('turn').innerHTML = "X won"
							stop();
						}
					}
				} 

				if (btn1 == 2) {
					if (btn2 == 2) {
						if (btn3 == 2) {
							document.getElementById('turn').innerHTML = "O won"
							stop();
						}
					}
				} 

				if (btn1 == 2) {
					if (btn5 == 2) {
						if (btn9 == 2) {
							document.getElementById('turn').innerHTML = "O won"
							stop();
						}
					}
				}

				if (btn3 == 2) {
					if (btn5 == 2) {
						if (btn7 == 2) {
							document.getElementById('turn').innerHTML = "O won"
							stop();
						}
					}
				}

				if (btn4 == 2) {
					if (btn5 == 2) {
						if (btn6 == 2) {
							document.getElementById('turn').innerHTML = "O won"
							stop();
						}
					}
				}

				if (btn7 == 2) {
					if (btn8 == 2) {
						if (btn9 == 2) {
							document.getElementById('turn').innerHTML = "O won"
							stop();
						}
					}
				}

				if (btn1 == 2) {
					if (btn4 == 2) {
						if (btn7 == 2) {
							document.getElementById('turn').innerHTML = "O won"
							stop();
						}
					}
				}

				if (btn2 == 2) {
					if (btn5 == 2) {
						if (btn8 == 2) {
							document.getElementById('turn').innerHTML = "O won"
							stop();
						}
					}
				}

				if (btn3 == 2) {
					if (btn6 == 2) {
						if (btn9 == 2) {
							document.getElementById('turn').innerHTML = "O won"
							stop();
						}
					}
				}
				stop();
			}

		}
	function re() {
		document.getElementById('turn').innerHTML = `It's Xs turn`
		end = false;

		turn = 0;

		btn1 = 0;
		btn2 = 0;
		btn3 = 0;
		btn4 = 0;
		btn5 = 0;
		btn6 = 0;
		btn7 = 0;
		btn8 = 0;
		btn9 = 0;

		document.getElementById('1').style.background = ``;
		document.getElementById('2').style.background = ``;
		document.getElementById('3').style.background = ``;
		document.getElementById('4').style.background = ``;
		document.getElementById('5').style.background = ``;
		document.getElementById('6').style.background = ``;
		document.getElementById('7').style.background = ``;
		document.getElementById('8').style.background = ``;
		document.getElementById('9').style.background = ``;


		codeStart();
	}

	// listens for clicks
	document.getElementById('1').addEventListener("click", function() {input(1);});
	document.getElementById('2').addEventListener("click", function() {input(2);});
	document.getElementById('3').addEventListener("click", function() {input(3);});
	document.getElementById('4').addEventListener("click", function() {input(4);});
	document.getElementById('5').addEventListener("click", function() {input(5);});
	document.getElementById('6').addEventListener("click", function() {input(6);});
	document.getElementById('7').addEventListener("click", function() {input(7);});
	document.getElementById('8').addEventListener("click", function() {input(8);});
	document.getElementById('9').addEventListener("click", function() {input(9);});
	document.getElementById('reBtn').addEventListener("click", function() {re();});







}