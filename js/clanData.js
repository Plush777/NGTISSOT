$(function(){

    //장로
    let elderData = [
        {
            "player01": "인행아빠 (#88YLO88UV)"
        }
    ]

    let elderPrintData = function(elderData){
		let html = '';

		for(let i=0; i<elderData.length; i++){
			html += `
						<tr>
							<td>${elderData[i].player01}</td>
						</tr>
					`;
		}

		$('.elderTable').html(html);
	}

	elderPrintData(elderData);


    //대표
    let readerData = [
        {
            "player01": "[1대 대표] Mc queen (#8CLRRCU0)",
            "player02": "[2대 대표] P1ush (#808RR889U)",
            "player03": "[3대 대표] 은하 (#2GVCPJ2J)",
            "player04": "[부대표]  랍챱 (#G8CPCGC2)",
        }
    ]

    let readerPrintData = function(readerData){
		let html = '';

		for(let i=0; i<readerData.length; i++){
			html += `
						<tr>
							<td class="dodger-blue alabaster">${readerData[i].player01}</td>
						</tr>
						<tr>
							<td class="dodger-blue">${readerData[i].player02}</td>
						</tr>
						<tr>
							<td class="dodger-blue">${readerData[i].player03}</td>
						</tr>
						<tr>
							<td class="dodger-blue">${readerData[i].player04}</td>
						</tr>
					`;
		}

		$('.readerTable').html(html);
	}

	readerPrintData(readerData);

    //공동대표
	let coReaderData = [
		{
			"player01": "동탄 사우나 수건도둑 엄준식 (#8LUQQCPQ)",
			"player02": "달님 (#8P28VJVP9)",
			"player03": "송언 (#YYCVYUVUG)",
			"player04": "meya (#2QVYYPJ8U)",
			"player05": "Jun CR (#80QCC98J)"
		},
	];

	let coReaderPrintData = function(coReaderData){
		let html = '';

		for(let i=0; i<coReaderData.length; i++){
			html += `
						<tr>
							<td class="dodger-blue alabaster">${coReaderData[i].player01}</td>
						</tr>
						<tr>
							<td class="dodger-blue">${coReaderData[i].player02}</td>
						</tr>
						<tr>
							<td class="dodger-blue">${coReaderData[i].player03}</td>
						</tr>
						<tr>
							<td class="dodger-blue">${coReaderData[i].player04}</td>
						</tr>
						<tr>
							<td class="dodger-blue">${coReaderData[i].player05}</td>
						</tr>
					`;
		}

		$('.coReaderTable').html(html);
	}

	coReaderPrintData(coReaderData);
});