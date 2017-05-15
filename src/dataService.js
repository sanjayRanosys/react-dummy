import 'whatwg-fetch';

class DataService {
    static fetchData(url, next) {
        fetch(url)
        .then(function(response) {
        	console.log('response', response)
            next(response.json());
        });
        /*.then(function(json) {
            console.log('parsed json', json)
            //return json;
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })*/
        //return 'Fetch Data test123';
    }

    static saveData(url, data, next) {
    	fetch(url, {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(data)
		})
		.then(function(response) {
			console.log('post data', response);
			next(response.json())
		})
        return 'Post Data';
    }

    static deleteData(url, data, next) {
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(function(response) {
            console.log('post data', response);
            next(response.json())
        })
        return 'Post Data';
    }
}

export default DataService;
