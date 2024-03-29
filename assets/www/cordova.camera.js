var pictureSource;
var destinationType;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	pictureSource   = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData){
	//alert(imageData);
	//var smallImage = document.getElementById('smallImage');
	smallImage.style.display = 'block';
	smallImage.src = "data:image/jpeg;base64," +imageData;
	document.getElementById('imageURL').value =smallImage.src ; 

}

function onPhotoURISuccess(imageURI){
	var largeImage = document.getElementById('largeImage');
	largeImage.style.display = 'block';
	largeImage.src = imageURI;
}
function capturePhoto(){
	onDeviceReady();
	navigator.camera.getPicture(onPhotoDataSuccess, onFail,{
		quality : 50,
		destinationType : destinationType.DATA_URL
	});
}
function capturePhotoEdit(){
	navigator.camera.getPicture(onPhotoURISuccess, onFail, {
		quality : 20,
		allowEdit : true,
		destinationType : destinationType.DATA_URL
	});
}

function getPhoto(source){
	navigator.camera.getPicture(onPhotoURISuccess, onFail, {
		quality : 50,
		destinationType : destinationType.FILE_URI,
		sourceType : source
	});
}
function onFail(message){
	alert('failed because '+message);
}