		 $(document).ready(function() {
			$("#map").gMap({
				controls: true,
				scrollwheel: false,
				maptype: 'ROADMAP',
				markers: [
					{
						address: 'Jalan Terusan Jakarta, Bandung City, West Java 40291',
						html: '<i class="fa fa-rocket text-center"></i> <p>Jalan Terusan Jakarta, Bandung City, West Java 40291</p><p>+62 123-456-7890</p>',
						popup: true
					}
						],
				icon: {
				image: "assets/img/marker.png", 
				iconsize: [26, 46],
				iconanchor: [12, 46]
			},

				zoom: 12
			});

         });