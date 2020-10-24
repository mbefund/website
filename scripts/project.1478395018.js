var app = angular.module('trust', ['ngRoute']);

app.factory('NavigationLinks', function() {

	var Links = {};

	Links.main = [{
		uri: '#/',
		name: 'Home',
		id: 'home'
	},{
		uri: '#/donate',
		name: 'Fund Details',
		id: 'donate'
	},{
		uri: '#/documents/Schematic-of-Trusts',
		name: 'Trust Deeds and Documents',
		id: 'documents'
	}, {
		uri: '#/will',
		name: 'Will',
		id: 'will'
	}, {
		uri: '#/court-documents/2016-10-25-Tom-Donovan',
		name: 'Court Documents',
		id: 'court-documents'
	}, {
		uri: '#/150-years',
		name: '150 Years',
		id: '150years'
	},{
		uri: '#/imagery',
		name: 'Imagery',
		id: 'imagery'
	}];

	Links.trustDeeds = [{
		uri: '#/documents/Schematic-of-Trusts',
		name: 'Schematic of Trusts',
		id: 'schem'
	}, {
		uri: '#/documents/1892-Deed-of-Trust',
		name: '1892 Deed of Trust',
		id: '1892'
	}, {
		uri: '#/documents/1898-Deed-of-Trust-publishing-society',
		name: '1898 Deed of Trust - The Christian Science Publishing Society',
		id: '1898publishing'
	}, {
		uri: '#/documents/1903-Deed-of-Trust',
		name: '1903 Deed of Trust',
		id: '1903'
	}, {
		uri: '#/documents/1903-Providential-Deed',
		name: '1903 Deed of Trust - Providential Deed',
		id: '1903providential'
	},{
		uri: '#/documents/1904-Deed-of-Trust',
		name: '1904 Deed of Trust',
		id: '1904'
	}, {
		uri: '#/documents/1905-Deed-of-Trust',
		name: '1905 Deed of Trust',
		id: '1905'
	}, {
		uri: '#/documents/1906-Deed-of-Trust',
		name: '1906 Deed of Trust',
		id: '1906'
	}, {
		uri: '#/documents/1907-Deed-of-Trust',
		name: '1907 Deed of Trust and Performance Bond',
		id: '1907'
	}, {
		uri: '/assets/1907 Deed of trust for Copyrights.pdf',
		name: '1907 Deed of Trust for Copyrights',
		id: '1907copyrights'
	}, {
		uri: '#/documents/1908-Supplementary-Property-Trust-Deed',
		name: '1908 Supplementary Property Trust Deed',
		id: '1908'
	}];

	Links.otherWritings = [{
		uri: '#/documents/Archival-Letters',
		name: 'Archival Letters by Mary Baker Eddy',
		id: 'letters'
	}, {
		uri: '#/documents/Duties-of-Church-Officers',
		name: 'Duties of Church Officers (Church Manual Article I, Section 9)',
		id: 'duties'
	}];

	Links.other = [{
        uri: '#/documents/1913-CSS-Appt-Trustees-MBE',
        name: '1913 Court Appointment of Trustees u/w MBE',
        id: '1913-css-appt-trustees-mbe'
    }, {
        uri: '#/documents/1914-Purpose-Clause-8-Trust-MBE',
        name: '1914 Purpose Clause 8 Trust u/w MBE',
        id: '1914-purpose-lause-8-trust'
    }, {
		uri: '#/documents/Fernald-Decision',
		name: 'Fernald Decision',
		id: 'fernald'
	}, {
		uri: '/assets/The Banner Vol.30 No.3 Spring 2017.pdf',
		name: 'The Banner Vol.30 No.3 Spring 2017',
		id: 'banner6'
	}
		//{
		//	uri: '#/documents/Banner-vol27-no1',
		//	name: 'The Banner Vol 27 No 1 (2013)',
		//	id: 'banner'
		//}, {
		// uri: '#/documents/Banner-vol28-no2',
		// name: 'The Banner Vol 28 No 2 (2015)',
		// id: 'banner2'
		//}, {
		// uri: '#/documents/Banner-vol28-no3',
		// name: 'The Banner Vol 28 No 3 (2015)',
		// id: 'banner3'
		//}, {
		//	uri: '#/documents/Banner-vol29-no2',
		//	name: 'The Banner Vol 29 No 2 (2016)',
		//	id: 'banner4'
		//}
		// , {
		// 	uri: '#/documents/Banner-vol30-no1',
		// 	name: 'The Banner Vol 30 No 1 (2016)',
		// 	id: 'banner5'
		// }
	];

	Links.courtDocuments = [{
		uri: '#/court-documents/2016-10-25-Tom-Donovan',
		name: '2016-10-25 Tom Donovan Letter to the Trustees Under the Will of Mary Baker Eddy',
		id: '2016-10-25-tom-donovan'
	}];

	return Links;
});


