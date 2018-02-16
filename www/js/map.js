// map.js

(function() {
    var app = angular.module('myApp', ['onsen']);

    //和味亭
    
    //Map controller
    app.controller('MapController', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.871498, 138.318926);
            var map = new google.maps.Map(document.getElementById('map_canvas'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //麺屋才蔵
    
    //Map controller
    app.controller('MapController2', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.843148, 138.311527);
            var map = new google.maps.Map(document.getElementById('map_canvas2'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //ぽんぷ
    
    //Map controller
    app.controller('MapController3', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.839715, 138.318168);
            var map = new google.maps.Map(document.getElementById('map_canvas3'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //ちっきん
    
    //Map controller
    app.controller('MapController4', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.872928, 138.277695);
            var map = new google.maps.Map(document.getElementById('map_canvas4'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //とうそん藤枝店
    
    //Map controller
    app.controller('MapController5', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.847567, 138.261545);
            var map = new google.maps.Map(document.getElementById('map_canvas5'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //虎徹
    
    //Map controller
    app.controller('MapController6', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.854069, 138.254925);
            var map = new google.maps.Map(document.getElementById('map_canvas6'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //ラーメン ル・デッサン
    
    //Map controller
    app.controller('MapController7', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.835502, 138.194329);
            var map = new google.maps.Map(document.getElementById('map_canvas7'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //いっこう
    
    //Map controller
    app.controller('MapController8', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.836347, 138.18671);
            var map = new google.maps.Map(document.getElementById('map_canvas8'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //まごころ
    
    //Map controller
    app.controller('MapController9', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.874655, 138.274743);
            var map = new google.maps.Map(document.getElementById('map_canvas9'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //麺屋 燕
    
    //Map controller
    app.controller('MapController10', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.835575, 138.190212);
            var map = new google.maps.Map(document.getElementById('map_canvas10'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //麺屋よかたい
    
    //Map controller
    app.controller('MapController11', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.832667, 138.174064);
            var map = new google.maps.Map(document.getElementById('map_canvas11'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //来来亭 藤枝店
    
    //Map controller
    app.controller('MapController12', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.855035, 138.260406);
            var map = new google.maps.Map(document.getElementById('map_canvas12'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
    //カナキン亭本舗 藤枝店
    
    //Map controller
    app.controller('MapController13', function($timeout){
          
        //Map initialization  
        $timeout(function(){
      
            var latlng = new google.maps.LatLng(34.849808, 138.25014);
            var map = new google.maps.Map(document.getElementById('map_canvas13'), {
                zoom: 19,
                center: latlng,
            });
            
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
            });
        },100);
    });
    
})();
