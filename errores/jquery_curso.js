$(document).ready(function(){
			$(".boton1").click(function(){
				alert($(".cuadrado").width())
			})

			$(".boton2").click(function(){
				alert($(".cuadrado").height())
			})

			$(".boton3").click(function(){
				alert($(".cuadrado").innerWidth())
			})

			$(".boton4").click(function(){
				alert($(".cuadrado").innerHeight())
			})

			$(".boton5").click(function(){
				alert($(".cuadrado").outerWidth())
			})

			$(".boton6").click(function(){
				alert($(".cuadrado").outerHeight())
			})
	})	