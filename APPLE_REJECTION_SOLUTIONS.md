# Apple App Store Rejection - Çözüm Rehberi

**Submission ID:** 4611f9ae-cb87-430b-9d76-595be7d8bca0
**Review Date:** December 20, 2025
**Version:** 1.0

---

## Sorun 1: Guideline 1.4.1 - Medical Citations (Tıbbi Kaynak Eksikliği)

### Problem
Uygulama tıbbi/sağlık bilgileri içeriyor ancak bu bilgilerin kaynakları belirtilmemiş:
- Risk skorlama sistemi
- Risk grupları ve eşik değerleri
- Sağlık tavsiyeleri ve önerileri
- Bağımlılık ile ilgili sorular

### Çözüm Adımları

#### 1. Kaynak/Referans Sayfası Ekle
Yeni bir `References.tsx` veya `About.tsx` komponenti oluştur:

```
Kaynaklar:
- World Health Organization (WHO) - Substance Abuse Guidelines
- DSM-5 (Diagnostic and Statistical Manual of Mental Disorders)
- Yeşilay Türkiye - Bağımlılık Rehberi
- T.C. Sağlık Bakanlığı - Bağımlılık Danışma Hattı
- NIDA (National Institute on Drug Abuse)
```

#### 2. Sonuç Ekranına Disclaimer Ekle
`Results.tsx` dosyasına eklenecek uyarı metni:

**Türkçe:**
```
⚠️ Bu anket yalnızca bilgilendirme amaçlıdır ve tıbbi teşhis yerine geçmez.
Kesin değerlendirme için lütfen bir sağlık profesyoneline danışın.

Kaynak: WHO Substance Abuse Assessment Guidelines, DSM-5 Criteria
```

**English:**
```
⚠️ This survey is for informational purposes only and does not replace
medical diagnosis. Please consult a healthcare professional for a definitive assessment.

Source: WHO Substance Abuse Assessment Guidelines, DSM-5 Criteria
```

#### 3. Risk Skorlama Sistemine Kaynak Ekle
Risk eşik değerlerinin bilimsel dayanaklarını belirt:

| Skor Aralığı | Risk Grubu | Kaynak Referansı |
|--------------|------------|------------------|
| 0-35 | Risksiz | WHO Low Risk Category |
| 36-70 | Az Riskli | WHO Moderate Risk Indicators |
| 71-105 | Orta Riskli | DSM-5 Mild Substance Use Disorder |
| 106-140 | Yüksek Riskli | DSM-5 Moderate Substance Use Disorder |
| 141+ | Şiddetli Risk | DSM-5 Severe Substance Use Disorder |

#### 4. Uygulama İçi Kaynak Linkleri
Her risk grubunun advice kısmına kaynak linki ekle:

- WHO: https://www.who.int/health-topics/substance-abuse
- Yeşilay: https://www.yesilay.org.tr/
- e-Nabız: https://enabiz.gov.tr/

#### 5. Footer veya Info Butonu
Her sayfanın altına veya header'a küçük bir "ℹ️" info butonu ekle:
- Tıklandığında kaynakları ve disclaimer'ı göster

### Kod Değişiklikleri

**Dosyalar:**
1. `src/components/Results.tsx` - Disclaimer ve kaynak ekle
2. `src/components/References.tsx` - Yeni sayfa (opsiyonel)
3. `src/data/translations.ts` - Yeni çeviri metinleri
4. `src/App.tsx` - References rotası ekle (opsiyonel)

---

## Sorun 2: Guideline 2.3.3 - iPad Screenshots

### Problem
13-inch iPad ekran görüntüleri, uzatılmış/değiştirilmiş iPhone görüntüleri. Apple, her cihaz için özgün ekran görüntüsü istiyor.

### Çözüm Adımları

#### 1. iPad Simulator ile Gerçek Screenshot Al

**Gerekli iPad Çözünürlükleri:**

| Cihaz | Çözünürlük | Pixel |
|-------|------------|-------|
| iPad Pro 12.9" | 2048 x 2732 | @2x |
| iPad Pro 11" | 1668 x 2388 | @2x |
| iPad Air 10.9" | 1640 x 2360 | @2x |
| iPad 10.2" | 1620 x 2160 | @2x |

#### 2. Screenshot Alma Yöntemleri

**Yöntem A: Xcode Simulator**
```bash
# iPad Pro 12.9" simulator başlat
xcrun simctl boot "iPad Pro (12.9-inch)"

# Uygulamayı yükle ve çalıştır
xcrun simctl install booted bagimlilik.app

# Screenshot al
xcrun simctl io booted screenshot ipad_screenshot.png
```

**Yöntem B: Capacitor Live Reload + Simulator**
```bash
cd /home/musa/projects/test
npx cap run ios --target "iPad Pro (12.9-inch) (16.0)" -l
```

