
function getIndexes() {
	var collections = [];

	function getter (url) {
		$.get(url, function( data ) {
			data.results.forEach(function(c) {
				if (c.scanned_index_ls4_links && c.scanned_index_ls4_links !== "") {
					var linkList = JSON.parse("[" + c.scanned_index_ls4_links + "]");
					linkList.forEach(function(l) {
						l.county = c.counties;
						l.agency = c.source_abbreviation;
						collections.push(l);
					});
				}
			});

			if (data.next !== null) {
				getter(data.next);
			}
			else {
				function compare(a,b) {
					// sort by county first
				  if (a.county < b.county)
				    return -1;
				  if (a.county > b.county)
				    return 1;
					// then sort by year
					if (a.year < b.year)
				    return -1;
				  if (a.year > b.year)
				    return 1;
					// then sort by sheet
					if (parseInt(a.sheet) < parseInt(b.sheet))
				    return -1;
				  if (parseInt(a.sheet) > parseInt(b.sheet))
				    return 1;
				  return 0;
				}

				collections.sort(compare);

				$("#indexes-loading").remove();
				var template = '<tr><td>__county__</td><td>__agency__</td><td>__year__</td><td>__sheet__</td><td>__size__</td><td><a href="__link__">Download</a></td></tr>';

				collections.forEach(function (c) {
					var record = template.replace("__county__", c.county).replace(/__agency__/g, c.agency).replace(/__year__/g, c.year).replace(/__sheet__/g, c.sheet).replace(/__size__/g, c.size).replace(/__link__/g, c.link);
					$("#mapserver-indexes-tbody:last-child").append(record);
				});

				$("#myInput").on("keyup", function() {
			    var value = $(this).val().toLowerCase();
			    $("#mapserver-indexes-tbody tr").filter(function() {
			      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			    });
			  });
			}
		});
	}

	getter('https://api.tnris.org/api/v1/historical/collections');
}

function getMapfiles() {
	var collections = [];

	function titleCase(str) {
		str = str.split(' ');
		for (var i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		return str.join(' ');
	  }

	function getter (url) {
		$.get(url, function( data ) {
			data.results.forEach(function(c) {
				if (c.index_service_url && c.index_service_url !== "") {
					collections.push({
						wms: c.index_service_url,
						label: titleCase(c.index_service_url.split("/")[c.index_service_url.split("/").length - 1].replace(".map","").replace(/_/g, " "))
					});
				}
			});

			if (data.next !== null) {
				getter(data.next);
			}
			else {
				function compare(a,b) {
					if (a.label < b.label)
						return -1;
					if (a.label > b.label)
						return 1;
					return 0;
				}

				collections.sort(compare);
				collections.forEach(function (i) {
					var template = '<tr><td class="col-md-4">__label__</td><td class="col-md-8"><div class="input-group copy-url-container" style="width:100%;"><span class="input-group-btn"><button class="btn btn-tnris copy-url-btn" type="button" style="margin-top:0;"><i class="fa fa-clipboard"></i> Copy URL</button></span><input class="wms-url copy-url-input form-control" type="text" readonly value="__wms__"></div></td></tr>';
					var service =  template.replace("__label__", i.label).replace(/__wms__/g, i.wms);
					$("#mapserver-services-tbody:last-child").append(service);
				})
			}
		});
	}

	getter('https://api.tnris.org/api/v1/historical/collections');
}

$(document).ready(getIndexes());
$(document).ready(getMapfiles());
