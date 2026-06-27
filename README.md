# Vapur - İstanbul Şehir Hatları İnteraktif Sefer Haritası

Vapur, İstanbul'un eşsiz Boğaziçi, Haliç ve Marmara Denizi üzerinde hizmet veren Şehir Hatları vapur seferlerini görselleştiren interaktif bir harita uygulamasıdır. Kullanıcılar, istedikleri iskeleleri arayabilir, hatları filtreleyebilir ve İstanbul'un tüm vapur ağını detaylı bir şekilde inceleyebilir.

## Özellikler

- **İnteraktif Harita:** Leaflet.js altyapısı ile akıcı ve detaylı harita deneyimi.
- **Dinamik Rotalama:** Vapur rotaları karaya çarpmayacak şekilde, Boğaz'ın tam ortasından pürüzsüz kavislerle akacak şekilde özel algoritmalarla hesaplanıp çizilmiştir.
- **Hat Filtreleme:** Sol menü üzerinden Şehir Hatları, Boğaz Hatları ve Adalar Hatları kategorilerindeki seferler ayrı ayrı gösterilip gizlenebilir.
- **İskele Arama:** Sağ üstteki arama çubuğu üzerinden doğrudan iskele adıyla arama yapıp haritada konumuna hızlıca gidilebilir.
- **Mobil Uyumluluk:** Responsive tasarım sayesinde hem masaüstü hem de mobil cihazlarda kusursuz görünüm.

## Kullanılan Teknolojiler

- **HTML5, CSS3, JavaScript (Vanilla)**
- **Leaflet.js:** Harita çizimi ve etkileşimleri için.
- **OpenStreetMap & CARTO:** Harita altlıkları (basemaps) için.

## Kurulum ve Çalıştırma

Projede herhangi bir derleyici (build tool) veya sunucu tarafı bir dil kullanılmamıştır. Projeyi çalıştırmak için:

1. Repoyu bilgisayarınıza indirin veya klonlayın:
   ```bash
   git clone https://github.com/teomankerki/vapur.git
   ```
2. İndirdiğiniz klasöre gidin ve doğrudan `index.html` dosyasını tarayıcınızda açın.
3. Veya daha iyi bir deneyim için [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) gibi basit bir yerel sunucu eklentisi kullanarak projeyi çalıştırın.

## Lisans

Bu proje kişisel kullanım ve eğitim amaçlıdır. İstanbul Şehir Hatları verileri referans alınarak oluşturulmuştur.