app.config( [ '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			id: 'home',
			parent: ''
		})
		.when('/donate', {
			templateUrl: 'partials/donate.html',
			id: 'donate',
			parent: ''
		})
		.when('/will', {
			templateUrl: 'partials/will.html',
			id: 'will',
			parent: ''
		})
		// .when('/court-documents', {
		// 	templateUrl: 'partials/2016-10-25-tom-donovan.html',
		// 	id: 'court-documents',
		// 	parent: ''
		// })
		.when('/150-years', {
			templateUrl: 'partials/150years.html',
			id: '150years',
			parent: ''
		})
		.when('/imagery', {
			templateUrl: 'partials/imagery.html',
			id: 'imagery',
			parent: ''
		})
		.when('/documents/Schematic-of-Trusts', {
			templateUrl: 'partials/Schematic-of-Trusts.html',
			id: 'schem',
			parent: 'documents'
		})
		.when('/documents/1892-Deed-of-Trust', {
			templateUrl: 'partials/1892.html',
			id: '1892',
			parent: 'documents'
		})
		.when('/documents/1898-Deed-of-Trust-publishing-society', {
			templateUrl: 'partials/1898publishing.html',
			id: '1898publishing',
			parent: 'documents'
		})
		.when('/documents/1903-Deed-of-Trust', {
			templateUrl: 'partials/1903.html',
			id: '1903',
			parent: 'documents'
		})
		.when('/documents/1903-Providential-Deed', {
			templateUrl: 'partials/1903providential.html',
			id: '1903providential',
			parent: 'documents'
		})
		.when('/documents/1904-Deed-of-Trust', {
			templateUrl: 'partials/1904.html',
			id: '1904',
			parent: 'documents'
		})
		.when('/documents/1905-Deed-of-Trust', {
			templateUrl: 'partials/1905.html',
			id: '1905',
			parent: 'documents'
		})
		.when('/documents/1906-Deed-of-Trust', {
			templateUrl: 'partials/1906.html',
			id: '1906',
			parent: 'documents'
		})
		.when('/documents/1907-Deed-of-Trust', {
			templateUrl: 'partials/1907.html',
			id: '1907',
			parent: 'documents'
		})
		.when('/documents/1908-Supplementary-Property-Trust-Deed', {
			templateUrl: 'partials/1908.html',
			id: '1908',
			parent: 'documents'
		})
		.when('/documents/Archival-Letters', {
			templateUrl: 'partials/letters.html',
			id: 'letters',
			parent: 'documents'
		})
		.when('/documents/Duties-of-Church-Officers', {
			templateUrl: 'partials/duties.html',
			id: 'duties',
			parent: 'documents'
		})
		.when('/documents/Fernald-Decision', {
			templateUrl: 'partials/fernald.html',
			id: 'fernald',
			parent: 'documents'
		})
		.when('/court-documents/2016-10-25-Tom-Donovan', {
			templateUrl: 'partials/2016-10-25-tom-donovan.html',
			id: '2016-10-25-tom-donovan',
			parent: 'court-documents'
		})
		.when('/documents/1914-Purpose-Clause-8-Trust-MBE', {
			templateUrl: 'partials/1914-purpose-clause-8-trust.html',
			id: '1914-purpose-lause-8-trust',
			parent: 'documents'
		})
        .when('/documents/1913-CSS-Appt-Trustees-MBE', {
            templateUrl: 'partials/1913-css-appt-trustees-mbe.html',
            id: '1913-css-appt-trustees-mbe',
            parent: 'documents'
        })
		//.when('/documents/Banner-vol27-no1', {
		//	templateUrl: 'partials/banner.html',
		//	id: 'banner',
		//	parent: 'documents'
		//})
		//.when('/documents/Banner-vol28-no2', {
		// templateUrl: 'partials/banner2.html',
		// id: 'banner2',
		// parent: 'documents'
		//})
		//.when('/documents/Banner-vol28-no3', {
		// templateUrl: 'partials/banner3.html',
		// id: 'banner3',
		// parent: 'documents'
		//})
		//.when('/documents/Banner-vol29-no2', {
		//	templateUrl: 'partials/banner4.html',
		//	id: 'banner4',
		//	parent: 'documents'
		//})
		// .when('/documents/Banner-vol30-no1', {
		// 	templateUrl: 'partials/banner5.html',
		// 	id: 'banner5',
		// 	parent: 'documents'
		// })
		.otherwise({
			templateUrl: 'partials/404.html'
		});
}]);


