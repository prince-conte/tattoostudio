    // Создает обработчик события window.onLoad
    YMaps.jQuery(function () {
        // Создает экземпляр карты и привязывает его к созданному контейнеру
        var map = new YMaps.Map(YMaps.jQuery("#mapblock")[0]);
            
        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
        map.setCenter(new YMaps.GeoPoint(37.589920, 55.653888), 17);
        
      
map.addControl(new YMaps.TypeControl());
map.addControl(new YMaps.ToolBar());
map.addControl(new YMaps.Zoom());
map.addControl(new YMaps.ScaleLine());        
   
        
        
// Создает стиль
var s = new YMaps.Style();

// Создает стиль значка метки
s.iconStyle = new YMaps.IconStyle();
        

s.iconStyle.href = "static/img/general/metka.png";
s.iconStyle.size = new YMaps.Point(54, 64);
s.iconStyle.offset = new YMaps.Point(-109, -95);     
        
        
// Создает метку в центре Москвы
var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.595117, 55.653279) , {
    style: s});
        
placemark.setBalloonContent("<b>Школа татуажа Елены Нечаевой</b>");
    
        
  
        
// Добавляет метку на карту
map.addOverlay(placemark);  
        
        
    })
    