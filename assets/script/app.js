var introTab = "|-----------------|-----------------|-----------------|-----------------||-1---------1-----|-0---------0-----|-3---------0-----|-1---------1-----||-------0-------0-|-------0-------0-|-------0-------0-|-------0-------0-||-----2-------2---|-----2-------2---|-----2-------2---|-----2-------2---||-3-------3-------|-3-------3-------|-3-------3-------|-3-------3-------||-----------------|-----------------|-----------------|-----------------||-----------------|-----------------|-----------------|-----------------||-0---------0-----|-3---------3-----|-1---------1-----|-0---------0-----||-------2-------2-|-------2-------2-|-------2-------2-|-------2-------2-||-----2-------2---|-----2-------2---|-----2-------2---|-----2-------2---||-0-------0-------|-0-------0-------|-0-------0-------|-0-------0-------||-----------------|-----------------|-----------------|-----------------||-----------------|-----------------|-----------------|-----------------||-3---------3-----|-1---------1-----|-0---------0-----|-3---------3-----||-------0-------0-|-------0-------0-|-------0-------0-|-------0-------0-||-----2-------2---|-----2-------2---|-----2-------2---|-----2-------2---||-3-------3-------|-3-------3-------|-3-------3-------|-3-------3-------||-----------------|-----------------|-----------------|-----------------||-----------------|-----------------|-----------------|-----------------||-1---------1-----|-0---------0-----|-3---------3-----|-1---------------||-------2-------2-|-------2-------2-|-------2-------2-|-------2---------||-----2-------2---|-----2-------2---|-----2-------2---|-----2-----------||-0-------0-------|-0-------0-------|-0-------0-------|-0-------0---2---||-----------------|-----------------|-----------------|-----------------|"

var introTabArray = introTab.split('');
//Pulling 4 bars for each string
firstFourHighE = introTabArray.slice(0,73);
firstFourB = introTabArray.slice(73, 146);
firstFourG = introTabArray.slice(146,219);
firstFourD = introTabArray.slice(219, 292);
firstFourA = introTabArray.slice(292, 365);
firstFourE = introTabArray.slice(365,438);

function removeStuff(array) {
	for (var i = 0; i < array.length; i++) {
		if (i % 2 === 1) {
			array.splice(i, 1, '?'); //Marks all '-' spaces to be removed later
		} 
		else if (i % 2 === 0) {
			if (array[i] == '-') {
				array.splice(i, 1, ' '); //Replaces all empty notes with an empty space
			}
		}
	}

	remove(array, '?');
	remove(array, '|');
	return array;
}

//Removes all instances from an array
function remove(arr, item) {
    for(var i = arr.length; i--;) {
        if(arr[i] === item) {
        	arr.splice(i, 1);
        }
    }
}

//HTML Builder
function buildARow(rowArray) {
	for (var i = 0; i < 1; i++) {
		switch(i) {
			case 0: rowClass = 'eStringHigh'; break;
			case 1: rowClass = 'bString'; break;
			case 2: rowClass = 'gString'; break;
			case 3: rowClass = 'dString'; break;
			case 4: rowClass = 'aString'; break;
			case 5: rowClass = 'eStringLow'; break;
		}
		var divRow = $('<div id="row" class="container-fluid no-gutter row string">')
		$('body').prepend(divRow);

		buildElements(splitIntoBars(rowArray));

	}
}

function splitIntoBars(rowArray) {
	debugger;
	var barsArray = []
	count = rowArray.length / 8;
	for (var i = 0; i < count; i++) {
		barsArray.push(rowArray.slice(0, 8))
		rowArray.splice(0, 8);
	}
	return barsArray;
}

function buildElements(barsArray) {
	for (var i = 0; i < ; i++) {
		currentBar = barsArray[1];
		debugger;
		newList	= $('<ul class="list-inline col-xs-3">').addClass(rowClass);
		index = 0;
		for (var j = 0; index < currentBar.length; j++) {
			value = currentBar[index];

			if (j % 2 === 0) {
				firstItem = $('<li class="col-xs-3">').append('<div class="col-xs-6"><p>'+value+'</p>');
				index++;
			} else {
				secondItem = $('<div class="col-xs-6">').html('<p>'+value+'</p>')
				firstItem.append(secondItem);
				index++;
			}
		}
	}
}









// num = 0;
// for (var i = 0; i < 50; i++) {
// 	num += 73;
// 	console.log(num)
// }


