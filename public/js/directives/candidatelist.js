
// app.directive('candidatelist', function(){
// 	return {
// 		scope: '',
// 		elem:
// 		attrs:
// 		templateUrl:
// 	};
// })

// <ul dnd-list="list">
//     <!-- The dnd-draggable directive makes an element draggable and will
//          transfer the object that was assigned to it. If an element was
//          dragged away, you have to remove it from the original list
//          yourself using the dnd-moved attribute -->
//     <li ng-repeat="item in list"
//         dnd-draggable="item"
//         dnd-moved="list.splice($index, 1)"
//         dnd-effect-allowed="move"
//         dnd-selected="models.selected = item"
//         ng-class="{'selected': models.selected === item}"
//         >
//         {{item.label}}
//     </li>
// </ul>

app.directive('candidate', function(){
	return {
		template: '<h4>{{ c.displayName }}</h4>' +
			'<p>{{ c.email }}, {{ c.phone }}</p>' +
			'<p>{{ c.comments }}</p>'
	};
})