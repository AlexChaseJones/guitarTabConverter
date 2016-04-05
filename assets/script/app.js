var introTab = "|-----------------|-----------------|-----------------|-----------------||-1---------1-----|-0---------0-----|-3---------0-----|-1---------1-----||-------0-------0-|-------0-------0-|-------0-------0-|-------0-------0-||-----2-------2---|-----2-------2---|-----2-------2---|-----2-------2---||-3-------3-------|-3-------3-------|-3-------3-------|-3-------3-------||-----------------|-----------------|-----------------|-----------------||-----------------|-----------------|-----------------|-----------------||-0---------0-----|-3---------3-----|-1---------1-----|-0---------0-----||-------2-------2-|-------2-------2-|-------2-------2-|-------2-------2-||-----2-------2---|-----2-------2---|-----2-------2---|-----2-------2---||-0-------0-------|-0-------0-------|-0-------0-------|-0-------0-------||-----------------|-----------------|-----------------|-----------------||-----------------|-----------------|-----------------|-----------------||-3---------3-----|-1---------1-----|-0---------0-----|-3---------3-----||-------0-------0-|-------0-------0-|-------0-------0-|-------0-------0-||-----2-------2---|-----2-------2---|-----2-------2---|-----2-------2---||-3-------3-------|-3-------3-------|-3-------3-------|-3-------3-------||-----------------|-----------------|-----------------|-----------------||-----------------|-----------------|-----------------|-----------------||-1---------1-----|-0---------0-----|-3---------3-----|-1---------------||-------2-------2-|-------2-------2-|-------2-------2-|-------2---------||-----2-------2---|-----2-------2---|-----2-------2---|-----2-----------||-0-------0-------|-0-------0-------|-0-------0-------|-0-------0---2---||-----------------|-----------------|-----------------|-----------------|"

var introTabArray = introTab.split('');
var slicedArray = [];
var y = 0;
var switchCount = 0;

//Pulling 4 bars for each string
for (var i = 0; i < introTabArray.length; i+=73) {
	slicedArray.push(introTabArray.slice(i, (i+73)))
}

function removeStuff(arrayOfArrays) {
	for (var i = 0; i < arrayOfArrays.length; i++) {
		currentArray = arrayOfArrays[i];

		for (var j = 0; j < currentArray.length; j++) {
			if (j % 2 === 1) {
				currentArray.splice(j, 1, '?'); //Marks all '-' spaces to be removed later
			} 
			else if (j % 2 === 0) {
				if (currentArray[j] == '-') {
					currentArray.splice(j, 1, ' '); //Replaces all empty notes with an empty space
				}
			}
		}
		remove(currentArray, '?');
		remove(currentArray, '|');
	}

	for (var i = 0; i < arrayOfArrays.length; i++) {
		switchCount++;
		buildARow(arrayOfArrays[i])
	}
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
		var divRow = $('<div id="row'+y+'" class="container-fluid no-gutter row string">')
		$('body').append(divRow);

		buildElements(splitIntoBars(rowArray));
}

function splitIntoBars(rowArray) {

	var barsArray = []
	count = rowArray.length / 8;
	for (var i = 0; i < count; i++) {
		barsArray.push(rowArray.slice(0, 8))
		rowArray.splice(0, 8);
	}
	return barsArray;
}

function buildElements(barsArray) {

	for (var i = 0; i < barsArray.length; i++) {
		switch(switchCount) {
			case 1: rowClass = 'eStringHigh'; break;
			case 2: rowClass = 'bString'; break;
			case 3: rowClass = 'gString'; break;
			case 4: rowClass = 'dString'; break;
			case 5: rowClass = 'aString'; break;
			case 6: rowClass = 'eStringLow'; switchCount = 0; break;
		}
		currentBar = barsArray[i];
		debugger;
		newList	= $('<ul class="list-inline col-xs-3">').addClass(rowClass);
		for (var j = 0; j < currentBar.length; j++) {
			value = currentBar[j];

			if (j % 2 === 0) {
				firstItem = $('<li class="col-xs-3">').append('<div class="col-xs-6"><p>'+value+'</p>');
			} else {
				secondItem = $('<div class="col-xs-6">').html('<p>'+value+'</p>')
				firstItem.append(secondItem);
				newList.append(firstItem);
				$('#row'+y).append(newList);
			}
		}
	}
	y++;
}







// num = 0;
// for (var i = 0; i < 50; i++) {
// 	num += 73;
// 	console.log(num)
// }


