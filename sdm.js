var Table = [];
var locationTable = [];


function sdbm(id){
    let hash = 0;

	for (let i = 0; i < id.length; i++) {
		hash = id.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
	}

	return (hash >>> 0).toString(16);
}

