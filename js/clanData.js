$(function(){
	//대표
	let readerData = [
		{
			'player01': '[1대 대표] Mc queen (#8CLRRCU0)',
			'player02': '[2대 대표] P1ush (#808RR889U)',
			'player03': '[3대 대표] 은하 (#2GVCPJ2J)',
			'player04': '[부대표]  랍챱 (#G8CPCGC2)',
		}
	];

	let readerPrintData = function(readerData){
		let html = '';

		for(let i=0; i<readerData.length; i++){
			html += `
						<tr>
							<td><p>${readerData[i].player01}</p></td>
						</tr>
						<tr>
							<td><p>${readerData[i].player02}</p></td>
						</tr>
						<tr>
							<td><p>${readerData[i].player03}</p></td>
						</tr>
						<tr>
							<td><p>${readerData[i].player04}</p></td>
						</tr>
					`;
		}

		$('.readerTable').html(html);
	};

	readerPrintData(readerData);

	//공동대표
	let coReaderData = [
		{
			'player01': '동탄 사우나 수건도둑 엄준식 (#8LUQQCPQ)',
			'player02': '달님 (#8P28VJVP9)',
			'player03': '송언 (#YYCVYUVUG)',
			'player04': 'meya (#2QVYYPJ8U)',
			'player05': 'Jun CR (#80QCC98J)'
		},
	]; 

	let coReaderPrintData = function(coReaderData){
		let html = '';

		for(let i=0; i<coReaderData.length; i++){
			html += `
						<tr>
							<td><p>${coReaderData[i].player01}</p></td>
						</tr>
						<tr>
							<td><p>${coReaderData[i].player02}</p></td>
						</tr>
						<tr>
							<td><p>${coReaderData[i].player03}</p></td>
						</tr>
						<tr>
							<td><p>${coReaderData[i].player04}</p></td>
						</tr>
						<tr>
							<td><p>${coReaderData[i].player05}</p></td>
						</tr>
					`;
		}

		$('.coReaderTable').html(html);
	};

	coReaderPrintData(coReaderData);
});