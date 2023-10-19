async function shortURL() {
  //  const regexID =  /^(https:\/\/[a-z]+\.[a-z]+\/[a-zA-Z0-9\%\-\()]+)\.(\d{1,})\.(\d{1,})([\?a-zA-z0-9\-\=\&]+)?$/; 
		const regexID =  /\.([0-9]{1,})\.(\d{1,})/;
		const id = document.getElementById('url').value;
		const error = document.getElementById('result');
    let link_chua_rut_gon;
		let result = id.match(regexID);
		if (result !== null && result[1] != "undefined" && result[2] != "undefined" )
		{
			error.innerHTML = '';
    // document.getElementById("result1").innerHTML = (`https://shopee.vn/product/${result[2]}\/${result[3]}\?utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_17377610055`);
		document.getElementById('result2').innerHTML = id;	
    document.getElementById("result1").innerHTML = (`https://shopee.vn/product/${result[1]}\/${result[2]}\?utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_17377610055`);
      link_chua_rut_gon = document.getElementById('result1').innerHTML;
		}
		else
		{
			error.innerHTML = 'Link không hợp lệ!';
			
		}
    const Url = link_chua_rut_gon;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`);
    if (response.ok) {
        const data = await response.text();
        document.getElementById('result').innerHTML = `Link rút gọn : <a type="url" href="${data }" target="_blank">${data}</a>`;
        document.getElementById('url').value = ""; 
    }
    else{
        document.getElementById('result').innerHTML = "Error shortening"
    }

}