app.controller("PageController", [ '$scope', '$route', '$routeParams', 'NavigationLinks', function($scope, $route, $routeParams, NavigationLinks) {
	$scope.$route = $route;

	// console.log($scope.$route.current.parent);

	$scope.main = NavigationLinks.main;

	$scope.introduction = NavigationLinks.introduction;
	$scope.trustDeeds = NavigationLinks.trustDeeds;
	$scope.courtDocuments = NavigationLinks.courtDocuments;
	$scope.otherWritings = NavigationLinks.otherWritings;
	$scope.others = NavigationLinks.other;


	$scope.$on('$routeChangeStart', function() {
		window.scrollTo(0,0);
	});




}]);








app.directive( 'navigation', [ function() {
	return {
		link: function( scope, element, attrs) {

			function ObjectPosition(obj) {
				var curleft = 0;
				var curtop = 0;
				if (obj.offsetParent) {
					do {
						curleft += obj.offsetLeft;
						curtop += obj.offsetTop;
					} while (obj = obj.offsetParent);
				}
				return [curleft,curtop];
			}

			var loc = ObjectPosition( element[0] );

			var check = function() {
				var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
				if ( scrollTop > loc[1] ){

					scope.$apply( function() {
						scope.padding = (loc[1] - pageYOffset)*-1 + 'px';
					});
				}
				else {
					scope.$apply( function() {
						scope.padding = '0px';
					});
				}
			};

			angular.element( window ).bind( "scroll", function() {
				check();
			});
		}
	}
}]);




app.directive( 'subnav', [ function() {
	return {
		templateUrl: 'partials/subnav.html',
		replace: true
	}
}]);







app.run( [ '$document', function( $document ) {
	var element = $document[0].createElement('div');
	element.setAttribute('data-totop','');
	element.setAttribute('id','totop');
	element.setAttribute('data-ng-show','visible');
	var body = $document[0].getElementsByTagName('body')[0];
	body.appendChild(element);
}]);

app.directive( 'totop', [ function() {
	return {
		template: '<span>top</span>',
		link: function( scope, element, attrs ) {

			scope.visible = false;
			var windowHeight = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

			angular.element( window ).bind( 'scroll', function() {

				var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

				if( scrollTop > ( windowHeight / 2 ) ) {
					scope.$apply( function() {
						scope.visible = true;
					});
				}
				else {
					scope.$apply( function() {
						scope.visible = false;
					});
				}
			});

			angular.element( element ).bind( 'click', function() {
				window.scrollTo(0,0);
			});

		}
	}
}]);