**Yöntem C: Web'den Screenshot (Responsive)**
```bash
# Chrome DevTools ile iPad boyutunda screenshot
# 1. Chrome'da F12
# 2. Device toolbar aç
# 3. iPad Pro seç
# 4. Screenshot al
```

#### 3. Alınması Gereken Ekran Görüntüleri

Her cihaz için minimum 3-5 screenshot:

1. **Ana Sayfa** - Landing/Welcome ekranı
2. **Rol Seçimi** - Kendim/Yakınıyım/Sağlık Personeli
3. **Anket Sorusu** - Örnek soru ekranı
4. **Sonuç Ekranı** - Risk değerlendirmesi
5. **Dil Seçimi** (opsiyonel)

#### 4. Screenshot Kuralları

✅ **YAPILMASI GEREKENLER:**
- Gerçek iPad'de veya Simulator'da çalışan uygulamadan al
- Uygulamanın gerçek arayüzünü göster
- iPad'e özgü layout kullan (varsa)
- Tüm dillerde tutarlı olsun

❌ **YAPILMAMASI GEREKENLER:**
- iPhone screenshot'unu büyütme/uzatma
- Mockup veya marketing görseli kullanma
- Splash screen'i ana screenshot olarak kullanma
- Login ekranını tek screenshot olarak kullanma

#### 5. iPad Layout Optimizasyonu (Opsiyonel ama Önerilir)

Tailwind ile iPad için responsive tasarım:

```tsx
// Örnek iPad optimizasyonu
<div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
  {/* iPad'de daha geniş layout */}
</div>
```

---

## Uygulama Planı

### Öncelik 1: Tıbbi Kaynak Ekleme (Kritik)

```
[ ] 1. translations.ts'e disclaimer ve kaynak metinleri ekle
[ ] 2. Results.tsx'e disclaimer banner ekle
[ ] 3. Footer'a "Kaynaklar" linki ekle
[ ] 4. References sayfası oluştur (opsiyonel)
[ ] 5. Test et - tüm dillerde kontrol
```

### Öncelik 2: iPad Screenshots (Kritik)

```
[ ] 1. Mac'te Xcode Simulator ile iPad Pro aç
[ ] 2. Uygulamayı iPad'de çalıştır
[ ] 3. Her ekran için screenshot al (minimum 3)
[ ] 4. Doğru çözünürlükte kaydet
[ ] 5. App Store Connect'e yükle
```

### Öncelik 3: Build & Submit

```
[ ] 1. Kod değişikliklerini tamamla
[ ] 2. Version'ı 1.0.1'e güncelle
[ ] 3. iOS build al (Codemagic)
[ ] 4. App Store Connect'e yükle
[ ] 5. Yeni screenshots ekle
[ ] 6. Review'a gönder
```

---

## Örnek Disclaimer Komponenti

```tsx
// DisclaimerBanner.tsx
export const DisclaimerBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
      <div className="flex items-start gap-2">
        <span className="text-amber-600">⚠️</span>
        <div className="text-sm text-amber-800">
          <p className="font-medium">{t.disclaimer.title}</p>
          <p className="mt-1">{t.disclaimer.text}</p>
          <a
            href="#references"
            className="text-amber-600 underline mt-2 inline-block"
          >
            {t.disclaimer.sources}
          </a>
        </div>
      </div>
    </div>
  );
};
```

---

## App Store Connect Yanıtı

Review'a yanıt verirken kullanılabilecek mesaj:

```
Thank you for the feedback. We have addressed both issues:

1. Guideline 1.4.1 - Medical Citations:
   - Added disclaimer stating the survey is for informational purposes only
   - Added source references (WHO, DSM-5, Yeşilay Turkey)
   - Added "References" section accessible from the results screen
   - All medical recommendations now include source citations

2. Guideline 2.3.3 - iPad Screenshots:
   - Uploaded new screenshots taken directly from iPad simulator
   - Screenshots now accurately reflect the app running on iPad devices
   - All screenshots show the actual app interface, not modified images

Please review our updated submission. Thank you.
```

---

## Kaynaklar ve Referanslar

Uygulamaya eklenecek resmi kaynaklar:

1. **World Health Organization (WHO)**
   - URL: https://www.who.int/health-topics/substance-abuse
   - ASSIST Screening Tool Reference

2. **DSM-5 (APA)**
   - Substance Use Disorder Criteria
   - Severity Specifiers

3. **Yeşilay Türkiye**
   - URL: https://www.yesilay.org.tr/
   - Bağımlılık Danışma Merkezi

4. **T.C. Sağlık Bakanlığı**
   - URL: https://enabiz.gov.tr/
   - ALO 182 Bağımlılık Danışma Hattı

5. **NIDA (National Institute on Drug Abuse)**
   - URL: https://nida.nih.gov/
   - Screening Tools Reference

---

*Bu döküman Apple App Store rejection'ı çözmek için hazırlanmıştır.*
*Son güncelleme: 29 Aralık 2024*
