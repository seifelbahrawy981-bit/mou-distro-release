# MOU Distro — النسخة الأولية

واجهة عربية متجاوبة للمناديب ولوحة الويب في نفس المشروع.

## التشغيل

افتح `index.html` في المتصفح. لا يحتاج خادمًا أو تثبيتًا لهذه النسخة الاستعراضية.

## ما هو جاهز

- دخول تجريبي باسم مستخدم وكلمة مرور غير فارغين.
- لوحة رئيسية ومبيعات وتحصيلات ومرتجعات ومديونيات.
- تصميم يعمل على الهاتف والكمبيوتر ويستخدم شعار MOU Distro.
- بيانات تجريبية مستقلة في `app.js`، تُستبدل لاحقًا ببيانات الشيت وواجهة API.

## النشر وملف APK

التطبيق أصبح PWA ويمكن تغليفه كـ APK عبر Capacitor. قبل بناء نسخة الإنتاج، استبدل `APP_URL` في `capacitor.config.ts` برابط HTTPS المنشور للداشبورد. بعد ذلك استخدم:

1. `npm install`
2. `npx cap add android`
3. `npx cap sync android`
4. `cd android && gradlew.bat assembleRelease`

ستجد APK الناتج في `android/app/build/outputs/apk/release/`.

## بناء APK مجانًا عبر GitHub

يوجد ملف GitHub Actions في `.github/workflows/build-apk.yml`. ارفع المشروع إلى مستودع GitHub ثم شغّل `Build MOU Distro APK` من تبويب Actions. ستجد ملف `MOU-Distro-APK` في نتائج التشغيل.
