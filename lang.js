function changeLang(l) {
  var isAr = (l === "ar");
  var isFr = (l === "fr");
  document.documentElement.dir = isAr ? "rtl" : "ltr";

  document.getElementById("statusBadge").innerText = isAr ? "✅ النظام نشط ويعمل بنجاح 100%" : (isFr ? "✅ Système actif à 100%" : "✅ System Active 100%");
  document.getElementById("piText").innerText = isAr ? "π منظومة حماية رواد Pi Network وأصول Web3 — أمان متكامل لمحفظتك الرقمية" : (isFr ? "π Bouclier de sécurité Pi Network & Web3 — Protection totale de vos actifs" : "π Pi Network & Web3 Security Shield — Complete protection for your digital assets");
  document.getElementById("tnTag").innerText = isAr ? "🇹🇳 مجتمع تونس الرقمي" : (isFr ? "🇹🇳 Communauté Tunisie" : "🇹🇳 Tunisia Community");
  document.getElementById("denetTitle").innerText = isAr ? "☁️ تحكّم في بياناتك مع DeNet 🔐 — تخزين لامركزي ومكافآت Watcher Node" : (isFr ? "☁️ Contrôlez vos données avec DeNet 🔐 — Stockage décentralisé & Watcher Node" : "☁️ Control Your Data with DeNet 🔐 — Decentralized Storage & Watcher Node");
  document.getElementById("denetSub").innerText = isAr ? "خزّن ملفاتك بأمان على شبكة لامركزية وفعّل Watcher Node على هاتفك لكسب مكافآت وتأمين الشبكة." : (isFr ? "Stockez vos fichiers en sécurité et activez Watcher Node sur mobile pour gagner des récompenses." : "Store files safely on a decentralized network and run Watcher Node on mobile to earn rewards.");
  document.getElementById("refCopyBtn").innerText = isAr ? "نسخ رمز الإحالة 📋" : (isFr ? "Copier le code 📋" : "Copy Referral Code 📋");
  document.getElementById("welcomeBtn").innerText = isAr ? "مكافأة ترحيبية 🚀" : (isFr ? "Bonus de bienvenue 🚀" : "Welcome Bonus 🚀");

  document.getElementById("tUsb").innerText = isAr ? "🔌 فاحص فيروسات USB والملفات" : (isFr ? "🔌 Scanner USB & Fichiers" : "🔌 USB & File Malware Scanner");
  document.getElementById("dUsb").innerText = isAr ? "اختر ملفاً من الفلاشة لفحص امتداده." : (isFr ? "Vérifiez l'extension des fichiers suspects." : "Check file extensions for dangerous scripts.");
  document.getElementById("bUsb").innerText = isAr ? "فحص الملف 🛡️" : (isFr ? "Scanner le fichier 🛡️" : "Scan File 🛡️");

  document.getElementById("tPhone").innerText = isAr ? "📱 فاحص أمان الهاتف والجهاز" : (isFr ? "📱 Sécurité Mobile & Appareil" : "📱 Phone & Device Security");
  document.getElementById("dPhone").innerText = isAr ? "تحليل بيئة الجهاز والاتصال المشفر." : (isFr ? "Analyse de l'environnement et connexion chiffrée." : "Analyze device environment and encrypted connection.");
  document.getElementById("bPhone").innerText = isAr ? "فحص الجهاز 🔍" : (isFr ? "Vérifier l'appareil 🔍" : "Scan Device 🔍");

  document.getElementById("tPass").innerText = isAr ? "🔑 مولد وفاحص كلمات المرور" : (isFr ? "🔑 Générateur de Mots de Passe" : "🔑 Password Generator & Checker");
  document.getElementById("dPass").innerText = isAr ? "إنشاء كلمات مرور قوية وفحص أمانها." : (isFr ? "Créez et testez des mots de passe forts." : "Create unbreakable passwords and test strength.");
  document.getElementById("bGen").innerText = isAr ? "توليد" : (isFr ? "Générer" : "Generate");
  document.getElementById("bCopy").innerText = isAr ? "نسخ 📋" : (isFr ? "Copier 📋" : "Copy 📋");

  document.getElementById("tCry").innerText = isAr ? "🔒 خزنة تشفير الرسائل" : (isFr ? "🔒 Coffre de Chiffrement" : "🔒 Secret Message Vault");
  document.getElementById("bEnc").innerText = isAr ? "تشفير 🔒" : (isFr ? "Chiffrer 🔒" : "Encrypt 🔒");
  document.getElementById("bDec").innerText = isAr ? "فك التشفير 🔓" : (isFr ? "Déchiffrer 🔓" : "Decrypt 🔓");

  document.getElementById("tUrl").innerText = isAr ? "🌐 فحص الروابط المشبوهة" : (isFr ? "🌐 Scanner de Liens Suspects" : "🌐 Phishing Link Scanner");
  document.getElementById("dUrl").innerText = isAr ? "كشف الروابط غير المشفرة والتصيد." : (isFr ? "Détectez les liens non sécurisés et le phishing." : "Detect unencrypted URLs and phishing traps.");
  document.getElementById("bUrl").innerText = isAr ? "فحص الرابط 🔍" : (isFr ? "Vérifier le lien 🔍" : "Scan Link 🔍");

  document.getElementById("tWal").innerText = isAr ? "🪙 مدقق محافظ الكريبتو و Pi" : (isFr ? "🪙 Validateur Portefeuille Crypto & Pi" : "🪙 Crypto & Pi Wallet Validator");
  document.getElementById("dWal").innerText = isAr ? "التحقق من صحة عنوان المحفظة." : (isFr ? "Vérifiez la validité de l'adresse wallet." : "Verify wallet address format before sending.");
  document.getElementById("bWal").innerText = isAr ? "تحقق من العنوان π" : (isFr ? "Vérifier l'adresse π" : "Verify Address π");

  document.getElementById("tMail").innerText = isAr ? "📧 فحص البريد الإلكتروني" : (isFr ? "📧 Vérificateur d'Email" : "📧 Email Security Checker");
  document.getElementById("dMail").innerText = isAr ? "كشف البريد المؤقت الوهمي." : (isFr ? "Détectez les emails temporaires jetables." : "Detect disposable temporary emails.");
  document.getElementById("bMail").innerText = isAr ? "فحص البريد ⚡" : (isFr ? "Vérifier l'email ⚡" : "Check Email ⚡");

  document.getElementById("tScore").innerText = isAr ? "✅ مؤشر الحصانة الرقمية" : (isFr ? "✅ Score d'Immunité Numérique" : "✅ Digital Immunity Score");
  document.getElementById("c1").innerText = isAr ? " تفعيل المصادقة الثنائية (2FA)" : (isFr ? " Activer la double authentification (2FA)" : " Enable Two-Factor Authentication (2FA)");
  document.getElementById("c2").innerText = isAr ? " حفظ عبارة مرور Pi بأمان" : (isFr ? " Garder la phrase secrète Pi en sécurité" : " Keep Pi Passphrase safe offline");
  document.getElementById("c3").innerText = isAr ? " تحديث النظام باستمرار" : (isFr ? " Mettre à jour le système régulièrement" : " Keep OS and browser updated");
  document.getElementById("c4").innerText = isAr ? " تجنب ملفات USB المجهولة" : (isFr ? " Éviter les fichiers USB inconnus" : " Avoid unknown USB executable files");

  document.getElementById("tDenetCard").innerText = isAr ? "☁️ التخزين اللامركزي و Watcher Node" : (isFr ? "☁️ Stockage Décentralisé & Watcher Node" : "☁️ Decentralized Storage & Watcher Node");
  document.getElementById("dDenetCard").innerText = isAr ? "خزّن ملفاتك بأمان على شبكة DeNet وفعّل Watcher Node على هاتفك لكسب المكافآت وتأمين الشبكة." : (isFr ? "Protégez vos fichiers sur DeNet et activez Watcher Node pour gagner des récompenses." : "Store files securely on DeNet and run Watcher Node on mobile to earn rewards.");
  document.getElementById("bDenetCard").innerText = isAr ? "انضم واحصل على مكافأة ترحيبية 🚀" : (isFr ? "Rejoindre avec bonus 🚀" : "Join & Claim Bonus 🚀");
}